let transparent_color = "#ff000000";

let correct_table_color = "rgba(144,255,145,0.5)";
let incorrect_table_color = "rgb(255,118,118,0.5)";

let correct_message = "آفرین";
let correct_message_color = "#32e432";
let incorrect_message = "بیشتر دقت کن";
let incorrect_message_color = "#ff0000";

function $(id) {
    return document.getElementById(id);
}

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

function set_message(message, result) {
    if (result === null) {
        blank_message(message);
    } else if (result) {
        appreciate_message(message);
    } else {
        error_message(message);
    }
}

function question1(element) {
    let message = $("Q1_response");

    set_message(message, check_text_box(element, "2250"));
}

function question2(element) {
    let message = $("Q2_response");

    set_message(message, check_text_box(element, "100"));
}

function question3() {
    let message = $("Q3_response");
    let bigger_number = $("Q3_text_box1");
    let lower_number = $("Q3_text_box2");
    let result = $("Q3_text_box3");

    let check_lower = check_text_box(lower_number, "100");
    let check_bigger = check_text_box(bigger_number, "9999");
    let check_result = check_text_box(result, "9899");

    if (check_lower === null || check_bigger === null || check_result === null) {
        set_message(message, null);
    } else {
        set_message(message, (check_lower && check_bigger) && check_result);
    }
}

function question4() {
    let message = $("Q4_response");
    let bigger_number = $("Q4_text_box1");
    let lower_number = $("Q4_text_box2");
    let result = $("Q4_text_box3");

    let check_lower = check_text_box(lower_number, "1257");
    let check_bigger = check_text_box(bigger_number, "9521");
    let check_result = check_text_box(result, "8264");

    if (check_lower === null || check_bigger === null || check_result === null) {
        set_message(message, null);
    } else {
        set_message(message, (check_lower && check_bigger) && check_result);
    }
}

function question5(element){
    let message = $("Q5_response");

    set_message(message, check_text_box(element, "1267"));
}

function question6() {
    let message = $("Q6_response");
    let text_box_1 = $("Q6_text_box1");
    let text_box_2 = $("Q6_text_box2");
    let text_box_3 = $("Q6_text_box3");
    let text_box_4 = $("Q6_text_box4");

    let check_1 = check_text_box(text_box_1, "5130");
    let check_2 = check_text_box(text_box_2, "2835");
    let check_3 = check_text_box(text_box_3, "5023");
    let check_4 = check_text_box(text_box_4, "1766");

    if (check_1 === null || check_2 === null || check_3 === null || check_4 === null) {
        set_message(message, null);
    } else {
        set_message(message, check_1 && check_2 && check_3 && check_4);
    }
}


