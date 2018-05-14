module.exports = function( sequelize, DataTypes ) {
    var burger_sequelize=sequelize.define("burger_sequelize", {

        "burger_name": {
            type:DataTypes.STRING,
            allowNull:false,
            Validate: {
                Len:[1,50]
            }
        },

        "devoured": {
            type:DataTypes.INTEGER,
            allowNull:false,
            defaultValue:0
        }
    });

    burger_sequelize.associate = function(models) {
        burger_sequelize.hasOne(models.customer_sequelize)
    };
    return burger_sequelize;
}