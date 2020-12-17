    function $(id){ return document.getElementById(id);}
    const correct = "rgba(103, 181, 111,0.8)";
    const notCorrect = "rgba(219, 58, 46,0.8)";
    const orange = "rgba(255, 102, 0, 0.8)";
    function page31_Q1(){
        var hezar = $('page31-question1-1-hezar');
        var sad = $('page31-question1-1-sad');
        var dah = $('page31-question1-1-dah');
        var yek = $('page31-question1-1-yek');
        var num = $('page31-question1-1-number');
        var txt = $('page31-question1-1-text');

        value_check(hezar,2);
        value_check(sad,1);
        value_check(dah,3);
        value_check(yek,4);
        value_check(num,2134);
        value_check(txt,'دوهزار و صد و سی و چهار');


        hezar = $('page31-question1-2-hezar');
        sad = $('page31-question1-2-sad');
        dah = $('page31-question1-2-dah');
        yek = $('page31-question1-2-yek');
        num = $('page31-question1-2-number');
        txt = $('page31-question1-2-text');

        value_check(hezar,1);
        value_check(sad,3);
        value_check(dah,2);
        value_check(yek,7);
        value_check(num,1327);
        value_check(txt,'هزار و سیصد و بیست و هفت');

        hezar = $('page31-question1-3-hezar');
        sad = $('page31-question1-3-sad');
        dah = $('page31-question1-3-dah');
        yek = $('page31-question1-3-yek');
        num = $('page31-question1-3-number');
        txt = $('page31-question1-3-text');

        value_check(hezar,1);
        value_check(sad,2);
        value_check(dah,4);
        value_check(yek,6);
        value_check(num,1327);
        value_check(txt,'هزار و دویست و چهل و شش');
    }

    function page31_Q2() {
        var digit = $('digits');
        value_check(digit,4);
    }

    function value_check(elem, val) {
        if (elem.value == val){
            elem.style.background = correct;
        }else if (elem.value == ''){
            elem.style.background = orange;
        }else{
            elem.style.background = notCorrect;
        }
    }