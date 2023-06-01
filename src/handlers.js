const users = require('./users.json')


const getUsers = (request, reply) => {
    const { gender } = request.query

    if (!gender) return users

    const filteredUsers = users.filter(
        (user) => user.gender.toLocaleLowerCase() === gender.toLocaleLowerCase()
    )

    return filteredUsers

}


 const getUserById = ( request, reply) => {
    const id = parseInt(request.params.id, 10)

    const user = users.find(user => user.id === id)

    return user || reply.status(404).send({
        msg: "User Not Found"
    })

 }

const addUser =  (request) => {

    const id = users.length + 1

    const newUser = { ...request.body, id }
    users.push(newUser)

    return newUser
}

module.exports = {addUser, getUsers , getUserById}