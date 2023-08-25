let gameseq = [];
let userseq = [];

let btns = ["btn1","btn2","btn3","btn4"];

let started = false;
let level = 0;

let highscore = document.querySelector("#highscore");


let levelindi = document.querySelector("h2");

document.addEventListener("click",function(){
    if(started == false){
        console.log("game started");
        started = true;

        levelUp();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
};

function levelUp(){
    userseq=[];
    level++;
    levelindi.innerText = `Level ${level}`;

    let randomidx = Math.floor(Math.random() * 3 );
    let btn = btns[randomidx];
    let randombtn = document.querySelector(`.${btn}`);

    gameseq.push(btn);
    console.log(gameseq);
    btnflash(randombtn);
}

function checkseq(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        levelindi.innerHTML=`Game Over! &nbspYour score was <b>${level}</b> <br> press any key to strat again`;
        reset();
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150)
    }

}

function btnpress(){
    let btn = this;
    btnflash(btn);

    let userbtn = btn.getAttribute("id");
    userseq.push(userbtn);
    console.log(userseq)

    checkseq(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn")
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    highscore.innerText = `High score is : ${level}`;
    started = false;
    gameseq=[];
    userseq=[];
    level=0;
}
