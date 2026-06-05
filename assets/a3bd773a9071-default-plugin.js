/*

Plugin code for ozpb: default - div IDs are the same as adunit.code

This allows very flexible matching;
1 - googletag slot elementIds are the same as the adunit codes.
2 - configVars.adunitCodeMatch - see the description in the ...core.js file

NOTE THAT the prebid object is called: ozwrap_pbjs & adunits are window.ozAdUnits

UPDATED 20240925 - updates for instream 
UPDATED 20230222 - check configVars.useDfpTargeting (true/false/whitelist)
BUG FIX 20230327 - update the matched adunit.code, also properly detect if NO matches
UPDATED 20230427 - implement configVars.adunitsUseSlotSizes (previously only torstar plugin implemented this)
BUG FIX 20230607 - changed `let ozoneBid =` code.
UPDATED - do not add "fluid" as adunit size.
20230807 - added functionality : configVars.catchallMapping : [{'regex': /^mn-mobile-mpu.+$/, 'adunitCode' : 'mn-mobile-mpu'}]
NOTE that this cascades after adunitCodeMatch so the modified adunitcode can be matched & mapped to a catch-all (very unlikey but...):
configVars.adunitCodeMatch -> configVars.catchallMapping
20240115 - added instream direct mapping

TESTED WITH :

- multiple adunit matches for one adslot
- configVars.useDfpTargeting (true/false/whitelist)

NOTE we set in the adunit targeting: k<string>=v<string> not k<string>=v<Array> as found in the adslot

*/


/**
 * 20230808 - this can be used **instead of** adding configVars.catchallMapping.
 * If this is set then there is no need for the configVars key, and we will not look for it.
 * @type [{adunitCode: string, regex: RegExp}]
 */
// window.catchallMapping = [{'regex': /^mn-mobile-mpu.+$/, 'adunitCode' : 'mn-mobile-mpu'}]; /* 20230807 IF the adunit code matches the regex then use the adunit with this adunitCode */
window.catchallMapping = null;


/**
 *
 * This function is required for all plugins.
 * Discover the ozAdUnit(s) that match this gptAdUnit and push them into the goodAdUnits array.
 *
 * - throw an Exception if the key you are looking for is not found on this gptAdUnit or other mis-configuration error
 * - return the number of adunits that were pushed to goodAdUnits
 *
 * @param goodAdUnits
 * @param gptAdUnit
 * @param initialGptTargeting like [{
 *     "position": [
 *         "mpu"
 *     ],
 *     "site_section": [
 *         "articlesMpu"
 *     ],
 *     "page_type": [
 *         "topicMpu"
 *     ],
 *     "ad_page": [
 *         "mytestpageMpu"
 *     ]
 * }]
 * @param configVars Object - the full configVars
 * @throws Exception
 * @return int the number of adunits added (pushed) to goodAdUnits
 */
function pluginPushAdunitForGptAdSlot(goodAdUnits, gptAdUnit, initialGptTargeting, configVars) {

  let gptElementId = gptAdUnit.getSlotElementId();
  ozoneLog('pluginPushAdunitForGptAdSlot received initialGptTargeting: ', initialGptTargeting);
  let adunitCodeMatch = configVars.adunitCodeMatch; // might be null or '' or contain divid -> adunit.code matching criteria
  let catchallMapping = window.catchallMapping ?? configVars.catchallMapping;
  let adunits;
  let matchThis = gptElementId;
  if (adunitCodeMatch) {
    matchThis = adunitCodeMatch.replace('[div_id]', gptElementId);
    // we need to substitute [keys] in the string, then match on adunit.code
    let simplifiedPageTargeting = simplifyGptTargeting(getPageTargeting());
    let simplifiedAdslotTargeting = simplifyGptTargeting(initialGptTargeting);
    let allTargeting = Object.assign(simplifiedPageTargeting, simplifiedAdslotTargeting);
    let keyPlaceholders = matchThis.match(/\[[^\]]+\]/g) || [];
    ozoneLog('found key placeholders in adunit name to match:', keyPlaceholders);
    let arrKeys = keyPlaceholders.map(m => {
      return (m.replaceAll(/[\[\]]/g, ''));
    });
    ozoneLog(`pluginPushAdunitForGptAdSlot Going to try to parse matchThis string: ${matchThis} with object: `, allTargeting);
    for (let k of arrKeys) { // div_id will never be in the string at this point
      matchThis = matchThis.replace(`[${k}]`, allTargeting[k]);
      ozoneLog(`matchThis = ${matchThis}`);
    }
  }
  if (Array.isArray(catchallMapping)) {
    ozoneLog("catchallMapping is an array... inspecting it now...");
    /* 20230807 IF the adunit code matches the regex then use the adunit with this adunitCode */
    for (let obj of catchallMapping) {
      ozoneLog(obj);
      let regex = obj.regex;
      if (matchThis.match(regex)) {
        matchThis = obj.adunitCode;
        ozoneLog(`catchallMapping MATCHED ${obj.regex}, set matchThis to ${matchThis}`);
        break; // no need to continue
      } else {
        ozoneLog(`catchallMapping did not match ${obj.adunitCode} with ${obj.regex}`);
      }
    }
  }
  // match our matchThis string -> adunit.code
  ozoneLog(`pluginPushAdunitForGptAdSlot Going to try to match adunit.codes to ${matchThis}`);
  adunits = window.ozAdUnits.filter(element => element.code === matchThis);

  if (adunits.length === 0) { // 20230327 - this was incorrect : looking for !adunits
    ozoneLog('pluginPushAdunitForGptAdSlot failed to find any adunits matching element id: ' + matchThis);
    return 0;
  }
  ozoneLog('pluginPushAdunitForGptAdSlot found matching adunits: ', adunits);
  // useDfpTargeting; this is a 2-step process:
  // 1: look for the page level targeting key
  // 2: look for slot level targeting key
  let useDfpTargeting = configVars.useDfpTargeting; // true, false or [...whitelist keys]
  let pageTargeting;
  ozoneLog('pluginPushAdunitForGptAdSlot working with true/false/whitelist useDfpTargeting=', useDfpTargeting);
  if (useDfpTargeting === true) {
    ozoneLog('pluginPushAdunitForGptAdSlot mapping all gpt page + slot targeting keys to adunit(s)');
    pageTargeting = getPageTargeting();
    for (let adunit of adunits) {
      let ozoneBid = adunit.bids.filter(o => o.bidder === 'ozone'); // find the ozone bid
      if (ozoneBid && (Array.isArray(ozoneBid) && ozoneBid.length > 0)) {
        if (!ozoneBid[0].params.hasOwnProperty('customData')) {
          ozoneBid[0].params.customData = [{ settings: {}, targeting: {} }];
        }
        Object.assign(ozoneBid[0].params.customData[0].targeting, simplifyGptTargeting(pageTargeting));
        Object.assign(ozoneBid[0].params.customData[0].targeting, simplifyGptTargeting(initialGptTargeting));
      }
      let adClone = JSON.parse(JSON.stringify(adunit));
      adClone.code = gptElementId;
      tryUseSlotSizes(adClone, configVars, gptAdUnit);
      goodAdUnits.push(adClone);
    }
  } else if (Array.isArray(useDfpTargeting)) {
    ozoneLog('pluginPushAdunitForGptAdSlot apply whitelisted keys of gpt targeting to adunit(s)');
    pageTargeting = getPageTargeting(useDfpTargeting);
    for (let adunit of adunits) {
      for (let key of useDfpTargeting) {
        if (pageTargeting.hasOwnProperty(key)) {
          ozoneLog('pluginPushAdunitForGptAdSlot setting adunit page/slot targeting for key:' + key);
          setAdunitOzoneTargeting(adunit, pageTargeting, key);
        }
        if (initialGptTargeting.hasOwnProperty(key)) {
          setAdunitOzoneTargeting(adunit, initialGptTargeting, key);
        }
      }
      let adClone = JSON.parse(JSON.stringify(adunit));
      adClone.code = gptElementId; // 20230327 - this was missing - otherwise adunit.code might be "top|property|article|mn-leaderboard-desktop"
      tryUseSlotSizes(adClone, configVars, gptAdUnit);
      goodAdUnits.push(adClone);
    }
  } else {
    ozoneLog("pluginPushAdunitForGptAdSlot don't push any dfp keys into targeting");
    // goodAdUnits.push(...adunits); // 20230327 - this is not right - we need to replace the adunit.code to be the actual adunit code ozone will recognise
    for (let adunit of adunits) {
      let adClone = JSON.parse(JSON.stringify(adunit));
      adClone.code = gptElementId; // 20230327 - this was missing - otherwise adunit.code might be "top|property|article|mn-leaderboard-desktop"
      tryUseSlotSizes(adClone, configVars, gptAdUnit);
      goodAdUnits.push(adClone);
    }
  }
  if (configVars.addTestgroupKey) {
    addTestgroup(goodAdUnits, configVars.testgroupKeyName, configVars.testgroupVal);
  }

  return adunits.length;
}


/**
 * Extremely simple function to see if we can find the window.ozAdUnits element swith `code` matching adUnitId
 * NOTE we will only use ONE adunit
 * @param adUnitId string
 * @param configVars Object - the full configVars
 */
function pluginGetInstreamAdUnit(adUnitId, configVars) {
  let adunits = window.ozAdUnits.filter(
    element => element.code === adUnitId
  );
  if (adunits.length < 1) {
    ozoneError(`pluginGetInstreamAdUnit Failed to find an adunit for ${adUnitId}`); 
    return null;
  }
  let adUnit = adunits[0];
  let adClone = JSON.parse(JSON.stringify(adUnit)); // we might push targeting onto it etc

  let useDfpTargeting = configVars.useDfpTargeting; // true, false or [...whitelist keys]
  let pageTargeting;
  ozoneLog('pluginGetInstreamAdUnit working with true/false/whitelist useDfpTargeting=', useDfpTargeting);
  if (useDfpTargeting === true) {
    ozoneLog('pluginGetInstreamAdUnit mapping all gpt page targeting keys to adunit(s)');
    pageTargeting = getPageTargeting();
    let ozoneBid = adClone.bids.filter(o => o.bidder === 'ozone'); // find the ozone bid - in reality there should only ever be the ozone bid I think
    if (ozoneBid && (Array.isArray(ozoneBid) && ozoneBid.length > 0)) {
      if (!ozoneBid[0].params.hasOwnProperty('customData')) {
        ozoneBid[0].params.customData = [{ settings: {}, targeting: {} }];
      }
      Object.assign(ozoneBid[0].params.customData[0].targeting, simplifyGptTargeting(pageTargeting));
    }
  } else if (Array.isArray(useDfpTargeting)) {
    ozoneLog('pluginGetInstreamAdUnit apply whitelisted keys of gpt targeting to adunit(s)');
    pageTargeting = getPageTargeting(useDfpTargeting);
    for (let key of useDfpTargeting) {
      if (pageTargeting.hasOwnProperty(key)) {
        ozoneLog('pluginGetInstreamAdUnit setting adunit page/slot targeting for key:' + key);
        setAdunitOzoneTargeting(adClone, pageTargeting, key);
      }
    }
  }
  try { 
    adClone.mediaTypes.video.plcmt = 1;
    adClone.mediaTypes.video.placement = 1;
  } catch (e) { 
    ozoneError('pluginGetInstreamAdUnit failed to add plcmt & placement value to instream adunit!', e); 
  } 
  return adClone;
}


/**
 * IF configVars.useSlotSizes then modify adClone by reference
 * @param adClone
 * @param configVars
 */
function tryUseSlotSizes(adClone, configVars, slot) {
  if (configVars.adunitsUseSlotSizes) {
    try {
      // adClone.mediaTypes.banner.sizes = [[970,250], [728,90]];
      adClone.mediaTypes.banner.sizes = ozMakeArrSizes(slot.getSizes());
      ozoneLog('Updated the adunit slot sizes to be what we found on googletag.pubads().getSlots() ... ', [{ width: 970, height: 250 }, { width: 728, height: 90 }]);
      // ozoneLog('Updated the adunit slot sizes to be what we found on googletag.pubads().getSlots() ... ', adClone.mediaTypes.banner.sizes);
    } catch (e) {
      ozoneLog('Failed to update the adunit slot sizes to be what we found on googletag.pubads().getSlots() (possibly not a banner type?) ', adClone);
    }
  }
}

/**
 *
 * @param arrCfSizes Array of cF objects (not sure what these are but they act like normal objects/structs)
 */
function ozMakeArrSizes(arrCfSizes) {
  let ret = [];
  for (let i = 0; i < arrCfSizes.length; i++) {
    if (typeof arrCfSizes[i] === 'object' && arrCfSizes[i].width) {
      ret.push([arrCfSizes[i].width, arrCfSizes[i].height]);
    } else {
      // ret.push(arrCfSizes[i]);
    }
  }
  return ret;
};


/**
 * unconditionally add testgroup key to all adunits
 * @param goodAdUnits
 * @param testgroupKeyName
 * @param testgroupVal
 */
function addTestgroup(goodAdUnits, testgroupKeyName, testgroupVal) {
  for (let adunit of goodAdUnits) {
    setAdunitOzoneTargeting(adunit, { [testgroupKeyName]: testgroupVal }, testgroupKeyName); // using computed property name
  }
}

/**
 *
 * @param adunit Object pass by reference - this gets the k=>v from obj appended to the 'ozone' bid on it.
 * @param obj object containing k=>v pairs, eg initialGptTargeting or pageTargeting
 * @param key string
 */
function setAdunitOzoneTargeting(adunit, obj, key) {
  let ozoneBid = adunit.bids.filter(o => o.bidder === 'ozone'); // find the ozone bid
  if (ozoneBid && (Array.isArray(ozoneBid) && ozoneBid.length > 0)) {
    setAdunitCustomTargetingKey(ozoneBid[0], key, obj[key]);
  }
}

/**
 * unconditionally add k=v to this ozoneBid, ensuring that params.customData is present
 * @param ozoneBid object by ref
 * @param k
 * @param v
 */
function setAdunitCustomTargetingKey(ozoneBid, k, v) {
  if (!ozoneBid.params.hasOwnProperty('customData')) {
    ozoneBid.params.customData = [{ settings: {}, targeting: {} }];
  }
  ozoneBid.params.customData[0].targeting[k] = Array.isArray(v) && v.length === 1 ? v[0] : v;
}



/**
 * get the whole page targeting or just for the list of keys
 * @param arrKeys Array|null|unkonwn
 * @returns {{}}
 */
function getPageTargeting(arrKeys) {
  let ret = {};
  if (!arrKeys) arrKeys = googletag.pubads().getTargetingKeys();
  googletag.pubads().getTargetingKeys().forEach(
    k => {
      if (arrKeys.indexOf(k) > -1) {
        ret[k] = googletag.pubads().getTargeting(k);
      }
    });
  return ret;
}

/**
 * Each value in targeting is an array. In reality this is always going to be a string so simplify them to a string, unless there's more than one element.
 * @param targeting
 */
function simplifyGptTargeting(targeting) {
  let ret = {};
  let keys = Object.keys(targeting);
  for (let key of keys) {
    // ozoneLog('simplifyGptTargeting doing key ' + key );
    if (!Array.isArray(targeting[key])) {
      ret[key] = targeting[key];
      continue;
    }
    if (targeting[key].length === 1) {
      ret[key] = targeting[key][0];
    } else {
      ret[key] = targeting[key];
    }
  }
  return ret;
}

ozoneLog('pluginPushAdunitForGptAdSlot 20231214 12:30 file is loaded');