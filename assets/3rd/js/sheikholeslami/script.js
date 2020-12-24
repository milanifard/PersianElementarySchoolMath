//------------start of page 90---------------------//
function myAlert(inp, val) {
    if (inp) {
        inp.addEventListener("keyup", function (event) {
            if (event.keyCode === 13) {
                if (inp.value == '>' || inp.value == '<' || inp.value == '=') {
                    if (inp.value == val) {
                        Swal.fire({
                            type: 'success',
                            text: 'آفرین درست حل کردی'
                        });
                        inp.value = "";
                    } else {
                        Swal.fire({
                            type: 'error',
                            text: 'بیش تر دقت کن!'
                        })
                        inp.value = "";
                    }
                } else {
                    Swal.fire({
                        type: 'error',
                        text: 'باید از علامت > یا = یا < استفاده کنی!'
                    })
                    inp.value = "";
                }
            }
        });
    }

}

function trueOrFalse(inp, val) {
    if (inp) {
        inp.addEventListener("keyup", function (event) {
            if (event.keyCode === 13) {
                if (inp.value == val) {
                    Swal.fire({
                        type: 'success',
                        text: 'آفرین درست حل کردی'
                    })
                    inp.value = "";
                } else {
                    Swal.fire({
                        type: 'error',
                        text: 'بیش تر دقت کن!'
                    })
                    inp.value = "";
                }
            }
        });
    }

}

function q3(inp, val) {
    if (inp) {
        inp.addEventListener("keyup", function (event) {
            if (event.keyCode === 13) {
                if (inp.value == 'بله' || inp.value == 'خیر') {
                    if (inp.value == val) {
                        Swal.fire({
                            type: 'success',
                            text: 'آفرین درست حل کردی'
                        })
                        inp.value = "";
                    } else {
                        Swal.fire({
                            type: 'error',
                            text: 'بیش تر دقت کن!'
                        })
                        inp.value = "";
                    }
                } else {
                    Swal.fire({
                        type: 'error',
                        text: 'باید با بله یا خیر پاسخ دهی!'
                    })
                    inp.value = "";
                }
            }
        });
    }

}

var input1 = document.getElementById('dot_input1');
var input2 = document.getElementById('dot_input2');
var input3 = document.getElementById('dot_input3');
var input4 = document.getElementById('dot_input4');
var input5 = document.getElementById('dot_input5');
var input6 = document.getElementById('dot_input6');

myAlert(input1, '>');
myAlert(input2, '=');
myAlert(input3, '>');
myAlert(input4, '=');
myAlert(input5, '<');
myAlert(input6, '=');
var input7 = document.getElementById('input2_1');
var input8 = document.getElementById('input2_2');
trueOrFalse(input7, 28);
trueOrFalse(input8, 24);
var input9 = document.getElementById('less');
var input10 = document.getElementById('most');
trueOrFalse(input9, '4');
trueOrFalse(input10, '1');
var input11 = document.getElementById('yesOrNo');
q3(input11, 'بله');
//---------------end of page 90------------------//

//---------------start of page 89----------------//
function change(inp, val) {
    if (inp) {
        inp.addEventListener("change", function (event) {
            if (inp.value == val) {
                Swal.fire({
                    type: 'success',
                    text: 'آفرین درست حل کردی'
                })
            } else {
                Swal.fire({
                    type: 'error',
                    text: 'بیش تر دقت کن!'
                })
            }
        });
    }
}
var input12 = document.getElementById('square');
var input13 = document.getElementById('triangle');
var input14 = document.getElementById('hexagonal');
var input15 = document.getElementById('red_input');
var input16 = document.getElementById('blue_input');
trueOrFalse(input12, '18');
trueOrFalse(input13, '33');
trueOrFalse(input14, '18');
trueOrFalse(input15, '18');
trueOrFalse(input16, '23');
var select1 = document.getElementById('shapes');
var select2 = document.getElementById('shapes2');
change(select1, 'square');
change(select2, 'square1');
//---------------end of page 89------------------//
//---------------start of page 88----------------//
function pictureChange(source) {
    document.getElementById('table').src = source;
}

function changeColor(inp, val) {
    if (inp) {
        inp.addEventListener("change", function (event) {
            if (inp.value == val) {
                pictureChange('./assets/3rd/images/sheikholeslami/' + val + '_table.png');
            }
        });
    }
}
var select3 = document.getElementById('colors');
changeColor(select3, 'red');
changeColor(select3, 'green');
changeColor(select3, 'blue');

function fillCanvas(c) {
    if (c) {
        c.addEventListener("click", function (event) {
            var ctx = c.getContext("2d");
            if (ctx.canvas.className == "bg-white") {
                ctx.canvas.className = "bg-pink";
            } else {
                ctx.canvas.className = "bg-white";
            }
        });
    }
}
var c1 = document.querySelector('#canvas1');
var c2 = document.querySelector('#canvas2');
fillCanvas(c1);
fillCanvas(c2);
var select3 = document.getElementById('shapes3');
change(select3, 'square2');
var input17 = document.getElementById('input_left');
trueOrFalse(input17, '32');
var input18 = document.getElementById('input_center');
trueOrFalse(input18, '60');
var input19 = document.getElementById('input_right');
trueOrFalse(input19, '36');
var btn = document.getElementById('saveBtn');
if (btn) {
    btn.addEventListener('click', function () {
        if (c1.getContext("2d").canvas.className == "bg-pink" && c2.getContext("2d").canvas.className == "bg-pink" ||
            c1.getContext("2d").canvas.className == "bg-white" && c2.getContext("2d").canvas.className == "bg-white") {
            Swal.fire({
                type: 'error',
                text: 'فقط باید یکی از شکل ها را رنگ کنی یا احتمالا هیچ شکلی رنگ نکرده ای!'
            });
        } else {
            if (c1.getContext("2d").canvas.className == "bg-pink") {
                Swal.fire({
                    type: 'error',
                    text: 'بیش تر دقت کن!'
                });
            } else if (c2.getContext("2d").canvas.className == "bg-pink") {
                Swal.fire({
                    type: 'success',
                    text: 'آفرین درست حل کردی'
                });
            }
        }


    });
}
//---------------start drag and drop for question 3-------------//
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function findUpId(innerId, outerId) {
    var el = document.getElementById(innerId);
    while (el.parentNode) {
        el = el.parentNode;
        if (el.id === outerId)
            return true;
    }
    return false;
}
function drop(ev) {
    let target = ev.target;
    if (target.id === "div1" || target.id == "div2") {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("Text");
        target.appendChild(document.getElementById(data));
        var firstDiv = document.getElementById('div1');
        var secondDiv = document.getElementById('div2');
        if (firstDiv.children.length == 2) {
            firstDiv.lastChild.style.marginTop = "-1vw";
        }
        if(secondDiv.children.length == 2){
            secondDiv.lastChild.style.marginTop = "-1vw";
        }
    }
}
//---------------end drag and drop for question 3---------------//

//---------------end of page 88------------------//