/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

// Implementation
var Events = {};

Events.cancelEvent = function(event) {
  event.stopPropagation();
  event.preventDefault();
};

Events.isLeftClick = function(event, allowKeyModifiers) {
  return event.button === 0 && (allowKeyModifiers || this.noKeyModifiers(event));
};

Events.isMiddleClick = function(event, allowKeyModifiers) {
  return event.button === 1 && (allowKeyModifiers || this.noKeyModifiers(event));
};

Events.isRightClick = function(event, allowKeyModifiers) {
  return event.button === 2 && (allowKeyModifiers || this.noKeyModifiers(event));
};

Events.isSingleClick = function(event) {
  return event instanceof MouseEvent && event.detail === 1;
};

Events.isDoubleClick = function(event) {
  return event instanceof MouseEvent && event.detail === 2;
};

Events.noKeyModifiers = function(event) {
  return !event.ctrlKey && !event.shiftKey && !event.altKey && !event.metaKey;
};

Events.isControlClick = function(event) {
  return event.button === 0 && this.isControl(event);
};

Events.isShiftClick = function(event) {
  return event.button === 0 && this.isShift(event);
};

Events.isControl = function(event) {
  return (event.metaKey || event.ctrlKey) && !event.shiftKey && !event.altKey;
};

Events.isAlt = function(event) {
  return event.altKey && !event.ctrlKey && !event.shiftKey && !event.metaKey;
};

Events.isAltClick = function(event) {
  return event.button === 0 && this.isAlt(event);
};

Events.isControlShift = function(event) {
  return (event.metaKey || event.ctrlKey) && event.shiftKey && !event.altKey;
};

Events.isControlAlt = function(event) {
  return (event.metaKey || event.ctrlKey) && !event.shiftKey && event.altKey;
};

Events.isShift = function(event) {
  return event.shiftKey && !event.metaKey && !event.ctrlKey && !event.altKey;
};

// Exports from this module
module.exports = {
  Events: Events
}
