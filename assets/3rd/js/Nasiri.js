
function $(id) { return document.getElementById(id);}

function correct_type1(inp_id,input_val,true_radio,false_radio){
    var inp_txt = $(inp_id);
    var radio_f = $(false_radio);
    var radio_t = $(true_radio);
    inp_txt.classList.remove("normal_shadow");
    inp_txt.classList.remove("yellow_shadow");
    inp_txt.classList.remove("green_shadow");
    inp_txt.classList.remove("red_shadow");
    radio_f.classList.remove("normal_shadow");
    radio_f.classList.remove("yellow_shadow");
    radio_f.classList.remove("green_shadow");
    radio_f.classList.remove("red_shadow");
    radio_t.classList.remove("normal_shadow");
    radio_t.classList.remove("yellow_shadow");
    radio_t.classList.remove("green_shadow");
    radio_t.classList.remove("red_shadow");

    if (inp_txt.value.length === 0) {
        inp_txt.classList.add("yellow_shadow");
    } else if (inp_txt.value === input_val ) {
        inp_txt.classList.add("green_shadow");
    } else {
        inp_txt.classList.add("red_shadow");
    }

    if (radio_f.checked){
        radio_f.classList.add("red_shadow");
        radio_t.classList.add("red_shadow");
    }
    else if (radio_t.checked){
        radio_f.classList.add("green_shadow");
        radio_t.classList.add("green_shadow");
    }
    else {
        radio_f.classList.add("yellow_shadow");
        radio_t.classList.add("yellow_shadow");
    }
}

function correct_type2(values){
    input_ids = document.getElementsByName("group2");

    if (input_ids.length!==values.length){
        return;
    }
    for (i=0;i<input_ids.length;i++){
        var current_id = input_ids[i].id;

        current_item = $(current_id);
        current_item.classList.remove("normal_shadow");
        current_item.classList.remove("yellow_shadow");
        current_item.classList.remove("green_shadow");
        current_item.classList.remove("red_shadow");

        if (current_item.value.length === 0) {
            current_item.classList.add("yellow_shadow");
        } else if (current_item.value === values[i] ) {
            current_item.classList.add("green_shadow");
        } else {
            current_item.classList.add("red_shadow");
        }
    }
}