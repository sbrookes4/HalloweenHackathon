$(document).ready(function() {
  $('#getMovie').click(function() {
    let movie = $('#searchMovie').val();
    $('#searchMovie').val("");
    $.ajax({
      url: "http://www.omdbapi.com/?i=tt3896198&apikey=7b22baae&t=${movie}",
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $(".showMovie").text(`The movie you searched for is ${response.}`);
      },
      error: function() {
        $('#errors').text("Booooooo! Der Was A EEERRRrrror process your reqqquesttt.");
      }
    });
  });
});
