let items = document.querySelectorAll('.item');

function setActive() {
    // 遍历所有item元素，移除active样式
    items.forEach((item) => {
        item.classList.remove('active');
    })
    this.classList.add('active');
}

items.forEach((item) => {
    item.addEventListener('click', setActive);
})

//锚点跳转滑动效果
$("#one").on('click', () => {
    $('html,body').animate({
        scrollTop: $('#first').offset().top
    }, 500)
})
$("#two").on('click', () => {
    $('html,body').animate({
        scrollTop: $('#second').offset().top
    }, 500)
})
$("#three").on('click', () => {
    $('html,body').animate({
        scrollTop: $('#third').offset().top
    }, 500)
})
$("#four").on('click', () => {
    $('html,body').animate({
        scrollTop: $('#fouth').offset().top
    }, 500)
})

$("#top").on('click', () => {
    $('html,body').animate({
        scrollTop: $('.overView').offset().top
    }, 500)
})
window.onload = function() {
    var top = document.getElementById('top');
}
window.onscroll = function() {
    if (document.documentElement.scrollTop >= 1600)
        top.getComputedStyle.display = 'block';
    else {
        top.getComputedStyle.display = 'none'
    }
}