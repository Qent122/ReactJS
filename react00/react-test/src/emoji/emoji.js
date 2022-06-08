import "./emoji.css";

const montrerEmoji = (event) => alert(event.target.id);

// export default function Emoji() {
//   return (
//     <ul>
//       <li>
//         <button onClick={(event) => alert(event.target.id)}>
//           <span role="img" id="crane">
//             💀
//           </span>
//         </button>
//       </li>
//       <li>
//         <button onClick={montrerEmoji}>
//           <span role="img" id="soucoupe">
//             🛸
//           </span>
//         </button>
//       </li>
//       <li>
//         <button onClick={(event) => alert(event.target.id)}>
//           <span role="img" id="adn">
//             🧬
//           </span>
//         </button>
//       </li>
//     </ul>
//   );
// }

const emojis = [
  {
    emoji: "💀",
    name: "crane",
  },
  {
    emoji: "🛸",
    name: "soucoupe",
  },
  {
    emoji: "🧬",
    name: "adn",
  },
];

// const planetes = ["Terre", "Venus", "Mercure"];

// export default function Emoji() {
//   return (
//     <>
//       {planetes.map((planete) => (
//         <div key={planete}>{planete}</div>
//       ))}
//     </>
//   );
// }

export default function Emoji() {
  return (
    <>
      <ul>
        {emojis.map((emoji) => (
          <li>
            {emoji.emoji} {emoji.name}
          </li>
        ))}
      </ul>
    </>
  );
}
