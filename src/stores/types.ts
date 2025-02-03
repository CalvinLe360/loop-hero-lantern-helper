export enum MessageType {
    Normal,
    Success,
    Error
}

export type MessageOutput = {
    message: string
    type: MessageType
}