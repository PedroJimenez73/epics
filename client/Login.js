Template.Login.events({
    'submit .form-signin': function(event){
        var email = event.target.email.value;
        var password = event.target.password.value;

        Meteor.loginWithPassword(email, password, function(err){
            if(err) {
                event.target.email.value = email;
                event.target.password.value = password;
                Bert.alert( 'Datos incorrectos, contacte con el administrador', 'danger', 'growl-top-left' );
            } else {

            
                toastr["success"]("benvingut de nou a eLerniam Pics");

                FlowRouter.go('/home');
            }
        });

        return false;
    }

});