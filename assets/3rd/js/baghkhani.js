function getValue(i, x) {
    answers = [28, 38, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11];
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