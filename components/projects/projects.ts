export type Project = {
    name: string;
    description: string;
    imgSrc?: string;
    tags: TAG[];
    href?: string;
    source?: string;
};

export enum TAG {
    React = 'React',
    JS = 'JS',
    TS = 'TS',
    NodeJs = 'NodeJs',
    'C#' = 'C#',
    PHP = 'PHP',
    MUI = 'MUI',
    Nest = 'Nest.js',
    SQL = 'SQL',
    C = 'C',
}

export const projects: Project[] = [
    {
        name: 'My Portfolio site',
        description: 'This site',
        tags: [TAG.React, TAG.TS, TAG.MUI],
        source: 'https://github.com/Angael/angael-project',
        href: '/',
    },
    {
        name: 'KryptoBreaker',
        description:
            'Website created to help people learn cryptographic algorithms for free and because I was lazy and wanted to cheat on my collage exams.',
        imgSrc: '/kryptobreaker.png',
        tags: [TAG.React, TAG.JS, TAG.MUI],
        source: 'https://github.com/Angael/KryptoBreaker',
        href: 'https://krypto.widacki.me/',
    },
    {
        name: 'Cerebro (frontend)',
        description:
            'Frontend for cerebro project. Disk drive, kind of like google drive. Compresses videos and images.',
        tags: [TAG.React, TAG.TS, TAG.MUI],
        source: 'https://github.com/Angael/cerebro-frontend',
        href: 'https://cerebro.widacki.me/',
    },
    {
        name: 'Cerebro (backend)',
        description:
            'Backend for cerebro project. Disk drive, kind of like google drive. Compresses videos and images.',
        tags: [TAG.Nest, TAG.TS, TAG.SQL],
        source: 'https://github.com/Angael/cerebro-backend',
        href: 'https://cerebro.widacki.me/',
    },
    {
        name: 'PPK helper',
        description:
            'CMD project written in C. It gave me the highest grade in the first semester of university. It calculates Polish "Pracownicze Plany Kapitałowe" (sytem for saving money for employees) worth after n years with given circumstances.',
        tags: [TAG.C],
        source: 'https://github.com/Angael/C_PracowniczePlanyKapitalowe',
    },
    {
        name: 'FFMPEG helper',
        description:
            'Site for generating simple ffmpeg commands for cutting videos',
        tags: [TAG.React, TAG.JS],
        href: 'https://ffmpeg.widacki.me/',
    },
    {
        name: 'Iwona Rogowska Widacka',
        description:
            "One of the first sites I ever created. It's for my mother's business and her presence online. To this day it's one of the results when searching for 'Psycholog Belgia' in Google",
        tags: [TAG.PHP, TAG.JS],
        href: 'https://psychologonline.be/',
    },
];
