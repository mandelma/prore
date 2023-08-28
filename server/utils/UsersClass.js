class Users  {
    constructor () {
        this.users = [];
    }
    addUserData (userID, username, room) {
        const user = {userID, username, room};
        this.users.push(user);
        return user
    }
    getUserList (room) {
        const users = this.users.filter((user) => user.room === room)
        // const namesArray = users.map(user => {
        //     return user.name
        // })
        // const data = users.map(user => {
        //     return {
        //         userID: user.userID,
        //         username: user.username
        //     }
        // })
        return users
        //return namesArray
    }
}

module.exports = Users