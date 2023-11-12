const musik = document.getElementById('musik');
const emsCode = document.getElementById('emsCode');
const goku = document.getElementById('goku');

musik.addEventListener('click', () => {
    window.open("/html/musik.html", "_blank");
});

emsCode.addEventListener('click', () => {
    window.open('/html/emsCode.html', "_blank");
    console.log('click');
});