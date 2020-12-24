function $(id){ return document.getElementById(id);}
var answerQustion1 = [1,2,2,4,1,4,6,10,8,9];
function checkvalue(i,id) {
    var inputValue = $(id);
    if(inputValue.value == answerQustion1[i]){
        inputValue.style.backgroundColor = "#5aa469";
        display_success();
    }
    else if(inputValue.value != ""){
        inputValue.style.backgroundColor = "#d35d6e";
        display_unsuccess();
    }
}
var answerFraction = ["1","1/4","2/4","3/4","4/4","1/2","5/8","7/8",
                    "4/8","6/8","1/8","3/6","2/3","9/10","13/24","1/3","6/10","3/5","8/10","4/5"];
function checkValueFraction(i,id) {
    var inputValue = $(id);
    if(i == 0 && inputValue.value.replace(/ +/g, "") == answerFraction[i+4]){
        inputValue.style.backgroundColor = "#5aa469"; 
        display_success();
    }
    else if(i == 2 && inputValue.value.replace(/ +/g, "") == answerFraction[i+3]){
        inputValue.style.backgroundColor = "#5aa469"; 
        display_success();
    }
    else if(i == 8 && inputValue.value.replace(/ +/g, "") == answerFraction[i-3]){
        inputValue.style.backgroundColor = "#5aa469"; 
        display_success();
    }
    else if(i == 9 && inputValue.value.replace(/ +/g, "") == answerFraction[i-6]){
        inputValue.style.backgroundColor = "#5aa469"; 
        display_success();
    }
    else if(i == 11 && inputValue.value.replace(/ +/g, "") == answerFraction[i-6]){
        inputValue.style.backgroundColor = "#5aa469"; 
        display_success();
    }
    else if(i == 16 && inputValue.value.replace(/ +/g, "") == answerFraction[i+1]){
        inputValue.style.backgroundColor = "#5aa469"; 
        display_success();
    }
    else if(i == 18 && inputValue.value.replace(/ +/g, "") == answerFraction[i+1]){
        inputValue.style.backgroundColor = "#5aa469"; 
        display_success();
    }
    else if(inputValue.value.replace(/ +/g, "") == answerFraction[i]){
        inputValue.style.backgroundColor = "#5aa469";
        display_success();
    }
    else{
        inputValue.style.backgroundColor = "#d35d6e";
        display_unsuccess();
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
            display_success();
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

function testTextBox(id) {
    var obj = $(id);
    var str = obj.value;
    if (str.includes("وسط") || str.includes("سه قسمت") || str.includes("چهار") || str.includes("دو") || str.includes("مساوی"))
    {
        display_success();
    }
    else {
        display_unsussessful();
    }
}


$("page_switcher").onkeypress = function (e) {

    if (e.which === 13) {

        let page_no = $("page_switcher").value;

        let tag = document.createElement("a");
        tag.href = 'book_3_' + page_no + '.html';

        tag.id = "switch";
        document.body.appendChild(tag);

        $("switch").click();
    }
}

var display_success = () => {
    let suc_el = document.querySelector('#success-message')

    suc_el.style.display = 'flex'

    setTimeout(() => {
        suc_el.style.opacity = '1'
    }, 100);

    setTimeout(() => {
        suc_el.style.opacity = '0'
    }, 2000);

    setTimeout(() => {
        suc_el.style.display = 'none'
    }, 3000);

}
var display_unsuccess = () => {
    let suc_el = document.querySelector('#unsuccess-message')

    suc_el.style.display = 'flex'

    setTimeout(() => {
        suc_el.style.opacity = '1'
    }, 100);

    setTimeout(() => {
        suc_el.style.opacity = '0'
    }, 2000);

    setTimeout(() => {
        suc_el.style.display = 'none'
    }, 3000);

}
