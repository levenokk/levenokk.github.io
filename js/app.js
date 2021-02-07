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

$('.tabs__top-item').on('click', function () {
  var tab = $(this).attr('data-tab');
  $('.tabs__top-item').removeClass('active');
  $(this).addClass('active');
  $('.tabs__content').removeClass('show');
  $(".tabs__content[data-tab=".concat(tab, "]")).addClass('show');
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm1hc2suanMiLCJwb3B1cC5qcyIsInF1ZXN0aW9ucy5qcyIsInRhYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuJChmdW5jdGlvbiAoKSB7fSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgJCgnLndoaXRlLXBvcHVwX19mb3JtLWlucHV0W25hbWU9XCJwaG9uZVwiXScpLm1hc2soJysoMDAwKSAwMCAwMDAtMDAtMDAnKTtcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG4kKCcub3Blbi1wb3B1cC1saW5rJykubWFnbmlmaWNQb3B1cCh7XG4gIHR5cGU6ICdpbmxpbmUnLFxuICBtaWRDbGljazogdHJ1ZSxcbiAgcmVtb3ZhbERlbGF5OiAzMDAsXG4gIG1haW5DbGFzczogJ21mcC1mYWRlJ1xufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbiQoJy5xdWVzdGlvbl9fdG9wJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAkKCcucXVlc3Rpb25fX2l0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gIHZhciBwYXJyZW50ID0gJCh0aGlzKS5jbG9zZXN0KCcucXVlc3Rpb25fX2l0ZW0nKTtcbiAgJChwYXJyZW50KS5hZGRDbGFzcygnYWN0aXZlJyk7XG59KTsiLCJcInVzZSBzdHJpY3RcIjtcblxuJCgnLnRhYnNfX3RvcC1pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICB2YXIgdGFiID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRhYicpO1xuICAkKCcudGFic19fdG9wLWl0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAkKCcudGFic19fY29udGVudCcpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICQoXCIudGFic19fY29udGVudFtkYXRhLXRhYj1cIi5jb25jYXQodGFiLCBcIl1cIikpLmFkZENsYXNzKCdzaG93Jyk7XG59KTsiXX0=
