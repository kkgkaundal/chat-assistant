import { useState, KeyboardEvent, useEffect, useRef } from 'react'
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
  const [isLoading, setIsLoading] = useState<boolean>(false)

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

  const handleMessageSend = async () => {
    if (inputValue.trim() !== '') {
      setHistory((prevHistory) => [...prevHistory, { role: 'user', content: inputValue.trim() }])
      setIsLoading(true)
      const message: Message = {
        text: inputValue,
        owner: 'user',
        time: new Date(),
      }
      setMessages((prevMessages) => [...prevMessages, message])
      if (props.isCustomAPI && props.setUserInput) {
        props.setUserInput(inputValue)
      } else if (props.isChatGPT) {
        if (props.apiKey) {
          await handleGPTAssistantResponse()
        } else {
          throw new Error('API key not provided!')
        }
      } else {
        await handleAssistantResponse()
      }
      setIsLoading(false)
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
    setInputValue('')
    const assistantResponse = await chatGPTAssistantAPIResponse(data, history)
    if (assistantResponse !== null) {
      setHistory((prevHistory) => [...prevHistory, assistantResponse.message])
      const lastMessageData = assistantResponse.message.context
      const lastMessage: Message = {
        text: lastMessageData,
        owner: 'assistant',
        time: new Date(),
      }
      setMessages((prevMessages) => [...prevMessages, lastMessage])
    }
  }

  const handleAssistantResponse = async () => {
    const data: IChatAssistant = {
      text: inputValue.trim(),
      apiKey: props.apiKey,
      context: props.context,
      models: props.models,
    }
    setInputValue('')
    const assistantResponse = await chatAssistantAPIResponse(data, history)
    if (assistantResponse !== null) {
      setHistory((prevHistory) => [...prevHistory, assistantResponse.message])
      const lastMessageData = assistantResponse.message.content
      const lastMessage: Message = {
        text: lastMessageData,
        owner: 'assistant',
        time: new Date(),
      }
      setMessages((prevMessages) => [...prevMessages, lastMessage])
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
            {isLoading && (
              <div className={`message assistant-message`}>
                <div className="typing-container">
                  <div className="typing-dot red"></div>
                  <div className="typing-dot blue"></div>
                  <div className="typing-dot green"></div>
                  <div className="typing-dot yellow"></div>
                </div>
              </div>
            )}
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
