// general functions:
function getElementsbyID(id){ return document.getElementById(id);}

function test_number_answer(id, excepted_answer ){
    var obj = getElementsbyID(id);
    var value = obj.value.trim()
    if(value == excepted_answer){
        change_status(true, obj);
    }else{
        change_status(false, obj);
    }
}

function test_text_answer(id, excepted_answer, limit){
    var obj = getElementsbyID(id);
    var value = obj.value.trim()
    var counter = 0;
    for(answer of excepted_answer){
        if(value.includes(answer)){
            counter++;
        }
    }
    if(limit <= counter){
        change_status(true, obj);
    }else{
        change_status(false, obj);
    }
}

function change_status(green, obj){
    if(green){
        obj.style.backgroundColor = "#67b56f";
    }
    else{
        obj.style.backgroundColor = "#db3a2e";
    }
}

// page 58:

// q1
function q1_answer(){
    test_text_answer("q1-answer", ["مجموع", "+", "=", "یک متر برابر", "سانتی متر", "صد", "100", "هر" ] , 3);
}

// q2
function q2_answer(){
    test_text_answer("q2-answer", ["مجموع", "+", "=", "کیلوگرم برابر", "گرم", "هزار", "1000", "هر" ] , 3);
}

// q3

// q4

function angel_number(){
    test_number_answer("angel-count", "4");
}

function part_count(){
    test_number_answer("part-count", "4");
}

function angel_type(){
    test_text_answer("angel-type", ["راست", "قائمه", "قایمه"], 1);
}

//q6
function tail_checker(){
    test_number_answer("q6-tail", "۱۰۰۰ - ۱۰۵۰ - ۱۱۰۰ - ۱۱۵۰ - ۱۲۰۰ - ۱۲۵۰ - ۱۳۰۰ - ۱۳۵۰ - ۱۴۰۰")
}

// page 59:

//q7
function angle_shape_count(){
    test_number_answer("angel-shape-count", "4");
}

//q8
function pargar_cm1(){
    test_number_answer("pargar-cm1", "2");
}

function pargar_cm2(){
    test_number_answer("pargar-cm2", "2");
}

//q10

function tri_shape1(){
    var obj = getElementsbyID("tri-shape1");
    change_status(false, obj);
}

function cir_shape1(){
    var obj = getElementsbyID("cir-shape1");
    change_status(false, obj);
}

function rec_shape1(){
    test_text_answer("rec-shape1", ["2/6", "1/3"], 1);
}

function tri_shape2(){
    test_text_answer("tri-shape2",["2/4", "1/2"], 1);
}

function rec_shape2(){
    var obj = getElementsbyID("rec-shape2");
    change_status(false, obj);
}

function cir_shape2(){
    test_number_answer("cir-shape2", "2/3");
}

//q11
function orange_percentage(){
    test_text_answer("orange-percentage", ["2/6", "1/3"], 1);
}

function green_area(){
    test_text_answer("green-area", ["2/6", "1/3"], 1);
}

function pink_area(){
    test_text_answer("pink-area", ["2/6", "1/3"], 1);
}

//q12

function clock1_percentage(){
    test_number_answer("clock1-percentage", "یک و نیم");
}

function clock2_percentage(){
    test_number_answer("clock2-percentage", "هشت و نیم");
}

function clock3_percentage(){
    test_number_answer("clock3-percentage", "یازده و ربع");
}

function clock4_percentage(){
    test_number_answer("clock4-percentage", "شش و ربع");
}


//farhange-khandan

function yes_or_no(){
    test_text_answer("yes-or-no", ["خیر", "نه"], 1);
}

function what_is_the_problem_answer(){
    test_text_answer("what-is-the-problem-answer", [ "هربار", "کل سهم", "نمی ماند", "چیزی", "نصف" ] ,2);
}
