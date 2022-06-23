// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console 
// con il numero della cella cliccata.

//*recupero il buttun dal dom e lo assoccio ad una variabile
let btnPlay = document.getElementById('play_btn');

//? recupero il parent di dove voglio inserire gli elementi creati
let gridContainer = document.querySelector('.grid_container');


//*creo addEvenLIsener sul btn
btnPlay.addEventListener('click',function(){

    //?creo un ciclo for iniziannizandolo a 0 fino 
    for(let i = 1 ; i <= 100 ; i++){
        //? creo l'elemto da inportare nell'html
        let newBox =document.createElement('div');

        //?gli assegno la classe che voglio inportare
        newBox.classList.add('box');

         //? dichiaro l'elemento creato al valore di i
        newBox.innerHTML = i;
        console.log(i);

        //?importo l'elemento creato
        gridContainer.append(newBox);

        //*recupero le box dal dom e lo assoccio ad una variabile
        let box = document.querySelectorAll('.box');
        console.log(box[i]);

        box.addEventListener('click',function(){
            addToToggleClass(box[i],box_active);
        })
    }
})

function addToToggleClass(elemnt , className){
    elemnt.classList.toggle('className');
}
    

