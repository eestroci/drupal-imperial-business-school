jQuery(document).ready(function ($) {

	if($(window).width() >= 800){
		var $doc = $(document),
			ad_copy = $('#welcome-ad').html(),
			ad_storage = $.jStorage.get('mitSmrWelcome');

		function mit_run_welcome_ad(ad_copy) {


				if ($.jStorage.get('mitSmrWelcome') !== null){

					setTimeout(function () {
						
							$('body').append('<div style="display:none;"><a id="wad-trigger" href="#wad"></a><div id="wad">' + ad_copy + '</div></div>');
							$("#wad-trigger").colorbox({
								html:'<div id=\'div-gpt-ad-1582850354638-0\' class=\'welcome-ad-container\'></div>',
								innerWidth: 740,
								innerHeight: 600,
								fixed: true,
								opacity: 0.4,
								transition: 'none',
								className: 'welcome-box',
								onComplete: 
									function(){ 
											googletag.cmd.push(function() {
												googletag.display('div-gpt-ad-1582850354638-0');
											}); 
									}
							}).click();
						
					}, 3000);
				}
		}
		
		if(ad_storage === null){
			$.jStorage.set('mitSmrWelcome', 'returnVisit', {TTL: welcome_ad_timeout});
			mit_run_welcome_ad(ad_copy);
		} else {
			var ttl = $.jStorage.getTTL("mitSmrWelcome");
			if (ttl <= 0) {
				$.jStorage.setTTL("mitSmrWelcome", welcome_ad_timeout);
				mit_run_welcome_ad(ad_copy);
			}
		}
	}
});