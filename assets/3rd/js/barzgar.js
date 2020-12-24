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

    function page31_Q4(){
        var num1 = $('line1-width');
        var num2 = $('line2-width');
        var num3 = $('line3-width');
        var num4 = $('line4-width');

        value_check(num1,5);
        value_check(num2,6);
        value_check(num3,80);
        value_check(num4,60);
    }

    function page32_Q1() {
        var txt1 = $('page32-question1-1');
        var txt2 = $('page32-question1-2');
        var txt3 = $('page32-question1-3');
        var txt4 = $('page32-question1-4');
        var txt5 = $('page32-question1-5');
        var txt6 = $('page32-question1-6');

        value_check(txt1,'پارچ');
        value_check(txt2,'باغ');
        value_check(txt3,'كارتن');
        value_check(txt4,'اتوبان');
        value_check(txt5,'دانشگاه');
        value_check(txt6,'انبار');
    }
    
    function page32_Q2(){
        var num = $('page32-question2-1');
        value_check(num,1000);
    }
    
    function page32_Q3() {
        var num1_1 = $('1-1');
        var num1_2 = $('1-2');
        var num1_3 = $('1-3');
        var num2_1 = $('2-1');
        var num2_2 = $('2-2');
        var num2_3 = $('2-3');
        var num3_1 = $('3-1');
        var num3_2 = $('3-2');
        var num3_3 = $('3-3');
        var num4_1 = $('4-1');
        var num4_2 = $('4-2');
        var num4_3 = $('4-3');
        var num5_1 = $('5-1');
        var num5_2 = $('5-2');

        value_check(num1_1,90);
        value_check(num1_2,60);
        value_check(num1_3,70);
        value_check(num2_1,50);
        value_check(num2_2,3000);
        value_check(num2_3,1000);
        value_check(num3_1,1000);
        value_check(num3_2,700);
        value_check(num3_3,7000);
        value_check(num4_1,1000);
        value_check(num4_2,500);
        value_check(num4_3,1100);
        value_check(num5_1,3241);
        value_check(num5_2,8073);

    }