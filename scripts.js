/*!
* Start Bootstrap - Bare v5.0.9 (https://startbootstrap.com/template/bare)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

let score = 0;

function startQuiz(){
   start = document.getElementById("start");
   start.style.display="none";
   q1.style.display = "block";
}

function q1Correc(){
    q1.style.display = "none";
    q2.style.display = "block";
    score=score+1;
}

function q1wrong(){
    q1.style.display = "none";
    q2.style.display = "block";
}

function q2Correc(){
    q2.style.display = "none";
    results.style.display = "block";
    score=score+1;
    let finalscore=document.getElementById("score");
    finalscore.innerHTML = "Your score is: " + score;
}

function q2wrong(){
    q2.style.display = "none";
    results.style.display = "block";
    let finalscore=document.getElementById("score");
    finalscore.innerHTML = "Your score is: " + score;
}


let q1 = document.getElementById("q1");
let q2 = document.getElementById("q2");
let results = document.getElementById("results");


let startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", startQuiz);

let q1Correct = document.getElementById("Q1Correct");
q1Correct.addEventListener("click", q1Correc);

let q1Wrong = document.getElementsByClass("Q1Wrong"); 
for (wrongBtn of q1Wrong){
    wrongBtn.addEventListener("click", q1wrong);
}

let q2Correct = document.getElementById("Q2Correct");
q2Correct.addEventListener("click", q2Correc);

let q2Wrong = document.getElementsByClass("Q2Wrong"); 
for (wrongBtn of q2Wrong){
    wrongBtn.addEventListener("click", q2wrong);
}