const api_id = "5c4b84e1";
const api_key = "0fb5e387ed16a68d8def5124ddc1133b";

var ingredient = $("#").val().trim();

$.ajax({
    url: "https://api.edamam.com/api/food-database/parser?ingr=" + ingredient + "&app_id=" + api_id + "&app_key=" + api_key,
    method: "GET"
}). then(function(response) {

})