// Initialize global VWO campaigns array for tracking.
window.vwoCampaigns = window.vwoCampaigns || [];

/**
 * Fetch VWO campaign data asynchronously.
 *
 * Waits for the 'onVWOCampaignsLoaded' event from the VWO API and resolves with
 * the bucketed campaigns array.
 *
 * @returns {Promise<Array|undefined>} Resolves with the array of bucketed campaigns, or rejects on timeout.
 */
window.getVWOCampaignData = async function getVWOCampaignData() {
	window.VWO = window.VWO || [];

	// If we already called the function, return the campaigns.
	window.VWO.data = window.VWO.data || {};
	if (window.VWO.data.campaigns) {
		return window.VWO.data.campaigns;
	}

	return await Promise.race([
		new Promise((resolve) => {
			window.VWO.push([
				'onVWOCampaignsLoaded',
				(data) => {
					const {bucketed_campaigns} = data || {};

					// Store the result.
					window.VWO.data.campaigns = bucketed_campaigns;

					resolve(bucketed_campaigns);
				}
			]);
		}),
		// Timeout after 2 seconds if the event doesn't fire.
		new Promise((resolve) => setTimeout(() => resolve([]), 2000))
	]);
};

/**
 * Injects the VWO tracking script.
 *
 * @returns {void}
 */
function addVwoScript() {
	window._vwo_code ||
		(function () {
			var account_id = window.vwo.account_id || '',
				version = 2.1,
				settings_tolerance = 2000,
				hide_element = 'body',
				hide_element_style =
					'opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;transition:none !important;',
				/* DO NOT EDIT BELOW THIS LINE */
				f = false,
				w = window,
				d = document,
				v = d.querySelector('#vwoCode'),
				cK = '_vwo_' + account_id + '_settings',
				cc = {};
			try {
				var c = JSON.parse(localStorage.getItem('_vwo_' + account_id + '_config'));
				cc = c && typeof c === 'object' ? c : {};
			} catch (e) {}
			var stT = cc.stT === 'session' ? w.sessionStorage : w.localStorage;
			code = {
				nonce: v && v.nonce,
				library_tolerance: function () {
					return typeof library_tolerance !== 'undefined' ? library_tolerance : undefined;
				},
				settings_tolerance: function () {
					return cc.sT || settings_tolerance;
				},
				hide_element_style: function () {
					return '{' + (cc.hES || hide_element_style) + '}';
				},
				hide_element: function () {
					if (performance.getEntriesByName('first-contentful-paint')[0]) {
						return '';
					}
					return typeof cc.hE === 'string' ? cc.hE : hide_element;
				},
				getVersion: function () {
					return version;
				},
				finish: function (e) {
					if (!f) {
						f = true;
						var t = d.getElementById('_vis_opt_path_hides');
						if (t) t.parentNode.removeChild(t);
						if (e) new Image().src = 'https://dev.visualwebsiteoptimizer.com/ee.gif?a=' + account_id + e;
					}
				},
				finished: function () {
					return f;
				},
				addScript: function (e) {
					var t = d.createElement('script');
					t.type = 'text/javascript';
					if (e.src) {
						t.src = e.src;
					} else {
						t.text = e.text;
					}
					v && t.setAttribute('nonce', v.nonce);
					d.getElementsByTagName('head')[0].appendChild(t);
				},
				load: function (e, t) {
					var n = this.getSettings(),
						i = d.createElement('script'),
						r = this;
					t = t || {};
					if (n) {
						i.textContent = n;
						d.getElementsByTagName('head')[0].appendChild(i);
						if (!w.VWO || VWO.caE) {
							stT.removeItem(cK);
							r.load(e);
						}
					} else {
						var o = new XMLHttpRequest();
						o.open('GET', e, true);
						o.withCredentials = !t.dSC;
						o.responseType = t.responseType || 'text';
						o.onload = function () {
							if (t.onloadCb) {
								return t.onloadCb(o, e);
							}
							if (o.status === 200 || o.status === 304) {
								_vwo_code.addScript({text: o.responseText});
							} else {
								_vwo_code.finish('&e=loading_failure:' + e);
							}
						};
						o.onerror = function () {
							if (t.onerrorCb) {
								return t.onerrorCb(e);
							}
							_vwo_code.finish('&e=loading_failure:' + e);
						};
						o.send();
					}
				},
				getSettings: function () {
					try {
						var e = stT.getItem(cK);
						if (!e) {
							return;
						}
						e = JSON.parse(e);
						if (Date.now() > e.e) {
							stT.removeItem(cK);
							return;
						}
						return e.s;
					} catch (e) {
						return;
					}
				},
				init: function () {
					if (d.URL.indexOf('__vwo_disable__') > -1) return;
					var e = this.settings_tolerance();
					w._vwo_settings_timer = setTimeout(function () {
						_vwo_code.finish();
						stT.removeItem(cK);
					}, e);
					var t;
					if (this.hide_element() !== 'body') {
						t = d.createElement('style');
						var n = this.hide_element(),
							i = n ? n + this.hide_element_style() : '',
							r = d.getElementsByTagName('head')[0];
						t.setAttribute('id', '_vis_opt_path_hides');
						v && t.setAttribute('nonce', v.nonce);
						t.setAttribute('type', 'text/css');
						if (t.styleSheet) t.styleSheet.cssText = i;
						else t.appendChild(d.createTextNode(i));
						r.appendChild(t);
					} else {
						t = d.getElementsByTagName('head')[0];
						var i = d.createElement('div');
						i.style.cssText =
							'z-index: 2147483647 !important;position: fixed !important;left: 0 !important;top: 0 !important;width: 100% !important;height: 100% !important;background: white !important;display: block !important;';
						i.setAttribute('id', '_vis_opt_path_hides');
						i.classList.add('_vis_hide_layer');
						t.parentNode.insertBefore(i, t.nextSibling);
					}
					var o = window._vis_opt_url || d.URL,
						s =
							'https://dev.visualwebsiteoptimizer.com/j.php?a=' +
							account_id +
							'&u=' +
							encodeURIComponent(o) +
							'&vn=' +
							version;
					if (w.location.search.indexOf('_vwo_xhr') !== -1) {
						this.addScript({src: s});
					} else {
						this.load(s + '&x=true');
					}
				}
			};
			w._vwo_code = code;
			code.init();
		})();
}

/**
 * Checks for user consent via TCF or USP APIs and loads the VWO script if
 * consent is present.
 *
 * Uses vendor ID 27 for VWO (TCF) and global consent for USP API.
 *
 * @returns {void}
 */
function vwoConsentHandler() {
	const nrvVendorId = 27;

	if (window.__tcfapi) {
		window.__tcfapi('getValidTCData', 2, () => {
			window.__tcfapi('getNonRegisteredVendorsConsents', 2, (nrvList) => {
				if (nrvList && nrvList?.[nrvVendorId]?.consent) {
					addVwoScript();
				}
			});
		});
	} else if (window.__uspapi) {
		// US Yes/No check.
		window.__uspapi('getUSPData', 1, () => {
			window.__uspapi.a.push([
				'hasConsentedToAll',
				null,
				(hasConsent) => {
					if (hasConsent) addVwoScript();
				}
			]);
		});
	}
}

// If the adverts queue is available, push the VWO consent handler to it.
// Otherwise, set a timeout to call the handler after a second.
if (window?.adverts?.queue?.push) {
	window.adverts.queue.push(vwoConsentHandler);
} else {
	// No ads on page, assume everything will have loaded by now.
	setTimeout(vwoConsentHandler, 1000);
}
