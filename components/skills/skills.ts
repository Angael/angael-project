export enum Proficiency {
    beginner,
    intermediate,
    advanced,
    expert,
}

export enum Tag {
    all = 'All',
    frontend = 'Frontend',
    backend = 'Backend',
    services = 'Services',
    libraries = 'Libraries',
    frameworks = 'Frameworks',
    tools = 'Tools',
    languages = 'Languages',
}

export type Skill = {
    icon: string;
    name: string;
    longDesc: string[];
    proficiency: Proficiency;
    tags: Tag[];
    iconStyle?: any;
};

const P = Proficiency;
const F = Tag;

export const skills: Skill[] = [
    {
        icon: '/img/react.png',
        name: 'React',
        longDesc: [
            `It's my favourite tool for writing frontend`,
            'I work with react since 2019, and in this time It has completely changed how I view frontend.',
            `Almost all sites I build are built in react nowdays, because it allows me to work fast and reuse my work.`,
        ],
        proficiency: P.expert,
        tags: [F.libraries, F.frontend],
    },
    {
        icon: '/img/redux.png',
        name: 'Redux',
        longDesc: [
            `State management solution I worked with the most.`,
            `Currently I prefer other solutions like Hookstate.js or MobX.`,
        ],
        proficiency: P.expert,
        tags: [F.libraries, F.frontend],
    },
    {
        icon: '/img/webpack.png',
        name: 'Webpack',
        longDesc: [`Bundler I use the most.`],
        proficiency: P.advanced,
        tags: [F.tools, F.frontend, F.backend],
    },
    {
        icon: '/img/aws.png',
        name: 'AWS',
        longDesc: [
            `AWS services that I used: S3, RDS, EC2, Elastic Beanstalk, CodePipeline, Lightsail`,

            `AWS is too big for one person to grasp, so I can't give myself a good rating in it`,
        ],
        proficiency: P.intermediate,
        tags: [F.services, F.backend],
    },
    {
        icon: '/img/cra.svg',
        name: 'Create React App',
        longDesc: [
            'Favourite starter template for bundling React apps.',
            `Whenever I can get away with it, I use Create React App, because base settings are good enough for most projects.`,
        ],
        proficiency: P.expert,
        tags: [F.tools, F.frontend],
    },
    {
        icon: '/img/emotion.png',
        name: 'Emotion.js',
        longDesc: [
            `First jss-like library I used, and the one that I used the most`,
            `I feel comfortable using emotion as it has good documentation and feels like improved jss / styled-components.`,
        ],
        proficiency: P.advanced,
        tags: [F.libraries, F.frontend],
    },
    {
        icon: '/img/node.png',
        name: 'Node js',
        longDesc: [
            'I do a lot of node js one way or another.',
            `I wrote simple CLI programs, backend, bundler configs, electron apps with Node`,
        ],
        proficiency: P.expert,
        tags: [F.tools, F.frontend, F.backend],
    },
    {
        icon: '/img/js.png',
        name: 'JavaScript',
        longDesc: [
            `My bread and butter work tool`,
            `I feel comfortable writing anything in JS`,
            `I keep up with the latest specifications`,
        ],
        proficiency: P.expert,
        tags: [F.languages, F.frontend, F.backend],
    },
    {
        icon: '/img/ts.png',
        name: 'TypeScript',
        longDesc: [
            `I like TS, but due to nature of my projects I often don't get to use it`,
        ],
        proficiency: P.advanced,
        tags: [F.languages, F.frontend, F.backend],
    },
    {
        icon: '/img/linux.png',
        name: 'Linux',
        longDesc: [
            `I know commands and linux basics`,
            `Enough to use it as a server, and navigate, create, grep files etc.`,
        ],
        proficiency: P.intermediate,
        tags: [F.tools],
    },
    {
        icon: '/img/mobx.png',
        name: 'MobX',
        longDesc: [
            `I used this library for one project, but then replaced it with hookstate`,
            `I still like it more than Redux, cause it requires less code to use`,
        ],
        proficiency: P.intermediate,
        tags: [F.libraries, F.frontend],
    },
    {
        icon: '/img/rust.png',
        name: 'Rust',
        longDesc: [
            `To avoid JS-developer stereotypes, I started learning a lower level language: Rust.`,
            `I feel like learning Rust is a good solution as Rust nudges you to write better programs at every step and prevents you from shooting yourself in the foot`,
            `It lets me use advanced and specific memory usage, without dealing with c/c++ years of legacy features etc.`,
        ],
        proficiency: P.beginner,
        tags: [F.languages],
    },
    {
        icon: '/img/git.png',
        name: 'Git',
        longDesc: [
            `I know git to a comfortable degree`,
            `I won't bisect or cherry pick a branch though.`,
        ],
        proficiency: P.expert,
        tags: [F.tools],
    },
    {
        icon: '/img/github.png',
        name: 'GitHub',
        longDesc: [`I use it daily in my work and for all my side projects`],
        proficiency: P.expert,
        tags: [F.services, F.tools],
    },
    {
        icon: '/img/tc.png',
        name: 'Teamcity',
        longDesc: [`I never configured teamcity on my own`],
        proficiency: P.beginner,
        tags: [F.services, F.tools],
    },
    {
        icon: '/img/php.png',
        name: 'PHP',
        longDesc: [
            `My first server side language`,
            `I used it a lot at first, now I prefer to write Node.js servers`,
        ],
        proficiency: P.intermediate,
        tags: [F.languages, F.backend],
    },
    {
        icon: '/img/c.png',
        name: 'C',
        longDesc: [
            `I used it in University for one semester and made one project with it.`,
        ],
        proficiency: P.intermediate,
        tags: [F.languages],
    },
    {
        icon: '/img/cpp.png',
        name: 'C++',
        longDesc: [`I used it in University for two semesters.`],
        proficiency: P.intermediate,
        tags: [F.languages],
    },
    {
        icon: '/img/java.svg',
        name: 'Java',
        longDesc: [
            `I once tried some Android development with java, but that ended quickly as I landed a job in frontend.`,
            `I used it in University for one semester. There we got to using Maven, writing tests, using threads etc.`,
        ],
        proficiency: P.intermediate,
        tags: [F.languages],
    },
    {
        icon: '/img/mui.png',
        name: 'Material UI',
        longDesc: [
            `Component library I know the most`,
            `I work with it daily, I know how to customize it, I know it's quirks`,
            `I like to use it when I am prototyping an app`,
        ],
        proficiency: P.expert,
        tags: [F.libraries, F.frontend],
    },
    {
        icon: '/img/tailwind.svg',
        name: 'Tailwind',
        longDesc: [
            `I used it briefly in one project`,
            `I never used it much, one time I tried I was fighting my environment, code completion, and recompiling css`,
        ],
        proficiency: P.beginner,
        tags: [F.libraries, F.frontend],
    },
    {
        icon: '/img/framermotion.webp',
        name: 'Framer Motion',
        longDesc: [
            'This site uses Framer Motion for this very dialog.',
            `I am learning it to create prettier web apps, with that IOS UX.`,
            `I am in love with how animatinos can smoothly transition between themselves, and how framer can animate between things, that css won't bother with`,
        ],
        proficiency: P.beginner,
        tags: [F.libraries, F.frontend],
    },
    {
        icon: '/img/reactrouter.png',
        name: 'React Router',
        longDesc: ['Routing solution for almost every project I do'],
        proficiency: P.advanced,
        tags: [F.libraries, F.frontend],
        iconStyle: {
            background: 'rgb(37, 37, 37)',
            borderRadius: '50%',
            boxShadow: 'rgb(0 0 0 / 35%) 2px 11.5px 26px -10px',
        },
    },
    {
        icon: '/img/hookstate.png',
        name: 'Hookstate.js',
        longDesc: [
            `My favourite state management library, due to it's simplicity`,
        ],
        proficiency: P.advanced,
        tags: [F.libraries, F.frontend],
    },
    {
        icon: '/img/webstorm.png',
        name: 'WebStorm',
        longDesc: [`My favourite IDE for writing javascript and typescript`],
        proficiency: P.expert,
        tags: [F.tools],
    },
    {
        icon: '/img/vsc.png',
        name: 'Visual Studio Code',
        longDesc: [
            `My second favourite IDE for writing almost everything else.`,
            `Lately I stopped using VSC for projects, because it's not as smart and optimized for working on my particular tech stack as Webstorm`,
        ],
        proficiency: P.expert,
        tags: [F.tools],
    },
    {
        icon: '/img/mysql.png',
        name: 'MySQL',
        longDesc: [
            `Whenever I need a DB, I go with MySQL.`,
            `I know all SQL basics and how to store date in tables without repeating it.`,
            `I never had to do migrations, tests, procedures, and really advanced queries.`,
        ],
        proficiency: P.intermediate,
        tags: [F.languages],
    },
    {
        icon: '/img/nosql.png',
        name: 'NoSQL',
        longDesc: [
            `I used MongoDB for one simple project long ago`,
            `I rarely want to use NoSQL Databases cause they don't scale well when requirements pile up and tables grow.`,
            `Also, I am just more experienced with SQL`,
        ],
        proficiency: P.beginner,
        tags: [F.languages],
    },
    {
        icon: '/img/phpstorm.png',
        name: 'PhpStorm',
        longDesc: [`I used it long time ago, in my first job`],
        proficiency: P.intermediate,
        tags: [F.tools],
    },
    {
        icon: '/img/eclipse.svg',
        name: 'Eclipse',
        longDesc: [`My university required me to use eclipse`],
        proficiency: P.intermediate,
        tags: [F.tools],
    },
    {
        icon: '/img/visualstudio.png',
        name: 'Visual studio',
        longDesc: [
            `I used VS when making C# based apps:`,
            `Console apps, GUI apps ,Unity games`,
        ],
        proficiency: P.intermediate,
        tags: [F.tools],
    },
    {
        icon: '/img/androidstudio.svg',
        name: 'Android Studio',
        longDesc: [
            `I created one application for android, so I used android studio`,
        ],
        proficiency: P.beginner,
        tags: [F.tools],
    },
    {
        icon: '/img/docker.png',
        name: 'Docker',
        longDesc: [
            `I set up docker projects.`,
            'I like the idea, but system requirements docker has stops me from using it personally',
        ],
        proficiency: P.intermediate,
        tags: [F.tools],
    },
    {
        icon: '/img/nest.svg',
        name: 'Nest.js',
        longDesc: [
            `I use nest js when I have to make a sustainable and scalable CRUD API`,
            `I often prefer to write smaller servers in Express`,
        ],
        proficiency: P.intermediate,
        tags: [F.frameworks, F.backend],
    },

    {
        icon: '/img/express.png',
        name: 'Express',
        longDesc: [
            `I used Express for a long time now, it is my go-to backend framework for most projects`,
        ],
        proficiency: P.expert,
        tags: [F.frameworks, F.backend],
    },
    {
        icon: '/img/bootstrap.png',
        name: 'Bootstrap',
        longDesc: [
            `I haven't used Bootstrap in years now.`,
            `I sometimes consider it for my projects`,
        ],
        proficiency: P.intermediate,
        tags: [F.frameworks, F.frontend],
    },
    {
        icon: '/img/firebase.png',
        name: 'Firebase',
        longDesc: [
            `I mostly used it for it's easy authorization.`,
            `I really like to give all the auth troubles, instead of trying to solve them on my own.`,
            `If I fail at secure Auth it's a bad look for me, but if Google fails then how could I not?`,
        ],
        proficiency: P.beginner,
        tags: [F.services],
    },
    {
        icon: '/img/python.png',
        name: 'Python',
        longDesc: [
            `My first programming language`,
            `I coded a Mario knockoff with basic sprites and level editor`,
        ],
        proficiency: P.beginner,
        tags: [F.languages],
    },
    {
        icon: '/img/r.png',
        name: 'R',
        longDesc: [`I used it for statistics class in my University`],
        proficiency: P.beginner,
        tags: [F.languages],
    },
    {
        icon: '/img/scilab.png',
        name: 'Scilab',
        longDesc: [`I used it for a class in my University`],
        proficiency: P.intermediate,
        tags: [F.languages],
    },
    {
        icon: '/img/digitalocean.png',
        name: 'Digital Ocean',
        longDesc: [
            `This site is hosted on Ditigal Ocean`,
            `I am using their droplets and domain services`,
        ],
        proficiency: P.intermediate,
        tags: [F.services],
    },
    {
        icon: '/img/angular.png',
        name: 'Angular',
        longDesc: [
            `My first js framework.`,
            `I quickly learned it wan't flexible enough for my projects, where React fit well`,

            `Last angular version I used was Angular 8`,
            `I worked with it creating drop down site creators.`,
        ],
        proficiency: P.advanced,
        tags: [F.frameworks, F.frontend],
    },
    {
        icon: '/img/scss.png',
        name: 'Scss',
        longDesc: [
            `I never write pure CSS anymore`,
            `Whenever I can I use SCSS instead of it, mostly due to nesting, variables and mixins`,
        ],
        proficiency: P.advanced,
        tags: [F.languages],
    },
    {
        icon: '/img/unity.png',
        name: 'Unity',
        longDesc: [
            `My prefered language to write games in`,
            `I created 2 semi complete 2d games, one for pc and other for mobile phones`,
            `I have a lot lot more unfinished projects in it though, because it's suck a time sink to do many things on my own`,
        ],
        proficiency: P.intermediate,
        tags: [F.tools],
    },
    {
        icon: '/img/blender.png',
        name: 'Blender',
        longDesc: [
            `I make models and animations in blender.`,
            `I really like this program and it's capabilities.`,
        ],
        proficiency: P.intermediate,
        tags: [F.tools],
    },
    {
        icon: '/img/semanticui.png',
        name: 'Semantic UI',
        longDesc: [
            `Semantic UI has some powerful components I like to use`,
            `Often I don't want to use it because it doesn't look modern enough`,
        ],
        proficiency: P.advanced,
        tags: [F.libraries],
    },
];
export const proficiencyText = {
    [Proficiency.beginner]: 'Beginner',
    [Proficiency.intermediate]: 'Intermediate',
    [Proficiency.advanced]: 'Advanced',
    [Proficiency.expert]: 'Expert',
};
