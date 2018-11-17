// Requiring MySQL
const mysql = require('mysql')

// Importing our connection file
let connection = require('../config/connection')

// Requiring passport
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

// Serializing the user for the session
passport.serializeUser(function(user, done) {
    done(null, user.id);
    })

// Deserializing the user
passport.deserializeUser(function(id, done) {
    connection.query('SELECT * FROM user WHERE id = ' + id, function (error, rows) {
        done (error, rows[0])
    })
})

// Local signup
passport.use('local', new LocalStrategy({
    usernameField: 'username',
    phoneField: 'phone',
    passwordField: 'password',
    // Allows the entire request to be send to the callback
    passReqToCallback: true
},
    function(req, username, phone, password, done) {
        
        connection.query('SELECT * FROM user WHERE username = ' + username, function (error, rows) {
            console.log(rows)
            console.log(username)

            if (error) {
                return done (error)
            }

            if (rows.length) {
                return done (null, false, req.flash('signupMessage', 'That username is already taken.'))
            } else {
                let newUser = new Object()
                
                newUser.username = username
                newUser.phone = phone
                newUser.password = password

                let queryString = "INSERT INTO user (username, phone, password) VALUES ('" + username + "', '" + phone + "', '" + password + "')"
                console.log(queryString)

                connection.query(queryString, function (error, rows) {
                    if (error) {
                        throw error
                    }
                    newUser.id = rows.insertId

                    return done (null, newUser)
                })
            }
        })
    }))
