Template.products.helpers({
	'catnotselected':function(){
		return Session.equals('category',null);
	},
	'category':function(){
		return Session.get('category');
	},
	'productlist':function(){
		return Products.find({catName:Session.get('category')});
	}
});