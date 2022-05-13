// continent des fonctions tel que la détection de collisions
// comment faire du ajax en vanilla:
var r = new XMLHttpRequest();
r.open("POST", "path/to/api", true);
r.onreadystatechange = function () {
  if (r.readyState != 4 || r.status != 200) return;
  alert("Success: " + r.responseText);
};
r.send("banana=yellow");

// Lecture d'un fichier
var xhr = new XMLHttpRequest(),
    jsonArr,
    method = "GET",
    jsonRequestURL = "gameData/WallOfFame.json";

xhr.open(method, jsonRequestURL, true);
xhr.onreadystatechange = function()
{
    if(xhr.readyState == 4 && xhr.status == 200)
    {
        // we convert your JSON into JavaScript object
        jsonArr = JSON.parse(xhr.responseText);       
    }
};
xhr.send(null);

// ecritur en session
localStorage.setItem('myStorage', JSON.stringify(obj));

//Mettre ici les actions qu'on sait pas où mettre