import {days} from './Day.js';

export default class Game {

    day;
    mission;
    tasks;
    room;

    missionDone=0;
    nbTaskDone=0;
    timer;
    alcoolrate;
    player;
    gameFinish;

    boardWidth;
    boardHeight;
    canvas;

    i;
    j;

    constructor(player, h, w, canvas) {
        this.player = player;
        this.day = days[0];
        this.timer = this.day.time;
        this.alcoolrate = 40;
        this.boardHeight = h;
        this.boardWidth = w;
        this.canvas = canvas;
        this.setNextMission()
    }
    setNextMission(){
        if(this.day.mission.length <= this.missionDone){
            if(this.day.id >= days.length){
                return this.endGame("win");
            }
            this.day = days[this.day.id];
            this.missionDone=0;
            this.timer = this.day.timer;
        }
        this.nbTaskDone=0;
        this.mission = this.day.mission[this.missionDone]
        this.tasks = this.mission.tasks;
        this.i = this.mission.startI;
        this.j = this.mission.startJ;
        this.room = this.mission.rooms[this.i][this.j];
        this.canvas.style.backgroundImage = "url("+this.room.image+")";
    }

    setTimer(time) {
        this.timer = time;
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

        for (let i=0; i < this.room.obsacle.length; i++) {
            let obstacle = this.room.obsacle[i];
            let {obsX, obsY, obsW, obsH} = obstacle.getPosition();
            // TODO c'est quoi?
            let status = obstacle.getStatus();

            // TODO Problème
            //  je me trouve à la possion x=o et y=o et l'obstacle se trouve en x =10 y=10 w=10 h=10
            // 0-(10+10) < 0 et 0-(10+10)<0
            if (x - (obsX + obsW) <= 0 && y - (obsY + obsH) <= 0) {
                obstacle.action(this);
                //Si l'obstacle est actif, ça déclanchera l'action de l'osbstacle
            }
        }
    }

    checkAlcohol(){
        if(this.alcoolrate > 90){
            this.endGame("drunk");
        }
        if(this.alcoolrate <= 0){
            this.endGame("sleep");
        }
        if(this.alcoolrate > 60){
            //latence
            this.player.pasPerso = 3;
        }
        if(this.alcoolrate < 30){
            //ralenti
            this.player.pasPerso = 3;
        }
        if(this.player.drink()){
            this.alcoolrate += 10;
        }
        if(this.player.eat()){
            this.alcoolrate -= 5;
        }
    }

    checkTime(){
        if(this.timer <= 0){
            this.endGame("missBus");
            console.log("fin");
        }
    }

    validationTask(taskId){
        for (let id in this.tasks){
            let task = this.tasks[id];

            if(task.id === taskId && !task.done){
                task.done=true;
                this.nbTaskDone++;
            }
        }
        if(this.tasks.length <= this.nbTaskDone){
            this.missionDone++;
            this.setNextMission();
        }
    }

    endGame(statut){
        this.gameFinish = true;
        // afficher l'ecran adéquat
        let image = "ressources/images/EcransFin/";
        switch (statut) {
            case "win":
                image +="win.jpg";
                //this.playVideoLunabus();
                break;
            case "drunk":
                image +="drunk.jpg";
                //this.playVideoLunabus();
                break;
            case "sleep":
                image +="sleep.jpg";
                //this.playVideoLunabus();
                break;
            default:
            case "missBus":
                image +="win.jpg";
               // this.playVideoLunabus();
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

    playVideoLunabus(){
        let videoLunabus = document.getElementById("videoLunabus");
        videoLunabus.play();
        videoLunabus.style.visibility = 'visible';
    }

}