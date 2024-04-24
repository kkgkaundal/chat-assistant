import Vapi from '@vapi-ai/web';
export interface APIConfig {
    apiKey: string | undefined;
}
export declare class VoiceApiIntegration {
    apiKey: string | undefined;
    voiceAPI: Vapi | null;
    initialized: boolean;
    constructor(apiConfig: APIConfig);
    private initialize;
    getInstance(): Vapi | null;
}
export declare const VoiceAPI: VoiceApiIntegration;
