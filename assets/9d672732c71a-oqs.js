//     _        _                     _                        /\
//    / \    __| |  ___   _ __   ___ | |_  __ _  _ __     =---/--\---=
//   / _ \  / _` | / _ \ | '_ \ / __|| __|/ _` || '__|     `-/    \-'     www.Adopstar.com
//  / ___ \| (_| || (_) || |_) |\__ \| |_| (_| || |         / `,.' \      Bryce Hardie v1.2.5
// /_/   \_\\__,_| \___/ | .__/ |___/ \__|\__,_||_|        /,-'  '-.\     
//                       |_|

//ad unit path logic
let pathName = window.location.pathname.split("/")[1].split("/")[0] ?
  window.location.pathname.split("/")[1].split("/")[0] :
  "homepage";
let adUnitPath = "/154725070,21624813019/" + window.location.hostname.split(".")[1];

if (
  window.location.hostname.split(".")[1].includes("com" || "co.uk" || "com.au")
) {
  adUnitPath =
    "/154725070,21624813019/" +
    window.location.hostname.split(".")[0].replace(/([^:])(\/\/+)/g, "$1/");
}

let clean_adUnitPath = adUnitPath.replace(/([^:])(\/\/+)/g, "$1/");

if (window.location.hostname.includes("spectator")) {
  if (window.location.hostname.includes(".com")) {
    clean_adUnitPath = clean_adUnitPath + "_uk";
  } else if (window.location.hostname.includes(".com.au")) {
    clean_adUnitPath = clean_adUnitPath + "_au";
  }
}

function getGtmDataLayerValue(key) {
  const fallbackValue = window.dataLayer.reduce((acc, current) => ({
    ...acc,
    ...current
  }), {})[key];
  return fallbackValue !== undefined && fallbackValue !== null ? fallbackValue : '';
}

//device kvp
const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};
let googletag_targeting = isMobile() ? "mobile" : "desktop";

//pbjs
var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

let refreshCounterObj = [];
!(function (a9, a, p, s, t, A, g) {
  if (a[a9]) return;

  function q(c, r) {
    a[a9]._Q.push([c, r]);
  }
  a[a9] = {
    init: function () {
      q("i", arguments);
    },
    fetchBids: function () {
      q("f", arguments);
    },
    setDisplayBids: function () {},
    targetingKeys: function () {
      return [];
    },
    _Q: [],
  };
  A = p.createElement(s);
  A.async = !0;
  A.src = t;
  g = p.getElementsByTagName(s)[0];
  g.parentNode.insertBefore(A, g);
})(
  "apstag",
  window,
  document,
  "script",
  "//c.amazon-adsystem.com/aax2/apstag.js"
);
apstag.init({
  pubID: "3147",
  adServer: "googletag",
  bidTimeout: 2e3,
  simplerGPT: true,
});

// gam ad units defined for refresh
const gamAdUnits = [];
const nonPrebidSlots = [];
const slotTimers = [];
const apsArray = [];
let adSlotArr = [{
    refresh: true,
    apsbidding: true,
    slotArea: ["topbanner"],
    adSizes: [
      [970, 250],
      [728, 90],
      [320, 50],
    ],
    pos: "topbanner",
  },
  {
    refresh: false,
    apsbidding: false,
    slotArea: [
      "midcontent1",
    ],
    adSizes: [
      [1, 1],
      [300, 250],
    ],
    pos: "teads",
  },
  {
    refresh: true,
    apsbidding: true,
    slotArea: [
      "midcontent2",
      "midcontent3",
      "midcontent4",
      "midcontent5",
      "midcontent6",
    ],
    adSizes: [
      [300, 250],
      [970, 250],
    ],
    pos: "",
  },
  {
    refresh: true,
    apsbidding: true,
    slotArea: ["bottombanner"],
    adSizes: [
      [970, 250],
      [728, 90],
      [320, 50],
    ],
    pos: "bottombanner",
  },
];

// adjust ad array for slots on the page
function adjustAdArray() {
  var divElements = document.getElementsByTagName("div");
  var idArray = Array.from(divElements).map(function (element) {
    return element.id;
  });
  for (i = adSlotArr.length - 1; i >= 0; i--) {
    if (adSlotArr[i].slotArea.length > 1) {
      for (let p = adSlotArr[i].slotArea.length; p >= 0; p--) {
        idArray.includes(adSlotArr[i].slotArea[p]) ?
          null :
          delete adSlotArr[i].slotArea.splice(p, 1);
        if (adSlotArr[i].slotArea.length <= 0) {
          adSlotArr.splice(i, 1);
        }
      }
    } else {
      idArray.includes(adSlotArr[i].slotArea.toString()) ?
        "included" :
        adSlotArr.splice(i, 1);
    }
  }
}

// ad unit path logic
let pageId = window.location.pathname.split("/").filter((el) => {
  return el != "";
});

let isLanding = () => {
  if (
    pageId.length <= 1 ||
    (pageId.length <= 2 && window.location.pathname.split("/")[2].length < 18)
  ) {
    return "true";
  } else {
    return "false";
  }
};

if (getGtmDataLayerValue("section")) {
  if (getGtmDataLayerValue("section").includes("category")) {
    if (getGtmDataLayerValue("section_2")) {
      pathName = getGtmDataLayerValue("section_2") === "Economy" ? 'economics' : getGtmDataLayerValue("section_2").replaceAll(" ", "-").toLowerCase();
    }
  } else {
    pathName = getGtmDataLayerValue("section").replaceAll(" ", "-").toLowerCase();
  }
} else if (isLanding() === "false") {
  pathName = "misc";
}

let articleIdVal = () => {
  if (isLanding() == "false") {
    let path = window.location.pathname;
    let pathParts = path.split("-");
    let pathPartsPop = pathParts.pop();
    return pathPartsPop;
  } else {
    return "/";
  }
};

//in viewport refresh
function addRefreshToSlot(slot) {
  let timerOn = false;
  let timer;
  const div = document.getElementById(slot.div);
  const options = {
    threshold: 0.2,
  };
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      timer = setInterval(() => {
        slot.timer += 1;
        // console.log(slot.timer, slot.div); // add in for QA
        if (slot.timer > 19) {
          slot.timer = 0;
          googletag.cmd.push(() => {
            pbjs.que.push(() => {
              pbjs.rp.requestBids({
                gptSlotObjects: [slot.slot],
                callback: (bidResponses) => {
                  pbjs.que.push(() => {
                    pbjs.setTargetingForGPTAsync(slot.slot.getSlotElementId());
                  });
                },
                timeout: 1000,
              });
            });
            apstag.fetchBids({
                slots: apsArray.filter(
                  (apsSlot) => apsSlot.slotID === slot.div
                ),
                timeout: 1000,
              },
              (bids) => {
                googletag.cmd.push(() => {
                  apstag.setDisplayBids();
                });
              }
            );
            googletag.pubads().refresh([slot.slot], {
              changeCorrelator: false
            });
            if (slot.slot.getTargeting("rfs").length == 0) {
              slot.slot.setTargeting("rfs", "1");
            } else {
              slot.slot.setTargeting(
                "rfs",
                parseInt(slot.slot.getTargeting("rfs")) + 1
              );
            }
          });
        }
      }, 1000);
      timerOn = true;
    } else if ((timerOn = true)) {
      clearInterval(timer);
    }
  }, options);
  observer.observe(div);
}

let createSlot = () => {
  adSlotArr.map((currentAdSlotsData) => {
    currentAdSlotsData.slotArea.map((slotName) => {
      googletag.cmd.push(() => {
        if (
          pageId.length <= 1 ||
          (pageId.length <= 2 &&
            window.location.pathname.split("/")[2].length < 18)
        ) {
          adUnitPath = [clean_adUnitPath] +
            "/" + [pathName] +
            "/landingpage/" + [slotName];
        } else {
          adUnitPath = [clean_adUnitPath] + "/" + [pathName] + "/article/" + [slotName];
        }
        googletag.enableServices();

        let TopBannerSizeMap = googletag
          .sizeMapping()
          .addSize([1024, 100], [970, 250])
          .addSize([768, 100], [728, 90])
          .addSize([0, 0], [320, 50])
          .build();

        let TopBannerSizeMapUnherd = googletag
          .sizeMapping()
          .addSize([1024, 100], [970, 250])
          .addSize([768, 100], [728, 90])
          .addSize([0, 0], [320, 50])
          .build();

        let MidContentSizeMap = googletag
          .sizeMapping()
          .addSize([1020, 0], [970, 250])
          .addSize([0, 0], [300, 250])
          .build();

        let MidContentSizeMapUnherd = googletag
          .sizeMapping()
          .addSize([0, 0], [300, 250])
          .build();

        let currentSlot = googletag
          .defineSlot(adUnitPath, currentAdSlotsData.adSizes, slotName)
          .addService(googletag.pubads())
          .setTargeting(
            "pos",
            currentAdSlotsData.pos == "" ? slotName : currentAdSlotsData.pos
          );

        if (slotName.includes("topbanner") || slotName.includes("bottombanner")) {
          if (clean_adUnitPath.includes("unherd")) {
            currentSlot.defineSizeMapping(TopBannerSizeMapUnherd);
          } else {
            currentSlot.defineSizeMapping(TopBannerSizeMap);
          }
        } else if (slotName.includes("midcontent")) {
          if (clean_adUnitPath.includes("unherd")) {
            currentSlot.defineSizeMapping(MidContentSizeMapUnherd);
          } else {
            currentSlot.defineSizeMapping(MidContentSizeMap);
          }
        }

        if (!slotName.includes("midcontent1")) {
          gamAdUnits.push(currentSlot);
        } else {
          nonPrebidSlots.push(currentSlot);
        }

        slotTimers.push({
          div: slotName, //slotarea
          slot: currentSlot, //slot made
          timer: 0, // start timer
          refresh: currentAdSlotsData.refresh, //refresh status
        });
        if (currentAdSlotsData.apsbidding) {
          apsArray.push({
            slotID: slotName,
            slotName: currentAdSlotsData.pos == "" ? slotName : currentAdSlotsData.pos,
            sizes: currentAdSlotsData.adSizes,
          });
        }
      });
    });
  });
  googletag.cmd.push(function () {
    googletag
      .pubads()
      .setTargeting("device", googletag_targeting)
      .setTargeting("url", window.location.href)
      .setTargeting(
        "article_title",
        window.location.pathname == undefined ? null : window.location.pathname
      )
      .setTargeting("article_id", articleIdVal())
      .setTargeting(
        "section",
        window.location.pathname == "/" ?
        "homepage" :
        getGtmDataLayerValue("section_2") ?
        getGtmDataLayerValue("section_2") === "Economy" ? 'economics' : getGtmDataLayerValue("section_2").replaceAll(" ", "-").toLowerCase() :
        window.location.pathname.split("/")[1].split("/")[0]
      )
      .setTargeting("isLanding", isLanding());
    googletag.pubads().refresh(nonPrebidSlots, {
      changeCorrelator: false
    });
    initialisePbjsSlots();
    apsAuction();
  });
};

// aps and prebid auctions
let prebidAuction = () => {
  if (pbjs.initAdserverSet) return;
  pbjs.initAdserverSet = true;
  googletag.cmd.push(() => {
    pbjs.que.push(() => {
      pbjs.setTargetingForGPTAsync();
    });
    googletag.pubads().refresh(gamAdUnits, {
      changeCorrelator: false
    });
  });
};
let initialisePbjsSlots = () => {
  googletag.cmd.push(function () {
    pbjs.que.push(function () {
      pbjs.rp.requestBids({
        gptSlotObjects: gamAdUnits,
        callback: (bidResponses) => {
          prebidAuction();
        },
        timeout: 1000,
      });
    });
  });
};
let apsAuction = async () => {
  apstag.fetchBids({
      slots: apsArray,
      timeout: 1000,
    },
    (bids) => {
      googletag.cmd.push(function () {
        apstag.setDisplayBids();
      });
    }
  );
};

//ppid
function setIdentifier() {
  var identifier = "";
  const min = 32;
  const max = 150;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < randomNum; i++) {
    let numOrLetter = Math.floor(Math.random() * 2);
    numOrLetter === 1 ?
      (identifier += alphabet.charAt(Math.floor(Math.random() * 25))) :
      (identifier += Math.floor(Math.random() * 9));
  }
  var expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 30);

  document.cookie =
    "OQS_PPID=" + identifier + "; expires=" + expirationDate.toUTCString();
  googletag.pubads().setPublisherProvidedId(identifier);
  googletag.enableServices();
}

function ppid() {
  let cookieStr = document.cookie.split(";");
  let hasPpid = false;
  for (let i = 0; i < cookieStr.length; i++) {
    if (cookieStr[i].includes("OQS_PPID")) {
      hasPpid = true;
      ppidIdentifier = cookieStr[i].split("=")[1];
    }
  }
  if (hasPpid) {
    if (ppidIdentifier.length >= 32 && ppidIdentifier.length <= 150) {
      googletag.pubads().setPublisherProvidedId(ppidIdentifier);
      googletag.enableServices();
    } else {
      setIdentifier();
    }
  }
  if (!hasPpid) {
    setIdentifier();
  }
}

// calls ad code functions
let mainAdCall = () => {
  googletag.cmd.push(async () => {
    googletag.pubads().enableSingleRequest();
    ppid();
    await createSlot();
    slotTimers.forEach((slot) => {
      if (slot.refresh == true) {
        addRefreshToSlot(slot);
      }
    });
  });
};

// event listener for consent
(function () {
  const TCF_API_TIMEOUT = 2000; // Total time to wait for TCF API (milliseconds)
  const TCF_API_POLL_INTERVAL = 50; // How often to check (milliseconds)
  let pollAttempts = 0;
  const maxPollAttempts = TCF_API_TIMEOUT / TCF_API_POLL_INTERVAL;

  function adCall() {
    adjustAdArray();
    mainAdCall();
  }

  function executePersonalizedLogic(tcData) {
    console.log('TCF API ready. Executing personalized logic with:', tcData);
    if (tcData && typeof tcData.gdprApplies !== 'undefined' && !tcData.gdprApplies) {
      console.log('GDPR does not apply. Showing ads immediately.');
      adCall();
      return;
    }
    if (tcData && tcData.purpose && tcData.purpose.consents && tcData.purpose.consents[1]) {
      console.log('Consent for Purpose 1 (storage) granted.');
      adCall();
    } else {
      console.log('Consent for Purpose 1 (storage) denied or not given.');
      adCall();
    }
  }

  function checkTcfAvailability() {
    if (typeof window.__tcfapi === 'function') {
      console.log('__tcfapi found. Attempting to get TCData.');
      try {
        window.__tcfapi('addEventListener', 2, function (tcData, success) {
          if (success && (tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete')) {
            executePersonalizedLogic(tcData);
          } else if (!success) {
            console.error('TCF API addEventListener failed:', tcData);
            adCall();
          }
        });
      } catch (e) {
        console.log('Error registering TCF API listener:', e);
        adCall();
      }
      return;
    }
    if (pollAttempts < maxPollAttempts) {
      pollAttempts++;
      setTimeout(checkTcfAvailability, TCF_API_POLL_INTERVAL);
    } else {
      // Timeout reached, TCF API not found
      console.warn('TCF API not found within timeout.');
      adCall();
    }
  }

  // Start the check when the DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkTcfAvailability);
  } else {
    checkTcfAvailability();
  }
})();