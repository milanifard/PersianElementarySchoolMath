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

function correct(response1,response2,response3,response4,response5,response6,response7,response8){
    if(response1 != "n" || response2 != "n") {
        if (response1 != "") {
            if (response1 == "5") {
                document.getElementById("q1").style.color = "green";
                document.getElementById("q1").style.border = "2px solid green";
            } else {
                document.getElementById("q1").style.color = "red";
                document.getElementById("q1").style.border = "2px solid red";
            }
        }
        if (response2 != "") {
            if (response2 == "6") {
                document.getElementById("q2").style.color = "green";
                document.getElementById("q2").style.border = "2px solid green";
            } else {
                document.getElementById("q2").style.color = "red";
                document.getElementById("q2").style.border = "2px solid red";
            }
        }
        if ((response1 != "" && response2 == "") || (response2 != "" && response1 == "")) {
            if (response1 == "") {
                document.getElementById("q1").style.border = "2px solid #c69500";
            }
            if (response2 == "") {
                document.getElementById("q2").style.border = "2px solid #c69500";
            }
        }
    }
    if(response3 != "n"){
        if (response3 != "") {
            if (response3 == "6") {
                document.getElementById("q3").style.color = "green";
                document.getElementById("q3").style.border = "2px solid green";
            } else {
                document.getElementById("q3").style.color = "red";
                document.getElementById("q3").style.border = "2px solid red";
            }
        }
        else{
            document.getElementById("q3").style.border = "2px solid #c69500";
        }
    }
    if(response4 != "n"){
        if (response4 != "") {
            if (response4 == "6") {
                document.getElementById("q4").style.color = "green";
                document.getElementById("q4").style.border = "2px solid green";
            } else {
                document.getElementById("q4").style.color = "red";
                document.getElementById("q4").style.border = "2px solid red";
            }
        }
        else{
            document.getElementById("q4").style.border = "2px solid #c69500";
        }
    }
    if(response5 != "n" || response6 != "n") {
        if (response5 != "") {
            if (response5 == "5") {
                document.getElementById("q5").style.color = "green";
                document.getElementById("q5").style.border = "2px solid green";
            } else {
                document.getElementById("q5").style.color = "red";
                document.getElementById("q5").style.border = "2px solid red";
            }
        }
        if (response6 != "") {
            if (response6 == "6") {
                document.getElementById("q6").style.color = "green";
                document.getElementById("q6").style.border = "2px solid green";
            } else {
                document.getElementById("q6").style.color = "red";
                document.getElementById("q6").style.border = "2px solid red";
            }
        }
        if ((response5 != "" && response6 == "") || (response6 != "" && response5 == "")) {
            if (response5 == "") {
                document.getElementById("q5").style.border = "2px solid #c69500";
            }
            if (response6 == "") {
                document.getElementById("q6").style.border = "2px solid #c69500";
            }
        }
    }
    if(response7 != "n" || response8 != "n") {
        if (response7 != "") {
            if (response7 == "5") {
                document.getElementById("q7").style.color = "green";
                document.getElementById("q7").style.border = "2px solid green";
            } else {
                document.getElementById("q7").style.color = "red";
                document.getElementById("q7").style.border = "2px solid red";
            }
        }
        if (response8 != "") {
            if (response8 == "6") {
                document.getElementById("q8").style.color = "green";
                document.getElementById("q8").style.border = "2px solid green";
            } else {
                document.getElementById("q8").style.color = "red";
                document.getElementById("q8").style.border = "2px solid red";
            }
        }
        if ((response7 != "" && response8 == "") || (response8 != "" && response7 == "")) {
            if (response7 == "") {
                document.getElementById("q7").style.border = "2px solid #c69500";
            }
            if (response8 == "") {
                document.getElementById("q8").style.border = "2px solid #c69500";
            }
        }
    }
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