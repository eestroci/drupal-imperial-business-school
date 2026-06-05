function parseDateToUTCTime(date) {
    var isEventDaylightSavingTime = document.getElementById('IsEventDaylightSavingTime').value;
    var utcOffset = 0;
    if (isEventDaylightSavingTime === "True" || (date.getTimezoneOffset() !== 0 && new Date().getTimezoneOffset() === 0)) {
        utcOffset = 1;
    }
    var hours = date.getUTCHours() + utcOffset;
    if (hours === 24) hours = "00";
    var timestring = ("0" + hours).slice(-2);
    timestring += ':';
    timestring += ("0" + date.getUTCMinutes()).slice(-2);
    timestring += ':';
    timestring += ("0" + date.getUTCSeconds()).slice(-2);

    return timestring;
}