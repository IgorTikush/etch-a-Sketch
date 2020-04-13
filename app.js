const main = document.querySelector('#main');
let div = document.getElementsByClassName('test');

let isDraw = false; //to check for mousehold listener
init();

let getRandomColor = function () {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



let changeColor =  function  (e) {
  
  e.target.style.backgroundColor = 'black';
};
console.log(changeColor)



function draw (e) {
  if (isDraw===true) {
    changeColor(e)
  }
};

function startDraw(e) {
  changeColor(e);
  isDraw=true;
};

function stopDraw(e) {
  isDraw=false;
}

//clear grid

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', clearGrid);

function clearGrid (){
  for (i =0; i < div.length; i++) {
    div[i].style.backgroundColor = 'rgba(255,255,255,0.1)';
  }
}

// change canvas

let newGrid = document.getElementById('newGrid');
newGrid.addEventListener('click', createNewGrid);



function createNewGrid() {
  clearGrid();
  let amountOfPixels = prompt("How many pixels do you want?")
  while (isNaN(amountOfPixels)=== true) amountOfPixels = prompt("Only number, Please");
  main.style.gridTemplateColumns = `repeat(${amountOfPixels}, 1fr)`;
  main.style.gridTemplateRows = `repeat(${amountOfPixels}, 1fr)`;
  for(i = 0; i<amountOfPixels**2;i++){
    let newItem = document.createElement('div');
    newItem.classList.add("test");
    newItem.style.backgroundColor = 'rgba(255,255,255,0.1)'
    main.appendChild(newItem);
    div[i].addEventListener('mousedown', startDraw );
    div[i].addEventListener('mousemove', draw);
    div[i].addEventListener('mouseup', stopDraw);
    }
  
}

//default size when enter first time
function init() {
  for(i = 0; i<16**2;i++){
    let newItem = document.createElement('div');
    newItem.classList.add("test");
    newItem.style.backgroundColor = 'rgba(255,255,255,0.1)'
    main.appendChild(newItem);
    div[i].addEventListener('mousedown', startDraw );
    div[i].addEventListener('mousemove', draw);
    div[i].addEventListener('mouseup', stopDraw);
    }
}

//rainbow mode 



let rainbow = document.getElementById('rainbow_mode');
rainbow.addEventListener('click', function(){changeColor = function (e) {
  e.target.style.backgroundColor = getRandomColor();
} });


//Pencil mode

function pencilColor(e) {
  ptn = /0.[0-9]/i;
  opacity = e.style.backgroundColor.match(ptn);
  console.log(e.style.backgroundColor.match(ptn))
 return `rgba(0, 0, 0, ${Number(opacity[0])+0.1})`
}

let pencil = document.getElementById('pencil_mode');
pencil.addEventListener('click', function(){changeColor = function (e) {
  console.log(pencilColor(e.target));
  e.target.style.backgroundColor = pencilColor(e.target);

} });





