/*GET home page */
module.exports.about = function(req, res) {
	res.render('generic-text', {
		title: 'About',
		english_text: 'Loc8r was created to help people to find places to sit down and get a bit of work done.',
		other_text: 'Lorem ipsum dolo sit amet, consectetur adipiscing elit. Nunc sed lorem ac  nisi dignissim accumsan.'
	});
};