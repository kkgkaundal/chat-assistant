import Vapi from '@vapi-ai/web'

export interface APIConfig {
  apiKey: string | undefined
}

export class VoiceApiIntegration {
  apiKey: string | undefined
  voiceAPI: Vapi | null = null
  initialized: boolean = false

  constructor(apiConfig: APIConfig) {
    this.apiKey = apiConfig.apiKey
    this.initialize()
  }

  private initialize() {
    if (!this.initialized && this.apiKey) {
      this.voiceAPI = new Vapi(this.apiKey)
      this.initialized = true
    }
  }

  getInstance(): Vapi | null {
    return this.voiceAPI
  }
}

const apiKeyValidator = (key: string) => {
  if (key) {
    return key
  } else {
    return undefined
  }
}

const apiKey = apiKeyValidator('your-api-key')

const voiceApiIntegration = new VoiceApiIntegration({
  apiKey: apiKey,
})

export const VoiceAPI = voiceApiIntegration
