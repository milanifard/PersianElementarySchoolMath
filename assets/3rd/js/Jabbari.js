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

var answerRectangle = [1,5,2,3,3,4];
    var click_rectangle = (function() {
        var counter =[0,0,0,0,0,0];
        var flag = [
            [0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0],
            [0,0,0,0,0,0,0,0]
        ];
        var rectangle_IDs = [
            ["rectangle001","rectangle002"],
            ["rectangle011","rectangle012","rectangle013","rectangle014","rectangle015","rectangle016","rectangle017","rectangle018"],
            ["rectangle101","rectangle102","rectangle103"],
            ["rectangle111","rectangle112","rectangle113","rectangle114","rectangle115","rectangle116"],
            ["rectangle201","rectangle202","rectangle203","rectangle204"],
            ["rectangle211","rectangle212","rectangle213","rectangle214","rectangle215","rectangle216","rectangle217","rectangle218"]
        ];
        return function(id,index0,index1) {
            var inputValue = document.getElementById(id);
            
            if(flag[index0][index1] == 0  ){
                flag[index0][index1] = 1;
                counter[index0]++;
                inputValue.style.backgroundColor = "#d35d6e";
            }
            else if(flag[index0][index1] != 0 && counter[index0] == answerRectangle[index0]){
                flag[index0][index1] = 0;
                counter[index0]--;
                inputValue.style.backgroundColor = "#fff4f8";
                change_color_red(flag[index0],rectangle_IDs[index0]);
            }
            else if(flag[index0][index1] != 0){
                flag[index0][index1] = 0;
                counter[index0]--;
                inputValue.style.backgroundColor = "#fff4f8";
                change_color_red(flag[index0],rectangle_IDs[index0]);
            }
            if(counter[index0] > answerRectangle[index0]){
                change_color_red(flag[index0],rectangle_IDs[index0]);
            }
            if(counter[index0] == answerRectangle[index0]){
                change_color_green(flag[index0],rectangle_IDs[index0]);    
            }

    };
    })();

    function change_color_green(itre,id){
        for(let i = 0 ; i< itre.length ; i++){
            if(itre[i] == 1){
                document.getElementById(id[i]).style.backgroundColor = "#5aa469";
            }
        }
    }
    function change_color_red(itre,id){
        for(let i = 0 ; i< itre.length ; i++){
            if(itre[i] == 1){
                document.getElementById(id[i]).style.backgroundColor = "#d35d6e";
            }
        }
    }