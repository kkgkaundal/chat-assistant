import { ChatCompletionMessageParam } from 'openai/resources'
import { IChatAssistant } from '../types/chat-assistant-interface'
import OpenAI from 'openai'

export const chatAssistantAPIResponse = async (data: IChatAssistant): Promise<any> => {
  try {
    const url = data.url ?? 'https://api.example.com/chat-assistant'
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data.text),
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const responseData = await response.json()

    return responseData
  } catch (error) {
    return null
  }
}

export const chatGPTAssistantAPIResponse = async (data: IChatAssistant, chatHistory?: ChatCompletionMessageParam[]): Promise<any> => {
  try {
    const messages: ChatCompletionMessageParam[] = chatHistory && chatHistory?.length !== 0 ? [...chatHistory] : [{ role: 'system', content: data.context ?? 'You are a helpful assistant.' }]
    messages.push({ role: 'user', content: data.text })

    const openai = new OpenAI({ apiKey: data.apiKey, dangerouslyAllowBrowser: true })
    const completion = await openai.chat.completions.create({
      messages: messages,
      model: data.models ?? 'gpt-3.5-turbo',
    })

    return completion.choices[0]
  } catch (error) {
    return error
    return null
  }
}
