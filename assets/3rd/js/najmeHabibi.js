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
    change_status("angel-type", "4");
}

//q6
function tail_checker(){
    change_status("q6-tail", "۱۰۰۰ - ۱۰۵")
}