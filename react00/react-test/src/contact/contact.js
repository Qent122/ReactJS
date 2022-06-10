import "./contact.css";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");

  const valider = (event) => {
    event.preventDefault();
    alert(`Votre prenom est : ${prenom}`);
  };

  console.log(name);
  console.log(prenom);
  console.log(email);

  return (
    <div className="contact">
      <h1>Contact</h1>
      <form onSubmit={valider}>
        <label>
          Nom :
          <input
            type="text"
            value={name}
            onChange={(element) => setName(element.target.value)}
          />
        </label>
        <label>
          Prénom :
          <input
            type="text"
            value={prenom}
            onChange={(element) => setPrenom(element.target.value)}
          />
        </label>
        <label>
          Email :
          <input
            type="email"
            value={email}
            onChange={(element) => setEmail(element.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}
