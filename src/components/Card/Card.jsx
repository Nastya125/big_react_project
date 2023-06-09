import "./card.css";
import { BoatRockerz333, BoatKerz234, BoatRockerz323 } from "./img";
import { MainBtn } from "../Buttons";
import RatingLevel from "../RatingLevel/RatingLevel";

function Card({ data, openModal }) {
  const {
    color = "",
    discount,
    price = 20,
    rating = 5,
    reviews,
    title = " Card Text",
    image = { src: BoatRockerz333, alt: "card__headphons" },
  } = data;
  return (
    <div className="card tab__card" onClick={() => openModal(data)}>
      <div className={color ? "card__product " + color : "card__product green"}>
        <img className="card__img" src={image.src} alt={image.alt} />
        <div className="card__descr">
          <h4 className="card__text">{title}</h4>
          <RatingLevel rating={rating} reviews={reviews} />
          <p className="card__price">${price}</p>
        </div>
      </div>
      <MainBtn textContent={"Add to cart"} />
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
