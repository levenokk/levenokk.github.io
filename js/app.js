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

var prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', function () {
  var currentScrollPos = window.scrollY;
  if (window.scrollY > 200) {
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").classList.remove('hide');
    } else {
      document.getElementById("header").classList.add('hide');
    }
    prevScrollpos = currentScrollPos;
  } else {
    document.getElementById("header").classList.remove('hide');
  }
});
"use strict";
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
window.addEventListener('scroll', function () {
  if (window.scrollY > 200) {
    arrowUp.classList.add('show');
  } else {
    arrowUp.classList.remove('show');
  }
});
"use strict";