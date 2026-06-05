jQuery(document).ready(function($) {

	// Escaping input, thanks http://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
	function escapeRegExp( str ) {
		return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
	}
	
	function loggedIn() {
		$('.is-logged-in').show();
		$('.is-not-logged-in').hide();
	}
	
	function loggedOut() {
		$('.is-logged-in').hide();
		$('.is-not-logged-in').show();
	}

	$('.login-button[title="Logout"]').bind('click', function( event ) {
			event.preventDefault();
			
			cookie.remove( 'wordpress_logged_in_nocache' );
			cookie.set( 'wordpress_logged_in_nocache', '', {expires: -1, path: '/' });
			
			cookie.remove( 'is_pq_user' );
			cookie.set( 'is_pq_user', 'no', {expires: -1, path: '/' });
			
			cookie.remove( 'pq_user_first_name' );
			cookie.set( 'pq_user_first_name', '', {expires: -1, path: '/' });
			
			cookie.remove( 'pq_user_last_name' );
			cookie.set( 'pq_user_last_name', '', {expires: -1, path: '/' });
			
			cookie.remove( 'pq_user_email' );
			cookie.set( 'pq_user_email', '', {expires: -1, path: '/' });
			
			cookie.remove( 'pq_redirect' );
			cookie.set( 'pq_redirect', '', {expires: -1, path: '/' });
			
			cookie.remove( 'pq_paywall' );
			cookie.set( 'pq_paywall', '', {expires: -1, path: '/' });
			
			// show Login Button
			loggedOut();
		});
		
		
		if ( cookie.get( 'is_pq_user' ) ) {
			console.log ( 'logged in' );
			loggedIn();
		}
		else {
			loggedOut();
		}
			
});