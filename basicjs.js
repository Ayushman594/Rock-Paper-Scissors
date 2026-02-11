let btn=document.querySelectorAll('button');
const reset=document.querySelector('#Reset');
let Display=document.querySelector('#display-result');
let overallScore=document.querySelector('#score');



if(Display.innerText==""){
 let score= JSON.parse(localStorage.getItem('score'));
 if(score==null){
    score={
        wins:0,
        loss:0,
        Tie:0
    }
 }


btn .forEach(e => {
    e.addEventListener("click",(bt)=>{
   
    const comp={
    0:"rock",
    1:"Paper",
    2:"scissors"
}

let compdata=parseInt(Math.random()*3);
 let compOutput=comp[compdata];
    if(bt.target.id == "rock" && compOutput == "rock"){
        score.Tie+=1;
        Display.innerText=`Match Draw! your choose ${bt.target.id} and comp choose ${compOutput}`;
        overallScore.innerText=`Wins:${score.wins} losses:${score.loss} and Draw:${score.Tie}`;
        Display.setAttribute("class","aqua");
    }
    else if(bt.target.id=="rock" && compOutput=="scissors"){
        score.wins+=1;
        Display.innerText=`You Won! your choose ${bt.target.id} and comp choose ${compOutput}`;
        overallScore.innerText=`Wins:${score.wins} losses:${score.loss} and Draw:${score.Tie}`;
        Display.setAttribute("class","Greenyellow");
        
    }
    else if(bt.target.id=="rock" && compOutput=="Paper"){
        score.loss+=1;
        Display.innerText=`Comp Won! your choose ${bt.target.id} and comp choose ${compOutput}`;
        overallScore.innerText=`Wins:${score.wins} losses:${score.loss} and Draw:${score.Tie}`;
        Display.setAttribute("class","red");
       
    }
    else if(bt.target.id=="scissors" && compOutput=="rock"){
        score.loss+=1;
        Display.innerText=`Comp Won! your choose ${bt.target.id} and comp choose ${compOutput}`;
        overallScore.innerText=`Wins:${score.wins} losses:${score.loss} and Draw:${score.Tie}`;
        Display.setAttribute("class","red");
       
    }
    else if(bt.target.id=="scissors" && compOutput=="Paper"){
        score.wins+=1;
        Display.innerText=`You Won! your choose ${bt.target.id} and comp choose ${compOutput}`;
        overallScore.innerText=`Wins:${score.wins} losses:${score.loss} and Draw:${score.Tie}`;
        Display.setAttribute("class","Greenyellow");

    }
    else if(bt.target.id=="scissors" && compOutput=="scissors"){
        score.Tie+=1;
        Display.innerText=`Match Draw! your choose ${bt.target.id} and comp choose ${compOutput}`;
        overallScore.innerText=`Wins:${score.wins} losses:${score.loss} and Draw:${score.Tie}`;
        Display.setAttribute("class","aqua");

    }
    else if(bt.target.id=="paper" && compOutput=="rock"){
        score.wins+=1;
        Display.innerText=`You Won! your choose ${bt.target.id} and comp choose ${compOutput}`;
        overallScore.innerText=`Wins:${score.wins} losses:${score.loss} and Draw:${score.Tie}`;
        Display.setAttribute("class","Greenyellow");
        
    }
    else if(bt.target.id=="paper" && compOutput=="Paper"){
        score.Tie+=1;
        Display.innerText=`Match Draw! your choose ${bt.target.id} and comp choose ${compOutput}`;
        overallScore.innerText=`Wins:${score.wins} losses:${score.loss} and Draw:${score.Tie}`;
        Display.setAttribute("class","aqua");
    }
    else if(bt.target.id=="paper" && compOutput=="scissors"){
        score.loss+=1;
        Display.innerText=`Comp Won! your choose ${bt.target.id} and comp choose ${compOutput}`;
        overallScore.innerText=`Wins:${score.wins} losses:${score.loss} and Draw:${score.Tie}`;
        Display.setAttribute("class","red");
       
    }
  
localStorage.setItem('score',JSON.stringify(score));
})
});
}
reset.addEventListener("click",()=>{
    localStorage.removeItem('score');
    Display.innerText="";
    overallScore.innerText="";
})
