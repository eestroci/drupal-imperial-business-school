$(document).ready(function () {
    $(".article-content").on("click", ".j-audio-trigger", function (e) {
        var audioTitle = $(this).attr("title") || "Unknown Title";
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "narrated_article_play",
            audio_title: audioTitle
        });
        if (!window.hasTeaser) {
            // No teaser: show modal immediately
            showNarrationModal();
            e.preventDefault();
            return false;
        } else {
            // Teaser: play audio as normal, but never loop.
            var audio = document.getElementById("narration");
            if (audio) {
                audio.loop = false;
                audio.removeAttribute("loop");
                audio.currentTime = 0;
                audio.play();
            }
        }
    });

    if (window.hasTeaser) {
        var audio = document.getElementById("narration");
        if (audio) {
            // Ensure teaser never loops and update custom player loop button state.
            audio.loop = false;
            audio.removeAttribute("loop");

            var loopButton = document.querySelector(".audio-player__loop");
            if (loopButton) {
                loopButton.classList.add("audio-player__loop--disabled");
            }

            audio.addEventListener("ended", function () {
                showNarrationModal();
            });
        }
    }

    function showNarrationModal() {
        tp = window.tp || [];
        tp.push(["init", function() {
        tp.template.show({
            templateId: 'OT5EUUOWFWTA',
            displayMode: 'modal',
        });
        }]);
    }
});