var express = require('express');
var bodyParser = require("body-parser");
var exphbs = require('express-handlebars');
var app = express();

var db = require("./models");
var PORT = process.env.PORT || 3030;

app.use(express.static("./public"));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");
// exphbs.registerPartials( __dirname + '/views/partials/burgers');
require("./routes/burger-api-routes.js")(app, db);
require("./routes/customer-api-routes.js")(app, db);
// require("./routes/burger-routes.js")(app, db);

db.sequelize.sync({

}).then(function () {
    app.listen(PORT, function(){
        console.log(`Listening on the PORT #${PORT}....`);
    })
})