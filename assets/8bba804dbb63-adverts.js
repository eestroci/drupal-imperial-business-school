define(function () {
  'use strict';

  bbcdotcom.av.emp.adverts = (function () {
    return {
      getPrerollAdTagWithAdRule: () => '',
      getPrerollAdTagForAudio: () => '',
      addSmpPlugin: (id, playerInstance) => {
        const onAdTagReturned = function (adTag) {
          playerInstance.loadPlugin(
            {
              html: 'name:dfpAds.js',
              swf: 'name:dfpAds.swf'
            },
            {
              name: 'AdsPluginParameters',
              data: {
                adTag,
                debug: false
              }
            }
          );
        };
        const onAdsEnabled = function(enabled){
          if(enabled){
            window.dotcom.ads.getAdTag().then(onAdTagReturned);
          }
        }
        window.dotcom.ads.enabled().then(onAdsEnabled)
      }
    };
  })();

  return bbcdotcom.av.emp.adverts;
});
