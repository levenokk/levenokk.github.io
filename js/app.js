"use strict";
"use strict";

var accordions = document.querySelectorAll('.item-faq__accordion');
accordions.forEach(function (e) {
  var accordionTop = e.querySelector('.item-faq__accordion-top');
  accordionTop.addEventListener('click', function () {
    e.classList.toggle('open');
  });
});
"use strict";
"use strict";

var btn = document.querySelector('.header__mobile-button');
var closeBtn = document.querySelector('.mobile-menu__close');
var toggleMenu = function toggleMenu() {
  var mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.classList.toggle('open');
};
btn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
"use strict";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
var arrowUp = document.querySelector('#arrow');
arrowUp.addEventListener('click', function () {
  scrollToTop();
});
"use strict";