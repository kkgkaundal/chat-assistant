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
const chatAssistantAPIResponse = (data) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const url = (_a = data.url) !== null && _a !== void 0 ? _a : 'https://api.example.com/chat-assistant';
        const response = yield fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data.text),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const responseData = yield response.json();
        return responseData;
    }
    catch (error) {
        return null;
    }
});
exports.chatAssistantAPIResponse = chatAssistantAPIResponse;
const chatGPTAssistantAPIResponse = (data, chatHistory) => __awaiter(void 0, void 0, void 0, function* () {
    var _b, _c;
    try {
        const messages = chatHistory && (chatHistory === null || chatHistory === void 0 ? void 0 : chatHistory.length) !== 0 ? [...chatHistory] : [{ role: 'system', content: (_b = data.context) !== null && _b !== void 0 ? _b : 'You are a helpful assistant.' }];
        messages.push({ role: 'user', content: data.text });
        const openai = new openai_1.default({ apiKey: data.apiKey, dangerouslyAllowBrowser: true });
        const completion = yield openai.chat.completions.create({
            messages: messages,
            model: (_c = data.models) !== null && _c !== void 0 ? _c : 'gpt-3.5-turbo',
        });
        return completion.choices[0];
    }
    catch (error) {
        return error;
        return null;
    }
});
exports.chatGPTAssistantAPIResponse = chatGPTAssistantAPIResponse;
