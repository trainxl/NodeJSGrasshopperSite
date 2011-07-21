var gh = require('grasshopper');

gh.get('/', function() {
    this.model.title = 'Home';
    this.render('index');
});

gh.get('/impressum', function() {
    this.model.title = 'Impressum';
    this.render('impressum');
});
