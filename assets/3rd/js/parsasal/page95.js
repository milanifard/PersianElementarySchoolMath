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

    if(!hasWrongAnswer){
        showAfarinModalAnimation();
    }

}