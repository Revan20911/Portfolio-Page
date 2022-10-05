export default function scrollToProjects(){
    const projects = document.querySelector(".project-content-main");
    projects.scrollIntoView({behavior: 'smooth'});
}