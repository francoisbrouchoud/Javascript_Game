// Get wall of fame rankings
let xhr = new XMLHttpRequest();
let jsonArr;
let method = "GET";
let jsonRequestURL = "gameData/WallOfFame.json";

xhr.open(method, jsonRequestURL, true);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        // Convert JSON into JavaScript object
        jsonArr = JSON.parse(xhr.responseText);

        // Get info from localstorage
        let jsonArray2 = JSON.parse(localStorage.getItem('wallOfFame'));
        let scoreList;
        if (jsonArray2 !== undefined && jsonArray2 !== null)
            scoreList = jsonArr.concat(jsonArray2);
        else
            scoreList = jsonArr;

        // Sort wall of fame
        scoreList.sort(sortResult);

        // Display wall of fame in a table
        let table = document.getElementById("score");
        let index = 1;
        let currentPlayer = JSON.parse(localStorage.getItem('currentResult'));
        for (let player of scoreList) {
            let isCurrentPlayer = currentPlayer.pseudo === player.pseudo
                && currentPlayer.day === player.day
                && currentPlayer.mission === player.mission
                && currentPlayer.task === player.task
                && currentPlayer.timer === player.timer;
            createRowResult(table, player, index++, isCurrentPlayer);
        }

        if (currentPlayer.win) {
            document.getElementById("ranking_title_text").innerHTML = 'Victoire';
        } else {
            document.getElementById("ranking_title_text").innerHTML = 'Game Over';
        }
    }
};
xhr.send(null);

function sortResult(objet1, objet2) {
    if (objet1.day < objet2.day)
        return 1;
    if (objet1.day > objet2.day)
        return -1;
    if (objet1.mission < objet2.mission)
        return 1;
    if (objet1.mission > objet2.mission)
        return -1;
    if (objet1.task < objet2.task)
        return 1;
    if (objet1.task > objet2.task)
        return -1;
    if (objet1.timer < objet2.timer)
        return 1;
    if (objet1.timer > objet2.timer)
        return -1;
    return 0;
}

function createRowResult(container, player, index, isCurrentPlayer) {
    let tr = document.createElement("tr");
    if (isCurrentPlayer)
        tr.setAttribute("style", "background-color: lightgrey");
    let position = document.createElement("td");
    position.innerText = index;
    let pseudo = document.createElement("td");
    pseudo.innerText = player.pseudo;
    pseudo.setAttribute("class", "pseudoRow");
    let jour = document.createElement("td");
    jour.innerText = player.day;
    jour.setAttribute("class", "jourRow");
    let mission = document.createElement("td");
    mission.innerText = player.mission;
    let timer = document.createElement("td");
    timer.innerText = player.timer;
    timer.setAttribute("class", "timerRow");

    tr.appendChild(position);
    tr.appendChild(pseudo);
    tr.appendChild(jour);
    tr.appendChild(mission);
    tr.appendChild(timer);

    container.appendChild(tr);
}
