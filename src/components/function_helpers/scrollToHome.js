export default function scrollToHome(){
    const home = document.querySelector(".home-content-main");
    home.scrollIntoView({behavior: 'smooth'});
}