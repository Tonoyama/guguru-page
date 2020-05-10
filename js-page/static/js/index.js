var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    autoplay: {
    delay: 3000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
})

function select_box() {

    var elem = document.getElementById('select-img')
    var box = document.getElementById('select-box').value;

    var message = '';
    
    if(box === '1') {
        elem.src = 'https://i.imgur.com/2pjjBz0.png'
        message = 'HTMLは、Webページの構造を作ります。CSSは、HTMLを装飾します。';
    }
    else if(box === '2') {
        elem.src = 'https://i.imgur.com/qZ7vRaT.png'
        message = 'JavaScriptは、Webページに動的な処理を与えます。'
    }
    else if(box ==='3') {
        elem.src = 'https://i.imgur.com/L11kB5t.jpg'
        message = 'Webにおけるデプロイとは、WebページをURLから見れるようにする事です。'
    }
    document.getElementById('message_area').innerHTML = message;
}