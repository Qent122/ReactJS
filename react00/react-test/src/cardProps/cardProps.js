import "./cardProps.css";

export default function Message(props) {
  return (
    <figure id="cardProps">
      <img src={props.img} alt={props.alt} />
      <figcaption>
        <h2>{props.titre}</h2>
        <p>{props.description}</p>
        <h3>{props.prix}</h3>
        <h4>{props.Avis}</h4>
      </figcaption>
    </figure>
  );
}
