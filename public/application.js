$(document).ready(function(){
  
  var name = $('#name');
  var email = $('#email');  
  var username = $('#username');
  var password = $('#password');  
  
  var username2 = $('#username2');
  var password2 = $('#password2');  

  $('#sign-in').click(function(event) {
    event.preventDefault();
    var username = $('input[id="username"]');
    var password = $('input[id="password"]');
    console.log(username.val());
    console.log(password.val());
    $.ajax({
      type: 'POST',
      url: 'sessions',
      data: {
        user: {      
          username: username.val(),
          password: password.val()
        }
      },  
      dataType: 'json',
      success: function(response) {
      console.log(response);  
      if (response.ok === 1) { 
        console.log("Success", response);
        } else {
          console.log("No such user or wrong password")
        }
      }
    });
  }); 

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