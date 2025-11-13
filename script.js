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