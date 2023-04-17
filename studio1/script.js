(function(){
    const fs = document.querySelector(".fa-expand");
    const myVideo = document.getElementById("myVid");

    //preloader animations
    window.addEventListener('load', function () {

		const preloader = document.getElementById('preloader');
		preloader.className = 'fadeout';

		preloader.addEventListener('animationend', function () {
			preloader.style.display = "none";
		});

    });

    //randomly plays the video with/without a grayscale
    const rand = Math.round(Math.random());
    vidFilter(rand);

    //click interaction to change the video filters
    window.addEventListener("click", function(){
        const rand = Math.round(Math.random());
        vidFilter(rand);
    });

    //change the filters!
    function vidFilter(rand){ 
        if(rand){
            //add greyscale filter
            myVideo.className = "grey";
        }
        else{
            myVideo.removeAttribute("class");
        }
    }

    //to have the text appear and disappear
    const intervalID = setInterval(CheckTime, 1000);
            function CheckTime(){
                console.log(myVideo.C);
                //first line "in the rain..."
                if(1 < myVideo.currentTime && myVideo.currentTime < 5){
                    document.getElementById("one").className = "appear showing";
                    console.log(document.getElementById("one"));
                }
                else{
                    document.getElementById("one").className = "fadeout hidden";
                }
                //second line "...everything is slow..."
                if(4 < myVideo.currentTime && myVideo.currentTime < 11){
                    document.getElementById("two").className = "appear showing";
                    console.log(document.getElementById("two"));
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
})();