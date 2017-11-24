"use strict";

$(".scott").animateSprite({
    fps: 10,
    animations: {
        walkRight: [0, 1, 2, 3, 4, 5, 6, 7]

    },
    loop: true
});

$('.slideItem').animate({ right: 300 }, 30000);
$('.slideItem').animate({ left: 1100 }, 30000);
