var AOP = AOP || {};

AOP.initCounterReporter = function (settings) {
  settings = settings || {};

  // Determine URL and headers based on security toggle
  var useSecureProxy = settings.isInitCounterSecurityEnabled;
  var apiUrl = useSecureProxy ? (AOP.baseUrl + '/usage-event') : settings.apiUrl;
  var apiKey = settings.apiKey;

  var staticPayload = {
    platformIdentifier: 'core',
    applicationId: settings.applicationId,
    identities: settings.identities,
    sessionId: settings.sessionId
  };

  if (settings.botHeaders && typeof settings.botHeaders === 'object') {
    if (settings.botHeaders.botScore !== undefined) {
      staticPayload.botScore = settings.botHeaders.botScore;
    }
    if (settings.botHeaders.verifiedBot !== undefined) {
      staticPayload.verifiedBot = settings.botHeaders.verifiedBot;
    }
  }

  var canSend = (useSecureProxy || (apiUrl && apiKey)) && !AOP.isAssumingIdentity;
  // only add counter if keys are set (or using secure proxy) and not assuming identity
  if (canSend) {
    $.cupEvent.addSubscriber('COUNTER', {
      onEvent: function (event, callback) {
        // Set the eventType to empty if not passed in. Otherwise it will inherit the last used event type.
        event.eventType = event.eventType || '';
        var eventPayload = JSON.stringify($.extend(staticPayload, event));
        var headers = {
          'Content-Type': 'application/json'
        };

        // Add API key header only when not using secure proxy
        if (!useSecureProxy && apiKey) {
          headers['x-api-key'] = apiKey;
        }

        $.ajax({
          url: apiUrl,
          type: 'POST',
          headers: headers,
          data: eventPayload
        }).done(callback)
          .fail(function (status, statusText, response) {
            var error = {
              'Status': status,
              'StatusText': statusText,
              'Response': response
            };
            callback(error);
          });
      }
    });
  }
};

if (window.AOP.env === 'dev') {
  $.cupEvent.addSubscriber('TEST', {
    onEvent: function (e, cb) {
      console.log('TEST event handler', JSON.stringify(e));
      cb();
    }
  });
}
