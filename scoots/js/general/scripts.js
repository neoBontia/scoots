const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// For the year and date
let date = new Date();

document.getElementById("year").textContent = date.getFullYear();
document.getElementById("latest-update").textContent = days[date.getDay()] + ", " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();

// For the small nav menu
function toggleMenu() {
    document.getElementById("navBar").classList.toggle("hide");

    if (!document.getElementById("navBar").classList.contains("hide")) {
        document.querySelector("nav").style.backgroundColor = "var(--main-color)";
        document.querySelector("nav").style.borderRadius = "0px 0px 20px 20px";
        document.querySelector("header").style.border = "none";
    }
    else {
        document.querySelector("nav").style.backgroundColor = "white";
        document.querySelector("header").style.borderBottom = "1px solid rgba(0, 0, 0, .8)";
    }
}