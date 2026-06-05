jQuery(document).ready(function($) {
    // Loop through all the intentclicks tags and request their content
    $('.ta-intentclicks-section-config').each(function() {
        // Get data from shortcode output
        let attr = $(this).data('intentclicks-attributes');
        let content = $(this).data('intentclicks-content');
        let postid = $(this).data('intentclicks-postid');
        
        // Make AJAX request to get rendered layout
        $.ajax({
            url: intentclicks_ajax.url,
            type: 'POST',
            data: {
                'action': 'intentclicks_build_layout',
                'attr': JSON.stringify(attr),
                'content': JSON.stringify(content),
                'referrer': document.referrer,
                'postid': parseInt(postid)
            },
            success: (response) => {
                // Replace the placeholder with the result returned from AJAX
                $(this).replaceWith('<!-- ICP Plugin: loaded with ajax -->\n' + response);
            },
            error: (request, status, error) => {
                // Insert an error message in the placeholder, leaving the config attributes intact for review
                $(this).html('<!-- ICP Plugin: ajax request failed -->');
            }
        });
    });
    
    // Add referrer to intentclicks links
    let icpReferrer = document.referrer.length > 0 ? document.referrer : 0;
    $('.icp-list-item a, .lp-product a').attr('href', function(i, urlStr) {
        // check if referrer is not already in url, and url has existing query params
        if(urlStr.indexOf('&referrer') === -1 && urlStr.indexOf('?') !== -1) {
            urlStr += '&referrer=' + encodeURIComponent(icpReferrer);
        }
        return urlStr;
    });

    // Open modal on button press
    $(document).on('click', '.icp-list-cta .cta-action-btn', function(e) {
        e.preventDefault();
        let target = $(this).data('modal');

        $(target).toggleClass('open');
    });

    // Close modal on close button or overlay click
    $(document).on('click', '.icp-list-modal > .icp-overlay, .icp-list-modal .modal-close', function(e) {
        e.preventDefault();

        $(this).closest('.icp-list-modal').toggleClass('open');
    });

    // PST Layout
    document.getElementById('ta-disclaimer-jump')?.addEventListener('click', function(e) {
        e.preventDefault();    
        $('html, body').animate({
            scrollTop: $("#ta-disclaimer").offset().top - 80
        }, 'slow');
    });

});