function wrongLoginInfo(message) {
    $("<div />", { class: 'wrongInfo', text: message }).hide().prependTo("body")
      .slideDown('slow').delay(5000).slideUp(function() { $(this).remove(); });
}

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
      if (response.ok === 1) { 
        console.log("Success", response);
        window.location.href = "/home";
        } else {
          console.log("No such user or wrong password");
          wrongLoginInfo("Sorry, incorrect username and/or password");
        }
      }
    });
  }); 

  $('#sign-up').click(function(event) {
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
      if (response.ok === 1) { 
        console.log("Success", response);
        window.location.href = "/home";
        }
      },
      error: function(response){
        console.log("Validation failed");
        wrongLoginInfo("Please complete all fields with a password of 5 characters or more");

      }
    });
  });
});
