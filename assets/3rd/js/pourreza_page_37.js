
    function $(id){ return document.getElementById(id);}
    var answersExcept2 = [2500,3000,7400,8000,6700];
    function testQ2(index,id){
    var obj = $(id);
    if(obj.value == answersExcept2[index]){
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
