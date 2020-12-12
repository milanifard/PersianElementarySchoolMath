function p13ques1() {
  check("p13q1_1",8)
}

function p13ques2() {
  check("p13q2_1",16)
  check("p13q2_2",22)
  check("p13q2_3",30)
  check("p13q2_4",10)

}
 function check(id,c){
  x = document.getElementById(id).value;
  if (x == c) {
    document.getElementById(id).style.background = "lightgreen";
    } else {
      document.getElementById(id).style.background = "#e45f5f";
    }
 }


 function p14ques1() {
  check("p14q1_1",2)
  check("p14q1_2",8)
  check("p14q1_3",17)
  check("p14q1_4",142)

  check("p14q2_1",19)
  check("p14q2_2",34)
  check("p14q2_3",229)

}


function p14ques2() {
  check("p14q3_1",20)
  check("p14q3_2",25)
  check("p14q3_3",150)

  check("p14q4_1",5)
  check("p14q4_2",40)
  check("p14q4_3",120)

}

function p14ques3() {
  check("p14q5_1",14)
  check("p14q5_2",28)
  check("p14q5_3",145)

  check("p14q5_4",29)
  check("p14q5_5",43)
  check("p14q5_6",160)

}



 


  