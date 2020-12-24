// general functions:
function getElementsbyID(id){ return document.getElementById(id);}

function change_status(id, excepted_answer){
    var obj = getElementsbyID(id);
    if(obj.value == excepted_answer){
        obj.style.backgroundColor = "#67b56f";
    }
    else{
        obj.style.backgroundColor = "#db3a2e";
    }
}

// page 58:

// q1
function q1_answer(){
    change_status("q1-answer", "از");
}

// q2
function q2_answer(){
    change_status("q2-answer", "از");
}

// q3

// q4:

function angel_number(){
    change_status("angel-count", "4");
}

function part_count(){
    change_status("part-count", "4");
}

function angel_type(){
    change_status("angel-type", "راست");
}

//q6
function tail_checker(){
    change_status("q6-tail", "۱۰۰۰ - ۱۰۵۰")
}

// page 59:

//q7
function angle_shape_count(){
    change_status("angel-shape-count", "4");
}

//q8
function pargar_cm1(){
    change_status("pargar-cm1", "2");
}

function pargar_cm2(){
    change_status("pargar-cm2", "2");
}

//q10

function tri_shape1(){
    var obj = getElementsbyID("tri-shape1");
    obj.style.backgroundColor = "#db3a2e";
}

function cir_shape1(){
    var obj = getElementsbyID("cir-shape1");
    obj.style.backgroundColor = "#db3a2e";
}

function rec_shape1(){
   change_status("rec-shape1", "2/6");
}

function tri_shape2(){
    change_status("tri-shape2", "2/4");
}

function rec_shape2(){
    var obj = getElementsbyID("rec-shape2");
    obj.style.backgroundColor = "#db3a2e";
}

function cir_shape2(){
    change_status("cir-shape2", "2/3");
}

//q11
function orange_percentage(){
    change_status("orange-percentage", "2/6");
}

function green_area(){
    change_status("green-area", "2/6");
}

function pink_area(){
    change_status("pink-area", "2/6");
}

//q12

function clock1_percentage(){
    change_status("clock1-percentage", "یک و نیم");
}

function clock2_percentage(){
    change_status("clock2-percentage", "هشت و نیم");
}

function clock3_percentage(){
    change_status("clock3-percentage", "یازده و ربع");
}

function clock4_percentage(){
    change_status("clock4-percentage", "شش و ربع");
}


//farhange-khandan

function yes_or_no(){
    change_status("yes-or-no", "خیر");
}
