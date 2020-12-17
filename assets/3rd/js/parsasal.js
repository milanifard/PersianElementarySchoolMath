// go top button
/*Add class when scroll down*/
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll >= 250) {
        $(".go-top").addClass("show");
    } else {
        $(".go-top").removeClass("show");
    }
});
/*Animation anchor*/
$('a').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
});

// pagination
function getCurrentPageFromURL(){
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
    $(".page-number input").val(current_page)
}
$(document).ready(function () {


    $(".prev-page,.prev").click(function () {
        prevPage();
    })
    $(".next-page,.next").click(function () {
        nextPage();
    })

    loadPageChanger();

});

function debounce(func) {
    var timer;
    return function (event) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(func, 100, event);
    };
}


// dark mode
window.onkeypress = function (e) {
    e = e || window.event;
    if (e.keyCode === 13) {
        console.log("enter hitted")
        document.documentElement.classList.toggle('dark-mode')
    }
}

// ****************************
// check answers
// ***********************

function checkTamrinP94() {
    console.log("mohit labels: " + $(".triangles"))
    $(".triangle-answer").each(function (i, obj) {
        if (obj.value !== "") {
            if (obj.value !== "6") {
                obj.classList.add("is-invalid")
                obj.classList.remove("is-valid")
            } else {
                obj.classList.add("is-valid")
                obj.classList.remove("is-invalid")
            }

        }

    });

    $("#tamrin").find(".info-message").css("display", "flex")
        .hide()
        .fadeIn();
    $("#tamrin").find(".warn-message").css("display", "flex")
        .hide()
        .fadeIn();
}

function checkFargangeNeveshtanP94() {
    $("#farhange-neveshtan-messages").append(getWrongAnswerMessageBox())
    $("#farhange-neveshtan").find(".info-message").css("display", "flex")
        .hide()
        .fadeIn();
    $("#farhange-neveshtan").find(".warn-message").css("display", "flex")
        .hide()
        .fadeIn();

}
(function ($) {
    $(document).on('click', '.close', function () {
        $(this).parent().fadeOut();
    });

})(jQuery);


function createNewMessageBox(text , type ){
    let iconClass;

    let container = document.createElement("div");
    let icon = document.createElement("i");
    let paragraph = document.createElement("p");
    let closeButton = document.createElement("button");

    

    if(type === "warn"){
        iconClass = "fa-exclamation-circle"
        container.classList.add("warn-message")
    }else if (type === "info "){
        iconClass = "fa-info-circle"
        container.classList.add("info-message")
    }

    paragraph.classList.add("align-self-center")


    icon.classList.add("fa")
    icon.classList.add(iconClass)
    icon.classList.add("align-self-center")


    closeButton.classList.add("d-flex")
    closeButton.classList.add("mr-auto")
    closeButton.classList.add("close")
    closeButton.innerHTML = "&times;"

    let ptext = document.createTextNode(text);

    
    paragraph.appendChild(ptext)

    container.appendChild(icon)
    container.appendChild(paragraph)
    container.appendChild(closeButton)

    return container
}
function getWrongAnswerMessageBox() {

    return createNewMessageBox("بعضی پاسخ هات درست نبود، دوباره تلاش کن" , "warn");
}