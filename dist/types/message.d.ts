export interface Message {
    text: string;
    owner: "user" | "assistant";
    time: Date;
}
