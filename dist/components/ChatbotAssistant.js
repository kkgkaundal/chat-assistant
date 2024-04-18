"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("../styles/styles.css");
const react_2 = __importDefault(require("react"));
const ChatbotAssistant = (props) => {
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
            const message = {
                text: inputValue,
                owner: 'user',
                time: new Date()
            };
            setMessages([...messages, message]);
            setInputValue('');
        }
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleMessageSend();
        }
    };
    return (react_2.default.createElement("div", null,
        react_2.default.createElement("button", { id: "chatBtn", type: "button", onClick: toggleChatPopup }, "Chat"),
        isChatOpen && (react_2.default.createElement("div", { className: "chat-popup", id: "chatPopup" },
            react_2.default.createElement("div", { className: "chat-header" },
                react_2.default.createElement("span", { className: "close-btn", id: "closeBtn", onClick: handleCloseBtnClick }, "\u00D7")),
            react_2.default.createElement("div", { className: "chat-messages", id: "chatMessages" }, messages.map((message, index) => (react_2.default.createElement("div", { key: index, className: `message ${message.owner === "user" ? 'user-message' : 'assistant-message'}` }, message.text)))),
            react_2.default.createElement("div", { className: "input-box" },
                react_2.default.createElement("input", { id: "messageInput", type: "text", placeholder: "Type your message...", value: inputValue, onChange: (e) => setInputValue(e.target.value), onKeyDown: handleKeyDown }),
                react_2.default.createElement("button", { type: "button", className: 'sendBtn', id: "sendBtn", onClick: handleMessageSend }, "Send"))))));
};
exports.default = ChatbotAssistant;
