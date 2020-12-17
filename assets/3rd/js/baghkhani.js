function getValue(i, x) {
    answers = [28, 38, 1, 2, 3];
    var obj = document.getElementById(x)
    if (obj.value == answers[i]) {
        obj.style.backgroundColor = "#3b9e3a";
    } else if (obj.value != "") {
        obj.style.backgroundColor = "#d35d6e";
        // alert("دوباره تلاش کن:(");
    }


}