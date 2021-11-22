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


const form = document.getElementById("form1");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phonenumber = document.getElementById("phonenumber");

form.addEventListener("submit", (e) => {
    // let message = []
// e.preventDefault();

checkInputs();
});

function checkInputs(){
    const fullnameValue = fullname.value.trim();
    const emailValue = email.value.trim();
    const phonenumberValue = phonenumber.value.trim();
    varInput = true;
    
    if(fullnameValue === ''){
        setErrorFor(fullname, "Full name cannot be blank");

    } else {
        setSuccessFor(fullname)
    }

    
    if(emailValue === ''){
        setErrorFor(email, "Email cannot be blank");

    } else if(!isEmail(emailValue)){
        setErrorFor(email, "Email is not valid");

    } else {
        setSuccessFor(email);
    }


    // if(phonenumberValue === ''){
    //     setErrorFor(phoneNumber, "Phone number cannot be blank");

    // } else if(!isphonenumber(phonenumberValue)|| phonenumberValue.length > 10 || phonenumberValue.length < 10){
    //     setErrorFor(phonenumber, "Phone Number is not valid");

    // }else {
    //     setSuccessFor(phonenumber);
    // }

};

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'inputbox error';
};
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'inputbox success';
};
function isEmail (email) {
    const re =  /^[a-zA-Z0-9.! #*+/=? ^_{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/;
    return re.test(email);
};
// function isphonenumber (phonenumber) {

//     const re = /^(0)?[6-8][0-9]{9}/;
//     return re.test(phonenumber);
//     // /^[\d,\s, \+,-]{5,20}/
//     // /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
// };

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
