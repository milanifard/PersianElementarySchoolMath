
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
    /* --------  The End of Q1-Q2 page 124  ------------------------------------ */

}
else if (page_no === "125") {

    let root = document.documentElement;
    let last_degree = 0;

    function rotation(id) {

        if ($(id).classList.contains("continues-rotation")) {
            $(id).classList.remove("continues-rotation");
            $(id).style.transform = 'rotate(' + last_degree + 'deg)';
            return rotation(id);
        }
        setTimeout(function () {

            let random_number = Math.floor(Math.random() * 360 + 720);

            root.style.setProperty('--dynamic_rnd', (random_number + last_degree) + "deg");
            root.style.setProperty('--dynamic_rnd_last', last_degree + "deg");

            $(id).classList.add("continues-rotation");


            update_last_degree(random_number);

        }, 10);
    }

    function update_last_degree(degree) {
        last_degree = (last_degree + degree) % 360;
    }

    let Q1_color_picker_items = ["Q1_red_color", "Q1_green_color"];
    let Q2_color_picker_items = ["Q2_red_color", "Q2_blue_color"];

    function sector_coloring(id, question_id) {

        let [colors, Q_feedback] = (function () {
            switch (question_id) {
                case "Q1":
                    return [Q1_color_picker_items, $("Q1_feedback")];

                case "Q2":
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

                default:
                    Q_feedback.textContent = "ابتدا رنگ موردنظر را انتخاب کنید.";
                    Q_feedback.classList.add("shaking-animation");
                    Q_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
                    break;
            }
        } else {
            Q_feedback.textContent = "ابتدا رنگ موردنظر را انتخاب کنید.";
            Q_feedback.classList.add("shaking-animation");
            Q_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
        }
        check_circle_sectors(question_id);
    }

    let Q1_ans = {"red": 0, "green": 0}; // Sets in the coloring_table func
    let Q2_ans = {"blue": 5, "red": 5};
    let Q1_sectors_id = ["Q1_ans_sector1", "Q1_ans_sector2", "Q1_ans_sector3", "Q1_ans_sector4", "Q1_ans_sector5", "Q1_ans_sector6", "Q1_ans_sector7", "Q1_ans_sector8", "Q1_ans_sector9", "Q1_ans_sector10"];
    let Q2_sectors_id = ["Q2_ans_sector1", "Q2_ans_sector2", "Q2_ans_sector3", "Q2_ans_sector4", "Q2_ans_sector5", "Q2_ans_sector6", "Q2_ans_sector7", "Q2_ans_sector8", "Q2_ans_sector9", "Q2_ans_sector10"];

    function check_circle_sectors(question_id) {

        let Q1_check_count = {"red": 0, "green": 0};
        let Q2_check_count = {"blue": 0, "red": 0};

        let [ans, sectors_id, check_count, Q_feedback, Q_img] = (function () {
            switch (question_id) {
                case "Q1":
                    return [Q1_ans, Q1_sectors_id, Q1_check_count, $("Q1_feedback"), $("Q1_pencil")];

                case "Q2":
                    return [Q2_ans, Q2_sectors_id, Q2_check_count, $("Q2_feedback"), $("pencils")];
            }
        })();

        for (const sector of sectors_id) {

            let color = $(sector).style.backgroundColor;

            switch (color.trim()) {

                case "var(--blue_level1)":
                    check_count.blue += 1;
                    break;

                case "var(--red_level3)":
                    check_count.red += 1;
                    break;

                case "var(--green_level4)":
                    check_count.green += 1;
                    break;
            }
        }

        if (JSON.stringify(ans) === JSON.stringify(check_count) && Object.values(ans).reduce((a, b) => a + b, 0) == 10) {

            Q_feedback.textContent = "آفرین عزیزم. درست حل کردی.";
            Q_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--green_level3');
            Q_img.classList.add("shaking-animation");

        } else if (Object.values(check_count).reduce((a, b) => a + b, 0) == Object.values(ans).reduce((a, b) => a + b, 0) &&
            Object.values(check_count).reduce((a, b) => a + b, 0) == 10) {

            Q_feedback.textContent = "دقت کن عزيزم. دوباره تلاش کن.";
            Q_feedback.classList.add("shaking-animation");
            Q_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level3');
        } else if (Object.values(ans).reduce((a, b) => a + b, 0) < 10 && color_picker_item != null) {
            Q_feedback.textContent = "ابتدا جدول بالا را پر کن.";
            Q_feedback.classList.add("shaking-animation");
            Q_feedback.style.color = getComputedStyle(document.documentElement).getPropertyValue('--red_level3');

        }
    }

    function coloring_table(parent, id) {

        $(parent).style.backgroundColor = $(id).style.backgroundColor;

        switch (($(id).style.backgroundColor).trim()) {

            case "var(--red_level3)":
                Q1_ans.red += 1;
                break;

            case "var(--green_level4)":
                Q1_ans.green += 1;
                break;
        }

        $(parent).innerText = '';
    }

    const input = document.querySelector('input');
    $('Q2_red_input').addEventListener('input', check_ans_Q2);
    $('Q2_blue_input').addEventListener('input', check_ans_Q2);

    function check_ans_Q2(e) {
        if (e.target.value === 50) {
            $(e.target.id).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--green_level2');
        } else {
            $(e.target.id).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--red_level1');

        }
    }

    $('Q1_part1').addEventListener('input', check_ans_Q1);
    $('Q1_part2_top').addEventListener('input', check_ans_Q1);
    $('Q1_part2_down').addEventListener('input', check_ans_Q1);
    let green_count = 0;

    function check_ans_Q1(e) {

        switch (e.target.id) {

            case 'Q1_part1':
                green_count = e.target.value;
                if (green_count >= 0 && green_count <= 10) {
                    $(e.target.id).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--green_level2');
                } else {
                    $(e.target.id).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--red_level1');
                }
                break;

            case 'Q1_part2_top':
                if (e.target.value == (10 - green_count)) {
                    $(e.target.id).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--green_level2');
                } else {
                    $(e.target.id).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--red_level1');
                }
                break;

            case 'Q1_part2_down':
                if (e.target.value == 10) {
                    $(e.target.id).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--green_level2');
                } else {
                    $(e.target.id).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--red_level1');
                }
                break;
        }
    }
}

else if (page_no === "126"){

    let Q1_color_picker_items = ["Q1_yellow_color", "Q1_blue_color", "Q1_red_color", "Q1_green_color"];
    let Q3_color_picker_items = ["Q3_blue_color", "Q3_red_color"];

    function sector_coloring(id, question_id) {

        let [colors, Q_feedback] = (function () {
            switch (question_id) {
                case "Q1":
                    return [Q1_color_picker_items, $("Q1_feedback")];

                case "Q3":
                    return [Q3_color_picker_items, $("Q3_feedback")];
            }
        })();

        if (color_picker_item != null){
            switch (color_picker_item.id) {
                case colors[0]:
                    $(id).style.backgroundColor= color_picker_item.style.backgroundColor;
                    pre_color = color_picker_item.style.backgroundColor;
                    break;

                case colors[1]:
                    $(id).style.backgroundColor= color_picker_item.style.backgroundColor;
                    pre_color = color_picker_item.style.backgroundColor;
                    break;

                case colors[2]:
                    $(id).style.backgroundColor= color_picker_item.style.backgroundColor;
                    pre_color = color_picker_item.style.backgroundColor;
                    break;

                case colors[3]:
                    $(id).style.backgroundColor= color_picker_item.style.backgroundColor;
                    pre_color = color_picker_item.style.backgroundColor;
                    break;
                default:
                    Q_feedback.textContent = "ابتدا رنگ موردنظر را انتخاب کن.";
                    Q_feedback.classList.add("shaking-animation");
                    Q_feedback.style.color= getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
                    break;
            }
        }

        else {
            Q_feedback.textContent = "ابتدا رنگ موردنظر را انتخاب کن.";
            Q_feedback.classList.add("shaking-animation");
            Q_feedback.style.color= getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
        }
        check_circle_sectors(question_id);
    }

    let Q1_ans = {"yellow": 4, "blue": 2, "red": 1, "green": 1};
    let Q3_ans = {"blue": 4, "red": 2};
    let Q1_sectors_id = ["Q1_sector1", "Q1_sector2", "Q1_sector3", "Q1_sector4", "Q1_sector5", "Q1_sector6", "Q1_sector7", "Q1_sector8"];
    let Q3_sectors_id = ["Q3_sector1", "Q3_sector2", "Q3_sector3", "Q3_sector4", "Q3_sector5", "Q3_sector6"];

    function check_circle_sectors(question_id) {

        let Q1_check_count = {"yellow": 0, "blue": 0, "red": 0, "green": 0};
        let Q3_check_count = {"blue": 0, "red": 0};

        let [ans, sectors_id, check_count, Q_feedback, Q_img] = (function () {
            switch (question_id) {
                case "Q1":
                    return [Q1_ans, Q1_sectors_id, Q1_check_count, $("Q1_feedback"), $("Q1_tree_img")];

                case "Q3":
                    return [Q3_ans, Q3_sectors_id, Q3_check_count, $("Q3_feedback"), $("Q3_pencil")];
            }
        })();

        for(const sector of sectors_id) {
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

                case "var(--red_level3)":
                    check_count.red += 1;
                    break;

                case "var(--blue_level2)":
                    check_count.blue += 1;
                    break;
            }
        }

        if (JSON.stringify(ans) === JSON.stringify(check_count)){

            Q_feedback.textContent = "آفرین عزیزم. درست حل کردی.";
            Q_feedback.style.color= getComputedStyle(document.documentElement).getPropertyValue('--green_level3');
            Q_img.classList.add("shaking-animation");

        }

        else if (Object.values(check_count).reduce((a, b) => a + b, 0) == Object.values(ans).reduce((a, b) => a + b, 0)){

            Q_feedback.textContent = "دقت کن عزيزم. دوباره تلاش کن.";
            Q_feedback.classList.add("shaking-animation");
            Q_feedback.style.color= getComputedStyle(document.documentElement).getPropertyValue('--red_level2');
        }
    }

    $('box_part1').addEventListener('input', check_ans_Q1);
    $('box_part2').addEventListener('input', check_ans_Q1);
    $('Q1_girl').addEventListener('input', check_ans_Q1);
    $('Q1_boy').addEventListener('input', check_ans_Q1);
    let green_count = 0;
    function check_ans_Q1(e) {

        switch (e.target.id) {

            case 'Q1_boy':
                if (e.target.value == 10){ $(e.target.id).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--green_level2');}
                else { $(e.target.id).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--red_level1');}
                break;

            case 'Q1_girl':
                if (e.target.value == 30){ $(e.target.id).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--green_level2');}
                else { $(e.target.id).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--red_level1');}
                break;

            case 'box_part1':
                if (e.target.value == 100){ $(e.target.id).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--green_level2');}
                else { $(e.target.id).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--red_level1');}
                break;

            case 'box_part2':
                if (e.target.value == 200){ $(e.target.id).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--green_level2');}
                else { $(e.target.id).style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--red_level1');}
                break;
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
