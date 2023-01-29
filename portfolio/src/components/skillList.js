import JSBadge from "../assets/badges/javascript.svg";
import CSS from "../assets/badges/css3.svg";
import Express from "../assets/badges/express.svg";
import Python from "../assets/badges/python.svg";
import ReactLogo from "../assets/badges/react.svg";
import Node from "../assets/badges/nodejs.svg";
import Angular from "../assets/badges/Angular.svg";
import TypeScript from "../assets/badges/Typescript.svg";
import Mongo from "../assets/badges/mongodb.svg";
import HTML from "../assets/badges/html.svg";
import MySQL from "../assets/badges/mysql.svg";
import Postgres from "../assets/badges/Postgresql.svg"


const FrameworkList = [
    
    {
        name: 'Express',
        img_url: Express,
        color: 'bg-[#F5F7FF]',
        projects: ['Watchable', 'AniTracker', 'Tweeter', "Where's Waldo" ]
    },
    {
        name: 'React',
        img_url: ReactLogo,
        color: 'bg-[#61DBFB]',
        projects: ['Watchable', 'AniTracker', 'Tweeter', "Where's Waldo" ]
    },
    {
        name: 'Node.js',
        img_url: Node,
        color: ' bg-[#3C873A]',
        projects: ['Watchable', 'AniTracker', 'Tweeter', "Where's Waldo" ]
    },
    {
        name: 'Angular',
        img_url: Angular,
        color: '#dd1b16',
        projects: ['Watchable' ]
    },
   


]

const LanguageList = [
    {
        name: 'JavaScript',
        img_url: JSBadge,
        projects: ['Watchable', 'AniTracker', 'Tweeter', "Where's Waldo" ]
    },
    {
        name: 'Python',
        img_url: Python,
        projects: ['AniTracker' ]
    },
    {
        name: 'TypeScript',
        img_url: TypeScript,
        projects: ['Watchable' ]
    },
    {
        name: 'CSS',
        img_url: CSS,
        projects: ['Watchable', 'AniTracker', 'Tweeter', "Where's Waldo" ]
    },
    {
        name: 'HTML',
        img_url: HTML,
        projects: ['Watchable', 'AniTracker', 'Tweeter', "Where's Waldo" ]
    }



]

const DatabaseList = [
    {
        name: 'MongoDB',
        img_url: Mongo,
        projects: ['Watchable', 'AniTracker', 'Tweeter', "Where's Waldo" ]
    },
    {
        name: 'MySQL',
        img_url: MySQL,
        projects: ['Watchable', 'AniTracker', 'Tweeter', "Where's Waldo" ]
    },
    {
        name: 'PostgreSQL',
        img_url: Postgres,
        projects: ['Watchable', 'AniTracker', 'Tweeter', "Where's Waldo" ]
    }
]

export {FrameworkList, LanguageList, DatabaseList};