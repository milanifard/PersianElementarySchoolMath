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
       makeBlack("labelRadio23");
    }
    else if (document.getElementById('r22').checked) {
        makeBlack("labelRadio21");
        makeGreen("labelRadio22");
        makeBlack("labelRadio23");
    }
    else if (document.getElementById('r23').checked) {
        makeBlack("labelRadio21");
        makeBlack("labelRadio22");
        makeRed("labelRadio23");
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

 function p23answerQ7(){
    if (document.getElementById('r71').checked) {
        makeGreen("labelRadio71");
        makeBlack("labelRadio72");
        makeBlack("labelRadio73");
    }
    else if (document.getElementById('r72').checked) {
        makeBlack("labelRadio71");
        makeRed("labelRadio72");
        makeBlack("labelRadio73");
    }
    else if (document.getElementById('r73').checked) {
        makeBlack("labelRadio71");
        makeBlack("labelRadio72");
        makeRed("labelRadio73");
    } 
}

function p23answerQ9(inputId , labelId, ans){
    if (document.getElementById(inputId).checked){
        if(ans == 0)
            makeRed(labelId);
        else if(ans == 1)
            makeGreen(labelId);
    }
    else makeBlack(labelId);
}