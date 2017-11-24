'use strict';

$('.header').click(function () {
    const $this = $(this);
    $this.closest(".whole").find(".content").slideToggle();
});

