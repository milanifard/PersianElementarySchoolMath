function $(id){ return document.getElementById(id);}
var answerPack70A = ['4','3','12','3','4','12','2','4','8','4','2','8','3','5','15','5','3','15','2','4','8','4','2','8'];
var answerPack70AFA=['4','3','12','3','4','12','2','4','8','4','2','8','3','5','15','5','3','15','2','4','8','4','2','8'];
var answerPack71C=['9'];
var answerPack71CFA=['۹'];
var answerPack71D=['10'];
var answerPack71DFA=['۱۰'];
var answerPack71E=['۱۰'];
var answerPack71EFA=['۱۰'];
var answerPack71F=['۱۰'];
var answerPack71FFA=['۱۰'];




function test_answer(index,id) {
    var obj = $(id);
    if (obj.value === answerPack1[index]||obj.value===answerPack1FA[index]) {
        obj.style.backgroundColor = "#67b56f";

    } else {
        obj.style.backgroundColor = "#db3a2e";

    }
}


function test_answer_type2(index,id){
    var obj = $(id);
    if (obj.value === answerPack3[index]||obj.value===answerPack3FA[index]) {
        obj.style.backgroundColor = "#67b56f";
    } else {
        obj.style.backgroundColor = "#db3a2e";
    }
}

function test_answer_type3(index,id){
    var obj = $(id);
    if (obj.value === answerPack5[index] || obj.value===answerPack5FA[index]) {
        obj.style.backgroundColor = "#67b56f";
    } else {
        obj.style.backgroundColor = "#db3a2e";
    }
}

function test_answer_type4(index,id){
    var obj = $(id);
    if (obj.value === answerPack5[index] || obj.value===answerPack5FA[index]) {
        obj.style.backgroundColor = "#67b56f";
    } else {
        obj.style.backgroundColor = "#db3a2e";
    }
}
