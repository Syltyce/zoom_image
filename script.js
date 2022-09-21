const img = document.querySelector("img");

img.addEventListener('mousemove', (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    console.log(x, y);

    img.style.transformOrigin = x + 'px ' + y + 'px';
    img.style.transform = "scale(2)";

    document.body.style.background = 'lightblue';
});

img.addEventListener('mouseleave', (e) => {
    img.style.transform = "scale(1)";
    document.body.style.background = 'transparent';
});