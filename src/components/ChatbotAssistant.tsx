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

  const handleMessageSend = () => {
    if (inputValue.trim() !== '') {
      setIsLoading(true)
      const message: Message = {
        text: inputValue,
        owner: 'user',
        time: new Date(),
      }
      setMessages((prevMessages) => [...prevMessages, message])
      setHistory((prevHistory) => [...prevHistory, { role: 'user', content: inputValue }])
      if (props.isCustomAPI && props.setUserInput) {
        props.setUserInput(inputValue)
      } else if (props.isChatGPT) {
        if (props.apiKey) {
          handleGPTAssistantResponse()
        } else {
          throw new Error('API key not provided!')
        }
      } else {
        handleAssistantResponse()
      }
      setInputValue('')
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
              <div
                key={'messagesLoading'}
                className={`message  assistant-message`}>
                <div
                  className="inline-block h-2 w-2 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-primary opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
                  role="status">
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                </div>
                <div
                  className="inline-block h-2 w-2 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-secondary opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
                  role="status">
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                </div>
                <div
                  className="inline-block h-2 w-2 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-success opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
                  role="status">
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                </div>
                <div
                  className="inline-block h-2 w-2 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-danger opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
                  role="status">
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                </div>
                <div
                  className="inline-block h-2 w-2 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-warning opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
                  role="status">
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                </div>
                <div
                  className="inline-block h-2 w-2 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-info opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
                  role="status">
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                </div>
                <div
                  className="inline-block h-2 w-2 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-neutral-50 opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
                  role="status">
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                </div>
                <div
                  className="inline-block h-2 w-2 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-[#332d2d] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
                  role="status">
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
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
