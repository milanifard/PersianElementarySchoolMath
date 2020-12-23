

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