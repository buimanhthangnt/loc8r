/*GET home page */
module.exports.index = function(rep, res) {
	res.render('index', {title: 'Express'});
};