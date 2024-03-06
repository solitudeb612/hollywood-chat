/*波浪点击特效*/
document.addEventListener('click', function (event) {
    var wave = document.createElement('div');
    wave.className = 'wave';
    wave.style.backgroundColor = '#fff';
    wave.style.left = (event.pageX - 50) + 'px';
    wave.style.top = (event.pageY - 50) + 'px';
    document.getElementById('app').appendChild(wave);

    setTimeout(function () {
        wave.remove();
    }, 1000);
});