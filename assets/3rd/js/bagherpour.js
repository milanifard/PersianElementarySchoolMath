function p22answerQ1() {   
    if (document.getElementById('r12').checked) {
        makeRed("labelRadio12");
        makeBlack("labelRadio11");
    }
    else if (document.getElementById('r11').checked) {
        makeGreen("labelRadio11");
        makeBlack("labelRadio12");
    }
}
function makeGreen(id){    
    document.getElementById(id).style.color = "green";
 }
 function makeRed(id){    
    document.getElementById(id).style.color = "red";
 }
 function makeBlack(id){    
    document.getElementById(id).style.color = "black";
 }


function p22answerQ2(){
    if (document.getElementById('r21').checked) {
        makeRed("labelRadio21");
       makeBlack("labelRadio22");
       makeBlack("labelRadio23");
    }
    else if (document.getElementById('r22').checked) {
        makeBlack("labelRadio21");
        makeGreen("labelRadio22");
        makeBlack("labelRadio23");
    }
    else if (document.getElementById('r23').checked) {
        makeBlack("labelRadio21");
        makeBlack("labelRadio22");
        makeRed("labelRadio23");
    }
}

function checkInputTextCorrect(id , value , answer ){   
    if (value == answer){
        makeGreen(id);
    }
    else{
        makeRed(id);
    }
}

 function p23answerQ7(){
    if (document.getElementById('r71').checked) {
        makeGreen("labelRadio71");
        makeBlack("labelRadio72");
        makeBlack("labelRadio73");
    }
    else if (document.getElementById('r72').checked) {
        makeBlack("labelRadio71");
        makeRed("labelRadio72");
        makeBlack("labelRadio73");
    }
    else if (document.getElementById('r73').checked) {
        makeBlack("labelRadio71");
        makeBlack("labelRadio72");
        makeRed("labelRadio73");
    } 
}

function p23answerQ9(inputId , labelId, ans){
    if (document.getElementById(inputId).checked){
        if(ans == 0)
            makeRed(labelId);
        else if(ans == 1)
            makeGreen(labelId);
    }
    else makeBlack(labelId);
}

function p24answerQ1(){
    if (document.getElementById('rt1').checked) {
        makeRed("rt1l");
        makeBlack("rt2l");
        makeBlack("rt3l");
    }
    else if (document.getElementById('rt2').checked) {
        makeBlack("rt1l");
        makeGreen("rt2l");
        makeBlack("rt3l");
    }
    else if (document.getElementById('rt3').checked) {
        makeBlack("rt1l");
        makeBlack("rt2l");
        makeRed("rt3l");
    } 
}

// pagination
function getCurrentPageFromURL() {
    /*
    This function extracts page number from url
    */
    let numberPattern = /\d+/g;
    let url_numbers = window.location.href.match(numberPattern);
    return parseInt(url_numbers[url_numbers.length - 1])
}
let current_page = getCurrentPageFromURL()
console.log("current page : " + current_page)


function prevPage() {
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage() {
    current_page++;
    changePage(current_page);
}

function changePage(page) {

    window.location.href = `./book_3_${page}.html`;

}

function loadPageChanger() {
    document.querySelector(".page-number input").value = current_page
}


document.addEventListener("DOMContentLoaded", function (event) {
    const input = document.querySelector(".page-number input")
    input.addEventListener('keypress', changePageOnEnter);

    function changePageOnEnter(e) {
        if (e.key === "Enter") {
            changePage(input.value)
        }
    }
    document.querySelector(".prev-page,.prev").addEventListener("click", prevPage);
    document.querySelector(".next-page,.next").addEventListener("click", nextPage);

    loadPageChanger();
});