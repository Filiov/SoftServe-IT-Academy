'use strict';

function myMap() {
  const mapCanvas = document.getElementById("map");
  const mapOptions = {
    center: new google.maps.LatLng(42.66, 23.33), zoom: 10
  };
  const map = new google.maps.Map(mapCanvas, mapOptions);
}
