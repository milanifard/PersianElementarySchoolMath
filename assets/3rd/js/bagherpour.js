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

function algooShomaresh(){
    for(i=1 ; i<8; i++){
        console.log(i);
        if(document.getElementById(`tamrin1avali${i}`) == null)
        document.getElementById(`tamrin1avali${i}`).style.color = "blue";
        console.log(document.getElementById(`tamrin1avali${i}`).style.color);
    }
    
    if (document.getElementById("tamrin1avali1").value == 20){
        document.getElementById("tamrin1avali1").style.color = "green";
    }
    else{
        document.getElementById("tamrin1avali1").style.color = "red";
    }
    if (document.getElementById("tamrin1avali2").value == 24){
        document.getElementById("tamrin1avali2").style.color = "green";
    }
    else{
        document.getElementById("tamrin1avali2").style.color = "red";
    }
    if (document.getElementById("tamrin1avali3").value == 28){
        document.getElementById("tamrin1avali3").style.color = "green";
    }
    else{
        document.getElementById("tamrin1avali3").style.color = "red";
    }
    if (document.getElementById("tamrin1avali4").value == 32){
        document.getElementById("tamrin1avali4").style.color = "green";
    }
    else{
        document.getElementById("tamrin1avali4").style.color = "red";
    }
    if (document.getElementById("tamrin1avali5").value == 36){
        document.getElementById("tamrin1avali5").style.color = "green";
    }
    else{
        document.getElementById("tamrin1avali5").style.color = "red";
    }
    if (document.getElementById("tamrin1avali6").value == 40){
        document.getElementById("tamrin1avali6").style.color = "green";
    }
    else{
        document.getElementById("tamrin1avali6").style.color = "red";
    }
    if (document.getElementById("tamrin1avali7").value == 44){
        document.getElementById("tamrin1avali7").style.color = "green";
    }
    else{
        document.getElementById("tamrin1avali7").style.color = "red";
    }


}
