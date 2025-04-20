document.addEventListener("mousemove", (event) => {
    const menu = document.querySelector(".menu");
    if (event.clientY < 250) {
        menu.style.transform = "translateY(0)"; // 滑入
        menu.style.transition = "transform 0.5s ease";
    } else {
        menu.style.transform = "translateY(-100%)"; // 滑出
        menu.style.transition = "transform 0.5s ease";
    }
});

function loadIframe(url) {
    const iframe = document.getElementById('content-frame');
    const home = document.querySelector('.home');
    iframe.src = url;
    iframe.style.display = 'block';
    home.style.display = 'none';
}

function closeIframe() {
    const iframe = document.getElementById('content-frame');
    const home = document.querySelector('.home');
    iframe.src = '';
    iframe.style.display = 'none';
    home.style.display = 'block';
}
