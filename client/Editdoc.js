Template.Editdoc.helpers({
    editdocumento: function(){
        var currentDocumento = FlowRouter.getParam('_id');
        return Products.findOne({_id: currentDocumento});
    }
});

Template.Editdoc.events({
    'submit .edit-documento': function(){
        var _id = FlowRouter.getParam('_id');
        var nombre = event.target.nombre.value;

		Meteor.call('editDocumento', _id, nombre);

        toastr.success('Modificacions guardades!')
        FlowRouter.go('/home');

        return false;
    },
    'click .cancel-add': function() {
    	FlowRouter.go('/home');
	},
    'click #deleteDocumento': function(){
		   
        var _id = FlowRouter.getParam('_id');
		
	   
        Products.remove({_id: _id});
        toastr.success('Imatge eliminada correctament!')

        FlowRouter.go('/home');   
        return false;

    }

});