import { useState } from "react";
import "./styles/styles.css"; // Import CSS styles
import React = require("react");

const ChatbotAssistant = () => {
  const [messages, setMessages] = useState<any>([]);
  const [inputValue, setInputValue] = useState("");

  const handleMessageSend = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, inputValue]);
      setInputValue("");
    }
  };

  const handleKeyDown = (event: { key: string; }) => {
    if (event.key === "Enter") {
      handleMessageSend();
    }
  };

  return (
    <div className="chat-popup">
      <div className="chat-header">
        <span
          className="close-btn"
          onClick={() => console.log("Close clicked")}
        >
          &times;
        </span>
      </div>
      <div className="chat-messages">
        {messages.map((message: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button type="button" onClick={handleMessageSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatbotAssistant;
