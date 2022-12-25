const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
// const input = document.querySelector("#login-form input")
const HIDDEN_CLASSNAME ="hidden";


function handleBtnClick(event){
    event.preventDefault(); //기본동작을 막는 함수, 새로고침을 막는다

    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    /* greeting.innerText = "Hello " + username; */
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    console.log(username);
}




loginForm.addEventListener("submit", handleBtnClick);

