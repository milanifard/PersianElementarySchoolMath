function p62ques1() {
  check("p62ques1_1",1000)
  check("p62ques1_2",1)
  check("p62ques1_3",10)
  }

  function p62ques2() {
    check("p62ques2_1",100)
  }

  function p62ques3() {
    check("reason",'همان عدد')
    x2 = document.getElementById("p62ques3_2_b").value;
    x3 = document.getElementById("p62ques3_3_b").value;
    check("p62ques3_2_a",x2)
    check("p62ques3_3_a",x3)
  }


 function check(id,c){
  x = document.getElementById(id).value;
  if (x == c) {
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


 