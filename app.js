let gameSeq=[];
let userSeq=[];
let started=false;
let highlevel=0;
let level=0;
let h2= document.querySelector("h2");
let btns=["yellow","red","purple","green"];
document.addEventListener("keypress",function(){
    if (started==false) {
        console.log("game is started");
        started=true;
        levelUp();
    }

});
function gameFlash(btn){
    // console.log("btn",btn)
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},150);
}

function userFlash(btn){
    console.log("btn",btn)
btn.classList.add("userflash");
setTimeout(function(){
    btn.classList.remove("userflash");
},150);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `level ${level}`;
    let randidx=Math.floor(Math.random()*4);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    gameFlash(randbtn);

}
function checkans(idx){
    // console.log("curr level : ",level);
    // let idx=level-1;
    if(userSeq[idx]==gameSeq[idx]){
        if (userSeq.length==gameSeq.length) {
        setTimeout(levelUp,1000);
        }
    }
    else{
        if (highlevel<=level) {
            highlevel=level;
        }
        h2.innerHTML=`Game Over! Your score was <b>${level}</b>.<br>your high score is ${highlevel}.<br> <br> press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
        },90);
        
        reset();
    }
}

function btnpress () {
    // console.log(this);
    let btn=this;
    userFlash(btn);
    usercolor= btn.getAttribute("id");
    userSeq.push(usercolor);
    checkans(userSeq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for (const btn of allbtns) {
    btn.addEventListener("click", btnpress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    // if (highlevel<=level) {
    //     highlevel=level;
    // }
    level=0;

}
