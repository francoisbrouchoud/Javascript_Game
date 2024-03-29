import {days} from './Day.js';

export default class Game {

    day;
    mission;
    tasks;
    room;

    missionDone = 0;
    nbTaskDone = 0;
    timer;

    player;
    gameFinish;

    boardWidth;
    boardHeight;
    canvas;
    lastWarning;

    i;
    j;

    wallCollision = new Audio();

    constructor(player, h, w, canvas) {
        this.player = player;
        this.day = days[0];
        this.timer = this.day.time;
        this.writeConversation(this.day.text);
        this.boardHeight = h;
        this.boardWidth = w;
        this.canvas = canvas;
        this.setNextMission().then();
        this.updateTask();
        this.wallCollision.src = 'ressources/sounds/WallCollision.wav';
    }

    async setNextMission() {
        if (this.day.mission.length <= this.missionDone) {
            await this.playVideoLunabus();
            if (this.day.id >= days.length) {
                return this.endGame("win");
            }
            this.day = days[this.day.id];
            this.writeConversation(this.day.text);
            this.missionDone = 0;
            this.timer = this.day.time;
            this.writeConversation(this.day.text);
        }
        this.nbTaskDone = 0;

        this.mission = this.day.mission[this.missionDone];

        this.tasks = this.mission.getTasks();
        this.i = this.day.mission[this.missionDone].startI;
        this.j = this.day.mission[this.missionDone].startJ;
        this.room = this.mission.rooms[this.i][this.j];
        this.canvas.style.backgroundImage = "url(" + this.room.image + ")";
    }

    writeConversation(text) {
        let convTxt = document.getElementById("conversation");
        convTxt.innerHTML = text;
    }

    updateAlcoholRate() {
        let alcoholRate = document.getElementById("alcoolRate");
        alcoholRate.value = this.player.alcoholRate;
        alcoholRate.style.accentColor = this.player.alcoholColor;
    }

    updateTask() {
        let missionNbr = document.getElementById("missionNbr");
        //Mission text
        missionNbr.innerText = this.mission.title;
        let missionTxt = document.getElementById("missionTxt");
        while (missionTxt.firstChild) {
            missionTxt.removeChild(missionTxt.firstChild);
        }
        for (let task of this.tasks) {
            let mission = document.createElement("p");
            mission.innerText = task.description;
            if (task.done)
                mission.setAttribute("style", "text-decoration: line-through;color:grey");

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
        if (this.timer <= 0) {
            this.endGame("missBus");
        } else if(!this.gameFinish){
            this.timer = this.timer - 1;
            this.player.alcoholRate -= 0.4;
        }
    }

    //Check if it is possible to go to the next room
    checkAndChangeRoom(direction, x, y, playerW, playerH) {

        let roomsArray = this.mission.rooms;
        switch (direction) {
            case "gauche":
                if (this.j - 1 >= 0 && roomsArray[this.i][this.j - 1] != null) {
                    this.j -= 1;
                    this.player.setPostion(this.boardWidth - playerW, y);
                } else {
                    this.player.setPostion(0, y);
                    this.writeConversation("Tu t'es pris le mur, impossible d'aller à gauche");
                    this.wallCollision.play();
                }
                break;

            case "droite":
                if (this.j + 1 <= roomsArray.length && roomsArray[this.i][this.j + 1] != null) {
                    this.j += 1;
                    this.player.setPostion(0, y);
                } else {
                    this.player.setPostion(this.boardWidth - playerW, y);
                    this.writeConversation("Tu t'es pris le mur, impossible d'aller à droite");
                    this.wallCollision.play();
                }
                break;

            case "bas":
                if (this.i + 1 < roomsArray.length && roomsArray[this.i + 1][this.j] != null) {
                    this.i += 1;
                    this.player.setPostion(x, 0);
                } else {
                    this.player.setPostion(x, this.boardHeight - playerH);
                    this.writeConversation("Tu t'es pris le mur, impossible d'aller en bas");
                    this.wallCollision.play();
                }
                break;

            case "haut":
                if (this.i - 1 >= 0 && roomsArray[this.i - 1][this.j] != null) {
                    this.i -= 1;
                    this.player.setPostion(x, this.boardHeight - playerH);
                } else {
                    this.player.setPostion(x, 0);
                    this.writeConversation("Tu t'es pris le mur, impossible d'aller en haut");
                    this.wallCollision.play();
                }
                break;
        }
        this.room = roomsArray[this.i][this.j];
        this.canvas.style.backgroundImage = "url(" + this.room.image + ")";
    }

    checkCollision() {
        if (this.gameFinish)
            return;
        let {x, y, playerW, playerH} = this.player.getPosition();

        //Go left
        if (x < 0) {
            this.checkAndChangeRoom("gauche", x, y, playerW, playerH);
        }
        //Go up
        if (y < 0) {
            this.checkAndChangeRoom("haut", x, y, playerW, playerH);
        }
        //Go down
        if (y > this.boardHeight - playerH) {
            this.checkAndChangeRoom("bas", x, y, playerW, playerH);
        }
        //Go right
        if (x > this.boardWidth - playerW) {
            this.checkAndChangeRoom("droite", x, y, playerW, playerH);
        }

        for (let i = 0; i < this.room.obsacle.length; i++) {
            let obstacle = this.room.obsacle[i];
            let {obsX, obsY, obsW, obsH} = obstacle.getPosition();
            let status = obstacle.getStatus();

            if (((x + playerW) > obsX) && (x < (obsX + obsW)) && ((y + playerH) > obsY) && (y < (obsY + obsH)) && status && !obstacle.using) {
                obstacle.action(this);
                obstacle.using = true;
            }
            if (obstacle.using && obstacle.continuousAction) {
                obstacle.continuousAction(this);
            }
            if (obstacle.using && !(((x + playerW) > obsX) && (x < (obsX + obsW)) && ((y + playerH) > obsY) && (y < (obsY + obsH)))) {
                obstacle.using = false;
            }
        }
    }

    checkAlcohol() {
        if (this.player.alcoholRate > 90) {
            this.endGame("drunk");
        } else if (this.player.alcoholRate <= 0) {
            this.endGame("sleep");
        } else if (this.player.alcoholRate > 80) {
            this.player.alcoholColor = "red";
            //Slow down
            this.player.pasPerso = this.player.pasPersoLent;
            if(this.lastWarning !== "80")
                this.writeConversation("Tu frôles le coma, ralentis l'ami !");
            this.lastWarning = "80";
        } else if (this.player.alcoholRate > 60) {
            this.player.alcoholColor = "yellow";
            //Slow down
            this.player.pasPerso = this.player.pasPersoLent;
            if(this.lastWarning !== "60")
                this.writeConversation("J'suis pompette !");
            this.lastWarning = "60";
        } else if (this.player.alcoholRate < 10) {
            this.player.alcoholColor = "red";
            //Slow down
            this.player.pasPerso = this.player.pasPersoLent;
            if(this.lastWarning !== "10")
                this.writeConversation("Je vais mourir de soif, il me faut un verre, vite !");
            this.lastWarning = "10";
        } else if (this.player.alcoholRate < 30) {
            this.player.alcoholColor = "yellow";
            //Slow down
            this.player.pasPerso = this.player.pasPersoLent;
            if(this.lastWarning === "30")
                this.writeConversation("Fais sec dans c'pays !");
            this.lastWarning = "30";
        } else {
            this.lastWarning ="";
            this.player.alcoholColor = "green";
            this.player.pasPerso = this.player.pasPersoStandard;
        }
    }

    validationTask(taskId) {
        for (let id in this.tasks) {
            let task = this.tasks[id];

            if (task.id === taskId && !task.done) {
                task.done = true;
                this.nbTaskDone++;
            }
        }
        if (this.tasks.length <= this.nbTaskDone) {
            this.missionDone++;
            this.setNextMission().then(() => this.updateTask());
        }
        this.updateTask();
    }

    endGame(status) {
        if (this.gameFinish)
            return;
        this.gameFinish = true;
        //Display the appropriate end screen
        let image = "ressources/images/EcransFin/";
        let winStatus = false;
        switch (status) {
            case "win":
                image += "win.jpg";
                winStatus = true;
                break;
            case "drunk":
                image += "drunk.jpg";
                break;
            case "sleep":
                image += "sleep.jpg";
                break;
            default:
            case "missBus":
                image += "missBus.jpg";
                break;
        }
        this.canvas.style.backgroundImage = "url(" + image + ")";

        //Store ranking information
        let user = {
            "pseudo": this.player.name,
            "day": this.day.id,
            "mission": this.missionDone,
            "task": this.nbTaskDone,
            "timer": this.timer,
            "win": winStatus
        }
        let wallOfFame = JSON.parse(localStorage.getItem('wallOfFame'));
        if (wallOfFame === undefined || wallOfFame === null)
            wallOfFame = [];
        wallOfFame.push(user);
        localStorage.setItem('wallOfFame', JSON.stringify(wallOfFame));
        localStorage.setItem('currentResult', JSON.stringify(user));

        this.canvas.addEventListener("click", () => {
            location.href = "FinishPage.html";
        })
    }

    async playVideoLunabus() {
        let videoLunabus = document.getElementById("videoLunabus");
        this.canvas.style.backgroundImage = "url(ressources/images/Autres/Goudron.jpg)";
        videoLunabus.play();
        let interval;
        await new Promise((resolve, reject) => {
            interval = setInterval(() => {
                if (videoLunabus.ended) {
                    return resolve();
                }
                let hRatio = (this.boardWidth / videoLunabus.width) * videoLunabus.height;

                this.canvas.getContext('2d').drawImage(videoLunabus, 0, 0, this.boardWidth, hRatio);
            }, 1000 / 60);
        });

        clearInterval(interval);
    }
}