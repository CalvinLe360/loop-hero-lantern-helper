export enum GridCellType {
    None,
    Campfire,
    Road,
    Lantern,
    Bookery,
    Thicket,
    River
}

export type GridCell = {
    type: GridCellType,
    row: number,
    col: number
}

export type GridCellLanternInfo = GridCell & {
    neededLanterns: number,
    lanternImportance: number
}

export type GridLayout = GridCell[][]

export type GridCellProps = {
    cell: GridCell
}

export type GridLanternCalculation = {
    lanterns: GridCell[]
    extra: GridCell[]
}