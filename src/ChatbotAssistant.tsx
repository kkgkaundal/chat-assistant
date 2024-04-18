import { useState, KeyboardEvent } from 'react';
import './styles/styles.css'; // Import CSS styles
import React from 'react';

const ChatbotAssistant: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

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

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleMessageSend();
    }
  };

  return (
    <div>
      <button type="button" onClick={toggleChatPopup}>
        Chat
      </button>
      {isChatOpen && (
        <div className="chat-popup">
          <div className="chat-header">
            <span className="close-btn" onClick={handleCloseBtnClick}>
              &times;
            </span>
          </div>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className="message">
                {message}
              </div>
            ))}
          </div>
          <div className="input-box">
            <input
              id="messageInput"
              type="text"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button type="button" className='sendBtn' onClick={handleMessageSend}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotAssistant;
