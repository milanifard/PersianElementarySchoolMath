//select elements-------------------------------------------------------------------------------------------------------
function $(id){
    return document.getElementById(id);
}

//input color-----------------------------------------------------------------------------------------------------------
function setRed(id){
    $(id).style.color = "red";
}
function setGreen(id){
    $(id).style.color = "green";
}
function setTextBlack(id){
    $(id).style.color = "black";
}

//check and set inputs color--------------------------------------------------------------------------------------------
function setValueColor(id,tvalue){
    if($(id).value == tvalue){
        $(id).style.color = "green";
    }
    else {
        $(id).style.color = "red";
    }

}

//check answer and set lable--------------------------------------------------------------------------------------------
function trueAnswerlabel(label) {

    $(label).innerHTML = "آفرین درست حل کردی";
    $(label).style.color = "var(--main_color)";
    $(label).style.animation = "shake 1s ";

}
function falseAnswerlabel(label) {

    $(label).innerText  = "میخوای بیشتر فکر کنی؟";
    $(label).style.color = "red";
    $(label).style.animation = "shake 1s";

}

//page 10 functions-----------------------------------------------------------------------------------------------------
function checkAnswer1_1(){
    setValueColor("inp1_1",8);
    setValueColor("inp1_2",12);
    setValueColor("inp1_3",4);
    setValueColor("inp1_4",4);
    setValueColor("inp1_5",4);
    setValueColor("ans1_1",12);

    if($("inp1_1").value == 8 && $("inp1_2").value == 12 && $("inp1_3").value == 4 && $("inp1_4").value == 4 && $("inp1_5").value == 4 && $("ans1_1").value == 12){
        trueAnswerlabel("feedback1_1");
        $("submit1_1").style.backgroundColor = "var(--main_color)";
    }
    else{
        falseAnswerlabel("feedback1_1");
        $("submit1_1").style.backgroundColor = "red";
    }
}
function checkAnswer1_2() {
    setValueColor("inp2_1",2);
    setValueColor("inp2_2",2);
    setValueColor("inp2_3",2);
    setValueColor("inp2_4",2);
    setValueColor("inp2_5",2);
    setValueColor("inp2_6",2);
    setValueColor("ans1_2",12);

    if($("inp2_1").value == 2 && $("inp2_2").value == 2 && $("inp2_3").value == 2 && $("inp2_4").value == 2 && $("inp2_5").value == 2 && $("inp2_6").value == 2 && $("ans1_2").value == 12){
        trueAnswerlabel("feedback1_2");
        $("submit1_2").style.backgroundColor = "var(--main_color)";
    }
    else{
        falseAnswerlabel("feedback1_2");
        $("submit1_2").style.backgroundColor = "red";
    }
}
function checkAnswer1_3() {
    setValueColor("inp3_1",5);
    setValueColor("inp3_2",5);
    setValueColor("ans1_3",12);


    if($("inp3_1").value == 5 && $("inp3_2").value == 5 && $("ans1_3").value == 12){
        trueAnswerlabel("feedback1_3");
        $("submit1_3").style.backgroundColor = "var(--main_color)";
    }
    else{
        falseAnswerlabel("feedback1_3");
        $("submit1_3").style.backgroundColor = "red";
    }
}
function checkAnswer1_4() {

    var sum = parseInt($("inp4_1").value) + parseInt($("inp4_2").value) + parseInt($("inp4_3").value) + parseInt($("inp4_4").value);
    if(sum == 12 && $("ans1_4").value == 12){

        setGreen("inp4_1");
        setGreen("inp4_2");
        setGreen("inp4_3");
        setGreen("inp4_4");
        setGreen("ans1_4");
        trueAnswerlabel("feedback1_4");
        $("submit1_4").style.backgroundColor = "var(--main_color)";
    }
    else{
        setRed("inp4_1");
        setRed("inp4_2");
        setRed("inp4_3");
        setRed("inp4_4");
        setRed("ans1_4");
        falseAnswerlabel("feedback1_4");
        $("submit1_4").style.backgroundColor = "red";
    }
}
function checkAnswer1_5() {

    var sum = parseInt($("inp5_1").value) + parseInt($("inp5_2").value) + parseInt($("inp5_3").value) + parseInt($("inp5_4").value);

    if(sum == 18 && $("ans1_5").value == 18){

        setGreen("inp5_1");
        setGreen("inp5_2");
        setGreen("inp5_3");
        setGreen("inp5_4");
        setGreen("ans1_5");
        trueAnswerlabel("feedback1_5");
        $("submit1_5").style.backgroundColor = "var(--main_color)";
    }
    else{
        setRed("inp5_1");
        setRed("inp5_2");
        setRed("inp5_3");
        setRed("inp5_4");
        setRed("ans1_5");
        falseAnswerlabel("feedback1_5");
        $("submit1_5").style.backgroundColor = "red";
    }
}
function checkAnswer1_6() {
    var sum = parseInt($("inp6_1").value) + parseInt($("inp6_2").value) + parseInt($("inp6_3").value);
    if(sum == 12 && $("ans1_6").value == 12){
        setGreen("inp6_1");
        setGreen("inp6_2");
        setGreen("inp6_3");
        setGreen("ans1_6");
        trueAnswerlabel("feedback1_6");
        $("submit1_6").style.backgroundColor = "var(--main_color)";
    }
    else{
        setRed("inp6_1");
        setRed("inp6_2");
        setRed("inp6_3");
        setRed("ans1_6");
        falseAnswerlabel("feedback1_6");
        $("submit1_6").style.backgroundColor = "red";
    }
}
function checkAnswer1_7() {
    var sum = parseInt($("inp7_1").value) + parseInt($("inp7_2").value) + parseInt($("inp7_3").value)
        + parseInt($("inp7_4").value)+ parseInt($("inp7_5").value)+ parseInt($("inp7_6").value);
    if(sum == 15 && $("ans1_7").value == 15){
        setGreen("inp7_1");
        setGreen("inp7_2");
        setGreen("inp7_3");
        setGreen("inp7_4");
        setGreen("inp7_5");
        setGreen("inp7_6");
        setGreen("ans1_7");
        trueAnswerlabel("feedback1_7");
        $("submit1_7").style.backgroundColor = "var(--main_color)";
    }
    else{
        setRed("inp7_1");
        setRed("inp7_2");
        setRed("inp7_3");
        setRed("inp7_4");
        setRed("inp7_5");
        setRed("inp7_6");
        setRed("ans1_7");
        falseAnswerlabel("feedback1_7");
        $("submit1_7").style.backgroundColor = "red";
    }
}

//page 11 functions-----------------------------------------------------------------------------------------------------
function checkAnswer2_1() {
    setValueColor("inp8_1",4);
    setValueColor("inp8_2",4);
    setValueColor("inp8_3",4);
    setValueColor("inp8_4",4);
    setValueColor("inp8_5",4);
    setValueColor("inp8_6",4);
    setValueColor("inp8_7",4);
    setValueColor("inp8_8",4);
    setValueColor("ans2_1",32);

    if($("inp8_1").value == 4 && $("inp8_2").value == 4 && $("inp8_3").value == 4 && $("inp8_4").value == 4
        && $("inp8_5").value == 4 && $("inp8_6").value == 4 && $("inp8_7").value == 4 && $("inp8_8").value == 4
        && $("ans2_1").value == 32){
        trueAnswerlabel("feedback2_1");
        $("submit2_1").style.backgroundColor = "var(--main_color)";
    }
    else{
        falseAnswerlabel("feedback2_1");
        $("submit2_1").style.backgroundColor = "red";
    }
}
function checkAnswer2_2() {
    setValueColor("inp9_1",8);
    setValueColor("inp9_2",8);
    setValueColor("inp9_3",8);
    setValueColor("inp9_4",8);
    setValueColor("ans2_2",32);

    if($("inp9_1").value == 8 && $("inp9_2").value == 8 && $("inp9_3").value == 8 && $("inp9_4").value == 8
        && $("ans2_2").value == 32){
        trueAnswerlabel("feedback2_2");
        $("submit2_2").style.backgroundColor = "var(--main_color)";
    }
    else{
        falseAnswerlabel("feedback2_2");
        $("submit2_2").style.backgroundColor = "red";
    }
}
function checkAnswer2_3() {
    setValueColor("inp10_1",16);
    setValueColor("inp10_2",16);
    setValueColor("ans2_3",32);

    if($("inp10_1").value == 16 && $("inp10_2").value == 16 && $("ans2_3").value == 32){
        trueAnswerlabel("feedback2_3");
        $("submit2_3").style.backgroundColor = "var(--main_color)";
    }
    else{
        falseAnswerlabel("feedback2_3");
        $("submit2_3").style.backgroundColor = "red";
    }
}
function checkAnswer2_4() {
    setValueColor("inp11_1",12);
    setValueColor("inp11_2",8);
    setValueColor("inp11_3",4);
    setValueColor("inp11_4",4);
    setValueColor("inp11_5",4);
    setValueColor("ans2_4",32);

    if($("inp11_1").value == 12 && $("inp11_2").value == 8 && $("inp11_3").value == 4 && $("inp11_4").value == 4
        && $("inp11_5").value == 4 && $("ans2_4").value == 32){
        trueAnswerlabel("feedback2_4");
        $("submit2_4").style.backgroundColor = "var(--main_color)";
    }
    else{
        falseAnswerlabel("feedback2_4");
        $("submit2_4").style.backgroundColor = "red";
    }
}
function checkAnswer2_5() {
    setValueColor("inp12_1",10);
    setValueColor("inp12_2",10);
    setValueColor("inp12_3",5);
    setValueColor("inp12_4",5);
    setValueColor("ans2_5",30);

    if($("inp12_1").value == 10 && $("inp12_2").value == 10 && $("inp12_3").value == 5 && $("inp12_4").value == 5
        && $("ans2_5").value == 30){
        trueAnswerlabel("feedback2_5");
        $("submit2_5").style.backgroundColor = "var(--main_color)";
    }
    else{
        falseAnswerlabel("feedback2_5");
        $("submit2_5").style.backgroundColor = "red";
    }
}
function checkAnswer2_6() {
    setValueColor("inp13_1",8);
    setValueColor("inp13_2",8);
    setValueColor("inp13_3",4);
    setValueColor("inp13_4",4);
    setValueColor("ans2_6",24);

    if($("inp13_1").value == 8 && $("inp13_2").value == 8 && $("inp13_3").value == 4 && $("inp13_4").value == 4
        && $("ans2_6").value == 24){
        trueAnswerlabel("feedback2_6");
        $("submit2_6").style.backgroundColor = "var(--main_color)";
    }
    else{
        falseAnswerlabel("feedback2_6");
        $("submit2_6").style.backgroundColor = "red";
    }
}
function checkAnswer2_7() {
    setValueColor("inp14_1",5);
    setValueColor("inp14_2",5);
    setValueColor("inp14_3",5);
    setValueColor("inp14_4",5);
    setValueColor("inp14_5",5);
    setValueColor("inp14_6",4);
    setValueColor("ans2_7",29);

    if($("inp14_1").value == 5 && $("inp14_2").value == 5 && $("inp14_3").value == 5 && $("inp14_4").value == 5
        && $("inp14_5").value == 5 && $("inp14_6").value == 4 && $("ans2_7").value == 29){
        trueAnswerlabel("feedback2_7");
        $("submit2_7").style.backgroundColor = "var(--main_color)";
    }
    else{
        falseAnswerlabel("feedback2_7");
        $("submit2_7").style.backgroundColor = "red";
    }
}
function checkAnswer2_8() {
    setValueColor("inp15_1",15);
    setValueColor("inp15_2",10);
    setValueColor("inp15_3",5);
    setValueColor("inp15_4",3);
    setValueColor("ans2_8",33);

    if($("inp15_1").value == 15 && $("inp15_2").value == 10 && $("inp15_3").value == 5 && $("inp15_4").value == 3
        && $("ans2_8").value == 33){
        trueAnswerlabel("feedback2_8");
        $("submit2_8").style.backgroundColor = "var(--main_color)";
    }
    else{
        falseAnswerlabel("feedback2_8");
        $("submit2_8").style.backgroundColor = "red";
    }
}
function checkAnswer2_9() {
    setValueColor("inp16_1",6);
    setValueColor("inp16_2",4);
    setValueColor("inp16_3",3);
    setValueColor("inp16_4",3);
    setValueColor("inp16_5",3);
    setValueColor("ans2_9",19);

    if($("inp16_1").value == 6 && $("inp16_2").value == 4 && $("inp16_3").value == 3 && $("inp16_4").value == 3
        && $("inp16_5").value == 3 && $("ans2_9").value == 19){
        trueAnswerlabel("feedback2_9");
        $("submit2_9").style.backgroundColor = "var(--main_color)";
    }
    else{
        falseAnswerlabel("feedback2_9");
        $("submit2_9").style.backgroundColor = "red";
    }
}


