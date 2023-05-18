var blockSize=25;
var width=20;
var height=20;
var context;
var board;
var speedx=0;
var speedy=0;
var foodx;
var foody;
var snakex=blockSize*5;
var snakey=blockSize*5;
let score=0;
var limit=-40;


var snakeBody=[
    {x:0,y:0}
];
var gameOver=false;

window.onload=function(){

board=document.getElementById("board");
context=board.getContext("2d");
board.height=height*blockSize;
board.width=width*blockSize;

changeFood();

document.addEventListener("keyup",changeDirection);


setInterval(update,1000/10);

}

function update(){
    const scoreText = document.getElementById('scoreval');

context.fillStyle="LightGrey";
context.fillRect(0,0,board.height,board.width);


//Food
context.fillStyle="yellow";
context.fillRect(foodx,foody,blockSize,blockSize);

if(snakex==foodx && snakey==foody){
    snakeBody.push([foodx,foody]);
    score =score+1;
    scoreText.textContent = score;
    changeFood();
}

    
for (let i = snakeBody.length-1; i >0; i--) {
    snakeBody[i] = snakeBody[i-1];
}


if (snakeBody.length) {
    snakeBody[0] = [snakex, snakey];
}



//snake
context.fillStyle="green";
context.fillRect(snakex,snakey,blockSize,blockSize);

    snakex+=speedx*blockSize;
    snakey+=speedy*blockSize;

      
     
        for (let i = 0; i < snakeBody.length; i++) {
        
            context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
        }
    
        if (snakex > height*blockSize || snakey > height*blockSize||snakex<limit||snakey<limit) {
        gameOver=true;
        alert("Oops!! Game Over");
    }
       
    
      
   

}


function changeDirection(e){

    if(e.code=="ArrowUp" && speedy!=1){
        speedx=0;
        speedy=-1;
    }
    
    else if (e.code== "ArrowDown" &&speedy!=-1) {
        speedx = 0;
        speedy = 1;
    }
    else if (e.code == "ArrowLeft" &&speedx!=1) {
        speedx = -1;
        speedy = 0;
    }
    else if (e.code == "ArrowRight"&& speedx!=-1 ) {
        speedx = 1;
        speedy = 0;
    }
}
function changeFood(){
   foodx= Math.floor(Math.random()*height)*blockSize;
    foody=Math.floor(Math.random()*width)*blockSize;


}

   
