let transparent_color = "#ff000000";

let correct_table_color = "rgba(144,255,145,0.5)";
let incorrect_table_color = "rgb(255,118,118,0.5)";

let correct_message = "آفرین";
let correct_message_color = "#32e432";
let incorrect_message = "بیشتر دقت کن!!";
let incorrect_message_color = "#ff0000";

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

function question1_table(element) {
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

    let v1 = $("Q1_text_box_1");
    let v2 = $("Q1_text_box_2");
    let v3 = $("Q1_text_box_3");
    let v4 = $("Q1_text_box_4");
    let message = $("Q1_table_message")


    // check no item not empty
    if (
        v1.value === "" ||
        v2.value === "" ||
        v3.value === "" ||
        v4.value === ""
    ) {
        blank_message(message);
    } else if (
        v1.value === "2" &&
        v2.value === "2" &&
        v3.value === "3" &&
        v4.value === "4"
    ) {
        appreciate_message(message)
    } else {
        error_message(message);
    }
}

function question1_blank1(element) {
    let message = $("Q1_blank1_message");

    if (element.value === "") {
        blank_message(message);
        element.style.backgroundColor = transparent_color;
    } else if (element.value === "2") {
        appreciate_message(message);
        element.style.backgroundColor = correct_table_color;
    } else {
        error_message(message);
        element.style.backgroundColor = incorrect_table_color;
    }
}

function question1_blank2(element) {
    console.log("awoeih")
    let message = $("Q1_blank2_message");

    if (element.value === "") {
        blank_message(message);
        element.style.backgroundColor = transparent_color;
    } else if (element.value === "2") {
        appreciate_message(message);
        element.style.backgroundColor = correct_table_color;
    } else {
        error_message(message);
        element.style.backgroundColor = incorrect_table_color;
    }
}

function question1_blank3(element) {
    let message = $("Q1_blank3_message");

    if (element.value === "") {
        blank_message(message);
        element.style.backgroundColor = transparent_color;
    } else if (element.value === "3") {
        appreciate_message(message);
        element.style.backgroundColor = correct_table_color;
    } else {
        error_message(message);
        element.style.backgroundColor = incorrect_table_color;
    }
}

function question1_blank4(element) {
    let message = $("Q1_blank4_message");

    if (element.value === "") {
        blank_message(message);
        element.style.backgroundColor = transparent_color;
    } else if (element.value === "4") {
        appreciate_message(message);
        element.style.backgroundColor = correct_table_color;
    } else {
        error_message(message);
        element.style.backgroundColor = incorrect_table_color;
    }
}


function question2_table(element) {
    switch (element.id) {
        case "Q2_text_box_1":
            if (element.value === "") {
                element.style.backgroundColor = transparent_color;
            } else if (element.value === "2") {
                element.style.backgroundColor = correct_table_color;
            } else {
                element.style.backgroundColor = incorrect_table_color;
            }
            break;
        case "Q2_text_box_2":
            if (element.value === "") {
                element.style.backgroundColor = transparent_color;
            } else if (element.value === "7") {
                element.style.backgroundColor = correct_table_color;
            } else {
                element.style.backgroundColor = incorrect_table_color;
            }
            break;
        case "Q2_text_box_3":
            if (element.value === "") {
                element.style.backgroundColor = transparent_color;
            } else if (element.value === "1") {
                element.style.backgroundColor = correct_table_color;
            } else {
                element.style.backgroundColor = incorrect_table_color;
            }
            break;
        case "Q2_text_box_4":
            if (element.value === "") {
                element.style.backgroundColor = transparent_color;
            } else if (element.value === "3") {
                element.style.backgroundColor = correct_table_color;
            } else {
                element.style.backgroundColor = incorrect_table_color;
            }
            break;
    }

    let v1 = $("Q2_text_box_1");
    let v2 = $("Q2_text_box_2");
    let v3 = $("Q2_text_box_3");
    let v4 = $("Q2_text_box_4");
    let message = $("Q2_table_message")


    // check no item not empty
    if (
        v1.value === "" ||
        v2.value === "" ||
        v3.value === "" ||
        v4.value === ""
    ) {
        blank_message(message);
    } else if (
        v1.value === "2" &&
        v2.value === "7" &&
        v3.value === "1" &&
        v4.value === "3"
    ) {
        appreciate_message(message)
    } else {
        error_message(message);
    }
}

function question2_blank1(element) {
    let message = $("Q2_blank1_message");

    if (element.value === "") {
        blank_message(message);
        element.style.backgroundColor = transparent_color;
    } else if (element.value === "2") {
        appreciate_message(message);
        element.style.backgroundColor = correct_table_color;
    } else {
        error_message(message);
        element.style.backgroundColor = incorrect_table_color;
    }
}