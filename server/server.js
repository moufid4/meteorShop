Meteor.startup(function(){

	if(Products.find().count() === 0){
		Products.insert({thumb:'applepie.jpeg', name:'Apple Pie', desc:'So sweet!', price:2.50, catName:'Fruity'});
		Products.insert({thumb:'blackberry.jpeg', name:'Blackberry Smoothie', desc:'Wow! So good! :-)', price:2.50, catName:'Fruity'});
		Products.insert({thumb:'mods.jpeg', name:'Computer', desc:'iMac', price:2000, catName:'Mods'});
	}
	if(Categories.find().count() === 0) {
		var hwid = Categories.insert({name:'Hardware'});
		var juid = Categories.insert({name:'Juice'});

		SubCategories.insert({name:'Mods',cat:hwid});

		SubCategories.insert({name:'Fruity', cat:juid});
		SubCategories.insert({name:'Sweet', cat:juid});
	}
});

Meteor.methods({
	removeAll:function(){
		Products.remove({});
		Categories.remove({});
		SubCategories.remove({});
		CartItems.remove({});
	}
})