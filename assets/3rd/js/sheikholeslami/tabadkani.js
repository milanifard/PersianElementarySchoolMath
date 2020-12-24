
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
