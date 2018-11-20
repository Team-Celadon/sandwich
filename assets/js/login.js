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

        $.ajax("/", {
            type: "POST",
            data: userInfo
        }).then(
            function () {
                console.log('Added a new user to the database!')

                window.location = '/features'
            }
        )
    })

    // On submit event to check if a user is in the database and log them in
    $('#current-user').on('submit', function (event) {
        // event.preventDefault()
        var currentUserInfo = {
            username: K.trim($('#username2').val()),
            password: K.trim($('#password2').val())
        }

            $.ajax('/api/login', {
                type: 'POST',
                data: currentUserInfo
            }).then(
                function () {
                    console.log('The user exists!')

                    window.location = '/features'
                }
            )

    })

})