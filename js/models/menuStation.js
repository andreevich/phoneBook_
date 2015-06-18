var app = app || {};
/*
	модель елемента списка меню коллекции станций 
*/

(function () {
	'use strict';

	app.MenuStation = Backbone.Model.extend({
		idAttribute: 'esr',
		defaults: {name: '',	esr: '',	ip:""	},
	});
	
})();
