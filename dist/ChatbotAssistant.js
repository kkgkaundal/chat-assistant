"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./styles/styles.css"); // Import CSS styles
const react_2 = __importDefault(require("react"));
const ChatbotAssistant = () => {
    const [isChatOpen, setIsChatOpen] = (0, react_1.useState)(false);
    const [messages, setMessages] = (0, react_1.useState)([]);
    const [inputValue, setInputValue] = (0, react_1.useState)('');
    const toggleChatPopup = () => {
        setIsChatOpen(!isChatOpen);
    };
    const handleCloseBtnClick = () => {
        setIsChatOpen(false);
    };
    const handleMessageSend = () => {
        if (inputValue.trim() !== '') {
            setMessages([...messages, inputValue]);
            setInputValue('');
        }
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleMessageSend();
        }
    };
    return (react_2.default.createElement("div", null,
        react_2.default.createElement("button", { type: "button", onClick: toggleChatPopup }, "Chat"),
        isChatOpen && (react_2.default.createElement("div", { className: "chat-popup" },
            react_2.default.createElement("div", { className: "chat-header" },
                react_2.default.createElement("span", { className: "close-btn", onClick: handleCloseBtnClick }, "\u00D7")),
            react_2.default.createElement("div", { className: "chat-messages" }, messages.map((message, index) => (react_2.default.createElement("div", { key: index, className: "message" }, message)))),
            react_2.default.createElement("div", { className: "input-box" },
                react_2.default.createElement("input", { id: "messageInput", type: "text", placeholder: "Type your message...", value: inputValue, onChange: (e) => setInputValue(e.target.value), onKeyDown: handleKeyDown }),
                react_2.default.createElement("button", { type: "button", className: 'sendBtn', onClick: handleMessageSend }, "Send"))))));
};
exports.default = ChatbotAssistant;
