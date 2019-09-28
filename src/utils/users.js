const users = []

//adduser, removeUser, getUsers, getUsersInRoom

const addUser = ({ id, username, room }) => {
    //clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()
    // Valiate the data
    if (!username || !room){
        return {
            error: 'Username and room are required!'
        }
    }

    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    //validate username
    if (existingUser) {
        return {
            error: 'Username is in use!'
        }
    }
    //store user
    const user = { id, username, room }
    users.push(user)
    return { user }


} 

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

addUser({
    id: 22,
    username: 'Nishant',
    room: 'South Philly'
})
addUser({
    id: 23,
    username: 'Nishu',
    room: 'South Philly'
})
addUser({
    id: 24,
    username: 'Nishu',
    room: 'Center City'
})



// console.log(users)
// const removedUser = removeUser(22)

// console.log(removedUser)
// console.log(users)

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

// const userList = getUsersInRoom('center city')
// console.log(userList)

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}