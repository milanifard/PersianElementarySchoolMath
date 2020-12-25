// Page 80 - Question 1
function checkQ1Answer() {
    let ansField = document.getElementById("p80-q1-answer");
    let ans = ansField.value;
    let response = document.getElementById("p80-q1-response");
    if (ans === "36" || ans === "۳۶") {
        response.textContent = "آفرین، درست جواب دادی!";
        response.style.color = '#005301';
        ansField.style.backgroundColor = '#c9ff63';
    } else {
        response.textContent = "اشتباه بود، بیشتر دقت کن!";
        response.style.color = '#ff0000';
        ansField.style.backgroundColor = '#ff8c8c';
    }
}

// Page 80 - Question 2
function checkQ2Answer() {
    let ansField = document.getElementById("p80-q2-answer");
    let ans = ansField.value;
    let response = document.getElementById("p80-q2-response");
    if (ans === "18" || ans === "۱۸") {
        response.textContent = "آفرین، درست جواب دادی!";
        response.style.color = '#005301';
        ansField.style.backgroundColor = '#c9ff63';
    } else {
        response.textContent = "اشتباه بود، بیشتر دقت کن!";
        response.style.color = '#ff0000';
        ansField.style.backgroundColor = '#ff8c8c';
    }
}

// Page 80 - Question 3
function checkQ3Answer() {
    let ansField = document.getElementById("p80-q3-answer");
    let ans = ansField.value;
    let response = document.getElementById("p80-q3-response");
    if (ans === "25" || ans === "۲۵") {
        response.textContent = "آفرین، درست جواب دادی!";
        response.style.color = '#005301';
        ansField.style.backgroundColor = '#c9ff63';
    } else {
        response.textContent = "اشتباه بود، بیشتر دقت کن!";
        response.style.color = '#ff0000';
        ansField.style.backgroundColor = '#ff8c8c';
    }
}

// Page 81
function show(id) {
    let item = document.getElementById(id);
    console.log(item);
    item.style.visibility = 'visible';
}

function checkAnswer(id, answer) {
    let box = document.getElementById(id);
    let userAns = box.value;
    if (userAns === answer) {
        box.style.backgroundColor = '#c9ff63';
    } else {
        box.style.backgroundColor = '#ff8c8c';
    }
}

