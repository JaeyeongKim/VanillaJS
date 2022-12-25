const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function handleBtnClick(){
    const value = loginInput.value;
    if(value === "kim"){
        console.log("yes");
    }else{
        console.log("no");
    }
}


loginButton.addEventListener("click", handleBtnClick);
