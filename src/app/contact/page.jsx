import React from "react";
import "@/components/style/contact.css";

const Contact = () => {
  return (
    <div className="form_container">
      <div className="form_left">
        <h1>Contact Us</h1>
        <form>
          <input type="text" placeholder="Username *" required />
          <input type="email" placeholder="Email *" required />
          <input type="text" className="message" placeholder="Message *" required />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
