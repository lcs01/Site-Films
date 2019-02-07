/*document.addEventListener('button', () => { 
  const triggers = document.querySelectorAll('[aria-haspopup="dialog"]');

  triggers.forEach((trigger) => {
    const dialog = document.getElementById(trigger.getAttribute('aria-controls'));
  });
});


document.addEventListener('button', () => { 
  const triggers = document.querySelectorAll('[aria-haspopup="dialog"]');

  const open = function (dialog) {
    dialog.setAttribute('aria-hidden', false);
  };

  triggers.forEach((trigger) => {
    const dialog = document.getElementById(trigger.getAttribute('aria-controls'));

    // open dialog
    trigger.addEventListener('click', (event) => {
      event.preventDefault();

      open(dialog);
    });
  });
});*

document.addEventListener('button', () => { 
  const triggers = document.querySelectorAll('[aria-haspopup="dialog"]');
  const doc = document.querySelector('.js-document');

  const open = function (dialog) {
    dialog.setAttribute('aria-hidden', false);
    doc.setAttribute('aria-hidden', true);
  };

  triggers.forEach((trigger) => {
    const dialog = document.getElementById(trigger.getAttribute('aria-controls'));

    // open dialog
    trigger.addEventListener('click', (event) => {
      event.preventDefault();

      open(dialog);
    });
  });
});

*/


console.log("Bonjour! Comment allez vous ? "); 

//let locale var globable partout 


// création d'un tableau films 
var films = [
{
titre :  "Kill Bill",
realisateur :  "Tarantino",
 date : "26 novembre 2003 (France)",
synopsis : " Celle qui a auparavant exercé les fonctions de tueuse à gages au sein du Détachement International des Vipères Assassines n'a alors plus qu'une seule idée en tête : venger la mort de ses proches en éliminant tous les membres de l'organisation criminelle.",
nbEntree : 92019201, 
avis : "Trop cool",

},

{
titre :  "Titanic",
realisateur :  "James Cameron",
 date : "7 janvier 1998 (France)",
synopsis :"En 1997, l'épave du Titanic est l'objet d'une exploration fiévreuse, menée par des chercheurs de trésor en quête d'un diamant bleu qui se trouvait à bord. Frappée par un reportage télévisé, l'une des rescapés du naufrage, âgée de 102 ans, Rose DeWitt, se rend sur place et évoque ses souvenirs. 1912. Fiancée à un industriel arrogant, Rose croise sur le bateau un artiste sans le sou.",
 nbEntree : 990000, 
 avis : "Un classique",

},

{
titre :  "Kill Bill",
realisateur :  "Tarantino",
 date : "26 novembre 2003 (France)",
synopsis : " Celle qui a auparavant exercé les fonctions de tueuse à gages au sein du Détachement International des Vipères Assassines n'a alors plus qu'une seule idée en tête : venger la mort de ses proches en éliminant tous les membres de l'organisation criminelle.",
nbEntree : 92019201, 
avis : "Trop cool",

},

{
titre :  "Titanic",
realisateur :  "James Cameron",
 date : "7 janvier 1998 (France)",
synopsis :"En 1997, l'épave du Titanic est l'objet d'une exploration fiévreuse, menée par des chercheurs de trésor en quête d'un diamant bleu qui se trouvait à bord. Frappée par un reportage télévisé, l'une des rescapés du naufrage, âgée de 102 ans, Rose DeWitt, se rend sur place et évoque ses souvenirs. 1912. Fiancée à un industriel arrogant, Rose croise sur le bateau un artiste sans le sou.",
 nbEntree : 990000, 
 avis : "Un classique",

},

{
titre :  "Kill Bill",
realisateur :  "Tarantino",
 date : "26 novembre 2003 (France)",
synopsis : " Celle qui a auparavant exercé les fonctions de tueuse à gages au sein du Détachement International des Vipères Assassines n'a alors plus qu'une seule idée en tête : venger la mort de ses proches en éliminant tous les membres de l'organisation criminelle.",
nbEntree : 92019201, 
avis : "Trop cool",

},

{
titre :  "Titanic",
realisateur :  "James Cameron",
 date : "7 janvier 1998 (France)",
synopsis :"En 1997, l'épave du Titanic est l'objet d'une exploration fiévreuse, menée par des chercheurs de trésor en quête d'un diamant bleu qui se trouvait à bord. Frappée par un reportage télévisé, l'une des rescapés du naufrage, âgée de 102 ans, Rose DeWitt, se rend sur place et évoque ses souvenirs. 1912. Fiancée à un industriel arrogant, Rose croise sur le bateau un artiste sans le sou.",
 nbEntree : 990000, 
 avis : "Un classique",

},




{
titre :  "La cité de dieu",
realisateur :  "Fernando Meirelles, Kátia Lund",
 date : " 12 mars 2003 (France)",
synopsis :" À Rio de Janeiro, un jeune homme et son meilleur ami forment un gang qui passe du vol au meurtre pour finir dans le trafic de drogue.",
 nbEntree : 400000, 
 avis : "A voir absolument",

}

];

  

  //TITRE 
document.getElementById('listes').innerHTML = '<h1> Notre selection des films du monde entier</h1>';


// boucle forEach pour chaque élement du tableau film 
films.forEach(element => {

    let filmSelection = document.getElementById('listes');

    filmSelection.innerHTML += `<div class = "film"><div class= "titre.Catégories"> </div>  <p> <div id ="titreFilm">${element.titre}</div><br>
   <img src="img/killbill.jpeg"  alt="[ABC Tech posssède 75% de part de marché et XYZ 25%]" height="200px"  width="200px" /> <br>
                                Réalisateur: ${element.realisateur}<br>
                                Nombre d'entrée vendu: ${element.nbEntree}     <br>                        
                                <div id = "hover"> Date de sortie: ${element.date} </div> 
                                Synopsis : <br> ${element.synopsis} </p>

                                
      <div class = "button" > <button onclick="alert('${element.avis}')"> Notre avis </button> </div></div>`});                                                          


// création d'un tableau catégorie 
var Catégories =[ {

  Catégories : "Catégories",

  Comedie : "Comédie",
  Horreur : "Horreur",
  Thriller: "Thriller",
  Action : "Action-Aventure",
  Drame : "Drame", 



}
];

// pour chaque élement de catégorie 
Catégories.forEach(element => {

  let asideTest = document.getElementById('Catégories'); 


asideTest.innerHTML += ` <div class ="topnav"> <ul><a class="active" href=""> ${element.Catégories}  
 <li> <a href= "comédie.html"> ${element.Comedie} </a> <br><li>  <a href= "horreur.html"> ${element.Horreur}  </a> <br><li>
 <a href="thriller.html"> ${element.Thriller} </a> <br> <li> <a href="action.html"> ${element.Action} <a/>  <br><li><a href="drame.html"> ${element.Drame} </a> </ul></div>`
});

var footer1 = "Un autre site Web signé Lucas"; 

footer.forEach(element=> {

let footer = document.getElementById('footer');

footer.innerHTML+= ` <a href="http://sister-splashes.000webhostapp.com/"> Un autre site signé Lucas </a>`


});


/*
let button = document.createElement('button');
button = document.getElementById('button'); 
console.log(button);
button.forEach(element => {
 button.innerHTML += `${element.button}`;
buttn.textContent= 'coucou'; 
//button.onclick= function(){alert('lol')};




  for(let i = 0 ; i  <films.length; i ++){
    films[i].numero = i+1;
}
console.log(films);






let TabFilter = (films.filter(films=> films.nbEntree > 1000));

console.log(TabFilter);



for(film of films){



	
console.log(film.titre);

}
console.log(films[0]);



var div = document.querySelector('#film'); 

console.log(div);


var tableau = document.getElementsByTagName('header');




console.log(tableau);



//// for each , pour chaque 

/** création d'un objet film en json 
let filmjson= {
 titre :  "titre",
 realisateur : "realisateur",
 date: "12/12/1993 ",
 synopsis: "synopsis",
 nbEntree: 20001930



	}


	//  **création d'u objet film avec un tableau 
 //let filmTab = [ titre :  "titre",realisateur : "realisateur",date: "12/12/1993 ",synopsis: "synopsis",nbEntree: 20001930 ];  


**/


