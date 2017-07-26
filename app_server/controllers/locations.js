/*GET home page */
module.exports.homelist = function(req, res) {
	res.render('locations-list', {
		title: 'Loc8r - find a place to work with wifi',
		pageHeader: {
			title: 'Loc8r',
			strapline: 'Find places to work with wifi near you!'
		},
		sidebar: "Looking for wifi and a seat? Loc8r helps you to find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
		locations: [{
			name: 'Starcups',
			address: '125 High Street, Reading, RG6 1PS',
			rating: '3',
			facilities: ['Hot drinks', 'Food', 'Premium wifi'],
			distance: '100m'
		}, {
			name: 'Cafe Hero',
			address: '125 High Street, Reading, RG6 1PS',
			rating: '4',
			facilities: ['Hot drinks', 'Food', 'Premium wifi'],
			distance: '200m'
		}, {
			name: 'Burgur Queen',
			address: '125 High Street, Reading, RG6 1PS',
			rating: '2',
			facilities: ['Food', 'Premium wifi'],
			distance: '250m'
		}]
	});
};

/*GET location info */
module.exports.locationInfo = function(req, res) {
	res.render('location-info', {
		title: 'Location Info',
		rating: '3',
		address: '125 High Street, Reading, RG6 1PS',
		opening_hour: ['Monday - Friday : 7:00am - 7:00pm', 'Saturday : 8:00am - 5:00pm', 'Sunday : closed'],
		facilities: ['Hot drinks', 'Food', 'Premium wifi'],
		map_image: "http://maps.googleapis.com/maps/api/staticmap?center=51.455041,-0.9690884&zoom=17&size=400x350&sensor=false&markers=51.455041,-0.9690884&scale=2",
		reviews: [{
			rating: '5',
			author: 'Simon Holmes',
			date: '16 July 2017',
			content: 'What a great place. I can\'t say enough good things about.'
		}, {
			rating: '3',
			author: 'Charlie Chaplin',
			date: '15 June 2012',
			content: 'It is okay. Coffee wasn\'t great, but the wifi was fast.'
		}],
		lead_text: 'Simon \'s cafe is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
		small_text: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
	});
};

/*GET 'Add review' page */
module.exports.addReview = function(rep, res) {
	res.render('location-review-form', {title: 'Add review'})
};