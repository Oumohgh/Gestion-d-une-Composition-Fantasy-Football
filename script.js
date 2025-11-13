 
 let budget = 100
// Liste de tous les joueurs disponibles
let joueurs = JSON.parse(localStorage.getItem("joueurs")) || [];
// Composition actuelle de l’équipe
let composition = JSON.parse(localStorage.getItem("composition")) ||
{
gardien: null,
defenseurs: [],
milieux: [],
attaquants: [],
};
//function ajouterJ

let a
 //function filtragebPost 


 //function ajouterJ
 function AjouterJ(){

   div_row.innerHTML = "";
    ListJ.forEach(element => {

         let card = ` 
        <div class="player-card card">
          <img src="..." class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">Nom</h5>
            <p class="card-text small">Poste • Pays</p>
            <div class="d-flex justify-content-between align-items-center">
              <span class="price">10 $</span>
              <div>
                <button class="btn btn-sm btn-success">➕ Ajouter</button>
                <button class="btn btn-sm btn-outline-secondary">✏</button>
              </div>
            </div>
          </div>
        </div>
        --> `

      div_row.innerHTML += card

    });

}
 
      