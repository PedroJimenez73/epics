Meteor.publish('ProductsImages', function(){
    return ProductsImages.find({});
});

Meteor.publish('products', function(){
    return Products.find({});
});

ProductsImages.allow({
  'insert': function () {
    // add custom authentication code here
    return true;
  }
});

Products.allow({
  'insert': function () {
    // add custom authentication code here
    return true;
  }
});
/*
Meteor.publish('test-search', function (searchTerm) {
  const { userId } = this;

  return ProductsIndex.search(searchTerm, { userId }).mongoCursor;
});
*/

Meteor.publish('allUsers', function(){
    return Meteor.users.find();
});