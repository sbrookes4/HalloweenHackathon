
//alert("BOO!!!");

$(document).ready(function() {
 $('#getMovie').click(function() {
   let movie = $('#searchMovie').val();
   $('#searchMovie').val("");
   $.ajax({
     url: "http://www.omdbapi.com/?i=tt3896198&apikey=7b22baae&t=" + movie,
     type: 'GET',
     data: {
       format: 'json'
     },
     success: function(response) {
       console.log(response);
       var genres = response.Genre;
       genreArray = genres.split(",")
       for (i=0; i<genreArray.length; i++) {
       // genreArray.forEach(function(genre) {
         if ((genreArray[i] === " Horror") || (genreArray[i] === "Horror")) {
           $(".#showTitle").text(response.Title);
           $(".showTitle").append(`<div class='card showMovie' style='width: 18rem;' 'id=movie${i}'>
                     <div class='card-body'>
                     <h4 class='card-title'>${response.Title}<h4>
                     <h6>${response.Year}</h6>
                     <h6>${response.Plot}</h6>
                     <h6>${response.Actors}</h6>
                     </div>
                     </div>
                     `);
           $(".showPoster").html("<img src=" + response.Poster + ">");
         } else {
           $("#none").text("boo...hisss!!! Der no spook movies named this")
         }
       };
     }
   })
 });
 //mapbox token to access its api
 mapboxgl.accessToken = "pk.eyJ1Ijoia3NlbGxlcnMiLCJhIjoiY2lteTd1Nm9lMDN6bXY3a2toZGY5YWVteSJ9.R_LBBQrD6gwBAH-Aq93ZUw";
 // replace this with your access token

 //This limits the full extent of the map
 var bounds = [
   [-180.679, -80.60], // Southwest coordinates
   [180.187, 84.549]  // Northeast coordinates
  // [-180.679, -80.60], // Southwest coordinates
  // [180.187, 84.549]  // Northeast coordinates
 ];

 //adding my mapbox style
 var map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/ksellers/cjnrwl9qn2dpg2skzqi7auqzk",
  center: [0, 30], // starting position
  zoom: 1.25, // starting zoom
  maxBounds: bounds
 });


 // Add zoom and rotation controls to the map.
 map.addControl(new mapboxgl.NavigationControl());
});
