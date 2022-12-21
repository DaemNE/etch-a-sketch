const container = document.getElementById("container");
let resolution = 16;
let color = "yellow"
let method = "mouseover";
let background = "white";

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

document.getElementById("setYellowButton").style.backgroundColor = "green"
document.getElementById("set16x16").style.backgroundColor = "green"
document.getElementById("setCanvasWhite").style.backgroundColor = "green"

function setWhite() {
    color = "white"
    document.getElementById("setWhiteButton").style.backgroundColor = "green"
    document.getElementById("setBlueButton").style.backgroundColor = "white"
    document.getElementById("setYellowButton").style.backgroundColor = "white"
    document.getElementById("setRainbowButton").style.backgroundColor = "white"

}

function setBlue() {
    color = "blue"
    document.getElementById("setWhiteButton").style.backgroundColor = "white"
    document.getElementById("setBlueButton").style.backgroundColor = "green"
    document.getElementById("setYellowButton").style.backgroundColor = "white"
    document.getElementById("setRainbowButton").style.backgroundColor = "white"

}

function setYellow() {
    color = "yellow"
    document.getElementById("setWhiteButton").style.backgroundColor = "white"
    document.getElementById("setBlueButton").style.backgroundColor = "white"
    document.getElementById("setYellowButton").style.backgroundColor = "green"
    document.getElementById("setRainbowButton").style.backgroundColor = "white"

}

function setRainbow() {
    color = "rainbow"
    document.getElementById("setWhiteButton").style.backgroundColor = "white"
    document.getElementById("setBlueButton").style.backgroundColor = "white"
    document.getElementById("setYellowButton").style.backgroundColor = "white"
    document.getElementById("setRainbowButton").style.backgroundColor = "green"
}

function setResolution256(){
    updateGrid()
    resolution = 16;
    document.getElementById("set16x16").style.backgroundColor = "green"
    document.getElementById("set32x32").style.backgroundColor = "white"
    document.getElementById("set64x64").style.backgroundColor = "white"
    makeRows(resolution)
}

function setResolution1024(){
    updateGrid()
    resolution = 32;
    document.getElementById("set16x16").style.backgroundColor = "white"
    document.getElementById("set32x32").style.backgroundColor = "green"
    document.getElementById("set64x64").style.backgroundColor = "white"
    makeRows(resolution)
}

function setResolution4096(){
    updateGrid()
    resolution = 64;
    document.getElementById("set16x16").style.backgroundColor = "white"
    document.getElementById("set32x32").style.backgroundColor = "white"
    document.getElementById("set64x64").style.backgroundColor = "green"
    makeRows(resolution)
}



function setCanvasWhite() {
    background = "white"
    updateGrid()
    makeRows(resolution)
    document.getElementById("setCanvasWhite").style.backgroundColor = "green"
    document.getElementById("setCanvasBlack").style.backgroundColor = "white"
    document.getElementById("setCanvasRed").style.backgroundColor = "white"
    document.getElementById("setCanvasBlue").style.backgroundColor = "white"
}
function setCanvasBlack() {
    background = "black"
    updateGrid()
    makeRows(resolution)
    document.getElementById("setCanvasWhite").style.backgroundColor = "white"
    document.getElementById("setCanvasBlack").style.backgroundColor = "green"
    document.getElementById("setCanvasRed").style.backgroundColor = "white"
    document.getElementById("setCanvasBlue").style.backgroundColor = "white"
    
}
function setCanvasRed() {
    background = "red"
    updateGrid()
    makeRows(resolution)
    document.getElementById("setCanvasWhite").style.backgroundColor = "white"
    document.getElementById("setCanvasBlack").style.backgroundColor = "white"
    document.getElementById("setCanvasRed").style.backgroundColor = "green"
    document.getElementById("setCanvasBlue").style.backgroundColor = "white"
}
function setCanvasBlue() {
    background = "blue"
    updateGrid()
    makeRows(resolution)
    document.getElementById("setCanvasWhite").style.backgroundColor = "white"
    document.getElementById("setCanvasBlack").style.backgroundColor = "white"
    document.getElementById("setCanvasRed").style.backgroundColor = "white"
    document.getElementById("setCanvasBlue").style.backgroundColor = "green"
}


function makeRows(resolution) {
    
    container.style.setProperty('--grid-rows', resolution);
    container.style.setProperty('--grid-cols', resolution);

    for (let i = 0; i < (resolution * resolution); i++) {
        const cell = document.createElement('div')
        cell.classList.add('grid-item')
        cell.addEventListener('mouseover', changeColor)
        cell.addEventListener('mousedown', changeColor)
        cell.style.backgroundColor = background
        container.appendChild(cell)
      }
};

  
  function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (color === 'rainbow') {
      const randomNumberR = Math.floor(Math.random() * 256)
      const randomNumberG = Math.floor(Math.random() * 256)
      const randomNumberB = Math.floor(Math.random() * 256)
      e.target.style.backgroundColor = `rgb(${randomNumberR}, ${randomNumberG}, ${randomNumberB})`
    } else if (color === 'yellow') {
      e.target.style.backgroundColor = "yellow"
    } else if (color === 'white') {
      e.target.style.backgroundColor = '#fefefe'
    } else if (color === 'blue') {
        e.target.style.backgroundColor = "blue"
      }
  }

function updateGrid() {
    let grid = document.getElementById("container").innerHTML= ""
    
}

function clearCanvas() {
    let cells = document.querySelectorAll(".grid-item")
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = background
    }
}

makeRows(resolution)