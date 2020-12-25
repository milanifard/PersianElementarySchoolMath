class CanvasHandler {
    constructor(name, amount, groupSize) {
        this.correct = true;
        this.groupCount = 0;
        this.amount = amount;
        this.name = name;
        let obj = this;

        // Definitions
        const canvas = document.getElementById(name);
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

function color_picker(id) {color_picker_item = $(id);}

function hover(id) {
    if (color_picker_item != null) {
        $(id).onmouseenter = function () {
            pre_color = $(id).style.backgroundColor;
            $(id).style.backgroundColor = color_picker_item.style.backgroundColor;
        }
        $(id).onmouseout = function () {
            $(id).style.backgroundColor = pre_color;
        }
    }
}

function guess_checker(id) {
    let btn = $(id).value;
    let guess_box_feedback = $("guess_box_feedback");

    if (btn === "right") {
        guess_box_feedback.textContent = "دقت کن عزيزم. دوباره تلاش کن.";
        guess_box_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
        guess_box_feedback.classList.add("shaking-animation");
    } else if (btn === "left") {
        guess_box_feedback.textContent = "آفرين عزيزم. درست حدس زدي.";
        guess_box_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green_level3');
        guess_box_feedback.classList.add("shaking-animation");
    }
}

if (page_no === "124") {

    /* --------  The Q1-Q2 page 124  ----------------------------- */

    let Q1_color_picker_items = ["Q1_yellow_color", "Q1_blue_color", "Q1_red_color", "Q1_green_color"];
    let Q2_color_picker_items = ["Q2_yellow_color", "Q2_red_color", "Q2_blue_color", "Q2_green_color"];

    function sector_coloring(id, question_id) {

        let [colors, Q_feedback] = (function () {
            switch (question_id) {
                case "P124-Q1":
                    return [Q1_color_picker_items, $("Q1_feedback")];

                case "P124-Q2":
                    return [Q2_color_picker_items, $("Q2_feedback")];
            }
        })();

        if (color_picker_item != null) {
            switch (color_picker_item.id) {
                case colors[0]:
                    $(id).style.backgroundColor = color_picker_item.style.backgroundColor;
                    pre_color = color_picker_item.style.backgroundColor;
                    break;

                case colors[1]:
                    $(id).style.backgroundColor = color_picker_item.style.backgroundColor;
                    pre_color = color_picker_item.style.backgroundColor;
                    break;

                case colors[2]:
                    $(id).style.backgroundColor = color_picker_item.style.backgroundColor;
                    pre_color = color_picker_item.style.backgroundColor;
                    break;

                case colors[3]:
                    $(id).style.backgroundColor = color_picker_item.style.backgroundColor;
                    pre_color = color_picker_item.style.backgroundColor;
                    break;
                default:
                    Q_feedback.textContent = "ابتدا رنگ موردنظر را انتخاب کن.";
                    Q_feedback.classList.add("shaking-animation");
                    Q_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
                    break;
            }
        } else {
            Q_feedback.textContent = "ابتدا رنگ موردنظر را انتخاب کن.";
            Q_feedback.classList.add("shaking-animation");
            Q_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
        }
        check_circle_sectors(question_id);
    }

    let Q1_ans = {"yellow": 3, "blue": 5, "red": 2, "green": 2};
    let Q2_ans = {"yellow": 3, "blue": 2, "red": 5, "green": 2};
    let Q1_sectors_id = ["Q1_sector1", "Q1_sector2", "Q1_sector3", "Q1_sector4", "Q1_sector5", "Q1_sector6", "Q1_sector7", "Q1_sector8", "Q1_sector9", "Q1_sector10", "Q1_sector11", "Q1_sector12"];
    let Q2_sectors_id = ["Q2_sector1", "Q2_sector2", "Q2_sector3", "Q2_sector4", "Q2_sector5", "Q2_sector6", "Q2_sector7", "Q2_sector8", "Q2_sector9", "Q2_sector10", "Q2_sector11", "Q2_sector12"];

    function check_circle_sectors(question_id) {

        let Q1_P124_check_count = {"yellow": 0, "blue": 0, "red": 0, "green": 0};
        let Q2_P124_check_count = {"yellow": 0, "blue": 0, "red": 0, "green": 0};

        let [ans, sectors_id, check_count, Q_feedback, Q_img] = (function () {
            switch (question_id) {
                case "P124-Q1":
                    return [Q1_ans, Q1_sectors_id, Q1_P124_check_count, $("Q1_feedback"), $("Q1_clock_img")];

                case "P124-Q2":
                    return [Q2_ans, Q2_sectors_id, Q2_P124_check_count, $("Q2_feedback"), $("Q2_book_img")];
            }
        })();

        for (const sector of sectors_id) {
            let color = $(sector).style.backgroundColor;

            switch (color.trim()) {
                case "var(--yellow_level3_border)":
                    check_count.yellow += 1;
                    break;

                case "var(--blue_level1)":
                    check_count.blue += 1;
                    break;

                case "var(--red_level1)":
                    check_count.red += 1;
                    break;

                case "var(--green_level2)":
                    check_count.green += 1;
                    break;
            }
        }

        if (JSON.stringify(ans) === JSON.stringify(check_count)) {

            Q_feedback.textContent = "آفرین عزیزم. درست حل کردی.";
            Q_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green_level3');
            Q_img.classList.add("shaking-animation");

        } else if (Object.values(check_count).reduce((a, b) => a + b, 0) == Object.values(ans).reduce((a, b) => a + b, 0)) {

            Q_feedback.textContent = "دقت کن عزيزم. دوباره تلاش کن.";
            Q_feedback.classList.add("shaking-animation");
            Q_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
        }
    }
    /* --------  The End of Q1-Q2 page 124  ------------------------------------ */

}
else if (page_no === "125") {

    let root = document.documentElement;
    let last_degree = 0;

    function rotation(id) {

        if ($(id).classList.contains("continues-rotation")) {
            $(id).classList.remove("continues-rotation");
            $(id).style.transform = 'rotate(' + last_degree + 'deg)';
            return rotation(id);
        }
        setTimeout(function () {

            let random_number = Math.floor(Math.random() * 360 + 720);

            root.style.setProperty('--dynamic_rnd', (random_number + last_degree) + "deg");
            root.style.setProperty('--dynamic_rnd_last', last_degree + "deg");

            $(id).classList.add("continues-rotation");


            update_last_degree(random_number);

        }, 10);
    }

    function update_last_degree(degree) {
        last_degree = (last_degree + degree) % 360;
    }

    let Q1_color_picker_items = ["Q1_red_color", "Q1_green_color"];
    let Q2_color_picker_items = ["Q2_red_color", "Q2_blue_color"];

    function sector_coloring(id, question_id) {

        let [colors, Q_feedback] = (function () {
            switch (question_id) {
                case "Q1":
                    return [Q1_color_picker_items, $("Q1_feedback")];

                case "Q2":
                    return [Q2_color_picker_items, $("Q2_feedback")];
            }
        })();

        if (color_picker_item != null) {

            switch (color_picker_item.id) {
                case colors[0]:
                    $(id).style.backgroundColor = color_picker_item.style.backgroundColor;
                    pre_color = color_picker_item.style.backgroundColor;
                    break;

                case colors[1]:
                    $(id).style.backgroundColor = color_picker_item.style.backgroundColor;
                    pre_color = color_picker_item.style.backgroundColor;
                    break;

                default:
                    Q_feedback.textContent = "ابتدا رنگ موردنظر را انتخاب کنید.";
                    Q_feedback.classList.add("shaking-animation");
                    Q_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
                    break;
            }
        } else {
            Q_feedback.textContent = "ابتدا رنگ موردنظر را انتخاب کنید.";
            Q_feedback.classList.add("shaking-animation");
            Q_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
        }
        check_circle_sectors(question_id);
    }

    let Q1_ans = {"red": 0, "green": 0}; // Sets in the coloring_table func
    let Q2_ans = {"blue": 5, "red": 5};
    let Q1_sectors_id = ["Q1_ans_sector1", "Q1_ans_sector2", "Q1_ans_sector3", "Q1_ans_sector4", "Q1_ans_sector5", "Q1_ans_sector6", "Q1_ans_sector7", "Q1_ans_sector8", "Q1_ans_sector9", "Q1_ans_sector10"];
    let Q2_sectors_id = ["Q2_ans_sector1", "Q2_ans_sector2", "Q2_ans_sector3", "Q2_ans_sector4", "Q2_ans_sector5", "Q2_ans_sector6", "Q2_ans_sector7", "Q2_ans_sector8", "Q2_ans_sector9", "Q2_ans_sector10"];

    function check_circle_sectors(question_id) {

        let Q1_check_count = {"red": 0, "green": 0};
        let Q2_check_count = {"blue": 0, "red": 0};

        let [ans, sectors_id, check_count, Q_feedback, Q_img] = (function () {
            switch (question_id) {
                case "Q1":
                    return [Q1_ans, Q1_sectors_id, Q1_check_count, $("Q1_feedback"), $("Q1_pencil")];

                case "Q2":
                    return [Q2_ans, Q2_sectors_id, Q2_check_count, $("Q2_feedback"), $("pencils")];
            }
        })();

        for (const sector of sectors_id) {

            let color = $(sector).style.backgroundColor;

            switch (color.trim()) {

                case "var(--blue_level1)":
                    check_count.blue += 1;
                    break;

                case "var(--red_level3)":
                    check_count.red += 1;
                    break;

                case "var(--green_level4)":
                    check_count.green += 1;
                    break;
            }
        }

        if (JSON.stringify(ans) === JSON.stringify(check_count) && Object.values(ans).reduce((a, b) => a + b, 0) == 10) {

            Q_feedback.textContent = "آفرین عزیزم. درست حل کردی.";
            Q_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green_level3');
            Q_img.classList.add("shaking-animation");

        } else if (Object.values(check_count).reduce((a, b) => a + b, 0) == Object.values(ans).reduce((a, b) => a + b, 0) &&
            Object.values(check_count).reduce((a, b) => a + b, 0) == 10) {

            Q_feedback.textContent = "دقت کن عزيزم. دوباره تلاش کن.";
            Q_feedback.classList.add("shaking-animation");
            Q_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level3');
        } else if (Object.values(ans).reduce((a, b) => a + b, 0) < 10 && color_picker_item != null) {
            Q_feedback.textContent = "ابتدا جدول بالا را پر کن.";
            Q_feedback.classList.add("shaking-animation");
            Q_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level3');

        }
    }

    function coloring_table(parent, id) {

        $(parent).style.backgroundColor = $(id).style.backgroundColor;

        switch (($(id).style.backgroundColor).trim()) {

            case "var(--red_level3)":
                Q1_ans.red += 1;
                break;

            case "var(--green_level4)":
                Q1_ans.green += 1;
                break;
        }

        $(parent).innerText = '';
    }

    const input = document.querySelector('input');
    $('Q2_red_input').addEventListener('input', check_ans_Q2);
    $('Q2_blue_input').addEventListener('input', check_ans_Q2);

    function check_ans_Q2(e) {
        if (e.target.value == 50) {
            $(e.target.id).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--green_level2');
        } else {
            $(e.target.id).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--red_level1');

        }
    }

    $('Q1_part1').addEventListener('input', check_ans_Q1);
    $('Q1_part2_top').addEventListener('input', check_ans_Q1);
    $('Q1_part2_down').addEventListener('input', check_ans_Q1);
    let green_count = 0;

    function check_ans_Q1(e) {

        switch (e.target.id) {

            case 'Q1_part1':
                green_count = e.target.value;
                if (green_count >= 0 && green_count <= 10) {
                    $(e.target.id).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--green_level2');
                } else {
                    $(e.target.id).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--red_level1');
                }
                break;

            case 'Q1_part2_top':
                if (e.target.value == (10 - green_count)) {
                    $(e.target.id).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--green_level2');
                } else {
                    $(e.target.id).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--red_level1');
                }
                break;

            case 'Q1_part2_down':
                if (e.target.value == 10) {
                    $(e.target.id).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--green_level2');
                } else {
                    $(e.target.id).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--red_level1');
                }
                break;
        }
    }
}

else if (page_no === "126"){

    let Q1_color_picker_items = ["Q1_yellow_color", "Q1_blue_color", "Q1_red_color", "Q1_green_color"];
    let Q3_color_picker_items = ["Q3_blue_color", "Q3_red_color"];

    function sector_coloring(id, question_id) {

        let [colors, Q_feedback] = (function () {
            switch (question_id) {
                case "Q1":
                    return [Q1_color_picker_items, $("Q1_feedback")];

                case "Q3":
                    return [Q3_color_picker_items, $("Q3_feedback")];
            }
        })();

        if (color_picker_item != null){
            switch (color_picker_item.id) {
                case colors[0]:
                    $(id).style.backgroundColor= color_picker_item.style.backgroundColor;
                    pre_color = color_picker_item.style.backgroundColor;
                    break;

                case colors[1]:
                    $(id).style.backgroundColor= color_picker_item.style.backgroundColor;
                    pre_color = color_picker_item.style.backgroundColor;
                    break;

                case colors[2]:
                    $(id).style.backgroundColor= color_picker_item.style.backgroundColor;
                    pre_color = color_picker_item.style.backgroundColor;
                    break;

                case colors[3]:
                    $(id).style.backgroundColor= color_picker_item.style.backgroundColor;
                    pre_color = color_picker_item.style.backgroundColor;
                    break;
                default:
                    Q_feedback.textContent = "ابتدا رنگ موردنظر را انتخاب کن.";
                    Q_feedback.classList.add("shaking-animation");
                    Q_feedback.style.color= getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
                    break;
            }
        }

        else {
            Q_feedback.textContent = "ابتدا رنگ موردنظر را انتخاب کن.";
            Q_feedback.classList.add("shaking-animation");
            Q_feedback.style.color= getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
        }
        check_circle_sectors(question_id);
    }

    let Q1_ans = {"yellow": 4, "blue": 2, "red": 1, "green": 1};
    let Q3_ans = {"blue": 4, "red": 2};
    let Q1_sectors_id = ["Q1_sector1", "Q1_sector2", "Q1_sector3", "Q1_sector4", "Q1_sector5", "Q1_sector6", "Q1_sector7", "Q1_sector8"];
    let Q3_sectors_id = ["Q3_sector1", "Q3_sector2", "Q3_sector3", "Q3_sector4", "Q3_sector5", "Q3_sector6"];

    function check_circle_sectors(question_id) {

        let Q1_check_count = {"yellow": 0, "blue": 0, "red": 0, "green": 0};
        let Q3_check_count = {"blue": 0, "red": 0};

        let [ans, sectors_id, check_count, Q_feedback, Q_img] = (function () {
            switch (question_id) {
                case "Q1":
                    return [Q1_ans, Q1_sectors_id, Q1_check_count, $("Q1_feedback"), $("Q1_tree_img")];

                case "Q3":
                    return [Q3_ans, Q3_sectors_id, Q3_check_count, $("Q3_feedback"), $("Q3_pencil")];
            }
        })();

        for(const sector of sectors_id) {
            let color = $(sector).style.backgroundColor;

            switch (color.trim()) {
                case "var(--yellow_level3_border)":
                    check_count.yellow += 1;
                    break;

                case "var(--blue_level1)":
                    check_count.blue += 1;
                    break;

                case "var(--red_level1)":
                    check_count.red += 1;
                    break;

                case "var(--green_level2)":
                    check_count.green += 1;
                    break;

                case "var(--red_level3)":
                    check_count.red += 1;
                    break;

                case "var(--blue_level2)":
                    check_count.blue += 1;
                    break;
            }
        }

        if (JSON.stringify(ans) === JSON.stringify(check_count)){

            Q_feedback.textContent = "آفرین عزیزم. درست حل کردی.";
            Q_feedback.style.color= getComputedStyle(document.documentElement).getPropertyValue('--green_level3');
            Q_img.classList.add("shaking-animation");

        }

        else if (Object.values(check_count).reduce((a, b) => a + b, 0) == Object.values(ans).reduce((a, b) => a + b, 0)){

            Q_feedback.textContent = "دقت کن عزيزم. دوباره تلاش کن.";
            Q_feedback.classList.add("shaking-animation");
            Q_feedback.style.color= getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
        }
    }

    $('box_part1').addEventListener('input', check_ans_Q1);
    $('box_part2').addEventListener('input', check_ans_Q1);
    $('Q1_girl').addEventListener('input', check_ans_Q1);
    $('Q1_boy').addEventListener('input', check_ans_Q1);
    let green_count = 0;
    function check_ans_Q1(e) {

        switch (e.target.id) {

            case 'Q1_boy':
                if (e.target.value == 10){ $(e.target.id).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--green_level2');}
                else { $(e.target.id).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--red_level1');}
                break;

            case 'Q1_girl':
                if (e.target.value == 30){ $(e.target.id).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--green_level2');}
                else { $(e.target.id).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--red_level1');}
                break;

            case 'box_part1':
                if (e.target.value == 100){ $(e.target.id).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--green_level2');}
                else { $(e.target.id).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--red_level1');}
                break;

            case 'box_part2':
                if (e.target.value == 200){ $(e.target.id).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--green_level2');}
                else { $(e.target.id).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--red_level1');}
                break;
        }
    }
}

$("page_switcher").onkeypress = function (e) {

    if (e.which === 13) {

        let page_no = $("page_switcher").value;

        let tag = document.createElement("a");
        tag.href = 'book_3_' + page_no + '.html';

        tag.id = "switch";
        document.body.appendChild(tag);

        $("switch").click();
    }
}
