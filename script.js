let shuffled_letters=document.querySelector(".words");
let hints=document.querySelector(".hint span");
let reset=document.querySelector(".reset");
let validate=document.querySelector(".validate");
let ans=document.querySelector("input");
let timeText=document.querySelector('.time b')
let correctWord,timer;
const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
        init();
    }, 1000);
}
const init=()=>{
    initTimer(30);
    let randomObj=Words[Math.floor(Math.random() * Words.length)];
    correctWord=randomObj.word;
    //console.log(randomObj);
    let letters=randomObj.word.split("");
    //console.log(letters);
    for (let i = letters.length-1; i > 0; i--) {
        let j=Math.floor(Math.random() * (i+1));
        [letters[i],letters[j]]=[letters[j],letters[i]];
    }
    shuffled_letters.innerText=letters.join("");
    hints.innerText=randomObj.hint;
    ans.value="";
    ans.setAttribute("maxlength",correctWord.length);
}
const check=()=>{
    userWord=ans.value.toLocaleLowerCase();
    if(!userWord)
        alert("plz enter a word");
    else if(userWord==correctWord)
        alert("congrats! correct answer");
    else
        alert("wrong answer");
        init();
    
}
init();
reset.addEventListener('click',init);
validate.addEventListener('click',check);