
var num = 0, num2 = 0, num3 = 0;
var elements = [], elements2 = [], elements3 = [];
var correct_elements = ["kebrit_1_2", "kebrit_1_9", "kebrit_1_11", "kebrit_1_12", "kebrit_1_13", "kebrit_1_15"];
var correct_elements_q2_1 = ["kebrit_2_1", "kebrit_2_2", "kebrit_2_9", "kebrit_2_13", "kebrit_2_14"];
var correct_elements_q2_2 = ["kebrit_2_10", "kebrit_2_16", "kebrit_2_9", "kebrit_2_13", "kebrit_2_14"];
var correct_elements_q2_3 = ["kebrit_2_1", "kebrit_2_2", "kebrit_2_8", "kebrit_2_11", "kebrit_2_12"];
var correct_elements_q2_4 = ["kebrit_2_10", "kebrit_2_16", "kebrit_2_8", "kebrit_2_11", "kebrit_2_12"];
var correct_elements_q2_5 = ["kebrit_2_3", "kebrit_2_5", "kebrit_2_6", "kebrit_2_10", "kebrit_2_16"];
var correct_elements_q2_6 = ["kebrit_2_3", "kebrit_2_5", "kebrit_2_6", "kebrit_2_15", "kebrit_2_18"];
var correct_elements_q3 = ["kebrit_3_12", "kebrit_3_16", "kebrit_3_17"];

function $(id) {return document.getElementById(id);}
    var a, b, c, d;
    function test_q1(){
    a = $("q1_in1");
    b = $("plus_or_minus");
    c = $("q1_in2");
    d = $("q1_in3");

    var total = 0;

    if(a.value === "27") {
    a.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    a.style.backgroundColor = "red";

    if(b.value === "+") {
    b.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    b.style.backgroundColor = "red";

    if(c.value === "120") {
    c.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    c.style.backgroundColor = "red";

    if(d.value === "147") {
    d.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    d.style.backgroundColor = "red";

    if(total === 4){
    $("q1_result").innerHTML = "آفرین";
}
    else
    $("q1_result").innerHTML = "دقت کن";

}

function test_q2(){
    var second = $("q2_second_grade");
    var sixth = $("q2_sixth_grade");
    var total = 0;

    if(second.value === "3000") {
    second.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    second.style.backgroundColor = "red";

    if(sixth.value === "2000") {
    sixth.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    sixth.style.backgroundColor = "red";

    if(total === 2){
    $("q2_result").innerHTML = "آفرین";
}
    else
    $("q2_result").innerHTML = "دقت کن";

}

    function test_q3(){
    var toman = $("q3_in1");
    var rial = $("q3_in2");
    var total = 0;

    if(toman.value === "700") {
    toman.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    toman.style.backgroundColor = "red";

    if(rial.value === "8000") {
    rial.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    rial.style.backgroundColor = "red";

    if(total === 2){
    $("q3_result").innerHTML = "آفرین";
}
    else
    $("q3_result").innerHTML = "دقت کن";
}

function test_q4(){
    var a = $("q4_in1");
    var b = $("q4_in2");
    var c = $("q4_in3");
    var total = 0;

    if(a.value === "desk") {
    a.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    a.style.backgroundColor = "red";

    if(b.value === "heater") {
    b.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    b.style.backgroundColor = "red";

    if(c.value === "lcd") {
    c.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    c.style.backgroundColor = "red";

    if(total === 3){
    $("q4_result").innerHTML = "آفرین";
}
    else
    $("q4_result").innerHTML = "دقت کن";
}

function test_q5(){
    var a = $("q5_in1");
    var b = $("q5_in2");
    var c = $("q5_in3");
    var total = 0;

    if(a.value === "laptop") {
    a.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    a.style.backgroundColor = "red";

    if(b.value === "can") {
    b.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    b.style.backgroundColor = "red";

    if(c.value === "pan") {
    c.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    c.style.backgroundColor = "red";

    if(total === 3){
    $("q5_result").innerHTML = "آفرین";
}
    else
    $("q5_result").innerHTML = "دقت کن";
}

function test_q6(){
    var a = $("q6_in1");
    var b = $("q6_in2");
    var c = $("q6_in3");
    var d = $("q6_in4");
    var total = 0;

    if(a.value === "mm") {
    a.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    a.style.backgroundColor = "red";

    if(b.value === "cm") {
    b.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    b.style.backgroundColor = "red";

    if(c.value === "cm") {
    c.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    c.style.backgroundColor = "red";

    if(d.value === "m") {
    d.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    d.style.backgroundColor = "red";

    if(total === 4){
    $("q6_result").innerHTML = "آفرین";
}
    else
    $("q6_result").innerHTML = "دقت کن";
}


function test_q7(){
    var a = $("q7_in1");
    var b = $("q7_in2");
    var c = $("q7_in3");
    var d = $("q7_in4");
    var e = $("q7_in5");
    var total = 0;

    if(a.value === "g") {
    a.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    a.style.backgroundColor = "red";

    if(b.value === "kg") {
    b.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    b.style.backgroundColor = "red";

    if(c.value === "g") {
    c.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    c.style.backgroundColor = "red";

    if(d.value === "kg") {
    d.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    d.style.backgroundColor = "red";

    if(e.value === "kg") {
    e.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    e.style.backgroundColor = "red";

    if(total === 5){
    $("q7_result").innerHTML = "آفرین";
}
    else
    $("q7_result").innerHTML = "دقت کن";
}

function test_q8(){
    var one = $("q8_in3");
    var two = $("q8_in2");
    var three = $("q8_in1");
    var four = $("q8_in4");
    var five = $("q8_in5");
    var six = $("q8_in6");
    var seven = $("q8_in7");
    var eight = $("q8_in9");
    var nine = $("q8_in8");

    var total = 0;

    if(one.value === "3462") {
    one.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    one.style.backgroundColor = "red";

    if(two.value === "3562") {
    two.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    two.style.backgroundColor = "red";

    if(three.value === "4562") {
    three.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    three.style.backgroundColor = "red";

    if(four.value === "4552") {
    four.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    four.style.backgroundColor = "red";

    if(five.value === "4652") {
    five.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    five.style.backgroundColor = "red";

    if(six.value === "3652") {
    six.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    six.style.backgroundColor = "red";

    if(seven.value === "3552") {
    seven.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    seven.style.backgroundColor = "red";

    if(eight.value === "4552") {
    eight.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    eight.style.backgroundColor = "red";

    if(nine.value === "4562") {
    nine.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    nine.style.backgroundColor = "red";

    if(total === 9){
    $("q8_result").innerHTML = "آفرین";
}
    else
    $("q8_result").innerHTML = "دقت کن";

}

function test_q9(){

    var one = $("q9_in1");
    var two = $("q9_in2");
    var three = $("q9_in3");
    var four = $("q9_in4");

    var total = 0;

    if(one.value === "100") {
    one.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    one.style.backgroundColor = "red";

    if(two.value === "9999") {
    two.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    two.style.backgroundColor = "red";

    if(three.value === "123") {
    three.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    three.style.backgroundColor = "red";

    if(four.value === "9876") {
    four.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    four.style.backgroundColor = "red";

    if(total === 4){
    $("q9_result").innerHTML = "آفرین";
}
    else
    $("q9_result").innerHTML = "دقت کن";

}

function test_q10(){

    var one = $("q10_in1");
    var two = $("q10_in2");
    var three = $("q10_in3");

    var total = 0;

    if(one.value === "6") {
    one.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    one.style.backgroundColor = "red";

    if(two.value === "234") {
    two.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    two.style.backgroundColor = "red";

    if(three.value === "432") {
    three.style.backgroundColor = "#6CAC33";
    total++;
}
    else
    three.style.backgroundColor = "red";


    if(total === 3){
    $("q10_result").innerHTML = "آفرین";
}
    else
    $("q10_result").innerHTML = "دقت کن";

}

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;


    for (var i = 0; i < b.length; i++) {
    if (!a.includes(b[i])) return false;
}
    return true;
}

function clear_img(element){
    element.remove();
    elements.push(element.id);
    num++;

    $("moves").innerHTML = (6-num)

    if(num === 6){
    num = 0;
    if(arraysEqual(elements, correct_elements)){
    $("s_q1_result").innerHTML = "آفرین:)"
}
    else{
    $("s_q1_result").innerHTML = "دقت کن:(";
    // location.reload();
}
}
}

function q2(element){
    element.remove();
    elements2.push(element.id);
    num2++;

    $("moves_2").innerHTML = (5-num2)

    if(num2 === 5){
    num2 = 0;
    if(arraysEqual(elements2,correct_elements_q2_1) || arraysEqual(elements2,correct_elements_q2_2) ||
    arraysEqual(elements2,correct_elements_q2_3) || arraysEqual(elements2,correct_elements_q2_4) ||
    arraysEqual(elements2,correct_elements_q2_5)|| arraysEqual(elements2,correct_elements_q2_6)){
    $("s_q2_result").innerHTML = "آفرین:)"
}
    else{
    $("s_q2_result").innerHTML = "دقت کن:(";
    // location.reload();
}
}
}

function q3(element){
    element.remove();
    elements3.push(element.id);
    num3++;

    $("moves_3").innerHTML = (3-num3)

    if(num3 === 3){
    num3 = 0;
        if(arraysEqual(elements3, correct_elements_q3)){
        $("s_q3_result").innerHTML = "آفرین:)"
        }
        else{
        $("s_q3_result").innerHTML = "دقت کن:(";
        // location.reload();
        }
    }
}

