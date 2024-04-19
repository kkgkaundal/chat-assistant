'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.chatAssistantAPIResponse = void 0
const chatAssistantAPIResponse = (data) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _a
    try {
      const url = (_a = data.url) !== null && _a !== void 0 ? _a : 'https://api.example.com/chat-assistant'
      const response = yield fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data.text),
      })
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const responseData = yield response.json()
      return responseData
    } catch (error) {
      return null
    }
  })
exports.chatAssistantAPIResponse = chatAssistantAPIResponse
