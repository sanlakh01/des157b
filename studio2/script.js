(function(){

    "use strict";
    const info = document.querySelector("#info");
    const box = document.querySelector("#box");
    let globalData;
    let numDataPoints;
    async function getData(){
        const looks = await fetch("data.json");
        const data = await looks.json();
        // Gets the keys and puts them in an array
        const dataPoints = Object.keys(data);
        // Gets the values and puts them in the globalData array
        globalData = Object.values(data);
        // Gets the number of entries in the JSON file
        numDataPoints = dataPoints.length;
        console.log(globalData, numDataPoints);
    }

    //function to open information box
    info.addEventListener("click", function(event){
        event.preventDefault();
        box.className = "show";
    });

    //function to open information box
    document.addEventListener("keydown", function(event){
        const key = event.key;
        if(key === "Escape"){
            box.className = "hide";
        }
    });

    //content to appear on screen based on user information, and change bg colors
    function lookInfo(point, data){
        const bgColors = [
            "radial-gradient(circle, rgba(200,190,209,1) 0%, rgba(71,54,48,1) 100%)",
            "#d9c5b5",
            "radial-gradient(circle, rgba(217,197,181,1) 0%, rgba(209,94,122,1) 100%)",
            "radial-gradient(circle, rgba(203,184,36,1) 0%, rgba(156,157,109,1) 50%, rgba(214,91,103,1) 100%)",
            "radial-gradient(circle, rgba(56,159,214,1) 0%, rgba(56,159,214,1) 58%, rgba(17,17,17,1) 100%)",
            "#BBC0E2",
            "#B2E0D7",
            "#BBCE5E"
        ];
        const body = document.querySelector("body");
        let content = document.querySelector("main");
        if(data[point].brand2!= "undefined"){
            content.innerHTML = `<h2>On ${data[point].day}, I wore ${data[point].shade1} in ${data[point].type1} from ${data[point].brand1} and ${data[point].shade2} in ${data[point].type2} from ${data[point].brand2}.</h2>`; 
        }
        else{
            content.innerHTML = `<h2>On ${data[point].day}, I wore ${data[point].shade1} in ${data[point].type1} from ${data[point].brand1}.</h2>`;  
        }
        body.style.background = `${bgColors[point]}`;
        console.log(point);
    }

    // event listener for when the mouse moves
    document.addEventListener("mousemove", reportPos);

    let prevLoc = 0;

    function reportPos(event) {
        const windowSize = window.innerWidth;
        //The window needs to be divided into sections for each time in the JSON data
        const timeSection = windowSize / numDataPoints;
        const xPos = event.clientX;
        // changeTime will be a number from 0-16
        const changeTime = Math.floor(xPos / timeSection);

        // When you move the mouse into the next segment, change the interface.
        if (changeTime !== prevLoc) {
            //console.log(changeTime);
            lookInfo(changeTime, globalData);
            prevLoc = changeTime;
        }

    }

    getData();

})();