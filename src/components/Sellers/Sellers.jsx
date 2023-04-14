import { useEffect, useState } from "react";
import "./sellers.css";
// import { request } from "../service/http/http";
import GET_headphons from "../service/http/GET_headphons";
import Card from "../Card/Card";
import "../Card/card.css";
import Modal from "../Modal/Modal";
import "../Modal/modal.css";

function Sellers() {
  const [currentTab, setCurrentTab] = useState("Wiredless");
  const [showModal, setShowModal] = useState(false);
  const [headphonsList, setHeadphonsList] = useState([]);

  useEffect(() => {
    GET_headphons()
      .then((res) => {
        setHeadphonsList(res);
        console.log(res);
      })
      .then(console.log(headphonsList));
  }, []);

  function openModal() {
    setShowModal(true);
  }

  return (
    <section className="sellers">
      {showModal ? (
        <Modal
          close={setShowModal}
          color={"blue"}
          price={20}
          rating={5}
          title={"Card Text"}
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
          <div className="tab__card-wrapper">
            <Card discount={60} title="Boat Rockerz 333" price="20" />
            <Card color="blue" title="Boat kerz 234" price="40" />
            <Card
              discount={40}
              color="purp"
              title="Boat Rockerz 323"
              price="30"
            />
          </div>
        ) : null}

        {currentTab === "Wiredless" ? (
          <div className="tab__card-wrapper">
            <Card color="blue" title="Boat kerz 234" price="40" />
            <Card discount={60} title="Boat Rockerz 333" price="20" />
            <Card color="blue" title="Boat kerz 234" price="40" />

            <Card
              discount={40}
              color="purp"
              title="Boat Rockerz 323"
              price="30"
            />
            <Card color="blue" title="Boat kerz 234" price="40" click={openModal}/>
          </div>
        ) : null}
      </div>
    </section>
  );
}

const Tabs = (list) => {
  <div className="tab__card-wrapper">
    {list.map((itemList) => {
      <Card
        discount={itemList.discount}
        title={itemList.title}
        price={itemList.price}
        image={itemList.image}
      />;
    })}
  </div>;
};

export default Sellers;
