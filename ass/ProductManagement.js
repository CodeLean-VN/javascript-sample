var productManagement = new function () {

    this.products = [];

    this.getProducts = function () {
        return this.products;
    }

    this.init = function () {
        var p1 = new Product("ID1", "Name1", 23.5);
        var p2 = new Product("ID2", "Name2", 25.2);
        var p3 = new Product("ID3", "Name3", 56.4);
        var p4 = new Product("ID4", "Name4", 13.5);
        var p5 = new Product("ID5", "Name5", 45.2);

        this.products.push(p1);
        this.products.push(p2);
        this.products.push(p3);
        this.products.push(p4);
        this.products.push(p5);
    }

    this.display = function () {
        for (var i = 0; i < products.length; i++) {
            console.log(this.products[i].toString());
        }
    }

    this.add = function (frNew) {
        var id = frNew.idProduct.value;
        var name = frNew.nameProduct.value;
        var price = frNew.priceProduct.value;
        var product = new Product(id, name, price);

        this.products.push(product);
        this.fetchAll();
    }

    this.findByID = function (id) {
        for (var i = 0; i < products.length; i++) {
            if (id === this.products[i].getId()) {
                return this.products[i];
            }
        }
        return null;
    }

    this.fetchAll = function () {
        document.getElementById('newproduct').style.display = "none";
        document.getElementById('editproduct').style.display = "none";
        var data = '';
        for (var i = 0; i < this.products.length; i++) {
            var id = this.products[i].getId();
            var name = this.products[i].getName();
            var price = this.products[i].getPrice();

            data += '<tr>';
            data += '<td>' + id + '</td>';
            data += '<td>' + name + '</td>';
            data += '<td>' + price + '</td>';
            data += '<td><a href="#" onclick="productManagement.edit(' + i + ')">Edit</a></td>';
            data += '<td><a href="#" onclick="productManagement.deletes(' + i + ')">Delete</a></td>';
            data += '</tr>';
        }
        return document.getElementById("productList").innerHTML = data;
        ;
    }

    this.edit = function (index) {
        document.getElementById('editproduct').style.display = "block";
        //alert("Ban dang click vao save");
        document.getElementById('idSave').onsubmit = function () {
            alert("Ban dang click vao save");
            this.products[index].setId(products[index].getId());
            this.products[index].setName("new name");
            this.products[index].setPrice(23.5);
            self.fetchAll();
        }
    }

    this.deletes = function (index) {
        this.products.splice(index, 1);
        this.fetchAll();
    }
}