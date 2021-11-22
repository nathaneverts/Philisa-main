const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

var homeNavbarButton = document.getElementById("homeNavbar");
var aboutNavbarButton = document.getElementById("aboutNavbar");
var centersNavbarButton = document.getElementById("centersNavbar");
var registerNavbarButton = document.getElementById("registerNavbar");
var contactNavbarButton = document.getElementById("contactNavbar");

// document.getElementById("homeNavbar").addEventListener("mouseover", navbarColorChange);
// document.getElementById("aboutNavbar").addEventListener("mouseover", navbarColorChange);
// document.getElementById("centersNavbar").addEventListener("mouseover", navbarColorChange);
// document.getElementById("registerNavbar").addEventListener("mouseover", navbarColorChange);
// document.getElementById("contactNavbar").addEventListener("mouseover", navbarColorChange);

function homeColorChange() {
    homeNavbarButton.style.backgroundColor = "red";
    homeNavbarButton.style.borderRadius = "10%";
};

function aboutColorChange() {
    aboutNavbarButton.style.backgroundColor = "orange";
    aboutNavbarButton.style.borderRadius = "10%";
};

function centersColorChange() {
    centersNavbarButton.style.backgroundColor = "yellow";
    centersNavbarButton.style.borderRadius = "10%";
};

function registerColorChange() {
    registerNavbarButton.style.backgroundColor = "green";
    registerNavbarButton.style.borderRadius = "10%";
};

function contactColorChange() {
    contactNavbarButton.style.backgroundColor = "blue";
    contactNavbarButton.style.borderRadius = "10%";
};