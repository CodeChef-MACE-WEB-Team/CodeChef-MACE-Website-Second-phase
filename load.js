// var preload = document.getElementById('preloader');
//         function loaded(){
//             preload.style.display = 'none';
//         }
function preloaderFadeOutInit() {
    $('.preloader').fadeOut('slow');
    $('body').attr('id', '');
}
// Window load function
jQuery(window).on('load', function() {
    (function($) {
        preloaderFadeOutInit();
    })(jQuery);
});

function send() {
    alert("Mail sent");
}