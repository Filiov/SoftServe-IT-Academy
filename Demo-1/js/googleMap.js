'use strict';

function myMap() {
    let mapCanvas = document.getElementById("map");
    let mapOptions = {
      center: new google.maps.LatLng(42.66, 23.33), zoom: 10
    };
    let map = new google.maps.Map(mapCanvas, mapOptions);
  }