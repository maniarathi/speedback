if (Meteor.isClient) {
  Template.title.greeting = function () {
    $('#tabs').tab();
  };
  
  Meteor.loginWithGithub({
  requestPermissions: ['user', 'public_repo']
  }, function (err) {
  if (err)
    Session.set('errorMessage', err.reason || 'Unknown error');
	});
  
  Template.register.events({
	'submit #login-form' : function (e,t) {
		e.preventDefault();
		var	user	= t.find('#login-username').value(),
			email	= t.find('#login-email').value(),
			password= t.find('#login-password').value();
		Accounts.createUser({email: email, password : password}, function(err) {
          if (err) {
            // Inform the user that account creation failed
			alert('This account has already been created.  Please try logging in.');
          } else {
            // Success. Account has been created and the user
            // has logged in successfully. 
			alert('Success!');
          }
        });
      return false;
	}
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
