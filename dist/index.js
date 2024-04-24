"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceApiIntegration = exports.useVoice = exports.VoiceAssistant = exports.ChatbotAssistant = void 0;
const ChatbotAssistant_1 = __importDefault(require("./components/ChatbotAssistant"));
exports.ChatbotAssistant = ChatbotAssistant_1.default;
const client_1 = require("./scripts/client");
Object.defineProperty(exports, "VoiceApiIntegration", { enumerable: true, get: function () { return client_1.VoiceApiIntegration; } });
const VoiceAssistant_1 = __importDefault(require("./components/VoiceAssistant"));
exports.VoiceAssistant = VoiceAssistant_1.default;
const useVoice_1 = require("./hooks/useVoice");
Object.defineProperty(exports, "useVoice", { enumerable: true, get: function () { return useVoice_1.useVoice; } });
exports.default = client_1.VoiceAPI;
