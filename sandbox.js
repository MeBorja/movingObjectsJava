let objImage = document.querySelector('.object');
let bodyBorder = document.querySelector('.fullScreen');
let scoreboard = document.querySelector('.scoreboard')
let leftPosition = (window.innerWidth - 100) / 2;
let topPosition = (window.innerHeight - 100) /2;
let topEnemy = 0
let leftEnemy = 0
let speed = 10
let score = 0
let isInside = 0
const bounds = {
  left: 0,
  top: 0,
  right: window.innerWidth - 100,
  bottom: window.innerHeight - 100
};
function startRun () {
    objImage.style.left = leftPosition + "px"
    objImage.style.top = topPosition + "px"
}
function moveLeft() {
    leftPosition -= speed;
    if (leftPosition < bounds.left) {
      leftPosition = bounds.left;
    }
    objImage.style.left = leftPosition + "px";
}

function moveUp() {
    topPosition -= speed;
    if (topPosition < bounds.top) {
      topPosition = bounds.top;
    }
    objImage.style.top = topPosition + "px";
}

function moveRight() {
    leftPosition += speed;
    if (leftPosition > bounds.right) {
      leftPosition = bounds.right;
    }
    objImage.style.left = leftPosition + "px";
}

function moveDown() {
    topPosition += speed;
    if (topPosition > bounds.bottom) {
      topPosition = bounds.bottom;
    }
    objImage.style.top = topPosition + "px";
}
startRun()
document.querySelector('body').addEventListener("keydown", function (e) {
    let key_code = e.keyCode;
    switch (key_code) {
        case 37:
            moveLeft();
            break;
        case 38:
            moveUp();
            break;
        case 39:
            moveRight();
            break;
        case 40:
            moveDown();
            break;
        default:
            break;
    }
});

let enemy = document.querySelector(".enemy")

function enemyMoveRight() {
    leftEnemy += speed;
    if (leftEnemy > bounds.right) {
      leftEnemy = bounds.right;
    }
    enemy.style.left = leftEnemy + "px";
}



function enemyMoveLeft() {
    leftEnemy -= speed;
    if (leftEnemy > bounds.right) {
      leftEnemy = bounds.right;
    }
    enemy.style.left = leftEnemy + "px";
}



function enemyMoveUp() {
    topEnemy -= speed;
    if (topEnemy < bounds.top) {
      topEnemy = bounds.top;
    }
    enemy.style.top = topEnemy + "px";
}
function enemyMoveDown() {
    topEnemy += speed;
    if (topEnemy > bounds.bottom) {
        topEnemy = bounds.bottom;
      }
    enemy.style.top = topEnemy + "px";
}

function followObject() {
    const objRect = objImage.getBoundingClientRect();
    const enemyRect = enemy.getBoundingClientRect();
    
    // calculate distance between objImage and enemy
    const distanceX = objRect.x - enemyRect.x;
    const distanceY = objRect.y - enemyRect.y;
    
    // move enemy closer to objImage
    if (distanceX > 0) {
      enemyMoveRight();
    } else if (distanceX < 0) {
      enemyMoveLeft();
    }
    
    if (distanceY > 0) {
      enemyMoveDown();
    } else if (distanceY < 0) {
      enemyMoveUp();
    }
    
    if (!(
        objRect.right < enemyRect.left || 
        objRect.left > enemyRect.right || 
        objRect.bottom < enemyRect.top || 
        objRect.top > enemyRect.bottom
      )) {
        isInside = 1
        
    }
    else {
        isInside = 0
    }
  }
  function addScore () {
    if (isInside == 1) 
        {
            score = score - 10
            scoreboard.innerText = score
    } else {
        score = score + 1
        scoreboard.innerText = score
    }
  }
  
  // call followObject() function every 100 milliseconds
  setTimeout(setInterval(followObject, 50), 1000)
  setInterval(addScore, 1000)
//   setInterval(score, 50);