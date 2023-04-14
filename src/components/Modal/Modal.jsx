import "./modal.css";

import red__star from "../Card/img/red__star.png"
import skeleton from "../Card/img/BoatRockerz323.png"

function Modal(props) {
  const {
    color,
    discount,
    price = 20,
    rating = 5,
    title = "Card Text",
    image = { src: skeleton, alt: "headphons" },
  } = props;

  return (
    <div className="modal">
      <div className="card tab__card modal">
        <button onClick={() => props.close(false)} className="close">x</button>
        <div
          className={color ? "card__product_modal " + color : "card__product_modal green"}
        >
          <img className="card__img card__img_modal-size" src={image.src} alt={image.alt} />
          <div className="card__descr card__descr_modal">
            <h4 className="card__text">{title}</h4>
            <div className="card__rating">
              <img src={red__star} alt="rating" />
              <img src={red__star} alt="rating" />
              <img src={red__star} alt="rating" />
              <img src={red__star} alt="rating" />
              <img src={red__star} alt="rating" />
              <p className="card__rating-count">75 Reviews</p>
            </div>
            <p className="card__price">{price}$</p>
            <p className="card__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Repudiandae dicta laudantium quasi, neque culpa, veritatis sit facilis nisi repellat 
            nulla aliquid reiciendis quia architecto rerum vero fugiat saepe facere nesciunt quam 
            quisquam harum. Exercitationem in distinctio debitis dolorum adipisci atque ut sequi 
            iusto eveniet dolore! Pariatur corrupti odio est cumque.</p>
          </div>
        </div>
        <button className="card__btn btn-buy modal-btn">Add to cart</button>
        {discount ? (
          <div
            className={
              color
                ? `card__discount card__discount_${color}`
                : "card__discount"
            }
          >
            <p>Save {discount}%</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Modal;
