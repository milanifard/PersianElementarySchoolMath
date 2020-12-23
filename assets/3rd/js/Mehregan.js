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