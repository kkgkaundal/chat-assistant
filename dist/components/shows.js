"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowsComponent = void 0;
const react_1 = __importDefault(require("react"));
function ShowsComponent({ showList = [] }) {
    return (react_1.default.createElement("div", { className: "flex gap-8 py-4" }, showList.map((show) => (react_1.default.createElement("div", { key: show.title },
        react_1.default.createElement("img", { className: "h-auto my-4 w-full rounded-lg object-cover transition-all hover:scale-105 aspect-[3/4]", src: show.img, alt: show.title }),
        react_1.default.createElement("h2", { className: "text-xl font-bold" }, show.title),
        react_1.default.createElement("p", { className: "text-gray-500 font-bold" },
            " ",
            show.theatre),
        react_1.default.createElement("p", { className: "text-gray-500" },
            "$ ",
            show.price))))));
}
exports.ShowsComponent = ShowsComponent;
