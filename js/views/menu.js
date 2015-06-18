var app = app || {};
/*
	Представление меню коллекции/списка станций 
*/
(function ($) {
	'use strict';
	
	app.MenuView = Backbone.View.extend({
		el: "#menu",
		initialize: function(){
			$('.datapic').datepicker({
					format:"dd-mm-yy",
					todayBtn: true,
					language: "ru",
					forceParse: false,
					todayHighlight: "linked",
					 autoclose: true
			})
			var that = this
			$('#search').on('click',function(e){
				that.search(e);
			})
			this.render()
		},
		render: function(){
			app.menu.each(function(item){
				var menuItemView = new app.MenuItemView({ model: item });
				this.$el.append(menuItemView.el)
			},this);
		},
		search:function(e){
			e.preventDefault();
			app.search.set({
				date1: $("#date1").val(),
				date2: $("#date2").val(),
				nv	 : $("#nv").val()
			})
			if (app.search.toJSON().esr && app.search.toJSON().date1 && app.search.toJSON().date2 && app.search.toJSON().ip){
				console.log("Можно запрашивать на сервер")
				app.typeOpers.reset([])
				app.typeOpers.go(app.search.toJSON())
			}
		}
	});
	new app.MenuView();
	
})(jQuery);
