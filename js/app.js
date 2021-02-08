"use strict";

$(function () {});
"use strict";

$(document).ready(function () {
  $('.white-popup__form-input[name="phone"]').mask('+(000) 00 000-00-00');
});
"use strict";

$('.open-popup-link').magnificPopup({
  type: 'inline',
  midClick: true,
  removalDelay: 300,
  mainClass: 'mfp-fade'
});
"use strict";

$('.question__top').on('click', function () {
  $('.question__item').removeClass('active');
  var parrent = $(this).closest('.question__item');
  $(parrent).addClass('active');
});
"use strict";

var _this = void 0;

$('#callback-form').on('send', function (e) {
  e.preventDefault();
  $.ajax({
    url: 'https://6173.pixwhite.com/wp-admin/admin-ajax.php?action=send_message',
    type: 'POST',
    data: $(_this).serialize(),
    fail: function fail() {
      alert("request failed");
    },
    success: function success() {
      alert('Сообщение отправлено, спасибо !');
      $(this).trigger('reset');
      $.magnificPopup.close();
    }
  });
});
$('#callback-form2').on('send', function (e) {
  e.preventDefault();
  $.ajax({
    url: 'https://6173.pixwhite.com/wp-admin/admin-ajax.php?action=send_message',
    type: 'POST',
    data: $(_this).serialize(),
    fail: function fail() {
      alert("request failed");
    },
    success: function success() {
      alert('Сообщение отправлено, спасибо !');
      $(this).trigger('reset');
      $.magnificPopup.close();
    }
  });
});
"use strict";

$('.slider').owlCarousel({
  dots: false,
  items: 1,
  autoHeight: true,
  nav: true,
  loop: true
});
"use strict";

$('.tabs__top-item').on('click', function () {
  var tab = $(this).attr('data-tab');
  $('.tabs__top-item').removeClass('active');
  $(this).addClass('active');
  $('.tabs__content').removeClass('show');
  $(".tabs__content[data-tab=".concat(tab, "]")).addClass('show');
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm1hc2suanMiLCJwb3B1cC5qcyIsInF1ZXN0aW9ucy5qcyIsInNlbmQtZnJvbS5qcyIsInNsaWRlci5qcyIsInRhYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbiQoZnVuY3Rpb24gKCkge30pOyIsIlwidXNlIHN0cmljdFwiO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICQoJy53aGl0ZS1wb3B1cF9fZm9ybS1pbnB1dFtuYW1lPVwicGhvbmVcIl0nKS5tYXNrKCcrKDAwMCkgMDAgMDAwLTAwLTAwJyk7XG59KTsiLCJcInVzZSBzdHJpY3RcIjtcblxuJCgnLm9wZW4tcG9wdXAtbGluaycpLm1hZ25pZmljUG9wdXAoe1xuICB0eXBlOiAnaW5saW5lJyxcbiAgbWlkQ2xpY2s6IHRydWUsXG4gIHJlbW92YWxEZWxheTogMzAwLFxuICBtYWluQ2xhc3M6ICdtZnAtZmFkZSdcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG4kKCcucXVlc3Rpb25fX3RvcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgJCgnLnF1ZXN0aW9uX19pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICB2YXIgcGFycmVudCA9ICQodGhpcykuY2xvc2VzdCgnLnF1ZXN0aW9uX19pdGVtJyk7XG4gICQocGFycmVudCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfdGhpcyA9IHZvaWQgMDtcblxuJCgnI2NhbGxiYWNrLWZvcm0nKS5vbignc2VuZCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgJC5hamF4KHtcbiAgICB1cmw6ICdodHRwczovLzYxNzMucGl4d2hpdGUuY29tL3dwLWFkbWluL2FkbWluLWFqYXgucGhwP2FjdGlvbj1zZW5kX21lc3NhZ2UnLFxuICAgIHR5cGU6ICdQT1NUJyxcbiAgICBkYXRhOiAkKF90aGlzKS5zZXJpYWxpemUoKSxcbiAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKCkge1xuICAgICAgYWxlcnQoXCJyZXF1ZXN0IGZhaWxlZFwiKTtcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoKSB7XG4gICAgICBhbGVydCgn0KHQvtC+0LHRidC10L3QuNC1INC+0YLQv9GA0LDQstC70LXQvdC+LCDRgdC/0LDRgdC40LHQviAhJyk7XG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ3Jlc2V0Jyk7XG4gICAgICAkLm1hZ25pZmljUG9wdXAuY2xvc2UoKTtcbiAgICB9XG4gIH0pO1xufSk7XG4kKCcjY2FsbGJhY2stZm9ybTInKS5vbignc2VuZCcsIGZ1bmN0aW9uIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgJC5hamF4KHtcbiAgICB1cmw6ICdodHRwczovLzYxNzMucGl4d2hpdGUuY29tL3dwLWFkbWluL2FkbWluLWFqYXgucGhwP2FjdGlvbj1zZW5kX21lc3NhZ2UnLFxuICAgIHR5cGU6ICdQT1NUJyxcbiAgICBkYXRhOiAkKF90aGlzKS5zZXJpYWxpemUoKSxcbiAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKCkge1xuICAgICAgYWxlcnQoXCJyZXF1ZXN0IGZhaWxlZFwiKTtcbiAgICB9LFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoKSB7XG4gICAgICBhbGVydCgn0KHQvtC+0LHRidC10L3QuNC1INC+0YLQv9GA0LDQstC70LXQvdC+LCDRgdC/0LDRgdC40LHQviAhJyk7XG4gICAgICAkKHRoaXMpLnRyaWdnZXIoJ3Jlc2V0Jyk7XG4gICAgICAkLm1hZ25pZmljUG9wdXAuY2xvc2UoKTtcbiAgICB9XG4gIH0pO1xufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbiQoJy5zbGlkZXInKS5vd2xDYXJvdXNlbCh7XG4gIGRvdHM6IGZhbHNlLFxuICBpdGVtczogMSxcbiAgYXV0b0hlaWdodDogdHJ1ZSxcbiAgbmF2OiB0cnVlLFxuICBsb29wOiB0cnVlXG59KTsiLCJcInVzZSBzdHJpY3RcIjtcblxuJCgnLnRhYnNfX3RvcC1pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICB2YXIgdGFiID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRhYicpO1xuICAkKCcudGFic19fdG9wLWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAkKCcudGFic19fY29udGVudCcpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICQoXCIudGFic19fY29udGVudFtkYXRhLXRhYj1cIi5jb25jYXQodGFiLCBcIl1cIikpLmFkZENsYXNzKCdzaG93Jyk7XG59KTsiXX0=
