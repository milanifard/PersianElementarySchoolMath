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

    function page33_Q1(){
        var num = $('page33-question1-input');
        var ans = $('page33-question1-tozih');
        var points = 0;
        if(num.value>=5 && num.value<=8){
            num.style.background = correct;
        }else if(num.value == ''){
            num.style.background = orange;
        }else{
            num.style.background = notCorrect;
        }
        if (ans.value.includes('سانتی متر')){
            points++;
        }
        if (ans.value.includes('کاغذ')){
            points++;
        }
        if (ans.value.includes('تقریبا')){
            points++;
        }
        if (ans.value.includes('برابر')){
            points++;
        }
        if (ans.value.includes('بنابراین')){
            points++;
        }
        if (points >= 3){
            ans.style.background = correct;
        }else if (ans.value == ''){
            ans.style.background = orange;
        }else{
            ans.style.background = notCorrect;
        }

    }
    
    function page33_Q2() {
        var num1 = $('page33-question2-input-1');
        var num2 = $('page33-question2-input-2');
        var num3 = $('page33-question2-input-3');

        value_check(num1,'7000+100+10');
        value_check(num2,'8000+200+5');
        value_check(num3,'9000+300');
    }

    function page33_Q3() {
        var txt1 = $('page33-question3-input1');
        var txt2 = $('page33-question3-input2');
        var txt3 = $('page33-question3-input3');

        value_check(txt1,'70+80=150');
        value_check(txt2,'380+130=510');
        value_check(txt3,'7890+1230=9120');
    }

    function page33_Q4() {
        var txt1 = $('page33-question4-input1');
        var txt2 = $('page33-question4-input2');
        var txt3 = $('page33-question4-input3');
        var txt4 = $('page33-question4-input4');

        value_check(txt1,'8+3=11');
        value_check(txt2,'524+237=761');
        value_check(txt3,'47-17=30');
        value_check(txt4,'760-260=500');
    }
    
    function page33_Q5() {
        var num1 = $('page33-question5-input1');
        var num2 = $('page33-question5-input2');
        var num3 = $('page33-question5-input3');
        var num4 = $('page33-question5-input4');
        var num5 = $('page33-question5-input5');
        var num6 = $('page33-question5-input6');
        var num7 = $('page33-question5-input7');

        value_check(num1,1);
        value_check(num2,2);
        value_check(num3,3);
        value_check(num4,5);
        value_check(num5,5043);
        value_check(num6,3405);
        value_check(num7,4300);

    }