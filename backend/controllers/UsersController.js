const DbAccess = require('../db/dbAccess');
const User = require('../models/user');

class UsersController {
    createUsers() {
        const dbAccess = new DbAccess();
        const armando = new User();
        armando.setId(1);
        armando.setName('Armando');
        const victor = new User();
        victor.setId(2);
        victor.setName('Victor');
        const users = [];
        users.push(armando);
        users.push(victor);
        dbAccess.write('users.json', users);
        return users;
    }

    getUsers(res) {
        const dbAccess = new DbAccess();
        dbAccess.read('users.json', function(err, data) {
            const usersArray = JSON.parse(data);
            res.send(usersArray);
        });
    }

    getUser(res, id) {
        const dbAccess = new DbAccess();
        dbAccess.read('users.json', (err, data) => {
            const usersArray = JSON.parse(data);
            const user = usersArray.find((user) => {
                return user.id == id;
            });
            res.send(user);
        });
    }

    changeUserName(res, id, name) {
        const dbAccess = new DbAccess();
        dbAccess.read('users.json', (err, data) => {
            const usersArray = JSON.parse(data);
            const userIndex = usersArray.findIndex((user) => {
                return user.id == id;
            });
            usersArray[userIndex].nombre = name;
            dbAccess.write('users.json', usersArray);
            res.send(usersArray);
        });
    }

    changeEmail(res, id, email) {
        const dbAccess = new DbAccess();
        dbAccess.read('users.json', (err, data) => {
            const usersArray = JSON.parse(data);
            const userIndex = usersArray.findIndex((user) => {
                return user.id == id;
            });
            usersArray[userIndex].email = email;
            dbAccess.write('users.json', usersArray);
            res.send(usersArray);
        });
    }

    changePass(res, id, pass) {
        const dbAccess = new DbAccess();
        dbAccess.read('users.json', (err, data) => {
            const usersArray = JSON.parse(data);
            const userIndex = usersArray.findIndex((user) => {
                return user.id == id;
            });
            usersArray[userIndex].pass = pass;
            dbAccess.write('users.json', usersArray);
            res.send(usersArray);
        });
    }

    changeIsOwner(res, id, isOwner) {
        const dbAccess = new DbAccess();
        dbAccess.read('users.json', (err, data) => {
            const usersArray = JSON.parse(data);
            const userIndex = usersArray.findIndex((user) => {
                return user.id == id;
            });
            usersArray[userIndex].isOwner = isOwner;
            dbAccess.write('users.json', usersArray);
            res.send(usersArray);
        });
    }
}

module.exports = UsersController;
