import { IChatAssistant } from '../types/chat-assistant-interface'

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
