import boat333 from '..//../img/boat_333.png';
import boat234 from '..//../img/boat_234.png';
import boat323 from '..//../img/boat_323.png';
import redStart from '..//../img/red__star.png';

function Earphones() {
  return (
    <section className="sellers">
      <h2 className="sellers__title sellers__title-margin-bt">
        Trending Earphones
      </h2>
      <div className="tab container">
        <div className="tab__btn-wrapper">
          <button className="button-oval">Earbuds</button>
          <button className="button-oval button-oval_transparent button-oval_margin-l">
            Wireless
          </button>
          <button className="button-oval button-oval_transparent ">Wired</button>
        </div>
        <div className="tab__card-wrapper">
          <div className="card tab__card">
            <div className="card__product card__product_sky">
              <img
                className="card__img card__img_size-168"
                src={boat333}
                alt="Boat 333"
              />
              <div className="card__descr">
                <h4 className="card__text">Boat Rockerz 333</h4>
                <div className="card__rating">
                  <img src={redStart} alt="rating" />
                  <img src={redStart} alt="rating" />
                  <img src={redStart} alt="rating" />
                  <img src={redStart} alt="rating" />
                  <img src={redStart} alt="rating" />
                  <p className="card__rating-count">75 Reviews</p>
                </div>
                <p className="card__price">20$</p>
              </div>
            </div>
            <button className="card__btn btn-buy">Add to cart</button>
            <div className="card__discount">
              <p>Save 60%</p>
            </div>
          </div>

          <div className="tab__card card">
            <div className="card__product card__product_sky">
              <img className="card__img" src={boat234} alt="boat 234" />
              <div className="card__descr">
                <h4 className="card__text">Boat kerz 234</h4>
                <div className="card__rating">
                  <img src={redStart} alt="rating" />
                  <img src={redStart} alt="rating" />
                  <img src={redStart} alt="rating" />
                  <img src={redStart} alt="rating" />
                  <img src={redStart} alt="rating" />
                  <p className="card__rating-count">75 Reviews</p>
                </div>
                <p className="card__price">$40</p>
              </div>
            </div>
            <button className="card__btn btn-buy">Add to cart</button>
          </div>

          <div className="tab__card card">
            <div className="card__product card__product_sky">
              <img className="card__img" src={boat323} alt="boat 323" />
              <div className="card__descr">
                <h4 className="card__text">Boat Rockerz 323</h4>
                <div className="card__rating">
                  <img src={redStart} alt="rating" />
                  <img src={redStart} alt="rating" />
                  <img src={redStart} alt="rating" />
                  <img src={redStart} alt="rating" />
                  <img src={redStart} alt="rating" />
                  <p className="card__rating-count">75 Reviews</p>
                </div>
                <p className="card__price">$30</p>
              </div>
            </div>
            <button className="card__btn btn-buy">Add to card</button>
            <div className="card__discount card__discount_biruz">
              <p>Save 40%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Earphones;