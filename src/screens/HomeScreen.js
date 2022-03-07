import data from '../data.js';

const HoneScreen = {
    render: () => {
        const {products} = data
        console.log(products);
        return `
          <ul class="products">
          ${products.map(product => `
             <li>
                <div class="product">
                    <a href="/#/product/1">
                        <img class="product-image" src="${product.image}" alt="${product.name}">
                    </a>
                    <div class="product-name">
                        <a href="/#/product/1">
                           ${product.name}
                        </a>
                    </div>
                    <div class="product-brand">
                        ${product.brand}
                    </div>
                    <div class="product-price">
                        ${product.price}
                    </div>
                </div>
            </li>
          `)}
        `
    }
}

export default HoneScreen;