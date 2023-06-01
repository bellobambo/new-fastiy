const {addUserOptions} = require('./options')
const { getUsers, getUserById } = require('./handlers')

const handler = (app, opts, done) => {


    //get routes

    app.get('/getUsers', getUsers )


    //single user

    app.get('/getUser/:id', getUserById)

// add user
    app.post("/adduser", addUserOptions)


    done()
}


module.exports = handler