

var display_success = () => {
    let suc_el = document.querySelector('#success-message')

    suc_el.style.display = 'flex'

    setTimeout(() => {
        suc_el.style.opacity = '1'
    }, 1000);

    setTimeout(() => {
        // suc_el.style.display = 'none'
        suc_el.style.opacity = '0'
    }, 3000);

    setTimeout(() => {
        // suc_el.style.display = 'none'
        suc_el.style.display = 'none'
    }, 4000);

}


var p84_q1 = (event) => {
    console.log(event.target.value)
    if (event.target.value === 'مربع') {
        display_success()
    }
}