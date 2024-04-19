"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatMessageTime = void 0;
function formatMessageTime(time) {
    // Format time as HH:MM
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}
exports.formatMessageTime = formatMessageTime;
