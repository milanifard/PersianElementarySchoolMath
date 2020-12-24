let correct_table_color = "rgba(144,255,145,0.5)";
let incorrect_table_color = "rgb(255,118,118,0.5)";
let transparent_color = "#ff000000";
let white = "rgb(255,255,255,1)";


let correct_message = "آفرین!";
let correct_message_color = "#32e432";
let incorrect_message = "بیشتر دقت کن!";
let incorrect_message_color = "#ff0000";
let correct_answer_color = "#160577";

function error_message(message_element) {
    message_element.innerHTML = incorrect_message;
    message_element.style.color = incorrect_message_color;
}

function appreciate_message(message_element) {
    message_element.innerHTML = correct_message;
    message_element.style.color = correct_message_color;
}

function blank_message(message_element) {
    message_element.innerHTML = "";
}

function $(id) {
    return document.getElementById(id);
}

function cross(a,b){
    return a*b;
}
function cross_check(element, a, b){
    var res = a*b;
    // alert(a+b);
    if (element.value === ""){
        element.style.backgroundColor  = transparent_color;
    }else if (element.value === res.toString()){
        element.style.backgroundColor  = correct_table_color;
    }else{
        element.style.backgroundColor  = incorrect_table_color;
    }
}

function div_check(element, a, b){
    var res = a/b;
    // alert(a+b);
    if (element.value === ""){
        element.style.backgroundColor  = transparent_color;
    }else if (element.value === res.toString()){
        element.style.backgroundColor  = correct_table_color;
    }else{
        element.style.backgroundColor  = incorrect_table_color;
    }
}
function check_q2p136(){
    let message = $("Q2P136_blank1_message");
    if(document.getElementById("q2p136_opt1").checked){
        appreciate_message(message);
    }
    else if (document.getElementById("q2p136_opt2").checked){
        error_message(message);
    }
    else {
        blank_message(message);
    }

}

function q3p136show(){
    let answer = $("q3p136ans")
    let showBut = $("q3p136show")
    let hideBut = $("q3p136hide")
    answer.style.display = "block";
    answer.style.color = correct_answer_color;
    showBut.style.display = "none";
    hideBut.style.display = "block";
}
function q3p136hide(){
    let answer = $("q3p136ans")
    let showBut = $("q3p136show")
    let hideBut = $("q3p136hide")
    answer.style.display = "none";
    showBut.style.display = "block";
    hideBut.style.display = "none";
}

// 1th questioh page 137
function q1p137_3(){
    let a = $("q1p137_31")
    let b= $("q1p137_32")
    let res = $("q1p137_33")

    if(res.value!==""){
        if(a.value!== "" && b.value!=="")
            if((Number(a.value) * Number(b.value) === 3) && Number(res.value) === 3){
            res.style.backgroundColor = correct_table_color;
            a.style.backgroundColor = correct_table_color;
            b.style.backgroundColor = correct_table_color;
            }
            else{
                res.style.backgroundColor = incorrect_table_color;
                a.style.backgroundColor = incorrect_table_color;
                b.style.backgroundColor = incorrect_table_color;
            }
    }
}
function q1p137_4(){
    let a = $("q1p137_41")
    let b= $("q1p137_42")
    let res = $("q1p137_43")

    if(res.value!==""){
        if(a.value!== "" && b.value!=="")
            if((Number(a.value) * Number(b.value)) === 4 && Number(res.value) === 4){
            res.style.backgroundColor = correct_table_color;
            a.style.backgroundColor = correct_table_color;
            b.style.backgroundColor = correct_table_color;
            }
            else{
                res.style.backgroundColor = incorrect_table_color;
                a.style.backgroundColor = incorrect_table_color;
                b.style.backgroundColor = incorrect_table_color;
            }
    }
}
function q1p137_5(){
    let a = $("q1p137_51")
    let b= $("q1p137_52")
    let res = $("q1p137_53")

    if(res.value!==""){
        if(a.value!== "" && b.value!=="")
            if((Number(a.value) * Number(b.value)) === 5 && Number(res.value) === 5){
            res.style.backgroundColor = correct_table_color;
            a.style.backgroundColor = correct_table_color;
            b.style.backgroundColor = correct_table_color;
            }
            else{
                res.style.backgroundColor = incorrect_table_color;
                a.style.backgroundColor = incorrect_table_color;
                b.style.backgroundColor = incorrect_table_color;
            }
    }
}

// 2th question page 137
function check_q1p137(){
    let message = $("Q1P137_blank1_message");
    if(document.getElementById("q1p137_opt1").checked){
        appreciate_message(message);
    }
    else if (document.getElementById("q1p137_opt2").checked || 
             document.getElementById("q1p137_opt3").checked){
        error_message(message);
    }
    else {
        blank_message(message);
    }

}
function q2p137_1(){
    let a = $("q2p137_11")
    let b= $("q2p137_12")
    let res = $("q2p137_13")

    if(res.value!==""){
        if(a.value!== "" && b.value!=="")
            if((Number(a.value) * Number(b.value))=== 6 && Number(res.value) === 6){
            res.style.backgroundColor = correct_table_color;
            a.style.backgroundColor = correct_table_color;
            b.style.backgroundColor = correct_table_color;
            }
            else{
                res.style.backgroundColor = incorrect_table_color;
                a.style.backgroundColor = incorrect_table_color;
                b.style.backgroundColor = incorrect_table_color;
            }
    }
}
function q2p137_2(){
    let a = $("q2p137_21")
    let b= $("q2p137_22")
    let res = $("q2p137_23")

    if(res.value!==""){
        if(a.value!== "" && b.value!=="")
            if((Number(a.value) * Number(b.value))=== 3 && Number(res.value) === 3){
            res.style.backgroundColor = correct_table_color;
            a.style.backgroundColor = correct_table_color;
            b.style.backgroundColor = correct_table_color;
            }
            else{
                res.style.backgroundColor = incorrect_table_color;
                a.style.backgroundColor = incorrect_table_color;
                b.style.backgroundColor = incorrect_table_color;
            }
    }
}
function q2p137_3(){
    let a = $("q2p137_31")
    let b= $("q2p137_32")
    let res = $("q2p137_33")
    var anumber = Number(a.value)
    var bnumber = Number(b.value)

    if(res.value!==""){
        if(a.value!== "" && b.value!=="")
            if(((anumber===0 && bnumber===3) ||(anumber===3 && bnumber===0)) && Number(res.value) === 0){
            res.style.backgroundColor = correct_table_color;
            a.style.backgroundColor = correct_table_color;
            b.style.backgroundColor = correct_table_color;
            }
            else{
                res.style.backgroundColor = incorrect_table_color;
                a.style.backgroundColor = incorrect_table_color;
                b.style.backgroundColor = incorrect_table_color;
            }
    }
}
function check_me(name, out){
    let a = $(name)

    if (a.value === ""){
        a.style.backgroundColor = white;
    }
    else if(Number(a.value) === out){
        a.style.backgroundColor = correct_table_color;
    }
    else{
        a.style.backgroundColor = incorrect_table_color;
    }
}


// Page 138

function cross_2_check(in1_name, in2_name, in3_name, ta, tb){
    let a = $(in1_name)
    let b = $(in2_name)
    let r = $(in3_name)

    var anum = Number(a.value);
    var bnum = Number(b.value);
    var rnum = Number(r.value);

    if(r.value!==""){
        if(a.value!== "" && b.value!==""){
            if(((anum === ta && bnum === tb) || (bnum === ta && anum === tb)) && rnum === (ta*tb)){
                a.style.backgroundColor = correct_table_color;
                b.style.backgroundColor = correct_table_color;
                r.style.backgroundColor = correct_table_color;
            }
            else{
                a.style.backgroundColor = incorrect_table_color;
                b.style.backgroundColor = incorrect_table_color;
                r.style.backgroundColor = incorrect_table_color;
            }
        }

       
    }
    else{
        a.style.backgroundColor = transparent_color;
        b.style.backgroundColor = transparent_color;
        r.style.backgroundColor = transparent_color;
    }
}
