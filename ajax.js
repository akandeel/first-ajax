$(document).ready(function() {

  $('#request-root').on('click', function() {

      // AJAX REQUEST
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      // data: ,
      dataType: 'text'
    });
  });

      // CHAINED FUNCTION .DONE AT END OF AJAX. PASS ANOTHER FUNCTION AT THE END OF .DONE
  $('#request-ping').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      dataType: 'text'
    }).done(function(responseData) {
      console.log(responseData);
      console.log('The request is done.');
      $('#step3,4,5,6').append(responseData);
    }).fail(function() {
      console.log('The request failed.');
      $('#step3,4,5,6').append('Try harder next time!')

      // .ALWAYS FUNCTION PREVENTS DUPLICATION IN .DONE AND .FAIL CALLBACKS
    }).always(function() {
      console.log('This will always pass.');
      $('body').append('Hey the request finished!')
    });
  });
  $('#hive-mind').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      dataType: 'text'
    }).done(function(responseData) {
      console.log(responseData);
      $('#step7').append(responseData);
    });
  });
  $('#send-data').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      dataType: 'text'
    }).done(function(responseData) {
      $('#step8').append(responseData);
    });
  });
  $('#request-car').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      method: 'GET',
      dataType: 'HTML'
  // STILL NEED .DONE AND APPEND IT.
  });
});
