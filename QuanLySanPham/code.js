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
   let products = [
    new Product(1,'Áo phông đen',250000,115),
    new Product(2,'Lắc tay',50000,135),
    new Product(3,'Quần bò',350000,84),
];

function showAllProducts() {
    let content = "";
    for(let i = 0; i < products.length; i++) {
        content += `
        <tr>
        <td>${products[i].id}</td>
        <td>${products[i].name}</td>  
        <td>${products[i].price}</td>
        <td>${products[i].amount}</td>
        <td>${products[i].totalAmount()}</td>  
        <td> <button onclick="editByIndex(${i})">Sửa</button></td>
        <td><button onclick="deleteByIndex(${i})">Xóa</button> </td>
</tr>`

    }document.getElementById("tbody").innerHTML = content;
}
showAllProducts();
function deleteByIndex(id) {
products.splice(id, 1);
showAllProducts();
}
function editByIndex(id) {
  text =  `<fieldset>
     <legend>Sửa thông tin</legend>
     Mã <input value='${products[id].id}' id ="id1"><br><br>
     Tên sản phẩm<input value='${products[id].name}' id ="name1"><br><br>
     Giá <input value='${products[id].price}' id ="price1"><br><br>
     Số lượng <input value='${products[id].amount}' id ="amount1"><br><br>
     <button onclick="ok(${id})">OK</button>
     <button type="reset" onclick="reset()">Hủy</button>
    </fieldset>`
    document.getElementById("tbody1").innerHTML = text;

}
function addNewProduct() {
    let id =document.getElementById('id').value;
    let name =document.getElementById('name').value;
    let price =document.getElementById('price').value;
    let amount =document.getElementById('amount').value;
    let newProduct = new Product(id, name, price, amount);
    products.push(newProduct);
    showAllProducts();
}

function ok(index) {
    let id = document.getElementById('id1').value;
    let name = document.getElementById('name1').value;
    let price = document.getElementById('price1').value;
    let amount = document.getElementById('amount1').value;
        let newProduct = new Product(id, name, price, amount);
        products[index]=newProduct;
        showAllProducts();
        reset()
}
function reset() {
    document.getElementById('tbody1').innerHTML = '';


}