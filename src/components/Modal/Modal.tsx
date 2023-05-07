import React from "react";
import "./modal.scss";
import myImage from "../../assets/waving.png?inline";

function Modal() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div>
      {!showModal && (
        <button className="open-modal-btn" onClick={() => setShowModal(true)}>
          Connexion
        </button>
      )}

      {showModal && (
        <div>
          <div className="modal-overlay"></div>
          <div className="modal-container">
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-title">
                  <img
                    src={myImage}
                    alt="Description de l'image"
                    className="modal-img"
                  />
                  <h1> Welcome </h1>
                </div>
                <h2>Veuillez vous connecter</h2>
              </div>
              <form
                className="modal-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setShowModal(false);
                  console.log("envoyé");
                }}
              >
                <div className="form-group">
                  <input
                    className="form-input"
                    type="email"
                    id="email"
                    placeholder=" test@gmail.com"
                  />

                  <input
                    className="form-input"
                    type="password"
                    id="password"
                    placeholder=" Mot de passe"
                  />
                </div>

                <div className="modal-actions">
                  <button
                    className="cancel-btn"
                    onClick={() => setShowModal(false)}
                  >
                    Annuler
                  </button>
                  <button className="submit-btn" type="submit">
                    Connexion
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
