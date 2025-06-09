import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message ) {
        setError("Alla fält måste fyllas i.");
      setSuccess(false);
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Ogiltig e-postadress.");
      setSuccess(false);
    } else {
      setError("");
      setSuccess(true);

      console.log("Formulär skickat:", { name, email, message });

      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="contact-container">
      <h2>Kontakta oss</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        {error && <p className="error">{error}</p>}
        {success && <p className="success">Tack! Ditt meddelande har skickats.</p>}
        
        <input
          type="text"
          placeholder="Ditt namn"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Din e-post"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Ditt meddelande"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Skicka</button>
      </form>
    </div>
  );
}
