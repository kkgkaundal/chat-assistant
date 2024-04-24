"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssistantButton = void 0;
const useVoice_1 = require("../hooks/useVoice");
const lucide_react_1 = require("lucide-react");
const button_1 = require("./button");
const react_1 = __importDefault(require("react"));
const AssistantButton = ({ toggleCall, callStatus, audioLevel = 0 }) => {
    const color = callStatus === useVoice_1.CALL_STATUS.ACTIVE ? 'red' : callStatus === useVoice_1.CALL_STATUS.LOADING ? 'orange' : 'green';
    const buttonStyle = {
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        color: 'white',
        border: 'none',
        boxShadow: `1px 1px ${10 + audioLevel * 40}px ${audioLevel * 10}px ${color}`,
        backgroundColor: callStatus === useVoice_1.CALL_STATUS.ACTIVE ? 'red' : callStatus === useVoice_1.CALL_STATUS.LOADING ? 'orange' : 'green',
        cursor: 'pointer',
    };
    return (react_1.default.createElement(button_1.Button, { style: buttonStyle, className: `transition ease-in-out ${callStatus === useVoice_1.CALL_STATUS.ACTIVE ? 'bg-red-500 hover:bg-red-700' : callStatus === useVoice_1.CALL_STATUS.LOADING ? 'bg-orange-500 hover:bg-orange-700' : 'bg-green-500 hover:bg-green-700'} flex items-center justify-center`, onClick: () => toggleCall }, callStatus === useVoice_1.CALL_STATUS.ACTIVE ? react_1.default.createElement(lucide_react_1.Square, null) : callStatus === useVoice_1.CALL_STATUS.LOADING ? react_1.default.createElement(lucide_react_1.Loader2, { className: "animate-spin" }) : react_1.default.createElement(lucide_react_1.Mic, null)));
};
exports.AssistantButton = AssistantButton;
