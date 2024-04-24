"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const useVoice_1 = require("../hooks/useVoice");
const display_1 = require("./display");
const assistantButton_1 = require("./assistantButton");
const VoiceAssistant = (props) => {
    const { toggleCall, callStatus, audioLevel } = (0, useVoice_1.useVoice)();
    const handleToggleCall = () => {
        toggleCall(props.assistant);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "chat-history" },
            react_1.default.createElement(display_1.Display, null)),
        react_1.default.createElement("div", { className: "user-input" },
            react_1.default.createElement(assistantButton_1.AssistantButton, { audioLevel: audioLevel, callStatus: callStatus, toggleCall: handleToggleCall }))));
};
exports.default = VoiceAssistant;
