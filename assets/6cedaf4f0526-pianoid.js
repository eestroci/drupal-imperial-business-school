var isEdge = /Edg/.test(navigator.userAgent);

// Legacy-compatible function to call the LiveRamp API
function sendToLiveRamp(email = '', type = 0) {
  if (email !== '') {
    fetch('/api/liveramp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, type }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success && data.emlhs && data.uid2) {
          // Set localStorage to match legacy behavior
          localStorage.setItem('emlhs', data.emlhs);
          localStorage.setItem('uid2', data.uid2);

          // Handle apstag RPA if available (matching legacy)
          if (typeof window.apstag !== 'undefined') {
            const hashedRecord = [{ type: 'email', record: data.emlhs }];
            const tokenConfig = { hashedRecords: hashedRecord };
            nw_log('prebid_ads_tokenConfig', tokenConfig);
            window.apstag.rpa(tokenConfig);
          }
        }
      })
      .catch((error) => {
        console.error('sendToLiveRamp error:', error);
      });
  }
}

function getCookie(c) {
  c += '=';
  for (var d = document.cookie.split(';'), b = 0; b < d.length; b++) {
    for (var a = d[b]; ' ' == a.charAt(0); ) a = a.substring(1, a.length);
    if (0 == a.indexOf(c)) return a.substring(c.length, a.length);
  }
  return '';
}
function setCookie(name, value, days, domain) {
  var date,
    expires,
    host = '';
  if (days) {
    date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toGMTString();
    if (domain) host = ';domain=' + domain;
  } else {
    expires = '; expires=0';
  }
  document.cookie = name + '=' + value + expires + host + '; path=/';
}
const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};
var document_domain = document.domain.replace('www.', ''); //document_domain=document_domain.replace("subscribe.","");document_domain=document_domain.replace("myaccount.","");

let loginHeader = document.getElementById('login-header');
let loginBurger = document.getElementById('login-burger');
let loginSpecial = document.querySelectorAll('.pelcro-login-button');
let loginHub = document.getElementById('login-hub');
let loginHubBurger = document.getElementById('login-hub-burger');

if (typeof action_origin === 'undefined') {
  var action_origin = window.wo_pagetype;
}

function nw_log(l) {
  console.log('nw_log:', l);
}

if (typeof sendToLiveRamp !== 'function') {
  //why dns_prefetch was not loaded?
  nw_log('NO sendToLiveRamp');
}

const loginSuccess = () => {
  const loginTextSpan = document.getElementById('login-text-span');

  if (loginTextSpan) {
    loginTextSpan.innerHTML = '';
    if (loginHeader) loginTextSpan.classList.add('user-logged-in');
    if (loginBurger) loginTextSpan.classList.add('user-logged-in');
    if (loginHubBurger) loginTextSpan.classList.add('user-logged-in');
  }

  const vfContainer = document.getElementById('vfContainer');
  if (vfContainer) vfContainer.style.display = 'inline-flex';

  document
    .querySelectorAll('.bellContainer')
    .forEach((cont) => (cont.style.display = 'inline-flex'));
  document.querySelectorAll('.login-btn').forEach((cont) => (cont.style.minWidth = 'auto'));

  const vfTray = document.getElementById('vfTray');
  const mainContainer = document.getElementById('main-container');
  if (vfTray) {
    vfTray.addEventListener('click', function () {
      window.vf.$publish('tray', 'open', mainContainer);
    });
  }

  const jwtCookie = getCookie('nwsubl');
  if (jwtCookie) {
    var jwt = parseJwt(jwtCookie);
    if (jwt) {
      if (typeof sendToLiveRamp === 'function') {
        sendToLiveRamp(jwt.email);
      }
    }
  }

  //VIAFOURA LOGIN
  window.vfQ = window.vfQ || [];
  if (window.vf && window.vf.session) {
    (async () => {
      await window.vf.session.login.cookie(getCookie('__utp'));
      checkCustomBadge();
    })();
  } else {
    window.vfQ.push(() => {
      (async () => {
        await window.vf.session.login.cookie(getCookie('__utp'));
        checkCustomBadge();
      })();
    });
  }

  window.postMessage('loginSuccess', 'https://www.' + document_domain);
};

window.tp = window.tp || [];

/*AD-BLOCKER.... prevents pianoId popUp*/
document.cookie = '__adblocker=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
const setNptTechAdblockerCookie = (adblocker) => {
  var d = new Date();
  d.setTime(d.getTime() + 60 * 5 * 1000);
  document.cookie =
    '__adblocker=' + (adblocker ? 'true' : 'false') + '; expires=' + d.toUTCString() + '; path=/';
};

const loadPianoIdScript = () => {
  return new Promise((resolve, reject) => {
    const scriptAlreadyLoaded = document.querySelector(
      `script[src="${window.PIANO_APPLICATION_URL}?aid=${window.PIANO_APPLICATION_ID}"]`
    );
    if (scriptAlreadyLoaded) {
      nw_log('Piano ID script already loaded.');
      resolve();
      return;
    }

    const scriptP = document.createElement('script');
    scriptP.src = `${window.PIANO_APPLICATION_URL}?aid=${window.PIANO_APPLICATION_ID}`;
    scriptP.async = true;

    scriptP.onload = () => {
      nw_log('Piano ID script loaded successfully.');
      resolve();
    };
    scriptP.onerror = () => {
      console.error('Failed to load Piano ID script.');
      reject('Failed to load Piano ID script.');
    };

    document.head.appendChild(scriptP);
  });
};

function waitForPianoIdAndLogin(retryInterval = 500, maxAttempts = 100) {
  let attempts = 0;
  const tryLogin = () => {
    if (
      typeof tp !== 'undefined' &&
      typeof tp.pianoId !== 'undefined' &&
      typeof tp.pianoId.show === 'function'
    ) {
      tp.pianoId.show({
        displayMode: 'modal',
        screen: 'login',
        disableSignUp: false,
        width: '480px',
      });
      window.dispatchEvent(new Event('pianoLoginWillShow'));
    } else {
      attempts++;
      if (attempts < maxAttempts) {
        setTimeout(tryLogin, retryInterval);
      } else {
        console.error('Piano ID failed to load after multiple attempts');
        document
          .querySelectorAll('.button-loading')
          .forEach((button) => button.classList.remove('button-loading'));
      }
    }
  };

  tryLogin();
}

function handleLoginClick(event) {
  const nwsubl = getCookie('nwsubl');
  const piaC = getCookie('__utp');

  if (nwsubl && piaC) {
    window.location = `https://www.${document_domain}/myaccount`;
    return;
  }

  const button = event.currentTarget;
  button.classList.add('button-loading');

  if (typeof tp?.pianoId?.show === 'function') {
    btnLogin();
  } else {
    // if the script is not loaded, load it and then call btnLogin
    loadPianoIdScript().then(() => {
      btnLogin();
    });
  }
}

const loginButtons = [loginHeader, loginBurger, loginHub, loginHubBurger];

function preloadPianoId() {
  const nwsubl = getCookie('nwsubl');
  const piaC = getCookie('__utp');

  if (!(nwsubl && piaC)) {
    //only preload if not loaded yet
    const alreadyLoaded = document.querySelector(
      `script[src="${window.PIANO_APPLICATION_URL}?aid=${window.PIANO_APPLICATION_ID}"]`
    );
    if (!alreadyLoaded) {
      nw_log('Preloading Piano ID script...');
      loadPianoIdScript();
    }
  }
}

// not duplicate event listeners
const listenerRegistry = new WeakMap();

function addUniqueEventListener(element, eventType, handler, options = {}) {
  if (!element) return;
  const existing = listenerRegistry.get(element) || {};

  // Check if the event type already has a handler
  if (existing[eventType] !== handler) {
    element.removeEventListener(eventType, existing[eventType]);
    element.addEventListener(eventType, handler, options);
    listenerRegistry.set(element, { ...existing, [eventType]: handler });
  }
}

loginButtons.forEach((button) => {
  addUniqueEventListener(button, 'click', handleLoginClick);
  addUniqueEventListener(button, 'pointerenter', preloadPianoId, { once: true });
  addUniqueEventListener(button, 'touchstart', preloadPianoId, { once: true });
});

loginSpecial.forEach((button) => {
  button.removeEventListener('click', handleLoginClick);
  button.addEventListener('click', handleLoginClick);
});

function btnLogin(user = '') {
  const nwsubl = getCookie('nwsubl');
  const piaC = getCookie('__utp');

  if (nwsubl || piaC) {
    if (nwsubl && piaC) {
      window.location = `https://www.${document_domain}/myaccount`;
      return;
    } else {
      setCookie('nwsubl', '', -1, document_domain);
      setCookie('nwsucrp', '', -1, document_domain);
      nw_log('### Logging out from Piano... ### ');
      if (typeof tp?.pianoId?.logout === 'function') {
        try {
          tp.pianoId.logout();
        } catch (e) {
          setCookie('__utp', '', -1, '.newsweek.com');
          console.error('Error logging out from Piano:', e);
        }
      } else {
        nw_log('Piano ID logout not available at login time');
      }
    }
  }
  waitForPianoIdAndLogin();
}

if (window.DEV_ENV) {
  window.tp.push(['setSandbox', true]);
} else {
  /* CNAME records*/
  window.tp.push(['setComposerHost', 'https://c2.newsweek.com']);
  window.tp.push(['setPianoIdUrl', 'https://auth.newsweek.com']);
}

if (getCookie('nw_debug_piano') == '1') window.tp.push(['setDebug', true]);

window.tp.push([
  'init',
  function () {
    /* MS oneclick SSO*/
    if (isEdge) {
      window.tp.pianoId.init({
        msqaPromptConfiguration: {
          autoPrompt: false,
        },
      });
    }
  },
]);

async function validateViafouraSession() {
  try {
    const vfUser = await window.vf.context.get('user');
    const pianoJwt = parseJwt(getCookie('__utp'));

    if (vfUser && pianoJwt && vfUser.id && pianoJwt.sub && vfUser.id !== pianoJwt.sub) {
      console.warn('user not sync');
      await window.vf.session.logout();
      window.vf.session.login.cookie(getCookie('__utp'));
    } else {
      nw_log('### Viafoura session validated successfully ###');
    }
  } catch (e) {
    console.error('error validating Viafoura:', e);
  }
}

tp.push([
  'addHandler',
  'loginSuccess',
  function (data) {
    if (data) {
      const newJwt = parseJwt(data.user_token);
      const uid = newJwt && newJwt.sub ? newJwt.sub : '';

      // Store only the Piano user id (uid) in `nwsubl`
      setCookie('nwsubl', uid, 365, document_domain);

      if (window.vf && typeof window.vf.context?.get === 'function') {
        nw_log('### Viafoura session login validation ###');
        validateViafouraSession();
      } else {
        vfQ.push(() => validateViafouraSession());
      }

      let date = new Date();
      window.tp.api.callApi('/access/list', {}, function (response) {
        if (response.count > 0) {
          response.data.forEach(function (subscription) {
            if (subscription.expire_date) {
              if (subscription.expire_date > Math.floor(date.getTime() / 1000)) {
                //timestamp in seconds
                let last4 =
                  (subscription.expire_date - Math.floor(date.getTime() / 1000)) / (60 * 60 * 24);
                setCookie('nwsucrp', 1, last4, document_domain);
                document
                  .querySelectorAll('.subscription-btn')
                  .forEach((button) => (button.style.visibility = 'hidden'));
              }
            } else if (
              subscription.resource &&
              (subscription.resource.name == 'Premium' ||
                subscription.resource.name == 'Digital+' ||
                subscription.resource.name == 'Membership' ||
                subscription.resource.name == 'Membership+Print')
            ) {
              setCookie('nwsucrp', 1, 365, document_domain);
              document
                .querySelectorAll('.subscription-btn')
                .forEach((button) => (button.style.visibility = 'hidden'));
            }
          });
        }
      });

      loginSuccess();

      // Our registration term for login
      var registrationTermId = window.PIANO_REGISTRATION_TERM_ID;

      window.tp.api.callApi('/conversion/list', {}, function (listData) {
        if (listData.code != 0) {
          return;
        }
        var conversions = listData.conversions;
        // Go through user's conversions
        for (var i in conversions) {
          // Is current conversion happened on our registration term?
          if (conversions[i].term.term_id == registrationTermId) {
            return;
          }
        }
        // Create a conversion on registration term automatically
        window.tp.api.callApi(
          '/conversion/registration/create',
          { term_id: registrationTermId },
          function (conversionData) {
            // Refresh access token cookie manually
            window.tp.user.refreshAccessToken(true, function (accessTokenList) {
              // All done, here you can close the offer or refresh the page
            });
          }
        );
      });
    }
  },
]);

tp.push([
  'addHandler',
  'registrationSuccess',
  function (data) {
    if (data) {
      nw_log('Handler: registrationSuccess:', data);

      // Create hashes for new registrations
      if (typeof sendToLiveRamp === 'function' && data.user.email) {
        sendToLiveRamp(data.user.email, 1); // type 1 for registration
      }

      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const raw = JSON.stringify({
        aid: window.PIANO_APPLICATION_ID,
        email: data.user.email,
        custom_field_values: [
          { field_name: 'registration_method', value: data.user.ls || '' },
          { field_name: 'registration_source', value: action_origin },
        ],
      });

      const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch(
        window.PIANO_API_URL_AUTH +
          '/id/api/v1/identity/userinfo?lang=en_US&aid=' +
          window.PIANO_APPLICATION_ID +
          '&access_token=' +
          data.token,
        requestOptions
      )
        .then((response) => response.json())
        .then(async (r) => {
          nw_log('custom_field setted');
          const token = r.token;
          const decoded = parseJwt(token);
          const uid = decoded && decoded.sub ? decoded.sub : '';
          const email = r.email;
          const emailToken = email.split('@')[0];
          // Store only the Piano user id (uid) in `nwsubl`
          setCookie('nwsubl', uid, 365, document_domain);
          await window.tp.pianoId.loginByToken(token);
          typeof myAccountChangeDisplayName === 'function' &&
            myAccountChangeDisplayName(emailToken, true);
        })
        .catch((error) => {
          console.warn('Error updating sources:', error);
          nw_log('ERROR:', error);
        });

      const loginButtons = [loginHeader, loginBurger, loginHub, loginHubBurger];

      loginButtons.forEach((button) => {
        if (button) {
          button.removeEventListener('click', handleLoginClick);
          button.addEventListener('click', handleLoginClick);
        }
      });

      checkCustomBadge();
    }
  },
]); // /registrationSuccess

function removeCookiesAndLocalStorage() {
  try {
    const cookiesToDelete = ['nwsubl', 'nwsucrp'];
    const localStorageKeysToDelete = ['vfAccess', 'vfRefresh'];
    cookiesToDelete.forEach((cookie) => {
      setCookie(cookie, '', -1, document_domain);
    });
    localStorageKeysToDelete.forEach((key) => {
      if (localStorage.getItem(key)) {
        localStorage.removeItem(key);
      }
    });
  } catch (e) {
    console.error('Error removing cookies and local storage:', e);
  }
}

/*Logout users W/O both cookies*/
const nwC = getCookie('nwsubl');
const piaC = getCookie('__utp');

if ((nwC || piaC) && !(nwC && piaC)) {
  //xor
  setCookie('__utp', '', -1, document_domain);
  setCookie('__tac', '', -1, document_domain);
  removeCookiesAndLocalStorage();
}

async function btnLogout() {
  if (!getCookie('nwsubl') && !getCookie('__utp')) {
    console.warn('User is already logged out.');
    return;
  }

  try {
    removeCookiesAndLocalStorage();
    const logoutPromises = [];

    // Check and add Viafoura logout promise
    if (typeof window.vf?.session?.logout === 'function') {
      logoutPromises.push(
        window.vf.session.logout().catch((error) => {
          console.error('Error closing Viafoura session:', error);
        })
      );
    } else {
      console.warn('window.vf.session.logout not available');
    }

    // Check and add Piano logout promise
    if (typeof window.tp?.pianoId?.logout === 'function') {
      logoutPromises.push(
        window.tp.pianoId.logout().catch((error) => {
          console.error('Error closing Piano session:', error);
        })
      );
    } else {
      console.warn('window.tp.pianoId.logout not available');
    }

    // Execute all logout promises in parallel
    await Promise.all(logoutPromises);
  } catch (unexpectedError) {
    console.error('Unexpected error during logout:', unexpectedError);
  } finally {
    // Redirect to the homepage after logout attempts
    window.location.href = `https://www.${document_domain}/?loggedOut`;
  }
}

window.addEventListener('message', async (event) => {
  const validOrigins = ['.tinypass.com', '.piano.io', '.newsweek.com'];

  if (validOrigins.some((origin) => event.origin.includes(origin))) {
    if (
      typeof event.data === 'string' &&
      (event.data.startsWith('{') || event.data.startsWith('['))
    ) {
      try {
        const eventData = JSON.parse(event.data);

        if (
          eventData.event === 'emitGAEvent' &&
          eventData.params.eventCategory === 'loginDisplayed'
        ) {
          loginButtons.forEach((button) => {
            if (button) {
              button.classList.remove('button-loading');
            }
          });
          loginSpecial.forEach((button) => {
            if (button) {
              button.classList.remove('button-loading');
            }
          });
          nw_log('Login displayed event received');
        }
      } catch (e) {
        console.error('Error processing event data:', e);
      }
    }
    const messageData = event.data;
    if (messageData === 'btnLogin') {
      btnLogin();
    } else if (messageData === 'btnLogout') {
      if (!getCookie('nwsubl') && !getCookie('__utp')) {
        console.warn('User is already logged out.');
        return;
      }
      await btnLogout();
    } else if (messageData.action === 'changeDisplayName') {
      const result = await myAccountChangeDisplayName(messageData.value);
      event.source.postMessage(
        {
          action: 'changeDisplayNameResponse',
          value: result,
        },
        event.origin
      );
    }
  }
});

/* EDGE MSONECLICK*/
if (isEdge && !(nwC && piaC)) {
  const urlParams = new URLSearchParams(window.location.search);
  const response_id = urlParams.get('response_id');

  if (response_id) {
    nw_log('RESPONSE_ID IS IN THE HALL!, NOT loading composer to process it...');
  } else {
    //call ms prompt
    let msattempts = 0;
    let msretryInterval = 333,
      msmaxAttempts = 50;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://edge-auth.microsoft.com/js/ms_auth_client.min.js';
    script.onerror = () => console.error('Failed to load MS edge auth client script');
    document.head.appendChild(script);

    const tryLogin = () => {
      if (
        typeof ms !== 'undefined' &&
        typeof ms.auth !== 'undefined' &&
        typeof ms.auth.initialize === 'function'
      ) {
        MSInitialize(true);
      } else {
        msattempts++;
        if (msattempts < msmaxAttempts) {
          setTimeout(tryLogin, msretryInterval);
        } else {
          console.error('MS oneclick failed to load after multiple attempts');
        }
      }
    };

    tryLogin();
  }
}

function MSInitialize(auto_prompt) {
  nw_log('MSinitialize');

  // Initialize the library
  response = ms.auth.initialize({
    client_id: '941dade2-38f8-4759-8a5e-9d0d9fc2a804',
    login_uri: 'https://myaccount.' + document_domain + '/oauth/login_ms_auth',
    callback: userAuthenticated,
    auto_prompt: auto_prompt,
    context: 'use',
    partner_name: 'Newsweek.com',
  });
}

function userAuthenticated(signInAccountInfo, errorInfo) {
  if (response.result !== 'success') {
    console.error('ms.auth.initialize failed: ', response);
  } else {
    window.postMessage('loginSuccess', 'https://www.' + document_domain);
  }

  if (!signInAccountInfo) {
    console.error('signInAccountInfo not present: ', response);
    window.postMessage('NOT authenticated', '*');

    let msg = errorInfo.errorMessage;
    return;
  } else {
    getAuthToken(signInAccountInfo.homeAccountId);
    if (signInAccountInfo.username != '' && typeof sendToLiveRamp === 'function')
      sendToLiveRamp(signInAccountInfo.username);
  }
}

function MsaccountCallback(account_info) {
  if (account_info && typeof sendToLiveRamp === 'function') {
    sendToLiveRamp(account_info.username);
  }
}

function getAuthToken(home_account_id) {
  const request = {
    scopes: ['User.Read'],
    account: ms.auth.getMSALAccount(home_account_id),
  };
  if (!request.account) {
    console.error('Silent token fetch failed: Account not found');
  } else {
    ms.auth
      .acquireTokenSilent(request)
      .then(tokenFetchResponse)
      .catch((err) => {
        console.error('Token fetch failed with error: ', err);
      });
  }
}

function tokenFetchResponse(response) {
  if (response && response.accessToken) {
    let formdata = new FormData();
    formdata.append('access_token', response.accessToken);
    formdata.append('id_token', response.idToken);
    formdata.append('action_origin', action_origin);

    let uri = 'https://api.' + document_domain + '/auth2/loginMsOneClick'; //?access_token='+response.accessToken;
    let options = {
      method: 'POST',
      body: formdata,
      withCredentials: false, //,mode:'no-cors'
    };

    let req = new Request(uri, options);
    fetch(req, {
      credentials: 'include',
    })
      .then((response) => {
        if (response.ok) {
          loginSuccess();
        } else {
          throw new Error('Bad HTTP!');
        }
      })
      .catch((err) => {
        nw_log('ERROR:', err.message);
      });
  }
}

async function checkCustomBadge() {
  if (getCookie('nwsucrp') == 1) {
    // `nwsubl` now stores the Piano uid directly
    const uuid = getCookie('nwsubl');
    let badgeOk = false;
    var vfUser;

    if (typeof window.vf === 'object') {
      vfUser = await vf.context.get('user');
    } else {
      window.vfQ = window.vfQ || [];
      window.vfQ.push(async () => {
        await window.vf.session.login.cookie(getCookie('__utp'));
        vfUser = await vf.context.get('user');
      });
    }

    vfUser.custom_badges.forEach((badge) => {
      if (badge && badge.description == 'Member') {
        badgeOk = true;
      }
    });

    if (!badgeOk) {
      const myHeadersB = new Headers();
      myHeadersB.append('Content-Type', 'application/json');
      const rawB = JSON.stringify({ uuid: uuid });

      const requestOptionsB = {
        method: 'POST',
        headers: myHeadersB,
        body: rawB,
      };

      try {
        const responseB = await fetch(
          'https://www.' + document_domain + '/tool/vfcb?',
          requestOptionsB
        );

        nw_log('badge JUST assigned');

        //refresh session for instant change in VF widget
        await window.vf.session.login.cookie(getCookie('__utp'));
      } catch (error) {
        console.error(error);
        throw error;
      }
    } else {
      nw_log('badge already assigned');
    }
  } else {
    nw_log('No need for badge check'); //wh takes care
  }
}
