
function checkShapeCorrectness(id){
    if(id == '4'){
        document.getElementById('shapeAnswer4').style.backgroundColor="#37ee56";
    }else{
        document.getElementById('shapeAnswer'+id).style.backgroundColor="#ce2f24";
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

function isCorrectValue(id ,value ,correctAnswer){
    if(value == correctAnswer){
        document.getElementById(id).style.backgroundColor="#37ee56";
    }else{
        document.getElementById(id).style.backgroundColor="#ce2f24";
    }
}

function checkCube29Correctness(id , answerId){
    if(id == '29-q2-1'){
            document.getElementById(answerId).style.display = "initial";
            
            document.getElementById('29-q2-wrongAnswer2').style.display = "none";
            document.getElementById('29-q2-wrongAnswer3').style.display = "none";
            document.getElementById('29-q2-wrongAnswer4').style.display = "none";

        }else{
            document.getElementById(answerId).style.display = "initial";
            document.getElementById('29-q2-correctAnswer1').style.display = "none";
        }
    }
