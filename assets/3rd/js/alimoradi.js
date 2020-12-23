function correct_p18_q1() {
    var q1_1 = document.getElementById("p18_q1_1");
    var q1_2 = document.getElementById("p18_q1_2");
    var q1_3 = document.getElementById("p18_q1_3");
    var q1_4 = document.getElementById("p18_q1_4");
    var q1_5 = document.getElementById("p18_q1_5");
    var q1_6 = document.getElementById("p18_q1_6");

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


    if (q1_1.value.length == 0) {
        q1_1.classList.add("yellow_shadow");
    } else if (q1_1.value == '2') {
        q1_1.classList.add("green_shadow");
    } else {
        q1_1.classList.add("red_shadow");
    }

    if (q1_2.value.length == 0) {
        q1_2.classList.add("yellow_shadow");
    } else if (q1_2.value == '3') {
        q1_2.classList.add("green_shadow");
    } else {
        q1_2.classList.add("red_shadow");
    }

    if (q1_3.value.length == 0) {

        q1_3.classList.add("yellow_shadow");
    } else if (q1_3.value == '4') {
        q1_3.classList.add("green_shadow");
    } else {
        q1_3.classList.add("red_shadow");
    }

    if (q1_4.value.length == 0) {
        q1_4.classList.add("yellow_shadow");
    } else if (q1_4.value == '5') {
        q1_4.classList.add("green_shadow");
    } else {
        q1_4.classList.add("red_shadow");
    }

    if (q1_5.value.length == 0) {
        q1_5.classList.add("yellow_shadow");
    } else if (q1_5.value == '6') {
        q1_5.classList.add("green_shadow");
    } else {
        q1_5.classList.add("red_shadow");
    }

    if (q1_6.value.length == 0) {
        q1_6.classList.add("yellow_shadow");
    } else if (q1_6.value == '7') {
        q1_6.classList.add("green_shadow");
    } else {
        q1_6.classList.add("red_shadow");
    }

}

function correct_p18_q2() {
    var q2_1 = document.getElementById("p18_q2_1");
    var q2_2 = document.getElementById("p18_q2_2");
    var q2_3 = document.getElementById("p18_q2_3");
    var q2_4 = document.getElementById("p18_q2_4");
    var q2_5 = document.getElementById("p18_q2_5");
    var q2_6 = document.getElementById("p18_q2_6");

    q2_1.classList.remove("normal_shadow");
    q2_1.classList.remove("yellow_shadow");
    q2_1.classList.remove("red_shadow");
    q2_1.classList.remove("green_shadow");
    q2_2.classList.remove("normal_shadow");
    q2_2.classList.remove("yellow_shadow");
    q2_2.classList.remove("red_shadow");
    q2_2.classList.remove("green_shadow");
    q2_3.classList.remove("normal_shadow");
    q2_3.classList.remove("yellow_shadow");
    q2_3.classList.remove("red_shadow");
    q2_3.classList.remove("green_shadow");
    q2_4.classList.remove("normal_shadow");
    q2_4.classList.remove("yellow_shadow");
    q2_4.classList.remove("red_shadow");
    q2_4.classList.remove("green_shadow");
    q2_5.classList.remove("normal_shadow");
    q2_5.classList.remove("yellow_shadow");
    q2_5.classList.remove("red_shadow");
    q2_5.classList.remove("green_shadow");
    q2_6.classList.remove("normal_shadow");
    q2_6.classList.remove("yellow_shadow");
    q2_6.classList.remove("red_shadow");
    q2_6.classList.remove("green_shadow");


    if (q2_1.value.length == 0) {
        q2_1.classList.add("yellow_shadow");
    } else if (q1_1.value == '>') {
        q2_1.classList.add("green_shadow");
    } else {
        q2_1.classList.add("red_shadow");
    }

    if (q2_2.value.length == 0) {
        q2_2.classList.add("yellow_shadow");
    } else if (q2_2.value == '=') {
        q2_2.classList.add("green_shadow");
    } else {
        q2_2.classList.add("red_shadow");
    }

    if (q2_3.value.length == 0) {
        q2_3.classList.add("yellow_shadow");
    } else if (q1_3.value == '=') {
        q2_3.classList.add("green_shadow");
    } else {
        q2_3.classList.add("red_shadow");
    }

    if (q2_4.value.length == 0) {
        q2_4.classList.add("yellow_shadow");
    } else if (q2_4.value == '=') {
        q2_4.classList.add("green_shadow");
    } else {
        q2_4.classList.add("red_shadow");
    }

    if (q2_5.value.length == 0) {
        q2_5.classList.add("yellow_shadow");
    } else if (q2_5.value == '=') {
        q2_5.classList.add("green_shadow");
    } else {
        q2_5.classList.add("red_shadow");
    }

    if (q2_6.value.length == 0) {
        q2_6.classList.add("yellow_shadow");
    } else if (q2_6.value == '=') {
        q2_6.classList.add("green_shadow");
    } else {
        q2_6.classList.add("red_shadow");
    }

}

function correct_p18_q3() {
    var q3_1 = document.getElementById("p18_q3_1");
    var q3_2 = document.getElementById("p18_q3_2");
    var q3_3 = document.getElementById("p18_q3_3");
    var q3_4 = document.getElementById("p18_q3_4");
    var q3_5 = document.getElementById("p18_q3_5");
    var q3_6 = document.getElementById("p18_q3_6");
    var q3_7 = document.getElementById("p18_q3_7");
    var q3_8 = document.getElementById("p18_q3_8");
    var q3_9 = document.getElementById("p18_q3_9");
    var q3_10 = document.getElementById("p18_q3_10");
    var q3_11 = document.getElementById("p18_q3_11");
    var q3_12 = document.getElementById("p18_q3_12");

    q3_1.classList.remove("normal_shadow");
    q3_1.classList.remove("yellow_shadow");
    q3_1.classList.remove("red_shadow");
    q3_1.classList.remove("green_shadow");
    q3_2.classList.remove("normal_shadow");
    q3_2.classList.remove("yellow_shadow");
    q3_2.classList.remove("red_shadow");
    q3_2.classList.remove("green_shadow");
    q3_3.classList.remove("normal_shadow");
    q3_3.classList.remove("yellow_shadow");
    q3_3.classList.remove("red_shadow");
    q3_3.classList.remove("green_shadow");
    q3_4.classList.remove("normal_shadow");
    q3_4.classList.remove("yellow_shadow");
    q3_4.classList.remove("red_shadow");
    q3_4.classList.remove("green_shadow");
    q3_5.classList.remove("normal_shadow");
    q3_5.classList.remove("yellow_shadow");
    q3_5.classList.remove("red_shadow");
    q3_5.classList.remove("green_shadow");
    q3_6.classList.remove("normal_shadow");
    q3_6.classList.remove("yellow_shadow");
    q3_6.classList.remove("red_shadow");
    q3_6.classList.remove("green_shadow");
    q3_7.classList.remove("normal_shadow");
    q3_7.classList.remove("yellow_shadow");
    q3_7.classList.remove("red_shadow");
    q3_7.classList.remove("green_shadow");
    q3_8.classList.remove("normal_shadow");
    q3_8.classList.remove("yellow_shadow");
    q3_8.classList.remove("red_shadow");
    q3_8.classList.remove("green_shadow");
    q3_9.classList.remove("normal_shadow");
    q3_9.classList.remove("yellow_shadow");
    q3_9.classList.remove("red_shadow");
    q3_9.classList.remove("green_shadow");
    q3_10.classList.remove("normal_shadow");
    q3_10.classList.remove("yellow_shadow");
    q3_10.classList.remove("red_shadow");
    q3_10.classList.remove("green_shadow");
    q3_11.classList.remove("normal_shadow");
    q3_11.classList.remove("yellow_shadow");
    q3_11.classList.remove("red_shadow");
    q3_11.classList.remove("green_shadow");
    q3_12.classList.remove("normal_shadow");
    q3_12.classList.remove("yellow_shadow");
    q3_12.classList.remove("red_shadow");
    q3_12.classList.remove("green_shadow");

    if (q3_1.value.length == 0) {
        q3_1.classList.add("yellow_shadow");
    } else if (q3_1.value == '2') {
        q3_1.classList.add("green_shadow");
    } else {
        q3_1.classList.add("red_shadow");
    }

    if (q3_2.value.length == 0) {
        q3_2.classList.add("yellow_shadow");
    } else if (q3_2.value == '3') {
        q3_2.classList.add("green_shadow");
    } else {
        q3_2.classList.add("red_shadow");
    }

    if (q3_3.value.length == 0) {
        q3_3.classList.add("yellow_shadow");
    } else if (q3_3.value == '4') {
        q3_3.classList.add("green_shadow");
    } else {
        q3_3.classList.add("red_shadow");
    }

    if (q3_4.value.length == 0) {
        q3_4.classList.add("yellow_shadow");
    } else if (q3_4.value == '5') {
        q3_4.classList.add("green_shadow");
    } else {
        q3_4.classList.add("red_shadow");
    }

    if (q3_5.value.length == 0) {
        q3_5.classList.add("yellow_shadow");
    } else if (q3_5.value == '6') {
        q3_5.classList.add("green_shadow");
    } else {
        q3_5.classList.add("red_shadow");
    }

    if (q3_6.value.length == 0) {
        q3_6.classList.add("yellow_shadow");
    } else if (q3_6.value == '7') {
        q3_6.classList.add("green_shadow");
    } else {
        q3_6.classList.add("red_shadow");
    }

    if (q3_7.value.length == 0) {
        q3_7.classList.add("yellow_shadow");
    } else if (q3_7.value == '5') {
        q3_7.classList.add("green_shadow");
    } else {
        q3_7.classList.add("red_shadow");
    }

    if (q3_8.value.length == 0) {
        q3_8.classList.add("yellow_shadow");
    } else if (q3_8.value == '6') {
        q3_8.classList.add("green_shadow");
    } else {
        q3_8.classList.add("red_shadow");
    }

    if (q3_9.value.length == 0) {
        q3_9.classList.add("yellow_shadow");
    } else if (q3_9.value == '7') {
        q3_9.classList.add("green_shadow");
    } else {
        q3_9.classList.add("red_shadow");
    }

    if (q3_10.value.length == 0) {
        q3_10.classList.add("yellow_shadow");
    } else if (q3_10.value == '5') {
        q3_10.classList.add("green_shadow");
    } else {
        q3_10.classList.add("red_shadow");
    }

    if (q3_11.value.length == 0) {
        q3_11.classList.add("yellow_shadow");
    } else if (q3_11.value == '6') {
        q3_11.classList.add("green_shadow");
    } else {
        q3_11.classList.add("red_shadow");
    }

    if (q3_12.value.length == 0) {
        q3_12.classList.add("yellow_shadow");
    } else if (q3_12.value == '7') {
        q3_12.classList.add("green_shadow");
    } else {
        q3_12.classList.add("red_shadow");
    }
}

function correct_p18_q5() {
    var q5_1 = document.getElementById("p18_q5_1");
    var q5_2 = document.getElementById("p18_q5_2");
    var q5_3 = document.getElementById("p18_q5_3");
    var q5_4 = document.getElementById("p18_q5_4");

    q5_1.classList.remove("normal_shadow");
    q5_1.classList.remove("yellow_shadow");
    q5_1.classList.remove("red_shadow");
    q5_1.classList.remove("green_shadow");
    q5_2.classList.remove("normal_shadow");
    q5_2.classList.remove("yellow_shadow");
    q5_2.classList.remove("red_shadow");
    q5_2.classList.remove("green_shadow");
    q5_3.classList.remove("normal_shadow");
    q5_3.classList.remove("yellow_shadow");
    q5_3.classList.remove("red_shadow");
    q5_3.classList.remove("green_shadow");
    q5_4.classList.remove("normal_shadow");
    q5_4.classList.remove("yellow_shadow");
    q5_4.classList.remove("red_shadow");
    q5_4.classList.remove("green_shadow");

    if (q5_1.value.length == 0) {
        q5_1.classList.add("yellow_shadow");
    } else if (q5_1.value == '2') {
        q5_1.classList.add("green_shadow");
    } else {
        q5_1.classList.add("red_shadow");
    }

    if (q5_2.value.length == 0) {
        q5_2.classList.add("yellow_shadow");
    } else if (q5_2.value == '3') {
        q5_2.classList.add("green_shadow");
    } else {
        q5_2.classList.add("red_shadow");
    }

    if (q5_3.value.length == 0) {
        q5_3.classList.add("yellow_shadow");
    } else if (q5_3.value == '4') {
        q5_3.classList.add("green_shadow");
    } else {
        q5_3.classList.add("red_shadow");
    }

    if (q5_4.value.length == 0) {
        q5_4.classList.add("yellow_shadow");
    } else if (q5_4.value == '5') {
        q5_4.classList.add("green_shadow");
    } else {
        q5_4.classList.add("red_shadow");
    }

}

function correct_p18_q4() {
    var q4_1 = document.getElementById("p18_q4_1");
    var q4_2 = document.getElementById("p18_q4_2");
    var q4_3 = document.getElementById("p18_q4_3");
    var q4_4 = document.getElementById("p18_q4_4");
    var q4_5 = document.getElementById("p18_q4_5");
    var q4_6 = document.getElementById("p18_q4_6");

    q4_1.classList.remove("normal_shadow");
    q4_1.classList.remove("yellow_shadow");
    q4_1.classList.remove("red_shadow");
    q4_1.classList.remove("green_shadow");
    q4_2.classList.remove("normal_shadow");
    q4_2.classList.remove("yellow_shadow");
    q4_2.classList.remove("red_shadow");
    q4_2.classList.remove("green_shadow");
    q4_3.classList.remove("normal_shadow");
    q4_3.classList.remove("yellow_shadow");
    q4_3.classList.remove("red_shadow");
    q4_3.classList.remove("green_shadow");
    q4_4.classList.remove("normal_shadow");
    q4_4.classList.remove("yellow_shadow");
    q4_4.classList.remove("red_shadow");
    q4_4.classList.remove("green_shadow");
    q4_5.classList.remove("normal_shadow");
    q4_5.classList.remove("yellow_shadow");
    q4_5.classList.remove("red_shadow");
    q4_5.classList.remove("green_shadow");
    q4_6.classList.remove("normal_shadow");
    q4_6.classList.remove("yellow_shadow");
    q4_6.classList.remove("red_shadow");
    q4_6.classList.remove("green_shadow");


    if (q4_1.value.length == 0) {
        q4_1.classList.add("yellow_shadow");
    } else if (q4_1.value == '2') {
        q4_1.classList.add("green_shadow");
    } else {
        q4_1.classList.add("red_shadow");
    }

    if (q4_2.value.length == 0) {
        q4_2.classList.add("yellow_shadow");
    } else if (q4_2.value == '3') {
        q4_2.classList.add("green_shadow");
    } else {
        q4_2.classList.add("red_shadow");
    }

    if (q4_3.value.length == 0) {
        q4_3.classList.add("yellow_shadow");
    } else if (q4_3.value == '4') {
        q4_3.classList.add("green_shadow");
    } else {
        q4_3.classList.add("red_shadow");
    }

    if (q4_4.value.length == 0) {
        q4_4.classList.add("yellow_shadow");
    } else if (q4_4.value == '5') {
        q4_4.classList.add("green_shadow");
    } else {
        q4_4.classList.add("red_shadow");
    }

    if (q4_5.value.length == 0) {
        q4_5.classList.add("yellow_shadow");
    } else if (q4_5.value == '6') {
        q4_5.classList.add("green_shadow");
    } else {
        q4_5.classList.add("red_shadow");
    }

    if (q4_6.value.length == 0) {
        q4_6.classList.add("yellow_shadow");
    } else if (q4_6.value == '7') {
        q4_6.classList.add("green_shadow");
    } else {
        q4_6.classList.add("red_shadow");
    }

}

// pagination
function getCurrentPageFromURL() {
    /*
    This function extracts page number from url
    */
    let numberPattern = /\d+/g;
    let url_numbers = window.location.href.match(numberPattern);
    return parseInt(url_numbers[url_numbers.length - 1])
}
let current_page = getCurrentPageFromURL()
console.log("current page : " + current_page)

function prevPage() {
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage() {
    current_page++;
    changePage(current_page);
}

function changePage(page) {

    window.location.href = `./book_3_${page}.html`;

}

function loadPageChanger() {
    document.querySelector(".page-number input").value = current_page
}


document.addEventListener("DOMContentLoaded", function(event) {
    const input = document.querySelector(".page-number input")
    input.addEventListener('keypress', changePageOnEnter);

    function changePageOnEnter(e) {
        if (e.code === "Enter") {
            changePage(input.value)
        }
    }
    document.querySelector(".prev-page,.prev").addEventListener("click", prevPage);
    document.querySelector(".next-page,.next").addEventListener("click", nextPage);

    loadPageChanger();
});

function submitSelect6() {
    select = document.getElementById("s6")
    select.className = '';
    var options = select.options;
    var id = options[options.selectedIndex].id;
    select.classList.add(id);
}

function submitSelect7() {
    select = document.getElementById("s7")
    select.className = '';
    var options = select.options;
    var id = options[options.selectedIndex].id;
    select.classList.add(id);
}

function submitSelect8() {
    select = document.getElementById("s8")
    select.className = '';
    var options = select.options;
    var id = options[options.selectedIndex].id;
    select.classList.add(id);
}

function submitSelect9() {
    select = document.getElementById("s9")
    select.className = '';
    var options = select.options;
    var id = options[options.selectedIndex].id;
    select.classList.add(id);
}

function submitSelect10() {
    select = document.getElementById("s10")
    select.className = '';
    var options = select.options;
    var id = options[options.selectedIndex].id;
    select.classList.add(id);
}

function submitSelect11() {
    select = document.getElementById("s11")
    select.className = '';
    var options = select.options;
    var id = options[options.selectedIndex].id;
    select.classList.add(id);
}

function submitSelect12() {
    select = document.getElementById("s12")
    select.className = '';
    var options = select.options;
    var id = options[options.selectedIndex].id;
    select.classList.add(id);
}

function submitSelect13() {
    select = document.getElementById("s13")
    select.className = '';
    var options = select.options;
    var id = options[options.selectedIndex].id;
    select.classList.add(id);
}

function submitSelect14() {
    select = document.getElementById("s14")
    select.className = '';
    var options = select.options;
    var id = options[options.selectedIndex].id;
    select.classList.add(id);
}

function submitSelect15() {
    select = document.getElementById("s15")
    select.className = '';
    var options = select.options;
    var id = options[options.selectedIndex].id;
    select.classList.add(id);
}

function submitSelect16() {
    select = document.getElementById("s16")
    select.className = '';
    var options = select.options;
    var id = options[options.selectedIndex].id;
    select.classList.add(id);
}

function submitSelect17() {
    select = document.getElementById("s17")
    select.className = '';
    var options = select.options;
    var id = options[options.selectedIndex].id;
    select.classList.add(id);
}

function submitSelect18() {
    select = document.getElementById("s18")
    select.className = '';
    var options = select.options;
    var id = options[options.selectedIndex].id;
    select.classList.add(id);
}

function submitSelect19() {
    select = document.getElementById("s19")
    select.className = '';
    var options = select.options;
    var id = options[options.selectedIndex].id;
    select.classList.add(id);
}

function submitSelect20() {
    select = document.getElementById("s20")
    select.className = '';
    var options = select.options;
    var id = options[options.selectedIndex].id;
    select.classList.add(id);
}

function submitSelect21() {
    select = document.getElementById("s21")
    select.className = '';
    var options = select.options;
    var id = options[options.selectedIndex].id;
    select.classList.add(id);
}

function submitSelect22() {
    select = document.getElementById("s22")
    select.className = '';
    var options = select.options;
    var id = options[options.selectedIndex].id;
    select.classList.add(id);
}

function submitSelect23() {
    select = document.getElementById("s23")
    select.className = '';
    var options = select.options;
    var id = options[options.selectedIndex].id;
    select.classList.add(id);
}

function submitSelect24() {
    select = document.getElementById("s24")
    select.className = '';
    var options = select.options;
    var id = options[options.selectedIndex].id;
    select.classList.add(id);
}