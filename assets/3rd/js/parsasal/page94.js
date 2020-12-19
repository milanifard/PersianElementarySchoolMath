function checkTamrinP94() {
    console.log("mohit labels: " + $(".triangles"))
    let hasWrongAnswer = false
    $(".triangle-answer").each(function (i, obj) {
        if (obj.value !== "") {
            if (obj.value !== "12" && obj.value !== "۱۲") {
                hasWrongAnswer = true
                obj.classList.add("is-invalid")
                obj.classList.remove("is-valid")

            } else {
                obj.classList.add("is-valid")
                obj.classList.remove("is-invalid")

            }

        }

    });

    console.log("checking tamrin answer , clickedRectangleId=" + clickedRectangleId)
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

    if (hasWrongAnswer) {
        showWrongAnswerMessage("#tamrin94-1-messages")
    } else {
        $("#tamrin94-1-messages").find(".warn-message").remove()
        $("#tamrin94-1-messages").find(".info-message").css("display", "flex")
            .hide()
            .fadeIn();

        modal.className = "open-modal";
        setTimeout(function(){  modal.className = "close-modal";}, 3000);

    }


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
var clickedRectangleId;
$(document).ready(function () {


    $(".clickable-image").click(function (event) {

        clickedRectangleId = $(event.target).attr('id')
        console.log("clicked image : " + clickedRectangleId)
        $(".clickable-image").css("box-shadow", "")
        $(event.target).css("box-shadow", "0 0 8px blue");
    });

});