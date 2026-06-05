/**
 * client-mu-plugins/analytics/rta/index.js
 *
 * RTA tracking logic.
 */

(function () {
	/**
	 * We'll rely on window.rtaInlineData (injected via wp_add_inline_script)
	 * for any server-side variables. Fallbacks included to match original behavior.
	 */
	const data = window.rtaInlineData || {};

	// Build our base rtaParams object
	window.rtaParams = {
		rp: typeof data.rp !== 'undefined' ? data.rp : window.innerWidth >= 1024 ? 'desktop' : 'mobile',
		eventType: typeof data.eventType !== 'undefined' ? data.eventType : 'cview'
	};

	// If we have postParams, replicate the original decode logic and merge them.
	if (data.postParams && typeof data.postParams === 'object') {
		// Function to decode HTML entities
		const decodeHTMLEntities = (text) => {
			const textArea = document.createElement('textarea');
			textArea.innerHTML = text;
			return textArea.value;
		};

		// Decode fields with string value
		for (const key in data.postParams) {
			if (typeof data.postParams[key] === 'string') {
				data.postParams[key] = decodeHTMLEntities(data.postParams[key]);
			}
		}

		if (window?.vwo?.account_id && typeof window.getVWOCampaignData === 'function') {
			window.getVWOCampaignData().then(() => {
				// Give other VWO processing a moment to complete.
				setTimeout(() => {
					// Use the populated window.vwoCampaigns array.
					const vwoTopics = window.vwoCampaigns?.length ? window.vwoCampaigns.map((campaign) => `vwo:${campaign}`) : [];

					let tags = data?.postParams?.tags
						? data.postParams.tags
								.trim()
								.split(',')
								.map((t) => t.trim())
								.filter(Boolean)
						: [];
					tags = [...tags, ...vwoTopics];

					if (tags.length) {
						data.postParams.tags = tags.join(',');
					}

					window.rtaParams = {...window.rtaParams, ...data.postParams};

					// If its too late for the load event, fire the update event directly.
					if ('RTA' in window && document.readyState === 'complete') {
						window.RTA.tedEvent('update', window.rtaParams);
					}
				}, 250);
			});
		}

		// Merge into window.rtaParams
		window.rtaParams = {...window.rtaParams, ...data.postParams};
	}

	// Initial PV tracker
	window.addEventListener('load', () => {
		if ('RTA' in window) {
			window.RTA.tedEvent(window.rtaParams.eventType, window.rtaParams);
		}
	});

	// Send signup event for Piano
	window.tp = window.tp || [];
	window.tp.push([
		'addHandler',
		'startCheckout',
		(conversion) => {
			if ('RTA' in window) {
				window.RTA.tedEvent('page_event', {action: 'set', name: 'paywall_signup', value: 1});
			}
		}
	]);

	// Send conversion event for Piano
	window.tp.push([
		'addHandler',
		'checkoutComplete',
		(conversion) => {
			const pianoRids = window.adverts?.config?.piano?.rid || [];
			if (pianoRids.includes(conversion.rid)) {
				if ('RTA' in window) {
					window.RTA.tedEvent('page_event', {action: 'set', name: 'paywall_conversion', value: 1});
				}
			}
		}
	]);
	// Events for video player
	window.addEventListener('inews:videos:loaded', (event) => {
		if (event.detail?.videoPlayers) {
			const videoEvents = {
				start: 'video.stream-started',
				ad_start: 'video.advert-started',
				ad_end: 'video.advert-completed',
				video_start: 'video.content-started',
				video_end: 'video.content-ended',
				pause: 'video.content-paused'
			};

			event.detail.videoPlayers.forEach((player) => {
				player.videoIndex = 0;
				for (const [eventName, eventID] of Object.entries(videoEvents)) {
					player.on(eventName, () => {
						player.getState().then((state) => {
							const {videoDuration, videoTitle, videoTime, videoId} = state;
							const duration = Math.ceil(videoDuration);

							const rtaParams = {
								action: eventID,
								id: videoId,
								title: videoTitle ? videoTitle.replace(/\+/g, ' ') : '',
								module: 'inews.dailymotion',
								initial: player.videoIndex === 0,
								percent: (videoTime / duration) * 100,
								duration: duration
							};

							if ('RTA' in window) {
								window.RTA.tedEvent('video-event', rtaParams);
							}

							if (eventName === 'video_start') {
								player.videoIndex += 1;
							}
						});
					});
				}
			});
		}
	});

	// Send user data on Piano subscription and Hulk status
	window.addEventListener('iNews:Subscriber:ready', () => {
		const {iNews, Notification, RTA} = window;
		const {Subscriber} = iNews || {};

		// Determine user status
		const userStatus = !Subscriber?.uid ? '' : Subscriber.isSubscribed ? 'subscriber' : 'registered';

		// Map Notification.permission to custom values
		const permissionMap = {
			default: 'eligible',
			denied: 'denied',
			granted: 'subscribed'
		};

		// Determine notification permissions
		let notificationPermissions = 'registered';
		if ('PushManager' in window && Notification) {
			notificationPermissions = permissionMap[Notification.permission] ?? 'not_supported';
		}

		// Update rtaParams
		window.rtaParams.userStatus = userStatus;
		window.rtaParams.notificationPermissions = notificationPermissions;

		console.log('xrta', window.rtaParams);

		// Fire the RTA event (if available)
		RTA?.tedEvent?.('update', {userStatus, notificationPermissions});
	});

	// Paywall status snippet
	let paywallStatusSent = false; // Prevent multiple updates
	window.tp.push([
		'init',
		() => {
			window.tp.push([
				'addHandler',
				'showOffer',
				() => {
					sendPaywallStatus('isPaywalled');
				}
			]);
		}
	]);

	const sendPaywallStatus = (status) => {
		if (paywallStatusSent) return;

		if (window.RTA && typeof window.RTA.tedEvent === 'function') {
			window.RTA.tedEvent('update', {paywallStatus: status});
		}

		paywallStatusSent = true;
	};
})();
