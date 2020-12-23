function check(id)
{
    if(id == "p2r1")
    {

        if (document.getElementById("p2a1").value == "ضرب") {
            document.getElementById("p2a1").style.backgroundColor = "green";
            document.getElementById("p2f1").innerHTML = "افرین درسته"
        }else if(document.getElementById("p2a1").value != ""){
            document.getElementById("p2a1").style.backgroundColor = "red";
            document.getElementById("p2f1").innerHTML = "بیشتر دقت کن"
        }

    }
    else if(id == "p2r2")
    {

        if (document.getElementById("p2a2").value == "جمع") {
            document.getElementById("p2a2").style.backgroundColor = "green";
            document.getElementById("p2f2").innerHTML = "افرین درسته"
        }else if(document.getElementById("p2a2").value != ""){
            document.getElementById("p2a2").style.backgroundColor = "red";
            document.getElementById("p2f2").innerHTML = "بیشتر دقت کن"
        }

    }
    else if(id == "p2r3")
    {

        if (document.getElementById("p2a3").value == "تفریق") {
            document.getElementById("p2a3").style.backgroundColor = "green";
            document.getElementById("p2f3").innerHTML = "افرین درسته"
        }else if(document.getElementById("p2a3").value != ""){
            document.getElementById("p2a3").style.backgroundColor = "red";
            document.getElementById("p2f3").innerHTML = "بیشتر دقت کن"
        }

    }
    else if(id == "p2r4")
    {

        if (document.getElementById("p2a4").value == "جمع") {
            document.getElementById("p2a4").style.backgroundColor = "green";
            document.getElementById("p2f4").innerHTML = "افرین درسته"
        }else if(document.getElementById("p2a4").value != ""){
            document.getElementById("p2a4").style.backgroundColor = "red";
            document.getElementById("p2f4").innerHTML = "بیشتر دقت کن"
        }

    }
    else if(id == "p3r1")
    {

        if (document.getElementById("p3a1").value == "20 ضلعی") {
            document.getElementById("p3a1").style.backgroundColor = "green";
            document.getElementById("p3f1").innerHTML = "افرین درسته"
        }else if(document.getElementById("p3a1").value != ""){
            document.getElementById("p3a1").style.backgroundColor = "red";
            document.getElementById("p3f1").innerHTML = "بیشتر دقت کن"
        }

    }
    else if(id == "p3r2_1")
    {

        if (document.getElementById("p3a2_1").value == "31") {
            document.getElementById("p3a2_1").style.backgroundColor = "green";
            document.getElementById("p3f2_1").innerHTML = "افرین درسته"
        }else if(document.getElementById("p3a2_1").value != ""){
            document.getElementById("p3a2_1").style.backgroundColor = "red";
            document.getElementById("p3f2_1").innerHTML = "بیشتر دقت کن"
        }

    }
    else if(id == "p3r2_2")
    {

        if (document.getElementById("p3a2_2").value == "خیر") {
            document.getElementById("p3a2_2").style.backgroundColor = "green";
            document.getElementById("p3f2_2_1").innerHTML = "افرین درسته "
            document.getElementById("p3f2_2_2").innerHTML = " نیازی به کشیدن شکل نیست  "
            document.getElementById("p3f2_2_3").innerHTML = "این مسئله با الگویابی حل میشه "
        }else if(document.getElementById("p3a2_2").value != ""){
            document.getElementById("p3a2_2").style.backgroundColor = "red";
            document.getElementById("p3f2_2_1").innerHTML = "بیشتر دقت کن "
            document.getElementById("p3f2_2_2").innerHTML = "شکل های بالا رو برسی کن "
            document.getElementById("p3f2_2_3").innerHTML = "و یک الگو برای مسئله پیدا کن "
        }

    }
}

