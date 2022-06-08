import "./produit.css";

const montrerId = (event) => alert(event.target.id);

const produits = [
  { name: "Pomme", id: 1 },
  { name: "Fraise", id: 2 },
  { name: "Poire", id: 3 },
];

export default function Produit() {
  return (
    <div className="produit">
      <ul>
        {produits.map((produit) => (
          <li key={produit.name}>
            <button onClick={montrerId}>
              <span role="img" id={produit.id}>
                {produit.name}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
