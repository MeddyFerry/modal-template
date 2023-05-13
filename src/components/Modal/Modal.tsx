import React, { useState } from "react";
import "./modal.scss";
import myImage from "../../assets/waving.png?inline";
import Connexion from "../../services/Connexion";

function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const token = await Connexion.login(username, password);
      localStorage.setItem("token", token);

      // Réinitialisez le formulaire et fermez la modal
      setShowModal(false);
      console.log("Connexion réussie");
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
    }
  };

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
              <form className="modal-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    className="form-input"
                    type="text"
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />

                  <input
                    className="form-input"
                    type="password"
                    id="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
