
const DbAccess = require('../db/dbAccess');
const BricksController = require('./BricksController');
const CouponsController = require('./CouponsController');
const UsersController = require('./UsersController');

class ShoppingProcesssController {
    async makeProcess(res, data) {
        const bricksController = new BricksController();
        const couponsController = new CouponsController();
        const usersController=new UsersController();
        const dbAccess = new DbAccess();
        
            const processArrray = JSON.parse(data);
            const bricksArray=processArrray[0].bricks;
            const userId=processArrray[0].userId;
            const couponString=processArrray[0].couponString;
            var total=0;
            for(var i=0;i<bricksArray.lenght;i++){
                bricksController.changeUserId(res, bricksArray[i],userId);
                bricksController.changeOnSale(res,bricksArray[i],false);
                await dbAccess.read('bricks.json', (err, data) => {
                    const bricksArray = JSON.parse(data);
                    const brick = bricksArray.find((brick) => {
                        return brick.id == bricksArray[i];
                    });
                
                    total+=brick.price;
                });
            }
            if(couponString!=""){
            dbAccess.read('coupons.json', (err, data) => {
                const couponsArray = JSON.parse(data);
                const coupon = couponsArray.find((coupon) => {
                    return coupon.couponString == couponString;
                });

                total-=coupon.value;
            }); 
            couponsController.changeIsUsed(res,couponString,true);    
        }
        usersController.changeIsOwner(res,userId,true);
        res.send(processArrray);
        
    }
}

module.exports = ShoppingProcesssController;
