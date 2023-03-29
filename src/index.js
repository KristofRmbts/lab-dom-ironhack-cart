// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerText
  // console.log(price);
  const quantity = product.querySelector('.quantity input').value;
  // console.log(quantity);

  const subtotal = price * quantity
  // console.log(subtotal);

  product.querySelector('.subtotal span').innerHTML = subtotal
  return subtotal
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
/*   const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product')
  let totalPrice = 0

  allProducts.forEach(price => {
    totalPrice += updateSubtotal(price)
  });


  // ITERATION 3
  document.querySelector('#total-value span').innerText = totalPrice
}


// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;

  const parent = event.target.parentNode.parentNode
  parent.remove(event.target)
  
  calculateAll(target)
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}




window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove');

  removeBtn.forEach(button => {
    button.addEventListener('click', removeProduct);
  })
});
