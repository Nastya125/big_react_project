import { useEffect, useState } from "react";
import GET_headphons from "../service/http/GET_headphons";

import "./earphones.css";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import Slider from "../Slider/Slider";

function Earphones() {
  const [currentTab, setCurrentTab] = useState("Wiredless");
  const [showModal, setShowModal] = useState(false);
  const [headphonsList, setHeadphonsList] = useState([]);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    GET_headphons().then((res) => {
      setHeadphonsList(res);
    });
  }, []);

  function openModal(data) {
    setModalData(data);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setShowModal(false);
    document.body.style.overflow = "auto";
  }

  return (
    <section className="sellers">
      {showModal ? <Modal data={modalData} closeModal={closeModal} /> : null}
      <h2 className="sellers__title sellers__title-margin-bt">
        Trending Earphones
      </h2>
      <div className="tab container">
        <div className="tab__btn-wrapper">
          <TabButton
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            textContent={"Wired"}
          />
          <TabButton
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            textContent={"Wiredless"}
          />
        </div>

        {currentTab === "Wired" ? (
          <Tabs list={headphonsList} openModal={openModal} />
        ) : null}

        {currentTab === "Wiredless" ? (
          <Slider data={headphonsList} openModal={openModal} />
        ) : null}
      </div>
    </section>
  );
}

const Tabs = ({ list, openModal }) => {
  return (
    <div className="tab__card-wrapper">
      {list.map((item) => {
        return <Card key={item.id} data={item} openModal={openModal} />;
      })}
    </div>
  );
};

const TabButton = ({ currentTab, setCurrentTab, textContent }) => {
  return (
    <button
      onClick={() => setCurrentTab(textContent)}
      className={
        currentTab === textContent
          ? "button-oval button-oval_active"
          : "button-oval"
      }
    >
      {textContent}
    </button>
  );
};

export default Earphones;
