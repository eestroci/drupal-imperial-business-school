googletag.cmd.push(function () {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://segment-data.zqtk.net/newsweek?url=' + encodeURIComponent( window.location.href), true);
  xhr.timeout = 500;
  xhr.responseType = 'json';
  xhr.onload = function () {
    var vnd_prx_segments = '';
    var jsonData = xhr.response;
    if (jsonData !== '' && jsonData.targeting !== undefined) {
      vnd_prx_segments = jsonData.targeting.vnd_prx_segments;
      googletag.pubads().setTargeting('vnd_prx_segments', vnd_prx_segments);
      googletag.pubads().enableSingleRequest();
      googletag.enableServices();
    }
  };
  xhr.send();
});
