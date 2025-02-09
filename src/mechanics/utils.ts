import { GridCellType, type GridCell, type GridLayout } from "../components/types"

function isRoad(cell: GridCell) {
    return cell.type == GridCellType.Road || cell.type == GridCellType.Campfire || cell.type == GridCellType.Village
}

function validatePosition(grid: GridLayout, row: number, col: number) {
    return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length
}

function getSurroundingCells(grid: GridLayout, cell: GridCell) {
    const cells: GridCell[] = []

    for (let row = cell.row - 1; row <= cell.row + 1; row++) {
        for (let col = cell.col - 1; col <= cell.col + 1; col++) {
            if ((row == cell.row && col == cell.col) || !validatePosition(grid, row, col)) continue;
            cells.push(grid[row][col])
        }
    }

    return cells
}

function getAdjacentCells(grid: GridLayout, cell: GridCell) {
    const cells: GridCell[] = []
    const dirIndex = [0, 1, 0, -1, 0]

    for (let d = 0; d < 4; d++) {
        const [row, col] = [cell.row + dirIndex[d], cell.col + dirIndex[d + 1]]
        if (!validatePosition(grid, row, col)) continue;
        cells.push(grid[row][col])
    }

    return cells
}

export {
    isRoad,
    validatePosition,
    getAdjacentCells,
    getSurroundingCells
}