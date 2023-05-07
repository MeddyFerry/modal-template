import Modal from "./components/Modal/Modal";
import Header from "./components/Header/Header";

import "./app.scss";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header>
        <Modal />
      </Header>

      <Footer />
    </div>
  );
}

export default App;
