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

    // voir ou mettre?
    drawBgImg() {
        canvas.style.backgroundImage = "url("+this.room.image+")";
    }

    checkCollision() {
        let {x, y, playerW, playerH} = this.player.getPosition();

        //Il va vers la gauche
        if (x < 0) {
            this.drawBgImg();
            this.player.changePage(w - playerW, y);
        }
        //Il va en haut
        if (y < 0) {
            this.drawBgImg();
            this.player.changePage(x, h - playerH);
        }
        //Il va en bas
        if (y > this.boardHeight - playerH) {
            this.drawBgImg();
            this.player.changePage(x, 0);
        }
        //Il va à droite
        if (x > this.boardWidth - playerW) {
            this.drawBgImg();
            this.player.changePage(0, y);
        }

        for (let i; i < this.room.obsacle.length; i++) {
            let obstacle = this.room.obsacle[i];
            let {obsX, obsY, obsW, obsH} = obstacle.getPosition();
            let status = obstacle.getStatus();

            if (x - (obsX + obsW) <= 0 && y - (obsY + obsH) <= 0) {
                console.log("touché");
                obstacle.action();
                //Si l'obstacle est actif, ça déclanchera l'action de l'osbstacle
            }
        }
    }

    checkEndGame(){
        //check alcohol

        //check time
    }

    validationTask(){
        // check task and change mission if need and room and day?
    }
}