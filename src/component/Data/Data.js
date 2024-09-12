import dentalCare from "../image/dentalcare-website.jpg";
import ecommerce from "../image/fashion-website.jpg";
import omdbApi from "../image/movie-api-website.png";


export const skillData = [
    {
        color:"#1ABCFE",
        iconClass: "fa-brands fa-figma",
        skillName: "Figma",
        skillStatus: "Intermediate"
    },
    {
        color:"#e34c26",
        iconClass: "fa-brands fa-html5",
        skillName: "HTML",
        skillStatus: "Experienced"
    },
    {
        color: "#264de4",
        iconClass: "fa-brands fa-css3-alt",
        skillName: "CSS",
        skillStatus: "Experienced"
    },
    {
        color:"#fce300",
        iconClass: "fa-brands fa-square-js",
        skillName: "JavaScript",
        skillStatus: "Intermediate"
    },
    {
        color:"#00aeff",
        iconClass: "fa-brands fa-react",
        skillName: "React js",
        skillStatus: "Intermediate"
    },
    {
        color:"#f1502f",
        iconClass: "fa-brands fa-git-alt",
        skillName: "GIT",
        skillStatus: "Basic"
    },
    {
        color:"black",
        iconClass: "fa-brands fa-github",
        skillName: "GitHub",
        skillStatus: "Basic"
    }
]

export const projectData = [
    {
        img: omdbApi,
        altText: 'omdbApi',
        webName: 'OMDB API',
        technology: ['React Js'],
        gitHubLink: 'https://github.com/coder-prabhakar/IMDB-Mini-Clone-Project-Usigh-React-Js'
    },
    {
        img: dentalCare,
        altText: 'dentalCare',
        webName: 'DentalCare',
        technology: ['HTML','CSS','JavaScript'],
        gitHubLink: 'https://github.com/coder-prabhakar/Dentalcare-Landing-Page-Using-HTML-CSS-JavaScript'
    },
    {
        img: ecommerce,
        altText: 'ecommerce',
        webName: 'E-commerce',
        technology: ['HTML','CSS','JavaScript'],
        gitHubLink: 'https://github.com/coder-prabhakar/simple-ecommerce-website-using-HTML-CSS-JavaScript'
    },
]