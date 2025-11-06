export enum Proficiency {
    beginner,
    intermediate,
    advanced,
    expert,
}

export enum Tag {
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

export const skills: Skill[] = [
    {
        icon: '/react.png',
        name: 'React',
        longDesc: [
            `It's my favourite tool for writing frontend`,
            'I work with react since 2019, and in this time It has completely changed how I view frontend.',
            `Almost all sites I build are built in react nowdays, because it allows me to work fast and reuse my work.`,
        ],
        proficiency: P.expert,
        tags: [Tag.libraries, Tag.frontend],
    },
    {
        icon: '/redux.png',
        name: 'Redux',
        longDesc: [
            `State management solution I worked with the most.`,
            `Currently I prefer other solutions like Hookstate.js or MobX.`,
        ],
        proficiency: P.expert,
        tags: [Tag.libraries, Tag.frontend],
    },
    {
        icon: '/webpack.png',
        name: 'Webpack',
        longDesc: [`Bundler I use the most.`],
        proficiency: P.advanced,
        tags: [Tag.tools, Tag.frontend, Tag.backend],
    },
    {
        icon: '/aws.png',
        name: 'AWS',
        longDesc: [
            `AWS services that I used: S3, RDS, EC2, Elastic Beanstalk, CodePipeline, Lightsail`,

            `AWS is too big for one person to grasp, so I can't give myself a good rating in it`,
        ],
        proficiency: P.intermediate,
        tags: [Tag.services, Tag.backend],
    },
    {
        icon: '/cra.svg',
        name: 'Create React App',
        longDesc: [
            'Favourite starter template for bundling React apps.',
            `Whenever I can get away with it, I use Create React App, because base settings are good enough for most projects.`,
        ],
        proficiency: P.expert,
        tags: [Tag.tools, Tag.frontend],
    },
    {
        icon: '/emotion.png',
        name: 'Emotion.js',
        longDesc: [
            `First jss-like library I used, and the one that I used the most`,
            `I feel comfortable using emotion as it has good documentation and feels like improved jss / styled-components.`,
        ],
        proficiency: P.advanced,
        tags: [Tag.libraries, Tag.frontend],
    },
    {
        icon: '/node.png',
        name: 'Node js',
        longDesc: [
            'I do a lot of node js one way or another.',
            `I wrote simple CLI programs, backend, bundler configs, electron apps with Node`,
        ],
        proficiency: P.expert,
        tags: [Tag.tools, Tag.frontend, Tag.backend],
    },
    {
        icon: '/js.png',
        name: 'JavaScript',
        longDesc: [
            `My bread and butter work tool`,
            `I feel comfortable writing anything in JS`,
            `I keep up with the latest specifications`,
        ],
        proficiency: P.expert,
        tags: [Tag.languages, Tag.frontend, Tag.backend],
    },
    {
        icon: '/ts.png',
        name: 'TypeScript',
        longDesc: [
            `I like TS, but due to nature of my projects I often don't get to use it`,
        ],
        proficiency: P.advanced,
        tags: [Tag.languages, Tag.frontend, Tag.backend],
    },
    {
        icon: '/linux.png',
        name: 'Linux',
        longDesc: [
            `I know commands and linux basics`,
            `Enough to use it as a server, and navigate, create, grep files etc.`,
        ],
        proficiency: P.intermediate,
        tags: [Tag.tools],
    },
    {
        icon: '/mobx.png',
        name: 'MobX',
        longDesc: [
            `I used this library for one project, but then replaced it with hookstate`,
            `I still like it more than Redux, cause it requires less code to use`,
        ],
        proficiency: P.intermediate,
        tags: [Tag.libraries, Tag.frontend],
    },
    {
        icon: '/rust.png',
        name: 'Rust',
        longDesc: [
            `To avoid JS-developer stereotypes, I started learning a lower level language: Rust.`,
            `Learning Rust could be a good thing, but I stopped once I realized there aren't many things I would solve with it.`,
            `I still like the idea of having optimized programs that don't use up 1gb of ram`,
        ],
        proficiency: P.beginner,
        tags: [Tag.languages],
    },
    {
        icon: '/git.png',
        name: 'Git',
        longDesc: [
            `I know git to a comfortable degree`,
            `I won't bisect or cherry pick a branch though.`,
        ],
        proficiency: P.advanced,
        tags: [Tag.tools],
    },
    {
        icon: '/github.png',
        name: 'GitHub',
        longDesc: [`I use it daily in my work and for all my projects`],
        proficiency: P.expert,
        tags: [Tag.services, Tag.tools],
    },
    {
        icon: '/tc.png',
        name: 'Teamcity',
        longDesc: [
            `I never configured teamcity on my own, but I am used to the interface and getting around it.`,
        ],
        proficiency: P.beginner,
        tags: [Tag.services, Tag.tools],
    },
    {
        icon: '/php.png',
        name: 'PHP',
        longDesc: [
            `My first server side language`,
            `I used it a lot at first, now I prefer to write Node.js servers`,
        ],
        proficiency: P.intermediate,
        tags: [Tag.languages, Tag.backend],
    },
    {
        icon: '/c.png',
        name: 'C',
        longDesc: [
            `I used it in University for one semester and made one project with it.`,
        ],
        proficiency: P.intermediate,
        tags: [Tag.languages],
    },
    {
        icon: '/cpp.png',
        name: 'C++',
        longDesc: [`I used it in University for two semesters.`],
        proficiency: P.intermediate,
        tags: [Tag.languages],
    },
    {
        icon: '/java.svg',
        name: 'Java',
        longDesc: [
            `I once tried some Android development with java, but that ended quickly as I landed a job in frontend.`,
            `I used it in University for one semester. There we got to using Maven, writing tests, using threads etc.`,
        ],
        proficiency: P.intermediate,
        tags: [Tag.languages],
    },
    {
        icon: '/mui.png',
        name: 'Material UI',
        longDesc: [
            `Component library I know the most`,
            `I work with it daily, I know how to customize it, I know it's quirks`,
            `I like to use it when I am prototyping an app`,
        ],
        proficiency: P.expert,
        tags: [Tag.libraries, Tag.frontend],
    },
    {
        icon: '/tailwind.svg',
        name: 'Tailwind',
        longDesc: [
            `I used it briefly in one project`,
            `I never used it much, one time I tried I was fighting my environment, code completion, and recompiling css`,
        ],
        proficiency: P.beginner,
        tags: [Tag.libraries, Tag.frontend],
    },
    {
        icon: '/framermotion.webp',
        name: 'Framer Motion',
        longDesc: [
            'I used to have a love hate relationship with this library. Everything looks nice with it, but complexity grows really fast.',
            "I wouldn't use this library for my projects anymore, because it just takes too much time to wrap your head around the layout bugs in addition to logic bugs.",
        ],
        proficiency: P.intermediate,
        tags: [Tag.libraries, Tag.frontend],
    },
    {
        icon: '/reactrouter.png',
        name: 'React Router',
        longDesc: ['Routing solution for almost every project I do'],
        proficiency: P.advanced,
        tags: [Tag.libraries, Tag.frontend],
        iconStyle: {
            background: 'rgb(37, 37, 37)',
            borderRadius: '50%',
            boxShadow: 'rgb(0 0 0 / 35%) 2px 11.5px 26px -10px',
        },
    },
    {
        icon: '/hookstate.png',
        name: 'Hookstate.js',
        longDesc: [
            `My favourite state management library, due to it's simplicity`,
        ],
        proficiency: P.advanced,
        tags: [Tag.libraries, Tag.frontend],
    },
    {
        icon: '/webstorm.png',
        name: 'WebStorm',
        longDesc: [`My favourite IDE for writing javascript and typescript`],
        proficiency: P.expert,
        tags: [Tag.tools],
    },
    {
        icon: '/vsc.png',
        name: 'Visual Studio Code',
        longDesc: [
            `My second favourite IDE for writing almost everything else.`,
            `Lately I stopped using VSC for projects, because it's not as smart and optimized for working on my particular tech stack as Webstorm`,
        ],
        proficiency: P.expert,
        tags: [Tag.tools],
    },
    {
        icon: '/knex.png',
        name: 'Knex.js',
        longDesc: [
            `I don't really like ORMs, and knex fits me really well. I know how to write SQL, so I don't really have to learn anything with knex, because it is only used to build queries, not to build entire models around them.`,
            `Allows for easy migrations, seeds which are things I am in love with since I discovered them.`,
        ],
        proficiency: P.advanced,
        tags: [Tag.libraries, Tag.backend],
    },
    {
        icon: '/mysql.png',
        name: 'MySQL',
        longDesc: [
            `Whenever I need a DB, I go with MySQL.`,
            `I know all SQL basics and how to store date in tables without repeating it.`,
            `I never had to do sql tests, procedures, and really advanced queries. I did migrations using knex`,
        ],
        proficiency: P.intermediate,
        tags: [Tag.languages, Tag.backend],
    },
    {
        icon: '/nosql.png',
        name: 'NoSQL',
        longDesc: [
            `I used MongoDB for one simple project long ago`,
            `I rarely want to use NoSQL Databases cause they don't scale well when requirements pile up and tables grow.`,
            `Also, I am just more experienced with SQL`,
        ],
        proficiency: P.beginner,
        tags: [Tag.languages],
    },
    {
        icon: '/phpstorm.png',
        name: 'PhpStorm',
        longDesc: [`I used it long time ago, in my first job`],
        proficiency: P.intermediate,
        tags: [Tag.tools],
    },
    {
        icon: '/eclipse.svg',
        name: 'Eclipse',
        longDesc: [`My university required me to use eclipse`],
        proficiency: P.intermediate,
        tags: [Tag.tools],
    },
    {
        icon: '/visualstudio.png',
        name: 'Visual studio',
        longDesc: [
            `I used VS when making C# based apps:`,
            `Console apps, GUI apps ,Unity games`,
        ],
        proficiency: P.intermediate,
        tags: [Tag.tools],
    },
    {
        icon: '/androidstudio.svg',
        name: 'Android Studio',
        longDesc: [
            `I created one application for android, so I used android studio`,
        ],
        proficiency: P.beginner,
        tags: [Tag.tools],
    },
    {
        icon: '/docker.png',
        name: 'Docker',
        longDesc: [
            `I set up docker projects.`,
            'I like the idea, but system requirements docker has stops me from using it personally',
        ],
        proficiency: P.intermediate,
        tags: [Tag.tools],
    },
    {
        icon: '/nest.svg',
        name: 'Nest.js',
        longDesc: [
            `I use nest js when I have to make a sustainable and scalable CRUD API`,
            `I often prefer to write smaller servers in Express`,
        ],
        proficiency: P.intermediate,
        tags: [Tag.frameworks, Tag.backend],
    },

    {
        icon: '/express.png',
        name: 'Express',
        longDesc: [
            `I used Express for a long time now, it is my go-to backend framework for most projects`,
        ],
        proficiency: P.advanced,
        tags: [Tag.frameworks, Tag.backend],
    },
    {
        icon: '/bootstrap.png',
        name: 'Bootstrap',
        longDesc: [
            `I haven't used Bootstrap in years now.`,
            `I sometimes consider it for my projects`,
        ],
        proficiency: P.intermediate,
        tags: [Tag.frameworks, Tag.frontend],
    },
    {
        icon: '/firebase.png',
        name: 'Firebase',
        longDesc: [
            `I mostly used it for it's easy authorization.`,
            `I really like to give all the auth troubles, instead of trying to solve them on my own.`,
            `If I fail at secure Auth it's a bad look for me, but if Google fails then how could I not?`,
        ],
        proficiency: P.beginner,
        tags: [Tag.services],
    },
    {
        icon: '/python.png',
        name: 'Python',
        longDesc: [
            `My first programming language`,
            `I coded a Mario knockoff with basic sprites and level editor`,
        ],
        proficiency: P.beginner,
        tags: [Tag.languages],
    },
    {
        icon: '/r.png',
        name: 'R',
        longDesc: [`I used it for statistics class in my University`],
        proficiency: P.beginner,
        tags: [Tag.languages],
    },
    {
        icon: '/scilab.png',
        name: 'Scilab',
        longDesc: [`I used it for a class in my University`],
        proficiency: P.intermediate,
        tags: [Tag.languages],
    },
    {
        icon: '/digitalocean.png',
        name: 'Digital Ocean',
        longDesc: [
            `This site is hosted on Ditigal Ocean`,
            `I am using their droplets and domain services`,
        ],
        proficiency: P.intermediate,
        tags: [Tag.services],
    },
    {
        icon: '/nginx-icon.svg',
        name: 'Nginx',
        longDesc: [
            `I started learning nginx, because it is just so effective and performant!`,
            `I wouldn't call myself a pro, but I can google the basics, splice some rules from the internet and from my previous experiments into working solution`,
        ],
        proficiency: P.intermediate,
        tags: [Tag.frameworks, Tag.backend],
    },
    {
        icon: '/angular.png',
        name: 'Angular',
        longDesc: [
            `My first js framework.`,
            `I quickly learned it wan't flexible enough for my projects, where React fit well`,

            `Last angular version I used was Angular 8`,
            `I worked with it creating drop down site creators.`,
        ],
        proficiency: P.advanced,
        tags: [Tag.frameworks, Tag.frontend],
    },
    {
        icon: '/scss.png',
        name: 'Scss',
        longDesc: [
            `I never write pure CSS anymore`,
            `Whenever I can I use SCSS instead of it, mostly due to nesting, variables and mixins`,
        ],
        proficiency: P.advanced,
        tags: [Tag.languages],
    },
    {
        icon: '/unity.png',
        name: 'Unity',
        longDesc: [
            `My prefered language to write games in`,
            `I created 2 semi complete 2d games, one for pc and other for mobile phones`,
            `I have a lot lot more unfinished projects in it though, because it's suck a time sink to do many things on my own`,
        ],
        proficiency: P.intermediate,
        tags: [Tag.tools],
    },
    {
        icon: '/blender.png',
        name: 'Blender',
        longDesc: [
            `I make models and animations in blender.`,
            `I really like this program and it's capabilities.`,
        ],
        proficiency: P.intermediate,
        tags: [Tag.tools],
    },
    {
        icon: '/semanticui.png',
        name: 'Semantic UI',
        longDesc: [
            `Semantic UI has some powerful components I like to use`,
            `Often I don't want to use it because it doesn't look modern enough`,
        ],
        proficiency: P.advanced,
        tags: [Tag.libraries],
    },
];

skills.sort((a, b) => a.proficiency - b.proficiency).reverse();

export const proficiencyText = {
    [Proficiency.beginner]: 'Beginner',
    [Proficiency.intermediate]: 'Intermediate',
    [Proficiency.advanced]: 'Advanced',
    [Proficiency.expert]: 'Expert',
};
