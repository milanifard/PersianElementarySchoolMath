let correct_table_color = "rgba(144,255,145,0.5)";
let incorrect_table_color = "rgb(255,118,118,0.5)";
let transparent_color = "#ff000000";

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