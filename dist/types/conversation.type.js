"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranscriptMessageTypeEnum = exports.MessageRoleEnum = exports.MessageTypeEnum = void 0;
var MessageTypeEnum;
(function (MessageTypeEnum) {
    MessageTypeEnum["TRANSCRIPT"] = "transcript";
    MessageTypeEnum["FUNCTION_CALL"] = "function-call";
    MessageTypeEnum["FUNCTION_CALL_RESULT"] = "function-call-result";
    MessageTypeEnum["ADD_MESSAGE"] = "add-message";
})(MessageTypeEnum || (exports.MessageTypeEnum = MessageTypeEnum = {}));
var MessageRoleEnum;
(function (MessageRoleEnum) {
    MessageRoleEnum["USER"] = "user";
    MessageRoleEnum["SYSTEM"] = "system";
    MessageRoleEnum["ASSISTANT"] = "assistant";
})(MessageRoleEnum || (exports.MessageRoleEnum = MessageRoleEnum = {}));
var TranscriptMessageTypeEnum;
(function (TranscriptMessageTypeEnum) {
    TranscriptMessageTypeEnum["PARTIAL"] = "partial";
    TranscriptMessageTypeEnum["FINAL"] = "final";
})(TranscriptMessageTypeEnum || (exports.TranscriptMessageTypeEnum = TranscriptMessageTypeEnum = {}));
