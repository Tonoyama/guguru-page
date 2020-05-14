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

    let elem = document.getElementById('select-img')
    let box = document.getElementById('select-box').value;

    let message = '';
    
    switch(box) {
      case '1':
        elem.src = 'https://i.imgur.com/NyuLkeS.jpg';
        message = 'HTMLは、Webページの構造を作ります。CSSは、HTMLを装飾します。';
        break;
        
      case '2':
        elem.src = 'https://i.imgur.com/XdxpTtV.jpg';
        message = 'JavaScriptは、Webページに動的な処理を与えます。';
        break;
        
      case '3':
        elem.src = 'https://i.imgur.com/9jeeKuc.jpg';
        message = 'Webにおけるデプロイとは、Webページを実際に見れるようにする事です。';
        break;
        
    }
  
    document.getElementById('message_area').innerHTML = message;
}