const DbAccess = require('../db/dbAccess');
const Coupons = require('../models/coupon');

class CouponsController {
    createCoupons() {
        const coup=new Coupons;
    }

    getCoupons(res) {
        const dbAccess = new DbAccess();
        dbAccess.read('coupons.json', function(err, data) {
            const couponsArray = JSON.parse(data);
            res.send(couponsArray);
        });
    }

    getCoupon(res, couponString) {
        const dbAccess = new DbAccess();
        dbAccess.read('coupons.json', (err, data) => {
            const couponsArray = JSON.parse(data);
            const coupon = couponsArray.find((coupon) => {
                return coupon.couponString == couponString;
            });
            res.send(coupon);
        });
    }

    changeCouponString(res, id, couponString) {
        const dbAccess = new DbAccess();
        dbAccess.read('coupons.json', (err, data) => {
            const couponsArray = JSON.parse(data);
            const couponIndex = couponsArray.findIndex((coupon) => {
                return coupon.id == id;
            });
            couponsArray[couponIndex].couponString = couponString;
            dbAccess.write('coupons.json', couponsArray);
            res.send(couponsArray);
        });
    }

    changeIsUsed(res, couponString, isUsed) {
        const dbAccess = new DbAccess();
        dbAccess.read('coupons.json', (err, data) => {
            const couponsArray = JSON.parse(data);
            const couponIndex = couponsArray.findIndex((coupon) => {
                return coupon.couponString == couponString;
            });
            couponsArray[couponIndex].isUsed = isUsed;
            dbAccess.write('coupons.json', couponsArray);
            res.send(couponsArray);
        });
    }

}

module.exports = CouponsController;
