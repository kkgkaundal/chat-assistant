import { Message } from './types/message'
import { ChatbotAssistantProps } from './types/chat-assistant-props'

import { AssistantOptions } from './types/assistant-options'
import ChatbotAssistant from './components/ChatbotAssistant'
import { VoiceAPI, APIConfig, VoiceApiIntegration } from './scripts/client'
import VoiceAssistant from './components/VoiceAssistant'
import { useVoice } from './hooks/useVoice'

export { ChatbotAssistantProps, Message, AssistantOptions, ChatbotAssistant, APIConfig, VoiceAssistant, useVoice, VoiceApiIntegration }

export default VoiceAPI
