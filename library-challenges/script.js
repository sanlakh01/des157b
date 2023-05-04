(function(){
    'use strict';

    var map = L.map('map').setView([24.465307, 54.377342], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    var marker = L.marker([24.445062, 54.409978]).addTo(map);
    marker.bindPopup("<p>This is where I went to school most of my life. I spent 7 years here, and I am so happy that I graduated.</p>").openPopup();

    var polygon = L.polygon([
        [24.496246, 54.368318],
        [24.497034, 54.369533],
        [24.496087, 54.370317], 
        [24.495196, 54.369085]
    ]).addTo(map);
    polygon.bindPopup("<p>This is my neighborhood! It's a sleepy neighborhood, and not much has changed (apart from stores coming and going) since I moved to Davis in 2019. </p>");

    var marker1 = L.marker([24.499059, 54.362267]).addTo(map);
    marker1.bindPopup("<p>A short 20-minute walk away, this is where I liked to hang out on a stressful or hot days. Listening to the ocean and enjoying the gentle ocean breeze was a balm on my soul.</p>").openPopup();

}());