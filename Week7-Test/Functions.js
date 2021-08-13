function Iscrivimi() {
    confirm("Sei proprio sicuro di volerti iscrivere alla Newsletter?");
}

function Ordina() {
    let libri = document.querySelectorAll('input[type=checkbox]:checked');
    console.log(libri);

   /* let quantita = document.querySelectorAll('input[type=text]:willValidate');*/
    
    let totaleOrdine = document.getElementById("totaleOrdine");
    
    let somma = 0;
    for (let i = 0; i < libri.length; i++) {
        let quantita = document.getElementById("quantita");
        console.log(quantita);
        somma = somma + (parseInt(libri[i].value) * parseInt(quantita.innerText));
    }
    totaleOrdine.innerText = somma + '€';
}
//volevo fare un elemento textbox e  moltiplicare innertext dell elemento per il prezzo con checkbox checked ma non sono riuscita 
//quindi ho messo anche la funzione che restituisce la somma dei prezzi dei libri checked come visto in classe

//function Ordina() {
//    let libri = document.querySelectorAll('input[type=checkbox]:checked');
//    let totaleOrdine = document.getElementById("totaleOrdine");
//    let somma = 0;
//    for (let i = 0; i < libri.length; i++) {
//        somma = somma + parseInt(libri[i].value);
//    }
//    totaleOrdine.innerText = somma + '€';
//}