var gh = require('grasshopper');

gh.get('/', function() {
    this.model.title = 'Home';
    this.render('index');
});

gh.get('/team', function() {
    this.model.title = 'team';
    this.render('team');
});

gh.get('/angebot', function() {
    this.model.title = 'Angebot';
    this.render('angebot');
});

gh.get('/kontakt', function() {
    this.model.title = 'Kontakt';
    this.render('kontakt');
});

gh.get('/impressum', function() {
    this.model.title = 'Impressum';
    this.render('impressum');
});
