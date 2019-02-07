

var cle = 36cdd1c98b22cc020a7dd736f927707d;
let url = "https://api.themoviedb.org/3/discover/movie?api_key=" + cle ;

function loadDoc() {
  var xhttp = new XMLHttpRequest();  /// instanciation dobjet
  xhttp.onreadystatechange = function() {   /////////// ou onload
    if (this.readyState == 4 && this.status == 200) { //////////// decider quooi faire 
     //document.getElementById("demo").innerHTML = this.responseText; /// dans le document va chercher l'id demo 

     var e = JSON.parse(this.responseText);
     console.log(e);
     var reponse ;
    }
    else{
    	console.log("error	");
    }
  };
  xhttp.open("GET",url, true);
  xhttp.send();
}