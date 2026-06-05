// Use the localized config from PHP
const config = {
    stripeKey: coeditorConnectorConfig.stripeKey,
	checkoutUrl: coeditorConnectorConfig.checkoutUrl,
	baseUrl: coeditorConnectorConfig.baseUrl,
};
async function handleCheckoutSession() {
	// console.log('running async');
	const urlParams = new URLSearchParams(window.location.search);
	if (urlParams.get('checkout_session_id') != null) {
		// console.log('Has Checkout Session ID');
		const sessionId = urlParams.get('checkout_session_id');

		try {
			const response = await fetch('/wp-json/coeditor-connector/v1/stripe-status', {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body: JSON.stringify({ session_id: sessionId, stripeAccountId: urlParams.get('sid') }),
			});

			const session = await response.json();

			if (session.status === 'open') {
				window.location.replace(config.baseUrl + '/offer/');
				return; // stop further processing
			} else if (session.status === 'complete') {

				// Save the email Stripe returned (most reliable)
				if (session.customer_email) {
					localStorage.setItem("coeditor_customer_email", session.customer_email);
				}

				const expires = new Date(Date.now() + 3600 * 1000); // 1 hour in milliseconds
				const cookieDomain = window.location.hostname;

				// Store Stripe checkout info (non-sensitive)
				try {
					localStorage.setItem("coeditor_stripe_checkout", JSON.stringify({
						session_id: session.session_id || sessionId,
						subscription_id: session.subscription_id || null,
						currency: session.currency || null,
						amount_total: session.amount_total ?? null,
						payment_status: session.payment_status || null,

						// include email + name in the blob too
						customer_email: session.customer_email || null,
						customer_name: session.customer_name || null,

						saved_at: Date.now(),
					}));
				} catch (e) {
					console.warn("Could not persist Stripe checkout info:", e);
				}

				document.cookie =
					"__utp=" +
					session.token.access_token +
					"; expires=" +
					expires.toUTCString() +
					"; path=/";
				document.cookie =
					"tpuser=" +
					session.piano_user_id +
					";domain=." +
					cookieDomain +
					";path=/";
				document.body.classList.add("coeditor-logged-in"); // Add body class

				const prefix = "offerFields_";

				// Iterate backwards to avoid index shifting issues when removing items
				for (let i = localStorage.length - 1; i >= 0; i--) {
					const key = localStorage.key(i);
					if (key && key.startsWith(prefix)) {
						localStorage.removeItem(key);
					}
				}

				loginUser();
				// console.log('finished checkout');
			}
		} catch (error) {
			console.error('Error fetching session status:', error);
		}
	}
}

// This is for elements not yet available when the script runs
function watchForElements(selector, callback) {
    const observer = new MutationObserver((mutations, obs) => {
        const elements = document.querySelectorAll(selector);
        if (elements.length > 0) {
            callback(elements);
            obs.disconnect(); // Stop observing once elements are found
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
}

function stripQueryParams(urlString) {
  const url = new URL(urlString);
  return url.origin + url.pathname;
}

function loginUser() {
	// console.log(tp);
	var user = tp.pianoId.getUser();
	// console.log(user);
	var name = user.email.slice(0,2);
	if(user.firstName && user.lastName){
		name = user.firstName.slice(0,1)+user.lastName.slice(0,1);
	}else if(user.firstName){
		name = user.firstName.slice(0,2);
	}else if(user.lastName){
		name = user.lastName.slice(0,2);
	}

	watchForElements('.header-nav__button--account', (elements) => {
		elements[0].style.display = 'block';
	});
	
	watchForElements('.header-nav__button--login', (elements) => {
		elements[0].style.display = 'none';
	});

	if(document.querySelectorAll("#auth-link-1").length > 0){
		const button1 = document.getElementById('auth-link-1');
		const button2 = document.getElementById('auth-link-2');

		button1.innerHTML = 'My Account';
		button1.href = '/my-account';
		button2.innerHTML = 'Logout';

		button2.addEventListener('click', function() {
		// console.log('Logout button clicked');
		button2.innerText = 'Please wait';

			tp.user.logout(function () {
			setTimeout(function() {
				tp.pianoId.logout();
				window.location.href = window.location.origin;
			}, 2000);
			});
		});
	}

	if(document.querySelectorAll("#briefingAccount").length > 0){
		var accountContainer = document.getElementById('briefingAccount');
		if (tp.user.isUserValid()) {
			// User is logged in => show Logout button
			accountContainer.innerHTML = '<button id="logoutBtn">Logout</button>';
			document.getElementById('logoutBtn').addEventListener('click', function() {
				tp.pianoId.logout();
				window.location.reload();
			});
		} else {
			// User is not logged in => show Login button
			accountContainer.innerHTML = '<button id="loginBtn">Login</button>';
			document.getElementById('loginBtn').addEventListener('click', function() {
				tp.pianoId.show({ screen: 'login' });
			});
		}
	}
	
	if(document.querySelectorAll(".single-post").length > 0){
		document.querySelector(".single-post").classList.add('logged-in');
	}
	
	if(document.querySelectorAll(".hamburger").length > 0){
		document.querySelector(".hamburger").innerHTML = '<div class="user-name">'+name+'</div>';
	}

	[].forEach.call(document.querySelectorAll('.not-logged'), function (el) {
		el.style.display = 'none';
	});

	[].forEach.call(document.querySelectorAll('.logged'), function (el) {
		el.style.display = 'block';
	});

	if(document.querySelectorAll('.piano-login-link').length > 0){
		document.querySelectorAll('.piano-login-link').forEach(function(el) {
			el.classList.add('loggedin');
			el.innerHTML = '<a href="/my-subscription">My Account</a>';
		});
	}

}

document.addEventListener('DOMContentLoaded', async function() {

	window.addEventListener('message', (event) => {
		if (event.data?.type === 'checkoutData') {
			// console.log('Message received from Piano iframe:', event.data);
			// latestCustomInput = event.data.value;
			localStorage.setItem('offerFields_' + event.data.fieldId, event.data.value);
			// console.log('Received from Piano iframe:', latestCustomInput);
		}
	});		// TEMPORARY: Set 'spec_subs_attribution' in localStorage as a JSON object for testing
		if (!localStorage.getItem('spec_subs_attribution')) {
			const mockAttribution = {
				source: 'newsletter',
				campaign: 'spring2026',
				medium: 'email',
				timestamp: Date.now()
			};
			localStorage.setItem('spec_subs_attribution', JSON.stringify(mockAttribution));
			console.log('Temporary: spec_subs_attribution JSON set in localStorage', mockAttribution);
		}

	// Initialize the tp object
    tp = window["tp"] || [];

    // Define the linkedTermSelected callback function
    function onLinkedTermSelected(sessionId, linkedTerm) {

		const specSubsAttribution = localStorage.getItem('spec_subs_attribution');
		if (specSubsAttribution) {
			document.cookie = 'spec_subs_attribution=' + encodeURIComponent(specSubsAttribution) + '; path=/';
		}
		
		var data;
		if(linkedTerm.linkedTermData !== undefined){
			data = linkedTerm.linkedTermData;
			var payload = data;
			var externalTermId = data.externalTermId;
			var externalProductId = data.externalProductIds;

		} else if (linkedTerm.linkTermSignedData !== undefined) {
			data = linkedTerm.linkTermSignedData;
			var payload = JSON.parse(data.payload);
			var externalTermId = payload.externalTermId;
			var externalProductId = payload.externalProductIds;

		} else {
			console.log('No link term data found');
		}	
		
		const url = new URL(config.checkoutUrl.replace(/\/+$/, '')); // remove trailing slashes + create URL object

		// Append or update all parameters
		url.searchParams.set('session_id', sessionId);
		url.searchParams.set('term_id', externalTermId);
		url.searchParams.set('coupon', payload.customData.coupon ?? '');
		url.searchParams.set('offer_id', payload.customData.offer_id ?? '');
		url.searchParams.set('price_id', externalTermId);
		url.searchParams.set('product_id', externalProductId);
		url.searchParams.set('coupon_id', payload.customData.coupon_id ?? '');
		url.searchParams.set('description', payload.customData.product_description ?? '');
		url.searchParams.set('refer_url', encodeURIComponent(window.location.href));
		url.searchParams.set('allow_shipping', payload.customData.allow_shipping ?? 'false');
		url.searchParams.set('free_gift', payload.customData.free_gift ?? '');
		url.searchParams.set('transaction_type', payload.customData.transaction_type ?? '');
		url.searchParams.set('request_phone_number', payload.customData.request_phone_number ?? '');

		// Now redirect
		window.location.href = url.toString();

    }

    tp.push(['setLinkedTermSelected', onLinkedTermSelected])

	tp.push(["setRequestUserAuthForLinkedTerm", false]);
	
    // Initialize the Piano experience
    tp.push(["init", function() {
        if (!tp.pianoId.isUserValid()) {
            tp.pianoId.init();
        }

		if (tp.pianoId.isUserValid()) {
			document.body.classList.add('coeditor-logged-in');
		}
		
        tp.experience.init();
    }]);

	await handleCheckoutSession();
	
	tp.push(["setUsePianoIdUserProvider", true]);


	const urlParams = new URLSearchParams(window.location.search);
	const nonce = urlParams.get('__nonce');
	const checkoutSessionId = urlParams.get('checkout_session_id');

	if (checkoutSessionId !== null && (nonce === null || nonce === 'false')) {
		
		urlParams.set('__nonce', 'true');
		const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
		window.history.replaceState({}, '', newUrl);
	}
	
	if (urlParams.get('checkout_session_id') != null) {
		loginUser();
	}

	initialize();
	
	async function initialize() {
	
		const urlParams = new URLSearchParams(window.location.search);
		
		if(urlParams.get('session_id') === null) {
			console.log("No session_id provided");
			return;
		} else {
			const nonce = urlParams.get('__nonce');

			// console.log('Checking nonce value (__nonce:', nonce, ')');
	
			// if (nonce === null || nonce === 'false') {
				let stripeSecretKey = null;
				let stripePublicKey = null;
				let stripeAccountId = null;

				// console.log('Nonce check passed, proceeding with checkout logic (__nonce:', nonce, ')');

				const getCookie = (name) => {
					const value = `; ${document.cookie}`;
					const parts = value.split(`; ${name}=`);
					if (parts.length === 2) return parts.pop().split(';').shift();
				};

				const decodeJWT = (token) => {
					try {
						const [header, payload, signature] = token.split('.');
						const decodedPayload = JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')));
						return decodedPayload;
					} catch (error) {
						console.error('Failed to decode JWT:', error);
						return null;
					}
				};

				const fetchClientSecret = async () => {
					const utpCookie = getCookie('__utp');
					const offer = localStorage.getItem("templateId");

					const product = {
						price_id: urlParams.get('price_id'),
						term_id: urlParams.get('term_id'),
						product_id: urlParams.get('product_id'),
						session_id: urlParams.get('session_id'),
						allow_billing_address: urlParams.get('allow_shipping'),
						coupon: urlParams.get('coupon'),
						coupon_id: urlParams.get('coupon_id'),
						description: urlParams.get('description'),
						refer_url: decodeURIComponent(urlParams.get('refer_url')),
						free_gift: urlParams.get('free_gift'),
						transaction_type: urlParams.get('transaction_type'),
						request_phone_number: urlParams.get('request_phone_number'),
						offer_fields: {}
					};

					const prefix = "offerFields_";
					for (let i = 0; i < localStorage.length; i++) {
						const key = localStorage.key(i);
						if (key.startsWith(prefix)) {
							const fieldId = key.replace(prefix, "");
							product.offer_fields[fieldId] = localStorage.getItem(key);
						}
					}

					if (utpCookie) {
						const decodedPayload = decodeJWT(utpCookie);
						if (decodedPayload?.email) {
							product.customer_email = decodedPayload.email;
							localStorage.setItem("coeditor_customer_email", decodedPayload.email);
						}
					}

					// FALLBACK HERE
					if (!product.customer_email) {
						const storedEmail = localStorage.getItem("coeditor_customer_email");
						if (storedEmail) product.customer_email = storedEmail;
					}

					const cleanBaseUrl = stripQueryParams(config.baseUrl);

					const response = await fetch(`${cleanBaseUrl}/wp-json/coeditor-connector/v1/stripe-create-session`, {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(product),
					});

					const result = await response.json();

					// Assign the keys to variables outside
					stripeSecretKey = result.secret_key;
					stripePublicKey = result.public_key;
					stripeAccountId = result.account_id;

					return [{
						clientSecret: result.clientSecret,
						secretKey: result.secret_key,
						publicKey: result.public_key,
						accountId: result.account_id
					}];
				};

				const [{
					clientSecret,
					secretKey,
					publicKey,
					accountId
				}] = await fetchClientSecret();

				// Use the public key for frontend Stripe
				const stripe = Stripe(stripePublicKey || config.stripeKey);

				const checkout = await stripe.initEmbeddedCheckout({
					clientSecret,
				});

				// Mount Checkout
				checkout.mount('#checkout');

			// } else {
			// 	console.log('Nonce check failed, skipping checkout logic (__nonce:', nonce, ')');
			// }
		}
	}
	

});

(function( $ ) {
	'use strict';

	$(document).ready(function() {
		$(document).on('click', '.do_cross_sell', function(e) {
			e.preventDefault();

			// console.log('Checking user...');
			let data;

			const urlParams = new URLSearchParams(window.location.search);
			// console.log(urlParams.get('checkout_session_id'));

			const email = this.getAttribute('data-email');
			if (!email) return alert('Missing email.');

			const productId = this.getAttribute('data-product');       // from data-product=""
        	const publication = this.getAttribute('data-publication'); // from data-publication=""
			
			jQuery.ajax({
				type: 'POST',
				url: coeditorConnectorConfig.ajax_url,
				data: {
					action: 'cross_sell_user',
					session: urlParams.get('checkout_session_id'),
					stripe_account: urlParams.get('sid'),
					productId: productId,
					publication: publication,
					nonce: coeditorConnectorConfig.nonce
				},
				success: function(response) {
					document.getElementById('cross_sell_wrapper').innerHTML = '';
					data = typeof response === 'string' ? JSON.parse(response) : response;
					if (data.success) {
						document.getElementById('cross_sell_wrapper').innerHTML = data.rendered_template; 
					}
				},
				error: function(err) {
					console.error('AJAX error:', err);
				}
			});
		});
	});
})( jQuery );