$(document).ready(function(){
  var name = $('#name');
  var email = $('#email');  
  var username2 = $('#username2');
  var password2 = $('#password2');  
  

  $('#sign-up').click(function() {
    event.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/users',
      data: {
        user: {      
          name: name.val(),
          email: email.val(),
          username: username2.val(),
          password: password2.val()
        }
      },
      dataType: 'json',
      success: function(response) {
        console.log("Success", response);      
      }
    });
  });
});