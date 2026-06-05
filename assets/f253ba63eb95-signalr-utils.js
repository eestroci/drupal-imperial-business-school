"use strict";

 $(function () {

    var stopIntervalTime = 28800000; // 8 hours timeout
    var eventStateHub = $.connection.eventStateHub;
    var stopIntervalId = setTimeout(stopHub, stopIntervalTime);

    eventStateHub.client.eventStateChanged = function (changedId, planningState, recordingState, recordedState, playerState) {
        if (eventId == changedId) {
            stateChanged(planningState, recordingState, recordedState, playerState, true);
            clearTimeout(stopIntervalId);
            stopIntervalId = setTimeout(stopHub, stopIntervalTime);
            sendStat(analyticsEvents.STOP)();

            if (typeof statIntervalId !== 'undefined') {
                clearInterval(statIntervalId);
            } 
        }
    };

    $.connection.hub.start().done(function () { });
});

function stopHub() {
    $.connection.hub.stop();
};