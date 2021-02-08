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
  loop: true,
  items: 1,
  autoplay: true,
  autoHeight: true
});
"use strict";

$('.tabs__top-item').on('click', function () {
  var tab = $(this).attr('data-tab');
  $('.tabs__top-item').removeClass('active');
  $(this).addClass('active');
  $('.tabs__content').removeClass('show');
  $(".tabs__content[data-tab=".concat(tab, "]")).addClass('show');
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm1hc2suanMiLCJwb3B1cC5qcyIsInF1ZXN0aW9ucy5qcyIsInNlbmQtZnJvbS5qcyIsInNsaWRlci5qcyIsInRhYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4kKGZ1bmN0aW9uICgpIHt9KTsiLCJcInVzZSBzdHJpY3RcIjtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAkKCcud2hpdGUtcG9wdXBfX2Zvcm0taW5wdXRbbmFtZT1cInBob25lXCJdJykubWFzaygnKygwMDApIDAwIDAwMC0wMC0wMCcpO1xufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbiQoJy5vcGVuLXBvcHVwLWxpbmsnKS5tYWduaWZpY1BvcHVwKHtcbiAgdHlwZTogJ2lubGluZScsXG4gIG1pZENsaWNrOiB0cnVlLFxuICByZW1vdmFsRGVsYXk6IDMwMCxcbiAgbWFpbkNsYXNzOiAnbWZwLWZhZGUnXG59KTsiLCJcInVzZSBzdHJpY3RcIjtcblxuJCgnLnF1ZXN0aW9uX190b3AnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICQoJy5xdWVzdGlvbl9faXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgdmFyIHBhcnJlbnQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5xdWVzdGlvbl9faXRlbScpO1xuICAkKHBhcnJlbnQpLmFkZENsYXNzKCdhY3RpdmUnKTtcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX3RoaXMgPSB2b2lkIDA7XG5cbiQoJyNjYWxsYmFjay1mb3JtJykub24oJ3NlbmQnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICQuYWpheCh7XG4gICAgdXJsOiAnaHR0cHM6Ly82MTczLnBpeHdoaXRlLmNvbS93cC1hZG1pbi9hZG1pbi1hamF4LnBocD9hY3Rpb249c2VuZF9tZXNzYWdlJyxcbiAgICB0eXBlOiAnUE9TVCcsXG4gICAgZGF0YTogJChfdGhpcykuc2VyaWFsaXplKCksXG4gICAgZmFpbDogZnVuY3Rpb24gZmFpbCgpIHtcbiAgICAgIGFsZXJ0KFwicmVxdWVzdCBmYWlsZWRcIik7XG4gICAgfSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKCkge1xuICAgICAgYWxlcnQoJ9Ch0L7QvtCx0YnQtdC90LjQtSDQvtGC0L/RgNCw0LLQu9C10L3Qviwg0YHQv9Cw0YHQuNCx0L4gIScpO1xuICAgICAgJCh0aGlzKS50cmlnZ2VyKCdyZXNldCcpO1xuICAgICAgJC5tYWduaWZpY1BvcHVwLmNsb3NlKCk7XG4gICAgfVxuICB9KTtcbn0pO1xuJCgnI2NhbGxiYWNrLWZvcm0yJykub24oJ3NlbmQnLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICQuYWpheCh7XG4gICAgdXJsOiAnaHR0cHM6Ly82MTczLnBpeHdoaXRlLmNvbS93cC1hZG1pbi9hZG1pbi1hamF4LnBocD9hY3Rpb249c2VuZF9tZXNzYWdlJyxcbiAgICB0eXBlOiAnUE9TVCcsXG4gICAgZGF0YTogJChfdGhpcykuc2VyaWFsaXplKCksXG4gICAgZmFpbDogZnVuY3Rpb24gZmFpbCgpIHtcbiAgICAgIGFsZXJ0KFwicmVxdWVzdCBmYWlsZWRcIik7XG4gICAgfSxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKCkge1xuICAgICAgYWxlcnQoJ9Ch0L7QvtCx0YnQtdC90LjQtSDQvtGC0L/RgNCw0LLQu9C10L3Qviwg0YHQv9Cw0YHQuNCx0L4gIScpO1xuICAgICAgJCh0aGlzKS50cmlnZ2VyKCdyZXNldCcpO1xuICAgICAgJC5tYWduaWZpY1BvcHVwLmNsb3NlKCk7XG4gICAgfVxuICB9KTtcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG4kKCcuc2xpZGVyJykub3dsQ2Fyb3VzZWwoe1xuICBsb29wOiB0cnVlLFxuICBpdGVtczogMSxcbiAgYXV0b3BsYXk6IHRydWUsXG4gIGF1dG9IZWlnaHQ6IHRydWVcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG4kKCcudGFic19fdG9wLWl0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIHZhciB0YWIgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdGFiJyk7XG4gICQoJy50YWJzX190b3AtaXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICQoJy50YWJzX19jb250ZW50JykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgJChcIi50YWJzX19jb250ZW50W2RhdGEtdGFiPVwiLmNvbmNhdCh0YWIsIFwiXVwiKSkuYWRkQ2xhc3MoJ3Nob3cnKTtcbn0pOyJdfQ==
