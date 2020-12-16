var fillies = document.querySelectorAll('.fill');
const empties = document.querySelectorAll('.empty');
//const fill= document.querySelector('.fill');
var indexblock=0;


// Fill listeners
for(const fill of fillies){
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

}


// Loop through empty boxes and add listeners
for (const empty of empties) { 
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

function reply_click(clicked_id)
  {
    indexblock=clicked_id;
    console.log(indexblock);
  }

// Drag Functions


function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
  
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
    
  e.preventDefault();
  console.log("over");
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
  console.log("enter");
}

function dragLeave() {
  this.className = 'empty';
  console.log("leave");
}

function dragDrop() {
    console.log("drop");
  this.className = 'empty';
  console.log(indexblock);
  this.append(fillies[indexblock]);
  
}