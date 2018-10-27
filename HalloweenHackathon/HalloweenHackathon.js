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
          if (genreArray[i] === " Horror") {

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
});
