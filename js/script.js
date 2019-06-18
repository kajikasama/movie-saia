function searchMovie() {

  $('#movie-list').html('');

  $.ajax({
    url: 'http://www.omdbapi.com/',
    type: 'get',
    dataType: 'json',
    data: {
      'apikey': '5dd94cab',
      's': $('#search-input').val()
    },
    success: function (hasil) {
      // console.log(hasil);
      if (hasil.Response == 'True') {

        let movies = hasil.Search;

        $.each(movies, function (i, data) {

          $('#movie-list').append(`
        <div class="col-md-4">
        <div class="card mb-3" style="width: 18rem;">
        <img src=` + data.Poster + ` class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">` + data.Title + `</h5>
        <h6 class="card-subtitle mb-3 text-muted">` + data.Year + `</h6>
        <a data-toggle="modal" data-target="#exampleModal" data-id="` + data.imdbID + `"  href="#" class="btn btn-outline-dark see-detail">See Detail</a>
        </div>
        </div>
        </div>
          
          `);

          $('#search-input').val('');

        });

      } else {
        $('#movie-list').html(`
        <div class="col">
        <h2 class="text-center">` + hasil.Error + `</h2>
        </div>
        `);
      }
    }

  });

}


$('#search-button').on('click', function () {

  searchMovie();

});

$('#search-input').on('keyup', function (event) {


  if (event.which === 13) {

    searchMovie();

  }


});

$('#movie-list').on('click', '.see-detail', function () {

  // console.log($(this).data('id'));

  $.ajax({

    url: 'http://www.omdbapi.com/',
    type: 'get',
    dataType: 'json',
    data: {
      'apikey': '5dd94cab',
      'i': $(this).data('id')
    },
    success: function (movie) {

      if (movie.Response == "True") {
        $('.modal-body').html(`
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-4">
            <img class="img-fluid" src="` + movie.Poster + `" />
            </div>
            <div class="col-md-8">
            <ul class="list-group">
            <li class="list-group-item"><h3>` + movie.Title + `</h3></li>
            <li class="list-group-item">Released : ` + movie.Released + `</li>
            <li class="list-group-item">Genre : ` + movie.Genre + `</li>
            <li class="list-group-item">Director : ` + movie.Director + `</li>
            <li class="list-group-item">Actors : ` + movie.Actors + `</li>
            </ul>
            </div>
          </div>
        </div>
        `)
      }

    }
  });

});