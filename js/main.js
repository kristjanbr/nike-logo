window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling', windowPosition);
})

window.onload = function() {
    var htmlCanvas = document.getElementById('canvas'),
    ctx = htmlCanvas.getContext('2d');

    
    ctx.scale(0.3, 0.3);
    ctx.beginPath();

    ctx.moveTo(280, 390);
    ctx.bezierCurveTo(582, 500, 1134, 212, 1820, 20);
    ctx.bezierCurveTo(624, 539, 320, 720, 130, 630);
    ctx.bezierCurveTo(-134, 460, 214, 130, 312, 10);
    ctx.bezierCurveTo(160, 212, 231, 363, 334, 413);

    ctx.closePath();
    ctx.fillStyle="#191919";
    ctx.fill();

}

function about(){
    Swal.fire({
        position: 'top',
        title: 'Credits',
        text: 'Made by Kristjan Brataševec, 4.RA, 2021',
        icon: 'info',
        showConfirmButton: false,
    })
}