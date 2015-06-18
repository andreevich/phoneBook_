var app = app || {};

(function ($) {
	'use strict';

	var Router = Backbone.Router.extend({
		routes: {
		':esr/:date1/:date2/*nv?*query'	: 'setFilter',
		''		 					 	: 'default'
	},

	setFilter: function (esr,date1,date2,nv,query) {
		app.search.set({
			date1: date1,
			date2: date2,
			nv	 : nv,
			st	 : esr,
			ip	 : app.menu.get(esr).toJSON().ip,
			name : app.menu.get(esr).toJSON().name,
			id	 : query
		})
	},
	default:function(){
		console.log('стартовый роутер ')
	}
	})
	
	new Router();
	Backbone.history.start();
	
})(jQuery);
