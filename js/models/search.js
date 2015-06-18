var app = app || {};
/*
	модель параметры запроса
*/

(function () {
	'use strict';
	var t = new Date()
	app.Search = Backbone.Model.extend({
		idAttribute: 'esr',
		defaults: {
			date1:t.getDate()+"-0"+(t.getMonth()+1)+"-"+(t.getFullYear().toString().substr(2,2)),
			date2:(t.getDate()+1)+"-0"+(t.getMonth()+1)+"-"+(t.getFullYear().toString().substr(2,2)),
			esr:138507,
			ip:'10.1.3.106'
		},
		initialize: function(){
			this.on('change', function(){
				console.log('- Values for this model have changed.', this.toJSON());
				
				$("#st").val(this.toJSON().name)
				$('#date1').val(this.toJSON().date1)
				$('#date2').val(this.toJSON().date2)
				$('#nv').val(this.toJSON().nv)
				
			});
		}
	});
	app.search = new app.Search();
})();
