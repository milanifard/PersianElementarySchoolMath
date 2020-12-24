let items = document.querySelectorAll('.container .box');
items.forEach(function(item) {
  item.addEventListener('dragstart', handleDragStart, false);
  item.addEventListener('dragenter', handleDragEnter, false);
  item.addEventListener('dragover', handleDragOver, false);
  item.addEventListener('dragleave', handleDragLeave, false);
  item.addEventListener('drop', handleDrop, false);
  item.addEventListener('dragend', handleDragEnd, false);
});

    
    var dragSrcEl = null;
    var card=0;
    var place=0;

    function reply_click(clicked_id)
  {
    place=clicked_id;
    
  }
  function start(id)
  {
    card=id;
    
  }
  function replacenumber(num){
    if(num==0) return 'eight';
    else if (num==1) return 'five';
    else if (num==2) return 'two';
    else if(num==3) return 'three';
    else return false;

  }
    
    function handleDragStart(e) {
      this.style.opacity = '0.4';

      
      dragSrcEl = this;
  
      e.dataTransfer.effectAllowed = 'pointer';
      e.dataTransfer.setData('text/html', this.innerHTML);
     // this.classList.add('hold');
      //setTimeout(() => (this.classList.add('invisible')), 0);
    }
  
    function handleDragOver(e) {
      if (e.preventDefault) {
        e.preventDefault();
      }
  
      e.dataTransfer.dropEffect = 'pointer';
      
      return false;
    }
  
    function handleDragEnter(e) {
      e.preventDefault();
      this.classList.add('over');
    }
  
    function handleDragLeave(e) {
      this.classList.remove('over');
    }
  
    function handleDrop(e) {
      
      
      if (e.stopPropagation) {
        e.stopPropagation(); // stops the browser from redirecting.
      }

      var el1 = document.getElementById(card),
      el2 = document.getElementById(place);
      el1.id = place;
      el1.classList.remove(replacenumber(card));
      el1.classList.add(replacenumber(place));
      el2.id = card;
      el2.classList.remove(replacenumber(place));
      el2.classList.add(replacenumber(card));
      
      if (dragSrcEl != this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
      }
       
      console.log(replacenumber(card));
      console.log(replacenumber(place));
      
      return false;
    }
  
    function handleDragEnd(e) {
      this.style.opacity = '1';
      this.classList.remove('invisible');
      this.classList.add('box');
      
      items.forEach(function (item) {
        item.classList.remove('over'); 
      });

    }

    function correct_p134_q1() {
      var q3 = document.getElementById("p134_q1");
  
      q3.classList.remove("normal_shadow");
      q3.classList.remove("yellow_shadow");
      q3.classList.remove("red_shadow");
      q3.classList.remove("green_shadow");
  
      if (q3.value.length == 0) {
          q3.classList.add("yellow_shadow");
      } else if (q3.value == '12') {
          q3.classList.add("green_shadow");
      } else {
          q3.classList.add("red_shadow");
      }
  }

  function correct_p134_q2() {
    var q3 = document.getElementById("p134_q2");

    q3.classList.remove("normal_shadow");
    q3.classList.remove("yellow_shadow");
    q3.classList.remove("red_shadow");
    q3.classList.remove("green_shadow");

    if (q3.value.length == 0) {
        q3.classList.add("yellow_shadow");
    } else if (q3.value == '9999') {
        q3.classList.add("green_shadow");
    } else {
        q3.classList.add("red_shadow");
    }
}

function correct_p134_q3() {
  var q3 = document.getElementById("p134_q3");

  q3.classList.remove("normal_shadow");
  q3.classList.remove("yellow_shadow");
  q3.classList.remove("red_shadow");
  q3.classList.remove("green_shadow");

  if (q3.value.length == 0) {
      q3.classList.add("yellow_shadow");
  } else if (q3.value == '9876') {
      q3.classList.add("green_shadow");
  } else {
      q3.classList.add("red_shadow");
  }
}

function correct_p134_q4() {
  var q3 = document.getElementById("p134_q4");

  q3.classList.remove("normal_shadow");
  q3.classList.remove("yellow_shadow");
  q3.classList.remove("red_shadow");
  q3.classList.remove("green_shadow");

  if (q3.value.length == 0) {
      q3.classList.add("yellow_shadow");
  } else if (q3.value == '1000') {
      q3.classList.add("green_shadow");
  } else {
      q3.classList.add("red_shadow");
  }
}

function correct_p134_q5() {
  var q3 = document.getElementById("p134_q5");

  q3.classList.remove("normal_shadow");
  q3.classList.remove("yellow_shadow");
  q3.classList.remove("red_shadow");
  q3.classList.remove("green_shadow");

  if (q3.value.length == 0) {
      q3.classList.add("yellow_shadow");
  } else if (q3.value == '1024') {
      q3.classList.add("green_shadow");
  } else {
      q3.classList.add("red_shadow");
  }
}

function correct_p134_q6() {
  var q3 = document.getElementById("p134_q6");

  q3.classList.remove("normal_shadow");
  q3.classList.remove("yellow_shadow");
  q3.classList.remove("red_shadow");
  q3.classList.remove("green_shadow");

  if (q3.value.length == 0) {
      q3.classList.add("yellow_shadow");
  } else if (q3.value == '1023') {
      q3.classList.add("green_shadow");
  } else {
      q3.classList.add("red_shadow");
  }
}

function correct_p135_q1() {
  var q3 = document.getElementById("p135_q1_0");

  q3.classList.remove("normal_shadow");
  q3.classList.remove("yellow_shadow");
  q3.classList.remove("red_shadow");
  q3.classList.remove("green_shadow");

  if (q3.value.length == 0) {
      q3.classList.add("yellow_shadow");
  } else if (q3.value == '0') {
      q3.classList.add("green_shadow");
  } else {
      q3.classList.add("red_shadow");
  }
}

function correct_p135_q_Shapes() {
  var q1 = document.getElementById("p135_q1_1");
  var q2 = document.getElementById("p135_q1_2");
  var q3 = document.getElementById("p135_q1_3");
  var q4 = document.getElementById("p135_q1_4");
  var q5 = document.getElementById("p135_q1_5");
  var q6 = document.getElementById("p135_q1_6");
  var q7 = document.getElementById("p135_q1_7");
  var q8 = document.getElementById("p135_q1_8");
  
  q1.classList.remove("normal_shadow");
  q1.classList.remove("yellow_shadow");
  q1.classList.remove("red_shadow");
  q1.classList.remove("green_shadow");

  q2.classList.remove("normal_shadow");
  q2.classList.remove("yellow_shadow");
  q2.classList.remove("red_shadow");
  q2.classList.remove("green_shadow");

  q3.classList.remove("normal_shadow");
  q3.classList.remove("yellow_shadow");
  q3.classList.remove("red_shadow");
  q3.classList.remove("green_shadow");

  q4.classList.remove("normal_shadow");
  q4.classList.remove("yellow_shadow");
  q4.classList.remove("red_shadow");
  q4.classList.remove("green_shadow");

  q5.classList.remove("normal_shadow");
  q5.classList.remove("yellow_shadow");
  q5.classList.remove("red_shadow");
  q5.classList.remove("green_shadow");

  q6.classList.remove("normal_shadow");
  q6.classList.remove("yellow_shadow");
  q6.classList.remove("red_shadow");
  q6.classList.remove("green_shadow");

  q7.classList.remove("normal_shadow");
  q7.classList.remove("yellow_shadow");
  q7.classList.remove("red_shadow");
  q7.classList.remove("green_shadow");

  q8.classList.remove("normal_shadow");
  q8.classList.remove("yellow_shadow");
  q8.classList.remove("red_shadow");
  q8.classList.remove("green_shadow");

  if (q1.value.length == 0) {
      q1.classList.add("yellow_shadow");
  } else if (q1.value == '2') {
      q.classList.add("green_shadow");
  } else {
      q.classList.add("red_shadow");
  }

  if (q6.value.length == 0) {
    q6.classList.add("yellow_shadow");
} else if (q6.value == '4') {
    q6.classList.add("green_shadow");
} else {
    q6.classList.add("red_shadow");
}

if (q7.value.length == 0) {
  q7.classList.add("yellow_shadow");
} else if (q7.value == '6') {
  q7.classList.add("green_shadow");
} else {
  q7.classList.add("red_shadow");
}

if (q8.value.length == 0) {
  q8.classList.add("yellow_shadow");
} else if (q8.value == '0' || q8.value == ' ') {
  q8.classList.add("green_shadow");
} else {
  q8.classList.add("red_shadow");
}

if (q2.value.length == 0) {
  q2.classList.add("yellow_shadow");
} else if (q2.value == '1') {
  if(q3.value!='1'){
  q2.classList.add("green_shadow");
  }
}else if(q2.value=='7'){
  if(q3.value!='7'){
    q2.classList.add("green_shadow");
    }
} else {
  q2.classList.add("red_shadow");
}

if (q3.value.length == 0) {
  q3.classList.add("yellow_shadow");
} else if (q3.value == '1') {
  if(q2.value!='1'){
  q3.classList.add("green_shadow");
  }
}else if(q3.value=='7'){
  if(q2.value!='7'){
    q3.classList.add("green_shadow");
    }
} else {
  q3.classList.add("red_shadow");
}

if (q4.value.length == 0) {
  q4.classList.add("yellow_shadow");
} else if (q4.value == '3') {
  if(q5.value!='3'){
  q4.classList.add("green_shadow");
  }
}else if(q4.value=='5'){
  if(q5.value!='5'){
    q4.classList.add("green_shadow");
    }
} else {
  q4.classList.add("red_shadow");
}

if (q5.value.length == 0) {
  q5.classList.add("yellow_shadow");
} else if (q5.value == '3') {
  if(q4.value!='3'){
  q5.classList.add("green_shadow");
  }
}else if(q5.value=='5'){
  if(q4.value!='5'){
    q5.classList.add("green_shadow");
    }
} else {
  q5.classList.add("red_shadow");
}

}


function correct_p135_q2_1() {
  var q1 = document.getElementById("p135_q2_1");
  var q2 = document.getElementById("p135_q2_2");
  var q3 = document.getElementById("p135_q2_3");
  var q4 = document.getElementById("p135_q2_4");
  var q5 = document.getElementById("p135_q2_5");
  var q6 = document.getElementById("p135_q2_6");
  var q7 = document.getElementById("p135_q2_7");
  var q8 = document.getElementById("p135_q2_8");

  q1.classList.remove("normal_shadow");
  q1.classList.remove("yellow_shadow");
  q1.classList.remove("red_shadow");
  q1.classList.remove("green_shadow");

  q2.classList.remove("normal_shadow");
  q2.classList.remove("yellow_shadow");
  q2.classList.remove("red_shadow");
  q2.classList.remove("green_shadow");

  q3.classList.remove("normal_shadow");
  q3.classList.remove("yellow_shadow");
  q3.classList.remove("red_shadow");
  q3.classList.remove("green_shadow");

  q4.classList.remove("normal_shadow");
  q4.classList.remove("yellow_shadow");
  q4.classList.remove("red_shadow");
  q4.classList.remove("green_shadow");

  q5.classList.remove("normal_shadow");
  q5.classList.remove("yellow_shadow");
  q5.classList.remove("red_shadow");
  q5.classList.remove("green_shadow");

  q6.classList.remove("normal_shadow");
  q6.classList.remove("yellow_shadow");
  q6.classList.remove("red_shadow");
  q6.classList.remove("green_shadow");

  q7.classList.remove("normal_shadow");
  q7.classList.remove("yellow_shadow");
  q7.classList.remove("red_shadow");
  q7.classList.remove("green_shadow");

  q8.classList.remove("normal_shadow");
  q8.classList.remove("yellow_shadow");
  q8.classList.remove("red_shadow");
  q8.classList.remove("green_shadow");

    if (q1.value.length == 0) {
        q1.classList.add("yellow_shadow");
    } else if (q1.value == '3') {
        q1.classList.add("green_shadow");
    } else {
        q1.classList.add("red_shadow");
    }

    if (q6.value.length == 0) {
      q6.classList.add("yellow_shadow");
  } else if (q6.value == '3') {
      q6.classList.add("green_shadow");
  } else {
      q6.classList.add("red_shadow");
  }

  if (q4.value.length == 0) {
    q4.classList.add("yellow_shadow");
} else if (q4.value == '5') {
    q4.classList.add("green_shadow");
} else {
    q4.classList.add("red_shadow");
}

if (q5.value.length == 0) {
  q5.classList.add("yellow_shadow");
} else if (q5.value == '10') {
  q5.classList.add("green_shadow");
} else {
  q5.classList.add("red_shadow");
}

if (q2.value.length == 0) {
  q2.classList.add("yellow_shadow");
} else if (q2.value == '4') {
  if(q7.value != '4'){
  q2.classList.add("green_shadow");
  }else{  q2.classList.add("red_shadow");}
} else if(q2.value == '5'){
  if(q7.value != '5'){
    q2.classList.add("green_shadow");
  }else{  q2.classList.add("red_shadow");}
} else{
  q2.classList.add("red_shadow");
}

if (q7.value.length == 0) {
  q7.classList.add("yellow_shadow");
} else if (q7.value == '4') {
  if(q2.value != '4'){
  q7.classList.add("green_shadow");
  }else{  q7.classList.add("red_shadow");}
} else if(q7.value == '5'){
  if(q2.value != '5'){
    q7.classList.add("green_shadow");
  }else{  q7.classList.add("red_shadow");}
} else{
  q7.classList.add("red_shadow");
}

if (q3.value.length == 0) {
  q3.classList.add("yellow_shadow");
} else if (q3.value == '12') {
  if(q1.value == '3' && q2.value == '4'){
  q3.classList.add("green_shadow");
  }else{  q3.classList.add("red_shadow");}
} else if(q3.value == '15'){
  if(q1.value == '3' && q2.value=='5'){
    q3.classList.add("green_shadow");
  }else{  q3.classList.add("red_shadow");}
} else{
  q3.classList.add("red_shadow");
}

if (q8.value.length == 0) {
  q8.classList.add("yellow_shadow");
} else if (q8.value == '12') {
  if(q6.value == '3' && q7.value == '4'){
  q8.classList.add("green_shadow");
  }else{  q8.classList.add("red_shadow");}
} else if(q8.value == '15'){
  if(q6.value == '3' && q7.value=='5'){
    q8.classList.add("green_shadow");
  }else{  q8.classList.add("red_shadow");}
} else{
  q8.classList.add("red_shadow");
}
}

function correct_p135_q2_2() {
  var q1 = document.getElementById("p135_q2_9");
  var q2 = document.getElementById("p135_q2_10");
  var q3 = document.getElementById("p135_q2_11");

  q1.classList.remove("normal_shadow");
  q1.classList.remove("yellow_shadow");
  q1.classList.remove("red_shadow");
  q1.classList.remove("green_shadow");

  q2.classList.remove("normal_shadow");
  q2.classList.remove("yellow_shadow");
  q2.classList.remove("red_shadow");
  q2.classList.remove("green_shadow");

  q3.classList.remove("normal_shadow");
  q3.classList.remove("yellow_shadow");
  q3.classList.remove("red_shadow");
  q3.classList.remove("green_shadow");

  if (q1.value.length == 0) {
      q1.classList.add("yellow_shadow");
  } else if (q1.value == '3') {
    if(q2.value !='3'){
      q1.classList.add("green_shadow");
    }else{q1.classList.add("red_shadow");}
  }else if(q1.value == '5'){
    if(q2.value !='5'){
      q1.classList.add("green_shadow");
    }else{q1.classList.add("red_shadow");}
  } else {
      q1.classList.add("red_shadow");
  }

  if (q2.value.length == 0) {
    q2.classList.add("yellow_shadow");
} else if (q2.value == '3') {
  if(q1.value !='3'){
    q2.classList.add("green_shadow");
  }else{q2.classList.add("red_shadow");}
}else if(q2.value == '5'){
  if(q1.value !='5'){
    q2.classList.add("green_shadow");
  }else{q2.classList.add("red_shadow");}
} else {
    q2.classList.add("red_shadow");
}

if (q3.value.length == 0) {
  q3.classList.add("yellow_shadow");
} else if (q3.value == '15') {
if((q1.value =='3' && q2.value=='5') || (q1.value =='5' && q2.value=='3') ){
  q3.classList.add("green_shadow");
}else{q3.classList.add("red_shadow");}
} else {
  q3.classList.add("red_shadow");
}
}

$("page_switcher").onkeypress = function (e) {

  if (e.which === 13) {

      let page_no = $("page_switcher").value;

      let tag = document.createElement("a");
      tag.href = 'book_3_' + page_no + '.html';

      tag.id = "switch";
      document.body.appendChild(tag);

      $("switch").click();
  }
}
