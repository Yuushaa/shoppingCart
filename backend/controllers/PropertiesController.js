const DbAccess = require('../db/dbAccess');
const Property = require('../models/property');

class PropertiesController {
    createProperty() {
        const prop=new Property;
    }

    async getProperties(res) {
        const dbAccess = new DbAccess();
        await dbAccess.read('properties.json', async function(err, propertiesData) {
            const propertiesArray = JSON.parse(propertiesData);
            for(let i = 0; i < propertiesArray.length; i++) {
                await dbAccess.read('bricks.json', async function(err, bricksData) {
                    const bricksArray = JSON.parse(bricksData);
                    const filteredBricks = bricksArray.filter(brick => brick.propertyId == propertiesArray[i].id);
                    const minorBrick = filteredBricks.sort((brick1, brick2) => {
                        if (brick1.price > brick2.price) {
                            return 1;
                        } else {
                            return -1;
                        }
                    }).pop();
                    propertiesArray[i].bricksPrice = minorBrick.price;
                });

            }
            setTimeout(function(){
                res.send(propertiesArray);
            }, 500);
        });
    }

    getProperty(res, id) {
        const dbAccess = new DbAccess();
        dbAccess.read('properties.json', (err, data) => {
            const propertiesArray = JSON.parse(data);
            const property = propertiesArray.find((property) => {
                return property.id == id;
            });
            dbAccess.read('bricks.json', async function(err, bricksData) {
                const bricksArray = JSON.parse(bricksData);
                const filteredBricks = bricksArray.filter(brick => brick.propertyId == id);
                property.bricks = filteredBricks;
                res.send(property);
            });
        });
    }

}

module.exports = PropertiesController;
