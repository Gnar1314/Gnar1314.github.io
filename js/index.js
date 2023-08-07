/**
 * 滚动到指定位置导航固定
 */
$(function() {
    $("#index-container").scroll(function() {
        var wt = $(this).scrollTop();
        if (wt > 500) {
            $(".navs-container").addClass('fixed');
        } else {
            $(".navs-container").removeClass('fixed');
        }
    })
})
window.onload = function() {
    $("#slider").sliderImg({
        imgs: ["./images/1.jpg", "./images/2.jpg"],
    });
}