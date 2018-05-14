module.exports = function (app, db) {

    app.get("/", function (req, res) {
        db.burger_sequelize.findAll({
            include:[db.customer_sequelize]
        }).then(function (burgersData) {
            // console.log(burgersData);
            // res.json(burgersData);

            res.render('index', {
            burgers: burgersData
            })
        });
    })

    app.post("/api/burgers", function (req, res) {
        console.log("in Burgers here: " + req.body.burger_name);
        db.burger_sequelize.create({
            burger_name: req.body.burger_name
        }).then(function (results) {
            console.log(results);
            console.log("=================================");
            res.json(results);
        })
    });

    app.put("/api/burgers/:id", function (req, res) {
        console.log(req.params.id);
        db.burger_sequelize.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (burgerData) {
            console.log(burgerData);
            burgerData.updateAttributes({
                devoured: 1
            }).then(function () {
                // db.customer_sequelize.create({
                //     customer_name: req.body.customer_name,
                //     burgerSequelizeId: req.body.burgerSequelizeId
                // }).then(function () {
                console.log("worked!! maybe not!!");
                res.json(burgerData);
            });
        });
    });

}