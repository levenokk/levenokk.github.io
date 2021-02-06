"use strict";

$(function () {});
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInF1ZXN0aW9ucy5qcyIsInRhYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbiQoZnVuY3Rpb24gKCkge30pOyIsIlwidXNlIHN0cmljdFwiO1xuXG4kKCcucXVlc3Rpb25fX3RvcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgJCgnLnF1ZXN0aW9uX19pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICB2YXIgcGFycmVudCA9ICQodGhpcykuY2xvc2VzdCgnLnF1ZXN0aW9uX19pdGVtJyk7XG4gICQocGFycmVudCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbiQoJy50YWJzX190b3AtaXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRhYiA9ICQodGhpcykuYXR0cignZGF0YS10YWInKTtcbiAgJCgnLnRhYnNfX3RvcC1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgJCgnLnRhYnNfX2NvbnRlbnQnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAkKFwiLnRhYnNfX2NvbnRlbnRbZGF0YS10YWI9XCIuY29uY2F0KHRhYiwgXCJdXCIpKS5hZGRDbGFzcygnc2hvdycpO1xufSk7Il19
