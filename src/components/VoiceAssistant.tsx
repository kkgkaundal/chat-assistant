import React from 'react'
import { CallStartType, useVoice } from '../hooks/useVoice'
import { VoiceAssistantProps } from '../types/voice-assistant-props'
import { Display } from './display'
import { AssistantButton } from './assistantButton'

const VoiceAssistant: React.FC<VoiceAssistantProps> = (props) => {
  const { toggleCall, callStatus, audioLevel } = useVoice()
  const handleToggleCall = () => {
    toggleCall(props.assistant)
  }
  return (
    <>
      <div className="chat-history">
        <Display />
      </div>
      <div className="user-input">
        <AssistantButton
          audioLevel={audioLevel}
          callStatus={callStatus}
          toggleCall={handleToggleCall}></AssistantButton>
      </div>
    </>
  )
}

export default VoiceAssistant
