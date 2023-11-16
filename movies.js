$(document).ready(function () {
    var movies = [];
  
    $('#movieForm').submit(function (event) {
      event.preventDefault();
  
      var title = $('#title').val();
      var rating = $('#rating').val();
  
      if (title.length >= 2 && rating >= 0 && rating <= 10) {
        var movie = {
          title: title,
          rating: rating
        };
  
        movies.push(movie);
  
        appendMovie(movie);
  
        $('#title').val('');
        $('#rating').val('');
      } else {
        alert('Please enter a valid title (at least 2 characters) and rating (between 0 and 10).');
      }
    });
  
    function appendMovie(movie) {
      var movieEntry = $('<div class="movie-entry">');
      movieEntry.append('<p>Title: ' + movie.title + '</p>');
      movieEntry.append('<p>Rating: ' + movie.rating + '</p>');
      movieEntry.append('<button class="remove-btn">Remove</button>');
  
      $('#movieList').append(movieEntry);
  
      $('.remove-btn').click(function () {
        $(this).parent('.movie-entry').remove();
      });
    }
  
    $('#sort').change(function () {
      var sortOption = $(this).val();
      sortMovies(sortOption);
    });
  
    function sortMovies(option) {
      switch (option) {
        case 'title-asc':
          movies.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case 'title-desc':
          movies.sort((a, b) => b.title.localeCompare(a.title));
          break;
        case 'rating-asc':
          movies.sort((a, b) => a.rating - b.rating);
          break;
        case 'rating-desc':
          movies.sort((a, b) => b.rating - a.rating);
          break;
      }
  
      $('#movieList').empty();
  
      movies.forEach(function (movie) {
        appendMovie(movie);
      });
    }
  });
  