Session.setDefault('category', null);

Router.configure({
  layoutTemplte: 'layout',
  yieldTemplates:{
    'products':{to:'products'},
    'cart':{to:'cart'},
    'categories':{to:'categories'}
  }
});

Router.map(function(){
  this.route('/','layout');
  this.route('/products', {
    data:function(){
      Session.set('category', this.params.name);
    },
    template:'layout',
    path:'/:name'
  })
});

Template.registerHelper('currency', function(num){
  return '$' + Number(num).toFixed(2);
})