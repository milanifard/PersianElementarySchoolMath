function correct_p16_q1() {
    var q1_1 = document.getElementById("p16_q1_1");
    var q1_2 = document.getElementById("p16_q1_2");
    var q1_3 = document.getElementById("p16_q1_3");
    var q1_4 = document.getElementById("p16_q1_4");
    var q1_5 = document.getElementById("p16_q1_5");
    q1_1.classList.remove("normal_shadow");
    q1_1.classList.remove("yellow_shadow");
    q1_1.classList.remove("red_shadow");
    q1_1.classList.remove("green_shadow");
    q1_2.classList.remove("normal_shadow");
    q1_2.classList.remove("yellow_shadow");
    q1_2.classList.remove("red_shadow");
    q1_2.classList.remove("green_shadow");
    q1_3.classList.remove("normal_shadow");
    q1_3.classList.remove("yellow_shadow");
    q1_3.classList.remove("red_shadow");
    q1_3.classList.remove("green_shadow");
    q1_4.classList.remove("normal_shadow");
    q1_4.classList.remove("yellow_shadow");
    q1_4.classList.remove("red_shadow");
    q1_4.classList.remove("green_shadow");
    q1_5.classList.remove("normal_shadow");
    q1_5.classList.remove("yellow_shadow");
    q1_5.classList.remove("red_shadow");
    q1_5.classList.remove("green_shadow");

    if (q1_1.value.length == 0) {
        q1_1.classList.add("yellow_shadow");
    } else if (q1_1.value == '8') {
        q1_1.classList.add("green_shadow");
    } else {
        q1_1.classList.add("red_shadow");
    }

    if (q1_2.value.length == 0) {
        q1_2.classList.add("yellow_shadow");
    } else if (q1_2.value == '5') {
        q1_2.classList.add("green_shadow");
    } else {
        q1_2.classList.add("red_shadow");
    }

    if (q1_3.value.length == 0) {
        q1_3.classList.add("yellow_shadow");
    } else if (q1_3.value == '2') {
        q1_3.classList.add("green_shadow");
    } else {
        q1_3.classList.add("red_shadow");
    }

    if (q1_4.value.length == 0) {
        q1_4.classList.add("yellow_shadow");
    } else if (q1_4.value == '6') {
        q1_4.classList.add("green_shadow");
    } else {
        q1_4.classList.add("red_shadow");
    }

    if (q1_5.value.length == 0) {
        q1_5.classList.add("yellow_shadow");
    } else if (q1_5.value == '24') {
        q1_5.classList.add("green_shadow");
    } else {
        q1_5.classList.add("red_shadow");
    }
}

function correct_p16_q2() {
    var q2_1_1 = document.getElementById("p16_q2_1_1");
    var q2_1_2 = document.getElementById("p16_q2_1_2");
    var q2_2_1 = document.getElementById("p16_q2_2_1");
    var q2_2_2 = document.getElementById("p16_q2_2_2");
    var q2_3_1 = document.getElementById("p16_q2_3_1");
    var q2_3_2 = document.getElementById("p16_q2_3_2");

    q2_1_1.classList.remove("normal_shadow");
    q2_1_1.classList.remove("yellow_shadow");
    q2_1_1.classList.remove("red_shadow");
    q2_1_1.classList.remove("green_shadow");
    q2_1_2.classList.remove("normal_shadow");
    q2_1_2.classList.remove("yellow_shadow");
    q2_1_2.classList.remove("red_shadow");
    q2_1_2.classList.remove("green_shadow");
    q2_2_1.classList.remove("normal_shadow");
    q2_2_1.classList.remove("yellow_shadow");
    q2_2_1.classList.remove("red_shadow");
    q2_2_1.classList.remove("green_shadow");
    q2_2_2.classList.remove("normal_shadow");
    q2_2_2.classList.remove("yellow_shadow");
    q2_2_2.classList.remove("red_shadow");
    q2_2_2.classList.remove("green_shadow");
    q2_3_1.classList.remove("normal_shadow");
    q2_3_1.classList.remove("yellow_shadow");
    q2_3_1.classList.remove("red_shadow");
    q2_3_1.classList.remove("green_shadow");
    q2_3_2.classList.remove("normal_shadow");
    q2_3_2.classList.remove("yellow_shadow");
    q2_3_2.classList.remove("red_shadow");
    q2_3_2.classList.remove("green_shadow");

    if (q2_1_1.value.length == 0) {
        q2_1_1.classList.add("yellow_shadow");
    } else if (q2_1_1.value == '3') {
        q2_1_1.classList.add("green_shadow");
    } else {
        q2_1_1.classList.add("red_shadow");
    }

    if (q2_1_2.value.length == 0) {
        q2_1_2.classList.add("yellow_shadow");
    } else if (q2_1_2.value == '15') {
        q2_1_2.classList.add("green_shadow");
    } else {
        q2_1_2.classList.add("red_shadow");
    }

    if (q2_2_1.value.length == 0) {
        q2_2_1.classList.add("yellow_shadow");
    } else if (q2_2_1.value == '4') {
        q2_2_1.classList.add("green_shadow");
    } else {
        q2_2_1.classList.add("red_shadow");
    }

    if (q2_2_2.value.length == 0) {
        q2_2_2.classList.add("yellow_shadow");
    } else if (q2_2_2.value == '16') {
        q2_2_2.classList.add("green_shadow");
    } else {
        q2_2_2.classList.add("red_shadow");
    }

    if (q2_3_1.value.length == 0) {
        q2_3_1.classList.add("yellow_shadow");
    } else if (q2_3_1.value == '10') {
        q2_3_1.classList.add("green_shadow");
    } else {
        q2_3_1.classList.add("red_shadow");
    }

    if (q2_3_2.value.length == 0) {
        q2_3_2.classList.add("yellow_shadow");
    } else if (q2_3_2.value == '22') {
        q2_3_2.classList.add("green_shadow");
    } else {
        q2_3_2.classList.add("red_shadow");
    }
}

function correct_p17_q1() {
    var q1_1 = document.getElementById("p17_q1_1");
    var q1_2 = document.getElementById("p17_q1_2");
    var q1_3 = document.getElementById("p17_q1_3");
    var q1_4 = document.getElementById("p17_q1_4");
    var q1_5 = document.getElementById("p17_q1_5");
    var q1_6 = document.getElementById("p17_q1_6");
    var q1_7 = document.getElementById("p17_q1_7");
    var q1_8 = document.getElementById("p17_q1_8");
    var q1_9 = document.getElementById("p17_q1_9");
    var q1_10 = document.getElementById("p17_q1_10");

    q1_1.classList.remove("normal_shadow");
    q1_1.classList.remove("yellow_shadow");
    q1_1.classList.remove("red_shadow");
    q1_1.classList.remove("green_shadow");
    q1_2.classList.remove("normal_shadow");
    q1_2.classList.remove("yellow_shadow");
    q1_2.classList.remove("red_shadow");
    q1_2.classList.remove("green_shadow");
    q1_3.classList.remove("normal_shadow");
    q1_3.classList.remove("yellow_shadow");
    q1_3.classList.remove("red_shadow");
    q1_3.classList.remove("green_shadow");
    q1_4.classList.remove("normal_shadow");
    q1_4.classList.remove("yellow_shadow");
    q1_4.classList.remove("red_shadow");
    q1_4.classList.remove("green_shadow");
    q1_5.classList.remove("normal_shadow");
    q1_5.classList.remove("yellow_shadow");
    q1_5.classList.remove("red_shadow");
    q1_5.classList.remove("green_shadow");
    q1_6.classList.remove("normal_shadow");
    q1_6.classList.remove("yellow_shadow");
    q1_6.classList.remove("red_shadow");
    q1_6.classList.remove("green_shadow");
    q1_7.classList.remove("normal_shadow");
    q1_7.classList.remove("yellow_shadow");
    q1_7.classList.remove("red_shadow");
    q1_7.classList.remove("green_shadow");
    q1_8.classList.remove("normal_shadow");
    q1_8.classList.remove("yellow_shadow");
    q1_8.classList.remove("red_shadow");
    q1_8.classList.remove("green_shadow");
    q1_9.classList.remove("normal_shadow");
    q1_9.classList.remove("yellow_shadow");
    q1_9.classList.remove("red_shadow");
    q1_9.classList.remove("green_shadow");
    q1_10.classList.remove("normal_shadow");
    q1_10.classList.remove("yellow_shadow");
    q1_10.classList.remove("red_shadow");
    q1_10.classList.remove("green_shadow");

    if (q1_1.value.length == 0) {
        q1_1.classList.add("yellow_shadow");
    } else if (q1_1.value == '15') {
        q1_1.classList.add("green_shadow");
    } else {
        q1_1.classList.add("red_shadow");
    }

    if (q1_2.value.length == 0) {
        q1_2.classList.add("yellow_shadow");
    } else if (q1_2.value == '16') {
        q1_2.classList.add("green_shadow");
    } else {
        q1_2.classList.add("red_shadow");
    }

    if (q1_3.value.length == 0) {
        q1_3.classList.add("yellow_shadow");
    } else if (q1_3.value == '17') {
        q1_3.classList.add("green_shadow");
    } else {
        q1_3.classList.add("red_shadow");
    }

    if (q1_4.value.length == 0) {
        q1_4.classList.add("yellow_shadow");
    } else if (q1_4.value == '18') {
        q1_4.classList.add("green_shadow");
    } else {
        q1_4.classList.add("red_shadow");
    }

    if (q1_5.value.length == 0) {
        q1_5.classList.add("yellow_shadow");
    } else if (q1_5.value == '19') {
        q1_5.classList.add("green_shadow");
    } else {
        q2_3_1.classList.add("red_shadow");
    }

    if (q1_6.value.length == 0) {
        q1_6.classList.add("yellow_shadow");
    } else if (q1_6.value == '20') {
        q1_6.classList.add("green_shadow");
    } else {
        q1_6.classList.add("red_shadow");
    }

    if (q1_7.value.length == 0) {
        q1_7.classList.add("yellow_shadow");
    } else if (q1_7.value == '21') {
        q1_7.classList.add("green_shadow");
    } else {
        q1_7.classList.add("red_shadow");
    }

    if (q1_8.value.length == 0) {
        q1_8.classList.add("yellow_shadow");
    } else if (q1_8.value == '22') {
        q1_8.classList.add("green_shadow");
    } else {
        q1_8.classList.add("red_shadow");
    }

    if (q1_9.value.length == 0) {
        q1_9.classList.add("yellow_shadow");
    } else if (q1_9.value == '23') {
        q1_9.classList.add("green_shadow");
    } else {
        q1_9.classList.add("red_shadow");
    }

    if (q1_10.value.length == 0) {
        q1_10.classList.add("yellow_shadow");
    } else if (q1_10.value == '24') {
        q1_10.classList.add("green_shadow");
    } else {
        q1_10.classList.add("red_shadow");
    }
}

function correct_p17_q2() {
    var q2_1 = document.getElementById("p17_q2_1");
    var q2_2_1 = document.getElementById("p17_q2_2_1");
    var q2_2_2 = document.getElementById("p17_q2_2_2");
    var q2_3_1 = document.getElementById("p17_q2_3_1");
    var q2_3_2 = document.getElementById("p17_q2_3_2");

    q2_1.classList.remove("normal_shadow");
    q2_1.classList.remove("yellow_shadow");
    q2_1.classList.remove("red_shadow");
    q2_1.classList.remove("green_shadow");
    q2_2_1.classList.remove("yellow_shadow");
    q2_2_1.classList.remove("red_shadow");
    q2_2_1.classList.remove("green_shadow");
    q2_2_2.classList.remove("normal_shadow");
    q2_2_2.classList.remove("yellow_shadow");
    q2_2_2.classList.remove("red_shadow");
    q2_2_2.classList.remove("green_shadow");
    q2_3_1.classList.remove("normal_shadow");
    q2_3_1.classList.remove("yellow_shadow");
    q2_3_1.classList.remove("red_shadow");
    q2_3_1.classList.remove("green_shadow");
    q2_3_2.classList.remove("normal_shadow");
    q2_3_2.classList.remove("yellow_shadow");
    q2_3_2.classList.remove("red_shadow");
    q2_3_2.classList.remove("green_shadow");

    if (q2_1.value.length == 0) {
        q2_1.classList.add("yellow_shadow");
    } else if (q2_1.value == '4') {
        q2_1.classList.add("green_shadow");
    } else {
        q2_1.classList.add("red_shadow");
    }

    if (q2_2_1.value.length == 0) {
        q2_2_1.classList.add("yellow_shadow");
    } else if (q2_2_1.value == '4') {
        q2_2_1.classList.add("green_shadow");
    } else {
        q2_2_1.classList.add("red_shadow");
    }

    if (q2_2_2.value.length == 0) {
        q2_2_2.classList.add("yellow_shadow");
    } else if (q2_2_2.value == '16') {
        q2_2_2.classList.add("green_shadow");
    } else {
        q2_2_2.classList.add("red_shadow");
    }

    if (q2_3_1.value.length == 0) {
        q2_3_1.classList.add("yellow_shadow");
    } else if (q2_3_1.value == '9') {
        q2_3_1.classList.add("green_shadow");
    } else {
        q2_3_1.classList.add("red_shadow");
    }

    if (q2_3_2.value.length == 0) {
        q2_3_2.classList.add("yellow_shadow");
    } else if (q2_3_2.value == '21') {
        q2_3_2.classList.add("green_shadow");
    } else {
        q2_3_2.classList.add("red_shadow");
    }
}