import { useState } from "react";
import Card from "../Card/Card";

function Sellers() {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <section className="sellers">
      <h2 className="sellers__title sellers__title-margin-bt">Top Sellers</h2>
      <div className="tab container">
        <div className="tab__btn-wrapper">
          <button
            onClick={() => setCurrentTab(0)}
            className={
              currentTab === 0
                ? "button-oval button-oval_active"
                : "button-oval"
            }
          >
            Top Picks
          </button>
          <button
            onClick={() => setCurrentTab(1)}
            className={
              currentTab === 1
                ? "button-oval button-oval_active"
                : "button-oval"
            }
          >
            Watches
          </button>
        </div>

        {currentTab === 0 ? (
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

        {currentTab === 1 ? (
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
            <Card color="blue" title="Boat kerz 234" price="40" />
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default Sellers;
