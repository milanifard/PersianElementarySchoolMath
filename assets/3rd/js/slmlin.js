

var display_success = () => {
    let suc_el = document.querySelector('#success-message')

    suc_el.style.display = 'flex'

    setTimeout(() => {
        suc_el.style.opacity = '1'
    }, 500);

    setTimeout(() => {
        // suc_el.style.display = 'none'
        suc_el.style.opacity = '0'
    }, 1500);

    setTimeout(() => {
        // suc_el.style.display = 'none'
        suc_el.style.display = 'none'
    }, 2000);

}

var check_splited_ = (event, splited_nums) => {
    if (event.target.value.split(' ').length === splited_nums) {
        event.target.style.background = 'rgb(141, 243, 128)'
    } else {
        event.target.style.background = 'rgb(250, 212, 108)'
    }
}

var check_input_ = (event, check_values) => {
    if (check_values.includes(event.target.value)) {
        display_success()
        event.target.style.background = 'rgb(141, 243, 128)'
    } else {
        event.target.style.background = 'rgb(250, 212, 108)'
    }
}


var pos = {x:0, y:0}
var ctx = null
var canvas = document.querySelector('.paint-canvas')

var _initiate_paint_ = () => {
    ctx = canvas.getContext('2d')
    console.log(ctx)
    resize()
    window.addEventListener("resize", resize)
    canvas.addEventListener("mousemove", draw)
    canvas.addEventListener("mousedown", setPosition)
    canvas.addEventListener("mouseenter", setPosition)
}

if (canvas)
    _initiate_paint_(canvas)

function resize() {
    ctx.canvas.width = canvas.offsetWidth
    ctx.canvas.height = canvas.offsetHeight
    // ctx.canvas.width = window.innerWidth
    // ctx.canvas.height = window.innerHeight
}

function setPosition(e) {
    console.log(pos)
    pos.x = e.clientX - canvas.getBoundingClientRect().left
    pos.y = e.clientY - canvas.getBoundingClientRect().top
}

function draw(e) {
    if (e.buttons !== 1) 
        return;
    
    let color = 'black'

    ctx.beginPath()
    ctx.lineWidth = 7
    ctx.lineCap = 'round'
    ctx.strokeStyle = color

    ctx.moveTo(pos.x, pos.y)
    setPosition(e)
    ctx.lineTo(pos.x, pos.y)
    ctx.stroke()
}
