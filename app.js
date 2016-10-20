(function(){
	var app = {
		day: null,
		month:null,
		year: null,
		
		init: function(){
			this.listeners();
		},

		listeners: function(){
			$('button').on('click', this.start.bind(this));
		},

		start: function(){
			this.day();
			//this.month();
			//this.year();
			this.date = moment('', 'DD-MM-YYYY');
			$('body').html(moment().format('dddd'));
		},

		day: function(){
			var dayInput = $('#jour').val();
			this.day = moment().day(this.dayofweek);
			if(this.day === moment.duration().days(1-31)){
				console.log("good");
			} else{
				alert("Ce jour n'existe pas");
			}
		},

		month: function(){
			var daySelect = $('select').change();
			this.month = moment().local(daySelect, 'MMMM');
		},

		year: function(){
			var yearInput = $('#annee').val();
			this.year = moment.min(moment[0]);
		}

	}
	moment().local();
	console.log(moment().format('LL'));
	app.init();

})();