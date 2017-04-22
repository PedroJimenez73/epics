var myLogoutFunc = function () {
    Session.set('nav-toggle', '');
};

AccountsTemplates.configure({
    //forbidClientAccountCreation: true,
    //homeRoutePath: '/dashboard',
    onLogoutHook: myLogoutFunc,
    texts: {
      signInLink_pre: " ",
      signInLink_link: " ",
      signUpLink_pre: " ",
      signUpLink_link: " ",
      title: {
        changePwd: "Password Title",
        enrollAccount: "Enroll Title",
        forgotPwd: "Forgot Pwd Title",
        resetPwd: "Reset Pwd Title",
        signIn: "Inicie sesión",
        signUp: " ",
        verifyEmail: "Verify Email Title",
      },
       button: {
          changePwd: "Password Text",
          enrollAccount: "Enroll Text",
          forgotPwd: "Forgot Pwd Text",
          resetPwd: "Reset Pwd Text",
          signIn: "Iniciar",
          signUp: "Crear",
        }
        
    }
});

AccountsTemplates.removeField('email');
AccountsTemplates.removeField('password');


AccountsTemplates.addFields([
    {
      _id: "username",
      type: "text",
      displayName: "Nombre",
      placeholder: "Nombre",
      required: true,
      minLength: 3,
  },
  {
      _id: 'email',
      type: 'email',
      required: true,
      displayName: "Email",
      placeholder: "Email",
      re: /.+@(.+){2,}\.(.+){2,}/,
      errStr: 'Indique un email correcto',
  },
  {
      _id: 'username_and_email',
      type: 'text',
      required: true,
      displayName: "Nombre o email",
      placeholder: "Nombre o email"
  },
  {
      _id: 'password',
      type: 'password',
      required: true,
      displayName: "Contraseña",
      placeholder: "Contraseña"
  },
  {
      _id: 'departamento',
      type: 'select',
      displayName: "Departamento",
      select: [
          {
              text: "Administrador",
              value: "admin"
          },
          {
              text: "Usuario",
              value: "usuario"
          }

      ]
  }

]);