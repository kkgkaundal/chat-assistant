/// <reference types="react" />
import { Message } from './message';
import { CallStartType } from '../hooks/useVoice';
export interface VoiceAssistantProps {
    assistant?: CallStartType;
    message?: Message;
    messages?: Message[];
    isChatOpen?: boolean;
    setUserInput?: React.Dispatch<React.SetStateAction<string>>;
}
