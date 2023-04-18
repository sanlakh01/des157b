(function(){
    const fs = document.querySelector(".fa-expand");
    const myVideo = document.getElementById("myVid");
    let doneResizing;

    //preloader animations
    window.addEventListener('load', function () {

		const preloader = document.getElementById('preloader');
		preloader.className = 'fadeout';

		preloader.addEventListener('animationend', function () {
			preloader.style.display = "none";
		});

        //randomly plays the video with/without a grayscale
        let rand = Math.round(Math.random());

        if(rand){
            myVideo.className = "grey";
            rand = 0;
        }
        else{
            myVideo.removeAttribute("class");
            rand = 1;
        }

        //click interaction to change the video filters
        window.addEventListener("click", function(){
            if(rand){
                myVideo.className = "grey";
                rand = 0;
            }
            else{
                myVideo.removeAttribute("class");
                rand = 1;
            }
        });

        //to have the text appear and disappear
        let counter = 0;
        const lineIds = ['one', 'two', 'three', 'four'];
        function fadeInLine(counter){
            document.querySelector(`#${lineIds[counter]}`).className = 'appear';
            setTimeout(function(){
                document.querySelector(`#${lineIds[counter]}`).className = 'fadeout';
                if(counter < lineIds.length-1){
                    counter++;
                } else {
                    counter = 0;
                }
                fadeInLine(counter);
            }, 3000);
        }

        fadeInLine(counter);

        //to enter and exit fullscreen
        fs.addEventListener("click", function(){
            if(!document.fullscreenElement){
                document.documentElement.requestFullscreen();
            }
            else{
                document.exitFullscreen();
            }
        });

        //window resizing - to work in mobile view as well
        window.addEventListener('resize', function () {
            clearTimeout(doneResizing);
            doneResizing = setTimeout(function () {
                const width = window.innerWidth;
                console.log(innerWidth);
                loadMobile(width);
            }, 500);
        });

        function loadMobile(width){
            if(width <= 900){
                const firstVid = document.querySelector("#myVid source:first-of-type");
                firstVid.setAttribute("src", "media/lantern_mobile.webm");
                firstVid.setAttribute("type", "video/webm");
                myVideo.load();
                myVideo.play();
            }
        }

    });
    
})();