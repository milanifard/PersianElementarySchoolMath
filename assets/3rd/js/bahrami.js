function $(id){ return document.getElementById(id);}

// Page 34
var answersExcept1A = [2324,'<',3111,2333,'<',2511,2310,'<',2318]

function test_P34(index,id){
    var obj = $(id);
    if(obj.value == answersExcept1A[index]){
        obj.style.backgroundColor = "#67b56f";
    }
    else{
        obj.style.backgroundColor = "#db3a2e";
    }
}

function testTextBoxQ2_P34(id) {
    var obj = $(id);
    var str = obj.value;
    if ((str.includes("هزارگان") && str.includes("صدگان")) && str.includes("دهگان") && str.includes("يکان")){
        alert("جواب شما درست است!");
    }
    else {
        alert("بیشتر دقت کن!");
    }   
}

// page 36
var answersExcept1B = [3600,4200,7430,'شش هزار و هشتصد و هفتاد و دو',1300,1400,1500,1600,1700,1800,2500,3000,3500,4000,4500,5000,1400,1600,1800,2000,2200,2400,2600,2800,3000,5000,5100,5200,5300,5400,5500,5600,5700,5800,5900,6000,3000,7]    

function test(index,id){
    var obj = $(id);
    if(obj.value == answersExcept1B[index]){
        obj.style.backgroundColor = "#67b56f";
    }
    else{
        obj.style.backgroundColor = "#db3a2e";
    }
}

// page 35
function testTextBoxQ1_P35(id) {
    var obj = $(id);
    var str = obj.value;
    if (str.length == 0) {
        alert("شما به این سوال پاسخ نداده اید");
    }
    else {
        alert("تصحیح این سوال به عهده والدین و یا معلم دانش آموز می باشد.");
    }
}

function testTextBoxQ2_P35(id) {
    var obj = $(id);
    var select = $('select-q2')
    var str = obj.value;
    if ((str.includes("4000 تومان") || str.includes("4 هزار تومان")) && select.value == 1) {
        alert("جواب شما درست است!");
    }
    else {
        alert("بیشتر دقت کن!");
    }
}
function testTextBoxQ3_P35(id) {
    var obj = $(id);
    var select = $('select-q3')
    var str = obj.value;
    if ((str.includes("4000 ليره") || str.includes("4 هزار ليره")) && select.value == 2) {
        alert("جواب شما درست است!");
    }
    else {
        alert("بیشتر دقت کن!");
    }
}
function testTextBoxQ4_P35() {
    var select = $('select-q4')
    if (select.value == 1) {
        alert("جواب شما درست است!");
    }
    else {
        alert("بیشتر دقت کن!");
    }
}
