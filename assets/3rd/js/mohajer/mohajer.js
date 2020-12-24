function enterPage(ele) {
    if(event.key === 'Enter') {
      location.replace(`book_3_${ele.value}.html`)
    }
}