const app = require('express')();
const routes = require('./routes');
const bodyParser = require('body-parser');

app.set("view engine", "ejs");
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes);

app.listen(3000);
