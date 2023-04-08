import { headphones3, headphones2, headphones1 } from "./img";

function Products() {
  return (
    <section className="products">
      <div className="images">
        <h2 className="images__title">Apple wireless Airpod</h2>
        <div className="images__container images__container_products">
          <img
            className="images__container1"
            src={headphones3}
            alt="headphones"
          />
          <img
            className="images__container2"
            src={headphones2}
            alt="headphones"
          />
          <img
            className="images__container3"
            src={headphones1}
            alt="headphones"
          />
        </div>
        <div className="price price_products">
          <p className="price__text">Price</p>
          <p className="price__number">$45.99</p>
        </div>
      </div>

      <div className="product-descr product-descr_normal">
        <h2 className="product-descr__title">Our Featured Products</h2>
        <p className="product-descr__description">
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a product
        </p>
        <div className="product-descr__buttons">
          <button className="btn-buy button-card_product-descr">
            Add to cart
          </button>
          <button className="button-outline button-outline_product-descr">
            View more
          </button>
        </div>
      </div>
    </section>
  );
}

export default Products;
