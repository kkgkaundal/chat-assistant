import { ChatCompletionMessageParam } from 'openai/resources'
import { IChatAssistant } from '../types/chat-assistant-interface'
import OpenAI from 'openai'
import axios from 'axios'

export const chatAssistantAPIResponse = async (data: IChatAssistant, chatHistory?: ChatCompletionMessageParam[]): Promise<any> => {
  try {
    let messages: ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content: `You are Erica and you have sound knowledge of contract management systems. You are answering or clarifying all the doubts of user based of bellow summery of contract /n  ${data.context}`,
      },
      { role: 'assistant', content: 'Hi my name is Erica. How can I help you' },
      // { role: 'user', content: `Hi bellow is the summery of my blockchain contact and i want details about this, here is summery /n ${data.context}` },
      // { role: 'assistant', content: 'Sure i can help you , what is your question about this contract' },
    ]
    if (chatHistory) {
      messages = messages.concat(chatHistory)
    }

    messages.push({ role: 'user', content: data.text })
    const requestData = {
      body: {
        stream: false,
      },
      context: `You are Erica and you have sound knowledge of contract management systems. You are answering or clarifying all the doubts of user based of bellow summery of contract /n  ${data.context}`,
      greeting: 'Hi my name is Erica. How can I help you',
      prompt: data.text,
      model: '01-ai_Yi-6B-Chat',
      messages: messages,
      mode: 'chat',
      character: 'Erica',
    }
    const response = await axios.post(data.url ?? 'http://34.125.206.202:5000/v1/chat/completions', requestData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return response.data.choices[0]
  } catch (error) {
    return null
  }
}

export const chatGPTAssistantAPIResponse = async (data: IChatAssistant, chatHistory?: ChatCompletionMessageParam[]): Promise<any> => {
  try {
    let messages: ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content: `You are Erica and you have sound knowledge of contract management systems. You are answering or clarifying all the doubts of user related contract which summery is, ${data.context}`,
      },
      { role: 'assistant', content: 'Hi my name is Erica. How can I help you' },
      // { role: 'user', content: `Hi bellow is the summery of my blockchain contact and i want details about this, here is summery /n ${data.context}` },
      // { role: 'assistant', content: 'Sure i can help you , what is your question about this contract' },
    ]
    if (chatHistory) {
      messages = messages.concat(chatHistory)
    }

    messages.push({ role: 'user', content: data.text })

    const openai = new OpenAI({ apiKey: data.apiKey, dangerouslyAllowBrowser: true })
    const completion = await openai.chat.completions.create({
      messages: messages,
      model: data.models ?? 'gpt-3.5-turbo',
    })

    return completion.choices[0]
  } catch (error) {
    return null
  }
}
