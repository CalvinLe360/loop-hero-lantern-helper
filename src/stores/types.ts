import type { GridCell, GridCellType } from "@/components";

export enum MessageType {
    Normal,
    Success,
    Error
}

export type MessageOutput = {
    message: string
    type: MessageType
}

export enum Event {
    ClearProps,
    Reset,
    Paint
}

export type EventData = {
    [Event.ClearProps]: {};
    [Event.Reset]: {},
    [Event.Paint]: {
        cell: GridCell,
        prevType: GridCellType
    }
}

export type EventHandler = (params: EventData[Event]) => void