import { Message, TranscriptMessage } from '../types/conversation.type';
import { CreateAssistantDTO } from '@vapi-ai/web/dist/api';
export declare enum CALL_STATUS {
    INACTIVE = "inactive",
    ACTIVE = "active",
    LOADING = "loading"
}
export interface CallStartType {
    assistant?: CreateAssistantDTO;
    assistantId?: string;
}
export declare function useVoice(): {
    isSpeechActive: boolean;
    callStatus: CALL_STATUS;
    audioLevel: number;
    activeTranscript: TranscriptMessage | null;
    messages: Message[];
    start: () => Promise<void>;
    stop: () => void;
    toggleCall: (callStartType: CallStartType | undefined) => void;
};
