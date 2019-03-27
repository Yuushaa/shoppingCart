class Brick {
    setId(id) {
        this.id = id;
    }

    setPropertyId(propertyId) {
        this.propertyId = propertyId;
    }

    setUserId(userId) {
        this.UserId = userId;
    }

    setPrice(price) {
        this.price = price;
    }

    setOnSale(onSale){
        this.UserId.onSale=onSale;
    }

    getId() {
        return this.id;
    }

    getPropertyId() {
        return this.propertyId;
    }

    getUserId() {
        return this.UserId;
    }

    setPrice() {
        return this.price;
    }
    
    setOnSale(){
       return this.UserId.onSale;
    }
}

module.exports=Brick;