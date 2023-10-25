import React from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import { useState } from "react";
import ProfileModal from "../ProfileModal.jsx/ProfileModal";
export const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>
      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span> In Relationship</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span> Lagos</span>
      </div>

      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span> GoMyCode </span>
      </div>
      <button className="button logout-button">Logout</button>
    </div>
  );
};
