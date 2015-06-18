var app = app || {};

/*
Коллекция елементов операций с вагонами
*/
(function () {
	'use strict';
	app.TypeOpers = Backbone.Collection.extend({
		model: app.TypeOper,
		url: "http://10.1.35.85:3004/nsi/{\"database\":\"ASUS_SAPOD\",\"server\":\"10.1.3.106\",\"SQL_query\":\"select * from OPER_VAG where date_ins BETWEEN '20150101' AND '20150514' and kodstan='151304' order by date_ins desc \"}",
		initialize: function(){
			this.on('reset',function(){
				console.log('reset')
			},this)
			
			/*
			this.on('all',function(e){
				console.log(e, this)
			},this)
			*/
			// Закоментить
			
			this.on('update change',function(e){
					new app.OperView_1({collection:app.typeOpers})
			},this)
			
			
		},
		go:function(obj){
			var that = this
			this.setURL(obj,function(){
				$.ajax({
					beforeSend: that.fetchBeforeSend()
				});
				
				that.fetch({
					success: that.fetchSuccess,
					error: that.fetchError
				})
			});
		
		},
		setURL:function(obj,callback){
			var d1 = obj.date1.split('-')
			var d2 = obj.date2.split('-')
			obj.date1 = '20'+d1[2]+d1[1]+d1[0];
			obj.date2 = '20'+d2[2]+d2[1]+d2[0];
			
			this.url = "http://10.1.35.85:3004/nsi/{\"database\":\"ASUS_SAPOD\",\"server\":\""+obj.ip+"\",\"SQL_query\":\"select * from OPER_VAG where date_ins BETWEEN '"+obj.date1+"' AND '"+obj.date2+"' and kodstan='"+obj.esr+"' order by date_ins desc \"}";
			callback();
			console.log(this.url)
		},
		fetchBeforeSend:function(){
			console.log('fetchBeforeSend')
			$("#loading").css({display:"block"})
		},
		fetchSuccess: function (collection, response) {
			//console.log('Collection fetch success', response);
			console.log('Collection models: ', collection.models);
			new app.OperView_1({collection:collection});
		},
		fetchError: function (collection, response) {
			throw new Error("Fetch error", response);
		}
		});
		
		app.typeOpers = new app.TypeOpers();
		app.typeOpers.add({
			cod_gr_op: 17,
			error: null,
			id_oper: 6,
			istoch_data: 12,
			kodStan: 138507,
			kod_pol_per: 1,
			kod_stn_per: 150000,
			n_vag_error: 21458795,
			num_train: 2145,
			park: '01',
			pr_end: 0,
			pr_obrab: 1,
			pr_pol_dok: 2,
			prikaz: 9874,
			put: '02',
			typeOper: 9,
			
		});  // Закоментить
	
		
})();