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
        document.getElementById(id).style.backgroundColor = "#56BE00";
    } else {
        document.getElementById(id).style.border = "0";
        document.getElementById(id).style.backgroundColor = "#E51212";
    }
}




