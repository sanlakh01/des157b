(function(){

    "use strict";
    AOS.init();

    var granimInstance = new Granim({
        element: '#canvas-header',
        direction: 'top-bottom',
        isPausedWhenNotInView: true,
        stateTransitionSpeed: 8000,
        states : {
            "default-state": {
                gradients: [
                    ['#ff9966', '#ff5e62'],
                    ["#ff5e62", "#ff9966"]
                ]
            }
        }
    });

    var granimInstance = new Granim({
        element: '#canvas-magic',
        direction: 'top-bottom',
        isPausedWhenNotInView: true,
        stateTransitionSpeed: 8000,
        states : {
            "default-state": {
                gradients: [
                    ['#030C13', '#18242E'],
                    ["#18242E", "#030C13"]
                ]
            }
        }
    });

    var granimInstance = new Granim({
        element: '#canvas-empress',
        direction: 'top-bottom',
        isPausedWhenNotInView: true,
        stateTransitionSpeed: 8000,
        states : {
            "default-state": {
                gradients: [
                    ['#151C48', '#F0DDD9'],
                    ["#F0DDD9", "#151C48"]
                ]
            }
        }
    });

    var granimInstance = new Granim({
        element: '#canvas-emperor',
        direction: 'top-bottom',
        isPausedWhenNotInView: true,
        stateTransitionSpeed: 8000,
        states : {
            "default-state": {
                gradients: [
                    ['#7691A4', '#D2C9BA'],
                    ["#D2C9BA", "#7691A4"]
                ]
            }
        }
    });

})();