function $$(id) {return document.getElementById(id);}

$$('page-switcher').addEventListener('keydown', event => {
    let pageNum = $$('page-switcher').value
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        console.log('Entered');
        window.location.href = `book_3_${parseInt(pageNum)}.html`
    }
})

// functions for page 116
let p116_calcResult = () => {
    let firstNum = parseInt($$('q1-first-num').value), secondNum = parseInt($$('q1-second-num').value)
    if (firstNum * secondNum > 0) {
        $$('q1-result').innerHTML = firstNum * secondNum
    } else {
        $$('q1-result').innerHTML = 0
    }
}

let p116_checkQ1 = () => {
    let answer = $$('q1-ans').value
    let numbers = answer.split(' ').map(x => parseInt(x))
    if (numbers.includes(1) && numbers.includes(2) && numbers.includes(3) && numbers.includes(4) && numbers.includes(5)) {
        $$("q1-feedback-wrong").setAttribute('style', 'display: none')
        $$("q1-feedback-correct").setAttribute('style', 'display: block')
    } else {
        $$("q1-feedback-correct").setAttribute('style', 'display: none')
        $$("q1-feedback-wrong").setAttribute('style', 'display: block')
    }
}

let p116_updateNextFieldQ2 = () => {
    let firstNum = $$('q2-first-num'), secondNum = $$('q2-second-num')
    secondNum.value= firstNum.value
}

let p116_checkQ2 = () => {
    let firstNum = $$("q2-first-num")
    if (parseInt(firstNum.value) === 20) {
        $$("q2-feedback-wrong").setAttribute('style', 'display: none')
        $$("q2-feedback-correct").setAttribute('style', 'display: block')
    } else {
        $$("q2-feedback-correct").setAttribute('style', 'display: none')
        $$("q2-feedback-wrong").setAttribute('style', 'display: block')
    }
}

let p116_checkQ3 = () => {
    let firstNum = $$("q3-first-num")
    if (parseInt(firstNum.value) === 8) {
        $$("q3-feedback-wrong").setAttribute('style', 'display: none')
        $$("q3-feedback-correct").setAttribute('style', 'display: block')
    } else {
        $$("q3-feedback-correct").setAttribute('style', 'display: none')
        $$("q3-feedback-wrong").setAttribute('style', 'display: block')
    }
}

let p116_checkQ4 = () => {
    let choice = $('input[name=q4-result]:checked').val()
    if (choice === 'uncertain') {
        $$("q4-feedback-wrong").setAttribute('style', 'display: none')
        $$("q4-feedback-correct").setAttribute('style', 'display: block')
    } else {
        $$("q4-feedback-correct").setAttribute('style', 'display: none')
        $$("q4-feedback-wrong").setAttribute('style', 'display: block')
    }
}

// functions for page 117
let matchesLeft = 4

let highlight = e => {
    e.setAttribute('opacity', '0.25')
}

let dehighlight = e => {        
    if (e.getAttribute('placed') === 'false') {
        e.setAttribute('opacity', '0')
    } else if (e.getAttribute('placed') === 'true') {
        e.setAttribute('opacity', '1')
    }
}

let toggleLine = e => {
    if (e.getAttribute('placed') === 'false') {
        if (matchesLeft > 0) {
            e.setAttribute('placed', 'true')
            e.setAttribute('opacity', '1')
            matchesLeft--
        } else {
            alert('فقط مجازید ۴ چوب کبریت استفاده کنید.')
        }
    } else if (e.getAttribute('placed') === 'true') {
        e.setAttribute('placed', 'false')
        e.setAttribute('opacity', '0') 
        if (matchesLeft < 4) matchesLeft++
    }
    document.getElementById('match-cnt').innerHTML = `چوب کبریت باقی‌مانده: ${matchesLeft}`
}

let p117_checkQ1 = () => {
    let lines = Array.from(document.getElementsByClassName('q1-ans'))
    for (const element of lines) {
        if (element.getAttribute('placed') === 'false') {
            $$("q1-feedback-correct").setAttribute('style', 'display: none')
            $$("q1-feedback-wrong").setAttribute('style', 'display: block')
            break
        } else {
            $$("q1-feedback-wrong").setAttribute('style', 'display: none')
            $$("q1-feedback-correct").setAttribute('style', 'display: block')
        }
    }
}