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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useVoice = exports.CALL_STATUS = void 0;
const react_1 = require("react");
const conversation_type_1 = require("../types/conversation.type");
const client_1 = require("../scripts/client");
const assistant_1 = require("../assistants/assistant");
// import { MessageActionTypeEnum, useMessages } from "./useMessages";
var CALL_STATUS;
(function (CALL_STATUS) {
    CALL_STATUS["INACTIVE"] = "inactive";
    CALL_STATUS["ACTIVE"] = "active";
    CALL_STATUS["LOADING"] = "loading";
})(CALL_STATUS || (exports.CALL_STATUS = CALL_STATUS = {}));
function useVoice() {
    const [isSpeechActive, setIsSpeechActive] = (0, react_1.useState)(false);
    const [callStatus, setCallStatus] = (0, react_1.useState)(CALL_STATUS.INACTIVE);
    const [messages, setMessages] = (0, react_1.useState)([]);
    const [activeTranscript, setActiveTranscript] = (0, react_1.useState)(null);
    const [audioLevel, setAudioLevel] = (0, react_1.useState)(0);
    const [startType, setStartType] = (0, react_1.useState)(null);
    const voiceAPI = client_1.VoiceAPI.getInstance();
    (0, react_1.useEffect)(() => {
        const onSpeechStart = () => setIsSpeechActive(true);
        const onSpeechEnd = () => {
            setIsSpeechActive(false);
        };
        const onCallStartHandler = () => {
            setCallStatus(CALL_STATUS.ACTIVE);
        };
        const onCallEnd = () => {
            setCallStatus(CALL_STATUS.INACTIVE);
        };
        const onVolumeLevel = (volume) => {
            setAudioLevel(volume);
        };
        const onMessageUpdate = (message) => {
            console.log('message', message);
            if (message.type === conversation_type_1.MessageTypeEnum.TRANSCRIPT && message.transcriptType === conversation_type_1.TranscriptMessageTypeEnum.PARTIAL) {
                setActiveTranscript(message);
            }
            else {
                setMessages((prev) => [...prev, message]);
                setActiveTranscript(null);
            }
        };
        const onError = (e) => {
            setCallStatus(CALL_STATUS.INACTIVE);
        };
        voiceAPI.on('speech-start', onSpeechStart);
        voiceAPI.on('speech-end', onSpeechEnd);
        voiceAPI.on('call-start', onCallStartHandler);
        voiceAPI.on('call-end', onCallEnd);
        voiceAPI.on('volume-level', onVolumeLevel);
        voiceAPI.on('message', onMessageUpdate);
        voiceAPI.on('error', onError);
        return () => {
            voiceAPI.off('speech-start', onSpeechStart);
            voiceAPI.off('speech-end', onSpeechEnd);
            voiceAPI.off('call-start', onCallStartHandler);
            voiceAPI.off('call-end', onCallEnd);
            voiceAPI.off('volume-level', onVolumeLevel);
            voiceAPI.off('message', onMessageUpdate);
            voiceAPI.off('error', onError);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const start = () => __awaiter(this, void 0, void 0, function* () {
        var _a;
        setCallStatus(CALL_STATUS.LOADING);
        const response = voiceAPI.start(startType ? (_a = startType.assistantId) !== null && _a !== void 0 ? _a : startType.assistant : assistant_1.assistant);
        response.then((res) => { });
    });
    const stop = () => {
        setCallStatus(CALL_STATUS.LOADING);
        voiceAPI.stop();
    };
    const toggleCall = (callStartType) => {
        if (callStartType !== undefined) {
            setStartType(callStartType);
        }
        if (callStatus == CALL_STATUS.ACTIVE) {
            stop();
        }
        else {
            start();
        }
    };
    return {
        isSpeechActive,
        callStatus,
        audioLevel,
        activeTranscript,
        messages,
        start,
        stop,
        toggleCall,
    };
}
exports.useVoice = useVoice;
