let transparent_color = "#ff000000";

let correct_table_color = "rgba(144,255,145,0.5)";
let incorrect_table_color = "rgb(255,118,118,0.5)";

function $(id) {
    return document.getElementById(id);
}


function check_text_box(text_box, value) {
    if (text_box.value === "") {
        text_box.style.backgroundColor = transparent_color;
        return null;
    } else if (text_box.value === value) {
        text_box.style.backgroundColor = correct_table_color;
        return true;
    } else {
        text_box.style.backgroundColor = incorrect_table_color;
        return false;
    }
}





