export enum State {
    startMenu,
    playing,
    losing,
    endScreen
}

export const sourceIconSize = 128

export const themeColors = {
    primary: "#5555FF",
    secondary: "#ffb300",
    environment: "#6589D7",
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
    icon: string
}

export const tiers : tierData[] = 
[
    {
        label: "monka",
        points: 2,
        size: 0.17,
        icon: "https://cdn.discordapp.com/emojis/902991373555355688.webp?size=128"
    },
    {
        label: "shocc",
        points: 4,
        size: 0.24,
        icon: "https://cdn.discordapp.com/emojis/1250288453732798464.webp?size=128"
    },
    {
        label: "sobb",
        points: 6,
        size: 0.31,
        icon: "https://cdn.discordapp.com/emojis/1250288456274542623.webp?size=128"
    },
    {
        label: "angy",
        points: 8,
        size: 0.38,
        icon: "https://cdn.discordapp.com/emojis/1250397376019959881.webp?size=128"
    },
    {
        label: "pleadin",
        points: 10,
        size: 0.45,
        icon: "https://cdn.discordapp.com/emojis/1250287956388872294.webp?size=128"
    },
    {
        label: "wtf",
        points: 12,
        size: 0.59,
        icon: "https://cdn.discordapp.com/emojis/1250291086841348227.webp?size=128"
    },
    {
        label: "heart eyes",
        points: 14,
        size: 0.80,
        icon: "https://cdn.discordapp.com/emojis/1250288454659608608.webp?size=128"
    },
    {
        label: "love",
        points: 16,
        size: 0.94,
        icon: "https://cdn.discordapp.com/emojis/1303060049714876527.webp?size=128"
    },
    {
        label: "kool",
        points: 18,
        size: 1.08,
        icon: "https://cdn.discordapp.com/emojis/1194890988989206549.webp?size=128"
    },
    {
        label: "SURGE",
        points: 20,
        size: 1.24,
        icon: "https://cdn.discordapp.com/emojis/1194523157072187492.webp?size=128"
    }
]