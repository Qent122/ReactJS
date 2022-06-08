import "./produit.css";

const montrerId = (event) => alert(event.target.id);

const produits = [
  { name: "Pomme", id: 1 },
  { name: "Fraise", id: 2 },
  { name: "Poire", id: 3 },
];

export default function Produit() {
  const listeProduits = produits.map((produit) => (
    <li key={produit.id}>
      <button id={produit.id} onClick={montrerId}>
        {produit.name}
      </button>
    </li>
  ));

  return (
    <div className="produit">
      <ul>{listeProduits}</ul>
    </div>
  );
}
