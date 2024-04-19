export interface AssistantOptions {
  name?: string
  apiUrl?: string
  token?: string
  apiKey?: string
  isCustomAPI?: boolean
  isChatGPT?: boolean
  models?: 'gpt-3.5-turbo-0125' | 'gpt-4-turbo' | 'dall-e-3' | 'gpt-3.5-turbo'
  context?: string
}
