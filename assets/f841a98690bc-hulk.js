function inewsHulkInit() {
	// phpcs:ignore
	const scriptBase =
		window.location.hostname === 'inews.co.uk' ? 'https://hulkprod.anm.co.uk' : 'https://hulkint.anm.co.uk';
	// Hulk script callback
	async function setupHulk() {
		const Register = window.hulk && window.hulk.Register;

		if (Register.isWebPushSupported()) {
			let hulkMeta = {
				platform: 'desktop'
			};
			if (window.innerWidth <= 720) {
				hulkMeta.platform = 'mobile';
			}
			if (window.innerWidth <= 1024) {
				hulkMeta.platform = 'tablet';
			}

			const rtaMacro = [];
			if (window.RTA && window.RTA._ruid) {
				const ruids = await window.RTA.ruids;
				rtaMacro.push('https://rta2.inews.co.uk/s/p');
				rtaMacro.push({
					body: JSON.stringify({
						ids: ruids['rta2.inews.co.uk']
					}),
					credentials: 'include',
					headers: {
						'content-type': 'application/json'
					},
					method: 'POST',
					mode: 'cors'
				});
			}

			const options = {
				baseEndpoint: `${scriptBase}/api/web-push-notification`,
				metadata: Object.assign({}, window.hulkMetadata, hulkMeta),
				promptFrequency: window.location.origin === 'https://inews.co.uk' ? '7d' : '5m',
				notificationMacros: {
					impression: [rtaMacro]
				},
				swUrl: '/sw.js'
			};

			// Init code for hulk
			window.hulkInstance = new Register(options);
			window.hulkInstance.init().then((registration) => {
				window.hulkRegistration = registration;
				window.dispatchEvent(new CustomEvent('hulk:ready', {}));
			});

			window.hulkInstance.on('error', (args) => {
				console.warn('[Hulk] error', args);
			});

			window.hulkInstance.on('notification_click', (args) => {
				if (window.RTA) {
					window.RTA.tedEvent('push', args);
				}
			});
			window.hulkInstance.on('prompt_click', (args) => {
				if (window.RTA) {
					window.RTA.tedEvent('push', args);
				}
			});
			window.hulkInstance.on('prompt_impression', (args) => {
				if (window.RTA) {
					window.RTA.tedEvent('push', args);
				}
			});
		}
	}

	// Load the hulk script
	const e = document.createElement('script');
	e.async = true;
	e.referrerPolicy = 'no-referrer-when-downgrade';
	e.src = `${scriptBase}/api/web-push-notification/v1/static/latest/mol-fe-web-push-browser-register/register.js`;
	e.onload = setupHulk;

	const s = document.getElementsByTagName('script')[0];
	// phpcs:ignore
	s.parentNode.insertBefore(e, s);
}

inewsHulkInit();
