var app = app || {};

/*
	Представление елемента списка для операции. Боковое меню 
*/

(function ($) {
	'use strict';
	
	app.OperItemView_1 = Backbone.View.extend({
		tagName:  'tr',
		template: _.template($('#item-template-oper_1').html()),
		events: {
			'click': 'click'
		},
		initialize: function () {
			this.render()
		},
		click:function(){
			console.log(this.model.toJSON(),$(this.$el[0]).attr("class"))
			new app.OperItemView_2 ({model:this.model})
		},
		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});
	
})(jQuery);