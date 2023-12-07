console.log("Partie2");






/*
Écrire une fonction syracuse qui prend un nombre en entrée, et qui retourne :
- le triple du nombre + 1 si le nombre est impair
- la moitié du nombre sinon
*/
function syracuse(a){
    if (a%2==1){
        return 3*a + 1;     
    }else {
        return a/2;
    }
}
console.log (syracuse(8));
/*
Écrire une fonction countDown qui reçoit un nombre positif en entrée, et qui affiche dans la console le compte à rebours jusqu'à 0 en partant de ce nombre.
Par exemple, l'appel à `countDown(3)` devra afficher
3
2
1
0
*/
function countDown(a){
    if(a => 0){
        for(let i= a; i>=0; i--){
            console.log(i);
         }
    }
}
countDown(9);


/*
Écrire une fonction fastCountDown qui reçoit un nombre en entrée et qui affiche un compte à rebours en partant de cette valeur. La valeur sera divisée par 2 à chaque fois, et le compte à rebours s'arrête quand la valeur devient inférieur à 0.1.
Par exemple, l'appel à `fastCountDown(3)` devra afficher
3
1.5
0.75
0.375
0.1875
*/
/*function fastCountDown(a){
    for(let i = a; i>=0.1; i = i/2){
            console.log(i);
    }
}
fastCountDown(3);

function fastCountDown(a){
    let i = n;
    while(i>= 0.1) {
        console.log
    }
}*/

/*
Écrire une fonction evenNumbers qui reçoit deux nombres en entrées et qui affiche tous les nombres pairs entre ces deux nombres.
Par exemple, l'appel à `evenNumbers(5,14)` devra afficher
6
8
10
12
*/

/*
Sur la page wikipedia du PGCD (pas besoin de savoir ce que c'est), on peut trouver l'algorithme récursif suivant :
```
fonction euclide(a, b)
    si b = 0 alors retourner a
    sinon retourner euclide(b, a modulo b)
```
Écrire cette fonction.
*/

/*
À la main, calculer `euclide(6,10)`.
*/

console.log("Partie 3 : Tableau");

// Création d'un tableau cases numérotées automatiquement 0, 1, 2


let t= [123,45,54];
t[1]=20;
console.log(t[0]);
let sauvegarde = t[2];
console.log(t);
