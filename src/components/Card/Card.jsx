import "./card.css";
import { BoatRockerz333, redStart, BoatKerz234, BoatRockerz323 } from "./img";

function Card(props) {
  const {
    color,
    discount,
    price = 20,
    rating = 5,
    title = "Card Text",
    image = { src: BoatRockerz333, alt: "card__headphons" }
  } = props;
  return (
    <div className="card tab__card" onClick={() => props.click()} >
      <div className={color ? "card__product " + color : "card__product green"}>
        <img
          className="card__img"
          src={image.src}
          alt={image.alt}
        />
        <div className="card__descr">
          <h4 className="card__text">{title}</h4>
          <div className="card__rating">
            <img src={redStart} alt="rating" />
            <img src={redStart} alt="rating" />
            <img src={redStart} alt="rating" />
            <img src={redStart} alt="rating" />
            <img src={redStart} alt="rating" />
            <p className="card__rating-count">75 Reviews</p>
          </div>
          <p className="card__price">{price}$</p>
        </div>
      </div>
      <button className="card__btn btn-buy">Add to cart</button>
      {discount ? (
        <div
          className={
            color ? `card__discount card__discount_${color}` : "card__discount"
          }
        >
          <p>Save {discount}%</p>
        </div>
      ) : null}
    </div>
  );
}

export default Card;
