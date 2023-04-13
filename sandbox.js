let objImage = document.querySelector('.object');
let bodyBorder = document.querySelector('.fullScreen');
let leftPosition = (window.innerWidth - 100) / 2;
let topPosition = (window.innerHeight - 100) /2;
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
    leftPosition -= 5;
    if (leftPosition < bounds.left) {
      leftPosition = bounds.left;
    }
    objImage.style.left = leftPosition + "px";
}

function moveUp() {
    topPosition -= 5;
    if (topPosition < bounds.top) {
      topPosition = bounds.top;
    }
    objImage.style.top = topPosition + "px";
}

function moveRight() {
    leftPosition += 5;
    if (leftPosition > bounds.right) {
      leftPosition = bounds.right;
    }
    objImage.style.left = leftPosition + "px";
}

function moveDown() {
    topPosition += 5;
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
            console.log(37);
            moveLeft();
            break;
        case 38:
            console.log(38);
            moveUp();
            break;
        case 39:
            console.log(39);
            moveRight();
            break;
        case 40:
            console.log(40);
            moveDown();
            break;
        default:
            break;
    }
});