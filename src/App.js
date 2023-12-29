import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

import { Form } from "./components/Form/Form";
import { List } from "./components/List/List";
import { Stat } from "./components/Stat/Stat";

function App() {
  return (
    <>
      <div className="container">
        <header className="header">
          <p>ADMIN.BIKE-BOOKING.COM</p>
        </header>
        <main className="main">
          <List />
          <div className="main-div">
            <Form />
            <Stat />
          </div>
        </main>
        <footer className="footer">
          <p className="footer-p">
            <span className="footer-span">Developer:</span> Andrew Ketsko
          </p>
        </footer>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
