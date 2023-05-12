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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImFjY29yZGlvbi5qcyIsIm1haW4uanMiLCJtb2JpbGVCdG4uanMiLCJzY3JvbGxUb3AuanMiLCJ0ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgYWNjb3JkaW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtLWZhcV9fYWNjb3JkaW9uJyk7XG5hY2NvcmRpb25zLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgdmFyIGFjY29yZGlvblRvcCA9IGUucXVlcnlTZWxlY3RvcignLml0ZW0tZmFxX19hY2NvcmRpb24tdG9wJyk7XG4gIGFjY29yZGlvblRvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBlLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbiAgfSk7XG59KTsiLCJcInVzZSBzdHJpY3RcIjsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21vYmlsZS1idXR0b24nKTtcbnZhciBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtbWVudV9fY2xvc2UnKTtcbnZhciB0b2dnbGVNZW51ID0gZnVuY3Rpb24gdG9nZ2xlTWVudSgpIHtcbiAgdmFyIG1vYmlsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLW1lbnUnKTtcbiAgbW9iaWxlTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG59O1xuYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTWVudSk7XG5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU1lbnUpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBzY3JvbGxUb1RvcCgpIHtcbiAgd2luZG93LnNjcm9sbFRvKHtcbiAgICB0b3A6IDAsXG4gICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gIH0pO1xufVxudmFyIGFycm93VXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXJyb3cnKTtcbmFycm93VXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIHNjcm9sbFRvVG9wKCk7XG59KTsiLCJcInVzZSBzdHJpY3RcIjsiXX0=
