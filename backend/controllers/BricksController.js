const DbAccess = require('../db/dbAccess');
const Brick = require('../models/brick');

class BricksController {
    createBricks() {
        
    }

    getBricks(res) {
        const dbAccess = new DbAccess();
        dbAccess.read('bricks.json', function(err, data) {
            const bricksArray = JSON.parse(data);
            res.send(bricksArray);
        });
    }

    getBrick(res, id) {
        const dbAccess = new DbAccess();
        dbAccess.read('bricks.json', (err, data) => {
            const bricksArray = JSON.parse(data);
            const brick = bricksArray.find((brick) => {
                return brick.id == id;
            });
            res.send(brick);
        });
    }

    changeUserId(res, id, userId) {
        const dbAccess = new DbAccess();
        dbAccess.read('bricks.json', (err, data) => {
            const bricksArray = JSON.parse(data);
            const brickIndex = bricksArray.findIndex((brick) => {
                return brick.id == id;
            });
            bricksArray[brickIndex].userId = userId;
            dbAccess.write('bricks.json', bricksArray);
            res.send(bricksArray);
        });
    }

    changePrice(res, id, price) {
        const dbAccess = new DbAccess();
        dbAccess.read('bricks.json', (err, data) => {
            const bricksArray = JSON.parse(data);
            const brickIndex = bricksArray.findIndex((brick) => {
                return brick.id == id;
            });
            bricksArray[brickIndex].price = price;
            dbAccess.write('bricks.json', bricksArray);
            res.send(bricksArray);
        });
    }

    changeOnSale(res, id, onSale) {
        const dbAccess = new DbAccess();
        dbAccess.read('bricks.json', (err, data) => {
            const bricksArray = JSON.parse(data);
            const brickIndex = bricksArray.findIndex((brick) => {
                return brick.id == id;
            });
            bricksArray[brickIndex].onSale = onSale;
            dbAccess.write('bricks.json', bricksArray);
            res.send(bricksArray);
        });
    }

}

module.exports = BricksController;
