import {days} from './Day.js';

export default class Game {

    day;
    mission;
    tasks;
    room;

    missionDone=0;
    nbTaskDone=0;
    timer;

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
        this.boardHeight = h;
        this.boardWidth = w;
        this.canvas = canvas;
        this.setNextMission();
        this.updateTask();
    }
    async setNextMission(){
        if(this.day.mission.length <= this.missionDone){
            await this.playVideoLunabus();
            if(this.day.id >= days.length){
                return this.endGame("win");
            }
            this.day = days[this.day.id];
            this.missionDone=0;
            this.timer = this.day.time;
        }
        this.nbTaskDone=0;

        this.mission = this.day.mission[this.missionDone];

        this.tasks = this.mission.getTasks();
        this.i = this.day.mission[this.missionDone].startI;
        this.j = this.day.mission[this.missionDone].startJ;
        this.room = this.mission.rooms[this.i][this.j];
        this.canvas.style.backgroundImage = "url("+this.room.image+")";
    }

    writeConversation(text){
        let convTxt = document.getElementById("conversation");
        convTxt.innerHTML = text;
    }
    updateAlcoholRate(){
        let alcoolRate = document.getElementById("alcoolRate");
        alcoolRate.value = this.player.alcoholRate;
    }

    updateTask() {
        //Texte mission
        let missionNbr = document.getElementById("missionNbr");
        missionNbr.innerText = this.mission.title;
        let missionTxt = document.getElementById("missionTxt");
        while (missionTxt.firstChild) {
            missionTxt.removeChild(missionTxt.firstChild);
        }
        for (let task of this.tasks)
        {
            let mission = document.createElement("p");
            mission.innerText = task.description;
            if(task.done)
                mission.setAttribute("style","text-decoration: line-through;color:grey");

            missionTxt.appendChild(mission);
        }
    }

    setTimer() {
        let minutes = Math.floor(this.timer / 60);
        let seconds = this.timer % 60;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        const timerElement = document.getElementById("timer");
        timerElement.innerText = `${minutes}:${seconds}`;
        if(this.timer <= 0) {
            this.endGame("missBus");
        } else {
            this.timer = this.timer - 1;
            this.player.alcoholRate -=0.4;
        }
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
                    this.player.setPostion(x, this.boardHeight-playerH);
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
            let status = obstacle.getStatus();

            if(((x+playerW)>obsX) && (x<(obsX+obsW)) && ((y+playerH)>obsY) && (y < (obsY+obsH)) && status && !obstacle.using){
                console.log("touché");
                obstacle.action(this);
                obstacle.using=true;
            }
            if(obstacle.using && obstacle.continusAction){
                obstacle.action(this);
            }
            if(obstacle.using && !(((x+playerW)>obsX) && (x<(obsX+obsW)) && ((y+playerH)>obsY) && (y < (obsY+obsH)))){
                obstacle.using = false;
            }


        }
    }

    checkAlcohol(){
        if(this.player.alcoholRate > 90){
            this.endGame("drunk");
        }
        else if(this.player.alcoholRate <= 0){
            this.endGame("sleep");
        }
        else if(this.player.alcoholRate > 60){
            //latence
            this.player.pasPerso = 3;
        }
        else if(this.player.alcoholRate < 30){
            //ralenti
            this.player.pasPerso = 3;
        }
        else{
            this.player.pasPerso = 5;
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
        this.updateTask();
    }

    endGame(statut){
        if(this.gameFinish)
            return;
        this.gameFinish = true;
        // afficher l'ecran adéquat
        let image = "ressources/images/EcransFin/";
        let winStatus = false;
        switch (statut) {
            case "win":
                image +="win.jpg";
                winStatus = true;
                break;
            case "drunk":
                image +="drunk.jpg";
                break;
            case "sleep":
                image +="sleep.jpg";
                break;
            default:
            case "missBus":
                image +="missBus.jpg";
                break;
        }
        this.canvas.style.backgroundImage = "url("+image+")";
        console.log(winStatus);
        // stocker ses informations de classement en local
        let user={
            "pseudo":this.player.name,
            "day":this.day.id,
            "mission":this.missionDone,
            "task":this.nbTaskDone,
            "timer":this.timer,
            "win":winStatus
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

    async playVideoLunabus(){
        let videoLunabus = document.getElementById("videoLunabus");
        this.canvas.style.backgroundImage = "url(ressources/images/Autres/Goudron.jpg)";
        videoLunabus.play();
        let interval;
        await new Promise((resolve, reject) => {
            interval = setInterval(() => {
               if(videoLunabus.ended){
                   return resolve();
               }
                let hRatio = (this.boardWidth / videoLunabus.width) * videoLunabus.height;

                this.canvas.getContext('2d').drawImage(videoLunabus, 0, 0, this.boardWidth, hRatio);
           }, 1000/60);
        });

        clearInterval(interval);
    }

}