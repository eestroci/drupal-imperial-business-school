(function( $ ) {
	'use strict';

	$(document).ready(function() {
		// (function(src){
		// 	var a=document.createElement("script");
		// 	a.type="text/javascript";
		// 	a.async=true;
		// 	a.src=src;
		// 	var b=document.getElementsByTagName("script")[0];
		// 	b.parentNode.insertBefore(a,b)
		// })("https://sandbox.tinypass.com/xbuilder/experience/load?aid=i85i5YZ0su");

		const pianoConfig = {
			pianoAppId: coeditorPianoConfig.pianoAppId,
			sandbox: coeditorPianoConfig.sandbox,
			pianoIdUrl: coeditorPianoConfig.pianoIdUrl,
			staticDomain: coeditorPianoConfig.staticDomain,
			composerHost: coeditorPianoConfig.composerHost,
			endpoint: coeditorPianoConfig.endpoint
		};

		console.log('Start Piano Int Code');

		tp = window.tp || [];

		tp.push(["setRequestUserAuthForLinkedTerm", false]);

		tp.push(["setAid", pianoConfig.pianoAppId]); 

		// Add this line for the Composer 1x feature. It will set your Site ID 
		// tp.push(["setCxenseSiteId", "<Site_ID>"]) 
		// Use https://sandbox.tinypass.com/api/v3 for sandbox
		if(pianoConfig.sandbox){
			tp.push(["setEndpoint", 'https://sandbox.tinypass.com/api/v3']); 
		} else {
			tp.push(["setEndpoint", 'https://buy.tinypass.com/api/v3']); 
		}

		console.log(pianoConfig);

		// In most cases this is false unless instructed otherwise 
		tp.push(["setUseTinypassAccounts", false]); 
		// Set to "true" if application uses Piano id 
		tp.push(["setUsePianoIdUserProvider", true]);  

		if(pianoConfig.pianoIdUrl){
			tp.push(["setPianoIdUrl", pianoConfig.pianoIdUrl]);
		}	
		
		// tp = window.tp || []; 	 
		tp.push(["init", function () { 
			
			tp.experience.init(); 
		}]);

		tp.push(["init", function() {

			if(pianoConfig.composerHost){
				console.log('Set Composer Host:', pianoConfig.composerHost);
				tp.push(["setComposerHost", pianoConfig.composerHost]);
			}

			if(pianoConfig.endpoint){
				tp.push(["setEndpoint", pianoConfig.endpoint]);
			}

			if(pianoConfig.staticDomain){
				tp.push(["setStaticDomain", pianoConfig.staticDomain]);
			}

			if (!tp.pianoId.isUserValid()) {
				tp.pianoId.init();
				console.log('Piano ID initiated.');
			}
			tp.experience.init();
			console.log('Piano experience initialized.');

			
		}]);

		//Temp: Specific to Briefing site
		if(document.querySelectorAll("#briefingAccount").length > 0){
			// Add your login/logout UI logic
			tp.push(["init", function() {
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
			}]);
		}

		console.log('init Piano');

		if (window.tp && typeof tp.experience === 'object' && typeof tp.pianoId === 'object') {
			console.log('Piano integration loaded.');
		} else {
			console.error('Piano integration not loaded properly.');
		}

		[].forEach.call(document.querySelectorAll('.login, .login a'), function (el) {
			el.addEventListener('click', function (evt) {
				evt.preventDefault();
				evt.stopPropagation();
	
				tp.user.showLogin();
			}, false);
		});
	
		[].forEach.call(document.querySelectorAll('.register'), function (el) {
			el.addEventListener('click', function (evt) {
				evt.preventDefault();
				evt.stopPropagation();
	
				tp.pianoId.show({
					screen: 'register',
					loggedIn: function (data) {
	
					}
				});
			}, false);
		});
	
		[].forEach.call(document.querySelectorAll('.logout, .logout a'), function (el) {
			el.addEventListener('click', function (evt) {
				evt.preventDefault();
				evt.stopPropagation();
	
				tp.user.logout(function () {
					location.reload();
				});
			});
		});

	});

})( jQuery );
