(function( $ ) {
    $(document).ready(function() {

        $(".ceml-language-switcher .current-language").on("click", function () {
            const $switcher = $(this).closest(".ceml-language-switcher");
            $switcher.toggleClass("open"); // Toggle the "open" class
        });

	});
})( jQuery );