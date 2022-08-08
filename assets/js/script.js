const navMenu = document.querySelector('#nav')
const card = document.querySelector('.m-card')

const tablet = window.matchMedia("(max-width: 900px)")
const mobile = window.matchMedia("(max-width: 600px)")

function openMenu(){
    navMenu.style.right = "0"
};

function closeMenu(){
    navMenu.style.right = "-44vw"

    if(mobile.matches){
        navMenu.style.right = "-104vw"
    }
    else if (tablet.matches){
        navMenu.style.right = "-48vw"
    }
}
