Template.Adddoc.events({
    'click .cancel-add': function() {
    	FlowRouter.go('/home');
	},
    'submit .addDoc': function(event){
        var nombre = event.target.nombre.value;

        var file = $('#docpdf').get(0).files[0];
        
        if(file){
            fsFile = new FS.File(file);
            ProductsImages.insert(fsFile, function(err, result){
            if(!err) {
                    var productImage = '/cfs/files/ProductsImages/'+result._id;

                    //Meteor.call('addDoc', nombre, destino, productImage);    
                        Products.insert({
                            nombre: nombre,
                            image: productImage,
                            createdAt: new Date()
                        });
                    }
                });
            } else {
                    var productImage = '/img/noimage.png';

                        Products.insert({
                            nombre: nombre,
                            image: productImage,
                            createdAt: new Date()
                        });
                    
                }
            event.target.nombre.value = "";
            
            toastr["success"]("Imatge guardada correctament");


            FlowRouter.go('/home');
   

            return false;
        }
    });



Template.Adddoc.helpers({
    ProductsImages: function(){
        return ProductsImages.find();
    }
});

Meteor.subscribe('ProductsImages');

Template.Adddoc.helpers({
    products: function(){
        return Products.find();
    }
});

Meteor.subscribe('products');




