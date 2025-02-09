import { GridCellType } from "./types";

const Constants = {
    placementDelayMs: 50,
    calculationTries: 5
}

const Layouts = {
    Blank: [
        [
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
        ], [
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
        ], [
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
        ], [
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
        ], [
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
        ], [
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
        ], [
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
        ], [
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
        ], [
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
        ], [
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
        ], [
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
        ], [
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
        ],
    ],
    Default: [
        [
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
        ],
        [
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
        ],
        [
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
        ],
        [
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.Road,
            GridCellType.Road,
            GridCellType.Road,
            GridCellType.Road,
            GridCellType.Campfire,
            GridCellType.Road,
            GridCellType.Road,
            GridCellType.Road,
            GridCellType.Road,
            GridCellType.Road,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
        ],
        [
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.Road,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.Road,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
        ],
        [
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.Road,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.Road,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
        ],
        [
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.Road,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.Road,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
        ],
        [
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.Road,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.Road,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
        ],
        [
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.Road,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.Road,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
        ],
        [
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.Road,
            GridCellType.Road,
            GridCellType.Road,
            GridCellType.Road,
            GridCellType.Road,
            GridCellType.Road,
            GridCellType.Road,
            GridCellType.Road,
            GridCellType.Road,
            GridCellType.Road,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
        ],
        [
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
        ],
        [
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
            GridCellType.None,
        ],
    ]
}

export {
    Constants,
    Layouts
}