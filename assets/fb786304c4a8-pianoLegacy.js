window.tp = window.tp || [];

/*COMPOSER*/
(function (src) {
  var a = document.createElement('script');
  a.type = 'text/javascript';
  a.async = true;
  a.src = src;
  var b = document.getElementsByTagName('script')[0];
  b.parentNode.insertBefore(a, b);
})(window.PIANO_APPLICATION_URL + '?aid=' + window.PIANO_APPLICATION_ID);

if (window.DEV_ENV) {
  window.tp.push(['setSandbox', true]);
} else {
  /* CNAME records*/
  window.tp.push(['setComposerHost', 'https://c2.newsweek.com']);
  window.tp.push(['setPianoIdUrl', 'https://auth.newsweek.com']);
  window.tp.push(['setEndpoint', 'vx.newsweek.com']);
}

if (getCookie('nw_debug_piano') == '1') window.tp.push(['setDebug', true]);

window.tp.push([
  'init',
  function () {
    createContainers(); // 4experiences
  },
]);

window.tp.push([
  'addHandler',
  'checkoutComplete',
  function (data) {
    if (data) {
      let isSubscribed = false;
      let date = new Date();
      window.tp.api.callApi('/access/list', {}, function (response) {
        if (response.count > 0) {
          response.data.forEach(function (subscription) {
            if (subscription.expire_date) {
              if (subscription.expire_date > Math.floor(date.getTime() / 1000)) {
                //timestamp in seconds
                isSubscribed = true;
                let last4 =
                  (subscription.expire_date - Math.floor(date.getTime() / 1000)) / (60 * 60 * 24);
                setCookie('nwsucrp', 1, last4, document_domain);
              }
            } else if (
              subscription.resource &&
              (subscription.resource.name == 'Premium' ||
                subscription.resource.name == 'Digital+' ||
                subscription.resource.name == 'Membership' ||
                subscription.resource.name == 'Membership+Print')
            ) {
              setCookie('nwsucrp', 1, 365, document_domain);
            }
          });
        }
      });
    }
  },
]);

async function btnLogout() {
  try {
    removeCookiesAndLocalStorage();

    // Prepare an array to hold logout promises
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

/* placeholders for experiences*/
function createContainers() {
  const fragment = document.createDocumentFragment();
  ['piano_inline', 'piano_c_r'].forEach((d) => {
    const wrapper = document.createElement('div');
    wrapper.id = `${d}_wrapper`;
    wrapper.classList.add('piano_wrapper');
    const cont = document.createElement('div');
    cont.id = d;
    wrapper.appendChild(cont);
    fragment.appendChild(wrapper);
  });
  document.body.appendChild(fragment);
}
