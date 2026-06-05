piano_paywall_endpoint = {
    get_data: function (cardParams) {
        piano_paywall_endpoint_data.cardParams = cardParams;
        var addthis = window.addthis || false;
        jQuery.ajax({
            type: "post",
            dataType: "html",
            url: piano_paywall_endpoint_data.ajax_url,
            data: piano_paywall_endpoint_data,
            success: function (msg) {
                if (msg.length > 20) {
                    jQuery("body").removeClass('is-paywall');
                    jQuery("#article-content").html(msg);


                    // Refresh addthis for the article template
                    if (addthis) {
                        addthis.toolbox('.article-options__share-options');
                    }

                    AOS.init();
                    

                    if (window.cc_confirm || false) {
                        tp.template.show({
                            templateId: 'OT0QEPLJ58VI',
                            displayMode: "inline",
                            containerSelector: "#piano-ribbon",
                        });
                    }
                    // Refresh Toggle callout
                    jQuery(".callout-toggle").hide().parent().append('<span class="callout-more">Read more</span>');

                    jQuery(".callout-highlight > div").each(function () {
                        var $this = jQuery(this);
                        var $parent = $this.parent();
                        var call_length = $this.children().length;
                        $this.siblings().remove();
                        $this.replaceWith(jQuery('<aside class="l-content-wrap"><article>' + this.innerHTML + '</article></aside>'));
                        $this = $parent.find('.l-content-wrap article');
                        if (call_length > 2) {
                            $this.children().not(':eq(0), :eq(1)').addClass('callout-toggle').hide();
                            $this.append('<span class="callout-more">Read more</span>');
                        }
                    });


                    // Reload first ad on desktop
                    var desktopMapping = googletag.sizeMapping().addSize([0, 0], []).addSize([801, 200], [300, 250]).build();
                    jQuery('#div-gpt-ad-1582853918972-0').attr("id", "div-gpt-ad-1582853918972-0b");
                    googletag.cmd.push(function () {
                        googletag.defineSlot('/21804951364/DFP_TITLE_pos2_300x250', [300, 250], 'div-gpt-ad-1582853918972-0b').defineSizeMapping(desktopMapping).addService(googletag.pubads());
                        googletag.display('div-gpt-ad-1582853918972-0b');
                    });


                    // Reload first ad on mobile
                    var mobileMapping = googletag.sizeMapping().addSize([0, 0], []).addSize([300, 200], [300, 250]).addSize([801, 200], []).build();
                    jQuery('#div-gpt-ad-1582855116148-0').attr("id", "div-gpt-ad-1582855116148-0b");
                    googletag.cmd.push(function () {
                        googletag.defineSlot('/21804951364/DFP_Mobile_pos2_300x250', [300, 250], 'div-gpt-ad-1582855116148-0b').defineSizeMapping(mobileMapping).addService(googletag.pubads());
                        googletag.display('div-gpt-ad-1582855116148-0b');
                    });


                    // Fix ad classes for Microsite on mobile
                    if ($(".microsite__chapter").length) {
                        $(".article-ad").addClass("callout ad w-300").removeClass("ad-300").removeClass("article-ad");
                    }
                    ;


                    // Refresh Microsite Carrousel
                    $('.cycle-slideshow').cycle();

                    $('.cycle-carousel').each(function () {
                        var $carousel = $(this),
                            $gallery = $carousel.prev(),
                            index = 0;
                        $carousel.find('img').each(function (i, v) {
                            $(v).attr('src', $gallery.children().eq(i + 2).attr('data-thumb'));
                        });
                        $carousel.cycle({containerResize: 0, fit: 1});
                        $gallery
                            .on('cycle-next cycle-prev', function (e, opts) {
                                $carousel
                                    .cycle('goto', opts.currSlide);
                                index = opts.currSlide;
                            });
                        $carousel
                            .on('click', '.cycle-slide', function (e) {
                                e.preventDefault();
                                e.stopPropagation();
                                index = $carousel.data('cycle.API').getSlideIndex(this);
                                $carousel
                                    .cycle('goto', index);
                                $gallery
                                    .cycle('goto', index);
                            });
                    });


                    // Refresh scroll effects on Microsite template
                    //skrollr.init().refresh();



                    // Refresh Queryly
                    queryly.init(
                        '9a40f60b2f074862',
                        document.querySelectorAll('header,article,footer, .no-mobile--ad, section'), {
                            uiversion: 1,
                            pageservice: true
                        });
                }
            }
        });
    }
}