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
  autoplay: true
});
"use strict";

$('.tabs__top-item').on('click', function () {
  var tab = $(this).attr('data-tab');
  $('.tabs__top-item').removeClass('active');
  $(this).addClass('active');
  $('.tabs__content').removeClass('show');
  $(".tabs__content[data-tab=".concat(tab, "]")).addClass('show');
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm1hc2suanMiLCJwb3B1cC5qcyIsInF1ZXN0aW9ucy5qcyIsInNlbmQtZnJvbS5qcyIsInNsaWRlci5qcyIsInRhYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuJChmdW5jdGlvbiAoKSB7fSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgJCgnLndoaXRlLXBvcHVwX19mb3JtLWlucHV0W25hbWU9XCJwaG9uZVwiXScpLm1hc2soJysoMDAwKSAwMCAwMDAtMDAtMDAnKTtcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG4kKCcub3Blbi1wb3B1cC1saW5rJykubWFnbmlmaWNQb3B1cCh7XG4gIHR5cGU6ICdpbmxpbmUnLFxuICBtaWRDbGljazogdHJ1ZSxcbiAgcmVtb3ZhbERlbGF5OiAzMDAsXG4gIG1haW5DbGFzczogJ21mcC1mYWRlJ1xufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbiQoJy5xdWVzdGlvbl9fdG9wJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAkKCcucXVlc3Rpb25fX2l0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gIHZhciBwYXJyZW50ID0gJCh0aGlzKS5jbG9zZXN0KCcucXVlc3Rpb25fX2l0ZW0nKTtcbiAgJChwYXJyZW50KS5hZGRDbGFzcygnYWN0aXZlJyk7XG59KTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF90aGlzID0gdm9pZCAwO1xuXG4kKCcjY2FsbGJhY2stZm9ybScpLm9uKCdzZW5kJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAkLmFqYXgoe1xuICAgIHVybDogJ2h0dHBzOi8vNjE3My5waXh3aGl0ZS5jb20vd3AtYWRtaW4vYWRtaW4tYWpheC5waHA/YWN0aW9uPXNlbmRfbWVzc2FnZScsXG4gICAgdHlwZTogJ1BPU1QnLFxuICAgIGRhdGE6ICQoX3RoaXMpLnNlcmlhbGl6ZSgpLFxuICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoKSB7XG4gICAgICBhbGVydChcInJlcXVlc3QgZmFpbGVkXCIpO1xuICAgIH0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcygpIHtcbiAgICAgIGFsZXJ0KCfQodC+0L7QsdGJ0LXQvdC40LUg0L7RgtC/0YDQsNCy0LvQtdC90L4sINGB0L/QsNGB0LjQsdC+ICEnKTtcbiAgICAgICQodGhpcykudHJpZ2dlcigncmVzZXQnKTtcbiAgICAgICQubWFnbmlmaWNQb3B1cC5jbG9zZSgpO1xuICAgIH1cbiAgfSk7XG59KTtcbiQoJyNjYWxsYmFjay1mb3JtMicpLm9uKCdzZW5kJywgZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAkLmFqYXgoe1xuICAgIHVybDogJ2h0dHBzOi8vNjE3My5waXh3aGl0ZS5jb20vd3AtYWRtaW4vYWRtaW4tYWpheC5waHA/YWN0aW9uPXNlbmRfbWVzc2FnZScsXG4gICAgdHlwZTogJ1BPU1QnLFxuICAgIGRhdGE6ICQoX3RoaXMpLnNlcmlhbGl6ZSgpLFxuICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoKSB7XG4gICAgICBhbGVydChcInJlcXVlc3QgZmFpbGVkXCIpO1xuICAgIH0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcygpIHtcbiAgICAgIGFsZXJ0KCfQodC+0L7QsdGJ0LXQvdC40LUg0L7RgtC/0YDQsNCy0LvQtdC90L4sINGB0L/QsNGB0LjQsdC+ICEnKTtcbiAgICAgICQodGhpcykudHJpZ2dlcigncmVzZXQnKTtcbiAgICAgICQubWFnbmlmaWNQb3B1cC5jbG9zZSgpO1xuICAgIH1cbiAgfSk7XG59KTsiLCJcInVzZSBzdHJpY3RcIjtcblxuJCgnLnNsaWRlcicpLm93bENhcm91c2VsKHtcbiAgbG9vcDogdHJ1ZSxcbiAgaXRlbXM6IDEsXG4gIGF1dG9wbGF5OiB0cnVlXG59KTsiLCJcInVzZSBzdHJpY3RcIjtcblxuJCgnLnRhYnNfX3RvcC1pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICB2YXIgdGFiID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRhYicpO1xuICAkKCcudGFic19fdG9wLWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAkKCcudGFic19fY29udGVudCcpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICQoXCIudGFic19fY29udGVudFtkYXRhLXRhYj1cIi5jb25jYXQodGFiLCBcIl1cIikpLmFkZENsYXNzKCdzaG93Jyk7XG59KTsiXX0=
