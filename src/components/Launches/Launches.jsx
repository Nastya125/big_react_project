import headphones2 from '..//../img/Headphones-2.png';
import headphones1 from '..//../img/Headphones-1.png';

function Launches() {
  return (
    <section className="launches">
      <h2 className="sellers__title">New Launches</h2>
      <div className="product_launches ">
        <div className="images images_launches">
          <div className="images__container_launches">
            <img
              className="images__launches-1 "
              src={headphones2}
              alt="headphones"
            />
            <img
              className="images__launches-2"
              src={headphones1}
              alt="headphones"
            />
          </div>
        </div>

        <div className="product-descr">
          <h2 className="product-descr__title">Airdrop 500 Anc</h2>
          <p className="product-descr__description product-descr__description_launches">
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a product ... Read More
          </p>
          <div className="price price_launches ">
            <p className="price__text">Price:</p>
            <p className="price__number">$45.99</p>
          </div>
          <div className="product-descr__colors">
            <div className="product-descr__color1 color"></div>
            <div className="product-descr__color2 color"></div>
            <div className="product-descr__color3 color"></div>
          </div>
          <div className="product-descr__buttons">
            <button className="btn-buy btn-buy_launches">Add to cart</button>
            <button className="button-outline button-outline_product-descr btn-buy_launches">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Launches;