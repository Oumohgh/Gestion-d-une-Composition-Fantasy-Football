 //7di m3a  budget//
 //let budget = 100
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
let budget = N(localStorage.getItem("budget"))  || 100;

//let budget = N(localStorage.getItem("budget")) || 100;

const budgetValue = document.getElementById("budgetValue");
afficherBudget();
let budgetChecker ;
let budgetrestant ;

let  nombreJou =11;
let  listJo


//jib data json 

//function ajouterJ

let a
 //function filtragebPost 

//function f terrain
function AjouterJouTerrain(){
    try {
      AjouterJ()
      
      
    } catch (error) {
    console.log("ce joueur n a pas ajoutee");  
    }
}
 //function ajouterJ
 function AjouterJ(){
 let poste;
   div_row.innerHTML = "";
    ListJ.forEach(element => { 

         let card = ` 
        <div class="player-card card">
          <img src="${element.photo}" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">${element.Nom}</h5>
            <p class="card-text small">${element.poste}</p>
            <p class="card-text small">${element.nationalite}</p>
            <div class="d-flex justify-content-between align-items-center">
              <span class="price">${element.prix}/span>
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
 
      