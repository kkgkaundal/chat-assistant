import { useState, KeyboardEvent } from 'react';
import '../styles/styles.css';
import React from 'react';
import { Message } from '../types/message';
import { ChatbotAssistantProps } from '../types/chat-assistant-props';

const ChatbotAssistant: React.FC<ChatbotAssistantProps> = (props) => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const toggleChatPopup = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleCloseBtnClick = () => {
    setIsChatOpen(false);
  };

  const handleMessageSend = () => {
    if (inputValue.trim() !== '') {
      const message: Message = {
        text: inputValue,
        owner: 'user',
        time: new Date()
      }
      setMessages([...messages, message]);
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
      <button id="chatBtn" type="button" onClick={toggleChatPopup}>
        Chat
      </button>
      {isChatOpen && (
        <div className="chat-popup" id="chatPopup">
          <div className="chat-header">
            <span className="close-btn" id="closeBtn" onClick={handleCloseBtnClick}>
              &times;
            </span>
          </div>
          <div className="chat-messages" id="chatMessages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.owner === "user" ? 'user-message' : 'assistant-message'}`} >
                {message.text}
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
            <button type="button" className='sendBtn' id="sendBtn" onClick={handleMessageSend}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotAssistant;
