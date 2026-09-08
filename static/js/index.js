

$(document).ready(function () {
    // Hover animation disabled - GIFs play continuously
    // $('.publication-mouse-animate').mouseover(function () {
    //     $(this).find('.animated').css('display', 'inline-block');
    //     $(this).find('.static').css('display', 'none');
    // });
    // $('.publication-mouse-animate').mouseout(function () {
    //     $(this).find('.animated').css('display', 'none');
    //     $(this).find('.static').css('display', 'inline-block');
    // });

    $('.publication-filter-btn').on('click', function () {
        $('.publication-filter-btn').removeClass('is-active');
        $(this).addClass('is-active');

        var filter = $(this).data('filter');
        if (filter === 'all') {
            $('.publication-block').show();
        } else {
            $('.publication-block').hide();
            $('.publication-block[data-category="' + filter + '"]').show();
        }
    });
})
