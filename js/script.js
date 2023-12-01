function button(pageName){
    window.location.href = pageName
}
// script.js

document.addEventListener("DOMContentLoaded", function() {
    var infoBox = document.getElementById("info-box");
    var infoText = document.getElementById("info-text");
    var locationMarkers = document.querySelectorAll(".location-marker");

    locationMarkers.forEach(function(marker) {
        marker.addEventListener("mouseover", function() {

            infoBox.style.display = "block";

            var isTopHalf = marker.offsetTop < window.innerHeight / 2;

            if (isTopHalf) {
                infoBox.style.top = marker.offsetTop + marker.offsetHeight + 10 + "px";
            } else {
                infoBox.style.top = marker.offsetTop - infoBox.offsetHeight - 10 + "px";
            }

            infoBox.style.left = marker.offsetLeft - infoBox.offsetWidth / 2 + marker.offsetWidth / 2 + "px";

            infoText.textContent = marker.getAttribute("data-info");
        });

        marker.addEventListener("mouseout", function() {
            infoBox.style.display = "none";
        });
    });
});
