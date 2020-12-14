answerQustion1 = [1,2,2,4,1,4,6,10,8]
function checkvalue(i,x) {
    var inputValue = document.getElementById(x);
    if(inputValue.value == answerQustion1[i]){
        // alert("افرین");
        inputValue.style.backgroundColor = "#5aa469";

    }
    else if(inputValue.value != ""){
        inputValue.style.backgroundColor = "#d35d6e";
    }
}

function normalImg(x) {
    var inputValue = document.getElementById("checkQuestion1");
    if(inputValue.value != 1){
        // alert("افرین")
        inputValue.style.backgroundColor = "#d35d6e";

    }
}