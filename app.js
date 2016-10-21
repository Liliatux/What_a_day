(function(){
	var app = {
		day: null,
		month: null,
		year: null,
		date: null,
		error:null,
		
		init: function(){
			this.listeners();
		},

		listeners: function(){
			$('button').on('click', this.start.bind(this));
		},

		start: function(){
			moment.locale('fr');
			this.userDate();
			$('body').html(moment(this.date).format('dddd'));
		},

		userDate: function(){
			this.day = parseInt($('#jour').val(), 10);
			this.month = $('select').val();
			this.year = parseInt($('#annee').val(), 10);
			this.date = moment({year: this.year, month: this.month, day: this.day});
		}

	}
	app.init();

})();