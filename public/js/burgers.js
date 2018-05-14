$(document).ready(function () {


    //When a new burger is created, its name is saved to burger_sequelize table and updated on the screen
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var burger_name = $("#burgerName").val().trim()
        if (burger_name !== "" && burger_name !== "burger?") {
            var newBurger = {
                burger_name: burger_name,
            }
            console.log(newBurger);
            // alert(newBurger);
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(function () {
                console.log("Created a Yummy Burger!!");
                location.reload();
            });
        }

    });

    $(document).on("click", ".change-devour", function (event) {

        var idBurger = $(this).data("id");
        var customerName = $(this).prev().val().trim();
        // alert(customerName);
        if (customerName === "" || customerName === "customer?") {
            $("#customerName").val("customer?");
        } else if (customerName != "") {
            var newCustomer = {
                customer_name: customerName,
                burgerSequelizeId: idBurger
            }
            $.ajax("/api/burgers/" + idBurger, {
                type: "PUT",
                // data:newCustomer
            }).then(function () {

                $.ajax("/api/customer", {
                    type: "POST",
                    data: newCustomer
                }).then(function (customerData) {
                    console.log(customerData);
                    location.reload();
                })
            })
        }
    })


})