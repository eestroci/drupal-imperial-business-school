/* Javascript */

/* -------------- DATA LAYER TRACKING SET UP -------------- */
window.dataLayer = window.dataLayer || [];

function pushToDataLayer(event, action, value, position = null) {
	dataLayer.push({
		event: event,
		parameters: {
			[`${event}_action`]: action,
			[`${event}_value`]: value,
			[`${event}_position`]: position,
		},
	});
}

/* -------------- SOCIAL & USER INTERACTION TRACKING SET UP -------------- */
var socialTrack = {
	articleTrackingGTM: function () {
		// Article Tracking

		// Barrier Scroll Tracking
		SiteScripts.tryCatchWrapper(() => {
			// Check if the barrier is visible
			if (universal_variable?.content?.barrier?.trim() === 'yes') {
				var barrierElement = document.querySelector('.join-investment-week.zig-zag');
				var barrierTop, barrierBottom, barrierHeight;
				var scrollThresholds = {
					start: false,
					50: false,
					90: false,
				};

				// Function to update dimensions for barrier element
				function updateBarrierDimensions() {
					if (barrierElement) {
						barrierTop = barrierElement.offsetTop;
						barrierHeight = barrierElement.offsetHeight;
						barrierBottom = barrierTop + barrierHeight;
					}
				}

				// Initial dimension update for barrier element
				updateBarrierDimensions();

				// Add event listener for resize to update dimensions
				window.addEventListener('resize', updateBarrierDimensions);

				// Scroll event listener for barrier
				if (barrierElement) {
					window.addEventListener('scroll', function () {
						var scrollY = window.scrollY || window.pageYOffset;

						// Calculate the percentage scrolled into the barrier
						if (scrollY >= barrierTop && scrollY <= barrierBottom) {
							var scrolledIntoBarrier = scrollY - barrierTop;
							var scrollPercent = (scrolledIntoBarrier / barrierHeight) * 100;

							// Clamp the percentage between 0% and 100%
							scrollPercent = Math.min(Math.max(scrollPercent, 0), 100);

							// Log the scroll percentage for debugging
							SiteScripts.consoleLog(`Barrier Scroll: ${Math.round(scrollPercent)}%`, { debugValue: 'tracking' });

							// Push to Data Layer at specific thresholds (only once)
							if (!scrollThresholds.start && scrollPercent > 0) {
								pushToDataLayer('article_interaction', 'Barrier Scroll', 'Start');
								scrollThresholds.start = true;
							}
							if (!scrollThresholds[50] && scrollPercent >= 50) {
								pushToDataLayer('article_interaction', 'Barrier Scroll', '50%');
								scrollThresholds[50] = true;
							}
							if (!scrollThresholds[90] && scrollPercent >= 90) {
								pushToDataLayer('article_interaction', 'Barrier Scroll', '100%');
								scrollThresholds[90] = true;
							}
						}
					});
				}
			}
		});

		// Article Scroll Tracking
		SiteScripts.tryCatchWrapper(() => {
			// Check if the barrier is NOT visible after trimming the string
			if (universal_variable?.content?.barrier?.trim() !== 'yes') {
				var articleContent = document.querySelector('.article-content');
				var articleTop, articleBottom, articleHeight;
				var scrollThresholds = {
					start: false,
					25: false,
					50: false,
					75: false,
					90: false,
				};

				// Function to update dimensions for article content
				function updateDimensions() {
					if (articleContent) {
						articleTop = articleContent.offsetTop;
						articleHeight = articleContent.offsetHeight;
						articleBottom = articleTop + articleHeight;
					}
				}

				// Initial dimension update for article content
				updateDimensions();

				// Add event listener for resize to update dimensions
				window.addEventListener('resize', updateDimensions);

				// Scroll event listener for article content
				window.addEventListener('scroll', function () {
					var scrollY = window.scrollY || window.pageYOffset;

					// Calculate the percentage scrolled into the article
					if (scrollY >= articleTop && scrollY <= articleBottom) {
						var scrolledIntoArticle = scrollY - articleTop;
						var scrollPercent = (scrolledIntoArticle / articleHeight) * 100;

						// Clamp the percentage between 0% and 100%
						scrollPercent = Math.min(Math.max(scrollPercent, 0), 100);

						// Log the scroll percentage for debugging
						SiteScripts.consoleLog(`Article Scroll: ${Math.round(scrollPercent)}%`, { debugValue: 'tracking' });

						// Push to Data Layer at specific thresholds (only once)
						if (!scrollThresholds.start && scrollPercent > 0) {
							pushToDataLayer('article_interaction', 'Article Scroll', 'Start');
							scrollThresholds.start = true;
						}
						if (!scrollThresholds[25] && scrollPercent >= 25) {
							pushToDataLayer('article_interaction', 'Article Scroll', '25%');
							scrollThresholds[25] = true;
						}
						if (!scrollThresholds[50] && scrollPercent >= 50) {
							pushToDataLayer('article_interaction', 'Article Scroll', '50%');
							scrollThresholds[50] = true;
						}
						if (!scrollThresholds[75] && scrollPercent >= 75) {
							pushToDataLayer('article_interaction', 'Article Scroll', '75%');
							scrollThresholds[75] = true;
						}
						if (!scrollThresholds[90] && scrollPercent >= 90) {
							pushToDataLayer('article_interaction', 'Article Scroll', '100%');
							scrollThresholds[90] = true;
						}
					}
				});
			}
		});

		// Article Top Social Clicks
		const articleSocialTop = document.querySelector('.article-head-block .social-heading');
		if (articleSocialTop) {
			const articleSocialTopItems = articleSocialTop.querySelectorAll('.socialshareicon');

			for (const [index, item] of articleSocialTopItems.entries()) {
				item.addEventListener('click', () => {
					if (item.classList.contains('twitter-icon')) {
						pushToDataLayer('article_interaction', 'Article Top', 'Twitter Share', index + 1);
					}
					if (item.classList.contains('linkedin')) {
						pushToDataLayer('article_interaction', 'Article Top', 'Linkedin Share', index + 1);
					}
					if (item.classList.contains('email-icon')) {
						pushToDataLayer('article_interaction', 'Article Top', 'Email', index + 1);
					}
					if (item.classList.contains('facebook-icon')) {
						pushToDataLayer('article_interaction', 'Article Top', 'Facebook Share', index + 1);
					}
					if (item.classList.contains('whatsapp-icon')) {
						pushToDataLayer('article_interaction', 'Article Top', 'Whatsapp Share', index + 1);
					}
				});
			}
		}

		// Article Bottom Social Clicks
		const articleSocialBottom = document.querySelector('.article-content-block .social-heading');
		if (articleSocialBottom) {
			const articleSocialBottomItems = articleSocialBottom.querySelectorAll('.socialshareicon');

			for (const [index, item] of articleSocialBottomItems.entries()) {
				item.addEventListener('click', () => {
					if (item.classList.contains('twitter-icon')) {
						pushToDataLayer('article_interaction', 'Article End', 'Twitter Share', index + 1);
					}
					if (item.classList.contains('linkedin')) {
						pushToDataLayer('article_interaction', 'Article End', 'Linkedin Share', index + 1);
					}
					if (item.classList.contains('email-icon')) {
						pushToDataLayer('article_interaction', 'Article End', 'Email', index + 1);
					}
					if (item.classList.contains('facebook-icon')) {
						pushToDataLayer('article_interaction', 'Article End', 'Facebook Share', index + 1);
					}
					if (item.classList.contains('whatsapp-icon')) {
						pushToDataLayer('article_interaction', 'Article End', 'Whatsapp Share', index + 1);
					}
				});
			}
		}

		// Article Author Top

		// Article Author Spotlight
		const authorSpotlightName = document.querySelector('.author-details-content a');
		if (authorSpotlightName) {
			authorSpotlightName.addEventListener('click', () => {
				pushToDataLayer('article_interaction', 'Author Spotlight - Name', authorSpotlightName.textContent.trim());
			});
		}

		// Article Author Spotlight Button
		const authorSpotlightButton = document.querySelector('.author-spotlight .button a');
		if (authorSpotlightButton) {
			authorSpotlightButton.addEventListener('click', () => {
				pushToDataLayer('article_interaction', 'Author Spotlight', 'View Profile Button');
			});
		}

		// Article Author Spotlight More
		const authorSpotlightMore = document.querySelectorAll('.spotlight-content a');
		if (authorSpotlightMore) {
			for (const [index, item] of authorSpotlightMore.entries()) {
				item.addEventListener('click', () => {
					const text = item.textContent.trim();
					pushToDataLayer('article_interaction', 'More from Author', text, index + 1);
				});
			}
		}

		// Article Navigation
		const previousArticle = document.querySelectorAll('.pagination-article .left-click a');
		if (previousArticle) {
			for (const item of previousArticle) {
				item.addEventListener('click', () => {
					pushToDataLayer('article_interaction', 'Article Previous Next', 'Previous Article');
				});
			}
		}

		const nextArticle = document.querySelectorAll('.pagination-article .right-click a');
		if (nextArticle) {
			for (const item of nextArticle) {
				item.addEventListener('click', () => {
					pushToDataLayer('article_interaction', 'Article Previous Next', 'Next Article');
				});
			}
		}

		//Article PDF Download
		const downloadButton = document.querySelector('.article-page .article-content .click-here-download');
		if (downloadButton) {
			downloadButton.addEventListener('click', () => {
				pushToDataLayer('article_interaction', 'CTA', 'Click here to download');
			});
		}

		const submitForm = document.querySelector('.article-page .pdf-download-modal .modal-footer .btn-primary');
		if (submitForm) {
			submitForm.addEventListener('click', () => {
				pushToDataLayer('article_interaction', 'PDF Download', 'Submit');
			});
		}

		// Article Barrier Page
		const articleBarrierAction = document.querySelectorAll('.zig-zag-bottom .join-investment-week.zig-zag .investment-week-join-now');
		if (articleBarrierAction) {
			for (const [index, item] of articleBarrierAction.entries()) {
				item.addEventListener('click', () => {
					const value = item.textContent.trim();
					pushToDataLayer('article_interaction', 'Barrier page', value, index + 1);
				});
			}
		}

		// Most Read
		setTimeout(() => {
			const articleMostRead = document.querySelectorAll('.article-page .most-ranked-block .most-ranked-content');
			if (articleMostRead) {
				for (const [index, item] of articleMostRead.entries()) {
					item.addEventListener('click', () => {
						const text = item.querySelector('h4').textContent.trim();
						pushToDataLayer('article_interaction', 'Most Read', text, index + 1);
					});
				}
			}
		}, 2000);

		// User Login Page
		const userLogin = document.querySelector('.login-form-block #userlogin input.login');
		if (userLogin) {
			userLogin.addEventListener('click', () => {
				pushToDataLayer('article_interaction', 'User Login Page', 'Sign in Form');
			});
		}

		// Related Topics
		const relatedTopics = document.querySelectorAll('.article-page .related-topics ul li a');
		if (relatedTopics) {
			for (const [index, item] of relatedTopics.entries()) {
				item.addEventListener('click', () => {
					const text = item.textContent.trim();
					pushToDataLayer('article_interaction', 'Related Topics', text, index + 1);
				});
			}
		}

		// More on Component
		const moreOnArticles = document.querySelectorAll('.article-page #more-on .big-article-Vlist');
		if (moreOnArticles) {
			for (const [index, item] of moreOnArticles.entries()) {
				// Text
				const text = item.querySelector('h4 a');
				const title = text.textContent.trim();
				text.addEventListener('click', () => {
					pushToDataLayer('article_interaction', 'More on Category', title, index + 1);
				});
				// Image
				const image = item.querySelector('img');
				if (image) {
					image.parentElement.addEventListener('click', () => {
						pushToDataLayer('article_interaction', 'More on Category', `Image: ${title}`, index + 1);
					});
				}

				// Category
				const category = item.querySelector('.category a');
				category.addEventListener('click', () => {
					pushToDataLayer('article_interaction', 'More on Category', `Category: ${title}`, index + 1);
				});
			}
		}

		// IIQ Component Block
		setTimeout(() => {
			const iiqComponentBlock = document.querySelector('.iiq-component-block');
			if (iiqComponentBlock) {
				const iiqLogo = iiqComponentBlock.querySelector('.top-image-block');
				if (iiqLogo) {
					iiqLogo.addEventListener('click', () => {
						pushToDataLayer('article_interaction', 'IIQ Component Block', 'Logo Click');
					});
				}
				const iiqAsset = iiqComponentBlock.querySelectorAll('p a');
				if (iiqAsset) {
					for (const [index, item] of iiqAsset.entries()) {
						item.addEventListener('click', () => {
							const text = item.textContent.trim();
							pushToDataLayer('article_interaction', 'IIQ Component Block', text, index + 1);
						});
					}
				}
			}
		}, 1000);
	},

	footerTrackingGTM: function () {
		const footerLinks = document.querySelectorAll('.contact-us-block  .order.marginorder li a');
		for (const [index, link] of footerLinks.entries()) {
			link.addEventListener('click', () => {
				const text = link.textContent.trim();
				pushToDataLayer('footer_interaction', 'Footer Links', text, index + 1);
			});
		}

		const footerSocialItems = document.querySelectorAll('footer .col-lg-4 .social li a');

		for (const [index, item] of footerSocialItems.entries()) {
			item.addEventListener('click', () => {
				if (item.classList.contains('mail40')) {
					pushToDataLayer('footer_interaction', 'Footer Social Links', 'Newsletter', index + 1);
				}
				if (item.classList.contains('youtubeicon')) {
					pushToDataLayer('footer_interaction', 'Footer Social Links', 'Youtube Follow', index + 1);
				}
				if (item.classList.contains('twitter40')) {
					pushToDataLayer('footer_interaction', 'Footer Social Links', 'Twitter Follow', index + 1);
				}
				if (item.classList.contains('linkin40')) {
					pushToDataLayer('footer_interaction', 'Footer Social Links', 'Linkedin Follow', index + 1);
				}
				if (item.classList.contains('facebookicon')) {
					pushToDataLayer('footer_interaction', 'Footer Social Links', 'Facebook Follow', index + 1);
				}
				if (item.classList.contains('instgramicon')) {
					pushToDataLayer('footer_interaction', 'Footer Social Links', 'Instagram Follow', index + 1);
				}
			});
		}
	},
};

/* -------------- NAVIGATION TRACKING SET UP-------------- */
var siteTrack = {
	linkTrackingGTM: () => {
		// Track Text Links
		let linkTextsArray = [];
		const allTextLinks = document.querySelectorAll('.wrapper-container a');

		if (allTextLinks) {
			for (let [index, link] of allTextLinks.entries()) {
				let linkText = link.textContent.trim();

				if (linkText) {
					// Updates linkText on Article pages
					if (allTextLinks[index].closest('.author-right')) {
						linkText = `Article Author | ${linkText}`;
					}

					if (allTextLinks[index].closest('.article-content')) {
						linkText = `Article Content | ${linkText}`;
					}

					if (allTextLinks[index].closest('.zig-zag')) {
						linkText = `Article Barrier | ${linkText}`;
					}

					if (allTextLinks[index].closest('.related-topics')) {
						linkText = `Article Topics | ${linkText}`;
					}

					// Check if the link already exists in the linkTextsArray then update its position
					let linkCount = linkTextsArray.filter((item) => item.startsWith(linkText)).length;

					linkTextsArray.push(linkText);

					link.addEventListener('click', () => {
						pushToDataLayer('link_interaction', linkText, allTextLinks[index].href, linkCount + 1);
					});
				}
			}
		}

		// Track Image Links
		const allImageLinks = document.querySelectorAll('.wrapper-container a img');
		let linkImagesArray = [];

		if (allImageLinks) {
			for (let [index, link] of allImageLinks.entries()) {
				let imageDescription = link.alt;

				if (imageDescription) {
					// Updates imageDescription on Article pages
					if (allImageLinks[index].closest('.author-left')) {
						imageDescription = `Article Author | ${imageDescription}`;
					}

					if (allImageLinks[index].closest('.article-content')) {
						imageDescription = `Article Content | ${imageDescription}`;
					}

					// Check if the link already exists in the linkImagesArray then update its position
					let linkCount = linkImagesArray.filter((item) => item.startsWith(imageDescription)).length;

					linkImagesArray.push(imageDescription);

					link.addEventListener('click', () => {
						pushToDataLayer('link_interaction', imageDescription, allImageLinks[index].parentElement.href, linkCount + 1);
					});
				}
			}
		}
	},

	headerTrackingGTM: () => {
		// Main Menu
		const mainMenuItems = document.querySelectorAll('.navbar-nav .nav-item .nav-link');
		for (const [index, item] of mainMenuItems.entries()) {
			item.addEventListener('click', () => {
				const menuTitle = item.innerText.trim();
				pushToDataLayer('header_interaction', 'Main Menu', menuTitle, index + 1);

				// In Depth Dropdown
				if (menuTitle === 'In depth') {
					const inDepthItems = item.parentElement.querySelectorAll('.main-navigation h4');

					inDepthItems.forEach((inDepthItem, index) => {
						const inDepthName = inDepthItem.textContent.trim();

						inDepthItem.addEventListener('click', () => {
							pushToDataLayer('header_interaction', 'In Depth Main Menu', inDepthName, index + 1);
						});

						const subItems = inDepthItem.parentElement.querySelectorAll('.sub-part-navigation a');

						if (subItems.length > 0) {
							subItems.forEach((subItem, index) => {
								const subItemName = subItem.textContent.trim();

								subItem.addEventListener('click', () => {
									pushToDataLayer('header_interaction', 'In Depth Main Menu', `${inDepthName}: ${subItemName}`, index + 1);
								});
							});
						}
					});
				}

				// Topics Dropdown
				if (menuTitle === 'Topics') {
					const topicItems = item.parentElement.querySelectorAll('.main-navigation h4');

					topicItems.forEach((topic, index) => {
						const topicName = topic.textContent.trim();

						topic.addEventListener('click', () => {
							pushToDataLayer('header_interaction', 'Topics Main Menu', topicName, index + 1);
						});

						const subItems = topic.parentElement.querySelectorAll('.sub-part-navigation a');

						if (subItems.length > 0) {
							subItems.forEach((subItem, index) => {
								const subItemName = subItem.textContent.trim();

								subItem.addEventListener('click', () => {
									pushToDataLayer('header_interaction', 'Topics Main Menu', `${topicName}: ${subItemName}`, index + 1);
								});
							});
						}
					});
				}

				// More Dropdown
				if (menuTitle === 'More') {
					const moreItems = item.parentElement.querySelectorAll('.main-navigation h4');

					moreItems.forEach((moreItem, index) => {
						const moreTitle = moreItem.textContent.trim();

						moreItem.addEventListener('click', () => {
							pushToDataLayer('header_interaction', 'More Main Menu', moreTitle, index + 1);
						});

						const subItems = moreItem.parentElement.querySelectorAll('.sub-part-navigation a');

						if (subItems.length > 0) {
							subItems.forEach((subItem, index) => {
								const subItemName = subItem.textContent.trim();

								subItem.addEventListener('click', () => {
									pushToDataLayer('header_interaction', 'More Main Menu', `${moreTitle}: ${subItemName}`, index + 1);
								});
							});
						}
					});
				}
			});
		}

		// Top Header - Desktop and Mobile
		const topHeaderLinks = document.querySelectorAll('#login, #login_nav');
		for (const [index, item] of topHeaderLinks.entries()) {
			const loginLinks = item.querySelectorAll('a');

			for (const link of loginLinks) {
				link.addEventListener('click', () => {
					const loginLinkTitle = link.textContent.trim();
					pushToDataLayer('header_interaction', 'Top Header Button', loginLinkTitle, index + 1);
				});
			}
		}

		// Search - Desktop
		const searchDesktop = document.querySelector('.desktop_search .nav-link.dropdown-toggle');
		searchDesktop.addEventListener('click', () => {
			pushToDataLayer('header_interaction', 'Main Menu', 'Search');
		});

		// Search - Mobile
		const searchMobile = document.querySelector('.mobile-search .nav-link');
		if (searchMobile) {
			searchMobile.addEventListener('click', () => {
				pushToDataLayer('header_interaction', 'Main Menu', 'Search');
			});
		}
	},
};

/* -------------- RELATED ARTICLE TRACKING -------------- */
var relatedTracking = {
	galleryTrackingGTM: () => {
		setTimeout(() => {
			const slideNext = document.querySelectorAll('.gallery-slide-article.container-fluid .slick-next.slick-arrow');
			if (slideNext) {
				for (const button of slideNext) {
					button.addEventListener('click', () => {
						const currentSlide = document.querySelector('div.gallery-slide-article .slider-main .main-slide-container .slider .slick-track .slick-current');
						const position = parseInt(currentSlide.dataset.slickIndex) + 1;
						const label = `Next Slide ${position}`;
						const slide = currentSlide.querySelector('.content h6');
						const slideContent = slide ? slide.textContent.trim() : 'No Slide Content';
						pushToDataLayer('gallery_interaction', label, slideContent, position);

						googletag.cmd.push(function () {
							googletag.pubads().refresh([gptAdsSlots[5]]);
							googletag.pubads().refresh([gptAdsSlots[10]]);
							googletag.pubads().refresh([gptAdsSlots[11]]);
						});
					});
				}
			}

			const slidePrev = document.querySelectorAll('.gallery-slide-article.container-fluid .slick-prev.slick-arrow');
			if (slidePrev) {
				for (const button of slidePrev) {
					button.addEventListener('click', () => {
						const currentSlide = document.querySelector('div.gallery-slide-article .slider-main .main-slide-container .slider .slick-track .slick-current');
						const position = parseInt(currentSlide.dataset.slickIndex) + 1;
						const label = `Previous Slide ${position}`;
						const slide = currentSlide.querySelector('.content h6');
						const slideContent = slide ? slide.textContent.trim() : 'No Slide Content';
						pushToDataLayer('gallery_interaction', label, slideContent, position);

						googletag.cmd.push(function () {
							googletag.pubads().refresh([gptAdsSlots[5]]);
							googletag.pubads().refresh([gptAdsSlots[10]]);
							googletag.pubads().refresh([gptAdsSlots[11]]);
						});
					});
				}
			}
		}, 3000);
	},

	authorTrackingGTM: () => {
		// Author Articles
		const authorArticles = document.querySelectorAll("#author-page .common-left-hand-block .mb-2:not([class*=' '])");
		if (authorArticles) {
			for (const [index, item] of authorArticles.entries()) {
				const text = item.querySelector('.platformheading h4 a');
				const title = text.textContent.trim(); // Fixed from .split()
				// Text
				text.addEventListener('click', () => {
					pushToDataLayer('author_interaction', 'Author Listing', title, index + 1);
				});

				// Image
				const image = item.querySelector('img');
				if (image) {
					image.parentElement.addEventListener('click', () => {
						pushToDataLayer('author_interaction', 'Author Listing', `Image: ${title}`, index + 1);
					});
				}

				// Category
				const category = item.querySelector('.category a');
				category.addEventListener('click', () => {
					pushToDataLayer('author_interaction', 'Author Listing', `Category: ${title}`, index + 1);
				});
			}
		}

		// Author Most Read
		setTimeout(() => {
			const authorMostRead = document.querySelectorAll('#author-page div.ranked-articles-list .row.most-ranked-block .most-ranked-content a');
			if (authorMostRead) {
				for (const [index, item] of authorMostRead.entries()) {
					item.addEventListener('click', () => {
						const title = item.textContent.trim();
						pushToDataLayer('author_interaction', 'Most Read', title, index + 1);
					});
				}
			}
		}, 2000);

		// Author Pagination
		const authorPagination = document.querySelectorAll('#author-page .pagination .pagination-holder.search_page_number a');
		if (authorPagination) {
			for (const page of authorPagination) {
				page.addEventListener('click', () => {
					const pageNumber = page.textContent.trim();
					if (!isNaN(parseInt(pageNumber))) {
						pushToDataLayer('author_interaction', 'Pagination', pageNumber);
					}
				});
			}
		}
	},

	categoryTrackingGTM: function () {
		// Category Page Check
		const categoryPage = window.location.pathname.split('/');

		if (categoryPage.includes('tag') || categoryPage.includes('category')) {
			// Most Read Category
			setTimeout(() => {
				const mostReadCategory = document.querySelectorAll('.ranked-articles-list .row.most-ranked-block .most-ranked-content.col-lg-12.col-md-6 a');
				if (mostReadCategory) {
					for (const [index, item] of mostReadCategory.entries()) {
						item.addEventListener('click', () => {
							const text = item.textContent.trim();
							pushToDataLayer('category_interaction', 'Most Read', text, index + 1);
						});
					}
				}
			}, 2000);

			// Listing Story
			const listingStory = document.querySelectorAll('.common-left-hand-block .mb-2');
			if (listingStory) {
				for (const [index, item] of listingStory.entries()) {
					// Text
					const text = item.querySelector('.platformheading h4 a');
					const title = text.textContent.trim();
					text.addEventListener('click', () => {
						pushToDataLayer('category_interaction', 'Category Listing', title, index + 1);
					});
					// Image
					const image = item.querySelector('img');
					if (image) {
						image.parentElement.addEventListener('click', () => {
							pushToDataLayer('category_interaction', 'Category Listing', `Image: ${title}`, index + 1);
						});
					}
				}
			}

			// Category Pagination Tracking
			const categoryPagination = document.querySelectorAll('.pagination .pagination-holder.search_page_number a');
			if (categoryPagination) {
				for (const page of categoryPagination) {
					page.addEventListener('click', () => {
						const pageNumber = page.textContent.trim();
						if (!isNaN(parseInt(pageNumber))) {
							pushToDataLayer('category_interaction', 'Pagination', pageNumber);
						}
					});
				}
			}
		}
	},

	searchTrackingGTM: function () {
		// Most Read
		setTimeout(() => {
			const mostRead = document.querySelectorAll('.ranked-articles-list .row.most-ranked-block .most-ranked-content.col-lg-12.col-md-6 a');
			if (mostRead) {
				for (const [index, item] of mostRead.entries()) {
					item.addEventListener('click', () => {
						const text = item.textContent.trim();
						pushToDataLayer('search_interaction', 'Most Read', text, index + 1);
					});
				}
			}
		}, 2000);

		// Listing Story
		const listingStory = document.querySelectorAll('.common-left-hand-block .mb-2');
		if (listingStory) {
			for (const [index, item] of listingStory.entries()) {
				// Text
				const text = item.querySelector('.platformheading h4 a');
				const title = text.textContent.trim();
				text.addEventListener('click', () => {
					pushToDataLayer('search_interaction', 'Search Listing', title, index + 1);
				});
				// Image
				const image = item.querySelector('img');
				if (image) {
					image.parentElement.addEventListener('click', () => {
						pushToDataLayer('search_interaction', 'Search Listing', `Image: ${title}`, index + 1);
					});
				}
			}
		}

		// Search Pagination Tracking
		const searchPagination = document.querySelectorAll('.pagination .pagination-holder.search_page_number a');
		if (searchPagination) {
			for (const page of searchPagination) {
				page.addEventListener('click', () => {
					const pageNumber = page.textContent.trim();
					if (!isNaN(parseInt(pageNumber))) {
						pushToDataLayer('search_interaction', 'Pagination', pageNumber);
					}
				});
			}
		}
	},

	wallpaperTrackingGTM: () => {
		setTimeout(() => {
			const isWallpaperVisible = document.body.classList.contains('wallpaper-visible');
			const wallpaper_showing = isWallpaperVisible ? 'Yes' : 'No';

			dataLayer.push({
				event: 'wallpaper_tracking',
				parameters: {
					wallpaper_showing: wallpaper_showing,
				},
			});
		}, 3000);
	},

	esgPageTrackingGTM: () => {
		const esgURL = document.URL.split('/').slice(-1).toString();
		const esgPage = ['esg-hub'];

		if (esgPage.includes(esgURL)) {
			const esgButtons = document.querySelectorAll('.std-landing-content-block .std-landing-content #landing-anchor-tags a');
			if (esgButtons) {
				for (const button of esgButtons) {
					button.addEventListener('click', () => {
						const value = button.textContent.trim();
						pushToDataLayer('esg_interaction', 'ESG Buttons', value);
					});
				}
			}

			// ESG Main Latest News
			const mainLatestNews = document.querySelector('.big-article-center .big-article');
			const mainLatestNewsImage = mainLatestNews.querySelector('.big-article-left a');
			const mainLatestNewsText = document.querySelector('.big-article-right h3 a');
			const mainLatestNewsTitle = mainLatestNewsText.textContent.trim();

			mainLatestNewsImage.addEventListener('click', () => {
				pushToDataLayer('esg_interaction', 'ESG Hub Latest', mainLatestNewsTitle);
			});

			mainLatestNewsText.addEventListener('click', () => {
				pushToDataLayer('esg_interaction', 'ESG Hub Latest', `Image: ${mainLatestNewsTitle}`);
			});

			// ESG Page Content
			const esgContents = document.querySelectorAll('div.net-zero .net-zero-block .net-zero-content');

			for (const [index, content] of esgContents.entries()) {
				const title = content.parentElement.parentElement.querySelector('.common-header').textContent.trim();
				const articleText = content.querySelector('h4 a');
				const articleImage = content.querySelector('img');

				articleText.addEventListener('click', () => {
					const articleTitle = articleText.textContent.trim();
					pushToDataLayer('esg_interaction', title, articleTitle, index + 1);
				});

				if (articleImage) {
					articleImage.parentElement.addEventListener('click', () => {
						const imageTitle = articleImage.parentElement.parentElement.parentElement.querySelector('h4 a').textContent.trim();
						pushToDataLayer('esg_interaction', title, `Image: ${imageTitle}`, index + 1);
					});
				}
			}
		}
	},
};

var homepageComponentTracking = {
	homepageTrackingGTM: () => {
		// Hot Topics Tracking
		SiteScripts.tryCatchWrapper(() => {
			const hotTopicsContainer = document.querySelector('.home-page-hot-topic');
			if (hotTopicsContainer) {
				const hotTopics = hotTopicsContainer.querySelectorAll('.row a');

				for (const [index, item] of hotTopics.entries()) {
					item.addEventListener('click', () => {
						const text = item.textContent.trim();
						pushToDataLayer('homepage_interaction', 'Hot Topics', text, index + 1);
					});
				}
			}
		});

		// Latest and Secondary News Tracking
		const latestNews = document.querySelector('.full-block .big-article-center .big-article');
		const secondaryLatestNews = document.querySelectorAll('.full-block .big-article-Vlist');

		if (latestNews && secondaryLatestNews) {
			const latestNewsTitle = latestNews.querySelector('h2 a');
			const latestNewsImage = latestNews.querySelector('img');

			const text = latestNewsTitle.textContent.trim();

			// Latest News - Title
			latestNewsTitle.addEventListener('click', () => {
				pushToDataLayer('homepage_interaction', 'Latest News Component', text, 1);
			});

			// Latest News - Image
			if (latestNewsImage) {
				latestNewsImage.parentElement.addEventListener('click', () => {
					pushToDataLayer('homepage_interaction', 'Latest News Component', `Image: ${text}`, 1);
				});
			}

			// Secondary Latest News
			for (const [index, item] of secondaryLatestNews.entries()) {
				const secondaryLatestNewTitle = item.querySelector('h4 a');
				const secondaryLatestNewImage = item.querySelector('img');

				const text = secondaryLatestNewTitle.textContent.trim();

				// Secondary Latest News - Title
				secondaryLatestNewTitle.addEventListener('click', () => {
					pushToDataLayer('homepage_interaction', 'Latest News Component', text, index + 2);
				});

				// Secondary Latest News - Image
				if (secondaryLatestNewImage) {
					secondaryLatestNewImage.parentElement.addEventListener('click', () => {
						pushToDataLayer('homepage_interaction', 'Latest News Component', `Image: ${text}`, index + 2);
					});
				}
			}
		}

		// Global Markets Component
		const netZeroComponent = document.querySelectorAll('#netzero-home .common-full-block .most-read-content');

		if (netZeroComponent) {
			const globalMarketsViewAll = document.querySelector('#netzero-home .view-all');
			if (globalMarketsViewAll) {
				globalMarketsViewAll.addEventListener('click', () => {
					const componentTitle = document.querySelector('#netzero-home .common-header').textContent.trim();
					pushToDataLayer('homepage_interaction', `${componentTitle} Component`, 'VIEW ALL');
				});
			}

			for (const [index, item] of netZeroComponent.entries()) {
				const netZeroComponentTitle = item.querySelector('h4 a');
				const netZeroComponentImage = item.querySelector('img');

				const componentTitle = item.parentElement.parentElement.querySelector('.common-header').textContent.trim();

				const text = netZeroComponentTitle.textContent.trim();

				// Net Zero - Title
				netZeroComponentTitle.addEventListener('click', () => {
					pushToDataLayer('homepage_interaction', `${componentTitle} Component`, text, index + 1);
				});

				// Net Zero - Image
				if (netZeroComponentImage) {
					netZeroComponentImage.parentElement.addEventListener('click', () => {
						pushToDataLayer('homepage_interaction', `${componentTitle} Component`, `Image: ${text}`, index + 1);
					});
				}
			}
		}

		// Most Read Component Tracking
		setTimeout(() => {
			const mostReadComponent = document.querySelectorAll('.home-page .ranked-articles-list')[0];

			if (mostReadComponent) {
				const mostReadItems = mostReadComponent.querySelectorAll('.most-ranked-content');
				for (const [index, item] of mostReadItems.entries()) {
					const text = item.querySelector('h4 a').textContent.trim();
					item.addEventListener('click', () => {
						pushToDataLayer('homepage_interaction', 'Most Read homepage', text, index + 1);
					});
				}
			}
		}, 2000);

		// Editors Pick Component Tracking
		const editorsPickComponent = document.querySelectorAll('.home-page .ranked-articles-list')[1];

		if (editorsPickComponent) {
			const editorsPickItems = editorsPickComponent.querySelectorAll('.most-ranked-content');
			for (const [index, item] of editorsPickItems.entries()) {
				const title = item.querySelector('h4 a');
				const titleText = title.textContent.trim();
				const image = item.querySelector('img');

				title.addEventListener('click', () => {
					pushToDataLayer('homepage_interaction', "Editor's pick Component", titleText, index + 1);
				});

				if (image) {
					image.parentElement.addEventListener('click', () => {
						pushToDataLayer('homepage_interaction', "Editor's pick Component", `Image: ${titleText}`, index + 1);
					});
				}
			}
		}

		// Wait for Upcoming Events to load
		setTimeout(() => {
			// Upcoming Events Component Tracking
			const upcomingEventsTitle = document.querySelectorAll('#upcoming-events .upcoming-event .upcoming-second h3 a');
			if (upcomingEventsTitle) {
				for (const [index, title] of upcomingEventsTitle.entries()) {
					title.addEventListener('click', () => {
						const text = title.textContent.trim();
						pushToDataLayer('homepage_interaction', 'Upcoming Events', text, index + 1);
					});
				}
			}

			// Upcoming Events Button Component Tracking
			const upcomingEventsButton = document.querySelectorAll('#upcoming-events .upcoming-event .upcoming-button');
			if (upcomingEventsButton) {
				for (const [index, button] of upcomingEventsButton.entries()) {
					button.addEventListener('click', () => {
						const text = button.textContent.trim();
						pushToDataLayer('homepage_interaction', 'Upcoming Events', text, index + 1);
					});
				}
			}
		}, 3000);

		const interviewMainComponent = document.querySelector('.sidebar-common-left .article-content-block.media-centre .big-article .row');
		const interviewSecondaryComponent = document.querySelectorAll('.sidebar-common-left .article-content-block.media-centre .big-article-Vlist');

		if (interviewMainComponent) {
			const interviewViewAll = interviewMainComponent.parentElement.parentElement.querySelector('.view-all');
			if (interviewViewAll) {
				interviewViewAll.addEventListener('click', () => {
					pushToDataLayer('homepage_interaction', 'Interview Component', 'VIEW ALL');
				});

				const title = interviewMainComponent.querySelector('h2 a');
				const titleText = title.textContent.trim();
				const image = interviewMainComponent.querySelector('.big-article-left a');

				title.addEventListener('click', () => {
					pushToDataLayer('homepage_interaction', 'Interview Component', titleText, 1);
				});
				if (image) {
					image.addEventListener('click', () => {
						pushToDataLayer('homepage_interaction', 'Interview Component', `Image: ${titleText}`, 1);
					});
				}
			}
		}

		if (interviewSecondaryComponent) {
			for (const [index, item] of interviewSecondaryComponent.entries()) {
				const title = item.querySelector('h4 a');
				const titleText = title.textContent.trim();
				const image = item.querySelector('img');

				title.addEventListener('click', () => {
					pushToDataLayer('homepage_interaction', 'Interview Component', titleText, index + 2);
				});

				if (image) {
					image.parentElement.addEventListener('click', () => {
						pushToDataLayer('homepage_interaction', 'Interview Component', `Image: ${titleText}`, index + 2);
					});
				}
			}
		}

		// Analysis Component
		const analysisComponent = document.querySelectorAll('#analysis .opinion-block .most-read-content');

		if (analysisComponent) {
			const analysisViewAll = document.querySelector('#analysis .view-all');
			if (analysisViewAll) {
				analysisViewAll.addEventListener('click', () => {
					const componentTitle = document.querySelector('#analysis .common-header').textContent.trim();
					pushToDataLayer('homepage_interaction', `${componentTitle} Component`, 'VIEW ALL');
				});
			}

			for (const [index, item] of analysisComponent.entries()) {
				const analysisComponentTitle = item.querySelector('h4 a');
				const analysisComponentImage = item.querySelector('img');

				const componentTitle = item.parentElement.parentElement.querySelector('.common-header').textContent.trim();

				const text = analysisComponentTitle.textContent.trim();

				// Analysis - Title
				analysisComponentTitle.addEventListener('click', () => {
					pushToDataLayer('homepage_interaction', `${componentTitle} Component`, text, index + 1);
				});

				// Analysis - Image
				if (analysisComponentImage) {
					analysisComponentImage.parentElement.addEventListener('click', () => {
						pushToDataLayer('homepage_interaction', `${componentTitle} Component`, `Image: ${text}`, index + 1);
					});
				}
			}
		}

		const perspectivesMainComponent = document.querySelectorAll('.article-content-block.landing-page.media-centre')[1];
		const perspectivesSecondaryComponent = document.querySelectorAll('.sidebar-common-left .article-content-block.media-centre .big-article-Vlist');

		if (perspectivesMainComponent) {
			const perspectiveViewAll = perspectivesMainComponent.parentElement.parentElement.querySelector('.view-all');
			if (perspectiveViewAll) {
				perspectiveViewAll.addEventListener('click', () => {
					pushToDataLayer('homepage_interaction', 'Perspectives Component', 'VIEW ALL');
				});
			}

			const title = perspectivesMainComponent.querySelector('h2 a');
			const titleText = title.textContent.trim();
			const image = perspectivesMainComponent.querySelector('.big-article-left a');

			title.addEventListener('click', () => {
				pushToDataLayer('homepage_interaction', 'Perspectives Component', titleText, 1);
			});
			image.addEventListener('click', () => {
				pushToDataLayer('homepage_interaction', 'Perspectives Component', `Image: ${titleText}`, 1);
			});
		}

		if (perspectivesSecondaryComponent) {
			for (const [index, item] of perspectivesSecondaryComponent.entries()) {
				const title = item.querySelector('h4 a');
				const titleText = title.textContent.trim();
				const image = item.querySelector('img');

				title.addEventListener('click', () => {
					pushToDataLayer('homepage_interaction', 'Perspectives Component', titleText, index + 2);
				});

				if (image) {
					image.parentElement.addEventListener('click', () => {
						pushToDataLayer('homepage_interaction', 'Perspectives Component', `Image: ${titleText}`, index + 2);
					});
				}
			}
		}

		// Monty Bar Component
		let montyBarComponent = document.querySelector('.homepage-monty-top');

		if (montyBarComponent) {
			montyBarComponent = montyBarComponent.querySelectorAll('figure');

			for (const [index, item] of montyBarComponent.entries()) {
				const montyBarComponentTitle = item.querySelector('a');

				const text = montyBarComponentTitle.textContent.trim();

				// Monty Bar Component - Title
				montyBarComponentTitle.addEventListener('click', () => {
					pushToDataLayer('homepage_interaction', 'Monty Bar Component', text, index + 1);
				});
			}
		}

		// Industry Voice Component
		const industryVoiceComponent = document.querySelector('#industry-voice');
		if (industryVoiceComponent) {
			// Event Action
			const industryVoiceViewAll = industryVoiceComponent.querySelector('.view-all');

			if (industryVoiceViewAll) {
				industryVoiceViewAll.addEventListener('click', () => {
					pushToDataLayer('homepage_interaction', 'Industry Voice Component', 'VIEW ALL');
				});
			}

			const industryVoiceItems = industryVoiceComponent.querySelectorAll('.most-read-content.opinion-content');

			for (const [index, item] of industryVoiceItems.entries()) {
				const industryVoiceTitle = item.querySelector('h4 a');
				const industryVoiceImage = item.querySelector('img');

				const text = industryVoiceTitle.textContent.trim();

				// Opinion Component - Title
				industryVoiceTitle.addEventListener('click', () => {
					pushToDataLayer('homepage_interaction', 'Industry Voice Component', text, index + 1);
				});

				// Opinion Component - Image
				if (industryVoiceImage) {
					industryVoiceImage.parentElement.addEventListener('click', () => {
						pushToDataLayer('homepage_interaction', 'Industry Voice Component', `Image: ${text}`, index + 1);
					});
				}
			}
		}

		// Sign up block Component
		const signUpBlock = document.querySelector('.signup-sletter-block .signupblock1 .signup-block .signup-button');

		if (signUpBlock) {
			signUpBlock.addEventListener('click', () => {
				const value = signUpBlock.textContent.trim();
				pushToDataLayer('homepage_interaction', 'Signup Block Homepage', value);
			});
		}
	},
};

/* -------------- TRACKING START FUNCTION CALLS -------------- */

function eventTrackingGTM() {
	// Link Interaction
	siteTrack.linkTrackingGTM();

	// Header Interaction
	siteTrack.headerTrackingGTM();

	// Article Page Interaction
	socialTrack.articleTrackingGTM();

	// Footer Interaction
	socialTrack.footerTrackingGTM();

	// Gallery Page Interaction
	relatedTracking.galleryTrackingGTM();

	// Author Page Interaction
	relatedTracking.authorTrackingGTM();

	// Category Page Iteraction
	relatedTracking.categoryTrackingGTM();

	// Search Page Iteraction
	if (window.location.pathname.includes('/search')) {
		relatedTracking.searchTrackingGTM();
	}

	// Homepage Interaction
	homepageComponentTracking.homepageTrackingGTM();

	// Wallpaper Tracking
	relatedTracking.wallpaperTrackingGTM();

	// ESG Page Tracking
	relatedTracking.esgPageTrackingGTM();
}

document.addEventListener('DOMContentLoaded', function () {
	eventTrackingGTM();
});
