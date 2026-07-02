//  3.	Create a product object that stores name and price and has a method which returns the final price after discount.


  let product = {
    name: "Shirt",
    price: 999,
    discountedPrice: function(){
        return this.price - 200;
    }
  }

  product.discountedPrice()

  console.log(product.discountedPrice())