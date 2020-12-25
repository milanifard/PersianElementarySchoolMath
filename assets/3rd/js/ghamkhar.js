let color_green = "#32e432";
let color_red = "#ff0000";
let color_white = "#ffffff";


function check_value(input_box, value) {
    if (input_box.value === "") {
        input_box.style.backgroundColor = color_white;
        return null;
    } else if (input_box.value === value) {
        input_box.style.backgroundColor = color_green;
        return true;
    } else {
        input_box.style.backgroundColor = color_red;
        return false;
    }
}


function question(id,quest_num) {
    check_value(id, quest_num);

}



