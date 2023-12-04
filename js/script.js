// made by Erik Anmann & ChatGPT

function button(pageName){  // funktsioon button mis võtab sisendiks teise lehe
    window.location.href = pageName // brauser navigeerib sisendis olevale lehele
}

document.addEventListener("DOMContentLoaded", function() { // DOMContentLoaded garanteerib selle, et funktsioon laheks tööle alles siis kui html on täiesti ära laadinud ennast
    var infoBox = document.getElementById("info-box"); // infoboxi konteineri loomine
    var infoText = document.getElementById("info-text"); // teksti loomine infobox
    var locationMarkers = document.querySelectorAll(".location-marker"); // valib kõik "location-marker" classi elemendid ja salvestab muutujasse

    locationMarkers.forEach(function(marker) { // itereerime kõik markerid läbi
        marker.addEventListener("mouseover", function() { // igale markerile event listener, kui hiir on markeri kohale siis funktsioon käivitub

            infoBox.style.display = "block";

            var isTopHalf = marker.offsetTop < window.innerHeight / 2; // kontroll kas marker on akna ülemises pooles

            if (isTopHalf) {
                infoBox.style.top = marker.offsetTop + marker.offsetHeight + 10 + "px"; // kui marker ülemises pooles siis infoboxmarkerist alla poole
            } else {
                infoBox.style.top = marker.offsetTop - infoBox.offsetHeight - 10 + "px"; // kui marker ei ole ülemises pooles siis infobox markerist ülesse poole
            }

            infoBox.style.left = marker.offsetLeft - infoBox.offsetWidth / 2 + marker.offsetWidth / 2 + "px"; // infobox horizontaalselt markeri keskel

            infoText.textContent = marker.getAttribute("data-info"); // tekst lisatakse markerile
        });

        marker.addEventListener("mouseout", function(){  // kui hiir liigub markerilt ära siis event lisener peidab infoboxi
            infoBox.style.display = "none";
        });
    });
});
