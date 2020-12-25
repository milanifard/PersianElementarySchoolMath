class CanvasHandler {
    constructor(name, amount, groupSize) {
        this.correct = true;
        this.groupCount = 0;
        this.amount = amount;
        this.name = name;
        let obj = this;

        // Definitions
        const canvas = document.getElementById(name);
        if(canvas == null){
            return;
        }
        const context = canvas.getContext("2d");
        const boundings = canvas.getBoundingClientRect();

        // Specifications
        let mouseX = 0;
        let mouseY = 0;
        let mouseXs = 0;
        let mouseYs = 0;
        let mouseXe = 0;
        let mouseYe = 0;

        context.strokeStyle = '#44B869'; // initial brush color
        context.fillStyle = '#E4F0D4';
        context.lineWidth = STROKE_SIZE; // initial brush width
        let isDrawing = false;
        let time = -1

        // Mouse Down Event
        canvas.addEventListener('mousedown', function (event) {
            setMouseCoordinates(event);
            isDrawing = true;

            // Start Drawing
            mouseX = Math.floor(mouseX / CELL_SIZE) * CELL_SIZE + Math.floor(CELL_SIZE / 2);
            mouseY = Math.floor(mouseY / CELL_SIZE) * CELL_SIZE + Math.floor(CELL_SIZE / 2);

            mouseXs = mouseX - Math.floor(CELL_SIZE / 2);
            mouseYs = mouseY - Math.floor(CELL_SIZE / 2);

            mouseXe = mouseX;
            mouseYe = mouseY;
        });

        // Mouse Move Event
        canvas.addEventListener('mousemove', function (event) {
            setMouseCoordinates(event);

            if (mouseX <= mouseXs || mouseY <= mouseYs) {
                return;
            }

            if (isDrawing && (count(mouseX + Math.ceil(CELL_SIZE / 2) - mouseXs) !== count(mouseXe + Math.ceil(CELL_SIZE / 2) - mouseXs) || count(mouseY + Math.ceil(CELL_SIZE / 2) - mouseYs) !== count(mouseYe + Math.ceil(CELL_SIZE / 2) - mouseYs))) {
                context.clearRect(mouseXs - STROKE_SIZE, mouseYs - STROKE_SIZE, count(mouseXe + Math.ceil(CELL_SIZE / 2) - mouseXs) * CELL_SIZE, count(mouseYe + Math.ceil(CELL_SIZE / 2) - mouseYs) * CELL_SIZE);

                for (let i = 0; i < count(mouseX + Math.ceil(CELL_SIZE / 2) - mouseXs); i++) {
                    for (let j = 0; j < count(mouseY + Math.ceil(CELL_SIZE / 2) - mouseYs); j++) {
                        let x = mouseXs + (i * CELL_SIZE);
                        let y = mouseYs + (j * CELL_SIZE);

                        context.fillRect(x, y, CELL_SIZE - STROKE_SIZE * 2, CELL_SIZE - STROKE_SIZE * 2);
                        context.strokeRect(x, y, CELL_SIZE - STROKE_SIZE * 2, CELL_SIZE - STROKE_SIZE * 2);
                    }
                }

                mouseXe = mouseX;
                mouseYe = mouseY;
            }
        });

        // Mouse Up Event
        canvas.addEventListener('mouseup', function (event) {
            setMouseCoordinates(event);

            let h = count(mouseX + Math.ceil(CELL_SIZE / 2) - mouseXs);
            let w = count(mouseY + Math.ceil(CELL_SIZE / 2) - mouseYs);
            if (h * w > 0) {
                context.strokeStyle = 'black'; // initial brush color
                context.strokeRect(mouseXs - STROKE_SIZE, mouseYs - STROKE_SIZE, count(mouseXe + Math.ceil(CELL_SIZE / 2) - mouseXs) * CELL_SIZE, count(mouseYe + Math.ceil(CELL_SIZE / 2) - mouseYs) * CELL_SIZE);
                context.strokeStyle = '#44B869'; // initial brush color
            }
            isDrawing = false;
            if (Date.now() - time < 500) {
                context.clearRect(0, 0, canvas.width, canvas.height);
                obj.correct = true;
                obj.groupCount = 0;
            }else{

                console.log(h)
                console.log(w)
                if(h * w === groupSize){
                    obj.groupCount++;
                }else{
                    obj.correct = false;
                }
            }
            time = Date.now()
        });

        // Handle Mouse Coordinates
        function setMouseCoordinates(event) {
            let sHeight = VwToPx(parseFloat(canvas.style.height.split('vw')[0]));
            let sWidth = VwToPx(parseFloat(canvas.style.width.split('vw')[0]));

            // console.log(name)
            // console.log(event.clientY)
            // console.log(window.scrollY)
            // console.log(boundings.top)

            mouseX = (event.clientX + window.scrollX - boundings.left) * (canvas.height / sHeight);
            mouseY = (event.clientY + window.scrollY - boundings.top) * (canvas.width / sWidth);
        }
    }

    check(){
        const canvas = document.getElementById(this.name);
        const context = canvas.getContext("2d");
        console.log(this.groupCount)

        if (this.correct && this.groupCount === this.amount){
            context.fillStyle = GREEN;
            context.fillRect(canvas.width - 150, canvas.height - 150, 100, 100);
            context.fillStyle = '#E4F0D4';
        }else{
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = RED;
            context.fillRect(canvas.width - 150, canvas.height - 150, 100, 100);
            context.fillStyle = '#E4F0D4';
        }
    }

}

const CELL_SIZE = 31;
const STROKE_SIZE = 6;
const RED = '#C90676';
const TRANS = '#FFF';
const GREEN = '#07F06B';

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

function count(num){
    return Math.floor((num + 1) / CELL_SIZE);
}

function VwToPx(vm) {
    return vm * document.documentElement.clientWidth / 100;
}
var canvas;
window.onload = function () {
    canvas = [
        new CanvasHandler("paint-canvas-1", 4, 1),
        new CanvasHandler("paint-canvas-2", 6, 100),
        new CanvasHandler("paint-canvas-3", 9, 10),
        new CanvasHandler("paint-canvas-4", 15, 10),
        new CanvasHandler("paint-canvas-5", 9, 1),
        new CanvasHandler("paint-canvas-6", 20, 10),
        new CanvasHandler("paint-canvas-7", 5, 1)
    ];
};

let script = document.currentScript || Array.prototype.slice.call(document.getElementsByTagName('script')).pop();
let params = (script.getAttribute('params') || '').split(/, */);
let page_no = params[0];

function $(id) {return document.getElementById(id);}

let color_picker_item = null;
let pre_color = null;

function correct_q11(){
    canvas[0].check();
    if(document.getElementById('Cr1_1').value === "80"){
        document.getElementById('Cr1_1').style.backgroundColor = GREEN;
    } else {
        document.getElementById('Cr1_1').style.backgroundColor = RED;
    }
    if(document.getElementById('Cr1_2').value === "4"){
        document.getElementById('Cr1_2').style.backgroundColor = GREEN;
    } else {
        document.getElementById('Cr1_2').style.backgroundColor = RED;
    }
    if(document.getElementById('Cr1_3').value === "84"){
        document.getElementById('Cr1_3').style.backgroundColor = GREEN;
    } else {
        document.getElementById('Cr1_3').style.backgroundColor = RED;
    }
}
function correct_q12(){
    canvas[1].check();
    canvas[2].check();

    if(document.getElementById('Cr2_1').value === "600"){
        document.getElementById('Cr2_1').style.backgroundColor = GREEN;
    } else {
        document.getElementById('Cr2_1').style.backgroundColor = RED;
    }
    if(document.getElementById('Cr2_2').value === "90"){
        document.getElementById('Cr2_2').style.backgroundColor = GREEN;
    } else {
        document.getElementById('Cr2_2').style.backgroundColor = RED;
    }
    if(document.getElementById('Cr2_3').value === "6"){
        document.getElementById('Cr2_3').style.backgroundColor = GREEN;
    } else {
        document.getElementById('Cr2_3').style.backgroundColor = RED;
    }
    if(document.getElementById('Cr2_4').value === "696"){
        document.getElementById('Cr2_4').style.backgroundColor = GREEN;
    } else {
        document.getElementById('Cr2_4').style.backgroundColor = RED;
    }
}
function correct_q13(){
    canvas[3].check();
    canvas[4].check();

    if(document.getElementById('Cr3_1').value === "150"){
        document.getElementById('Cr3_1').style.backgroundColor = GREEN;
    } else {
        document.getElementById('Cr3_1').style.backgroundColor = RED;
    }
    if(document.getElementById('Cr3_2').value === "9"){
        document.getElementById('Cr3_2').style.backgroundColor = GREEN;
    } else {
        document.getElementById('Cr3_2').style.backgroundColor = RED;
    }
    if(document.getElementById('Cr3_3').value === "159"){
        document.getElementById('Cr3_3').style.backgroundColor = GREEN;
    } else {
        document.getElementById('Cr3_3').style.backgroundColor = RED;
    }
}
function correct_q14(){
    canvas[5].check();
    canvas[6].check();

    if(document.getElementById('Cr4_1').value === "1000"){
        document.getElementById('Cr4_1').style.backgroundColor = GREEN;
    } else {
        document.getElementById('Cr4_1').style.backgroundColor = RED;
    }
    if(document.getElementById('Cr4_2').value === "200"){
        document.getElementById('Cr4_2').style.backgroundColor = GREEN;
    } else {
        document.getElementById('Cr4_2').style.backgroundColor = RED;
    }
    if(document.getElementById('Cr4_3').value === "5"){
        document.getElementById('Cr4_3').style.backgroundColor = GREEN;
    } else {
        document.getElementById('Cr4_3').style.backgroundColor = RED;
    }
    if(document.getElementById('Cr4_4').value === "1205"){
        document.getElementById('Cr4_4').style.backgroundColor = GREEN;
    } else {
        document.getElementById('Cr4_4').style.backgroundColor = RED;
    }
}

function correct_e1(){
    console.log("LOG")
    let elementById = document.getElementById('E1');
    if(elementById.value === "48"){
        elementById.style.backgroundColor = GREEN;
    } else if (elementById.value === "") {
        elementById.style.backgroundColor = TRANS;
    }else {
        elementById.style.backgroundColor = RED;
    }
}

function correct_e2(){
    let elementById = document.getElementById('E2');
    if(elementById.value === "108"){
        elementById.style.backgroundColor = GREEN;
    } else if (elementById.value === "") {
        elementById.style.backgroundColor = TRANS;
    }else {
        elementById.style.backgroundColor = RED;
    }
}

function correct_e3(){
    let elementById = document.getElementById('E3');
    if(elementById.value === "162"){
        elementById.style.backgroundColor = GREEN;
    } else if (elementById.value === "") {
        elementById.style.backgroundColor = TRANS;
    }else {
        elementById.style.backgroundColor = RED;
    }
}

function correct_e4(){
    let elementById = document.getElementById('E4');
    if(elementById.value === "24"){
        elementById.style.backgroundColor = GREEN;
    } else if (elementById.value === "") {
        elementById.style.backgroundColor = TRANS;
    }else {
        elementById.style.backgroundColor = RED;
    }
}

function correct_e5(){
    let elementById = document.getElementById('E5');
    if(elementById.value === "48"){
        elementById.style.backgroundColor = GREEN;
    } else if (elementById.value === "") {
        elementById.style.backgroundColor = TRANS;
    }else {
        elementById.style.backgroundColor = RED;
    }
}

function correct_e6(){
    let elementById = document.getElementById('E6');
    if(elementById.value === "168"){
        elementById.style.backgroundColor = GREEN;
    } else if (elementById.value === "") {
        elementById.style.backgroundColor = TRANS;
    }else {
        elementById.style.backgroundColor = RED;
    }
}

function correct_e7(){
    let elementById = document.getElementById('E7');
    if(elementById.value === "81"){
        elementById.style.backgroundColor = GREEN;
    } else if (elementById.value === "") {
        elementById.style.backgroundColor = TRANS;
    }else {
        elementById.style.backgroundColor = RED;
    }
}

document.getElementsbyID("page_switcher").onkeypress = function (e) {

    if (e.which === 13) {

        let page_no = $("page_switcher").value;

        let tag = document.createElement("a");
        tag.href = 'book_3_' + page_no + '.html';

        tag.id = "switch";
        document.body.appendChild(tag);

        $("switch").click();
    }
}
