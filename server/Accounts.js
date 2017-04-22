var postSignUp = function (userId, info) {

    console.log(userId);
    console.log(info.profile.departamento);
    
    Roles.addUsersToRoles(userId, [info.profile.departamento]);

};


AccountsTemplates.configure({
    postSignUpHook: postSignUp
});