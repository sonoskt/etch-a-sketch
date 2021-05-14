const size = document.querySelector('#size'); //Size button 
const gridColor = document.querySelector('#color'); //input element 
const clear = document.querySelector('#clear');//clear button
const grid = document.querySelector("#grid"); //cotainer div
const style = getComputedStyle(grid); //grabs external css style for container grid div

//Function which generates the squares in the grid
function createGrid(dimension = 2) { //default 2*2 when page loads
  let length = (parseInt(style.height) / dimension); //parses 400 from 400px and divides it by dimension variable

  grid.style.gridTemplateColumns = `repeat(${dimension},auto)`;

  for(i = 0; i < (dimension * dimension); i++) //generate the grid 
  {
    let box = document.createElement('div');
    //set the size of each square in container 
    box.style.height = `${length}px`;
    box.style.width = `${length}px`;
    grid.appendChild(box) //places square in container
  }
}

//function to customize grid square count
function customGrid(e) {
  let dimension = null;
  
  //ensures the grid is no larger than a 64 * 64
  do { 
    dimension = prompt("How many rows would you like?(max 64): ");
  }while(dimension > 64) 

  //if user clicks cancel the grid is unchanged
  if(!dimension) { 
    return;
  }
  //brand new grid is created
  else {
    grid.innerHTML = '';  
    createGrid(dimension);
  }
}

function clearGrid(e) {
  const blocks = grid.childNodes; //assigns node list 

  //Loops though the node list and makes each div white
  blocks.forEach(block => {
    // checks to see if current item in node list has the element type
    if (block.nodeType === 1)
    block.style.backgroundColor = `rgb(255,255,255)`; 
  }); 
}

//sets the background color of each target box to the color input value
function setColor(e) {
  if(e.target.parentElement.id === 'grid') {
    e.target.style.backgroundColor = gridColor.value;
  } 
}

size.addEventListener('click',customGrid); //click to call customGrid function
clear.addEventListener('click',clearGrid);
document.body.addEventListener('mouseover',setColor); //hover to vall setColor function
createGrid(); //generate grid immediately