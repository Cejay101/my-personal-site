
//Modal constants
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
const nextBtn = document.getElementById("nextButton")
const secondNextButton = document.getElementById("secondnextButton")

//Game levels
const gameLevel = document.getElementById("gameLevel")
const gameLevel2 = document.getElementById("gameLevel2")
const gameLevel3 = document.getElementById("gameLevel3")

//animations
const logo1 = document.getElementById("logo1")
const logo2 = document.getElementById("logo2")
const logo3 = document.getElementById("logo3")
const logo4 = document.getElementById("logo4")
const logo5 = document.getElementById("logo5")

window.addEventListener("touchstart", checkValue)
nextBtn.addEventListener("click", openNextLevel);
secondNextButton.addEventListener("click", openSecondNextLevel)

//Checking if the animations are at the center
function checkValue(){
    if(((logo1.style.top,right==="175")&&(logo2.style.top,right === "175")&&(logo3.style.top,right ==="175")&&(logo4.style.top,right==="175")&&(logo5.style.top,right==="175"))){
        modal.setAttribute('style','display:block')
    }else{
        modal.setAttribute('style','display:none')
    }

}

//Modal event listeners
closeBtn.addEventListener("click", exitModal);

//function for closing modal
function exitModal(){
    modal.style.display = "none"
}


function openNextLevel(){
    gameLevel.style.display = "none"
    gameLevel2.style.display = "block"
}

function openSecondNextLevel(){
    gameLevel2.style.display = "none"
    gameLevel3.style.display = "block"
}










