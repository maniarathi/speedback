var Events = new Meteor.Collection("events");
var People = new Meteor.Collection("people");

if (Meteor.isClient) {
	Meteor.subscribe("messages");
	
	Template.EventsTemplate.events = function () {  
    return Events.find();  
	};
	
	Template.PeopleTemplate.people = function () {  
    return People.find();  
	};
	
	Template.join.events({
    'click join' : function () {
	  window.location.href = 'Feedback.html';
    }
	});
	
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
	'click #register' : function (e,t) {
		e.preventDefault();
		var newUser = {  
		email: t.find("#register-email").value,  
		password: t.find("#register-password").value  
        };
		People.insert(newUser);
		alert("Inserted new person!");
		return false;
	}
  });
  
  Template.login.events({
	"click #login" : function (e,t) {
		e.preventDefault();
		var	email	= t.find('#login-email').value,
			password= t.find('#login-password').value;
		Meteor.loginWithPassword(email,password, function (error) {
			if (error) {
				console.log(error);
			}
		});
		return false;
	}
  });
  
  Template.event.events({
	"click button[name='create']" : function (e,t) {
		e.preventDefault();
		// dummy data
	Events.insert({n:'test1'},{l:'mit'},{o1:'Sound'},{o2:'Visuals'},{o3:'Content'});
	Events.insert({n:'test2'},{l:'mit'},{o1:'Sound'},{o2:'Visuals'},{o3:'Content'});
	Events.insert({n:'test3'},{l:'mit'},{o1:'Sound'},{o2:'Visuals'},{o3:'Content'});
	Events.insert({n:'test4'},{l:'mit'},{o1:'Sound'},{o2:'Visuals'},{o3:'Content'});
		var name	= t.find('#event-name').value,
			loc		= t.find('#event-location').value,
			opt1	= t.find('#option1').value,
			opt2	= t.find('#option2').value,
			opt3	= t.find('#option3').value;
			Events.insert({n:name},{l:loc},{o1:opt1},{o2:opt2},{o3:opt3});
		return false;
	}
  });
  
  Template.join.users = function () {
	return Meteor.users.find();
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
