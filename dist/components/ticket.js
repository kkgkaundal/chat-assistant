"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticket = void 0;
const react_1 = __importDefault(require("react"));
const shows_1 = require("../data/shows");
const client_1 = require("../scripts/client");
const conversation_type_1 = require("../types/conversation.type");
function Ticket({ type = 'confirm', show = shows_1.shows[0], params = {} }) {
    var _a;
    const voiceAPI = client_1.VoiceAPI.getInstance();
    const confirmDetails = () => {
        voiceAPI.send({
            type: conversation_type_1.MessageTypeEnum.ADD_MESSAGE,
            message: {
                role: 'user',
                content: `Looks good to me. Lets go ahead.`,
            },
        });
    };
    return (react_1.default.createElement("div", { className: `bg-slate-100  rounded-xl` },
        react_1.default.createElement("div", { className: "container mx-auto px-4 py-8" },
            react_1.default.createElement("div", { className: "flex flex-wrap -mx-4" },
                react_1.default.createElement("div", { className: "w-full lg:w-1/2 px-4 mb-8 lg:mb-0" },
                    react_1.default.createElement("img", { className: "w-full rounded-lg shadow-lg", src: show.img, alt: "Concert Image", width: 200 })),
                react_1.default.createElement("div", { className: "w-full lg:w-1/2 px-4" },
                    react_1.default.createElement("h1", { className: "text-3xl font-bold mb-4" }, show.title),
                    type === 'ticket' ? react_1.default.createElement("p", { className: "bg-green-500 text-white rounded-md w-full px-4 py-3 mb-6" }, "Your ticket has been booked successfully.") : null,
                    react_1.default.createElement("p", { className: "text-lg mb-6" }, show.description),
                    react_1.default.createElement("div", { className: "mb-6" },
                        react_1.default.createElement("p", { className: "text-xl font-bold mb-2" }, "When:"),
                        react_1.default.createElement("p", { className: "text-lg" }, new Date((_a = params.date) !== null && _a !== void 0 ? _a : show.date).toLocaleString())),
                    react_1.default.createElement("div", { className: "mb-6" },
                        react_1.default.createElement("p", { className: "text-xl font-bold mb-2" }, "Where:"),
                        react_1.default.createElement("p", { className: "text-lg" }, show.theatre),
                        react_1.default.createElement("p", { className: "text-lg" }, show.venue)),
                    react_1.default.createElement("div", { className: "mb-6" },
                        react_1.default.createElement("p", { className: "text-xl font-bold mb-2" }, "Tickets:"),
                        react_1.default.createElement("p", { className: "text-lg" },
                            "$",
                            show.price,
                            " - General Admission")),
                    type == 'confirm' ? (react_1.default.createElement("button", { onClick: confirmDetails, className: "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline", type: "button" }, "Confirm Bookings")) : null)))));
}
exports.Ticket = Ticket;
