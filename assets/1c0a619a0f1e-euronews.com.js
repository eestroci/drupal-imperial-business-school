window.vuukleAdConfiguration = {
  insertQuizAndAd: {
    quizOptions: {
      insert: "prependInside",
      selector: (index) =>
        document.querySelector(`div[id*="vuukle-comments${index}"]`),
      postQuizInsertionCallback: (index) => {
        const ad = document.querySelector(
          `div[id*="vuukle-comments${index}"] > div > .vuukle-ads`
        );
        const insertAdNearQuiz = (adDiv) => {
          const quizContainer = document.querySelector(
            `div[id*="vuukle-quiz-container${index}"]`
          );
          if (quizContainer) {
            quizContainer.appendChild(adDiv.parentElement);
          }
          const style = document.createElement("style");
          style.innerHTML = `
            #vuukle-quiz-container${index} .vuukle-ads {
              margin: 0 !important;
              min-height: 250px !important;
            }
            #vuukle-quiz-container${index} > div {
              background: transparent !important;
            }
          `;
          document.head.appendChild(style);
        };
        if (ad && ad.parentElement) {
          insertAdNearQuiz(ad);
        } else {
          let attempts = 0;
          const interval = setInterval(() => {
            const theAd = document.querySelector(
              `div[id*="vuukle-comments${index}"] > div > .vuukle-ads`
            );
            if (theAd && theAd.parentElement) {
              clearInterval(interval);
              insertAdNearQuiz(theAd);
            } else {
              attempts++;
            }

            if (attempts === 31) {
              clearInterval(interval);
            }
          }, 100);
        }
      },
    },
  },
  adUnit: "prebid4",
  targets: {
    default: {
      scrollingAd: true,
      greyBg: true,
      hideAdLabel: true,
    },
    secondDefault: {
      scrollingAd: true,
      greyBg: true,
      hideAdLabel: true,
    },
    "vuukle-ad-3": {},
  },
};
