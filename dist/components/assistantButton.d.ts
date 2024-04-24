import { useVoice } from '../hooks/useVoice';
import React from 'react';
declare const AssistantButton: ({ toggleCall, callStatus, audioLevel }: Partial<ReturnType<typeof useVoice>>) => React.JSX.Element;
export { AssistantButton };
