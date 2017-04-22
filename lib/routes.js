FlowRouter.route('/', {
    name: 'login',
    action() {
        BlazeLayout.render("LoginLayout", {main: "Login"});
    }
});

FlowRouter.route('/home', {
    name: 'home',
    action() {
        BlazeLayout.render("AppLayout", {main: "Home"});
    }
});

FlowRouter.route('/documentos', {
    name: 'home',
    action() {
        BlazeLayout.render("AppLayout", {main: "Documentos"});
    }
});

FlowRouter.route('/adddoc', {
    name: 'adddoc',
    action() {
        BlazeLayout.render("AppLayout", {main: "Adddoc"});
    }
});


FlowRouter.route('/editdoc/:_id', {
    name: 'editdoc',
    action() {
        BlazeLayout.render("AppLayout", {main: "Editdoc"});
    }
});

FlowRouter.route('/altausuario', {
    name: 'altausuario',
    action() {
        BlazeLayout.render("AppLayout", {main: "altausuario"});
    }
});

FlowRouter.route('/usuarios', {
    name: 'usuarios',
    action() {
        BlazeLayout.render("AppLayout", {main: "Usuarios"});
    }
});

