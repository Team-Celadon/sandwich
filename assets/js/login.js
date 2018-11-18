// Bringing in kyanite
const K = kyanite

$(document).ready(function () {
// On click event for submitting a new user
    $("#new-user").on("submit", function (event) {
        event.preventDefault()
        
        var userInfo = {
            username: K.trim($("#username").val()), 
            phone: phoneFns.uglify($("#phone").val()), 
            password: K.trim($("#password").val())
        }

        $.ajax("/login", {
            type: "POST",
            data: userInfo
        }).then(
            function () {
                console.log('Added a new user to the database!')

                window.location = '/features'
            }
        )
    })

    $('#current-user').on('submit', function (event) {
        event.preventDefault()

        var currentUserInfo = {
            username: K.trim($('#username2').val()),
            password: K.trim($('#password2').val())
        }

            $.ajax('/login', {
                type: 'GET',
                data: currentUserInfo,
                success: function (response) {
                    if (response == 'success') {
                        console.log('It worked!')

                        window.location = '/features'
                    } else {
                        console.log('Not in the database')

                        window.location = '/login'
                    }
                }
            })

    })

})