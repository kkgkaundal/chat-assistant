import { ChatCompletionMessageParam } from 'openai/resources';
import { IChatAssistant } from '../types/chat-assistant-interface';
export declare const chatAssistantAPIResponse: (data: IChatAssistant, chatHistory?: ChatCompletionMessageParam[]) => Promise<any>;
export declare const chatGPTAssistantAPIResponse: (data: IChatAssistant, chatHistory?: ChatCompletionMessageParam[]) => Promise<any>;
