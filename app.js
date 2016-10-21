(function(){
	var app = {
		day: null,
		month: null,
		year: null,
		date: null,
		error: false,
		
		init: function(){
			this.listeners();
		},

		listeners: function(){
			$('#bouton').on('click', this.start.bind(this));
			$('#restart').on('click', this.reset.bind(this));
		},

		start: function(){
			moment.locale('fr');
			this.userDate();
			this.message();
		},

		userDate: function(){
			this.day = parseInt($('#jour').val(), 10);
			this.month = $('select').val();
			this.year = parseInt($('#annee').val(), 10);
			this.date = moment({year: this.year, month: this.month, day: this.day});
		},

		errorDay: function(){
			error = true;

			if(this.day < 1 || this.day > 31){
				$('.error').show().append('Le jour doit être compris entre 1 et 31 !');
				$('#jour').css('border',"2px solid #ff7473");
			}
		},

		errorYear: function(){
			error = true;

			if(this.year < 0){
				$('.error').show().append("L'année ne doit pas être inférieur à 0 !");
				$('#annee').css('border', "2px solid #ff7473");
			} 
		},

		message: function(){
			if(error === true){
				errorDay();
				errorYear();
			}
			else if(error === false){
				$('.container').hide();
				$('.overlay').show();
				$('#date').text(moment(this.date).format('dddd'));
			}
		}

		reset: function(){
			$('.overlay').hide();
			$('.container').show();
		}
	}
	app.init();

})();