let answers = {
    "3": "320",
    "4": "24",
    "5": "42",
    "6": "120",
    "7-1": "36",
    "7-2": "16"
}



function checkTamrin95Answers() {
    let hasWrongAnswer = false
    for (var key in answers) {
        inputNode = $("#tamrin-ans-" + key)[0]
        if (inputNode.value === answers[key].toString()) {
            inputNode.classList.add("is-valid")
            inputNode.classList.remove("is-invalid")
            showSuccessMessageOnMasale("#tamrin-ans-" + key)


        } else {
            hasWrongAnswer = true
            inputNode.classList.add("is-invalid")
            inputNode.classList.remove("is-valid")

            showWarningMessageOnMasale("#tamrin-ans-" + key)
        }
        console.log(" masale : " + $("#tamrin-ans-" + key).parents(".masale")[0]);


    }

    let masale6Selected = $("#masale6-select").children("option:selected").val();
    if (masale6Selected === "no") {
        hasWrongAnswer = true
        showWarningMessageOnMasale("#masale6-select")

    } else if (masale6Selected === "yes") {
        console.log("showing info message");
        showInfoMessageOnMasale("#masale6-select", "بله دقیق تر می‌شود، زیرا هرچه تعداد پاره خط ها بیشتر شود، محیط چند ضلعی به محیط دایره نزدیک تر می‌شود.")
    }
    if (!hasWrongAnswer) {
        showAfarinModalAnimation();
    }

}