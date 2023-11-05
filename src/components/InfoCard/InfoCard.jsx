// import React from "react";
// import "./InfoCard.css";
// import { UilPen } from "@iconscout/react-unicons";
// import { useState } from "react";
// //import ProfileModal from "../ProfileModal.jsx/ProfileModal";
// export const InfoCard = () => {
//   return (
//     <div className="InfoCard">
//       <div className="infoHead">
//         <h4>Your Info</h4>
//         <div>
//           <UilPen width="2rem" height="1.2rem" />
//           {/* <UilPen
//             width="2rem"
//             height="1.2rem"
//             onClick={() => setModalOpened(true)}
//           /> */}

//           {/* <ProfileModal
//             modalOpened={modalOpened}
//             setModalOpened={setModalOpened}
//           /> */}
//         </div>
//       </div>
//       <div className="info">
//         <span>
//           <b>Status </b>
//         </span>
//         <span> In Relationship</span>
//       </div>

//       <div className="info">
//         <span>
//           <b>Lives in </b>
//         </span>
//         <span> Lagos</span>
//       </div>

//       <div className="info">
//         <span>
//           <b>Works at </b>
//         </span>
//         <span> GoMyCode </span>
//       </div>
//       <button className="button logout-button">Logout</button>
//     </div>
//   );
// };

//BACKUP;
import React from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import { useState } from "react";
import ProfileModal from "../InfoCard/ProfileModal.jsx/ProfileModal";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          {/* <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          /> */}
          {/* {console.log(modalOpened)} */}
          {/* <p>click me</p> */}

          {/* <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          /> */}

          {/* <Button className="btn btn-primary" onClick={handleShow}>
            Launch demo modal
          </Button> */}

          <UilPen width="2rem" height="1.2rem" onClick={handleShow} />

          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you are reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>

      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>in Relationship</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Multan</span>
      </div>

      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Zainkeepscode inst</span>
      </div>

      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;
