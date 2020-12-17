    function $(id){ return document.getElementById(id);}
    const correct = "rgba(103, 181, 111,0.8)";
    const notCorrect = "rgba(219, 58, 46,0.8)";
    const orange = "rgba(255, 102, 0, 0.8)";
    function value_check(elem, val) {
        if (elem.value == val){
            elem.style.background = correct;
        }else if (elem.value == ''){
            elem.style.background = orange;
        }else{
            elem.style.background = notCorrect;
        }
    }

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

    function page31_Q3() {
        var text = $('question3-input-text');
        var num = $('question3-input-number');

        if (num.value%10 == 4 && parseInt(num.value/10, 10)%10 == 5 && parseInt(num.value/1000) == 7){
            num.style.background = correct;
        }else if(num.value == ''){
            num.style.background = orange;
        }
        else{
            num.style.background = notCorrect;
        }

        if (text.value.includes('هفت هزار') && text.value.includes('پنجاه') && text.value.includes('چهار')){
                switch(parseInt(num.value/100)%10) {
                    case 0:
                        text.style.background = correct;
                        break;
                    case 1:
                        if (text.value.includes('صد')){
                            text.style.background = correct;
                        }else text.style.background = notCorrect;
                        break;
                    case 2:
                        if (text.value.includes('دویست')){
                            text.style.background = correct;
                        }else text.style.background = notCorrect;
                        break;
                    case 3:
                        if (text.value.includes('سیصد')){
                            text.style.background = correct;
                        }else text.style.background = notCorrect;
                        break;
                    case 4:
                        if (text.value.includes('چهار صد')){
                            text.style.background = correct;
                        }else text.style.background = notCorrect;
                        break;
                    case 5:
                        if (text.value.includes('پانصد')){
                            text.style.background = correct;
                        }else text.style.background = notCorrect;
                        break;
                    case 6:
                        if (text.value.includes('ششصد')){
                            text.style.background = correct;
                        }else text.style.background = notCorrect;
                        break;
                    case 7:
                        if (text.value.includes('هفت صد')){
                            text.style.background = correct;
                        }else text.style.background = notCorrect;
                        break;
                    case 8:
                        if (text.value.includes('هشت صد')){
                            text.style.background = correct;
                        }else text.style.background = notCorrect;
                        break;
                    case 9:
                        if (text.value.includes('نه صد')){
                            text.style.background = correct;
                        }else text.style.background = notCorrect;
                        break;
                }
        }else if(num.value == ''){
            text.style.background = orange;
        }
        else{
            text.style.background = notCorrect;
        }
    }