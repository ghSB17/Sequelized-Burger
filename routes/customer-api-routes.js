module.exports = function (app, db) {

    app.post("/api/customer", function (req, res) {
        console.log("here" + req.body.customer_name);
        db.customer_sequelize.create({
            customer_name: req.body.customer_name,
            burgerSequelizeId: req.body.burgerSequelizeId
        }).then(function (results) {
            console.log(results);
            console.log("=================================");
            res.json(results);
        });

    });

    app.get("/api/customers", function (req, res) {
        db.customer_sequelize.findAll({
            // include:[db.burger_sequelize]
        }).then(function (burgersData) {
            console.log(burgersData);
            res.json(burgersData);

            // res.render('index', {
                // burgers: burgersData
            // })
        });
    })
}