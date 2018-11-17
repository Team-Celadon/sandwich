


$(document).ready(function () {

    $("#sandwichInfo").hide();

    $("input[name='meat']").change(function () {
        var max = 3;
        var count = $("input[name='meat']:checked").length;
        if (count > max) {
            $(this).prop("checked", "");
        }
    });

    $("input[name='condiment']").change(function () {
        var max = 3;
        var count = $("input[name='condiment']:checked").length;
        if (count > max) {
            $(this).prop("checked", "");
        }
    });

    $("input[name='topping']").change(function () {
        var max = 10;
        var count = $("input[name='topping']:checked").length;
        if (count > max) {
            $(this).prop("checked", "");
        }
    })

$(document).on("click", "#submitSandwich", function (event) {
    event.preventDefault();
    var toppingsArray = [];
    var meatArray = [];
    $("input:checkbox[name=meat]:checked").each(function () {
        meatArray.push($(this).val());
    });

    $("input:radio[name=cheese]:checked").each(function () {
        toppingsArray.push($(this).val());
    });

    $("input:checkbox[name=condiment]:checked").each(function () {
        toppingsArray.push($(this).val());
    });

    $("input:checkbox[name=topping]:checked").each(function () {
        toppingsArray.push($(this).val());
    });

    console.log(toppingsArray);
    console.log(meatArray);

    var sandwichName = $("#inputSandwichName").val().trim();
    $("#cardSandwichName").text(sandwichName);

    for (i = 0; i < meatArray.length; i++) {
        var newItem = $("<li></li>").text(meatArray[i]);
        newItem.addClass("list-group-item");
        $(".toppings-list").append(newItem);
    };

    for (j = 0; j < toppingsArray.length; j++) {
        var newTopping = $("<li></li>").text(toppingsArray[j]);
        newTopping.addClass("list-group-item");
        $(".toppings-list").append(newTopping);
    }

    const api_id = "5c4b84e1"
    const api_key = "0fb5e387ed16a68d8def5124ddc1133b"

    let totalCalories = 0;
    let totalFat = 0;
    let totalProtein = 0;

    for (k = 0; k < meatArray.length; k++) {
        var queryURL = "https://api.edamam.com/api/food-database/parser?ingr=" + meatArray[k] + "&app_id=" + api_id + "&app_key=" + api_key;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // console.log(response.hints[0].food);
            var calories = Number(response.hints[0].food.nutrients.ENERC_KCAL);
            // console.log(calories);
            totalCalories += calories;
            var fat = response.hints[0].food.nutrients.FAT;
            // console.log(fat);
            totalFat += fat;
            var protein = response.hints[0].food.nutrients.PROCNT;
            // console.log(protein);
            totalProtein += protein;
            console.log(totalCalories);
            console.log(totalFat);
            console.log(totalProtein);
        })
    };


    for (l = 0; l < toppingsArray.length; l++) {
        var queryURL = "https://api.edamam.com/api/food-database/parser?ingr=" + toppingsArray[l] + "&app_id=" + api_id + "&app_key=" + api_key;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // console.log(response.hints[0].food);
            var calories = response.hints[0].food.nutrients.ENERC_KCAL;
            // console.log(calories);
            if (calories !== undefined) {
                totalCalories += calories;
            }
            var fat = response.hints[0].food.nutrients.FAT;
            // console.log(fat);
            if (fat !== undefined) {
                totalFat += fat;
            }
            var protein = response.hints[0].food.nutrients.PROCNT;
            // console.log(protein);
            if (protein !== undefined) {
                totalProtein += protein;
            }
            console.log(totalCalories);
            console.log(totalFat);
            console.log(totalProtein);

            $("#nutritionInfo").text("Calories: " + Math.round(totalCalories) + " kcal | Protein: " + Math.round(totalProtein) + " g | Fat: " + Math.round(totalFat) + " g");
        })
    }
})



    $("#sandwichInfo").show();

// On click event for submitting a new user
    $(document).on("click", "#submit-newuser", function (event) {
        event.preventDefault()
        console.log('this was registered')
        var newName = $("#username").val().trim()
        var newPhone = $("#phone").val()
        var newPassword = $("#password").val().trim()

        $.ajax("/login", {
            type: "POST",
            data: { username: newName, phone: newPhone, password: newPassword }
        }).then(
            function () {
                console.log('Added a new user to the database!')

                window.location = '/features'
            }
        )
    })
})

