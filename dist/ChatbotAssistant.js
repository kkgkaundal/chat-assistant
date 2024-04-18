"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./styles/styles.css"); // Import CSS styles
const React = require("react");
const ChatbotAssistant = () => {
    const [messages, setMessages] = (0, react_1.useState)([]);
    const [inputValue, setInputValue] = (0, react_1.useState)("");
    const handleMessageSend = () => {
        if (inputValue.trim() !== "") {
            setMessages([...messages, inputValue]);
            setInputValue("");
        }
    };
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleMessageSend();
        }
    };
    return (React.createElement("div", { className: "chat-popup" },
        React.createElement("div", { className: "chat-header" },
            React.createElement("span", { className: "close-btn", onClick: () => console.log("Close clicked") }, "\u00D7")),
        React.createElement("div", { className: "chat-messages" }, messages.map((message, index) => (React.createElement("div", { key: index, className: "message" }, message)))),
        React.createElement("div", { className: "input-box" },
            React.createElement("input", { type: "text", placeholder: "Type your message...", value: inputValue, onChange: (e) => setInputValue(e.target.value), onKeyDown: handleKeyDown }),
            React.createElement("button", { type: "button", onClick: handleMessageSend }, "Send"))));
};
exports.default = ChatbotAssistant;
