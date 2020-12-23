function checkFargangeNeveshtanP94() {
    if ($("#farhange_neveshtan_input").val().length > 30) {
        $("#farhange-neveshtan-messages").find(".warn-message").remove()
        $("#farhange-neveshtan").find(".info-message").css("display", "flex")
            .hide()
            .fadeIn();
    } else {
        showWrongAnswerMessage("#farhange-neveshtan-messages")
    }

}

function checkTamrinP94() {
    // check first masale (triangles)
    console.log("mohit labels: " + $(".triangles"))
    let hasWrongAnswer1 = false
    $(".triangle-answer").each(function (i, obj) {
        if (obj.value !== "") {
            if (obj.value !== "12" && obj.value !== "۱۲") {
                hasWrongAnswer1 = true
                obj.classList.add("is-invalid")
                obj.classList.remove("is-valid")

            } else {
                obj.classList.add("is-valid")
                obj.classList.remove("is-invalid")

            }

        } else {
            hasWrongAnswer1 = true
        }

    });



    if (hasWrongAnswer1) {
        showWrongAnswerMessage("#tamrin94-1-messages")
    } else {
        $("#tamrin94-1-messages").find(".warn-message").remove()
        $("#tamrin94-1-messages").find(".info-message").css("display", "flex")
            .hide()
            .fadeIn();
        showTrueAnswersMessageBox("#tamrin94-1-messages")

    }


    // check second masale (rectangles)
    if (clickedRectangleId) {
        console.log("clickedRectangleId is not null")
        if (clickedRectangleId === "rect2") {
            $("#rect2").css("box-shadow", "0 0 8px green");
            $("#tamrin94-2-messages").find(".info-message").css("display", "flex")
                .hide()
                .fadeIn();
        } else {
            $("#" + clickedRectangleId).css("box-shadow", "0 0 8px red");
        }
    }

    answers = {
        "11": 26,
        "12": 12,
        "21": 14,
        "22": 12,
        "31": 16,
        "32": 12,
    }
    let hasWrongAnswer2 = false
    for (var key in answers) {
        inputNode = $("#rect-ans" + key)[0]
        if (inputNode.value === answers[key].toString()) {
            inputNode.classList.add("is-valid")
            inputNode.classList.remove("is-invalid")

        } else {
            hasWrongAnswer2 = true
            inputNode.classList.add("is-invalid")
            inputNode.classList.remove("is-valid")
        }

    }
    if (hasWrongAnswer2) {
        showWrongAnswerMessage("#tamrin94-2-messages")
    } else {
        $("#tamrin94-2-messages").find(".warn-message").remove()
        $("#tamrin94-2-messages").find(".info-message").css("display", "flex")
            .hide()
            .fadeIn();
        showTrueAnswersMessageBox("#tamrin94-2-messages")

    }

    if (!hasWrongAnswer1 && !hasWrongAnswer2) {
        showAfarinModalAnimation()
    }
}



var clickedRectangleId;
$(document).ready(function () {
    


    $(".clickable-image").click(function (event) {

        clickedRectangleId = $(event.target).attr('id')
        console.log("clicked image : " + clickedRectangleId)
        $(".clickable-image").css("box-shadow", "")
        $(event.target).css("box-shadow", "0 0 8px blue");
    });

});