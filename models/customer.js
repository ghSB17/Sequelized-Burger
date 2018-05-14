module.exports = function( sequelize, DataTypes ) {
    var customer_sequelize=sequelize.define("customer_sequelize", {

        "customer_name": {
            type:DataTypes.STRING,
            allowNull:false,
            Validate: {
                Len:[1,50]
            }
        }
    });

    // customer_sequelize.associate = function(models) {
    //     customer_sequelize.belongsTo(models.burger_sequelize)
    // };
    return customer_sequelize;
}