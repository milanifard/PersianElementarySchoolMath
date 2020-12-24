var answers = [">", "=", "<"]

const red = "#d35d6e"
const green = "#5aa469"
const transparent = "#00000000"

function check_value(i, id) {
    console.log("salaaam!")
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


function change_color(id, color) {
    id.style.backgroundColor = color;
}