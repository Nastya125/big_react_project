import "./modal.css";
import Overlay from "../Overlay/Overlay";
import skeleton from "../Card/img/BoatRockerz323.png";
import { MainBtn, CloseBtn } from "../Buttons";
import RatingLevel from "../RatingLevel/RatingLevel";

function Modal({ data, closeModal, setCountItems }) {
  const {
    color = "green",
    discount,
    price,
    rating,
    title,
    description,
    reviews,
    image = { src: skeleton, alt: "headphons" },
  } = data;

  return (
    <Overlay close={closeModal}>
      <div className={`${color} modal`}>
        <CloseBtn close={closeModal} />
        <div className="modal__content">
          <img
            className="modal__content__img"
            src={image.src}
            alt={image.alt}
          />
          <div>
            <h2 className="modal__content__title">{title}</h2>
            <p className="modal__content__text">{description}</p>
            <div className="modal__content__rating">
              <RatingLevel rating={rating} reviews={reviews} isModal={true}/>
            </div>
            <div className="modal__content__price">Price: {price}</div>
            <div className="modal__content__description">{description}</div>
            <div className="modal__content__btn">
              <MainBtn onClick={setCountItems} textContent={"Buy now"} />
            </div>
          </div>
        </div>
      </div>
    </Overlay>
  );
}

export default Modal;
