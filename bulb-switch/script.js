
function switchBulb(state) {
    const bulb = document.getElementById('bulb');
    if (state === 'on') {
        bulb.src = 'bulb-on.svg';
    } else {
        bulb.src = 'bulb-off.svg';
    }
}
