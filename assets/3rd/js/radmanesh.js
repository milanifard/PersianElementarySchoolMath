function q1_67(){
    if(document.getElementById("Q1-67-top-right-2").value == 12 && 
       document.getElementById("Q1-67-top-right-1").value  == 3 && 
       document.getElementById("Q1-67-top-right-0").value == 4) {

        document.getElementById("Q1-67-top-right-2").style.borderBottomColor = "green"
        document.getElementById("Q1-67-top-right-1").style.borderBottomColor = "green"
        document.getElementById("Q1-67-top-right-0").style.borderBottomColor = "green"
    }
    else
    {
        document.getElementById("Q1-67-top-right-2").style.borderBottomColor = "red"
        document.getElementById("Q1-67-top-right-1").style.borderBottomColor = "red"
        document.getElementById("Q1-67-top-right-0").style.borderBottomColor = "red"
    }


    if(document.getElementById("Q1-67-top-center-2").value == 12 && 
       document.getElementById("Q1-67-top-center-1").value  == 4 && 
       document.getElementById("Q1-67-top-center-0").value == 3) {

        document.getElementById("Q1-67-top-center-2").style.borderBottomColor = "green"
        document.getElementById("Q1-67-top-center-1").style.borderBottomColor = "green"
        document.getElementById("Q1-67-top-center-0").style.borderBottomColor = "green"
    }
    else
    {
        document.getElementById("Q1-67-top-center-2").style.borderBottomColor = "red"
        document.getElementById("Q1-67-top-center-1").style.borderBottomColor = "red"
        document.getElementById("Q1-67-top-center-0").style.borderBottomColor = "red"
    }


    if(document.getElementById("Q1-67-top-left-2").value == 12 && 
       document.getElementById("Q1-67-top-left-1").value  == 4 && 
       document.getElementById("Q1-67-top-left-0").value == 3) {

        document.getElementById("Q1-67-top-left-2").style.borderBottomColor = "green"
        document.getElementById("Q1-67-top-left-1").style.borderBottomColor = "green"
        document.getElementById("Q1-67-top-left-0").style.borderBottomColor = "green"
    }
    else
    {
        document.getElementById("Q1-67-top-left-2").style.borderBottomColor = "red"
        document.getElementById("Q1-67-top-left-1").style.borderBottomColor = "red"
        document.getElementById("Q1-67-top-left-0").style.borderBottomColor = "red"
    }

    // Reverse : Left to Right
    
    if(document.getElementById("Q1-67-bottom-left-2").value == 12 && 
       document.getElementById("Q1-67-bottom-left-1").value  == 3 && 
       document.getElementById("Q1-67-bottom-left-0").value == 4) {

     document.getElementById("Q1-67-bottom-left-2").style.borderBottomColor = "green"
     document.getElementById("Q1-67-bottom-left-1").style.borderBottomColor = "green"
     document.getElementById("Q1-67-bottom-left-0").style.borderBottomColor = "green"
    }
    else
    {
        document.getElementById("Q1-67-bottom-left-2").style.borderBottomColor = "red"
        document.getElementById("Q1-67-bottom-left-1").style.borderBottomColor = "red"
        document.getElementById("Q1-67-bottom-left-0").style.borderBottomColor = "red"
    }


        
    if(document.getElementById("Q1-67-bottom-center-2").value == 12 && 
       document.getElementById("Q1-67-bottom-center-1").value  == 4 && 
       document.getElementById("Q1-67-bottom-center-0").value == 3) {

     document.getElementById("Q1-67-bottom-center-2").style.borderBottomColor = "green"
     document.getElementById("Q1-67-bottom-center-1").style.borderBottomColor = "green"
     document.getElementById("Q1-67-bottom-center-0").style.borderBottomColor = "green"
    }
    else
    {
        document.getElementById("Q1-67-bottom-center-2").style.borderBottomColor = "red"
        document.getElementById("Q1-67-bottom-center-1").style.borderBottomColor = "red"
        document.getElementById("Q1-67-bottom-center-0").style.borderBottomColor = "red"
    }


    if(document.getElementById("Q1-67-bottom-right-2").value == 12 &&
       (document.getElementById("Q1-67-bottom-right-1").value * document.getElementById("Q1-67-bottom-right-0").value) == 12)
    {
    document.getElementById("Q1-67-bottom-right-2").style.borderBottomColor = "green"
    document.getElementById("Q1-67-bottom-right-1").style.borderBottomColor = "green"
    document.getElementById("Q1-67-bottom-right-0").style.borderBottomColor = "green"
    }
    else
    {
        document.getElementById("Q1-67-bottom-right-2").style.borderBottomColor = "red"
        document.getElementById("Q1-67-bottom-right-1").style.borderBottomColor = "red"
        document.getElementById("Q1-67-bottom-right-0").style.borderBottomColor = "red"
    }

}



function q2_67_top_right(chosenItem){
    // if (document.getElementById(""))
    if(chosenItem == "correct"){
        document.getElementById("Q2-67-top-right-td").style.borderColor = "green"
        document.getElementById("Q2-67-top-right-td").style.borderWidth = "0.4vw"
    }
    else {
        document.getElementById("Q2-67-top-right-td").style.borderColor = "red"
        document.getElementById("Q2-67-top-right-td").style.borderWidth = "0.4vw"
    }
}


function q2_67_top_left(chosenItem){
    // if (document.getElementById(""))
    if(chosenItem == "correct"){
        document.getElementById("Q2-67-top-left-td").style.borderColor = "green"
        document.getElementById("Q2-67-top-left-td").style.borderWidth = "0.4vw"
    }
    else {
        document.getElementById("Q2-67-top-left-td").style.borderColor = "red"
        document.getElementById("Q2-67-top-left-td").style.borderWidth = "0.4vw"
    }
}

function q2_67_center_right(chosenItem){
    // if (document.getElementById(""))
    if(chosenItem == "correct"){
        document.getElementById("Q2-67-center-right-td").style.borderColor = "green"
        document.getElementById("Q2-67-center-right-td").style.borderWidth = "0.4vw"
    }
    else {
        document.getElementById("Q2-67-center-right-td").style.borderColor = "red"
        document.getElementById("Q2-67-center-right-td").style.borderWidth = "0.4vw"
    }
}


function q2_67_center_left(chosenItem){
    // if (document.getElementById(""))
    if(chosenItem == "correct"){
        document.getElementById("Q2-67-center-left-td").style.borderColor = "green"
        document.getElementById("Q2-67-center-left-td").style.borderWidth = "0.4vw"
    }
    else {
        document.getElementById("Q2-67-center-left-td").style.borderColor = "red"
        document.getElementById("Q2-67-center-left-td").style.borderWidth = "0.4vw"
    }
}


function q2_67_bottom_right(enteredValue){
    console.log(enteredValue)
    if(enteredValue == 28){
        document.getElementById("Q2-67-bottom-right").style.borderBottomColor = "green"
    }
    else if(enteredValue != "" && enteredValue != 28){
        document.getElementById("Q2-67-bottom-right").style.borderBottomColor = "red"
    }
}


function q2_67_bottom_left_r(enteredValue){
    console.log(enteredValue)
    if(enteredValue == 15){
        document.getElementById("Q2-67-bottom-left-r").style.borderBottomColor = "green"
    }
    else if(enteredValue != "" && enteredValue != 15){
        document.getElementById("Q2-67-bottom-left-r").style.borderBottomColor = "red"
    }
}

function q2_67_bottom_left_c(enteredValue){
    console.log(enteredValue)
    if(enteredValue == 12){
        document.getElementById("Q2-67-bottom-left-c").style.borderBottomColor = "green"
    }
    else if(enteredValue != "" && enteredValue != 12){
        document.getElementById("Q2-67-bottom-left-c").style.borderBottomColor = "red"
    }
}

function q2_67_bottom_left_l(enteredValue){
    console.log(enteredValue)
    if(enteredValue == 9){
        document.getElementById("Q2-67-bottom-left-l").style.borderBottomColor = "green"
    }
    else if(enteredValue != "" && enteredValue != 9){
        document.getElementById("Q2-67-bottom-left-l").style.borderBottomColor = "red"
    }
}