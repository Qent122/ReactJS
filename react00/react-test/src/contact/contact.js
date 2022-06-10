import "./contact.css";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setText] = useState("");
  const [jour, setJour] = useState("Lundi");

  const valider = (event) => {
    event.preventDefault();
    alert(
      `Ravis de vous revoir : ${prenom} ${name},
      Identifiant : ${email},
      Votre Message : ${textarea},
      Jour : ${jour}, `
    );
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleJour = (event) => {
    setJour(event.target.value);
  };

  console.log("jour : ", jour);
  console.log("Nom :", name);
  console.log("Prénom :", prenom);
  console.log("Mail :", email);
  console.log("Commentaire :", textarea);

  return (
    <div className="contact">
      <h1>Contact</h1>
      <form onSubmit={valider}>
        <label>
          Mr
          <input
            type="checkbox"
            value={name}
            onChange={(element) => setName(element.target.value)}
            required
          />
          Mme
          <input
            type="checkbox"
            value={name}
            onChange={(element) => setName(element.target.value)}
            required
          />
        </label>
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
          <textarea
            value={textarea}
            placeholder="Saisissez votre commentaire"
            onChange={handleChange}
          />
        </label>
        <label>
          Jour de la semaine :
          <select value={jour} onChange={handleJour}>
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
