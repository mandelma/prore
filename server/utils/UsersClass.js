class Users  {
    constructor () {
        this.users = [];
        this.room = "";
    }
    addUserData (userID, username, room, connected) {
        const user = {userID, username, room, connected};
        this.room = user.room;
        this.users.push(user);
        return user
    }

    updateRoomName (id, room) {
        let itemIndex = this.users.findIndex((item => item.userID === id));
        console.log("Before updating room " + this.users[itemIndex]);
        this.users.room = room;
        console.log("After updating room " + this.users[itemIndex]);
        //return this.users;
    }

    getCurrentUser = (id) => {
        return this.users.find(user => user.userID === id);
    }
    getRoom () {
        return this.room;
    }

    removeUser (id) {
        const user = this.getUser(id);
        if(user) {
            this.users = this.users.filter((user) => user.userID !== id);
        }
        return user;
    }

    getUser (id) {
        const getuser = this.users.filter((userId) => {
            return userId.userID === id;
        })[0];
        return getuser;
    }

// User leaves chat
    userLeave(id) {
        const index = this.users.findIndex(user => user.userID === id);

        if (index !== -1) {
            return this.users.splice(index, 1)[0];
        }

    }

    // Get room users
    getRoomUsers (room) {
        return this.users.filter(user => user.room === room);
    }
}

module.exports = Users