import { Index, MongoDBEngine } from 'meteor/easy:search';
import { _ } from 'meteor/underscore';

Products = new Mongo.Collection('products');

ProductsImages = new FS.Collection('ProductsImages', {
    stores: [new FS.Store.GridFS('ProductsImages')]
});

ProductsImages.allow({
  'insert': function () {
    return true;
  },
  'update': function () {
    return true;
  },
  'remove': function () {
    return true;
  },
  download: function(userId, fsFile) {
		return true
	}
});


Products.allow({
  'insert': function () {
    return true;
  },
  'update': function () {
    return true;
  },
  'remove': function () {
    return true;
  }
});

ProductsIndex = new Index({
  engine: new MongoDBEngine({
    sort: function () {
      return { nombre: 1 };
    }
  }),
  collection: Products,
  fields: ['nombre'],
  defaultSearchOptions: {
    limit: 8
  },
  permission: () => {
    //console.log(Meteor.userId());
    return true;
  }
});