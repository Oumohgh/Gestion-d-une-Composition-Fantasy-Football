 //7di m3a  budget//
 //let budget = 100
// Liste de tous les joueurs disponibles
//let joueurs = JSON.parse(localStorage.getItem("joueurs")) || [];
// Composition actuelle de l’équipe
let composition = JSON.parse(localStorage.getItem("composition")) ||
{
gardien: null,
defenseurs: [],
milieux: [],
attaquants: [],
};
let budget = 100;
//fetch('data.json')
 //   .then(response => response.json())
  //  .then(data => listeJoueurs(data))
   // .catch(error => console.error('Error loading JSON:', error));
//async function getData(){
   // const Joueurs = await fetch('/data.json')
   // const dataJoueurs = await Joueurs.json();

   // return dataJoueurs;
//}

async function loadPlayers() {
  
  const response = await fetch("/data.json");
  const data = await response.json();

  // tableau li dakhel data;player
  
  const joueurs = data.player;
//console.log("data.player")

  const list = document.getElementById("playersList");

  list.innerHTML = ""; 

  joueurs.forEach(joueurr => {
    list.innerHTML += `
      <div class="player-card card p-2 mb-2 d-flex align-items-center gap-2">
        <img src="${joueurr.photo}" style="width:50px;height:50px;object-fit:cover;border-radius:6px;">
        <div>
          <div><strong>${joueurr.nom}</strong></div>
          <div class="text-muted small">${joueurr.poste} • ${joueurr.nationalite}</div>
          <div class="fw-bold">${joueurr.prix} M$</div>
        </div>
      </div>
    `;
  });
}
loadPlayers();


function ajouterDCompition (playerId,slotElement) {
  const joueur =joueurs.find(j =>j.id ===playerId);
  if(!joueur)
    return;
 slotElement.innerHTML = `
 <div class="player-in-slot">
 <img src="${joueur.photo}">
  <div>
    <strong>${joueur.nom}</strong><br>
                <small>${joueur.poste}  ${joueur.prix}M$</small>
  </div>
  </div>
  `;
     joueurs = joueurs.filter(j => j.id !==playerId)
  localStorage.setItem("joueurs",JSON.stringify(joueurs));



       console.log("Joueurs ajout dans la composition ")
}





button.addEventListener("click", () => {
}