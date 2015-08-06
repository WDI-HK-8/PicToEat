function errorInfoMessage(message) {
    $("<div />", { class: 'wrongInfo', text: message }).hide().prependTo("body")
      .slideDown('slow').delay(5000).slideUp(function() { $(this).remove(); });
};

function successMessage(message) {
    $("<div />", { class: 'rightInfo', text: message }).hide().prependTo("body")
      .slideDown('slow').delay(5000).slideUp(function() { $(this).remove(); });
};

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
          errorInfoMessage("Sorry, incorrect username and/or password");
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
        if (response.ok) { 
          console.log("Success", response);
          window.location.href = "/home";
          }
        },
        error: function(response){
          console.log("Validation failed");
          errorInfoMessage("Please complete all fields");

        }
    });
  });

  $('#log-out').click(function(event) {
    if (window.confirm("Are you sure you want to log out?")) {
      event.preventDefault();
      $.ajax({
        type: 'DELETE',
        url: '/sessions',
        success: function(response){
        console.log("Now logging out", response);
        window.location.href = "/";  
        }
      })
    } else {
      window.location.href = "/home";  
    }  
  });

  $('#update-details').click(function(event) {
    event.preventDefault();
    $.ajax({
      type: 'PUT',
      url: '/users',
      data: {
        user: {      
          password: password.val(),
          username: username.val(),
          email: email.val()
        }
      },
      success: function(response){
        console.log('Info changed', response);
      }
    })
  });
//-----------search & upload photos 
  $('#search').click(function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: '/photos',
      data: {
        //...
      },
      dataType: 'json',
      success: function(response){
        console.log('All photos listed', response);
      },
      error: function(response){
        console.log("photo upload failed");
        errorInfoMessage("Sorry, try again");
      }
    })
  });

  $('#addphoto').click(function(event) {
    event.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/photos',
      data: {
        //...
      },
      dataType: 'json',
      success: function(response){
        console.log('All photos listed', response);
        successMessage("Your yummy dish has been added!");
      },
      error: function(response){
        console.log("Photo upload failed");
        errorInfoMessage("Sorry, issue with upload. Please try again");

      }
    })
  });

//=====================to be worked on, list user info on profile

  //  $('#details').html(html);


    
  //   keys.forEach(function(key){
  //     html += '<li>';
  //     html +=   '<div class='col-xs-3'>';
  //     html +=     key;
  //     html +=   '</div>';
  //     html +=   '<div class='col-xs-9'>';
  //     html +=     response[key]
  //     html +=   '</div>';
  //     html += '</li>';
  //   });

  //   return html;
  // };

  // var profileInfo = function(response){
  //   console.log('Response: ', response);

  //   var keys = ['name', 'email', 'username', 'password'];

  //   $.ajax({
  //       type: 'GET',
  //       url: '/users',
  //       dataType: 'JSON',
  //       success: profileInfo
  //     });
  // };


//=================================


});

