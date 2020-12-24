function check(id)
{
    if(id == "p2r1")
    {
        if (document.getElementById("p2a1").value == "ضرب") {
            document.getElementById("p2a1").style.backgroundColor = "#88dd77";
            document.getElementById("p2f1").innerHTML = "افرین درسته"
        }else if(document.getElementById("p2a1").value != ""){
            document.getElementById("p2a1").style.backgroundColor = "#ff564f";
            document.getElementById("p2f1").innerHTML = "بیشتر فکر کن و مثال ساده بزن"
        }
    }
    else if(id == "p2r2")
    {
        if (document.getElementById("p2a2").value == "جمع") {
            document.getElementById("p2a2").style.backgroundColor = "#88dd77";
            document.getElementById("p2f2").innerHTML = "افرین درسته"
        }else if(document.getElementById("p2a2").value != ""){
            document.getElementById("p2a2").style.backgroundColor = "#ff564f";
            document.getElementById("p2f2").innerHTML = "بیشتر فکر کن و با دقت سوال رو بخون"
        }
    }
    else if(id == "p2r3")
    {
        if (document.getElementById("p2a3").value == "تفریق") {
            document.getElementById("p2a3").style.backgroundColor = "#88dd77";
            document.getElementById("p2f3").innerHTML = "افرین درسته"
        }else if(document.getElementById("p2a3").value != ""){
            document.getElementById("p2a3").style.backgroundColor = "#ff564f";
            document.getElementById("p2f3").innerHTML = "بیشتر دقت کن، شکل زیر بهت کمک میکنه"
        }
    }
    else if(id == "p2r4")
    {
        if (document.getElementById("p2a4").value == "جمع") {
            document.getElementById("p2a4").style.backgroundColor = "#88dd77";
            document.getElementById("p2f4").innerHTML = "افرین درسته"
        }else if(document.getElementById("p2a4").value != ""){
            document.getElementById("p2a4").style.backgroundColor = "#ff564f";
            document.getElementById("p2f4").innerHTML = "بیشتر فکر کن"
        }
    }
    else if(id == "p3r1")
    {
        if (document.getElementById("p3a1").value == "20 ضلعی") {
            document.getElementById("p3a1").style.backgroundColor = "#88dd77";
            document.getElementById("p3f1_1").innerHTML = "افرین درسته، همینطور که خودت متوجه شدی"
            document.getElementById("p3f1_2").innerHTML = "با برسی مسائل ساده تر میتونی راحت تر به جواب برسی"
        }else if(document.getElementById("p3a1").value != ""){
            document.getElementById("p3a1").style.backgroundColor = "#ff564f";
            document.getElementById("p3f1_1").innerHTML = "بیشتر دقت کن و شکل های بالا رو مقایسه کن"
            document.getElementById("p3f1_2").innerHTML = "ساده کردن مسئله تو حل این سوال بهت کمک می کنه"
        }
    }
    else if(id == "p3r2_1")
    {
        if (document.getElementById("p3a2_1").value == "31") {
            document.getElementById("p3a2_1").style.backgroundColor = "#88dd77";
            document.getElementById("p3f2_1_1").innerHTML = "افرین درسته"
            document.getElementById("p3f2_1_2").innerHTML = "الگویابی خیلی بهت کمک میکنه"
        }else if(document.getElementById("p3a2_1").value != ""){
            document.getElementById("p3a2_1").style.backgroundColor = "#ff564f";
            document.getElementById("p3f2_1_1").innerHTML = "بیشتر دقت کن"
            document.getElementById("p3f2_1_2").innerHTML = "الگو و شکل های بالا رو برسی کن"
        }
    }
    else if(id == "p3r2_2")
    {
        if (document.getElementById("p3a2_2").value == "خیر") {
            document.getElementById("p3a2_2").style.backgroundColor = "#88dd77";
            document.getElementById("p3f2_2_1").innerHTML = "افرین درسته "
            document.getElementById("p3f2_2_2").innerHTML = " نیازی به کشیدن شکل نیست  "
            document.getElementById("p3f2_2_3").innerHTML = "این مسئله با الگویابی حل میشه "
        }else if(document.getElementById("p3a2_2").value != ""){
            document.getElementById("p3a2_2").style.backgroundColor =  "#ff564f";
            document.getElementById("p3f2_2_1").innerHTML = "بیشتر دقت کن "
            document.getElementById("p3f2_2_2").innerHTML = "شکل های بالا رو برسی کن "
            document.getElementById("p3f2_2_3").innerHTML = "و یک الگو برای مسئله پیدا کن "
        }
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