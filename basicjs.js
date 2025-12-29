// let a=30;
// if(a>30){
//     console.log("No is greater than 30");
// }
// else{
//     console.log("no is smaller than 30");
// }

let btn=document.querySelectorAll('button');
const reset=document.querySelector('#Reset');
let Display=document.querySelector('#display-result');
// let replay=confirm("Do you want to play Again");


if(Display.innerText==""){




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
        Display.innerText=`Match Draw! your choose ${bt.target.id} and comp choose ${compOutput}`;
    }
    else if(bt.target.id=="rock" && compOutput=="scissors"){
        Display.innerText=`You Won! your choose ${bt.target.id} and comp choose ${compOutput}`;
    }
    else if(bt.target.id=="rock" && compOutput=="Paper"){
        Display.innerText=`Comp Won! your choose ${bt.target.id} and comp choose ${compOutput}`;
    }
    else if(bt.target.id=="scissors" && compOutput=="rock"){
        Display.innerText=`Comp Won! your choose ${bt.target.id} and comp choose ${compOutput}`;
    }
    else if(bt.target.id=="scissors" && compOutput=="Paper"){
        Display.innerText=`You Won! your choose ${bt.target.id} and comp choose ${compOutput}`;
    }
    else if(bt.target.id=="scissors" && compOutput=="scissors"){
        Display.innerText=`Match Draw! your choose ${bt.target.id} and comp choose ${compOutput}`;
    }
    else if(bt.target.id=="paper" && compOutput=="rock"){
        Display.innerText=`You Won! your choose ${bt.target.id} and comp choose ${compOutput}`;
    }
    else if(bt.target.id=="paper" && compOutput=="Paper"){
        Display.innerText=`Match Draw! your choose ${bt.target.id} and comp choose ${compOutput}`;
    }
    else if(bt.target.id=="paper" && compOutput=="scissors"){
        Display.innerText=`Comp Won! your choose ${bt.target.id} and comp choose ${compOutput}`;
    }
  
})
});
}
reset.addEventListener("click",(e)=>{
    Display.innerText="";
})