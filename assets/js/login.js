// Bringing in kyanite
const K = kyanite

$(document).ready(function () {

// Hide signup form until 'create account' button is clicked
    $("#signUpDiv").hide();

// When 'create account' button is clicked the login is hidden and sign up is displayed
    $("#createNewAccount").on("click", function() {
        $("#signUpDiv").show()
        $("#loginDiv").hide()
        $("#createNewAccount").hide()
    })

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

    $('#current-user').on('submit', function (event) {
        // event.preventDefault()
        var currentUserInfo = {
            username: K.trim($('#username2').val()),
            password: K.trim($('#password2').val())
        }

            $.ajax('/api/login', {
                type: 'POST',
                data: currentUserInfo,
                success: function (response) {
                    if (response.statusCode === 200) {
                        console.log('It worked!')

                        window.location = '/features'
                    } else {
                        console.log(response)

                        window.location = '/login'
                    }
                }
            })

    })

})