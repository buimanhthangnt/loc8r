/*GET home page */
module.exports.homelist = function(req, res) {
	res.render('locations-list', {title: 'Home'})
};

/*GET location info */
module.exports.locationInfo = function(req, res) {
	res.render('location-info', {title: 'Location Info'})
};

/*GET 'Add review' page */
module.exports.addReview = function(rep, res) {
	res.render('location-review-form', {title: 'Add review'})
};