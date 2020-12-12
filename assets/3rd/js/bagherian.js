//--------------PAGE 30--------------//

function checkShapeCorrectness(id){
    if(id == '6'){
        document.getElementById('shapeAnswer6').style.backgroundColor="#37ee56";
    }else{
        document.getElementById('shapeAnswer'+id).style.backgroundColor="#ce2f24";
    }
    
}

function checkNumberSerialCorrectness(id ,value){

    if(id == '5-1-5'){
        if(value == 4000){
            document.getElementById(id).style.backgroundColor="#37ee56";
        }else{
            document.getElementById(id).style.backgroundColor="#ce2f24";
        }
    }

    if(id == '5-1-4'){
        if(value == 5000){
            document.getElementById(id).style.backgroundColor="#37ee56";
        }else{
            document.getElementById(id).style.backgroundColor="#ce2f24";
        }
    }

    if(id == '5-1-3'){
        if(value == 6000){
            document.getElementById(id).style.backgroundColor="#37ee56";
        }else{
            document.getElementById(id).style.backgroundColor="#ce2f24";
        }
    }

    if(id == '5-1-2'){
        if(value == 7000){
            document.getElementById(id).style.backgroundColor="#37ee56";
        }else{
            document.getElementById(id).style.backgroundColor="#ce2f24";
        }
    }

    if(id == '5-1-1'){
        if(value == 8000){
            document.getElementById(id).style.backgroundColor="#37ee56";
        }else{
            document.getElementById(id).style.backgroundColor="#ce2f24";
        }
    }


    //-----------------//

    if(id == '5-2-5'){
        if(value == 7000){
            document.getElementById(id).style.backgroundColor="#37ee56";
        }else{
            document.getElementById(id).style.backgroundColor="#ce2f24";
        }
    }

    if(id == '5-2-4'){
        if(value == 9000){
            document.getElementById(id).style.backgroundColor="#37ee56";
        }else{
            document.getElementById(id).style.backgroundColor="#ce2f24";
        }
    }

    if(id == '5-2-3'){
        if(value == 11000){
            document.getElementById(id).style.backgroundColor="#37ee56";
        }else{
            document.getElementById(id).style.backgroundColor="#ce2f24";
        }
    }

    if(id == '5-2-2'){
        if(value == 13000){
            document.getElementById(id).style.backgroundColor="#37ee56";
        }else{
            document.getElementById(id).style.backgroundColor="#ce2f24";
        }
    }

    if(id == '5-2-1'){
        if(value == 15000){
            document.getElementById(id).style.backgroundColor="#37ee56";
        }else{
            document.getElementById(id).style.backgroundColor="#ce2f24";
        }
    }

        //-----------------//

        if(id == '5-3-5'){
            if(value == 8000){
                document.getElementById(id).style.backgroundColor="#37ee56";
            }else{
                document.getElementById(id).style.backgroundColor="#ce2f24";
            }
        }
    
        if(id == '5-3-4'){
            if(value == 10000){
                document.getElementById(id).style.backgroundColor="#37ee56";
            }else{
                document.getElementById(id).style.backgroundColor="#ce2f24";
            }
        }
    
        if(id == '5-3-3'){
            if(value == 12000){
                document.getElementById(id).style.backgroundColor="#37ee56";
            }else{
                document.getElementById(id).style.backgroundColor="#ce2f24";
            }
        }
    
        if(id == '5-3-2'){
            if(value == 14000){
                document.getElementById(id).style.backgroundColor="#37ee56";
            }else{
                document.getElementById(id).style.backgroundColor="#ce2f24";
            }
        }
    
        if(id == '5-3-1'){
            if(value == 16000){
                document.getElementById(id).style.backgroundColor="#37ee56";
            }else{
                document.getElementById(id).style.backgroundColor="#ce2f24";
            }
        }

}

function checkCubeCorrectness(id ,value){
    if(id == 'cube1'){
        if(value == 4000){
            document.getElementById(id).style.backgroundColor="#37ee56";
            document.getElementById('correctAnswer1').style.display = "initial";
            document.getElementById('wrongAnswer1').style.display = "none";
        }else{
            document.getElementById(id).style.backgroundColor="#ce2f24";
            document.getElementById('wrongAnswer1').style.display = "initial";
            document.getElementById('correctAnswer1').style.display = "none";
        }
    }

    if(id == 'cube2'){

        if(value == 6000){
            document.getElementById(id).style.backgroundColor="#37ee56";
            document.getElementById('correctAnswer2').style.display = "initial";
            document.getElementById('wrongAnswer2').style.display = "none";
        }else{
            document.getElementById(id).style.backgroundColor="#ce2f24";
            document.getElementById('wrongAnswer2').style.display = "initial";
            document.getElementById('correctAnswer2').style.display = "none";
        }
    }
    

    if(id == 'cube3'){
        if(value == 5000){
            document.getElementById(id).style.backgroundColor="#37ee56";
            document.getElementById('correctAnswer3').style.display = "initial";
            document.getElementById('wrongAnswer3').style.display = "none";
        }else{
            document.getElementById(id).style.backgroundColor="#ce2f24";
            document.getElementById('wrongAnswer3').style.display = "initial";
            document.getElementById('correctAnswer3').style.display = "none";
        }
    }
}

function checkQuestion1(id ,value){
    if(value == 9){
        document.getElementById(id).style.backgroundColor="#37ee56";
    }else{
        document.getElementById(id).style.backgroundColor="#ce2f24";
    }
}

function checkQuestion2(id ,value){
    if(value == 4){
        document.getElementById(id).style.backgroundColor="#37ee56";
    }else{
        document.getElementById(id).style.backgroundColor="#ce2f24";
    }
}

function checkQuestion3(id ,value){
    if(value == 100){
        document.getElementById(id).style.backgroundColor="#37ee56";
    }else{
        document.getElementById(id).style.backgroundColor="#ce2f24";
    }
}

function checkQuestion3_2(id ,value){
    if(value == 1000){
        document.getElementById(id).style.backgroundColor="#37ee56";
    }else{
        document.getElementById(id).style.backgroundColor="#ce2f24";
    }
}

//--------------PAGE 29--------------//