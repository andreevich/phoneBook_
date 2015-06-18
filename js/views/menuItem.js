var app = app || {};

/*
	Представление елемента списка меню коллекции станций 
*/

(function ($) {
	'use strict';
	
	app.MenuItemView = Backbone.View.extend({
		tagName:  'li',
		template: _.template($('#item-template').html()),
		events: {
			'click': 'click'
		},
		initialize: function () {
			this.render()
		},
		click:function(){
			app.search.set({
				ip:this.model.get("ip"),
				esr:this.model.get("esr"),
				name:this.model.get("name")
			})
		},
		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
		});
})(jQuery);