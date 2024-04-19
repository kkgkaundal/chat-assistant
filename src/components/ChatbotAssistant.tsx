import { useState, KeyboardEvent, useEffect } from 'react'
import '../styles/styles.css'
import React from 'react'
import { Message } from '../types/message'
import { ChatbotAssistantProps } from '../types/chat-assistant-props'
import { formatMessageTime } from '../helpers/helpers'
import { chatAssistantAPIResponse } from '../services/chat-assistant-service'
import { IChatAssistant } from '../types/chat-assistant-interface'
import { AssistantOptions } from '../types/assistant-options'

const ChatbotAssistant: React.FC<ChatbotAssistantProps & AssistantOptions> = (props) => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(props.isChatOpen ? props.isChatOpen : false)
  const [messages, setMessages] = useState<Message[]>(props.messages ? props.messages : [])
  const [inputValue, setInputValue] = useState<string>('')

  const toggleChatPopup = () => {
    setIsChatOpen(!isChatOpen)
  }

  const handleCloseBtnClick = () => {
    setIsChatOpen(false)
  }

  const handleMessageSend = () => {
    if (inputValue.trim() !== '') {
      const message: Message = {
        text: inputValue,
        owner: 'user',
        time: new Date(),
      }
      setMessages([...messages, message])
      setInputValue('')
    }
  }
  useEffect(() => {
    if (props.message) {
      setMessages([...messages, props.message])
    }
  }, [props.message])

  useEffect(() => {
    if (inputValue.trim() !== '') {
      if (props.isCustomAPI && props.setUserInput) {
        props.setUserInput(inputValue)
      } else {
        handleAssistantResponse()
      }
    }
  }, [inputValue])

  const handleAssistantResponse = async () => {
    const data: IChatAssistant = {
      text: inputValue.trim(),
    }
    const assistantResponse = await chatAssistantAPIResponse(data)
    if (assistantResponse !== null) {
      setMessages([...messages, assistantResponse.message])
    }
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleMessageSend()
    }
  }

  return (
    <div>
      <button
        id="chatBtn"
        type="button"
        onClick={toggleChatPopup}>
        Chat
      </button>
      {isChatOpen && (
        <div
          className="chat-popup"
          id="chatPopup">
          <div className="chat-header">
            <div className="chat-info">
              <h3>{props.name ?? 'KK'}</h3>
              <div className="online-info">
                <div className="online-sign"></div>
                <div>Online</div>
              </div>
            </div>
            <span
              className="close-btn"
              id="closeBtn"
              onClick={handleCloseBtnClick}>
              &times;
            </span>
          </div>
          <div
            className="chat-messages"
            id="chatMessages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.owner === 'user' ? 'user-message' : 'assistant-message'}`}>
                <p>{message.text}</p>
                <span className="message-time">{formatMessageTime(message.time)}</span>
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
            <button
              type="button"
              className="sendBtn"
              id="sendBtn"
              onClick={handleMessageSend}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatbotAssistant
