const users = [] // storing users

// addUser, removeUser, getUser, getUsersInRoom

const addUser = ({ id, username, room }) => {
    // Clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // Validate the data
    if (!username || !room) {
        return {
            error: 'Username and Room are required'
        }
    }

    // Check for existing user , will return true if there already exists a user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // Validate username
    if (existingUser) {
        return {
            error: 'Username is in use!'
        }
    }

    // Store User
    const user = { id, username, room }
    users.push(user)
    return { user }
}

// remove user using id
const removeUser = (id) => {
    const index = users.findIndex((user) => {
        return user.id === id
    })
    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
        // user.id is d id provided nd id is currently prsesnt in room, if matcehs it will display details
}

const getUsersInRoom = (room) => {
    // filter method will display all users if room provided matches if any room exists or not
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

module.exports = {
        addUser,
        removeUser,
        getUser,
        getUsersInRoom
    }
    // addUser({
    //     id: 22,
    //     username: 'Andrew',
    //     room: 'South Philly'
    // })

// addUser({
//     id: 42,
//     username: 'Mike',
//     room: 'South Philly'
// })

// addUser({
//     id: 32,
//     username: 'Andrew',
//     room: 'Center City'
// })

// // const user = getUser(412)
// // console.log(user)

// const userList = getUsersInRoom(' city')
// console.log(userList)