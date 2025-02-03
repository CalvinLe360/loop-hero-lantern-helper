import { GridCellType, type GridLayout } from "../components/types";

function clearProps(grid: GridLayout) {
    for (const row of grid) {
        for (const cell of row) {
            if (cell.type != GridCellType.Road && cell.type != GridCellType.Campfire) {
                cell.type = GridCellType.None
            }
        }
    }
}

export { clearProps }