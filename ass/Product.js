function Product(id, name, price) {

    this.id = id;
    this.name = name;
    this.price = price;

    this.setId = function (id) {
        this.id = id;
    }

    this.setName = function (name) {
        this.name = name;
    }

    this.setPrice = function (price) {
        this.price = price;
    }

    this.getId = function () {
        return this.id;
    }

    this.getName = function () {
        return this.name;
    }

    this.getPrice = function () {
        return this.price;
    }

    this.toString = function () {
        return "id: " + this.id + "; name: " + this.name + "; price: " + this.price;
    }
}