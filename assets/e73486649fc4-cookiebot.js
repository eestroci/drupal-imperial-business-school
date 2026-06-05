if ( !Cookiebot.consent.marketing ) 
{
	var adDivs = document.querySelectorAll('div[id^="div-gpt-ad-"]');
	var el = document.querySelector(".container ");
	var iframes = el.querySelectorAll("iframe");

	adDivs.forEach(element => {
		//console.log(element);
		element.innerHTML += '<div class="cookieconsent-optout-marketing">Our partners keep P&Q free<br>This placement is unavailable due to cookie settings.<br><a href="javascript: Cookiebot.renew()"> Accept All cookies.</a></div>';
	});

	Array.from(iframes).forEach(element => {
			// console.log(element, jQuery( element ) );
			element.insertAdjacentHTML('beforebegin', '<div class="cookieconsent-optout-marketing">Our partners keep P&Q free<br>This media is unavailable due to cookie settings.<br><a href="javascript: Cookiebot.renew()"> Accept All cookies.</a></div>');
	});

	function CookiebotCallback_OnAccept() {
		var el = document.querySelector(".container ");
		var iframes = el.querySelectorAll("iframe");
		
		console.log( 'Accept called', adDivs, iframes );

		adDivs.forEach(element => {
			element.innerHTML += '';
		});
		iframes.forEach(element => {	
			element.innerHTML += '';
		});
		
		window.location.reload();
	}  
}


function CookiebotCallback_OnDecline() {
	var adDivs = document.querySelectorAll('div[id^="div-gpt-ad-"]');
	var el = document.querySelector(".container ");
	var iframes = el.querySelectorAll("iframe");

	console.log( 'Decline Callback' );

	adDivs.forEach(element => {
		if ( jQuery( '.cookieconsent-optout-marketing', element ).length <= 0 )
		{
			element.innerHTML += '<div class="cookieconsent-optout-marketing">Our partners keep P&Q free<br>This placement is unavailable due to cookie settings.<br><a href="javascript: Cookiebot.renew()"> Accept All cookies.</a></div>';
		}
	});

	Array.from(iframes).forEach(element => {
		//console.log(element);
		if ( jQuery( '.cookieconsent-optout-marketing', element ).length <= 0 )
		{
			element.insertAdjacentHTML('beforebegin', '<div class="cookieconsent-optout-marketing" style="display:block;">Our partners keep P&Q free<br>This media is unavailable due to cookie settings.<br><a href="javascript: Cookiebot.renew()"> Accept All cookies.</a></div>');
		}
		element.innerHTML += '';
	});

	if ( Cookiebot.changed ) {
		document.location.reload();
	}
}