$(document).ready(function () {

$.ajax('/api/menu', {
    method: 'GET',
    dataType: 'json',
    success: function (data) {

            var newSandwich1 = data[1].name
            var newSandwich2 = data[2].name
            var newSandwich3 = data[3].name

            document.getElementById('burgerName1').append(newSandwich1)
            document.getElementById('burgerName2').append(newSandwich2)
            document.getElementById('burgerName3').append(newSandwich3)

            var feature1 = data[7].name
            var feature2 = data[8].name
            var feature3 = data[9].name

            document.getElementById('sandwich1').append(feature1)
            document.getElementById('sandwich2').append(feature2)
            document.getElementById('sandwich3').append(feature3)
            

    }
})


})