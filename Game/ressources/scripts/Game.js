import {day1} from './Day.js';

export default class Game {

    day;
    mission;
    room;
    missionDone;
    player;

    boardWidth;
    boardHeight

    constructor(player, h, w) {
        this.player = player;
        this.day = day1;
        this.mission = day1.mission[0];
        this.room = this.mission.startRoom;
        this.boardHeight = h;
        this.boardWidth = w;
    }

    // controler si on peut aller dans la salle à côté.
    checkAndChangeRoom(direction, x, y,playerW, playerH) {

        canvas.style.backgroundImage = "url("+this.room.image+")";

        if(blocker)
            this.player.setPostion(x, y);
        else
            this.player.setPostion(this.boardWidth - playerW, y);

    }

    checkCollision() {
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
        // afficher l'ecran adéquat

        // stocker ses informations de classement en local
        // afficher un bouton pour passer à la page suivante?? ou autre idée
    }

}