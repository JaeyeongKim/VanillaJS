/* const a = 5;
const b = 2;

const myName = "jaeyoeng";


console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log(myName); */

const title = document.querySelector("div.hello:first-child h1");



function handleTitleClick(){
    title.style.color = "blue";
}

title.addEventListener("click", handleTitleClick);