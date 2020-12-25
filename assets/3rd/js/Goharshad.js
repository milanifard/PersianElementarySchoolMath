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