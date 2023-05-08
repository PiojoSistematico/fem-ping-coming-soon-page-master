import { useState, useRef } from "react";
import illustration from "./assets/illustration-dashboard.png";
import facebook from "./assets/icon-facebook.svg";
import twitter from "./assets/icon-twitter.svg";
import pinterest from "./assets/icon-pinterest.svg";

function isValidEmail(email) {
  return /^.+@[^\.].*\.[a-z]{2,}$/.test(email);
}

function App() {
  const [isValid, setIsValid] = useState(true);
  const inputRef = useRef();

  return (
    <main>
      <section className="main-section">
        <h1>
          PING<span>.</span>
        </h1>
        <h2>
          We are launching <span>soon!</span>{" "}
        </h2>
        <span className="subscribe-span">Subscribe and get notified</span>
        <form action="">
          <div className="input-section">
            <input
              className={isValid ? "normal-input" : "error-input"}
              ref={inputRef}
              type="text"
              placeholder="Your email address..."
            />
            <span className={isValid ? "hidden" : "error-message"}>
              Please provide a valid email address
            </span>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsValid(isValidEmail(inputRef.current.value));
            }}
          >
            Notify Me
          </button>
        </form>
      </section>
      <section className="image-section">
        <img src={illustration} alt="" />
      </section>
      <footer>
        <section className="social-links">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={pinterest} alt="" />
        </section>
        <p>&copy; Copyright Ping. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default App;
