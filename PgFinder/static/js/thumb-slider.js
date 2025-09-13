// Product image slider logic: hover preview, click to freeze
const mainImg = document.getElementById('mainProductImg');
const thumbs = document.querySelectorAll('.fk-thumb-img');
let frozenImg = mainImg.src;
thumbs.forEach(thumb => {
  thumb.addEventListener('mouseenter', function() {
    mainImg.src = this.getAttribute('data-large');
  });
  thumb.addEventListener('mouseleave', function() {
    mainImg.src = frozenImg;
  });
  thumb.addEventListener('click', function() {
    frozenImg = this.getAttribute('data-large');
    mainImg.src = frozenImg;
  });
});