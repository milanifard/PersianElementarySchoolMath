/**
 *
 * @param id آیدی ورودی
 * @param value مقدار ورودی
 * @param correctAnswer پاسخ درست
 */
function checkCorrectValue(id, value, correctAnswer) {
    console.log(1)
    if (value == correctAnswer) {
        document.getElementById(id).style.border = "0";
        document.getElementById(id).style.backgroundColor = "#37ee56";
    } else {
        document.getElementById(id).style.border = "0";
        document.getElementById(id).style.backgroundColor = "red";
    }
}




