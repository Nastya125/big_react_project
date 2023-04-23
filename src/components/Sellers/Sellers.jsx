import { useEffect, useState } from "react";
import GET_headphons from "../service/http/GET_headphons";

import "./sellers.css";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";

function Sellers() {
  const [currentTab, setCurrentTab] = useState("Wired");
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
      {showModal ? (
        <Modal
          data={modalData}
          closeModal={closeModal}
        />
      ) : null}
      <h2 className="sellers__title sellers__title-margin-bt">Top Sellers</h2>
      <div className="tab container">
        <div className="tab__btn-wrapper">
          <button
            onClick={() => setCurrentTab("Wired")}
            className={
              currentTab === "Wired"
                ? "button-oval button-oval_active"
                : "button-oval"
            }
          >
            Wired
          </button>
          <button
            onClick={() => setCurrentTab("Wiredless")}
            className={
              currentTab === "Wiredless"
                ? "button-oval button-oval_active"
                : "button-oval"
            }
          >
            Wiredless
          </button>
        </div>

        {currentTab === "Wired" ? (
          <Tabs list={headphonsList} openModal={openModal} />
        ) : null}

        {currentTab === "Wiredless" ? (
          <div className="tab__card-wrapper">
            <Card
              openModal={openModal}
              data={headphonsList[0] !== undefined ? headphonsList[1] : {}}
            />
          </div>
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

export default Sellers;
