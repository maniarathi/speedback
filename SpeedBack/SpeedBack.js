var Events = new Meteor.Collection("events");

if (Meteor.isClient) {
  Template.title.greeting = function () {
    $('#tabs').tab();
  };
  
  Template.dropdown = function () {
	if ($("#option1").val() == $("#opt1").val()) {
		
	} else if ($("#option1").val() == $("#opt2").val()) {
	
	} else if ($("#option1").val() == $("#opt3").val()) {
	
	} else if ($("#option1").val() == $("#opt4").val()) {
		
	}
  };

  Template.register.events({
	"click button[name='register']" : function (e,t) {
		e.preventDefault();
		var	email	= t.find('#login-email').value,
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
  
  Template.login.events({
	"click button[name='login']" : function (e,t) {
		e.preventDefault();
		var	email	= t.find('#login-email').value,
			password= t.find('#login-password').value;
		Meteor.loginWithPassword(email,password);
		return false;
	}
  });
  
  Template.event.events({
	"click button[name='create']" : function (e,t) {
		e.preventDefault();
		var name	= t.find('#event-name').value,
			loc		= t.find('#event-location').value,
			opt1	= t.find('#option1').value,
			opt2	= t.find('#option2').value,
			opt3	= t.find('#option3').value;
			Events.insert({n:name},{l:loc},{o1:opt1},{o2:opt2},{o3:opt3});
		return false;
	}
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
