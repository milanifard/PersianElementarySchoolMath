function p22answerQ1() {   
    if (document.getElementById('r12').checked) {
        document.getElementById("labelRadio12").style.color = "red";
        document.getElementById("labelRadio11").style.color = "black";
    }
    else if (document.getElementById('r11').checked) {
        document.getElementById("labelRadio11").style.color = "green";
        document.getElementById("labelRadio12").style.color = "black";
    }
}
function p22answerQ2(){
    if (document.getElementById('r21').checked) {
        document.getElementById("labelRadio21").style.color = "red";
        document.getElementById("labelRadio22").style.color = "black";
        document.getElementById("labelRadio23").style.color = "black";
    }
    else if (document.getElementById('r22').checked) {
        document.getElementById("labelRadio21").style.color = "black";
        document.getElementById("labelRadio22").style.color = "green";
        document.getElementById("labelRadio23").style.color = "black";
    }
    else if (document.getElementById('r23').checked) {
        document.getElementById("labelRadio21").style.color = "black";
        document.getElementById("labelRadio22").style.color = "black";
        document.getElementById("labelRadio23").style.color = "red";
    }
}

function checkInputTextCorrect(id , value , answer ){   
    if (value == answer){
        makeGreen(id);
    }
    else{
        makeRed(id);
    }
}
 function makeGreen(id){    
    document.getElementById(id).style.color = "green";
 }
 function makeRed(id){    
    document.getElementById(id).style.color = "red";
 }