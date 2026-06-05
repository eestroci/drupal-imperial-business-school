/*******************************************************************************
 * Global Message script.                                                       *
 *******************************************************************************
 *                                                                             *
 * Renders a custom web component to display global messages.                  *
 *                                                                             *
 * Usage:                                                                      *
 *                                                                             *
 * Show the global message at top of the page:                                 *
 * initGlobalMessage()                                                         *
 *                                                                             *
 * Show the global message inside a specific div on the page:                  *
 * initGlobalMessage(id)                                                       *
 *                                                                             *
 * ****************************************************************************/

(function () {
    const API_URL = "https://messages-api.ukdataservice.ac.uk/";
    const CACHE_KEY = "ukdaGlobalMessageCache";
    const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 1 day

    window.initGlobalMessage = async function (containerId) {
        // Skip if previously dismissed
        if (sessionStorage.getItem("globalMessageHidden") === "true") {
            return;
        }

        let messages = [];
        const cached = sessionStorage.getItem(CACHE_KEY);

        if (cached) {
            try {
                const parsed = JSON.parse(cached);

                if (Date.now() - parsed.timestamp < CACHE_TTL_MS) {
                    messages = getFilteredMessages(parsed.data);
                }
            } catch (err) {
                console.warn("Global Message: Cache parse failed", err);
            }
        }
        else {
            try {
                const response = await fetch(API_URL);
                messages = await response.json();

                sessionStorage.setItem(
                    CACHE_KEY,
                    JSON.stringify({
                        data: messages,
                        timestamp: Date.now()
                    })
                );
            } catch (err) {
                console.error("Global Message: API request failed", err);
                return;
            }
        }
       
        if (!Array.isArray(messages)) return;

        const filteredMsgs = getFilteredMessages(messages);

        if (filteredMsgs.length === 0) return;

        // Build message HTML lines
        const messageHtml = filteredMsgs.map(msg => `<div class="gm-line">${msg.message}</div>`).join("");

        // Build wrapper
        const wrapper = document.createElement("div");
        wrapper.className = "global-message";
        wrapper.innerHTML = `
            <div class="gm-container">
                <div class="gm-content" role="region" aria-label="global-message-content">
                    <div class="gm-text">
                        ${messageHtml}
                    </div>
                    <button class="gm-dismiss">
                        <svg width="10" height="10" viewBox="0 0 14 14" fill="none"
                            style="vertical-align:middle;">
                            <path d="M1 1 L13 13 M13 1 L1 13"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        <span class="gm-dismiss-text">Dismiss message</span>
                    </button>
                </div>
            </div>
        `;

        injectGlobalMessageStyles();

        // Insert into DOM
        if (containerId && document.getElementById(containerId)) {
            document.getElementById(containerId).appendChild(wrapper);
        } else {
            document.body.insertBefore(wrapper, document.body.firstChild);
        }

        // Dismiss feature
        wrapper.querySelector(".gm-dismiss").addEventListener("click", () => {
            sessionStorage.setItem("globalMessageHidden", "true");
            wrapper.remove();
        });
    };

    // CSS injection
    function injectGlobalMessageStyles() {
        if (document.getElementById("global-message-style")) return;

        const style = document.createElement("style");
        style.id = "global-message-style";
        style.textContent = `
            .global-message {
                width: 100%;
                background: #fbe5b3;
                color: #212322;
                box-sizing: border-box;
                font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            }   
            .gm-container {
                width: 1280px;
                max-width: calc(100% - 40px);
                margin: auto;
                padding: 10px 20px;
            }      
            .gm-content {
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                gap: 20px;
            }
            .gm-text {
                white-space: pre-line;
                line-height: 1.5;
            }
            .gm-line {                
                font-size:16px;
                margin-bottom: 10px;
            }
            .gm-line:last-child {
                margin-bottom: 0;
            }
            .gm-dismiss {
                background: none;
                border: none;
                color: #702082;
                cursor: pointer;
                font-size: 15px;
                align-self: center;
                white-space: nowrap;
                flex-shrink: 0;
            }            
            .gm-dismiss:hover {
                opacity: 0.85;
            }          
            .global-message a {
                color: #702082;
                text-decoration: underline;
            }          
        `;
        document.head.appendChild(style);
    }

    function getFilteredMessages(messages) {
        let currentDomain = window.location.hostname;

        //   // When developing locally, force domain to the staging domain. Leaving it still here for testing later
        //     if (currentDomain === "127.0.0.1" || currentDomain === "localhost") {
        //         currentDomain = "data-archive.staging.data-archive.ac.uk";
        //     }

        // Step 1: Filter messages
        const filtered = messages.filter(msg => {
            const { onlyOnDomain, domain_exclusion } = msg;

            if (onlyOnDomain && onlyOnDomain.trim() !== "") {
                return onlyOnDomain === currentDomain;
            }

            if ( Array.isArray(domain_exclusion) && domain_exclusion.includes(currentDomain)) {
                return false;
            }

            return true;
        });

        // Step 2: Sort so emergency messages appear first
        filtered.sort((a, b) => {
            if (a.isEmergency === b.isEmergency) return 0;
            return a.isEmergency ? -1 : 1;
        });

        return filtered;
    }

})();
