import { Constants } from "../components/constants";
import { GridCellType, type GridLanternCalculation } from "../components/types";

async function placeLanterns(calculation: GridLanternCalculation) {
    for (const lantern of calculation.lanterns) {
        lantern.type = GridCellType.Lantern;
        await new Promise((res) => setTimeout(res, Constants.placementDelayMs));
    }

    for (const bookery of calculation.extra.shuffle()) {
        bookery.type = GridCellType.Bookery;
        await new Promise((res) => setTimeout(res, Constants.placementDelayMs));
    }
}

export { placeLanterns }