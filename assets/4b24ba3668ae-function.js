//Global Variables
const uv = universal_variable;

const SiteScripts = (function () {
	// Private variables
	const debugParam = 'im_debug';
	const consoleEventLog = [];
	const currentUrlParams = new URLSearchParams(window.location.search);

	// Logs messages to the console if ?im_debug is present
	const consoleLog = (message, options = {}) => {
		// Exit if ?im_debug is not present
		if (!currentUrlParams.has(debugParam)) return;

		const urlDebugValue = currentUrlParams.get(debugParam);

		// Destructure debugValue; capture the rest of the data
		const { debugValue: filterKey = '', ...data } = options;

		// Log only if no filter is set or it matches the URL param
		if (!filterKey || urlDebugValue === filterKey) {
			// Log message with data if present, else just the message
			if (Object.keys(data).length > 0) {
				console.log(message, data);
			} else {
				console.log(message);
			}
			consoleEventLog.push(message);
		}
	};

	// Adds the ?im_debug parameter to internal links
	const addDebugParamToLinks = () => {
		if (currentUrlParams.has(debugParam)) {
			const debugValue = currentUrlParams.get(debugParam) || '';
			document.querySelectorAll('a[href]').forEach((link) => {
				const url = new URL(link.href, window.location.origin);
				if (url.origin === window.location.origin) {
					url.searchParams.set(debugParam, debugValue);
					link.href = url.toString();
				}
			});
		}
	};

	// Safely executes a function with error handling
	const tryCatchWrapper = (fn) => {
		try {
			fn();
		} catch (error) {
			console.error('An error occurred:', error);
		}
	};

	// Add Schema Script to the page
	const addSchemaScript = () => {
		setTimeout(() => {
			const pageUrl = window.location.href;
			const homepage = 'https://www.investmentweek.co.uk/';

			if (pageUrl === homepage) {
				const logoImg = document.querySelector('.top_header .logo img');

				if (logoImg) {
					const imageURL = logoImg.getAttribute('src');
					const script = document.createElement('script');

					script.type = 'application/ld+json';

					const jsonData = {
						'@context': 'https://schema.org',
						'@type': 'Organization',
						name: 'Investment Week',
						url: pageUrl,
						logo: imageURL,
					};

					script.textContent = JSON.stringify(jsonData, null, 2);

					document.head.appendChild(script);
				} else {
					console.error('Logo image not found');
				}
			}
		}, 100);
	};

	// Adds a pride ribbon to the page
	const addPrideRibbon = () => {
		const navbarOffset = document.querySelector('.navbar')?.offsetTop + 76 || 0;
		document.querySelector('#rdm-wallpaper.ad-slot-wallpaper')?.style.setProperty('top', `${navbarOffset}px`);
		const ribbon = document.createElement('div');
		ribbon.className = 'pride-ribbon';
		ribbon.style.cssText = 'background: linear-gradient(to right,#652f8f,#ed1c7a,#f86300,#f39205,#ff0,#56b847,#8be4ff,#2667ff,#652f8f);position:relative;display:block;width:100%;height:13px;';
		document.querySelector('.upcoming-events-ticker')?.insertAdjacentElement('beforebegin', ribbon);
	};

	// Returns the current UK time as a locale string
	const getUKTimeString = () => new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' });

	// Returns the current UK date in YYYY-MM-DD format
	const getUKDate = () => getUKTimeString().split('/').reverse().join('-');

	// Article Page - Hide Previous And Next
	const initHidePreviousAndNext = () => {
		const element = document.querySelector('.pagination-article');
		element.style.display = 'none';
	};

	// Article Page - Add Long Form Billboards for no RHC articles
	const addLongFormBillBoards = () => {
		document.body.classList.add('longform_article');

		const longformBillboards = document.querySelectorAll('.longform-billboard');
		if (longformBillboards.length > 0) {
			longformBillboards.forEach((billboard, index) => {
				const indexVal = index + 1;
				const newDiv = document.createElement('div');
				newDiv.id = 'rdm-longform-billboard-' + indexVal;
				billboard.prepend(newDiv);
			});
		}
	};

	// Article Page - Sticky ad logic - add the start and end divs between ".rdm-rhc-below-article-summary"
	const addStickyElements = () => {
		const articleSummary = document.querySelector('#rdm-rhc-below-article-summary');
		if (!articleSummary) return;

		// Add sticky-start and sticky-end elements
		const stickyStart = document.createElement('div');
		stickyStart.classList.add('sticky-start');
		articleSummary.parentNode.insertBefore(stickyStart, articleSummary);

		const stickyEnd = document.createElement('div');
		stickyEnd.classList.add('sticky-end');
		articleSummary.parentNode.insertBefore(stickyEnd, articleSummary.nextSibling);

		// Scroll event handler
		const onScroll = () => {
			const articleSummaryWrapper = document.getElementById('rdm-rhc-below-article-summary-wrapper');
			if (!articleSummaryWrapper || universal_variable.page.type !== 'article') return;

			const scrollTop = window.scrollY || document.documentElement.scrollTop;
			const articleSummaryOffset = articleSummary.getBoundingClientRect().top + window.pageYOffset;
			const stickyStartOffset = stickyStart.getBoundingClientRect().top + window.pageYOffset;
			const stickyEndOffset = stickyEnd.getBoundingClientRect().top + window.pageYOffset;

			// Add/remove "ad-sticky" class based on scroll position
			if (articleSummary.offsetHeight > 50) {
				if (scrollTop >= articleSummaryOffset && scrollTop <= stickyEndOffset) {
					articleSummaryWrapper.classList.add('ad-sticky');
				} else if (scrollTop >= stickyEndOffset || scrollTop >= stickyStartOffset) {
					articleSummaryWrapper.classList.remove('ad-sticky');
				} else {
					articleSummaryWrapper.classList.remove('ad-sticky');
				}
			}
		};

		// Attach scroll event listener
		window.addEventListener('scroll', onScroll, { passive: true });
	};

	// Retrieves the value of a query parameter, or false if not found
	const getQueryVariable = (variable) => currentUrlParams.get(variable) || false;

	// Public API
	return {
		consoleLog,
		addDebugParamToLinks,
		tryCatchWrapper,
		addSchemaScript,
		addPrideRibbon,
		addStickyElements,
		initHidePreviousAndNext,
		addLongFormBillBoards,
		getQueryVariable,
	};
})();

// Execute the scripts
SiteScripts.tryCatchWrapper(SiteScripts.addSchemaScript);

document.addEventListener('DOMContentLoaded', function () {
	SiteScripts.addDebugParamToLinks();
	// SiteScripts.addPrideRibbon();

	if (uv.page.type === 'article') {
		// SiteScripts.addStickyElements();
		// SiteScripts.initHidePreviousAndNext();
	}

	if (universal_variable.page.type === 'article' && document.querySelectorAll('.common-right-hand-block').length === 0) {
		SiteScripts.addLongFormBillBoards();
	}
});
