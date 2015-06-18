var app = app || {};

/*
	Представление елемента списка для операции. центральное меню 
*/

(function ($) {
	'use strict';
	
	app.OperItemView_2 = Backbone.View.extend({
		el: "#table2",
		template: _.template($('#item-template-oper_2').html()),
		events: {
			'click': 'click'
		},
		initialize: function () {
			this.render()
		},
		click:function(){
			//console.log(this.model.keys(), this.model.values())
			
		},
		render: function () {
			this.$el.html("")
			this.$el.append(this.template(this.model.toJSON()));
		}
	});
	
})(jQuery);