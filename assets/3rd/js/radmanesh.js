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


function q1_68_r(enteredValue){
    console.log(enteredValue)
    if(enteredValue == 35){
        document.getElementById("Q1-68-right").style.borderBottomColor = "#76ff03"
    }
    else if(enteredValue != "" && enteredValue != 35){
        document.getElementById("Q1-68-right").style.borderBottomColor = "red"
    }
}


function q1_68_l(enteredValue){
    console.log(enteredValue)
    if(enteredValue == 24){
        document.getElementById("Q1-68-left").style.borderBottomColor = "#76ff03"
    }
    else if(enteredValue != "" && enteredValue != 24){
        document.getElementById("Q1-68-left").style.borderBottomColor = "red"
    }
}



function q2_68_r(){
    if(document.getElementById("Q2-68-r-2").value == 8){
        document.getElementById("Q2-68-r-2").style.backgroundColor = "#76ff03"
    } else {
        document.getElementById("Q2-68-r-2").style.backgroundColor = "red"
        document.getElementById("Q2-68-r-2").style.color = "white"
    }

    if(document.getElementById("Q2-68-r-3").value == 12){
        document.getElementById("Q2-68-r-3").style.backgroundColor = "#76ff03"
    } else {
        document.getElementById("Q2-68-r-3").style.backgroundColor = "red"
        document.getElementById("Q2-68-r-3").style.color = "white"
    }

    if(document.getElementById("Q2-68-r-4").value == 16){
        document.getElementById("Q2-68-r-4").style.backgroundColor = "#76ff03"
    } else {
        document.getElementById("Q2-68-r-4").style.backgroundColor = "red"
        document.getElementById("Q2-68-r-4").style.color = "white"
    }

    if(document.getElementById("Q2-68-r-5").value == 20){
        document.getElementById("Q2-68-r-5").style.backgroundColor = "#76ff03"
    } else {
        document.getElementById("Q2-68-r-5").style.backgroundColor = "red"
        document.getElementById("Q2-68-r-5").style.color = "white"
    }


    if(document.getElementById("Q2-68-r-6").value == 24){
        document.getElementById("Q2-68-r-6").style.backgroundColor = "#76ff03"
    } else {
        document.getElementById("Q2-68-r-6").style.backgroundColor = "red"
        document.getElementById("Q2-68-r-6").style.color = "white"
    }


    if(document.getElementById("Q2-68-r-7").value == 28){
        document.getElementById("Q2-68-r-7").style.backgroundColor = "#76ff03"
    } else {
        document.getElementById("Q2-68-r-7").style.backgroundColor = "red"
        document.getElementById("Q2-68-r-7").style.color = "white"
    }


    if(document.getElementById("Q2-68-r-8").value == 32){
        document.getElementById("Q2-68-r-8").style.backgroundColor = "#76ff03"
    } else {
        document.getElementById("Q2-68-r-8").style.backgroundColor = "red"
        document.getElementById("Q2-68-r-8").style.color = "white"
    }


    if(document.getElementById("Q2-68-r-9").value == 36){
        document.getElementById("Q2-68-r-9").style.backgroundColor = "#76ff03"
    } else {
        document.getElementById("Q2-68-r-9").style.backgroundColor = "red"
        document.getElementById("Q2-68-r-9").style.color = "white"
    }

}


function q2_68_l(){
    if(document.getElementById("Q2-68-l-2-7").value == 14){
        document.getElementById("Q2-68-l-2-7").style.backgroundColor = "#76ff03"
    } else {
        document.getElementById("Q2-68-l-2-7").style.backgroundColor = "red"
        document.getElementById("Q2-68-l-2-7").style.color = "white"
    }
    

    if(document.getElementById("Q2-68-l-2-6").value == 12){
        document.getElementById("Q2-68-l-2-6").style.backgroundColor = "#76ff03"
    } else {
        document.getElementById("Q2-68-l-2-6").style.backgroundColor = "red"
        document.getElementById("Q2-68-l-2-6").style.color = "white"
    }


    if(document.getElementById("Q2-68-l-2-5").value == 10){
        document.getElementById("Q2-68-l-2-5").style.backgroundColor = "#76ff03"
    } else {
        document.getElementById("Q2-68-l-2-5").style.backgroundColor = "red"
        document.getElementById("Q2-68-l-2-5").style.color = "white"
    }



    if(document.getElementById("Q2-68-l-3-7").value == 21){
        document.getElementById("Q2-68-l-3-7").style.backgroundColor = "#76ff03"
    } else {
        document.getElementById("Q2-68-l-3-7").style.backgroundColor = "red"
        document.getElementById("Q2-68-l-3-7").style.color = "white"
    }
    

    if(document.getElementById("Q2-68-l-3-6").value == 18){
        document.getElementById("Q2-68-l-3-6").style.backgroundColor = "#76ff03"
    } else {
        document.getElementById("Q2-68-l-3-6").style.backgroundColor = "red"
        document.getElementById("Q2-68-l-3-6").style.color = "white"
    }


    if(document.getElementById("Q2-68-l-3-5").value == 15){
        document.getElementById("Q2-68-l-3-5").style.backgroundColor = "#76ff03"
    } else {
        document.getElementById("Q2-68-l-3-5").style.backgroundColor = "red"
        document.getElementById("Q2-68-l-3-5").style.color = "white"
    }  
}


function q3_68(a, b, returnedValue){
    if(a * b == returnedValue){
        let id = "Q3-68-" + a + "-" + b
        document.getElementById(id).style.borderBottomColor = "#76ff03"
    }
    else 
    {
        let id = "Q3-68-" + a + "-" + b
        document.getElementById(id).style.borderBottomColor = "red"
    }
}