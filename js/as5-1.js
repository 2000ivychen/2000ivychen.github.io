// jQuery
$(function() {
    const videoElement = $('#video1').get(0);

    if (!videoElement) {
        console.error("Video element not found");
        return;
    }

    let isPlaying = false;
    let playedOnce = false;

    $(window).scroll(function() {
        const currentScrollPosition = $(document).scrollTop();
        const video1Top = $('#v1frame').offset().top;
        const middleSectionTop = $('.middle-section').offset().top;

        if (currentScrollPosition >= video1Top && currentScrollPosition < middleSectionTop) {
            if (!isPlaying) {
                videoElement.play();
                isPlaying = true;
            }
        } else {
            if (isPlaying) {
                videoElement.pause();
                isPlaying = false;

                // 如果已经播放过一次，不再重复播放
                if (!playedOnce) {
                    videoElement.currentTime = 0;
                    playedOnce = true;
                }
            }
        }
    });
    
    // 检测滚动方向并调整播放速度以实现倒带
    let lastScrollPosition = 0;
    $(window).scroll(function() {
        const currentScrollPosition = $(document).scrollTop();
        const scrollDirection = currentScrollPosition > lastScrollPosition ? 1 : -1;
        lastScrollPosition = currentScrollPosition;

        if (isPlaying) {
            // 倒带播放
            videoElement.playbackRate = scrollDirection;
        }
    });
});
// jQuery
$(function() {
    const videoElement = $('#video2').get(0);

    if (!videoElement) {
        console.error("Video element not found");
        return;
    }

    let isPlaying = false;
    let playedOnce = false;

    $(window).scroll(function() {
        const currentScrollPosition = $(document).scrollTop();
        const video2Top = $('#v2frame').offset().top;
        const endingSectionTop = $('.ending-section').offset().top;

        if (currentScrollPosition >= video2Top && currentScrollPosition < endingSectionTop) {
            if (!isPlaying) {
                videoElement.play();
                isPlaying = true;
            }
        } else {
            if (isPlaying) {
                videoElement.pause();
                isPlaying = false;

                // 如果已经播放过一次，不再重复播放
                if (!playedOnce) {
                    videoElement.currentTime = 0;
                    playedOnce = true;
                }
            }
        }
    });
    
    // 检测滚动方向并调整播放速度以实现倒带
    let lastScrollPosition = 0;
    $(window).scroll(function() {
        const currentScrollPosition = $(document).scrollTop();
        const scrollDirection = currentScrollPosition > lastScrollPosition ? 1 : -1;
        lastScrollPosition = currentScrollPosition;

        if (isPlaying) {
            // 倒带播放
            videoElement.playbackRate = scrollDirection;
        }
    });
});