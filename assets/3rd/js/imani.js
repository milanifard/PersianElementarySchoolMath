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

function correct_p18_q2() {
    select6 = document.getElementById("s6")
    select7 = document.getElementById("s7")
    select8 = document.getElementById("s8")
    select9 = document.getElementById("s9")
    select10 = document.getElementById("s10")
    select11 = document.getElementById("s11")
    select12 = document.getElementById("s12")
    select13 = document.getElementById("s13")
    select14 = document.getElementById("s14")
    select15 = document.getElementById("s15")
    select16 = document.getElementById("s16")
    select17 = document.getElementById("s17")
    select18 = document.getElementById("s18")
    select19 = document.getElementById("s19")
    select20 = document.getElementById("s20")
    select21 = document.getElementById("s21")
    select22 = document.getElementById("s22")
    select23 = document.getElementById("s23")
    select24 = document.getElementById("s24")

    c6 = select6.classList;
    c7 = select7.classList;
    c8 = select8.classList;
    c9 = select9.classList;
    c10 = select10.classList;
    c11 = select11.classList;
    c12 = select12.classList;
    c13 = select13.classList;
    c14 = select14.classList;
    c15 = select15.classList;
    c16 = select16.classList;
    c17 = select17.classList;
    c18 = select18.classList;
    c19 = select19.classList;
    c20 = select20.classList;
    c21 = select21.classList;
    c22 = select22.classList;
    c23 = select23.classList;
    c24 = select24.classList;

    document.getElementById("hour6").classList = ''
    document.getElementById("hour7").classList = ''
    document.getElementById("hour8").classList = ''
    document.getElementById("hour9").classList = ''
    document.getElementById("hour10").classList = ''
    document.getElementById("hour11").classList = ''
    document.getElementById("hour12").classList = ''
    document.getElementById("hour13").classList = ''
    document.getElementById("hour14").classList = ''
    document.getElementById("hour15").classList = ''
    document.getElementById("hour16").classList = ''
    document.getElementById("hour17").classList = ''
    document.getElementById("hour18").classList = ''
    document.getElementById("hour19").classList = ''
    document.getElementById("hour20").classList = ''
    document.getElementById("hour21").classList = ''
    document.getElementById("hour22").classList = ''
    document.getElementById("hour23").classList = ''
    document.getElementById("hour24").classList = ''

    if (c6.length == 0) {
        document.getElementById("hour6").classList.add("empty")
    } else if (c6[0] == "sleep") {
        document.getElementById("hour6").classList.add("correct")
    } else {
        document.getElementById("hour6").classList.add("wrong")
    }

    if (c7.length == 0) {
        document.getElementById("hour7").classList.add("empty")
    } else if (c7[0] == "pray_morning") {
        document.getElementById("hour7").classList.add("correct")
    } else {
        document.getElementById("hour7").classList.add("wrong")
    }

    if (c8.length == 0) {
        document.getElementById("hour8").classList.add("empty")
    } else if (c8[0] == "shower") {
        document.getElementById("hour8").classList.add("correct")
    } else {
        document.getElementById("hour8").classList.add("wrong")
    }

    if (c9.length == 0) {
        document.getElementById("hour9").classList.add("empty")
    } else if (c9[0] == "study") {
        document.getElementById("hour9").classList.add("correct")
    } else {
        document.getElementById("hour9").classList.add("wrong")
    }

    if (c10.length == 0) {
        document.getElementById("hour10").classList.add("empty")
    } else if (c10[0] == "study") {
        document.getElementById("hour10").classList.add("correct")
    } else {
        document.getElementById("hour10").classList.add("wrong")
    }

    if (c11.length == 0) {
        document.getElementById("hour11").classList.add("empty")
    } else if (c11[0] == "rest") {
        document.getElementById("hour11").classList.add("correct")
    } else {
        document.getElementById("hour11").classList.add("wrong")
    }

    if (c12.length == 0) {
        document.getElementById("hour12").classList.add("empty")
    } else if (c12[0] == "rest") {
        document.getElementById("hour12").classList.add("correct")
    } else {
        document.getElementById("hour12").classList.add("wrong")
    }

    if (c13.length == 0) {
        document.getElementById("hour13").classList.add("empty")
    } else if (c13[0] == "pray_day") {
        document.getElementById("hour13").classList.add("correct")
    } else {
        document.getElementById("hour13").classList.add("wrong")
    }

    if (c14.length == 0) {
        document.getElementById("hour14").classList.add("empty")
    } else if (c14[0] == "study") {
        document.getElementById("hour14").classList.add("correct")
    } else {
        document.getElementById("hour14").classList.add("wrong")
    }

    if (c15.length == 0) {
        document.getElementById("hour15").classList.add("empty")
    } else if (c15[0] == "study") {
        document.getElementById("hour15").classList.add("correct")
    } else {
        document.getElementById("hour15").classList.add("wrong")
    }

    if (c16.length == 0) {
        document.getElementById("hour16").classList.add("empty")
    } else if (c16[0] == "way_to_party") {
        document.getElementById("hour16").classList.add("correct")
    } else {
        document.getElementById("hour16").classList.add("wrong")
    }

    if (c17.length == 0) {
        document.getElementById("hour17").classList.add("empty")
    } else if (c17[0] == "party") {
        document.getElementById("hour17").classList.add("correct")
    } else {
        document.getElementById("hour17").classList.add("wrong")
    }

    if (c18.length == 0) {
        document.getElementById("hour18").classList.add("empty")
    } else if (c18[0] == "party") {
        document.getElementById("hour18").classList.add("correct")
    } else {
        document.getElementById("hour18").classList.add("wrong")
    }

    if (c19.length == 0) {
        document.getElementById("hour19").classList.add("empty")
    } else if (c19[0] == "party") {
        document.getElementById("hour19").classList.add("correct")
    } else {
        document.getElementById("hour19").classList.add("wrong")
    }

    if (c20.length == 0) {
        document.getElementById("hour20").classList.add("empty")
    } else if (c20[0] == "party") {
        document.getElementById("hour20").classList.add("correct")
    } else {
        document.getElementById("hour20").classList.add("wrong")
    }

    if (c21.length == 0) {
        document.getElementById("hour21").classList.add("empty")
    } else if (c21[0] == "way_to_home") {
        document.getElementById("hour21").classList.add("correct")
    } else {
        document.getElementById("hour21").classList.add("wrong")
    }

    if (c22.length == 0) {
        document.getElementById("hour22").classList.add("empty")
    } else if (c22[0] == "pray_night") {
        document.getElementById("hour22").classList.add("correct")
    } else {
        document.getElementById("hour22").classList.add("wrong")
    }

    if (c23.length == 0) {
        document.getElementById("hour23").classList.add("empty")
    } else if (c23[0] == "sleep") {
        document.getElementById("hour23").classList.add("correct")
    } else {
        document.getElementById("hour23").classList.add("wrong")
    }

    if (c24.length == 0) {
        document.getElementById("hour24").classList.add("empty")
    } else if (c24[0] == "sleep") {
        document.getElementById("hour24").classList.add("correct")
    } else {
        document.getElementById("hour24").classList.add("wrong")
    }
}

function erase_p18_q2() {
    document.getElementById("s6").classList = ''
    document.getElementById("s7").classList = ''
    document.getElementById("s8").classList = ''
    document.getElementById("s9").classList = ''
    document.getElementById("s10").classList = ''
    document.getElementById("s11").classList = ''
    document.getElementById("s12").classList = ''
    document.getElementById("s13").classList = ''
    document.getElementById("s14").classList = ''
    document.getElementById("s15").classList = ''
    document.getElementById("s16").classList = ''
    document.getElementById("s17").classList = ''
    document.getElementById("s18").classList = ''
    document.getElementById("s19").classList = ''
    document.getElementById("s20").classList = ''
    document.getElementById("s21").classList = ''
    document.getElementById("s22").classList = ''
    document.getElementById("s23").classList = ''
    document.getElementById("s24").classList = ''

    document.getElementById("hour6").classList = ''
    document.getElementById("hour7").classList = ''
    document.getElementById("hour8").classList = ''
    document.getElementById("hour9").classList = ''
    document.getElementById("hour10").classList = ''
    document.getElementById("hour11").classList = ''
    document.getElementById("hour12").classList = ''
    document.getElementById("hour13").classList = ''
    document.getElementById("hour14").classList = ''
    document.getElementById("hour15").classList = ''
    document.getElementById("hour16").classList = ''
    document.getElementById("hour17").classList = ''
    document.getElementById("hour18").classList = ''
    document.getElementById("hour19").classList = ''
    document.getElementById("hour20").classList = ''
    document.getElementById("hour21").classList = ''
    document.getElementById("hour22").classList = ''
    document.getElementById("hour23").classList = ''
    document.getElementById("hour24").classList = ''
}