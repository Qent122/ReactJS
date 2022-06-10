import "./contact.css";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setText] = useState("");

  const valider = (event) => {
    event.preventDefault();
    alert(`Ravis de vous revoir : ${prenom} ${name}Identifiant : ${email}  `);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  console.log("Nom :", name);
  console.log("Prénom :", prenom);
  console.log("Mail :", email);
  console.log("Commentaire :", textarea);

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
            required
          />
        </label>
        <label>
          Prénom :
          <input
            type="text"
            value={prenom}
            onChange={(element) => setPrenom(element.target.value)}
            required
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
        <label>
          Commentaire :
          <textarea
            value={textarea}
            placeholder="Saisissez votre commentaire"
            onChange={handleChange}
          />
        </label>
        <label>
          Jour de la semaine :
          <select>
            <option value="lundi">Lundi</option>
            <option value="mardi">Mardi</option>
            <option value="mercredi">Mercredi</option>
            <option value="jeudi">Jeudi</option>
            <option value="vendredi">Vendredi</option>
            <option value="samedi">Samedi</option>
            <option value="dimanche">Dimanche</option>
          </select>
        </label>
        <input id="submit" type="submit" />
      </form>
    </div>
  );
}
