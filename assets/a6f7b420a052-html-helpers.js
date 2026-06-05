"use strict";

Node.prototype.addClass = function (className) {
    this.classList.add(className);
    return this;
}

Node.prototype.removeClass = function (className) {
    this.classList.remove(className);
    return this;
}

Node.prototype.addAttr = function (key, value) {
    this.setAttribute(key, value);
    return this;
}

Node.prototype.injectTooltip = function (tooltip) {
    return this.addAttr('title', tooltip);
}

Node.prototype.readTooltip = function () {
    return this.getAttribute('title');
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function logUnexpected(message) {
    console.warn("Unexpected variable/function: ", message);
}
