import { useEffect, useState } from 'react'
import { TranscriptMessageTypeEnum, Message, MessageTypeEnum, TranscriptMessage } from '../types/conversation.type'
import { VoiceAPI } from '../scripts/client'
import { assistant } from '../assistants/assistant'
import { CreateAssistantDTO } from '@vapi-ai/web/dist/api'
// import { MessageActionTypeEnum, useMessages } from "./useMessages";

export enum CALL_STATUS {
  INACTIVE = 'inactive',
  ACTIVE = 'active',
  LOADING = 'loading',
}

export interface CallStartType {
  assistant?: CreateAssistantDTO
  assistantId?: string
}

export function useVoice() {
  const [isSpeechActive, setIsSpeechActive] = useState(false)
  const [callStatus, setCallStatus] = useState<CALL_STATUS>(CALL_STATUS.INACTIVE)

  const [messages, setMessages] = useState<Message[]>([])

  const [activeTranscript, setActiveTranscript] = useState<TranscriptMessage | null>(null)

  const [audioLevel, setAudioLevel] = useState(0)
  const [startType, setStartType] = useState<CallStartType | null>(null)
  const voiceAPI = VoiceAPI.getInstance()

  useEffect(() => {
    const onSpeechStart = () => setIsSpeechActive(true)
    const onSpeechEnd = () => {
      setIsSpeechActive(false)
    }

    const onCallStartHandler = () => {
      setCallStatus(CALL_STATUS.ACTIVE)
    }

    const onCallEnd = () => {
      setCallStatus(CALL_STATUS.INACTIVE)
    }

    const onVolumeLevel = (volume: number) => {
      setAudioLevel(volume)
    }

    const onMessageUpdate = (message: Message) => {
      console.log('message', message)
      if (message.type === MessageTypeEnum.TRANSCRIPT && message.transcriptType === TranscriptMessageTypeEnum.PARTIAL) {
        setActiveTranscript(message)
      } else {
        setMessages((prev) => [...prev, message])
        setActiveTranscript(null)
      }
    }

    const onError = (e: any) => {
      setCallStatus(CALL_STATUS.INACTIVE)
    }

    voiceAPI!.on('speech-start', onSpeechStart)
    voiceAPI!.on('speech-end', onSpeechEnd)
    voiceAPI!.on('call-start', onCallStartHandler)
    voiceAPI!.on('call-end', onCallEnd)
    voiceAPI!.on('volume-level', onVolumeLevel)
    voiceAPI!.on('message', onMessageUpdate)
    voiceAPI!.on('error', onError)

    return () => {
      voiceAPI!.off('speech-start', onSpeechStart)
      voiceAPI!.off('speech-end', onSpeechEnd)
      voiceAPI!.off('call-start', onCallStartHandler)
      voiceAPI!.off('call-end', onCallEnd)
      voiceAPI!.off('volume-level', onVolumeLevel)
      voiceAPI!.off('message', onMessageUpdate)
      voiceAPI!.off('error', onError)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const start = async () => {
    setCallStatus(CALL_STATUS.LOADING)
    const response = voiceAPI!.start(startType ? startType.assistantId! ?? startType.assistant! : assistant)

    response.then((res: any) => {})
  }

  const stop = () => {
    setCallStatus(CALL_STATUS.LOADING)
    voiceAPI!.stop()
  }

  const toggleCall = (callStartType: CallStartType | undefined) => {
    if (callStartType !== undefined) {
      setStartType(callStartType)
    }
    if (callStatus == CALL_STATUS.ACTIVE) {
      stop()
    } else {
      start()
    }
  }

  return {
    isSpeechActive,
    callStatus,
    audioLevel,
    activeTranscript,
    messages,
    start,
    stop,
    toggleCall,
  }
}
