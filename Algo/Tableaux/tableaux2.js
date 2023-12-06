console.log("Partie 2");
let tablo = [15,65,39,26];

// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
function lastTab(nameTab){
    console.log(nameTab[nameTab.length - 1]);
}

// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
function returnLast(nameTab){
    return nameTab[nameTab.length - 1];
}

// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
function minReturn(nameTab){
    let a = nameTab[0];
    for(let i=0; i<nameTab.length; i++){
        if (a>=nameTab[i]){
        a = nameTab[i];
        }
    }   return a;
}
console.log (minReturn(tablo));

// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.
function maxReturn(nameTab){
    let a = nameTab[0];
    for(let i=0; i<nameTab.length; i++){
        if (a<=nameTab[i]){
            a = nameTab[i];
        }
    }   return a;
}
console.log (maxReturn(tablo));


// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.
function nbReturn(nameTab,x){
    let a = 0;
    for(let i=0; i<nameTab.length; i++){
        if (x == nameTab[i]){ 
            a++;
        }
    }   
    return a;   
}
console.log (nbReturn(tablo,39));

        

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.
function trueReturn(nameTab,x){
    let a = 0;
    for(let i=0; i<nameTab.length; i++){
        if (x == nameTab[i]){
            return true;
        } else{
        }    
    } 
    return false;
}
console.log (trueReturn(tablo,15));

// Note : il y a une variante plus compliquée de cet exo, tout en bas de la feuille !



// Créer un tableau qui contient [1,2,3,...,7777].
function increTab(){
    let tab1 = [];
    for(let i = 1 ; i<7778 ; i++){
        tab1.push(i);   
    } 
    return tab1;
}
console.log (increTab());

// Créer un tableau qui contient [10,20,30,...,77770].
function increTab(){
    let tab1 = [];
    for(let i = 10 ; i<77771 ; i+=10){
        tab1.push(i);   
    } 
    return tab1;
}
console.log (increTab());

// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].
function increTab(){
    let tab1 = [];
    for(let i = 5 ; i<38890 ; i+=5){
        tab1.push(i);   
    } 
    return tab1;
}
console.log (increTab());


// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12])); // doit afficher [1,45,88,54]

function suprTab(){
    let tab1 = [1,45,88,54,23,-100,12];
    for(let i = 0 ; i < tab1.length ; i++){
        if (tab1[i]<50){
                    tab1.pop(i);
        }
    } 
    return tab1;
}
console.log (suprTab());




// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.


    let t1 = [1,45,88,54,26];

function returnTab(){
    let a = t1[0];
    let b = t1[1];
    let c = t1[2];
    for(let i=0; i<t1.length; i++){
        if (a<=t1[i]){
            a = t1[i];
        }
        if (a<b<c){
            return c;
        } else if (a<b>c) {
            return b;    
        }else {
            return a;
        }
    }   
    return a;
}
console.log (returnTab());


// [Bonus] Suite de l'exo de recherche de valeur : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?


