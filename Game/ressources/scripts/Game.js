import {day1, day2} from './Day.js';

export default class Game {

    day;
    mission;
    room;
    missionDone;
    player;

    boardWidth;
    boardHeight
    canvas

    constructor(player, h, w, canvas) {
        this.player = player;
        this.day = day2;
        this.mission = day2.mission[1];
        this.room = this.mission.startRoom;
        this.boardHeight = h;
        this.boardWidth = w;
        this.canvas = canvas;
    }

    // controler si on peut aller dans la salle à côté.
    checkAndChangeRoom(direction, x, y,playerW, playerH) {
        var test = this.mission.rooms;



        for (let i = 0; i < test.length; i++) {
            for (let j = 0; j < test[i].length; j++) {
                console.log( test[i][j]);
            }
        }
        this.canvas.style.backgroundImage = "url("+this.room.image+")";



        /*if(blocker){
            this.player.setPostion(x, y);
            console.log("blocker oui");
        }

        else{
            this.player.setPostion(this.boardWidth - playerW, y);
            console.log("blocker non");
        }*/





        switch (direction){
            case "gauche":
                console.log(x)
                if(i-1 >= 0 && test[i-1][j]){
                    console.log("je vais à gauche");
                }
                break;

            case "droite":
                if(i+1 < test[y].length && test[i][j+1] != null){
                    console.log("je vais à droite");
                }
                break;

            case "bas":
                if(j+1 < test.length && test[i+1][j] != null){
                    console.log("je vais en bas");
                }
                break;

            case "haut":
                if(j-1 > test.length && test[i-1][j] != null){
                    console.log("je vais en haut");
                }
                break;

        }

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