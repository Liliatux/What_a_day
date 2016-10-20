(function(){
	var app = {
		day: parseInt($('#jour').val(), 10),
		month: $('select').val(),
		year: parseInt($('#annee').val(), 10),
		date: null,
		
		init: function(){
			this.listeners();
		},

		listeners: function(){
			$('button').on('click', this.start.bind(this));
		},

		start: function(){
			moment.locale('fr');
			this.date();
			//this.date = moment('', 'DD-MM-YYYY').locale();
			//$('body').html(moment().format('dddd').locale());
		},

		date: function(){
			moment().format('DD-MM-YYYY');
		}

	}
	app.init();

})();