function enterPage(ele) {
    if(event.key === 'Enter') {
      location.replace(`book_3_${ele.value}.html`)
    }
}
 function checkInput(element, correct) {
    var value = element.value;
    if (value == correct)
      element.style.color = 'green'
    else element.style.color = 'red';
  }