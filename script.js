console.log("Bonjour! Comment allez vous ? "); 

//let locale var globable partout 

var films = [
{
titre :  "kill bill",
realisateur :  "tarantino",
 date : "12/12/1993",
synopsis :"synopsis",
 nbEntree : 900, 
},

{
titre :  "titanic",
realisateur :  "realisateur",
 date : "12/12/1993",
synopsis :"synopsis",
 nbEntree : 990000, 
},


{
titre :  "tarzan",
realisateur :  "realisateur",
 date : "12/12/1993",
synopsis :"synopsis",
 nbEntree : 400000, 
}

];

  
document.getElementById('listes').innerHTML = '<h1> Film disponible</h1>';

films.forEach(element => {

    let filmSelection = document.getElementById('listes');

    filmSelection.innerHTML += `<div class = "film"> <p> titre du film: ${element.titre}</br>
   ${element.image}<img src="img/killbill.jpeg"  alt="[ABC Tech posssède 75% de part de marché et XYZ 25%]" height="200px"  width="200px" /> <br>
                                Réalisateur: ${element.realisateur}</br>
                                Nombre d'entrée vendu: ${element.nbEntree}</br>                                  
                                Synopsis du film: ${element.synopsis}</br>
                                Date de sortie: ${element.date} </p> </div>`;
});                                                          



var Catégories =[ {

  Catégories : "Catégories",

  Comedie : "Comédie",
  Horreur : "Horreur",
  Thriller: "Thriller",
  Action : "Action-Aventure",
  Drame : "Drame", 



}
];


Catégories.forEach(element => {

  let asideTest = document.getElementById('Catégories'); 


asideTest.innerHTML += ` <div class ="catégories"> <div class="titre"> ${element.Catégories} </div>
 <div class= "catégorie"> ${element.Comedie} <br> ${element.Horreur} <br> 
 ${element.Thriller} <br> ${element.Action} <br> ${element.Drame}</div></div>`;
});


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
**/






	//  **création d'u objet film avec un tableau 
 //let filmTab = [ titre :  "titre",realisateur : "realisateur",date: "12/12/1993 ",synopsis: "synopsis",nbEntree: 20001930 ];  



