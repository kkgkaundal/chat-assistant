import React, { useEffect } from 'react'
import { ShowsComponent } from './shows'
import { Ticket } from './ticket'
import { Message, MessageTypeEnum } from '../types/conversation.type'
import { VoiceAPI } from '../scripts/client'
import { shows } from '../data/shows'

function Display() {
  const [showList, setShowList] = React.useState<Array<(typeof shows)[number]>>([])

  const [status, setStatus] = React.useState<'show' | 'confirm' | 'ticket'>('show')

  const [selectedShow, setSelectedShow] = React.useState<(typeof shows)[number] | null>(null)

  const [confirmDetails, setConfirmDetails] = React.useState<{}>()
  const voiceAPI = VoiceAPI.getInstance()

  useEffect(() => {
    const onMessageUpdate = (message: Message) => {
      if (message.type === MessageTypeEnum.FUNCTION_CALL && message.functionCall.name === 'suggestShows') {
        setStatus('show')
        voiceAPI!.send({
          type: MessageTypeEnum.ADD_MESSAGE,
          message: {
            role: 'system',
            content: `Here is the list of suggested shows: ${JSON.stringify(shows.map((show) => show.title))}`,
          },
        })
        setShowList(shows)
      } else if (message.type === MessageTypeEnum.FUNCTION_CALL && (message.functionCall.name === 'confirmDetails' || message.functionCall.name === 'bookTickets')) {
        const params = message.functionCall.parameters

        setConfirmDetails(params)
        console.log('parameters', params)

        const result = shows.find((show) => show.title.toLowerCase() == params.show.toLowerCase())
        setSelectedShow(result ?? shows[0])

        setStatus(message.functionCall.name === 'confirmDetails' ? 'confirm' : 'ticket')
      }
    }

    const reset = () => {
      setStatus('show')
      setShowList([])
      setSelectedShow(null)
    }

    voiceAPI!.on('message', onMessageUpdate)
    voiceAPI!.on('call-end', reset)
    return () => {
      voiceAPI!.off('message', onMessageUpdate)
      voiceAPI!.off('call-end', reset)
    }
  }, [])

  return (
    <>
      {showList.length > 0 && status == 'show' ? <ShowsComponent showList={showList} /> : null}
      {status !== 'show' ? (
        <Ticket
          type={status}
          show={selectedShow ?? shows[0]}
          params={confirmDetails}
        />
      ) : null}
    </>
  )
}

export { Display }
