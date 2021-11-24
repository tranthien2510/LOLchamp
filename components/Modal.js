import React from "react";
import "../scss/Components/_modal.scss";
import { useInfoChampContext } from "../common/Context";
import * as actions from "../actions";
import LoadingScreen from "./LoadingScreen";

function Modal() {
  const { stateInfoChamp, dispatchInfoChamp } = useInfoChampContext();

  const { info, showLoading, showModal } = stateInfoChamp;
  
  const handleCloseModal = () => {
    dispatchInfoChamp(actions.hideModal());
  };

  const renderModalBox = () => {
    if (showLoading === true) {
      return <LoadingScreen myFlag={true} />;
    }
    if (Object.keys(info).length === 0) {
      return <LoadingScreen onClick={handleCloseModal} myFlag={false} />;
    }

    return (
      <div className="modal-box row">
        <div className="box-left col c-3 m-0">
          <img
            src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/rg-champion-aatrox/en_US/ae9700f463a66363e1d0a462e65bc8e9aa685582/assets/img/share/share-1200x630.jpg"
            alt=""
          />
        </div>
        <div className="box-right col c-9  m-12">
          <div className="info-wrapper">
            <div className="title">
              <h1 className="name">Aatrox</h1>
              <h2 className="sub-name">the Darkin Blade</h2>
              <span className="close" onClick={handleCloseModal}>
                X
              </span>
            </div>
            <div className="content">
              <div className="content-group-1">
                <div className="avatar">
                  <div className="label">avatar:</div>
                  <img
                    src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/rg-champion-aatrox/en_US/ae9700f463a66363e1d0a462e65bc8e9aa685582/assets/img/share/share-1200x630.jpg"
                    alt=""
                  />
                </div>
                <div className="classify">
                  <div className="label">classify:</div>
                  <img
                    src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/rg-champion-aatrox/en_US/ae9700f463a66363e1d0a462e65bc8e9aa685582/assets/img/share/share-1200x630.jpg"
                    alt=""
                  />
                  <img
                    src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/rg-champion-aatrox/en_US/ae9700f463a66363e1d0a462e65bc8e9aa685582/assets/img/share/share-1200x630.jpg"
                    alt=""
                  />
                </div>
              </div>

              <div className="content-group-2">
                <div className="ability">
                  <div className="label">Skill:</div>
                  <div className="skill">
                    <img
                      src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/rg-champion-aatrox/en_US/ae9700f463a66363e1d0a462e65bc8e9aa685582/assets/img/share/share-1200x630.jpg"
                      alt=""
                    />
                    <img
                      src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/rg-champion-aatrox/en_US/ae9700f463a66363e1d0a462e65bc8e9aa685582/assets/img/share/share-1200x630.jpg"
                      alt=""
                    />
                    <img
                      src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/rg-champion-aatrox/en_US/ae9700f463a66363e1d0a462e65bc8e9aa685582/assets/img/share/share-1200x630.jpg"
                      alt=""
                    />
                    <img
                      src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/rg-champion-aatrox/en_US/ae9700f463a66363e1d0a462e65bc8e9aa685582/assets/img/share/share-1200x630.jpg"
                      alt=""
                    />
                    <img
                      src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/rg-champion-aatrox/en_US/ae9700f463a66363e1d0a462e65bc8e9aa685582/assets/img/share/share-1200x630.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="content-group-3">
                <div className="description">
                  <div className="label">Description: </div>
                  <p className="description-champ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Harum eligendi consequatur delectus deleniti. Quod
                    accusamus, sed itaque, accusantium culpa facere ipsa, hic
                    aut qui quisquam cumque. Veritatis officiis vitae illum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`modal champ-info ${showModal && "active"}`}>
      <div className="modal-wrapper container">{renderModalBox()}</div>
    </div>
  );
}

export default Modal;
