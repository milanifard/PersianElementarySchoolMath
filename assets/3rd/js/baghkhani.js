function getValue(i, x) {
    answers = [56, 38, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 16, 27, 28, 22, 20, 40];
    var obj = document.getElementById(x)
    obj.classList.remove('error');
    obj.classList.remove('correct');
    if (obj.value == answers[i]) {
        obj.style.backgroundColor = "#3b9e3a";
        obj.classList.add('correct');

    } else if (obj.value != "") {

        obj.classList.add('error');
        obj.style.backgroundColor = "#d35d6e";
        // alert("دوباره تلاش کن:(");
    }


}

function getMultiValue(j, x) {

    var obj = document.getElementById(x)
    obj.classList.remove('error');
    obj.classList.remove('correct');
    if (j == 0) {
        if ((obj.value == 3) | (obj.value == 4) | (obj.value == 6)) {
            obj.style.backgroundColor = "#3b9e3a";
            obj.classList.add('correct');

        } else if (obj.value != "") {

            obj.classList.add('error');
            obj.style.backgroundColor = "#d35d6e";
            // alert("دوباره تلاش کن:(");
        }
    }

    if (j == 1) {
        if ((obj.value == 1) | (obj.value == 5)) {
            obj.style.backgroundColor = "#3b9e3a";
            obj.classList.add('correct');

        } else if (obj.value != "") {

            obj.classList.add('error');
            obj.style.backgroundColor = "#d35d6e";
            // alert("دوباره تلاش کن:(");
        }
    }
    if (j == 2) {
        if ((obj.value == 9)) {
            obj.style.backgroundColor = "#3b9e3a";
            obj.classList.add('correct');

        } else if (obj.value != "") {

            obj.classList.add('error');
            obj.style.backgroundColor = "#d35d6e";
            // alert("دوباره تلاش کن:(");
        }
    }
}

function p20answerQ1(i) {

    if (i == 0) {
        var obj = document.getElementById("label1");
        obj.style.color = "#3b9e3a";
        obj.style.boxShadow = "4px 4px 10px #3b9e3a";
        var obj = document.getElementById("label2");
        obj.style.color = "#000000";
        obj.style.boxShadow = "4px 4px 10px #000000";
        var obj = document.getElementById("label3");
        obj.style.color = "#000000";
        obj.style.boxShadow = "4px 4px 10px #000000";

    } else if (i == 1) {
        var obj = document.getElementById("label2");

        obj.style.color = "#d35d6e";
        obj.style.boxShadow = "4px 4px 10px #d35d6e";
        var obj = document.getElementById("label1");
        obj.style.color = "#000000";
        obj.style.boxShadow = "4px 4px 10px #000000";
        var obj = document.getElementById("label3");
        obj.style.color = "#000000";
        obj.style.boxShadow = "4px 4px 10px #000000";
    } else if (i == 2) {
        var obj = document.getElementById("label3");
        obj.style.color = "#d35d6e";
        obj.style.boxShadow = "4px 4px 10px #d35d6e";

        var obj = document.getElementById("label1");
        obj.style.color = "#000000";
        obj.style.boxShadow = "4px 4px 10px #000000";
        var obj = document.getElementById("label2");
        obj.style.color = "#000000";
        obj.style.boxShadow = "4px 4px 10px #000000";

    }
}

function p21answerQ2(i) {

    if (i == 0) {
        var obj = document.getElementById("label5");
        obj.style.color = "#d35d6e";
        obj.style.boxShadow = "4px 4px 10px #d35d6e";
        var obj = document.getElementById("label6");
        obj.style.color = "#000000";
        obj.style.boxShadow = "4px 4px 10px #000000";


    } else if (i == 1) {
        var obj = document.getElementById("label6");

        obj.style.color = "#3b9e3a";
        obj.style.boxShadow = "4px 4px 10px #3b9e3a";
        var obj = document.getElementById("label5");
        obj.style.color = "#000000";
        obj.style.boxShadow = "4px 4px 10px #000000";

    } else if (i == 2) {
        var obj = document.getElementById("label7");

        obj.style.color = "#3b9e3a";
        obj.style.boxShadow = "4px 4px 10px #3b9e3a";
        var obj = document.getElementById("label8");
        obj.style.color = "#000000";
        obj.style.boxShadow = "4px 4px 10px #000000";

    } else if (i == 3) {
        var obj = document.getElementById("label8");

        obj.style.color = "#d35d6e";
        obj.style.boxShadow = "4px 4px 10px #d35d6e";
        var obj = document.getElementById("label7");
        obj.style.color = "#000000";
        obj.style.boxShadow = "4px 4px 10px #000000";

    } else if (i == 4) {
        var obj = document.getElementById("label9");

        obj.style.color = "#3b9e3a";
        obj.style.boxShadow = "4px 4px 10px #3b9e3a";
        var obj = document.getElementById("label10");
        obj.style.color = "#000000";
        obj.style.boxShadow = "4px 4px 10px #000000";

    } else if (i == 5) {
        var obj = document.getElementById("label10");

        obj.style.color = "#d35d6e";
        obj.style.boxShadow = "4px 4px 10px #d35d6e";
        var obj = document.getElementById("label9");
        obj.style.color = "#000000";
        obj.style.boxShadow = "4px 4px 10px #000000";

    } else if (i == 6) {
        var obj = document.getElementById("label11");

        obj.style.color = "#d35d6e";
        obj.style.boxShadow = "4px 4px 10px #d35d6e";
        var obj = document.getElementById("label2");
        obj.style.color = "#000000";
        obj.style.boxShadow = "4px 4px 10px #000000";

    } else if (i == 7) {
        var obj = document.getElementById("label12");

        obj.style.color = "#3b9e3a";
        obj.style.boxShadow = "4px 4px 10px #3b9e3a";
        var obj = document.getElementById("label11");
        obj.style.color = "#000000";
        obj.style.boxShadow = "4px 4px 10px #000000";

    } else if (i == 8) {
        var obj = document.getElementById("label13");

        obj.style.color = "#3b9e3a";
        obj.style.boxShadow = "4px 4px 10px #3b9e3a";
        var obj = document.getElementById("label14");
        obj.style.color = "#000000";
        obj.style.boxShadow = "4px 4px 10px #000000";

    } else if (i == 9) {
        var obj = document.getElementById("label14");

        obj.style.color = "#d35d6e";
        obj.style.boxShadow = "4px 4px 10px #d35d6e";
        var obj = document.getElementById("label13");
        obj.style.color = "#000000";
        obj.style.boxShadow = "4px 4px 10px #000000";

    } else if (i == 10) {
        var obj = document.getElementById("label15");

        obj.style.color = "#d35d6e";
        obj.style.boxShadow = "4px 4px 10px #d35d6e";
        var obj = document.getElementById("label16");
        obj.style.color = "#000000";
        obj.style.boxShadow = "4px 4px 10px #000000";

    } else if (i == 11) {
        var obj = document.getElementById("label16");

        obj.style.color = "#3b9e3a";
        obj.style.boxShadow = "4px 4px 10px #3b9e3a";
        var obj = document.getElementById("label15");
        obj.style.color = "#000000";
        obj.style.boxShadow = "4px 4px 10px #000000";

    } else if (i == 12) {
        var obj = document.getElementById("label17");

        obj.style.color = "#3b9e3a";
        obj.style.boxShadow = "4px 4px 10px #3b9e3a";
        var obj = document.getElementById("label18");
        obj.style.color = "#000000";
        obj.style.boxShadow = "4px 4px 10px #000000";

    } else if (i == 13) {
        var obj = document.getElementById("label18");

        obj.style.color = "#d35d6e";
        obj.style.boxShadow = "4px 4px 10px #d35d6e";
        var obj = document.getElementById("label17");
        obj.style.color = "#000000";
        obj.style.boxShadow = "4px 4px 10px #000000";

    } else if (i == 14) {
        var obj = document.getElementById("label19");

        obj.style.color = "#d35d6e";
        obj.style.boxShadow = "4px 4px 10px #d35d6e";
        var obj = document.getElementById("label20");
        obj.style.color = "#000000";
        obj.style.boxShadow = "4px 4px 10px #000000";

    } else if (i == 15) {
        var obj = document.getElementById("label20");

        obj.style.color = "#3b9e3a";
        obj.style.boxShadow = "4px 4px 10px #3b9e3a";
        var obj = document.getElementById("label19");
        obj.style.color = "#000000";
        obj.style.boxShadow = "4px 4px 10px #000000";

    }


}

function p19answerQ2(i) {
    if (i == 0) {
        var obj = document.getElementById("labeltagharon");

        obj.style.color = "#3b9e3a";
        obj.style.boxShadow = "4px 4px 10px #3b9e3a";
        var obj = document.getElementById("labeltagharon1");
        obj.style.color = "#000000";
        obj.style.boxShadow = "4px 4px 10px #000000";

    } else if (i == 1) {
        var obj = document.getElementById("labeltagharon1");

        obj.style.color = "#d35d6e";
        obj.style.boxShadow = "4px 4px 10px #d35d6e";
        var obj = document.getElementById("labeltagharon");
        obj.style.color = "#000000";
        obj.style.boxShadow = "4px 4px 10px #000000";

    }
}

function guess_check(o) {
    if (o == 0) {
        var obj = document.getElementById("labelguess1");

        obj.style.color = "#3b9e3a";
        obj.style.boxShadow = "4px 4px 10px #3b9e3a";
        var obj = document.getElementById("labelguess2");
        obj.style.color = "#000000";
        obj.style.boxShadow = "4px 4px 10px #000000";

    } else if (o == 1) {
        var obj = document.getElementById("labelguess2");

        obj.style.color = "#d35d6e";
        obj.style.boxShadow = "4px 4px 10px #d35d6e";
        var obj = document.getElementById("labelguess1");
        obj.style.color = "#000000";
        obj.style.boxShadow = "4px 4px 10px #000000";

    } else if (o == 2) {
        var obj = document.getElementById("labelguess5");

        obj.style.color = "#d35d6e";
        obj.style.boxShadow = "4px 4px 10px #d35d6e";
        var obj = document.getElementById("labelguess6");
        obj.style.color = "#000000";
        obj.style.boxShadow = "4px 4px 10px #000000";

    } else if (o == 3) {
        var obj = document.getElementById("labelguess6");

        obj.style.color = "#3b9e3a";
        obj.style.boxShadow = "4px 4px 10px #3b9e3a";
        var obj = document.getElementById("labelguess5");
        obj.style.color = "#000000";
        obj.style.boxShadow = "4px 4px 10px #000000";

    } else if (o == 4) {
        var obj = document.getElementById("labelguess7");

        obj.style.color = "#3b9e3a";
        obj.style.boxShadow = "4px 4px 10px #3b9e3a";
        var obj = document.getElementById("labelguess8");
        obj.style.color = "#000000";
        obj.style.boxShadow = "4px 4px 10px #000000";

    } else if (o == 5) {
        var obj = document.getElementById("labelguess8");

        obj.style.color = "#d35d6e";
        obj.style.boxShadow = "4px 4px 10px #d35d6e";
        var obj = document.getElementById("labelguess7");
        obj.style.color = "#000000";
        obj.style.boxShadow = "4px 4px 10px #000000";

    }
}