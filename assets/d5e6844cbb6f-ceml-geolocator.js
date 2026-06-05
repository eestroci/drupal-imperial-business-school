/**
 * Appends '?edition=us' to all internal navigation links if the US edition is active.
 * This helps the caching system differentiate between US and non-US content.
 * @param {string} edition - The current active edition code (e.g., 'US', 'EN').
 */
function updateNavLinksForUSEdition(edition) {

    if (edition !== 'US') {
        return;
    }

    const navContainer = document.getElementById('navigation');
    if (!navContainer) {
        return; 
    }

    const navLinks = navContainer.querySelectorAll('a');

    navLinks.forEach(link => {

        if (link.classList.contains('skip-us')) {
            return; 
        }
  
        // Ensure the link has a valid href that we can process.
        if (!link.href || link.getAttribute('href').startsWith('#')) {
            return;
        }

        try {
            const url = new URL(link.href);

            // Only modify internal links that don't already have the parameter.
            if (url.hostname === window.location.hostname && !url.searchParams.has('edition')) {
                url.searchParams.set('edition', 'us');
                link.href = url.toString();
            }
        } catch (error) {
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {

    // (fallback to EN if PHP failed)
    const settings = (typeof cemlEdition !== 'undefined') ? cemlEdition : { 
        currentEdition: 'EN', 
        apiUrl: '', 
        nonce: '' 
    };

    const serverEdition = settings.currentEdition;
    
    const currentUrl = new URL(window.location.href);
    const urlParam = currentUrl.searchParams.get('edition');
    const setParam = currentUrl.searchParams.get('set_edition');

    // --- ENFORCER LOGIC ---
    if (!setParam) {
        let shouldUpdateUrl = false; // Renamed for clarity

        // CASE A: Server says US -> URL MUST have ?edition=us
        if (serverEdition === 'US') {
            if (urlParam !== 'us') {
                currentUrl.searchParams.set('edition', 'us');
                shouldUpdateUrl = true;
            }
        } 
        // CASE B: Server says EN -> URL MUST NOT have ?edition param
        else {
            if (urlParam !== null) {
                currentUrl.searchParams.delete('edition');
                shouldUpdateUrl = true; 
            }
        }

        // --- EXECUTE ---
        if (shouldUpdateUrl) {
            window.history.replaceState(null, '', currentUrl.toString());
        
            // If we just enforced US mode, update the links immediately
            if (serverEdition === 'US') {
                updateNavLinksForUSEdition('US');
            }
        
            // STOP HERE: The server has spoken. No need to fetch the API.
            return;
        }
    }

    // --- COOKIE LOGIC ---

    const COOKIE_NAME = 'ceml_edition_pref';
    const COOKIE_DAYS = 10;

    const setCookie = (name, value, days = COOKIE_DAYS) => {
        const date = new Date();
        date.setTime(date.getTime() + (days * 86400000)); // 24*60*60*1000
        document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
    };

    const getCookie = (name) => {
        return document.cookie
            .split('; ')
            .find(row => row.startsWith(name + '='))?.split('=')[1] || null;
    };

    const currentPath = window.location.pathname;

    // Reset cookie to 'EN' on the login page
    if (currentPath.includes('wp-login.php')) {
       // setCookie(COOKIE_NAME, 'EN');
        return;
    }

    // --- DISCOVERY LOGIC (ASYNC API) ---

    const determineActiveEdition = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        let activeEdition = null;
        let isGeoLookup = false;

        // PRIORITY 1: A 'set_edition' URL parameter.
        if (urlParams.get('set_edition')) {
            activeEdition = urlParams.get('set_edition').toUpperCase();
        }

        // PRIORITY 2: The existing user preference cookie.
        if (!activeEdition) {
            activeEdition = getCookie(COOKIE_NAME);
        }

        // PRIORITY 3: Fetch from the GeoIP API endpoint.
        if (!activeEdition) {
            try {
                // 2. UPDATED: Using 'cemlEdition' (mapped to 'settings' variable above)
                const response = await fetch(settings.apiUrl, {
                    method: 'GET',
                    credentials: 'same-origin',
                    headers: {
                        'X-WP-Nonce': settings.nonce,
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) throw new Error('Network response was not ok.');
                const data = await response.json();
                
                activeEdition = data.edition;
                isGeoLookup = true; 
            } catch (error) {
                console.warn('Geo endpoint failed:', error);
            }
        }

        // PRIORITY 4: A final fallback default.
        if (!activeEdition) {
            activeEdition = 'EN';
        }

        return { activeEdition, isGeoLookup };
    };


    determineActiveEdition().then(({ activeEdition, isGeoLookup }) => {

        // Action 1: Set/update the cookies if needed.
        if (getCookie(COOKIE_NAME) !== activeEdition) {
            setCookie(COOKIE_NAME, activeEdition);
            setCookie('edition', activeEdition.toLowerCase());
        }

        // Only run on fresh Geo API lookup to prevent loops
        if (isGeoLookup) {
            
            const currentUrl = new URL(window.location.href);
            const currentParam = currentUrl.searchParams.get('edition'); 
            let shouldRedirect = false;

            // Scenario A: Active Edition is US.
            if (activeEdition === 'US' && currentParam !== 'us') {
                currentUrl.searchParams.set('edition', 'us');
                shouldRedirect = true;
            } 
            
            // Scenario B: Active Edition is EN.
            else if (activeEdition === 'EN' && currentParam !== null) {
                currentUrl.searchParams.delete('edition');
                shouldRedirect = true;
            }

            if (shouldRedirect) {
                // HARD RELOAD
                window.location.replace(currentUrl.toString());
                return; 
            }
        }

        // Action 2: Update the navigation links based on the final edition.
        updateNavLinksForUSEdition(activeEdition);
    });
});