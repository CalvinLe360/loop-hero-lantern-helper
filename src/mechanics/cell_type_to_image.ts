import { GridCellType } from "../components/types";

export function getImage(type: GridCellType) {
    switch (type) {
        case GridCellType.Lantern:
            return "lantern.png";
        case GridCellType.Bookery:
            return "bookery.png";
        case GridCellType.Campfire:
            return "campfire.png";
        case GridCellType.Road:
            return "road.png";
        case GridCellType.River:
            return 'river.png'
        case GridCellType.Thicket:
            return 'thicket.png'
        default:
            return "none.png";
    }
};
