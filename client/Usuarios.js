
Template.Usuarios.onCreated(function(){
    //if(Roles.userIsInRole(this.userId, 'admin'))
    this.autorun(() => {
        this.subscribe('allUsers');
    });
});

Template.Usuarios.helpers({
    users: function(){
        return Meteor.users.find();
    },
    userEmail: function() {
        return this.emails[0].address;
    },
    userDepartamento: function() {
        return this.profile.departamento;
    },
    isAdmin: function() {
        return Roles.userIsInRole(this._id, 'admin') ? 'admin' : '';
    },
});

Template.Usuarios.events({
    'click .user_id': function() {
        Session.set('currentUser', this);
    },
    'click .toggle-admin': function() {
       Meteor.call('toggleAdmin', this._id);
    }
});