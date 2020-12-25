const p2e = s => s.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
let cup1_flowers = 0;
let cup2_flowers = 0;
let cup3_flowers = 0;
let cup4_flowers = 0;

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter'){
        const pageNumber = parseInt(document.querySelector('.page-number').textContent);
        switch (pageNumber) {
            case 145:
                check145_1();
                check145_2();
                break;

            case 146:
                checkDivisions();
                checkRadioQuestions();
                checkCalculatorAnswers();
                checkDivisionCheckBoxes();
                break;

            case 147:
                checkP147Inputs();
                break;
        }

    }
});

function setElementAsCorrect(correct, element) {
    if (correct) { // correct answer
        element.classList.remove('wrong-ans');
        element.classList.add('correct-ans');
    } else { // false answer
        element.classList.remove('correct-ans');
        element.classList.add('wrong-ans');
    }
}

function check145_1() {
    inputBox1 = document.querySelector('#input_145_1_1');
    setElementAsCorrect(
        parseInt(inputBox1.value) === 4,
        inputBox1
    );
    inputBox2 = document.querySelector('#input_145_1_2');
    setElementAsCorrect(
        parseInt(inputBox2.value) === 1,
        inputBox2
    );
}

function check145_2() {
    inputBox1 = document.querySelector('#input_145_2_1');
    setElementAsCorrect(
        parseInt(inputBox1.value) === 4,
        inputBox1
    );
    inputBox2 = document.querySelector('#input_145_2_2');
    setElementAsCorrect(
        parseInt(inputBox2.value) === 1,
        inputBox2
    );
    check_cups();
}

function addFlower(cup_num) {

    switch (cup_num){
        case 1:
            if (cup1_flowers === 7 || cup1_flowers+cup2_flowers+cup3_flowers+cup4_flowers === 17){
                //fe'lan do nothing
            }else {
                cup1_flowers++;
                document.getElementById('cup-1').src = "assets/3rd/images/vafaii/".concat(cup1_flowers.toString()).concat("-flower.png");
            }
            break;
        case 2:
            if (cup2_flowers === 7|| cup1_flowers+cup2_flowers+cup3_flowers+cup4_flowers === 17){
                //fe'lan do nothing
            }else {
                cup2_flowers++;
                document.getElementById('cup-2').src = "assets/3rd/images/vafaii/".concat(cup2_flowers.toString()).concat("-flower.png");
            }
            break;
        case 3:
            if (cup3_flowers === 7|| cup1_flowers+cup2_flowers+cup3_flowers+cup4_flowers === 17){
                //fe'lan do nothing
            }else {
                cup3_flowers++;
                document.getElementById('cup-3').src = "assets/3rd/images/vafaii/".concat(cup3_flowers.toString()).concat("-flower.png");
            }
            break;
        case 4:
            if (cup4_flowers === 7|| cup1_flowers+cup2_flowers+cup3_flowers+cup4_flowers === 17){
                //fe'lan do nothing
            }else {
                cup4_flowers++;
                document.getElementById('cup-4').src = "assets/3rd/images/vafaii/".concat(cup4_flowers.toString()).concat("-flower.png");
            }
            break;
    }

}

function removeFlower(cup_num) {
    switch (cup_num){
        case 1:
            if (cup1_flowers === 0){
                //fe'lan do nothing
            }else {
                cup1_flowers--;
                document.getElementById('cup-1').src = "assets/3rd/images/vafaii/".concat(cup1_flowers.toString()).concat("-flower.png");
            }
            break;
        case 2:
            if (cup2_flowers === 0){
                //fe'lan do nothing
            }else {
                cup2_flowers--;
                document.getElementById('cup-2').src = "assets/3rd/images/vafaii/".concat(cup2_flowers.toString()).concat("-flower.png");
            }
            break;
        case 3:
            if (cup3_flowers === 0){
                //fe'lan do nothing
            }else {
                cup3_flowers--;
                document.getElementById('cup-3').src = "assets/3rd/images/vafaii/".concat(cup3_flowers.toString()).concat("-flower.png");
            }
            break;
        case 4:
            if (cup4_flowers === 0){
                //fe'lan do nothing
            }else {
                cup4_flowers--;
                document.getElementById('cup-4').src = "assets/3rd/images/vafaii/".concat(cup4_flowers.toString()).concat("-flower.png");
            }
            break;
    }}

function check_cups(){
    if (cup1_flowers === 0 && cup2_flowers === 0 && cup3_flowers === 0 && cup4_flowers === 0 ){
        document.getElementById("cups_result").textContent = "گلدونا نبايد خالي باشنا!" ;
        document.getElementById("cups_result").style.color = "#e28718"  ;
    }
    else if (cup1_flowers === 4 && cup2_flowers === 4 && cup3_flowers === 4 && cup4_flowers === 4 ){
        document.getElementById("cups_result").textContent = "آفرین" ;
        document.getElementById("cups_result").style.color = "green"  ;
    }else   {
        document.getElementById("cups_result").textContent = "بيشتر دقت كن!" ;
        document.getElementById("cups_result").style.color = "red"  ;
    }
}


function checkDivisions() {
    divisionBoxes = document.querySelectorAll('.divide');
    for (let index = 0; index < divisionBoxes.length; index++) {
        try {
            const divisionBox = divisionBoxes[index];
            const dividend = parseInt(p2e(divisionBox.querySelector('.divide-left-top').textContent.replace('-', '')));
            const divisor = parseInt(p2e(divisionBox.querySelector('.divide-right-top').textContent));
            const ans_remainder = dividend % divisor;
            const ans_quotient = Math.floor(dividend / divisor);
            const el_input_remainder = divisionBox.querySelector('.divide-remainder');
            const el_input_quotient = divisionBox.querySelector('.divide-quotient');
            setElementAsCorrect(
                parseInt(el_input_remainder.value) === ans_remainder,
                el_input_remainder
            );
            setElementAsCorrect(
                parseInt(el_input_quotient.value) === ans_quotient,
                el_input_quotient
            )
        } catch (e) {
            console.log(e);
        }
    }
}

function checkRadioQuestions() {
    const el_question_1 = document.querySelector('#q-radio-1');
    setElementAsCorrect(
        el_question_1.querySelector('.answer_yes').checked,
        el_question_1
    );
    const el_question_2 = document.querySelector('#q-radio-2');
    setElementAsCorrect(
        el_question_2.querySelector('.answer_yes').checked,
        el_question_2
    );
}

function checkCalculatorAnswers() {
    const el_input_1 = document.querySelector('#calculator-1-1');
    setElementAsCorrect(
        parseInt(el_input_1.value) === 24,
        el_input_1
    );

    const el_input_2 = document.querySelector('#calculator-1-2');
    setElementAsCorrect(
        parseInt(el_input_2.value) === 32,
        el_input_2
    );

    const el_input_3 = document.querySelector('#calculator-1-3');
    setElementAsCorrect(
        parseInt(el_input_3.value) === 43,
        el_input_3
    );
}

function checkDivisionCheckBoxes() {
    cb1 = document.querySelector('#cb_division1');
    setElementAsCorrect(cb1.checked === true, cb1);
    if (cb1.checked == true) {cb1.setAttribute("")}
    cb2 = document.querySelector('#cb_division2');
    setElementAsCorrect(cb2.checked === false, cb2);
    cb3 = document.querySelector('#cb_division3');
    setElementAsCorrect(cb3.checked === false, cb3);
    cb4 = document.querySelector('#cb_division4');
    setElementAsCorrect(cb4.checked === true, cb4);
}

function checkP147Inputs() {
    inputBoxes = document.querySelectorAll('.input-1');
    inputBoxes.forEach(inputBox => {
        const ans = parseInt(inputBox.id.replace('input_ans_', ''));
        setElementAsCorrect(
            parseInt(inputBox.value) === ans,
            inputBox
        );

    });
}

