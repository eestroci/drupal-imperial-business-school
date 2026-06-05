(function ($) {



  function _initButtonHandlers() {

    $('.on-the-cover-toggle').on('click', function (e) {
      $('#on-the-cover-container').toggle();
      e.preventDefault();
    });
  }

  $(document).ready(function () {
    _initButtonHandlers();
  });
})(jQuery);
