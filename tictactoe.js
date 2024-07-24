let boxes=document.querySelectorAll(".box");
let Resetbutton=document.querySelector("#reset-button");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");

let turnO=true; 
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame=() =>{
    turnO=true;
    enabledboxes();
    msgcontainer.classList.add("hide");
};
boxes.forEach((box)=> {
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        } else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
    //    function 
        checkWinner();

    });
});
const disabledboxes =() =>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enabledboxes =() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
} ;
const showwinner=(winner) =>{
    msg.innerText=`COngratulations , winner is${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();

};
// function creation
const checkWinner=() => {
    for (let pattern of winPattern){
       let position1val=boxes[pattern[0]].innerText;
       let position2val=boxes[pattern[1]].innerText;
       let position3val=boxes[pattern[2]].innerText;
       if(position1val !="" && position2val != "" &&position3val != ""){
        if(position1val===position2val&& position2val===position3val){

        
        console.log("winner",position1val);
        showwinner(position1val);
    }
       }
    }
};
newgamebtn.addEventListener("click",resetgame);
Resetbutton.addEventListener("click",resetgame);



