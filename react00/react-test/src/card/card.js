import "./card.css";

const cardProduits = [
  {
    id: 1,
    img: "https://imgs.search.brave.com/D6gLXu5qApNjnKMpUYyIN3NaVgoPs_VnkIH8QZTWd4g/rs:fit:924:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5D/ZTVrdUZOTEltNW54/Ny1rVXNEeTVnSGFE/eiZwaWQ9QXBp",
    alt: "lunette avec entonoir pour goute",
    titre: "Goute Direct",
    description:
      "Un appareil revolutionnaire pour mettre des goutes dans les yeux !",
    prix: "49.99$",
    Avis: "Avis: 84",
  },
  {
    id: 2,
    img: "https://imgs.search.brave.com/sDNP0IkVDuruFMfQ6TsJyF1LPCJZWgxAglsK2C_3bBY/rs:fit:688:324:1/g:ce/aHR0cDovL3N0YXRp/Yy5oaXRlay5mci9p/bWcvYWN0dWFsaXRl/L2lfZ2FkZ2V0LWph/cG9uYWlzLWlsbHVz/dC5qcGc",
    alt: "masque gainnage",
    titre: "Masque gainnage",
    description:
      "Pour raffermir votre visage vous pouvez utiliser ce genre de masque élastique anti-sexy au possible.",
    prix: "19.99$",
    Avis: "Avis: 278",
  },
  {
    id: 3,
    img: "https://imgs.search.brave.com/jdimiCS0YtS24Xz_Zb0NLu_Um4RseplCph5EJr3JL60/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5L/cGhoV2lhZ29CUGpQ/UmhtenlrQTFnSGFF/NyZwaWQ9QXBp",
    alt: "ventillteur a nouille",
    titre: "Venti-Nouille",
    description:
      "Un appareil revolutionnaire pour manger des nouilles sans se bruler !",
    prix: "39.99$",
    Avis: "Avis: 823",
  },
  {
    id: 4,
    img: "https://static.hitek.fr/img/actualite/japonais-gadget-beaute1.jpg",
    alt: "anti-cerne",
    titre: "L'anti-cerne",
    description:
      "Si vous avez des problèmes de sommeil avec des cernes trop marquées, ce gadget est fait pour vous.",
    prix: "9.99$",
    Avis: "Avis: 1823",
  },
  {
    id: 5,
    img: "https://static.hitek.fr/img/actualite/1120.jpg",
    alt: "correcteur de voix",
    titre: "Le correcteur pour avoir une belle voix",
    description:
      "Vous pensez avoir une voix de canard et vous n'aimez pas du tout ça ? Pas de souci ! Avec cet accessoire, vous pourrez changer votre voix. Un outil encore très étrange...",
    prix: "15.99$",
    Avis: "Avis: 5823",
  },
];

export default function Card() {
  const listeCard = cardProduits.map((produit) => (
    <figure key={produit.id}>
      <img src={produit.img} alt={produit.alt} />
      <figcaption>
        <h2>{produit.titre}</h2>
        <p>{produit.description}</p>
        <h3>{produit.prix}</h3>
        <h4>{produit.Avis}</h4>
      </figcaption>
    </figure>
  ));
  return (
    <div className="card">
      <h2>Meilleures ventes</h2>
      {listeCard}
    </div>
  );
}
