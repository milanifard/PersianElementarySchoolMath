let correct_table_color = "rgba(144,255,145,0.5)";
let incorrect_table_color = "rgb(255,118,118,0.5)";
let transparent_color = "#ff000000";

function cross_check(element, a, b){
    var res = a*b;
    // alert(a+b);
    if (element.value === ""){
        element.style.backgroundColor  = transparent_color;
    }else if (element.value === res.toString()){
        element.style.backgroundColor  = correct_table_color;
    }else{
        element.style.backgroundColor  = incorrect_table_color;
    }
}