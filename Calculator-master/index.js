 const canvas=document.getElementById('game'); const ctx=canvas.getContext('2d');
 function drawGame(){
    clearScreen();
}
function clearScreen(){
ctx.fillStyle= 'black'// make screen black
ctx.fillRect(0,0,canvas.clientWidth,canvas.clientHeight)// black color start from 0px left, right to canvas width and canvas height
}
 drawGame();
 function drawGame(){
    let speed=7;//The interval will be seven times a second.
    setTimeout(drawGame, 1000/speed);//update screen 7 times a second
}
let tileCount=20;
let tileSize=18;
let headX=10;
let headY=10;
function drawGame(){
    clearScreen();
   drawSnake();
}
 function drawSnake(){
      ctx.fillStyle="orange";
    ctx.fillRect(headX* tileCount,headY* tileCount, tileSize,tileSize)

 }
//initialize the speed of snake
let xvelocity=0;
let yvelocity=0;
 //add event listener to our body
 document.body.addEventListener('keydown', keyDown);
 function keyDown(event)
//up
{
    if(event.keyCode==38){
        yvelocity=-1; //move one tile up
        xvelocity=0;

    }
    //down
    if(event.keyCode==40){
        yvelocity=1;//move one tile down
        xvelocity=0;
    }

//left
    if(event.keyCode==37){
        yvelocity=0;
        xvelocity=-1;//move one tile left
    }
    //right
    if(event.keyCode==39){
        yvelocity=0;
        xvelocity=1;//move one tile right
    }
}




function changeSnakePosition(){
     headX=headX + xvelocity;
     headY=headY+ yvelocity;

 }

 function drawGame(){
    clearScreen();
   drawSnake();
   changeSnakePosition()
}








function keyDown()
//up
{
    if(event.keyCode==38){

        if(yvelocity==1)
        return; //prevent snake from moving in opposite direction
        yvelocity=-1;
        xvelocity=0;

    }
    //down
    if(event.keyCode==40){
        if(yvelocity==-1)
        return;//prevent snake from moving in opposite direction
        yvelocity=1;
        xvelocity=0;
    }

//left
    if(event.keyCode==37){
        if(xvelocity==1)
        return;//prevent snake from moving in opposite direction
        yvelocity=0;
        xvelocity=-1;
    }
    //right
    if(event.keyCode==48){
        if(xvelocity==-1)
        return;//prevent snake from moving in opposite direcction
        yvelocity=0;
        xvelocity=1;
    }
}






//draw apple
let appleX=5;
let appleY=5;




function drawGame(){
    clearScreen();
   drawSnake();
   changeSnakePosition()
   drawApple()
}
 function drawApple(){
     ctx.fillStyle="red";// make apple red
     ctx.fillRect(appleX*tileCount, appleY*tileCount, tileSize, tileSize)//position apple within tile count
 }





function drawGame(){
    clearScreen();
   drawSnake();
   changeSnakePosition()
   checkCollision()
   drawApple()
}
 function checkCollision(){
     if(appleX==headX && appleY==headY){
         appleX=Math.floor(Math.random()*tileCount);
         appleY=Math.floor(Math.random()*tileCount);
     }
 }


 // array for snake parts
const snakeParts=[];
let tailLength=2; //initial parts of snake

function checkCollision(){
     if(appleX==headX && appleY==headY){ //collision happens when left, right ,top, and bottom sides of apple is in contact with any part of snake
         appleX=Math.floor(Math.random()*tileCount); //generate apple to a random horizontal position
         appleY=Math.floor(Math.random()*tileCount);//generate apple to a random vertical position
         tailLength++;

     }







class snakePart{
constructor(x, y){
    this.x=x;
    this.y=y;
}

}


function drawSnake(){

    ctx.fillStyle="green";
    //loop through our snakeparts array
    for(let i=0;i<snakeParts.length;i++){
        //draw snake parts
        let part=snakeParts[i]
         ctx.fillRect(part.x *tileCount, part.y *tileCount, tileSize,tileSize)
    }
     snakeParts.push(new snakePart(headX,headY));//put item at the end of list next to the head
 }



//scores
let score=0;

function drawGame(){
    changeSnakePosition();
    clearScreen();
    drawSnake();
    checkCollision()
    drawApple();
    drawScore();
    setTimeout(drawGame, 1000/speed);//update screen 7 times a second
}
// score function
function drawScore(){
ctx.fillStyle="white"// set our text color to white
ctx.font="10px verdena"//set font size to 10px of font family verdena
ctx.fillText("Score: " +score, canvas.clientWidth-50,10);// position our score at right hand corner

}









function checkCollision(){
     if(appleX==headX && appleY==headY){ //if left, right, top, and bottom side of apple is in contact with any part of snake
         appleX=Math.floor(Math.random()*tileCount); //move apple to a random horizontal position
         appleY=Math.floor(Math.random()*tileCount);//move apple to a random vertical position

         tailLength++; // increase tail length
         score++; //increase our score value

     }
 }








//Game Over function
function isGameOver(){
    let gameOver=false;
    //check whether game has started
    if(yvelocity===0 && xvelocity===0){
        return false;
    }
    if(headX<0){//if snake hits left wall
        gameOver=true;
    }
    else if(headX===tileCount){//if snake hits right wall
        gameOver=true;
    }
    else if(headY<0){//if snake hits wall at the top
        gameOver=true;
    }
    else if(headY===tileCount){//if snake hits wall at the bottom
        gameOver=true;
    }

    //stop the game when snake bumps into itself

     for(let i=0; i<snakeParts.length;i++){
         let part=snakeParts[i];
         if(part.x===headX && part.y===headY){//check whether any part of snake is occupying the same space
             gameOver=true;
             break; // to break out of for loop
         }

            return gameOver;// this will stop the execution of the drawgame method
     }








// create game loop-to continously update screen
function drawGame(){
    changeSnakePosition();
    // game over logic
    let result=isGameOver();
    if(result){// if result is true stop other following function from exucuting
        return;
    }

    clearScreen();
    drawSnake();
    checkCollision()
    drawApple();


    drawScore();
    setTimeout(drawGame, 1000/speed);//update screen 7 times a second
}


function isGameOver(){
    let gameOver=false;
    //check whether game has started
    if(yvelocity===0 && xvelocity===0){
        return false;
    }
    if(headX<0){//if snake hits left wall
        gameOver=true;
    }
    else if(headX===tileCount){//if snake hits right wall
        gameOver=true;
    }
    else if(headY<0){//if snake hits wall at the top
        gameOver=true;
    }
    else if(headY===tileCount){//if snake hits wall at the bottom
        gameOver=true;
    }

    //stop the game when snake bumps into itself

     for(let i=0; i<snakeParts.length;i++){
         let part=snakeParts[i];
         if(part.x===headX && part.y===headY){//check whether any part of snake is occupying the same space
             gameOver=true;
             break; // to break out of for loop
         }
     }
    //display text Game Over
    if(gameOver){
     ctx.fillStyle="white";
     ctx.font="50px verdana";
     ctx.fillText("Game Over! ", canvas.clientWidth/6.5, canvas.clientHeight/2);//position our text in center
    }

    return gameOver;// this will stop the execution of the draw game method
}










































































