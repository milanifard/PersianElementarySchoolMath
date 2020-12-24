
function $(id){ return document.getElementById(id);}
var answersExcept2prime = [2500,3000,7400,8000,6700];
function testQ2prime(index,id){
    var obj = $(id);
    if(obj.value == answersExcept2prime[index]){
        obj.style.backgroundColor = "#67b56f";
    }
    else{
        obj.style.backgroundColor = "#db3a2e";
    }
}
function testTextBox(id) {
    var obj = $(id);
    var select = $('forthSelect')
    var str = obj.value;
    if ((str.includes("پایین") || str.includes("payin"))&& select.value == 1)
    {
        alert("جواب شما درست است!");
    }
    else {
        alert("بیشتر دقت کن!");
    }
}
function firstvector(event,id) {
    var list = [27,439,105,247,807];
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    var first = $('firstDiv').getBoundingClientRect();
    var last = $('lastDiv').getBoundingClientRect();
    var select = $('firstSelect');
    var ebteda = first.left+15;
    var enteha = last.left+15;
    var postion = ((list[select.value -1]*(enteha-ebteda))/1000)+ebteda;
    var variance = (20 * (enteha-ebteda))/1000
    if(postion-variance<x&&x<postion+variance){
        alert("جواب شما درست است!")
    }
    else{
        alert("بیشتر دقت کن!");
    }
}
function secondvector(event,id) {
    var list = [920,2250,4781,6099];
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    var first = $('firstDiv2').getBoundingClientRect();
    var last = $('lastDiv2').getBoundingClientRect();
    var select = $('secondSelect');
    var ebteda = first.left+15;
    var enteha = last.left+15;
    var postion = ((list[select.value -1]*(enteha-ebteda))/10000)+ebteda;
    var variance = (200 * (enteha-ebteda))/10000
    if(postion-variance<x&&x<postion+variance){
        alert("جواب شما درست است!")
    }
    else{
        alert("بیشتر دقت کن!");
    }
}
function thirdvector(event,id) {
    var list = [1050,1170,1430,1685];
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    var first = $('firstDiv3').getBoundingClientRect();
    var last = $('lastDiv3').getBoundingClientRect();
    var select = $('thirdSelect');
    var ebteda = first.left+15;
    var enteha = last.left+15;
    var postion = (((list[select.value -1]-1000)*(enteha-ebteda))/1000)+ebteda;
    var variance = (20 * (enteha-ebteda))/1000
    if(postion-variance<x&&x<postion+variance){
        alert("جواب شما درست است!")
    }
    else{
        alert("بیشتر دقت کن!");
    }
}

function $(id){ return document.getElementById(id);}
var answersExcept2 = [3973,3,25,4,20,127,10,9000,4,3200,5,3000,4,2,700,3250,825]
function test2(index,id){
    var obj = $(id);
    if(obj.value == answersExcept2[index]){
        obj.style.backgroundColor = "#67b56f";
    }
    else{
        obj.style.backgroundColor = "#db3a2e";
    }
}
var answer2 = null;
function getValue(id){
    answer2 = $(id).value;
}
function checkAnswer2prime(id,index){
    if(answer2 != null){
        if(index === 1){
            if($(id).value == Math.floor(answer2/100)){
                $(id).style.backgroundColor = "#67b56f";
            }
            else {
                $(id).style.backgroundColor = "#db3a2e";
            }
        }
        else{
            if($(id).value == answer2%100){
                $(id).style.backgroundColor = "#67b56f";
            }
            else{
                $(id).style.backgroundColor = "#db3a2e";
            }
        }
    }
}

function $(id){ return document.getElementById(id);}
    var answersExcept1B = [70,8,200,40,2,3547,1084,4203,6009,2252,5051,960,1110,121,22]
    function test(index,id){
    var obj = $(id);
    if(obj.value == answersExcept1B[index]){
    obj.style.backgroundColor = "#67b56f";
}
    else{
    obj.style.backgroundColor = "#db3a2e";
}
}
    function checkAnswer2(id,index){
    if(index === 1){
    if($(id).value === '2000+2'){
    $(id).style.backgroundColor = "#67b56f";
}
    else {
    $(id).style.backgroundColor = "#db3a2e";
}
}
    else{
    if($(id).value === '1000+20+9'){
    $(id).style.backgroundColor = "#67b56f";
}
    else{
    $(id).style.backgroundColor = "#db3a2e";
}
}
}
    function testQ2(index,id){
    if( index ==1 ){
    $(id).style.backgroundColor =  "#67b56f";
}
    else {
    $(id).style.backgroundColor = "#db3a2e";
}
}
