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
        const intervalID = setInterval(CheckTime, 1000);
            function CheckTime(){
                //first line "in the rain..."
                if(1 < myVideo.currentTime && myVideo.currentTime < 5){
                    document.getElementById("one").className = "appear showing";
                }
                else{
                    document.getElementById("one").className = "fadeout hidden";
                }
                //second line "...everything is slow..."
                if(4 < myVideo.currentTime && myVideo.currentTime < 11){
                    document.getElementById("two").className = "appear showing";
                }
                else{
                    document.getElementById("two").className = "fadeout hidden";
                }
                //third line "...slow..."
                if(9 < myVideo.currentTime && myVideo.currentTime < 18){
                    document.getElementById("three").className = "appear showing";   
                }
                else{
                    document.getElementById("three").className = "fadeout hidden";
                }
                //fourth line "...slow."
                if(15 < myVideo.currentTime && myVideo.currentTime < 25){
                    document.getElementById("four").className = "appear showing";  
                }
                else{
                    document.getElementById("four").className = "fadeout hidden";
                }
            }

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