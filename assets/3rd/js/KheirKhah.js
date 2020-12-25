function p62ques1() {
  check("p62ques1_1",1000)
  check("p62ques1_2",1)
  check("p62ques1_3",10)
  }

  function p62ques2() {
    check("p62ques2_1",100)
  }

  function p62ques3() {
    check("checklist","correct")
    x2 = document.getElementById("p62ques3_2_b").value;
    x3 = document.getElementById("p62ques3_3_b").value;
    // if()
    check("p62ques3_2_a",x2)
    check("p62ques3_3_a",x3)
  }
  

  function p63ques1() {
    check("p63ques1_1_a",4)
    check("p63ques1_1_b",4)
    check("p63ques1_1_c",16)
    check("p63ques1_2_a",6)
    check("p63ques1_2_b",5)
    check("p63ques1_2_c",30)
    }

  function p63ques2() {
    check("p63ques2_1_a",10)
    check("p63ques2_1_b",5)
    check("p63ques2_1_c",50)
    check("p63ques2_2_a",5)
    check("p63ques2_2_b",6)
    check("p63ques2_2_c",30)
    }

    function p63ques3() {
      check("p63ques3_1_a",8)
      check("p63ques3_1_b",4)
      check("p63ques3_1_c",32)
      check("p63ques3_2_a",6)
      check("p63ques3_2_b",5)
      check("p63ques3_2_c",30)
      }
  

 function check(id,c){
  x = document.getElementById(id).value;
  console.log(x)
  if ((x == c) && (x!='')) {
      console.log("ok");
      correct(id);
    } else {
      console.log("Not ok");
      notCorrect(id);
    }
 }

  function correct(id){
    document.getElementById(id).style.background = "lightgreen";
  }

function notCorrect(id){
    document.getElementById(id).style.background = "#e45f5f";
  }


 
  function chcol(id , colorcode,bordcolorcode){
    document.getElementById(id).style.background = colorcode;
    document.getElementById(id).style.color = colorcode;
    document.getElementById(id).style.borderColor =bordcolorcode ;


  }
  

// pagination
function getCurrentPageFromURL() {
  /*
  This function extracts page number from url
  */
  let numberPattern = /\d+/g;
  let url_numbers = window.location.href.match(numberPattern);
  return parseInt(url_numbers[url_numbers.length - 1])
}
let current_page = getCurrentPageFromURL()
console.log("current page : " + current_page)


function prevPage() {
  if (current_page > 1) {
      current_page--;
      changePage(current_page);
  }
}

function nextPage() {
  current_page++;
  changePage(current_page);
}

function changePage(page) {

  window.location.href = `./book_3_${page}.html`;

}

function loadPageChanger() {
  document.querySelector(".page-number input").value = current_page
}


document.addEventListener("DOMContentLoaded", function (event) {
  const input = document.querySelector(".page-number input")
  input.addEventListener('keypress', changePageOnEnter);

  function changePageOnEnter(e) {
      if (e.key === "Enter") {
          changePage(input.value)
      }
  }
  document.querySelector(".prev-page,.prev").addEventListener("click", prevPage);
  document.querySelector(".next-page,.next").addEventListener("click", nextPage);

  loadPageChanger();
});