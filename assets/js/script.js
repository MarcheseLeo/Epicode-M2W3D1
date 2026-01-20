/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(a, b) {

    if(!a || !b){
        alert("Devi inserire un numero valido")
    } else if(a === b){
        return (a+b)*3
    }else {
        return a + b
    }
    
}

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n){
    const min = 20
    const max = 100
    if(!n){
        alert("Devi inserire un numero valido")
    }else if(n>min && n<= max || n===400){
        return true
    }else{
        return false
    }
}


/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(string){
    if(!string || string.length === 1 ){
        alert("Devi inserire una stringa valida")
    }else {
        let nuovaStringa = string.split("").reverse().join("")
       return nuovaStringa
    }
   
}
/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(string){
    if(!string){
        alert("Devi inserire una stringa valida")
    }else {
        let arr = string.split(" ")
        console.log(arr)
        let nuovaStringa = ""
        arr.forEach(element => {
            // for(let i = 0; i < element.length; i ++){
            //     if(i==0){
            //         nuovaStringa += element[i].toUpperCase()
            //     }
            //     else if(i==element.length-1){
            //         nuovaStringa += element[i].toLowerCase() + " "
            //     }else {
            //         nuovaStringa += element[i].toLowerCase() 
            //     }
            // }
            let toLower = element.toLowerCase()
            nuovaStringa +=  toLower.replace(toLower.charAt(0), toLower.charAt(0).toUpperCase()) + " "
        });
        return nuovaStringa.trim() 
    }
}

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n){
    const min = 0
    const max = 10
    if(!n){
        alert("Devi inserire un numero valido")
    }else {
        let arr = []
        for(let i = 0; i<n; i++){
            arr.push(Math.floor(Math.random() * (max-min+1) + min))
        }
        return arr
    }
}

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2){
    if(!l1 || !l2 || l1<=0 || l2<=0){
         alert("Devi inserire numeri validi")
    }else{
        return l1*l2
    }
}

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(n){
    const d = 19
    let diff = 0
    if(!n){
        alert("Devi inserire un numero valido")
    }else{
        diff = Math.abs(n-d)
        if(diff>d) return diff*3
        else return diff
    }
}

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function codify(string){
    const code = 'code'
    let stringLower =  string.toLowerCase()
    if(!string){
        alert("Inserisci una stringa valida")
    }else if(stringLower.startsWith(code)){
        return string
    }else {
        return code.concat(" ", string)
    }
}


/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(n){
    if(!n){
        alert("Devi inserire un numero valido")
    }else if(n<=0){
        alert("Devi nserire un numero positivo")
    }else {
        if(n%3===0 || n%7===0){
            return true
        }else{
            return false
        }
    }
}

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(string){
    if(!string){
        alert("Inserisci una stringa valida")
    }else if(string.length<=2){
        alert("Inserisci una stringa di almeno 3 caratteri")
    }else {
        let newString = string.slice(1, string.length-1)
        return newString
    }
}

