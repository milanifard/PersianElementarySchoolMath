const body = document.body;
const container = document.querySelector(".container");
const pl = document.querySelector(".canvas.p");
const tl1 = document.querySelector(".canvas.t-l-1");
const tl2 = document.querySelector(".canvas.t-l-2");
const ts1 = document.querySelector(".canvas.t-s-1");
const ts2 = document.querySelector(".canvas.t-s-2");
const sq = document.querySelector(".canvas.s");
const tm = document.querySelector(".canvas.t-m");

// degree state closure
const rotationIncrementor = function () {
  let rotation = 0;

  function updateRotation() {
    rotation = rotation + 45 < 360 ? rotation + 45 : 0;
  }

  return {
    rotate: function () {
      updateRotation();
    },
    getDegree: function () {
      return rotation;
    } };

};

// initialise state for each shape
let plRotator = rotationIncrementor();
let tl1Rotator = rotationIncrementor();
let tl2Rotator = rotationIncrementor();
let ts1Rotator = rotationIncrementor();
let ts2Rotator = rotationIncrementor();
let sqRotator = rotationIncrementor();
let tmRotator = rotationIncrementor();

// click on shape makes rotation
pl.ondblclick = function () {
  plRotator.rotate();
  pl.style.transform = `rotate(${plRotator.getDegree()}deg)`;
};
tl1.ondblclick = function () {
  tl1Rotator.rotate();
  tl1.style.transform = `rotate(${tl1Rotator.getDegree()}deg)`;
};
tl2.ondblclick = function () {
  tl2Rotator.rotate();
  tl2.style.transform = `rotate(${tl2Rotator.getDegree()}deg)`;
};
ts1.ondblclick = function () {
  ts1Rotator.rotate();
  ts1.style.transform = `rotate(${ts1Rotator.getDegree()}deg)`;
};
ts2.ondblclick = function () {
  ts2Rotator.rotate();
  ts2.style.transform = `rotate(${ts2Rotator.getDegree()}deg)`;
};
tl1.ondblclick = function () {
  tl1Rotator.rotate();
  tl1.style.transform = `rotate(${tl1Rotator.getDegree()}deg)`;
};
sq.ondblclick = function () {
  sqRotator.rotate();
  sq.style.transform = `rotate(${sqRotator.getDegree()}deg)`;
};
tm.ondblclick = function () {
  tmRotator.rotate();
  tm.style.transform = `rotate(${tmRotator.getDegree()}deg)`;
};

//initialise displacejs with shapes
let displacejsOptions = {
  constrain: true,
  relativeTo: body,
  onMouseDown: dragActive,
  onTouchStart: dragActive,
  onMouseUp: dragInactive,
  onTouchStop: dragInactive };


function dragActive(el) {
  el.className += ' active';
}
function dragInactive(el) {
  el.className = el.className.replace('active', '');
}

window.displacejs(tl1, displacejsOptions);
window.displacejs(tl2, displacejsOptions);
window.displacejs(ts1, displacejsOptions);
window.displacejs(ts2, displacejsOptions);
window.displacejs(pl, displacejsOptions);
window.displacejs(sq, displacejsOptions);
window.displacejs(tm, displacejsOptions);