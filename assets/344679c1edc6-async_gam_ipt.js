function ipt(url, publisherName, lastUpdateTime) {
    const baseUrl = `https://${publisherName}.illuma-tech.com/VendorService?page_url=`;
    let fullUrl = baseUrl + encodeURIComponent(url);

    if (lastUpdateTime) {
        fullUrl += `&last_update_time=${encodeURIComponent(lastUpdateTime)}`
    }

    // Return the promise for flexibility
    return (async () => {
        try {
            // Fetch data from the endpoint
            const response = await fetch(fullUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            // Parse the response
            const data = await response.json();

            // Check if googletag is defined
            if (window.googletag) {
                // Set targeting in Google Ad Manager
                for (const category in data.results) {
                    if (Object.prototype.hasOwnProperty.call(data.results, category)) {
                        const value = data.results[category];
                        const valueArray = Array.isArray(value) ? value : [value];
                        window.googletag.pubads().setTargeting(category, valueArray);
                    }
                }
            } else {
                throw new Error("googletag is not defined. Make sure the Google Ad Manager library is loaded.");
            }
            
        } catch (error) {
            console.error("Error executing ipt function:", error);
        }
    })();
}

