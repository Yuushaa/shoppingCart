class Coupon {
    setId(id) {
        this.id = id;
    }

    setCouponString(couponString) {
        this.couponString = couponString;
    }
    setValue(value) {
        this.value=value;
    }
    getId() {
        return this.id;
    }

    getCouponString() {
        return this.couponString;
    }
    getValue(){
        return this.value;
    }

}

module.exports = Coupon;