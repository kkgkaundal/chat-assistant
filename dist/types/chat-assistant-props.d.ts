/// <reference types="react" />
import { Message } from './message'
export interface ChatbotAssistantProps {
  message?: Message
  messages?: Message[]
  isChatOpen?: boolean
  setUserInput?: React.Dispatch<React.SetStateAction<string>>
}
