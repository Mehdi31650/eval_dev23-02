/*
let message = "NNEESOOESEENNEEOOSEOSEEENNESENSSENNEESSOOEEENNEEOOSEOSEEENEENOOEESOOSEEEEEEENONSESENNSSENNEESSOOEEENNSSEENNSSEEENOONEEOOSEESEEEENNEESSOOEEENNEESOOEESENNESENSSEEENOONEEOOSEESEEEENNSSEEENNEESOOEESEEEENNEEOOSEOSEEENNEESSOOEEENNEESOOESEENNEEOOSEOSEEEENNOEEOSSEEEEENNEESOOEESOOEEENNEESOOESEENNSSEENNSSENNESNESSENNEEOOSEOSEEENNSSEENNSSEEENOONEEOOSEESENNEEOOSEOSEEEEEENNEESSOOEEENNEEOOSEOSEEENNESNESSENNEESOOEESENNSSENNESENSS";

setPos(0,300);
changeColor(color.red);


// Pour chaque lettre (parcours le tableau)
for(let i = 0 ; i < message.length ; i++) {
    let lettre = message[i];

    if(lettre == "N") {
        faceUp();
    } else if(lettre == "S") {
        faceDown();
    } else if(lettre == "O") {
        faceLeft();
    } else {
        faceRight();
    }
    forward(7);
}

*/

let tab = [];
function tonyStark(n){
    let somme = 0;
    for(let i = 0 ; i<n ; i++){
        tab.push(i);   
    } 
    if(tab[i]%3 == 0 && tab[i]%5 == 0 && tab[i]<n) {
        somme +=i;
    }return somme;
}
console.log (tonyStark(20));
