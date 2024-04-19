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

export const chatGPTAssistantAPIResponse = async (data: IChatAssistant): Promise<any> => {
  try {
    const message: ChatCompletionMessageParam[] = [
      { role: 'system', content: data.context ?? 'You are a helpful assistant.' },
      { role: 'user', content: 'Who won the world series in 2020?' },
      { role: 'assistant', content: 'The Los Angeles Dodgers won the World Series in 2020.' },
      { role: 'user', content: 'Where was it played?' },
    ]
    const openai = new OpenAI({ apiKey: data.apiKey, dangerouslyAllowBrowser: true })
    const completion = await openai.chat.completions.create({
      messages: message,
      model: data.models ?? 'gpt-3.5-turbo',
    })

    console.log(completion.choices[0])

    return completion.choices[0]
  } catch (error) {
    return error
    return null
  }
}
