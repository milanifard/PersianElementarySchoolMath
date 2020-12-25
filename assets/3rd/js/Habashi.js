var answers = [">", "=", "<"]

const red = "#d35d6e"
const green = "#5aa469"
const transparent = "#00000000"

function check_value(i, id) {
    var id = document.getElementById(id);
    if (id.value != "" && id.value != null){
        if (id.value == answers[i]) {
            change_color(id, green);
        } else {
            change_color(id, red);
        }
    }
    else{
        change_color(id, transparent)
    }
}

function getCurrentPageFromURL()
{
    let numberPattern = /\d+/g;
    let url_numbers = window.location.href.match(numberPattern);
    return parseInt(url_numbers[url_numbers.length - 1])
}

let current_page = getCurrentPageFromURL()
console.log("current page : " + current_page)

function prevPage()
{
    if (current_page > 1)
    {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    current_page++;
    changePage(current_page);
}

function changePage(page)
{
    window.location.href = `./book_3_${page}.html`;
}

function loadPageChanger()
{
    document.querySelector(".page-number input").value = current_page
}

document.addEventListener("DOMContentLoaded", function (event)
{
    const input = document.querySelector(".page-number input")
    input.addEventListener('keypress', changePageOnEnter);

    function changePageOnEnter(e)
    {
        if (e.key === "Enter")
        {
            changePage(input.value)
        }
    }

    document.querySelector(".prev-page,.prev").addEventListener("click", prevPage);
    document.querySelector(".next-page,.next").addEventListener("click", nextPage);

    loadPageChanger();
});
function change_color(id, color) {
    id.style.backgroundColor = color;
}