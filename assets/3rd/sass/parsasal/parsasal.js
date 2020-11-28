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
let numberPattern = /\d+/g;
let url_numbers = window.location.href.match(numberPattern);
let current_page = parseInt(url_numbers[url_numbers.length - 1])
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
$(document).ready(function () {


    $(".prev-page,.prev").click(function () {
        prevPage();
    })
    $(".next-page,.next").click(function () {
        nextPage();
    })

    let childs = $('.pagination').children(); //returns a HTMLCollection

    for (let i = 1; i < childs.length - 1; i++) { // iterate over it

        childs[i].innerHTML = current_page + i - 1;
        childs[i].onclick = function () { // attach event listener individually
            window.location.href = `./book_3_${childs[i].innerHTML}.html`;
        }
    }

});