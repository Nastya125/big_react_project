import BoatRockerz333 from '..//../img/BoatRockerz333.png';
import redStart from '..//../img/red__star.png';
import BoatKerz234 from '..//../img/BoatKerz234.png';
import BoatRockerz323 from '..//../img/BoatRockerz323.png';

function Sellers() {
  return (
    <section className="sellers">
      <h2 className="sellers__title sellers__title-margin-bt">Top Sellers</h2>
      <div className="tab container">
        <div className="tab__btn-wrapper">
          <button className="button-oval">Top Picks</button>
          <button className="button-oval button-oval_transparent">Watches</button>
        </div>
        <div className="tab__card-wrapper">
          <div className="card tab__card">
            <div className="card__product">
              <img
                className="card__img"
                src={BoatRockerz333}
                alt="Boat Rockerz 333"
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
            <div className="card__product card__product_blue ">
              <img className="card__img" src={BoatKerz234} alt="" />
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
            <div className="card__product card__product_purp">
              <img className="card__img" src={BoatRockerz323} alt="" />
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
            <div className="card__discount card__discount_purp">
              <p>Save 40%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sellers;
