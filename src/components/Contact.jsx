import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        "template_ekzz17s",
        formRef.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then((res) => {
        alert("Done!");
      })
      .catch((err) => alert("Upss!"));

    formRef.current.reset();
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef} className="contact">
      <div>
        <input
          required
          type="text"
          name="from_name"
          autoComplete="off"
          placeholder="Name"
        />
        <input
          required
          type="email"
          name="user_email"
          autoComplete="off"
          placeholder="E-mail"
        />
        <textarea
          required
          name="message"
          autoComplete="off"
          placeholder="Message"
        />
        <input type="submit" value="SEND" />
      </div>
    </form>
  );
};

export default Contact;
