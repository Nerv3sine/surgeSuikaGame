import evo1 from "./evolutions/1 - Outlined.svg"
import evo2 from "./evolutions/2 - Outlined.svg"
import evo3 from "./evolutions/3 - Outlined.svg"
import evo4 from "./evolutions/4 - Outlined.svg"
import evo5 from "./evolutions/5 - Outlined.svg"
import evo6 from "./evolutions/6 - Outlined.svg"
import evo7 from "./evolutions/7 - Outlined.svg"
import evo8 from "./evolutions/8 - Outlined.svg"
import evo9 from "./evolutions/9 - Outlined.svg"
import evo10 from "./evolutions/10 - Outlined.svg"

export enum State {
    playing,
    losing,
    endScreen
}

export const themeColors = {
    primary: "#5555FF",
    secondary: "#ffb300",
    environment: "#6589D7",
    theme: "#BEC1C8",
    warning: "#BB0000"
}

export const anonymousAliases : string[] = 
[
    "unknown otter", "otternonymous", "random sparks"
]

export interface tierData{
    label: string,
    points: number,
    size: number,
    originalSize: number,
    icon: string
}

export const tiers : tierData[] = 
[
    {
        label: "monka",
        points: 2,
        size: 0.17,
        originalSize: 32,
        icon: evo1
    },
    {
        label: "shocc",
        points: 4,
        size: 0.24,
        originalSize: 42,
        icon: evo2
    },
    {
        label: "sobb",
        points: 6,
        size: 0.31,
        originalSize: 55,
        icon: evo3
    },
    {
        label: "angy",
        points: 8,
        size: 0.38,
        originalSize: 62,
        icon: evo4
    },
    {
        label: "pleadin",
        points: 10,
        size: 0.45,
        originalSize: 78,
        icon: evo5
    },
    {
        label: "wtf",
        points: 12,
        size: 0.59,
        originalSize: 100,
        icon: evo6
    },
    {
        label: "heart eyes",
        points: 14,
        size: 0.80,
        originalSize: 120,
        icon: evo7
    },
    {
        label: "love",
        points: 16,
        size: 0.94,
        originalSize: 145,
        icon: evo8
    },
    {
        label: "kool",
        points: 18,
        size: 1.08,
        originalSize: 198,
        icon: evo9
    },
    {
        label: "SURGE",
        points: 20,
        size: 1.24,
        originalSize: 241,
        icon: evo10
    }
]