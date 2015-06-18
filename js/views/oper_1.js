var app = app || {};
/*
	Представление бокового меню операций  
*/
(function ($) {
	'use strict';
	
	app.OperView_1 = Backbone.View.extend({
		el: "#table1",
		initialize: function(){
			this.render()
			this.collection.on('reset',function(){
				this.render()
			},this)

		},
		render: function(){
			$('#table1').html('')
			this.collection.each(function(item){
				var operItemView_1 = new app.OperItemView_1({ model: item });
				this.$el.append(operItemView_1.el)
				if (item.get("error")!=null)
					$(operItemView_1.el).attr("class","danger")
					
			},this);
		}
	});

})(jQuery);
