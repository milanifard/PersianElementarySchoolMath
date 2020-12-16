
function $(id){ return document.getElementById(id);}
var answerPack1 = [2500,3000,7400,8000,6700];
var answerPack2 =['890','895','897','490','495','497','۸۹۰','۸۹۵','۸۹۷','۴۹۰','۴۹۵','۴۹۷'];
function test1_26(index,id) {
    var obj = $(id);
    if (obj.value == answerPack1[index]) {
        obj.style.backgroundColor = "#67b56f";
    } else {
        obj.style.backgroundColor = "#db3a2e";
    }
}

function test2_26(id){
    var obj=$(id)
    if(answerPack2.includes(obj.value)){
        obj.style.backgroundColor = "#67b56f";
        window.alert("احسنت!");
    }
    else {
    obj.style.backgroundColor = "#db3a2e";
        window.alert("غلط  بود!");
    }
}