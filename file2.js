console.log("Hello")

const userName = document.querySelector("#name");
const submitButton = document.querySelector(".submit");
let userInput = document.querySelector(".nameInput");


 
submitButton.addEventListener("click", function (){
    console.log(userInput.value);
    userName.innerHTML = userInput.value;
});
