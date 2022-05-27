import {day1, day2, day3} from './Day.js';

export default class Game {

    day;
    mission;
    room;
    missionDone=0;
    nbTaskDone=0;
    timer=10;
    player;
    gameFinish;

    boardWidth;
    boardHeight;
    canvas;

    i;
    j;

    constructor(player, h, w, canvas) {
        this.player = player;
        this.day = day2;
        this.mission = day2.mission[1];
        this.room = this.mission.startRoom;
        this.boardHeight = h;
        this.boardWidth = w;
        this.canvas = canvas;
        this.canvas.style.backgroundImage = "url("+this.room.image+")";
        this.i = this.mission.startI;
        this.j = this.mission.startJ;
    }

    // Contrôler si on peut aller dans la salle à côté.
    checkAndChangeRoom(direction, x, y,playerW, playerH) {

        var roomsArray = this.mission.rooms;

        switch (direction){
            case "gauche":
                if(this.j-1 >= 0 && roomsArray[this.i][this.j-1] != null){
                    this.j -=1;
                    this.player.setPostion(this.boardWidth-playerW,y);
                }else{
                    this.player.setPostion(0,y);
                }
                break;

            case "droite":
                if(this.j+1 <= roomsArray.length && roomsArray[this.i][this.j+1] != null){
                    this.j += 1;
                    this.player.setPostion(0,y);
                }else{
                    this.player.setPostion(this.boardWidth - playerW,y);
                }
                break;

            case "bas":
                if(this.i+1 <= roomsArray.length && roomsArray[this.i+1][this.j] != null){
                    this.i += 1;
                    this.player.setPostion(x,0);
                }else{
                    this.player.setPostion(x,0);
                }
                break;

            case "haut":
                if(this.i-1 >= 0 && roomsArray[this.i-1][this.j] != null){
                    this.i -= 1;
                    this.player.setPostion(x, this.boardHeight-playerH);
                }else{
                    this.player.setPostion(x,0);
                }
                break;
        }
        this.room = roomsArray[this.i][this.j];
        this.canvas.style.backgroundImage = "url("+this.room.image+")";
    }

    checkCollision() {
        if(this.gameFinish)
            return;
        let {x, y, playerW, playerH} = this.player.getPosition();

        //Il va vers la gauche
        if (x < 0) {
            this.checkAndChangeRoom("gauche", x, y, playerW, playerH);
        }
        //Il va en haut
        if (y < 0) {
            this.checkAndChangeRoom("haut", x, y, playerW, playerH);
        }
        //Il va en bas
        if (y > this.boardHeight - playerH) {
            this.checkAndChangeRoom("bas", x, y, playerW, playerH);
        }
        //Il va à droite
        if (x > this.boardWidth - playerW) {
            this.checkAndChangeRoom("droite", x, y, playerW, playerH);
        }

        for (let i; i < this.room.obsacle.length; i++) {
            let obstacle = this.room.obsacle[i];
            let {obsX, obsY, obsW, obsH} = obstacle.getPosition();
            let status = obstacle.getStatus();

            if (x - (obsX + obsW) <= 0 && y - (obsY + obsH) <= 0) {
                console.log("touché");
                obstacle.action(this);
                //Si l'obstacle est actif, ça déclanchera l'action de l'osbstacle
            }
        }
    }

    checkAlcohol(){
    }

    checkTime(){
    }

    validationTask(){
        // check task en cours?
        // check task and change mission if need and room and day?
    }

    endGame(statut){
        this.gameFinish = true;
        // afficher l'ecran adéquat
        let image = "ressources/images/EcransFin/";
        switch (statut) {
            case "win":
                image +="win.jpg";
                break;
            case "drunk":
                image +="drunk.jpg"
                break;
            case "sleep":
                image +="sleep.jpg"
                break;
            default:
            case "missBus":
                image +="missBus.jpg"
                break;
        }
        this.canvas.style.backgroundImage = "url("+image+")";

        // stocker ses informations de classement en local
        let user={
            "pseudo":this.player.name,
            "day":this.day.id,
            "mission":this.missionDone,
            "task":this.nbTaskDone,
            "timer":this.timer
        }
        let wallOfFame = JSON.parse(localStorage.getItem('wallOfFame'));
        if(wallOfFame === undefined || wallOfFame ===null)
            wallOfFame = [];
        wallOfFame.push(user);
        localStorage.setItem('wallOfFame', JSON.stringify(wallOfFame));
        localStorage.setItem('currentResult',JSON.stringify(user));
        // afficher un bouton pour passer à la page suivante?? ou autre idée
        this.canvas.addEventListener("click",()=>{
            location.href= "FinishPage.html";
        })
    }

}