"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatGPTAssistantAPIResponse = exports.chatAssistantAPIResponse = void 0;
const openai_1 = __importDefault(require("openai"));
const axios_1 = __importDefault(require("axios"));
const chatAssistantAPIResponse = (data, chatHistory) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        let messages = [
            {
                role: 'system',
                content: `You are Erica and you have sound knowledge of contract management systems. You are answering or clarifying all the doubts of user based of bellow summery of contract /n  ${data.context}`,
            },
            { role: 'assistant', content: 'Hi my name is Erica. How can I help you' },
            // { role: 'user', content: `Hi bellow is the summery of my blockchain contact and i want details about this, here is summery /n ${data.context}` },
            // { role: 'assistant', content: 'Sure i can help you , what is your question about this contract' },
        ];
        if (chatHistory) {
            messages = messages.concat(chatHistory);
        }
        messages.push({ role: 'user', content: data.text });
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
        };
        const response = yield axios_1.default.post((_a = data.url) !== null && _a !== void 0 ? _a : 'http://34.125.206.202:5000/v1/chat/completions', requestData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data.choices[0];
    }
    catch (error) {
        return null;
    }
});
exports.chatAssistantAPIResponse = chatAssistantAPIResponse;
const chatGPTAssistantAPIResponse = (data, chatHistory) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        let messages = [
            {
                role: 'system',
                content: `You are Erica and you have sound knowledge of contract management systems. You are answering or clarifying all the doubts of user related contract which summery is, ${data.context}`,
            },
            { role: 'assistant', content: 'Hi my name is Erica. How can I help you' },
            // { role: 'user', content: `Hi bellow is the summery of my blockchain contact and i want details about this, here is summery /n ${data.context}` },
            // { role: 'assistant', content: 'Sure i can help you , what is your question about this contract' },
        ];
        if (chatHistory) {
            messages = messages.concat(chatHistory);
        }
        messages.push({ role: 'user', content: data.text });
        const openai = new openai_1.default({ apiKey: data.apiKey, dangerouslyAllowBrowser: true });
        const completion = yield openai.chat.completions.create({
            messages: messages,
            model: (_b = data.models) !== null && _b !== void 0 ? _b : 'gpt-3.5-turbo',
        });
        return completion.choices[0];
    }
    catch (error) {
        return null;
    }
});
exports.chatGPTAssistantAPIResponse = chatGPTAssistantAPIResponse;
