function $(id){ return document.getElementById(id);}

const correct_color = "rgba(103, 181, 111,0.8)";
const wrong_color = "rgba(219, 58, 46,0.8)";
const alert_color = "rgba(255, 102, 0, 0.8)";

function check_value(elem, val) {
    if (elem.value === val){
        elem.style.background = correct;
    }else if (elem.value === ''){
        elem.style.background = orange;
    }else{
        elem.style.background = notCorrect;
    }
}

function q1_118(element) {
    switch (element.id) {
        case "Q1_text_box_1":
        case "Q1_text_box_2":
            if (element.value === "") {
                element.style.backgroundColor = transparent_color;
            } else if (element.value === "2") {
                element.style.backgroundColor = correct_table_color;
            } else {
                element.style.backgroundColor = incorrect_table_color;
            }
            break;
        case "Q1_text_box_3":
            if (element.value === "") {
                element.style.backgroundColor = transparent_color;
            } else if (element.value === "3") {
                element.style.backgroundColor = correct_table_color;
            } else {
                element.style.backgroundColor = incorrect_table_color;
            }
            break;
        case "Q1_text_box_4":
            if (element.value === "") {
                element.style.backgroundColor = transparent_color;
            } else if (element.value === "4") {
                element.style.backgroundColor = correct_table_color;
            } else {
                element.style.backgroundColor = incorrect_table_color;
            }
            break;
    }
}

function q1_118_1(element){
}