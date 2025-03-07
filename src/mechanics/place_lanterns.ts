import { usePaintStore } from "@/stores";
import { Constants } from "../components/constants";
import { GridCellType, type GridLanternCalculation } from "../components/types";

async function placeLanterns(calculation: GridLanternCalculation) {
    const paintStore = usePaintStore()

    for (const lantern of calculation.lanterns) {
        paintStore.paint(lantern, GridCellType.Lantern)
        await new Promise((res) => setTimeout(res, Constants.placementDelayMs));
    }

    for (const bookery of calculation.extra.shuffle()) {
        paintStore.paint(bookery, GridCellType.Bookery)
        await new Promise((res) => setTimeout(res, Constants.placementDelayMs));
    }
}

export { placeLanterns }