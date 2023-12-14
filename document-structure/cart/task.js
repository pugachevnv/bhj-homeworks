const products = document.querySelectorAll('.product');
const cart = document.querySelector('.cart__products');


products.forEach(product => {
    
    let quantityControl = product.querySelector('.product__quantity-value');
    let increaseBtn = product.querySelector('.product__quantity-control_inc');
    let decreaseBtn = product.querySelector('.product__quantity-control_dec');
    let addToCartBtn = product.querySelector('.product__add');
    let imageProduct = product.querySelector('.product__image');

    increaseBtn.addEventListener('click', () => {
        quantityControl.textContent = parseInt(quantityControl.textContent) + 1;
    });

    decreaseBtn.addEventListener('click', () => {
        if (parseInt(quantityControl.textContent) > 1) {
            quantityControl.textContent = parseInt(quantityControl.textContent) - 1;
        }
    });
    
    addToCartBtn.addEventListener('click', () => {   
        const isProductInCart = document.querySelector(`.cart__product[data-id="${product.dataset.id}"]`);

        if (isProductInCart) {
            const selectedProductCount = isProductInCart.querySelector('.cart__product-count');
            selectedProductCount.textContent = parseInt(selectedProductCount.textContent) + parseInt(quantityControl.textContent);
        } else {
            const newProductCart = document.createElement('div');
            newProductCart.className = 'cart__product';
            newProductCart.dataset.id = product.dataset.id;
    
            const productImageCart = document.createElement('img');
            productImageCart.className = 'cart__product-image';
            productImageCart.src = imageProduct.src;
            newProductCart.appendChild(productImageCart);
    
            const productCountCart = document.createElement('div');
            productCountCart.className = 'cart__product-count';
            productCountCart.textContent = quantityControl.textContent;
            newProductCart.appendChild(productCountCart);

            cart.appendChild(newProductCart);
        }
    });
    
});