class Product {
    id; name; price;amount;
    constructor(id, name, price,amount) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
    totalAmount() {
        return this.amount * this.price;
    }
}