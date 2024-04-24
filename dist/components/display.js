"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Display = void 0;
const react_1 = __importStar(require("react"));
const shows_1 = require("./shows");
const ticket_1 = require("./ticket");
const conversation_type_1 = require("../types/conversation.type");
const client_1 = require("../scripts/client");
const shows_2 = require("../data/shows");
function Display() {
    const [showList, setShowList] = react_1.default.useState([]);
    const [status, setStatus] = react_1.default.useState('show');
    const [selectedShow, setSelectedShow] = react_1.default.useState(null);
    const [confirmDetails, setConfirmDetails] = react_1.default.useState();
    const voiceAPI = client_1.VoiceAPI.getInstance();
    (0, react_1.useEffect)(() => {
        const onMessageUpdate = (message) => {
            if (message.type === conversation_type_1.MessageTypeEnum.FUNCTION_CALL && message.functionCall.name === 'suggestShows') {
                setStatus('show');
                voiceAPI.send({
                    type: conversation_type_1.MessageTypeEnum.ADD_MESSAGE,
                    message: {
                        role: 'system',
                        content: `Here is the list of suggested shows: ${JSON.stringify(shows_2.shows.map((show) => show.title))}`,
                    },
                });
                setShowList(shows_2.shows);
            }
            else if (message.type === conversation_type_1.MessageTypeEnum.FUNCTION_CALL && (message.functionCall.name === 'confirmDetails' || message.functionCall.name === 'bookTickets')) {
                const params = message.functionCall.parameters;
                setConfirmDetails(params);
                console.log('parameters', params);
                const result = shows_2.shows.find((show) => show.title.toLowerCase() == params.show.toLowerCase());
                setSelectedShow(result !== null && result !== void 0 ? result : shows_2.shows[0]);
                setStatus(message.functionCall.name === 'confirmDetails' ? 'confirm' : 'ticket');
            }
        };
        const reset = () => {
            setStatus('show');
            setShowList([]);
            setSelectedShow(null);
        };
        voiceAPI.on('message', onMessageUpdate);
        voiceAPI.on('call-end', reset);
        return () => {
            voiceAPI.off('message', onMessageUpdate);
            voiceAPI.off('call-end', reset);
        };
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        showList.length > 0 && status == 'show' ? react_1.default.createElement(shows_1.ShowsComponent, { showList: showList }) : null,
        status !== 'show' ? (react_1.default.createElement(ticket_1.Ticket, { type: status, show: selectedShow !== null && selectedShow !== void 0 ? selectedShow : shows_2.shows[0], params: confirmDetails })) : null));
}
exports.Display = Display;
