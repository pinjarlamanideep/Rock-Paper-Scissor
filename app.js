let userscore=0;
let compscore=0;


const choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})
let uscore=document.querySelector("#userscore");
let cscore=document.querySelector("#compscore");
const scoredisplay=()=>{
    uscore.innerText=`${userscore}`;
    cscore.innerText=`${compscore}`;

}
const playgame=(choice)=>{
    console.log(choice);
    
    const compchoice=generateCompChoice();
    console.log(compchoice);
    if((choice==="rock" && compchoice==="scissor")||(choice==="scissor" && compchoice==="paper")||(choice==="paper" && compchoice==="rock")){
      console.log("userwins");
      userscore++;
      windisplay(choice,compchoice);
      scoredisplay();
      

    }
    else if(choice===compchoice){
        console.log("draw");
        drawdisplay();
    }
    else{
        console.log("computer wins");
        compscore++;
        losedisplay(choice,compchoice);
        scoredisplay();
        
    }
    
    

}
let msg=document.querySelector("#msg");
const drawdisplay=()=>{
    msg.innerText="Match is a Draw 😐";
}
const windisplay=(winnerchoice,loserchoice)=>{
    msg.innerText=`${winnerchoice} wins over ${loserchoice}-You Win 🎉`;
}
const losedisplay=(winnerchoice,loserchoice)=>{
    msg.innerText=`${winnerchoice} loses over ${loserchoice}-Computer Wins 😢`;
}
const generateCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}
