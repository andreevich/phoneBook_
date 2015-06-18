var app = app || {};

/*
Коллекция елементов списка меню станций 
*/
(function () {
	'use strict';

	app.MenuStations = Backbone.Collection.extend({
		model: app.MenuStation,
		initialize: function(models) {},
		getDataByName: function(name){
			var temp = ""
			this.each(function(a){
				if (a.get('name')==name){
					temp = a;
					return;
				}
			})
			return temp
		}
	});

	app.menu = new app.MenuStations([
		{name:"Полигон",			ip:"10.1.3.106"     	,esr:138507 },
		{name:"* Ельск",			ip:"10.1.3.106"      	,esr:151304 },
		{name:"* Ситница",			ip:"10.1.3.106" 		,esr:152006 },
		{name:"-"} , //разделитель               
		{name:"Бобруйск",			ip:"10.15.6.10"    		,esr:147008 },
		{name:"Березина",			ip:"10.15.6.10"    		,esr:147703 },
		{name:"Быхов",				ip:"10.5.8.5"   		,esr:156100 },
		{name:"Могилёв II",			ip:"10.5.8.5" 	 		,esr:156505 },
		{name:"Могилёв I",			ip:"10.5.8.5" 	 		,esr:156609 },
		{name:"Луполово",			ip:"10.5.8.5"  	 		,esr:157705 },
		{name:"Шклов",				ip:"10.5.8.5"  	 	 	,esr:156806 },
		{name:"Заднепровская",		ip:"10.5.8.5" 			,esr:157809 },
		{name:"Ситница",			ip:"10.12.179.214" 		,esr:152006 },
		{name:"* Центролит",		ip:"10.4.100.60"  		,esr:154904 },
		{name:"* Новобелица",		ip:"10.4.100.60" 		,esr:150208 },
		{name:"Лунинец",			ip:"10.12.161.11"       ,esr:139406 },
		{name:"Свислочь",			ip:"10.11.137.205"     	,esr:135602 },
		{name:"Волковыск",			ip:"10.2.152.111"      	,esr:136709 },
		{name:"Барановичи Ц.",		ip:"10.2.152.105"  		,esr:138507 },
		{name:"БудаКошелево",		ip:"10.16.80.211"   	,esr:155201 },
		{name:"Минск_Северный",		ip:"10.19.4.17"   		,esr:140102 },
		{name:"Минск_Южный",		ip:"10.19.4.17"  		,esr:140507 }
	]);
	
})();
