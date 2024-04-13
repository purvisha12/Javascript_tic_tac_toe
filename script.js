let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let msg = document.querySelector(".msg");
let msgcontainer = document.querySelector(".msg-container");
let newgame = document.querySelector(".newgame");


let turno = true; //player o
const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was click");
        if(turno){
            box.innerText = "O";
            turno=false;
        }else{
            box.innerText = "X";
            turno=true;
        }
        box.disabled = true;
        checkwin();
    })
})
 const checkwin =() =>{
    for (let pattern of winpattern){   
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        
        if(pos1 !="" && pos2 !="" && pos3 !==""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner");
                showwinner(pos1);
            }
        }
    }
 }

 const showwinner = (winner) => {
     msg.innerText = `congratulations, winner is ${winner}`;
     msgcontainer.classList.remove("hide");
     disabledbox();
    }
    
const disabledbox = () => {
       for(let box of boxes){
           box.disabled = true;
       }
    }
    
const enabledbox = () => {
        for(let box of boxes){
            box.disabled = false;
            box.innerText=" "
        }
     }
 const resetgame = () =>{
    turno = true;
    enabledbox();
    msgcontainer.classList.add('hide');
 }


 resetbtn.addEventListener("click",resetgame);
 newgame.addEventListener("click",resetgame);