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
const react_1 = require("react");
const react_2 = __importDefault(require("react"));
const helpers_1 = require("../helpers/helpers");
const chat_assistant_service_1 = require("../services/chat-assistant-service");
const ChatbotAssistant = (props) => {
    var _a;
    const [isChatOpen, setIsChatOpen] = (0, react_1.useState)(props.isChatOpen ? props.isChatOpen : false);
    const [messages, setMessages] = (0, react_1.useState)(props.messages ? props.messages : []);
    const [inputValue, setInputValue] = (0, react_1.useState)('');
    const [history, setHistory] = (0, react_1.useState)([]);
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    const chatMessagesRef = (0, react_1.useRef)(null);
    const scrollToBottom = () => {
        if (chatMessagesRef.current) {
            chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
        }
    };
    (0, react_1.useEffect)(() => {
        scrollToBottom();
    }, [messages]);
    const toggleChatPopup = () => {
        setIsChatOpen(!isChatOpen);
    };
    const handleCloseBtnClick = () => {
        setIsChatOpen(false);
    };
    const handleMessageSend = () => {
        if (inputValue.trim() !== '') {
            setIsLoading(true);
            const message = {
                text: inputValue,
                owner: 'user',
                time: new Date(),
            };
            setMessages((prevMessages) => [...prevMessages, message]);
            setHistory((prevHistory) => [...prevHistory, { role: 'user', content: inputValue }]);
            if (props.isCustomAPI && props.setUserInput) {
                props.setUserInput(inputValue);
            }
            else if (props.isChatGPT) {
                if (props.apiKey) {
                    handleGPTAssistantResponse();
                }
                else {
                    throw new Error('API key not provided!');
                }
            }
            else {
                handleAssistantResponse();
            }
            setInputValue('');
            setIsLoading(false);
        }
    };
    (0, react_1.useEffect)(() => {
        if (props.message) {
            setMessages([...messages, props.message]);
        }
    }, [props.message]);
    const handleGPTAssistantResponse = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = {
            text: inputValue.trim(),
            apiKey: props.apiKey,
            context: props.context,
            models: props.models,
        };
        const assistantResponse = yield (0, chat_assistant_service_1.chatGPTAssistantAPIResponse)(data, history);
        if (assistantResponse !== null) {
            setHistory((prevHistory) => [...prevHistory, assistantResponse.message]);
            const lastMessageData = assistantResponse.message.context;
            const lastMessage = {
                text: lastMessageData,
                owner: 'assistant',
                time: new Date(),
            };
            setMessages((prevMessages) => [...prevMessages, lastMessage]);
        }
    });
    const handleAssistantResponse = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = {
            text: inputValue.trim(),
            apiKey: props.apiKey,
            context: props.context,
            models: props.models,
        };
        const assistantResponse = yield (0, chat_assistant_service_1.chatAssistantAPIResponse)(data, history);
        if (assistantResponse !== null) {
            setHistory((prevHistory) => [...prevHistory, assistantResponse.message]);
            const lastMessageData = assistantResponse.message.content;
            const lastMessage = {
                text: lastMessageData,
                owner: 'assistant',
                time: new Date(),
            };
            setMessages((prevMessages) => [...prevMessages, lastMessage]);
        }
    });
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleMessageSend();
        }
    };
    return (react_2.default.createElement("div", null,
        react_2.default.createElement("button", { id: "chatBtn", type: "button", onClick: toggleChatPopup }, "Chat"),
        isChatOpen && (react_2.default.createElement("div", { className: "chat-popup", id: "chatPopup" },
            react_2.default.createElement("div", { className: "chat-header" },
                react_2.default.createElement("div", { className: "chat-info" },
                    react_2.default.createElement("h3", null, (_a = props.name) !== null && _a !== void 0 ? _a : 'KK'),
                    react_2.default.createElement("div", { className: "online-info" },
                        react_2.default.createElement("div", { className: "online-sign" }),
                        react_2.default.createElement("div", null, "Online"))),
                react_2.default.createElement("span", { className: "close-btn", id: "closeBtn", onClick: handleCloseBtnClick }, "\u00D7")),
            react_2.default.createElement("div", { className: "chat-messages", id: "chatMessages", ref: chatMessagesRef },
                messages.map((message, index) => (react_2.default.createElement("div", { key: index, className: `message ${message.owner === 'user' ? 'user-message' : 'assistant-message'}` },
                    react_2.default.createElement("p", null, message.text),
                    react_2.default.createElement("span", { className: "message-time" }, (0, helpers_1.formatMessageTime)(message.time))))),
                isLoading && (react_2.default.createElement("div", { key: 'messagesLoading', className: `message  assistant-message` },
                    react_2.default.createElement("div", { className: "inline-block h-2 w-2 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-primary opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]", role: "status" },
                        react_2.default.createElement("span", { className: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" }, "Loading...")),
                    react_2.default.createElement("div", { className: "inline-block h-2 w-2 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-secondary opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]", role: "status" },
                        react_2.default.createElement("span", { className: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" }, "Loading...")),
                    react_2.default.createElement("div", { className: "inline-block h-2 w-2 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-success opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]", role: "status" },
                        react_2.default.createElement("span", { className: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" }, "Loading...")),
                    react_2.default.createElement("div", { className: "inline-block h-2 w-2 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-danger opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]", role: "status" },
                        react_2.default.createElement("span", { className: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" }, "Loading...")),
                    react_2.default.createElement("div", { className: "inline-block h-2 w-2 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-warning opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]", role: "status" },
                        react_2.default.createElement("span", { className: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" }, "Loading...")),
                    react_2.default.createElement("div", { className: "inline-block h-2 w-2 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-info opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]", role: "status" },
                        react_2.default.createElement("span", { className: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" }, "Loading...")),
                    react_2.default.createElement("div", { className: "inline-block h-2 w-2 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-neutral-50 opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]", role: "status" },
                        react_2.default.createElement("span", { className: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" }, "Loading...")),
                    react_2.default.createElement("div", { className: "inline-block h-2 w-2 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-[#332d2d] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]", role: "status" },
                        react_2.default.createElement("span", { className: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" }, "Loading..."))))),
            react_2.default.createElement("div", { className: "input-box" },
                react_2.default.createElement("input", { id: "messageInput", type: "text", placeholder: "Type your message...", value: inputValue, onChange: (e) => setInputValue(e.target.value), onKeyDown: handleKeyDown }),
                react_2.default.createElement("button", { type: "button", className: "sendBtn", id: "sendBtn", onClick: handleMessageSend }, "Send"))))));
};
exports.default = ChatbotAssistant;
