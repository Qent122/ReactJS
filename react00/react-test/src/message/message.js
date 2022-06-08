import "./message.css";

export default function Message(props) {
  return (
    <div className="message">
      <h2>Les props dans React</h2>
      <h3>Salut a toi {props.prenom}</h3>
      <p>{props.messagePasser}</p>
    </div>
  );
}
