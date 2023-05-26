import React, { useState } from "react";
import "./contact.scss";
export default function Contact() {
  const [massage, setMassage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMassage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Massage"></textarea>
          <button type="submit">send</button>
          {massage && <span> Thanks,I'll reply ASAP :) </span>}
        </form>
      </div>
    </div>
  );
}
