var app = app || {};
/*
	модель операция по вагону
*/

(function () {
	'use strict';
	app.TypeOper = Backbone.Model.extend({
		idAttribute: 'id_oper',
		defaults: {
			istoch_data		:null,
			id_oper			:null,
			typeOper		:null,
			dateOper		:null,
			cod_gr_op		:null,
			kodStan			:null,
			num_train		:null,
			park			:null,
			put				:null,
			date_oper_per	:null,
			prikaz			:null,
			date_prikaz		:null,
			date_oper		:null,
			kod_stn_per		:null,
			kod_pol_per		:null,
			pr_pol_dok		:null,
			pr_obrab		:null,
			error			:null,
			pr_end			:null,
			date_ins		:null,
			n_vag_error		:null
		},
		initialize: function(){
		/*
			При добавлении записи форматирую дату
		*/
			this.on('add', function(){
				this.set({
					date_ins:this.date_format(this.toJSON().date_ins),
					dateOper:this.date_format(this.toJSON().dateOper)
				})
			},this)
		},
		nul_:function(data){
			var temp = data 
			if (data.toString().length < 2)
			temp = '0'+data
			return temp
		},
		date_format:function(date){
			var d = new Date (date)
			return this.nul_(d.getMonth()+1)+"&nbsp;"+this.nul_(d.getDate())+"&nbsp;"+this.nul_(d.getHours())+":"+this.nul_(d.getMinutes())+":"+this.nul_(d.getSeconds())
		}
		
	});
	app.typeOper = new app.TypeOper();
})();
