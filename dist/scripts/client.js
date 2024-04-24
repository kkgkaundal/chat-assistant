"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceAPI = exports.VoiceApiIntegration = void 0;
const web_1 = __importDefault(require("@vapi-ai/web"));
class VoiceApiIntegration {
    constructor(apiConfig) {
        this.voiceAPI = null;
        this.initialized = false;
        this.apiKey = apiConfig.apiKey;
        this.initialize();
    }
    initialize() {
        if (!this.initialized && this.apiKey) {
            this.voiceAPI = new web_1.default(this.apiKey);
            this.initialized = true;
        }
    }
    getInstance() {
        return this.voiceAPI;
    }
}
exports.VoiceApiIntegration = VoiceApiIntegration;
const apiKeyValidator = (key) => {
    if (key) {
        return key;
    }
    else {
        return undefined;
    }
};
const apiKey = apiKeyValidator('your-api-key');
const voiceApiIntegration = new VoiceApiIntegration({
    apiKey: apiKey,
});
exports.VoiceAPI = voiceApiIntegration;
