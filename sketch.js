let alien, alienX, alienY, alienColumn, newFirstColumn, newLastColumn;
let playerX, playerY, player;
let alive;
let spaceLives = 3;
let moveLeft = true;
let toLeft, toRight, toBottom;
let bulletFired, bulletX, bulletY;


function setup () {
  createCanvas(700 , 700);
  background(30);
  alienColumn = 5;
  alive = new Array(alienColumn);
  alienX = 20; alienY = 20;
  newFirstColumn = 0;
  bulletFired = false;
  setUpAliens();
  newLastColumn = alive[0].length - 1;

  alien = loadImage('Graphics/Alien1.png');
  player = loadImage('Graphics/Player.png');
    playerX = 350;
    playerY = 650;

    toLeft = alienX + (newFirstColumn + 1) * 40;
    toRight = alienX + (newLastColumn + 1) * 40;
    toBottom = alienY + (alive[0].length + 1) * 40;
  
}

function draw () {
    rectMode(CORNER);
    background(30);
  createAlienBLock();
  alienBlockMove();
  checkArray();
  reDeclare();
  image(player, playerX, playerY);
  alive[3][9] = false;
  alive[0][0] = false;
  
}

function keyPressed () {
}

function setUpAliens () {
  for (let x = 0; x < alive.length; x++) {
    alive[x] = Array(10);
    for (let y = 0; y < alive[x].length; y++) {
      alive[x][y] = true;
    }
  }

  for (let i = 0; i < alive.length; i++) {
    console.log(alive[i]);
  }
}

function createAlienBLock () {
  let row = 0;
  let column = 0;
  for (let x = 0; x < alive.length; x++) {
    for (let y = 0; y < alive[x].length; y++) {
      if (alive[x][y] == true) {
        image(alien, alienX + row, alienY + column);
        row += 40;
      }else{
          row += 40;
      }
    }
    row = 0;
    column += 30;
  }
}

function alienBlockMove(){
    if(moveLeft == true){
        if(toLeft < 60){
            moveLeft = false;
            moveDown();
        }else{
            alienX -= .9;
        }
    }else{
        if(toRight > 610){
            moveLeft = true;
            moveDown();
        }else{
            alienX += .9;
        }
    }

}
function moveDown(){
    alienY += 20;
}



  function checkArray(){
      let d = 0;
        for(let y = 0; y < alive[newFirstColumn].length; y++){
            if(alive[newFirstColumn][y] == false){
                d++;
                if(d == alive[newFirstColumn].length){
                    newFirstColumn++;
                }
            }
        }
        d = 0;
        for(let x = 0; x < alive[newLastColumn]; x++){
            if(alive[newLastColumn][x] == false){
                d++;
                if(d == alive[newLastColumn].length){
                    newLastColumn--;
                }
            }
        }
  }

  function reDeclare(){
    toLeft = alienX + (newFirstColumn + 1) * 40;
    toRight = alienX + (newLastColumn + 1) * 40;
  }