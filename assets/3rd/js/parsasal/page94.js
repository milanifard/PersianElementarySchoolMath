function checkFargangeNeveshtanP94() {
    if ($("#farhange_neveshtan_input").val().length > 30) {
        showSuccessMessageOnMasale("#farhange_neveshtan_input")
        $("#farhange-neveshtan").find(".info-message").css("display", "flex")
            .hide()
            .fadeIn();

    } else {
        showWarningMessageOnMasale("#farhange_neveshtan_input");
    }

}

function checkTamrinP94() {
    // check first masale (triangles)
    console.log("mohit labels: " + $(".triangles"))
    let hasWrongAnswer1 = false
    $(".triangle-answer").each(function (i, obj) {

        if (obj.value !== "12" && obj.value !== "۱۲") {
            hasWrongAnswer1 = true
            obj.classList.add("is-invalid")
            obj.classList.remove("is-valid")
            hasWrongAnswer1 = true
        } else {
            obj.classList.add("is-valid")
            obj.classList.remove("is-invalid")

        }



    });



    if (hasWrongAnswer1) {
        showWarningMessageOnMasale(".triangle-answer");
    } else {

        showSuccessMessageOnMasale(".triangle-answer")

    }


    // check second masale (rectangles)
    let hasWrongAnswer2 = false
    var warningMessageText;
    if (clickedRectangleId) {
        console.log("clickedRectangleId is not null")
        if (clickedRectangleId === "rect2") {
            $("#rect2").css("box-shadow", "0 0 8px green");
            $("#rect2").parents(".masale").find(".info-message").css("display", "flex")
                .hide()
                .fadeIn();
        } else {
            hasWrongAnswer2 = true
            $("#" + clickedRectangleId).css("box-shadow", "0 0 8px red");
        }
    } else {
        hasWrongAnswer2 = true
        warningMessageText = "یادت رفت روی کمترین محیط کلیک کنی"
    }

    answers = {
        "11": 26,
        "12": 12,
        "21": 14,
        "22": 12,
        "31": 16,
        "32": 12,
    }

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
        if (warningMessageText) {
            showWarningMessageOnMasale("#rect-ans11" , warningMessageText)
        } else {
            showWarningMessageOnMasale("#rect-ans11")
        }
        showWarningMessageOnMasale("#rect-ans11");
    } else {
        showSuccessMessageOnMasale("#rect-ans11")


    }


    if (!hasWrongAnswer1 && !hasWrongAnswer2) {
        showAfarinModalAnimation()
    }
}

function understood_btn_clicked(){
    $("#canvas-overlay-elements").css("display", "none")
    $("#chain-canvas").css("filter", "none")
}

var clickedRectangleId;
$(document).ready(function () {
    $("#understood-btn").click(understood_btn_clicked);
    $(".clickable-image").click(function (event) {

        clickedRectangleId = $(event.target).attr('id')
        console.log("clicked image : " + clickedRectangleId)
        $(".clickable-image").css("box-shadow", "")
        $(event.target).css("box-shadow", "0 0 8px blue");
    });

});