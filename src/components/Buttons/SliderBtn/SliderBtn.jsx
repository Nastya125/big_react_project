import "./sliderBtn.css";
import Vector from "./img/Vector.png";

const SliderBtn = ({ direction = "right", className, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className={`slider-btn ${className} ${
        direction === "left" ? "slider-btn_left" : "slider-btn_right"
      }`}
    >
      <img src={Vector} alt="" />
    </button>
  );
};

export default SliderBtn;
