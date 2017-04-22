Meteor.methods({
    editDocumento: function(_id, nombre, destino){

        Products.update({
            _id: _id
        }, {
            $set:{
                nombre : nombre,
				destino : destino

            }
        });

    }
    
});

