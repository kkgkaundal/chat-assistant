import { useState, KeyboardEvent, useEffect, useRef } from 'react'
import '../styles/styles.css'
import React from 'react'
import { Message } from '../types/message'
import { ChatbotAssistantProps } from '../types/chat-assistant-props'
import { formatMessageTime } from '../helpers/helpers'
import { chatAssistantAPIResponse, chatGPTAssistantAPIResponse } from '../services/chat-assistant-service'
import { IChatAssistant } from '../types/chat-assistant-interface'
import { AssistantOptions } from '../types/assistant-options'
import { ChatCompletionMessageParam } from 'openai/resources'

const ChatbotAssistant: React.FC<ChatbotAssistantProps & AssistantOptions> = (props) => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(props.isChatOpen ? props.isChatOpen : false)
  const [messages, setMessages] = useState<Message[]>(props.messages ? props.messages : [])
  const [inputValue, setInputValue] = useState<string>('')
  const [history, setHistory] = useState<ChatCompletionMessageParam[]>([])

  const chatMessagesRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

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
      if (props.isCustomAPI && props.setUserInput) {
        props.setUserInput(inputValue)
      } else if (props.isChatGPT) {
        if (props.apiKey) {
          handleGPTAssistantResponse()
        } else {
          throw new Error('API key not provided!')
        }
      }
      setInputValue('')
    }
  }
  useEffect(() => {
    if (props.message) {
      setMessages([...messages, props.message])
    }
  }, [props.message])

  const handleGPTAssistantResponse = async () => {
    const data: IChatAssistant = {
      text: inputValue.trim(),
      apiKey: props.apiKey,
      context: props.context,
      models: props.models,
    }
    const assistantResponse = await chatGPTAssistantAPIResponse(data, history)
    if (assistantResponse !== null) {
      setHistory(assistantResponse.message)
      const lastMessage = assistantResponse.message.pop()
      setMessages([...messages, lastMessage])
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
            id="chatMessages"
            ref={chatMessagesRef}>
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
