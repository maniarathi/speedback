if (Meteor.isClient) {
  Template.title.greeting = function () {
    $('#tabs').tab();
  };

  Template.register.events({
	"click button[name='register']" : function (e,t) {
		e.preventDefault();
		var	user	= t.find('#login-username').value,
			email	= t.find('#login-email').value,
			password= t.find('#login-password').value;
			Meteor.call("createUser", getSessionToken(), user, email, password, function (error, result) {
			if (!error) {
				alert("User " + name + " added successfully.");
			} else {
				alert(error.reason);
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
