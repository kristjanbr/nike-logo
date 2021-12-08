window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling', windowPosition);
})

window.onload = function() {
    var htmlCanvas = document.getElementById('canvas'),
    ctx = htmlCanvas.getContext('2d');

    ctx.beginPath();

    ctx.moveTo(55, 1);
    ctx.bezierCurveTo(35, 20, 16, 46, 7, 66);
    ctx.bezierCurveTo(-8, 104, 1, 136, 32, 141);
    ctx.bezierCurveTo(55, 145, 85, 137, 131, 117);
    ctx.bezierCurveTo(137, 114, 179, 96, 304, 42);
    ctx.bezierCurveTo(357, 20, 390, 2, 399, 2);
    ctx.bezierCurveTo(399, 2, 116, 77, 108, 79);
    ctx.bezierCurveTo(95, 83, 80, 83, 69, 81);
    ctx.bezierCurveTo(51, 77, 42, 63, 42, 42);
    ctx.bezierCurveTo(42, 34, 46, 21, 54, 5);
    ctx.bezierCurveTo(55, 2, 57, 0.1, 57, 0.05);
    ctx.bezierCurveTo(57, 0, 56, 1, 55, 2);

    ctx.closePath();
    ctx.fillStyle="#191919";
    ctx.fill();

}

function about(){
    Swal.fire({
        position: 'top',
        title: 'Credits',
        text: 'Made by Kristjan Brataševec, 4. RA, 2021',
        icon: 'info',
        showConfirmButton: false,
    })
}
