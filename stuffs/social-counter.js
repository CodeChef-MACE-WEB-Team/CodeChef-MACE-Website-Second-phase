$.fn.jQuerySimpleCounter = function(options) {
    var settings = $.extend({
        start: -2500,
        end: 1000,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options);

    var thisElement = $(this);

    $({ count: settings.start }).animate({ count: settings.end }, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            if (mathCount > 0)
                thisElement.text(mathCount + '+');

        },
        complete: settings.complete
    });
};


$('#number1').jQuerySimpleCounter({ end: 1300, duration: 10000 });