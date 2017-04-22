
Template.Home.helpers({
	inputAttributes: function () {
		return { 'class': 'easy-search-input', 'placeholder': 'Escrigui un text de cerca' };
	},
	products: function () {
		return Products.find({}, { sort: { nombre: 1 } });
	},
	selectedName: function () {
		var product = ProductsIndex.config.mongoCollection.findOne({ __originalId: Session.get("selectedProduct") });
		return product && product.nombre && product._id;
	},
	index: function () {
		return ProductsIndex;
	},
	resultsCount: function () {
		return ProductsIndex.getComponentDict().get('count');
	},
	renderTmpl: () => Template.renderTemplate,
	selected: function () {
		return Session.equals("selectedProduct", this.__originalId) ? "selected" : '';
	}
});



Template.Home.helpers({
    products: function(){
        return Products.find();
    },
	imageid: function(){
		var id = this._id;
        return id.substring(0, 17);
    },
	

});

Meteor.subscribe('products');

Template.Home.helpers({
    ProductsImages: function(){
        return ProductsImages.find();
    }
});



Meteor.subscribe('ProductsImages');




Template.Home.events({
'click .logout': function(event){
        Meteor.logout(function(err){
            if(err){
                Bert.alert( 'Error de conexión', 'danger', 'growl-top-left');
            } else {
            
                toastr["success"]("fins aviat!");
                
                FlowRouter.go('/');
            }
        });
    }
});


