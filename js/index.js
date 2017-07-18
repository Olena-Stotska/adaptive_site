var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true
});

$(".btn-menu").click(function() {
  $(".sandwich", this).toggleClass("active");
});

