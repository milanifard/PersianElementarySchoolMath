function p22answerQ1() {
    if (document.getElementById('r12').checked) {
        makeRed("labelRadio12");
        makeBlack("labelRadio11");
    }
    else if (document.getElementById('r11').checked) {
        makeGreen("labelRadio11");
        makeBlack("labelRadio12");
    }
}

function p52answerQ1(){
    if (document.getElementById('r52').checked) {
        makeRed("labelRadio52");
        makeBlack("labelRadio51");
        makeBlack("labelRadio53");
    }
    else if (document.getElementById('r51').checked) {
        makeRed("labelRadio51");
        makeBlack("labelRadio52");
        makeBlack("labelRadio53");
    }
    else if (document.getElementById('r53').checked) {
        makeGreen("labelRadio53");
        makeBlack("labelRadio52");
        makeBlack("labelRadio51");
    }
}

function makeGreen(id){
    document.getElementById(id).style.color = "green";
}
function makeRed(id){
    document.getElementById(id).style.color = "red";
}
function makeBlack(id){
    document.getElementById(id).style.color = "black";
}


function p22answerQ2(){
    if (document.getElementById('r21').checked) {
        makeRed("labelRadio21");
        makeBlack("labelRadio22");
    }
    else if (document.getElementById('r22').checked) {
        makeBlack("labelRadio21");
        makeGreen("labelRadio22");
    }

}

function p22answerQ3(){
    if (document.getElementById('r31').checked) {
        makeRed("labelRadio31");
        makeBlack("labelRadio32");
    }
    else if (document.getElementById('r32').checked) {
        makeBlack("labelRadio31");
        makeGreen("labelRadio32");
    }

}

function p22answerQ4(){
    if (document.getElementById('r41').checked) {
        makeRed("labelRadio41");
        makeBlack("labelRadio42");
    }
    else if (document.getElementById('r42').checked) {
        makeBlack("labelRadio41");
        makeGreen("labelRadio42");
    }

}

function correct_p102_q1() {
    //var q1_1 = document.getElementById("p102_q1_1");
    var q1_2 = document.getElementById("p102_q1_2");
    var q1_23 = document.getElementById("p102_q1_23");
    //var q1_3 = document.getElementById("p102_q1_3");
    var q1_4 = document.getElementById("p102_q1_4");
    var q1_43 = document.getElementById("p102_q1_43");
   // var q1_5 = document.getElementById("p102_q1_5");
    var q1_6 = document.getElementById("p102_q1_6");
    var q1_63 = document.getElementById("p102_q1_63");
/*
    q1_1.classList.remove("normal_shadow");
    q1_1.classList.remove("yellow_shadow");
    q1_1.classList.remove("red_shadow");
    q1_1.classList.remove("green_shadow");

 */
    q1_2.classList.remove("normal_shadow");
    q1_2.classList.remove("yellow_shadow");
    q1_2.classList.remove("red_shadow");
    q1_2.classList.remove("green_shadow");

    q1_23.classList.remove("normal_shadow");
    q1_23.classList.remove("yellow_shadow");
    q1_23.classList.remove("red_shadow");
    q1_23.classList.remove("green_shadow");
/*
    q1_3.classList.remove("normal_shadow");
    q1_3.classList.remove("yellow_shadow");
    q1_3.classList.remove("red_shadow");
    q1_3.classList.remove("green_shadow");

 */
    q1_4.classList.remove("normal_shadow");
    q1_4.classList.remove("yellow_shadow");
    q1_4.classList.remove("red_shadow");
    q1_4.classList.remove("green_shadow");


    q1_43.classList.remove("normal_shadow");
    q1_43.classList.remove("yellow_shadow");
    q1_43.classList.remove("red_shadow");
    q1_43.classList.remove("green_shadow");
/*
    q1_5.classList.remove("normal_shadow");
    q1_5.classList.remove("yellow_shadow");
    q1_5.classList.remove("red_shadow");
    q1_5.classList.remove("green_shadow");

 */
    q1_6.classList.remove("normal_shadow");
    q1_6.classList.remove("yellow_shadow");
    q1_6.classList.remove("red_shadow");
    q1_6.classList.remove("green_shadow");

    q1_63.classList.remove("normal_shadow");
    q1_63.classList.remove("yellow_shadow");
    q1_63.classList.remove("red_shadow");
    q1_63.classList.remove("green_shadow");
/*
    if (q1_1.value.length == 0) {
        q1_1.classList.add("yellow_shadow");
    } else if (q1_1.value == '>') {
        q1_1.classList.add("green_shadow");
    } else {
        q1_1.classList.add("red_shadow");
    }

 */
    if (q1_2.value.length == 0) {
        q1_2.classList.add("yellow_shadow");
    } else if (q1_2.value.length == '3') {
        var x;
        var y1=Math.floor(x%10);//8
        var y2=Math.floor(x/10);//239
        y2=Math.floor(y2%10);//9
        var y3=Math.floor(x/100);//23
        if((y3!=0)&&(y2!=0)){//3 raghami
            q1_2.classList.add("green_shadow");
        }
    } else {
        q1_2.classList.add("red_shadow");
    }

    if (q1_23.value.length == 0) {
        q1_23.classList.add("yellow_shadow");
    } else if (q1_23.value.length == '2') {
        var x;
        var y1=Math.floor(x%10);//8
        var y2=Math.floor(x/10);//239
        if(y2!=0){//2 raghami
            q1_23.classList.add("green_shadow");
        }
    }  else {
        q1_23.classList.add("red_shadow");
    }
/*
    if (q1_3.value.length == 0) {

        q1_3.classList.add("yellow_shadow");
    } else if (q1_3.value == '<') {
        q1_3.classList.add("green_shadow");
    } else {
        q1_3.classList.add("red_shadow");
    }

 */
    if (q1_4.value.length == 0) {
        q1_4.classList.add("yellow_shadow");
    } else if (q1_4.value.length == '3') {
        var x;
        var y1=Math.floor(x%10);//8
        var y2=Math.floor(x/10);//239
        y2=Math.floor(y2%10);//9
        var y3=Math.floor(x/100);//23
        if((y3!=0)&&(y2!=0)){//3 raghami
            q1_4.classList.add("green_shadow");
        }
    } else {
        q1_4.classList.add("red_shadow");
    }


    if (q1_43.value.length == 0) {
        q1_43.classList.add("yellow_shadow");
    } else if (q1_43.value.length == '4') {
        var x;
        var y1=Math.floor(x%10);//8
        var y2=Math.floor(x/10);//239
        y2=Math.floor(y2%10);//9
        var y3=Math.floor(x/100);//23
        y3=Math.floor(y3%10);//3
        var y4=Math.floor(x/1000);//2
        if((y4!=0)&&(y3!=0)&&(y2!=0)){//4 raghami
            q1_43.classList.add("green_shadow");
        }
    } else {
        q1_43.classList.add("red_shadow");
    }
/*
    if (q1_5.value.length == 0) {
        q1_5.classList.add("yellow_shadow");
    } else if (q1_5.value == '>') {
        q1_5.classList.add("green_shadow");
    } else {
        q1_5.classList.add("red_shadow");
    }

 */
    if (q1_6.value.length == 0) {
        q1_6.classList.add("yellow_shadow");
    }
    else if (q1_6.value.length == '4') {
        var x;
        var y1=Math.floor(x%10);//8
        var y2=Math.floor(x/10);//239
        y2=Math.floor(y2%10);//9
        var y3=Math.floor(x/100);//23
        y3=Math.floor(y3%10);//3
        var y4=Math.floor(x/1000);//2
        if((y4!=0)&&(y3!=0)&&(y2!=0)){//4 raghami
            q1_6.classList.add("green_shadow");
        }
    } else {
        q1_6.classList.add("red_shadow");
    }

    if (q1_63.value.length == 0) {
        q1_63.classList.add("yellow_shadow");
    } else if (q1_63.value.length == '2') {
        var x;
        var y1=Math.floor(x%10);//8
        var y2=Math.floor(x/10);//239
        if(y2!=0){//4 raghami
            q1_63.classList.add("green_shadow");
        }
    } else {
        q1_63.classList.add("red_shadow");
    }

    //document.getElementById('p102_q1_1').value = '';
    document.getElementById('p102_q1_2').value = '';
    document.getElementById('p102_q1_23').value = '';
    //document.getElementById('p102_q1_3').value = '';
    document.getElementById('p102_q1_4').value = '';
    document.getElementById('p102_q1_43').value = '';
    //document.getElementById('p102_q1_5').value = '';
    document.getElementById('p102_q1_6').value = '';
    document.getElementById('p102_q1_63').value = '';

    ///////////////
    submitSelect6();
    submitSelect7();
    submitSelect8();

    select6 = document.getElementById("s6")
    select7 = document.getElementById("s7")
    select8 = document.getElementById("s8")


    c6 = select6.classList;
    c7 = select7.classList;
    c8 = select8.classList;


    document.getElementById("hour6").classList = ''
    document.getElementById("hour7").classList = ''
    document.getElementById("hour8").classList = ''

    if (c6.length == 0) {
        document.getElementById("hour6").classList.add("empty")
    } else if (c6[0] == "sleep") {
        document.getElementById("hour6").classList.add("correct")

    } else {
        document.getElementById("hour6").classList.add("wrong")

    }

    if (c7.length == 0) {
        document.getElementById("hour7").classList.add("empty")
    } else if (c7[0] == "way_to_party") {
        document.getElementById("hour7").classList.add("correct")
    } else {
        document.getElementById("hour7").classList.add("wrong")
    }

    if (c8.length == 0) {
        document.getElementById("hour8").classList.add("empty")
    } else if (c8[0] == "study") {
        document.getElementById("hour8").classList.add("correct")
    } else {
        document.getElementById("hour8").classList.add("wrong")
    }


}

function count4digits(x){//2398
    var y1=Math.floor(x%10);//8
    var y2=Math.floor(x/10);//239
    y2=Math.floor(y2%10);//9
    var y3=Math.floor(x/100);//23
    y3=Math.floor(y3%10);//3
    var y4=Math.floor(x/1000);//2
}

function correct_p102_q2() {
    var q2_1 = document.getElementById("p102_q2_1");
    var q2_2 = document.getElementById("p102_q2_2");
    var q2_3 = document.getElementById("p102_q2_3");
    var q2_4 = document.getElementById("p102_q2_4");
    var q2_5 = document.getElementById("p102_q2_5");
    var q2_6 = document.getElementById("p102_q2_6");

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
    } else if (q2_1.value == '>') {
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
    } else if (q2_3.value == '<') {
        q2_3.classList.add("green_shadow");
    } else {
        q2_3.classList.add("red_shadow");
    }

    if (q2_4.value.length == 0) {
        q2_4.classList.add("yellow_shadow");
    } else if (q2_4.value == '<') {
        q2_4.classList.add("green_shadow");
    } else {
        q2_4.classList.add("red_shadow");
    }

    if (q2_5.value.length == 0) {
        q2_5.classList.add("yellow_shadow");
    } else if (q2_5.value == '>') {
        q2_5.classList.add("green_shadow");
    } else {
        q2_5.classList.add("red_shadow");
    }

    if (q2_6.value.length == 0) {
        q2_6.classList.add("yellow_shadow");
    } else if (q2_6.value == '>') {
        q2_6.classList.add("green_shadow");
    } else {
        q2_6.classList.add("red_shadow");
    }
    document.getElementById('p102_q2_1').value = '';
    document.getElementById('p102_q2_2').value = '';
    document.getElementById('p102_q2_3').value = '';
    document.getElementById('p102_q2_4').value = '';
    document.getElementById('p102_q2_5').value = '';
    document.getElementById('p102_q2_6').value = '';
}


function correct_p102_q3() {
    var q3_1 = document.getElementById("p102_q3_1");
    var q3_2 = document.getElementById("p102_q3_2");
    var q3_3 = document.getElementById("p102_q3_3");
    var q3_4 = document.getElementById("p102_q3_4");
    var q3_5 = document.getElementById("p102_q3_5");
    var q3_6 = document.getElementById("p102_q3_6");
    var q3_7 = document.getElementById("p102_q3_7");
    var q3_8 = document.getElementById("p102_q3_8");
    var q3_9 = document.getElementById("p102_q3_9");
    var q3_10 = document.getElementById("p102_q3_10");
    var q3_11 = document.getElementById("p102_q3_11");
    var q3_12 = document.getElementById("p102_q3_12");

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
    } else if (q3_1.value == '1430') {
        q3_1.classList.add("green_shadow");
    } else {
        q3_1.classList.add("red_shadow");
    }

    if (q3_2.value.length == 0) {
        q3_2.classList.add("yellow_shadow");
    } else if (q3_2.value == '24330') {
        q3_2.classList.add("green_shadow");
    } else {
        q3_2.classList.add("red_shadow");
    }

    if (q3_3.value.length == 0) {
        q3_3.classList.add("yellow_shadow");
    } else if (q3_3.value == '8450') {
        q3_3.classList.add("green_shadow");
    } else {
        q3_3.classList.add("red_shadow");
    }

    if (q3_4.value.length == 0) {
        q3_4.classList.add("yellow_shadow");
    } else if (q3_4.value == '3250') {
        q3_4.classList.add("green_shadow");
    } else {
        q3_4.classList.add("red_shadow");
    }

    if (q3_5.value.length == 0) {
        q3_5.classList.add("yellow_shadow");
    } else if (q3_5.value == '7380') {
        q3_5.classList.add("green_shadow");
    } else {
        q3_5.classList.add("red_shadow");
    }

    if (q3_6.value.length == 0) {
        q3_6.classList.add("yellow_shadow");
    } else if (q3_6.value == '7340') {
        q3_6.classList.add("green_shadow");
    } else {
        q3_6.classList.add("red_shadow");
    }

    if (q3_7.value.length == 0) {
        q3_7.classList.add("yellow_shadow");
    } else if (q3_7.value == '4693') {
        q3_7.classList.add("green_shadow");
    } else {
        q3_7.classList.add("red_shadow");
    }

    if (q3_8.value.length == 0) {
        q3_8.classList.add("yellow_shadow");
    } else if (q3_8.value == '8') {
        q3_8.classList.add("green_shadow");
    } else {
        q3_8.classList.add("red_shadow");
    }

    if (q3_9.value.length == 0) {
        q3_9.classList.add("yellow_shadow");
    } else if (q3_9.value == '9818') {
        q3_9.classList.add("green_shadow");
    } else {
        q3_9.classList.add("red_shadow");
    }

    if (q3_10.value.length == 0) {
        q3_10.classList.add("yellow_shadow");
    } else if (q3_10.value == '1') {
        q3_10.classList.add("green_shadow");
    } else {
        q3_10.classList.add("red_shadow");
    }

    if (q3_11.value.length == 0) {
        q3_11.classList.add("yellow_shadow");
    } else if (q3_11.value == '1102') {
        q3_11.classList.add("green_shadow");
    } else {
        q3_11.classList.add("red_shadow");
    }

    if (q3_12.value.length == 0) {
        q3_12.classList.add("yellow_shadow");
    } else if (q3_12.value == '1') {
        q3_12.classList.add("green_shadow");
    } else {
        q3_12.classList.add("red_shadow");
    }
    document.getElementById('p102_q3_1').value = '';
    document.getElementById('p102_q3_2').value = '';
    document.getElementById('p102_q3_3').value = '';
    document.getElementById('p102_q3_4').value = '';
    document.getElementById('p102_q3_5').value = '';
    document.getElementById('p102_q3_6').value = '';
    document.getElementById('p102_q3_7').value = '';
    document.getElementById('p102_q3_8').value = '';
    document.getElementById('p102_q3_9').value = '';
    document.getElementById('p102_q3_10').value = '';
    document.getElementById('p102_q3_11').value = '';
    document.getElementById('p102_q3_12').value = '';
}

function correct_p102_q4() {
    var q4_1 = document.getElementById("p102_q4_1");
    var q4_2 = document.getElementById("p102_q4_2");
    var q4_3 = document.getElementById("p102_q4_3");
    var q4_4 = document.getElementById("p102_q4_4");
    var q4_5 = document.getElementById("p102_q4_5");
    var q4_6 = document.getElementById("p102_q4_6");

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
    } else if (q4_1.value == '7') {
        q4_1.classList.add("green_shadow");
    } else {
        q4_1.classList.add("red_shadow");
    }

    if (q4_2.value.length == 0) {
        q4_2.classList.add("yellow_shadow");
    } else if (q4_2.value == '4') {
        q4_2.classList.add("green_shadow");
    } else {
        q4_2.classList.add("red_shadow");
    }

    if (q4_3.value.length == 0) {
        q4_3.classList.add("yellow_shadow");
    } else if (q4_3.value == '28') {
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
    } else if (q4_5.value == '3') {
        q4_5.classList.add("green_shadow");
    } else {
        q4_5.classList.add("red_shadow");
    }

    if (q4_6.value.length == 0) {
        q4_6.classList.add("yellow_shadow");
    } else if (q4_6.value == '15') {
        q4_6.classList.add("green_shadow");
    } else {
        q4_6.classList.add("red_shadow");
    }
    document.getElementById('p102_q4_1').value = '';
    document.getElementById('p102_q4_2').value = '';
    document.getElementById('p102_q4_3').value = '';
    document.getElementById('p102_q4_4').value = '';
    document.getElementById('p102_q4_5').value = '';
    document.getElementById('p102_q4_6').value = '';
}

function correct_p102_q5() {
    var q5_1 = document.getElementById("p102_q5_1");
    var q5_2 = document.getElementById("p102_q5_2");
    var q5_3 = document.getElementById("p102_q5_3");
    var q5_4 = document.getElementById("p102_q5_4");

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
    } else if (q5_1.value == '6000') {
        q5_1.classList.add("green_shadow");
    } else {
        q5_1.classList.add("red_shadow");
    }

    if (q5_2.value.length == 0) {
        q5_2.classList.add("yellow_shadow");
    } else if (q5_2.value == '7000') {
        q5_2.classList.add("green_shadow");
    } else {
        q5_2.classList.add("red_shadow");
    }

    if (q5_3.value.length == 0) {
        q5_3.classList.add("yellow_shadow");
    } else if (q5_3.value == '5000') {
        q5_3.classList.add("green_shadow");
    } else {
        q5_3.classList.add("red_shadow");
    }

    if (q5_4.value.length == 0) {
        q5_4.classList.add("yellow_shadow");
    } else if (q5_4.value == '6000') {
        q5_4.classList.add("green_shadow");
    } else {
        q5_4.classList.add("red_shadow");
    }
    document.getElementById('p102_q5_1').value = '';
    document.getElementById('p102_q5_2').value = '';
    document.getElementById('p102_q5_3').value = '';
    document.getElementById('p102_q5_4').value = '';

}

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
function correct_p18_q2() {


}

function correct_p101_q1() {
    var q1_1 = document.getElementById("p101_q1_1");
    var q1_2 = document.getElementById("p101_q1_2");
    var q1_3 = document.getElementById("p101_q1_3");
    var q1_4 = document.getElementById("p101_q1_4");
    var q1_5 = document.getElementById("p101_q1_5");
    var q1_6 = document.getElementById("p101_q1_6");
    var q1_7 = document.getElementById("p101_q1_7");
    var q1_8 = document.getElementById("p101_q1_8");
    var q1_9 = document.getElementById("p101_q1_9");
    var q1_10 = document.getElementById("p101_q1_10");
    var q1_11 = document.getElementById("p101_q1_11");
    var q1_12 = document.getElementById("p101_q1_12");

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
    q1_11.classList.remove("normal_shadow");
    q1_11.classList.remove("yellow_shadow");
    q1_11.classList.remove("red_shadow");
    q1_11.classList.remove("green_shadow");
    q1_12.classList.remove("normal_shadow");
    q1_12.classList.remove("yellow_shadow");
    q1_12.classList.remove("red_shadow");
    q1_12.classList.remove("green_shadow");

    if (q1_1.value.length == 0) {
        q1_1.classList.add("yellow_shadow");
    } else if (q1_1.value == '1246') {
        q1_1.classList.add("green_shadow");
    } else {
        q1_1.classList.add("red_shadow");
    }

    if (q1_2.value.length == 0) {
        q1_2.classList.add("yellow_shadow");
    } else if (q1_2.value == '>') {
        q1_2.classList.add("green_shadow");
    } else {
        q1_2.classList.add("red_shadow");
    }

    if (q1_3.value.length == 0) {
        q1_3.classList.add("yellow_shadow");
    } else if (q1_3.value == '1244') {
        q1_3.classList.add("green_shadow");
    } else {
        q1_3.classList.add("red_shadow");
    }

    if (q1_4.value.length == 0) {
        q1_4.classList.add("yellow_shadow");
    } else if (q1_4.value == '3212') {
        q1_4.classList.add("green_shadow");
    } else {
        q1_4.classList.add("red_shadow");
    }

    if (q1_5.value.length == 0) {
        q1_5.classList.add("yellow_shadow");
    } else if (q1_5.value == '>') {
        q1_5.classList.add("green_shadow");
    } else {
        q1_5.classList.add("red_shadow");
    }

    if (q1_6.value.length == 0) {
        q1_6.classList.add("yellow_shadow");
    } else if (q1_6.value == '2411') {
        q1_6.classList.add("green_shadow");
    } else {
        q1_6.classList.add("red_shadow");
    }

    if (q1_7.value.length == 0) {
        q1_7.classList.add("yellow_shadow");
    } else if (q1_7.value == '4321') {
        q1_7.classList.add("green_shadow");
    } else {
        q1_7.classList.add("red_shadow");
    }

    if (q1_8.value.length == 0) {
        q1_8.classList.add("yellow_shadow");
    } else if (q1_8.value == '>') {
        q1_8.classList.add("green_shadow");
    } else {
        q1_8.classList.add("red_shadow");
    }

    if (q1_9.value.length == 0) {
        q1_9.classList.add("yellow_shadow");
    } else if (q1_9.value == '4316') {
        q1_9.classList.add("green_shadow");
    } else {
        q1_9.classList.add("red_shadow");
    }

    if (q1_10.value.length == 0) {
        q1_10.classList.add("yellow_shadow");
    } else if (q1_10.value == '7501') {
        q1_10.classList.add("green_shadow");
    } else {
        q1_10.classList.add("red_shadow");
    }

    if (q1_11.value.length == 0) {
        q1_11.classList.add("yellow_shadow");
    } else if (q1_11.value == '>') {
        q1_11.classList.add("green_shadow");
    } else {
        q1_11.classList.add("red_shadow");
    }

    if (q1_12.value.length == 0) {
        q1_12.classList.add("yellow_shadow");
    } else if (q1_12.value == '7498') {
        q1_12.classList.add("green_shadow");
    } else {
        q1_12.classList.add("red_shadow");
    }

    document.getElementById('p101_q1_1').value = '';
    document.getElementById('p101_q1_2').value = '';
    document.getElementById('p101_q1_3').value = '';
    document.getElementById('p101_q1_4').value = '';
    document.getElementById('p101_q1_5').value = '';
    document.getElementById('p101_q1_6').value = '';
    document.getElementById('p101_q1_7').value = '';
    document.getElementById('p101_q1_8').value = '';
    document.getElementById('p101_q1_9').value = '';
    document.getElementById('p101_q1_10').value = '';
    document.getElementById('p101_q1_11').value = '';
    document.getElementById('p101_q1_12').value = '';
}

function correct_p101_q2() {
    var q2_1 = document.getElementById("p101_q2_1");
    var q2_2 = document.getElementById("p101_q2_2");
    var q2_3 = document.getElementById("p101_q2_3");
    var q2_4 = document.getElementById("p101_q2_4");
    var q2_5 = document.getElementById("p101_q2_5");
    var q2_6 = document.getElementById("p101_q2_6");
    var q2_7 = document.getElementById("p101_q2_7");
    var q2_8 = document.getElementById("p101_q2_8");
    var q2_9 = document.getElementById("p101_q2_9");

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
    q2_7.classList.remove("normal_shadow");
    q2_7.classList.remove("yellow_shadow");
    q2_7.classList.remove("red_shadow");
    q2_7.classList.remove("green_shadow");
    q2_8.classList.remove("normal_shadow");
    q2_8.classList.remove("yellow_shadow");
    q2_8.classList.remove("red_shadow");
    q2_8.classList.remove("green_shadow");
    q2_9.classList.remove("normal_shadow");
    q2_9.classList.remove("yellow_shadow");
    q2_9.classList.remove("red_shadow");
    q2_9.classList.remove("green_shadow");


    if (q2_1.value.length == 0) {
        q2_1.classList.add("yellow_shadow");
    } else if (q2_1.value == '4000') {
        q2_1.classList.add("green_shadow");
    } else {
        q2_1.classList.add("red_shadow");
    }

    if (q2_2.value.length == 0) {
        q2_2.classList.add("yellow_shadow");
    } else if (q2_2.value == '4008') {
        q2_2.classList.add("green_shadow");
    } else {
        q2_2.classList.add("red_shadow");
    }

    if (q2_3.value.length == 0) {
        q2_3.classList.add("yellow_shadow");
    } else if (q2_3.value == '4010') {
        q2_3.classList.add("green_shadow");
    } else {
        q2_3.classList.add("red_shadow");
    }

    if (q2_4.value.length == 0) {
        q2_4.classList.add("yellow_shadow");
    } else if (q2_4.value == '4020') {
        q2_4.classList.add("green_shadow");
    } else {
        q2_4.classList.add("red_shadow");
    }

    if (q2_5.value.length == 0) {
        q2_5.classList.add("yellow_shadow");
    } else if (q2_5.value == '1313') {
        q2_5.classList.add("green_shadow");
    } else {
        q2_5.classList.add("red_shadow");
    }

    if (q2_6.value.length == 0) {
        q2_6.classList.add("yellow_shadow");
    } else if (q2_6.value == '1315') {
        q2_6.classList.add("green_shadow");
    } else {
        q2_6.classList.add("red_shadow");
    }

    if (q2_7.value.length == 0) {
        q2_7.classList.add("yellow_shadow");
    } else if (q2_7.value == '1316') {
        q2_7.classList.add("green_shadow");
    } else {
        q2_7.classList.add("red_shadow");
    }

    if (q2_8.value.length == 0) {
        q2_8.classList.add("yellow_shadow");
    } else if (q2_8.value == '1318') {
        q2_8.classList.add("green_shadow");
    } else {
        q2_8.classList.add("red_shadow");
    }

    if (q2_9.value.length == 0) {
        q2_9.classList.add("yellow_shadow");
    } else if (q2_9.value == '1319') {
        q2_9.classList.add("green_shadow");
    } else {
        q2_9.classList.add("red_shadow");
    }

    document.getElementById('p101_q2_1').value = '';
    document.getElementById('p101_q2_2').value = '';
    document.getElementById('p101_q2_3').value = '';
    document.getElementById('p101_q2_4').value = '';
    document.getElementById('p101_q2_5').value = '';
    document.getElementById('p101_q2_6').value = '';
    document.getElementById('p101_q2_7').value = '';
    document.getElementById('p101_q2_8').value = '';
    document.getElementById('p101_q2_9').value = '';
}

function correct_p100_q1() {
    var q1_1 = document.getElementById("p100_q1_1");
    var q1_2 = document.getElementById("p100_q1_2");
    var q1_3 = document.getElementById("p100_q1_3");

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

    if (q1_1.value.length == 0) {
        q1_1.classList.add("yellow_shadow");
    } else if (q1_1.value == '2111') {
        q1_1.classList.add("green_shadow");
    } else {
        q1_1.classList.add("red_shadow");
    }

    if (q1_2.value.length == 0) {
        q1_2.classList.add("yellow_shadow");
    } else if (q1_2.value == '>') {
        q1_2.classList.add("green_shadow");
    } else {
        q1_2.classList.add("red_shadow");
    }

    if (q1_3.value.length == 0) {
        q1_3.classList.add("yellow_shadow");
    } else if (q1_3.value == '2047') {
        q1_3.classList.add("green_shadow");
    } else {
        q1_3.classList.add("red_shadow");
    }
    document.getElementById('p100_q1_1').value = '';
    document.getElementById('p100_q1_2').value = '';
    document.getElementById('p100_q1_3').value = '';
}

function correct_p100_q2() {
    var q2_1 = document.getElementById("p100_q2_1");
    var q2_2 = document.getElementById("p100_q2_2");
    var q2_3 = document.getElementById("p100_q2_3");

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


    if (q2_1.value.length == 0) {
        q2_1.classList.add("yellow_shadow");
    } else if (q2_1.value == '3000') {
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
    } else if (q2_3.value == '3000') {
        q2_3.classList.add("green_shadow");
    } else {
        q2_3.classList.add("red_shadow");
    }

    document.getElementById('p100_q2_1').value = '';
    document.getElementById('p100_q2_2').value = '';
    document.getElementById('p100_q2_3').value = '';
}

function correct_p100_q3() {
    var q3_1 = document.getElementById("p100_q3_1");
    var q3_2 = document.getElementById("p100_q3_2");
    var q3_3 = document.getElementById("p100_q3_3");

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

    if (q3_1.value.length == 0) {
        q3_1.classList.add("yellow_shadow");
    } else if (q3_1.value == '3400') {
        q3_1.classList.add("green_shadow");
    } else {
        q3_1.classList.add("red_shadow");
    }

    if (q3_2.value.length == 0) {
        q3_2.classList.add("yellow_shadow");
    } else if (q3_2.value == '=') {
        q3_2.classList.add("green_shadow");
    } else {
        q3_2.classList.add("red_shadow");
    }

    if (q3_3.value.length == 0) {
        q3_3.classList.add("yellow_shadow");
    } else if (q3_3.value == '3400') {
        q3_3.classList.add("green_shadow");
    } else {
        q3_3.classList.add("red_shadow");
    }

    document.getElementById('p100_q3_1').value = '';
    document.getElementById('p100_q3_2').value = '';
    document.getElementById('p100_q3_3').value = '';
}

function correct_p100_q4() {
    var q4_1 = document.getElementById("p100_q4_1");
    var q4_2 = document.getElementById("p100_q4_2");
    var q4_3 = document.getElementById("p100_q4_3");

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


    if (q4_1.value.length == 0) {
        q4_1.classList.add("yellow_shadow");
    } else if (q4_1.value == '3430') {
        q4_1.classList.add("green_shadow");
    } else {
        q4_1.classList.add("red_shadow");
    }

    if (q4_2.value.length == 0) {
        q4_2.classList.add("yellow_shadow");
    } else if (q4_2.value == '>') {
        q4_2.classList.add("green_shadow");
    } else {
        q4_2.classList.add("red_shadow");
    }

    if (q4_3.value.length == 0) {
        q4_3.classList.add("yellow_shadow");
    } else if (q4_3.value == '3420') {
        q4_3.classList.add("green_shadow");
    } else {
        q4_3.classList.add("red_shadow");
    }

    document.getElementById('p100_q4_1').value = '';
    document.getElementById('p100_q4_2').value = '';
    document.getElementById('p100_q4_3').value = '';
}

function correct_p100_q5() {
    var q5_1 = document.getElementById("p100_q5_1");
    var q5_2 = document.getElementById("p100_q5_2");
    var q5_3 = document.getElementById("p100_q5_3");

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

    if (q5_1.value.length == 0) {
        q5_1.classList.add("yellow_shadow");
    } else if (q5_1.value == '2000') {
        q5_1.classList.add("green_shadow");
    } else {
        q5_1.classList.add("red_shadow");
    }

    if (q5_2.value.length == 0) {
        q5_2.classList.add("yellow_shadow");
    } else if (q5_2.value == '<') {
        q5_2.classList.add("green_shadow");
    } else {
        q5_2.classList.add("red_shadow");
    }

    if (q5_3.value.length == 0) {
        q5_3.classList.add("yellow_shadow");
    } else if (q5_3.value == '3000') {
        q5_3.classList.add("green_shadow");
    } else {
        q5_3.classList.add("red_shadow");
    }

    document.getElementById('p100_q5_1').value = '';
    document.getElementById('p100_q5_2').value = '';
    document.getElementById('p100_q5_3').value = '';
}

function correct_p100_q6() {
    var q6_1 = document.getElementById("p100_q6_1");

    q6_1.classList.remove("normal_shadow");
    q6_1.classList.remove("yellow_shadow");
    q6_1.classList.remove("red_shadow");
    q6_1.classList.remove("green_shadow");

    if (q6_1.value.length == 0) {
        q6_1.classList.add("yellow_shadow");
    } else if (q6_1.value == '<') {
        q6_1.classList.add("green_shadow");
    } else {
        q6_1.classList.add("red_shadow");
    }

    document.getElementById('p100_q6_1').value = '';
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
