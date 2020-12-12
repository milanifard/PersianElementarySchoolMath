
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
