const buttonFtOne = document.querySelector(".feature-1");
const buttonFtTwo = document.querySelector(".feature-2");
const buttonFtThree = document.querySelector(".feature-3");
const ftDescripOne = document.querySelector(".feature-1-description");
const ftDescripTwo= document.querySelector(".feature-2-description");
const ftDescripThree = document.querySelector(".feature-3-description");

// Click Fit Guide
buttonFtOne.addEventListener("click", function(e){
    buttonFtOne.classList.add("selected");
    buttonFtTwo.classList.remove("selected");
    buttonFtThree.classList.remove("selected");
    ftDescripOne.classList.remove("hide");
    ftDescripTwo.classList.add("hide");
    ftDescripThree.classList.add("hide");
});

// Click Care
buttonFtTwo.addEventListener("click", function(e){
    buttonFtOne.classList.remove("selected");
    buttonFtTwo.classList.add("selected");
    buttonFtThree.classList.remove("selected");
    ftDescripOne.classList.add("hide");
    ftDescripTwo.classList.remove("hide");
    ftDescripThree.classList.add("hide");
});

// Click Materials
buttonFtThree.addEventListener("click", function(e){
    buttonFtOne.classList.remove("selected");
    buttonFtTwo.classList.remove("selected");
    buttonFtThree.classList.add("selected");
    ftDescripOne.classList.add("hide");
    ftDescripTwo.classList.add("hide");
    ftDescripThree.classList.remove("hide");
});