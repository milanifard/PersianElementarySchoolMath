
let script = document.currentScript || Array.prototype.slice.call(document.getElementsByTagName('script')).pop();
let params = (script.getAttribute('params') || '').split(/, */);
let page_no = params[0];

function $(id) {return document.getElementById(id);}

let color_picker_item = null;
let pre_color = null;

function color_picker(id) {color_picker_item = $(id);}

function hover(id) {
    if (color_picker_item != null) {
        $(id).onmouseenter = function () {
            pre_color = $(id).style.backgroundColor;
            $(id).style.backgroundColor = color_picker_item.style.backgroundColor;
        }
        $(id).onmouseout = function () {
            $(id).style.backgroundColor = pre_color;
        }
    }
}

function guess_checker(id) {
    let btn = $(id).value;
    let guess_box_feedback = $("guess_box_feedback");

    if (btn === "right") {
        guess_box_feedback.textContent = "دقت کن عزيزم. دوباره تلاش کن.";
        guess_box_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
        guess_box_feedback.classList.add("shaking-animation");
    } else if (btn === "left") {
        guess_box_feedback.textContent = "آفرين عزيزم. درست حدس زدي.";
        guess_box_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green_level3');
        guess_box_feedback.classList.add("shaking-animation");
    }
}

if (page_no === "127") {

    /* --------  The Q1-Q2 page 124  ----------------------------- */
    function graph_hover(id)
    {
        let graph=$(id)
        graph.onmouseenter = function () {
            if(graph.style.backgroundColor!="green")
                graph.style.backgroundColor = "rgba(0, 255, 0, 0.2)";
        }
        graph.onmouseout = function () {
            if(graph.style.backgroundColor!="green")
            {
            graph.style.backgroundColor = "rgba(26, 180, 241, 0.2)";
            }
        }
    }
    let graph1=0;
    let graph2=0;
    let graph3=0;
    let graph4=0;
    function graph_clicked(id,num)
    {
        let graph=$(id)
        let Q1_2_feedback=$("Q1_3_feedback")
        if(graph.style.backgroundColor === "green")
        {
            graph.style.backgroundColor = "rgba(26, 180, 241, 0.2)";
            switch(num)
            {
                case 1:
                    graph1-=1;
                    break;
                case 2:
                    graph2-=1;
                    break;
                case 3:
                    graph3-=1;
                    break;
                case 4:
                    graph4-=1;
                    break;            
            }
        }
        else
        {
            graph.style.backgroundColor = "green";
            switch(num)
            {
                case 1:
                    graph1+=1;
                    break;
                case 2:
                    graph2+=1;
                    break;
                case 3:
                    graph3+=1;
                    break;
                case 4:
                    graph4+=1;
                    break;            
            }
        }
        if(graph1!=0&&graph2!=0&&graph3!=0&&graph4!=0)
        {
            if(graph1===2&&graph2===2&&graph3===3&&graph4===1)
            {
                Q1_3_feedback.textContent ="آفرین عزیزم. درست حل کردی.";
                Q1_3_feedback.classList.add("shaking-animation");
                Q1_3_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green_level3');
            }
            else
            {
                Q1_3_feedback.textContent ="دقت کن عزيزم. دوباره تلاش کن.";
                Q1_3_feedback.classList.add("shaking-animation");
                Q1_3_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
            }
        }
    }

    function Q1_bar_input(id,num)
    {
        let Q1_2_feedback=$("Q1_2_feedback")
        let Q1_4=$(id);
        let q1_graph=$("graph"+num);
        var adad=(Q1_4.value+"%");
        q1_graph.style.height=adad;
        if(num=="1")
        {
            if(Q1_4.value!=20)
            {
                Q1_2_feedback.textContent ="دقت کن عزيزم. دوباره تلاش کن.";
                Q1_2_feedback.classList.add("shaking-animation");
                Q1_2_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
            }
            else
            {
                Q1_2_feedback.textContent ="آفرین عزیزم. درست حل کردی.";
                Q1_2_feedback.classList.add("shaking-animation");
                Q1_2_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green_level3');
            }
        }
        if(num=="2")
        {
            if(Q1_4.value!=20)
            {
                Q1_2_feedback.textContent ="دقت کن عزيزم. دوباره تلاش کن.";
                Q1_2_feedback.classList.add("shaking-animation");
                Q1_2_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
            }
            else
            {
                Q1_2_feedback.textContent ="آفرین عزیزم. درست حل کردی.";
                Q1_2_feedback.classList.add("shaking-animation");
                Q1_2_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green_level3');
            }
        }
        if(num=="3")
        {
            if(Q1_4.value!=30)
            {
                Q1_2_feedback.textContent ="دقت کن عزيزم. دوباره تلاش کن.";
                Q1_2_feedback.classList.add("shaking-animation");
                Q1_2_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
            }
            else
            {
                Q1_2_feedback.textContent ="آفرین عزیزم. درست حل کردی.";
                Q1_2_feedback.classList.add("shaking-animation");
                Q1_2_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green_level3');
            }
        }
        if(num=="4")
        {
            if(Q1_4.value!=10)
            {
                Q1_2_feedback.textContent ="دقت کن عزيزم. دوباره تلاش کن.";
                Q1_2_feedback.classList.add("shaking-animation");
                Q1_2_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
            }
            else
            {
                Q1_2_feedback.textContent ="آفرین عزیزم. درست حل کردی.";
                Q1_2_feedback.classList.add("shaking-animation");
                Q1_2_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green_level3');
            }
        }
       
    }

    let Q1_color_picker_items = ["Q1_yellow_color", "Q1_blue_color", "Q1_red_color", "Q1_green_color"];
    let Q2_color_picker_items = ["Q2_yellow_color", "Q2_red_color", "Q2_blue_color", "Q2_green_color"];

    function sector_coloring(id, question_id) {

        let [colors, Q_feedback] = (function () {
            switch (question_id) {
                case "P124-Q1":
                    return [Q1_color_picker_items, $("Q1_1_feedback")];

                case "P124-Q2":
                    return [Q2_color_picker_items, $("Q2_feedback")];
            }
        })();

        if (color_picker_item != null) {
            switch (color_picker_item.id) {
                case colors[0]:
                    $(id).style.backgroundColor = color_picker_item.style.backgroundColor;
                    pre_color = color_picker_item.style.backgroundColor;
                    break;

                case colors[1]:
                    $(id).style.backgroundColor = color_picker_item.style.backgroundColor;
                    pre_color = color_picker_item.style.backgroundColor;
                    break;

                case colors[2]:
                    $(id).style.backgroundColor = color_picker_item.style.backgroundColor;
                    pre_color = color_picker_item.style.backgroundColor;
                    break;

                case colors[3]:
                    $(id).style.backgroundColor = color_picker_item.style.backgroundColor;
                    pre_color = color_picker_item.style.backgroundColor;
                    break;
                default:
                    Q_feedback.textContent = "ابتدا رنگ موردنظر را انتخاب کن.";
                    Q_feedback.classList.add("shaking-animation");
                    Q_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
                    break;
            }
        } else {
            Q_feedback.textContent = "ابتدا رنگ موردنظر را انتخاب کن.";
            Q_feedback.classList.add("shaking-animation");
            Q_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
        }
        check_circle_sectors(question_id);
    }

    let Q1_ans = {"yellow": 3, "blue": 2, "red": 1, "green": 2};
    let Q2_ans = {"yellow": 3, "blue": 2, "red": 5, "green": 2};
    let Q1_sectors_id = ["Q1_sector1", "Q1_sector2", "Q1_sector3", "Q1_sector4", "Q1_sector5", "Q1_sector6", "Q1_sector7", "Q1_sector8"];
    let Q2_sectors_id = ["Q2_sector1", "Q2_sector2", "Q2_sector3", "Q2_sector4", "Q2_sector5", "Q2_sector6", "Q2_sector7", "Q2_sector8", "Q2_sector9", "Q2_sector10", "Q2_sector11", "Q2_sector12"];

    function check_circle_sectors(question_id) {

        let Q1_P124_check_count = {"yellow": 0, "blue": 0, "red": 0, "green": 0};
        let Q2_P124_check_count = {"yellow": 0, "blue": 0, "red": 0, "green": 0};

        let [ans, sectors_id, check_count, Q_feedback, Q_img] = (function () {
            switch (question_id) {
                case "P124-Q1":
                    return [Q1_ans, Q1_sectors_id, Q1_P124_check_count, $("Q1_1_feedback"), $("Q1_clock_img")];

                case "P124-Q2":
                    return [Q2_ans, Q2_sectors_id, Q2_P124_check_count, $("Q2_feedback"), $("Q2_book_img")];
            }
        })();

        for (const sector of sectors_id) {
            let color = $(sector).style.backgroundColor;

            switch (color.trim()) {
                case "var(--yellow_level3_border)":
                    check_count.yellow += 1;
                    break;

                case "var(--blue_level1)":
                    check_count.blue += 1;
                    break;

                case "var(--red_level1)":
                    check_count.red += 1;
                    break;

                case "var(--green_level2)":
                    check_count.green += 1;
                    break;
            }
        }

        if (JSON.stringify(ans) === JSON.stringify(check_count)) {

            Q_feedback.textContent = "آفرین عزیزم. درست حل کردی.";
            Q_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green_level3');
            Q_img.classList.add("shaking-animation");

        } else if (Object.values(check_count).reduce((a, b) => a + b, 0) == Object.values(ans).reduce((a, b) => a + b, 0)) {

            Q_feedback.textContent = "دقت کن عزيزم. دوباره تلاش کن.";
            Q_feedback.classList.add("shaking-animation");
            Q_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
        }
    }
    /* --------  The End of Q1-Q2 page 127  ------------------------------------ */

}
else if (page_no === "128") {
    function Radio_btn(id)
    {
        let btn=$(id);
        
        if(id==="radio_circle")
        {
            $("circle_q1").style="display: block;float: right; margin-top:1vw;"
            $("bar_q1").style="display: none;"
        }
        if(id==="radio_bar")
        {
            $("circle_q1").style="display: none;"
            $("bar_q1").style="display: block;float: left; margin-left: 30vw ;margin-top:10vw;margin-bottom: 20vw;"
        }
        if(id==="radio_circle_2")
        {
            $("circle_q2").style="display: block;float: right; margin-top:1vw;"
            $("bar_q2").style="display: none;"
        }
        if(id==="radio_bar_2")
        {
            $("circle_q2").style="display: none;"
            $("bar_q2").style="display: block;float: left; margin-left: 30vw ;margin-top:10vw;margin-bottom: 20vw;"
        }
    }

    function Q1_bar_input(id,num)
    {
        let Q1_2_feedback=$("Q1_2_feedback")
        let Q1_4=$(id);
        let q1_graph=$("graph"+num);
        
        var adad=((parseInt(Q1_4.value)/200)+"%");
        q1_graph.style.height=adad;
        if(num=="1")
        {
            if(Q1_4.value!=2000)
            {
                Q1_2_feedback.textContent ="دقت کن عزيزم. دوباره تلاش کن.";
                Q1_2_feedback.classList.add("shaking-animation");
                Q1_2_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
            }
            else
            {
                Q1_2_feedback.textContent ="آفرین عزیزم. درست حل کردی.";
                Q1_2_feedback.classList.add("shaking-animation");
                Q1_2_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green_level3');
            }
        }
        if(num=="2")
        {
            if(Q1_4.value!=4000)
            {
                Q1_2_feedback.textContent ="دقت کن عزيزم. دوباره تلاش کن.";
                Q1_2_feedback.classList.add("shaking-animation");
                Q1_2_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
            }
            else
            {
                Q1_2_feedback.textContent ="آفرین عزیزم. درست حل کردی.";
                Q1_2_feedback.classList.add("shaking-animation");
                Q1_2_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green_level3');
            }
        }
        if(num=="3")
        {
            if(Q1_4.value!=8000)
            {
                Q1_2_feedback.textContent ="دقت کن عزيزم. دوباره تلاش کن.";
                Q1_2_feedback.classList.add("shaking-animation");
                Q1_2_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
            }
            else
            {
                Q1_2_feedback.textContent ="آفرین عزیزم. درست حل کردی.";
                Q1_2_feedback.classList.add("shaking-animation");
                Q1_2_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green_level3');
            }
        }
        if(num=="4")
        {
            if(Q1_4.value!=6000)
            {
                Q1_2_feedback.textContent ="دقت کن عزيزم. دوباره تلاش کن.";
                Q1_2_feedback.classList.add("shaking-animation");
                Q1_2_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
            }
            else
            {
                Q1_2_feedback.textContent ="آفرین عزیزم. درست حل کردی.";
                Q1_2_feedback.classList.add("shaking-animation");
                Q1_2_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green_level3');
            }
        }
       
    }
    function Q2_bar_input(id,num)
    {
        let Q1_2_feedback=$("Q2_1_feedback")
        let Q1_4=$(id);
        let q1_graph=$("graph2_"+num);
        
        var adad=Q1_4.value+"%";
        q1_graph.style.height=adad;
        if(num=="1")
        {
            if(Q1_4.value!=5)
            {
                Q1_2_feedback.textContent ="دقت کن عزيزم. دوباره تلاش کن.";
                Q1_2_feedback.classList.add("shaking-animation");
                Q1_2_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
            }
            else
            {
                Q1_2_feedback.textContent ="آفرین عزیزم. درست حل کردی.";
                Q1_2_feedback.classList.add("shaking-animation");
                Q1_2_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green_level3');
            }
        }
        if(num=="2")
        {
            if(Q1_4.value!=10)
            {
                Q1_2_feedback.textContent ="دقت کن عزيزم. دوباره تلاش کن.";
                Q1_2_feedback.classList.add("shaking-animation");
                Q1_2_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
            }
            else
            {
                Q1_2_feedback.textContent ="آفرین عزیزم. درست حل کردی.";
                Q1_2_feedback.classList.add("shaking-animation");
                Q1_2_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green_level3');
            }
        }
        if(num=="3")
        {
            if(Q1_4.value!=8)
            {
                Q1_2_feedback.textContent ="دقت کن عزيزم. دوباره تلاش کن.";
                Q1_2_feedback.classList.add("shaking-animation");
                Q1_2_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
            }
            else
            {
                Q1_2_feedback.textContent ="آفرین عزیزم. درست حل کردی.";
                Q1_2_feedback.classList.add("shaking-animation");
                Q1_2_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green_level3');
            }
        }
        if(num=="4")
        {
            if(Q1_4.value!=7)
            {
                Q1_2_feedback.textContent ="دقت کن عزيزم. دوباره تلاش کن.";
                Q1_2_feedback.classList.add("shaking-animation");
                Q1_2_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
            }
            else
            {
                Q1_2_feedback.textContent ="آفرین عزیزم. درست حل کردی.";
                Q1_2_feedback.classList.add("shaking-animation");
                Q1_2_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green_level3');
            }
        }
       
    }

    let Q1_color_picker_items = ["Q1_yellow_color", "Q1_blue_color", "Q1_red_color", "Q1_green_color"];
    let Q2_color_picker_items = ["Q2_yellow_color", "Q2_red_color", "Q2_blue_color", "Q2_green_color"];

    function sector_coloring(id, question_id) {

        let [colors, Q_feedback] = (function () {
            switch (question_id) {
                case "P124-Q1":
                    return [Q1_color_picker_items, $("Q1_1_feedback")];

                case "P124-Q2":
                    return [Q2_color_picker_items, $("Q2_1_feedback")];
            }
        })();

        if (color_picker_item != null) {
            switch (color_picker_item.id) {
                case colors[0]:
                    $(id).style.backgroundColor = color_picker_item.style.backgroundColor;
                    pre_color = color_picker_item.style.backgroundColor;
                    break;

                case colors[1]:
                    $(id).style.backgroundColor = color_picker_item.style.backgroundColor;
                    pre_color = color_picker_item.style.backgroundColor;
                    break;

                case colors[2]:
                    $(id).style.backgroundColor = color_picker_item.style.backgroundColor;
                    pre_color = color_picker_item.style.backgroundColor;
                    break;

                case colors[3]:
                    $(id).style.backgroundColor = color_picker_item.style.backgroundColor;
                    pre_color = color_picker_item.style.backgroundColor;
                    break;
                default:
                    Q_feedback.textContent = "ابتدا رنگ موردنظر را انتخاب کن.";
                    Q_feedback.classList.add("shaking-animation");
                    Q_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
                    break;
            }
        } else {
            Q_feedback.textContent = "ابتدا رنگ موردنظر را انتخاب کن.";
            Q_feedback.classList.add("shaking-animation");
            Q_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
        }
        check_circle_sectors(question_id);
    }

    let Q1_ans = {"yellow": 3, "blue": 4, "red": 2, "green": 1};
    let Q2_ans = {"yellow": 5, "blue": 10, "red": 8, "green": 7};
    let Q1_sectors_id = ["Q1_sector1", "Q1_sector2", "Q1_sector3", "Q1_sector4", "Q1_sector5", "Q1_sector6", "Q1_sector7", "Q1_sector8","Q1_sector9","Q1_sector10"];
    let Q2_sectors_id = ["Q2_sector1", "Q2_sector2", "Q2_sector3", "Q2_sector4", "Q2_sector5", "Q2_sector6", "Q2_sector7", "Q2_sector8", "Q2_sector9", "Q2_sector10"
    , "Q2_sector11", "Q2_sector12", "Q2_sector13", "Q2_sector14", "Q2_sector15", "Q2_sector16", "Q2_sector17", "Q2_sector18", "Q2_sector19", "Q2_sector20"
    , "Q2_sector21", "Q2_sector22", "Q2_sector23", "Q2_sector24", "Q2_sector25", "Q2_sector26", "Q2_sector27", "Q2_sector28", "Q2_sector29", "Q2_sector30"];

    function check_circle_sectors(question_id) {

        let Q1_P124_check_count = {"yellow": 0, "blue": 0, "red": 0, "green": 0};
        let Q2_P124_check_count = {"yellow": 0, "blue": 0, "red": 0, "green": 0};

        let [ans, sectors_id, check_count, Q_feedback, Q_img] = (function () {
            switch (question_id) {
                case "P124-Q1":
                    return [Q1_ans, Q1_sectors_id, Q1_P124_check_count, $("Q1_1_feedback"), $("Q1_clock_img")];

                case "P124-Q2":
                    return [Q2_ans, Q2_sectors_id, Q2_P124_check_count, $("Q2_1_feedback"), $("Q2_book_img")];
            }
        })();

        for (const sector of sectors_id) {
            let color = $(sector).style.backgroundColor;
            if(question_id==="P124-Q1")
            {
                switch (color.trim()) 
                {
                    case "var(--yellow_level3_border)":
                        check_count.yellow += 1;
                        break;

                    case "var(--blue_level1)":
                        check_count.blue += 1;
                        break;

                    case "var(--red_level1)":
                        check_count.red += 1;
                        break;

                    case "var(--green_level2)":
                        check_count.green += 1;
                        break;
                }
            }
            else
            {
                switch (color.trim()) 
                {
                    case "var(--yellow_banana)":
                        check_count.yellow += 1;
                        break;

                    case "var(--brown_choclate)":
                        check_count.blue += 1;
                        break;

                    case "var(--pink_cherry)":
                        check_count.red += 1;
                        break;

                    case "var(--yellow_saffron)":
                        check_count.green += 1;
                        break;
                }
            }
        }

        if (JSON.stringify(ans) === JSON.stringify(check_count)) {

            Q_feedback.textContent = "آفرین عزیزم. درست حل کردی.";
            Q_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green_level3');
            Q_img.classList.add("shaking-animation");

        } else if (Object.values(check_count).reduce((a, b) => a + b, 0) == Object.values(ans).reduce((a, b) => a + b, 0)) {

            Q_feedback.textContent = "دقت کن عزيزم. دوباره تلاش کن.";
            Q_feedback.classList.add("shaking-animation");
            Q_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
        }
    }
}

else if (page_no === "129")
{
    function stdudent_gender_check(id)
    {
        let Q1_feedback=$("Q1_3_feedback");
        if(id=="boys")
        {
            Q1_feedback.textContent ="دقت کن عزيزم. دوباره تلاش کن.";
            Q1_feedback.classList.add("shaking-animation");
            Q1_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
        }
        if(id==="girls")
        {
            Q1_feedback.textContent ="دقت کن عزيزم. دوباره تلاش کن.";
            Q1_feedback.classList.add("shaking-animation");
            Q1_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
        }
        if(id=="equal")
        {
            Q1_feedback.textContent ="آفرین عزیزم. درست حل کردی.";
            Q1_feedback.classList.add("shaking-animation");
            Q1_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green_level3');
        }
    }
    function graph_hover(id)
    {
        let graph=$(id)
        graph.onmouseenter = function () {
            if(graph.style.backgroundColor!="green")
                graph.style.backgroundColor = "rgba(0, 255, 0, 0.2)";
        }
        graph.onmouseout = function () {
            if(graph.style.backgroundColor!="green")
            {
            graph.style.backgroundColor = "rgba(26, 180, 241, 0.2)";
            }
        }
    }
    let graph1=0;
    let graph2=0;
    let graph3=0;
    let graph4=0;
    function graph_clicked(id,num)
    {
        let graph=$(id)
        let Q1_2_feedback=$("Q1_3_feedback")
        if(graph.style.backgroundColor === "green")
        {
            graph.style.backgroundColor = "rgba(26, 180, 241, 0.2)";
            switch(num)
            {
                case 1:
                    graph1-=1;
                    break;
                case 2:
                    graph2-=1;
                    break;
                case 3:
                    graph3-=1;
                    break;
                case 4:
                    graph4-=1;
                    break;            
            }
        }
        else
        {
            graph.style.backgroundColor = "green";
            switch(num)
            {
                case 1:
                    graph1+=1;
                    break;
                case 2:
                    graph2+=1;
                    break;
                case 3:
                    graph3+=1;
                    break;
                case 4:
                    graph4+=1;
                    break;            
            }
        }
        if(graph1!=0&&graph2!=0&&graph3!=0&&graph4!=0)
        {
            if(graph1===2&&graph2===2&&graph3===3&&graph4===1)
            {
                Q1_3_feedback.textContent ="آفرین عزیزم. درست حل کردی.";
                Q1_3_feedback.classList.add("shaking-animation");
                Q1_3_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green_level3');
            }
            else
            {
                Q1_3_feedback.textContent ="دقت کن عزيزم. دوباره تلاش کن.";
                Q1_3_feedback.classList.add("shaking-animation");
                Q1_3_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
            }
        }
    }

    function Q1_bar_input(id,num)
    {
        let Q1_2_feedback=$("Q1_2_feedback")
        let Q1_4=$(id);
        let q1_graph=$("graph"+num);
        var adad=(Q1_4.value+"%");
        q1_graph.style.height=adad;
        if(num=="1")
        {
            if(Q1_4.value!=10)
            {
                Q1_2_feedback.textContent ="دقت کن عزيزم. دوباره تلاش کن.";
                Q1_2_feedback.classList.add("shaking-animation");
                Q1_2_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
            }
            else
            {
                Q1_2_feedback.textContent ="آفرین عزیزم. درست حل کردی.";
                Q1_2_feedback.classList.add("shaking-animation");
                Q1_2_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green_level3');
            }
        }
        if(num=="2")
        {
            if(Q1_4.value!=20)
            {
                Q1_2_feedback.textContent ="دقت کن عزيزم. دوباره تلاش کن.";
                Q1_2_feedback.classList.add("shaking-animation");
                Q1_2_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
            }
            else
            {
                Q1_2_feedback.textContent ="آفرین عزیزم. درست حل کردی.";
                Q1_2_feedback.classList.add("shaking-animation");
                Q1_2_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green_level3');
            }
        }
        if(num=="3")
        {
            if(Q1_4.value!=40)
            {
                Q1_2_feedback.textContent ="دقت کن عزيزم. دوباره تلاش کن.";
                Q1_2_feedback.classList.add("shaking-animation");
                Q1_2_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
            }
            else
            {
                Q1_2_feedback.textContent ="آفرین عزیزم. درست حل کردی.";
                Q1_2_feedback.classList.add("shaking-animation");
                Q1_2_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green_level3');
            }
        }
        if(num=="4")
        {
            if(Q1_4.value!=30)
            {
                Q1_2_feedback.textContent ="دقت کن عزيزم. دوباره تلاش کن.";
                Q1_2_feedback.classList.add("shaking-animation");
                Q1_2_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
            }
            else
            {
                Q1_2_feedback.textContent ="آفرین عزیزم. درست حل کردی.";
                Q1_2_feedback.classList.add("shaking-animation");
                Q1_2_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green_level3');
            }
        }
       
    }

    let Q1_color_picker_items = ["Q1_yellow_color", "Q1_blue_color", "Q1_red_color", "Q1_green_color"];
    let Q2_color_picker_items = ["Q2_yellow_color", "Q2_red_color", "Q2_blue_color", "Q2_green_color"];

    function sector_coloring(id, question_id) {

        let [colors, Q_feedback] = (function () {
            switch (question_id) {
                case "P124-Q1":
                    return [Q1_color_picker_items, $("Q1_1_feedback")];

                case "P124-Q2":
                    return [Q2_color_picker_items, $("Q2_feedback")];
            }
        })();

        if (color_picker_item != null) {
            switch (color_picker_item.id) {
                case colors[0]:
                    $(id).style.backgroundColor = color_picker_item.style.backgroundColor;
                    pre_color = color_picker_item.style.backgroundColor;
                    break;

                case colors[1]:
                    $(id).style.backgroundColor = color_picker_item.style.backgroundColor;
                    pre_color = color_picker_item.style.backgroundColor;
                    break;

                case colors[2]:
                    $(id).style.backgroundColor = color_picker_item.style.backgroundColor;
                    pre_color = color_picker_item.style.backgroundColor;
                    break;

                case colors[3]:
                    $(id).style.backgroundColor = color_picker_item.style.backgroundColor;
                    pre_color = color_picker_item.style.backgroundColor;
                    break;
                default:
                    Q_feedback.textContent = "ابتدا رنگ موردنظر را انتخاب کن.";
                    Q_feedback.classList.add("shaking-animation");
                    Q_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
                    break;
            }
        } else {
            Q_feedback.textContent = "ابتدا رنگ موردنظر را انتخاب کن.";
            Q_feedback.classList.add("shaking-animation");
            Q_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
        }
        check_circle_sectors(question_id);
    }

    let Q1_ans = {"yellow": 1, "blue": 2, "red": 4, "green": 3};
    let Q2_ans = {"yellow": 3, "blue": 2, "red": 5, "green": 2};
    let Q1_sectors_id = ["Q1_sector1", "Q1_sector2", "Q1_sector3", "Q1_sector4", "Q1_sector5", "Q1_sector6", "Q1_sector7", "Q1_sector8", "Q1_sector9", "Q1_sector10"];
    let Q2_sectors_id = ["Q2_sector1", "Q2_sector2", "Q2_sector3", "Q2_sector4", "Q2_sector5", "Q2_sector6", "Q2_sector7", "Q2_sector8", "Q2_sector9", "Q2_sector10", "Q2_sector11", "Q2_sector12"];

    function check_circle_sectors(question_id) {

        let Q1_P124_check_count = {"yellow": 0, "blue": 0, "red": 0, "green": 0};
        let Q2_P124_check_count = {"yellow": 0, "blue": 0, "red": 0, "green": 0};

        let [ans, sectors_id, check_count, Q_feedback, Q_img] = (function () {
            switch (question_id) {
                case "P124-Q1":
                    return [Q1_ans, Q1_sectors_id, Q1_P124_check_count, $("Q1_1_feedback"), $("Q1_clock_img")];

                case "P124-Q2":
                    return [Q2_ans, Q2_sectors_id, Q2_P124_check_count, $("Q2_feedback"), $("Q2_book_img")];
            }
        })();

        for (const sector of sectors_id) {
            let color = $(sector).style.backgroundColor;

            switch (color.trim()) {
                case "var(--yellow_level3_border)":
                    check_count.yellow += 1;
                    break;

                case "var(--blue_level1)":
                    check_count.blue += 1;
                    break;

                case "var(--red_level1)":
                    check_count.red += 1;
                    break;

                case "var(--green_level2)":
                    check_count.green += 1;
                    break;
            }
        }

        if (JSON.stringify(ans) === JSON.stringify(check_count)) {

            Q_feedback.textContent = "آفرین عزیزم. درست حل کردی.";
            Q_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green_level3');
            Q_img.classList.add("shaking-animation");

        } else if (Object.values(check_count).reduce((a, b) => a + b, 0) == Object.values(ans).reduce((a, b) => a + b, 0)) {

            Q_feedback.textContent = "دقت کن عزيزم. دوباره تلاش کن.";
            Q_feedback.classList.add("shaking-animation");
            Q_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
        }
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
