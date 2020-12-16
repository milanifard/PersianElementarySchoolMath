
    function $(id){ return document.getElementById(id);}
    var answersExcept2 = [3973,3,25,4,20,127,10,9000,4,3200,5,3000,4,2,700,3250,825]
    function test(index,id){
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
    function checkAnswer2(id,index){
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
