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

    //?recupero il value dell'input del'user_choice
 let userChoice = document.getElementById('user_choice').value ;
 console.log(userChoice)
 
if(userChoice == 'hard'){
   gridSize = 49;
   difficult = 'hard'
  

}else if(userChoice == 'medium'){
   gridSize = 81;
   difficult = 'medium'

}else{
   gridSize = 100;
   difficult = 'easy'
}
console.log(gridSize);


    serialNumber(gridSize , difficult);
} )


    
function serialNumber (ncels , diff ){
    gridContainer.innerHTML= '';
    //?creo un ciclo for iniziannizandolo a 0 fino 
    for(let i = 1 ; i <= ncels ; i++){
        //? creo l'elemto da inportare nell'html
        let newBox =document.createElement('div');

        //?gli assegno la classe che voglio inportare
        newBox.classList.add('box');

         //? dichiaro l'elemento creato al valore di i
        newBox.innerHTML = i;
        console.log(i);
        if( diff == 'hard'){
            newBox.classList.add('box','box_hard');
         }else if(diff  == 'medium'){
            newBox.classList.add('box','box_medium');
         
         }else{
            
         }
        //?importo l'elemento creato
        gridContainer.append(newBox);


        newBox.addEventListener('click',function(){
            addToToggleClass(newBox,'box_active');
        })
    }
}

function addToToggleClass(elemnt , className){
    elemnt.classList.toggle(className);
}
