(function(){
    const fs = document.querySelector(".fa-expand");
    const sec = document.getElementById("sec");
    const text = document.getElementById("text");
    const image = document.querySelector("img");
    const myVideo = document.getElementById("myVid");
    
    const intervalID = setInterval(CheckTime, 1000);
    function CheckTime(){
        console.log(myVideo.C);
        if(1 < myVideo.currentTime && myVideo.currentTime < 3){
            text.className = "showing";
            console.log("working text");
        }
        else{
            text.className = "hidden";
        }

        if(5 < myVideo.currentTime && myVideo.currentTime < 7){
            image.className = "showing";
            console.log("working image");
        }
        else{
            image.className = "hidden";
        }
    }

    fs.addEventListener("click", function(){
        if(!document.fullscreenElement){
            document.documentElement.requestFullscreen();
        }
        else{
            document.exitFullscreen();
        }
    });
})();