const hats = ["Green", "White", "Pink", "Blue", "Red"];
export default class Player {

    name;
    age;

    alcoholRate;
    alcoholColor;
    posX;
    posY;
    mission;
    day;
    isMoving;
    moveInc = 0;
    switchMoveImg = 0;
    hatList = [];
    hatColor = null;

    persoPath = "ressources/images/Steve/SteveFace.png";
    persoMvPath = "ressources/images/Steve/SteveDepl0.png";
    persoHatPath = "ressources/images/Steve/SteveChapeauColor.png";
    persoHatMvPath = "ressources/images/Steve/SteveDepl0chColor.png";
    hatPath = "ressources/images/Steve/ChapeauNouvellisteColor.png";
    imageWidth = 37;
    imageHeight = 47;
    pasPersoStandard = 10;
    pasPersoLent = 5;
    pasPerso = this.pasPersoStandard;

    drinkSound = new Audio('ressources/sounds/Drinking.wav');
    eatSound = new Audio('ressources/sounds/Eating.wav');

    constructor(name, age, w, h) {
        this.age = age;
        this.name = name;
        this.posX = w / 2 - 25;
        this.posY = h / 2 - 25;
        this.alcoholRate = 40;
    }

    //Move the character
    move(direction) {
        switch (direction) {
            case 'w':
                this.posY -= this.pasPerso;
                this.isMoving = true;
                break;
            case 'a':
                this.posX -= this.pasPerso;
                this.isMoving = true;
                break;
            case 's':
                this.posY += this.pasPerso;
                this.isMoving = true;
                break;
            case 'd':
                this.posX += this.pasPerso;
                this.isMoving = true;
                break;
        }
    }

    stopMove() {
        this.isMoving = false;
    }

    setPostion(x, y) {
        this.posX = x;
        this.posY = y;
    }

    getPosition() {
        return {x: this.posX, y: this.posY, playerW: this.imageWidth, playerH: this.imageHeight}
    }

    //Drink
    drink(quantity = 0.1) {
        this.alcoholRate += quantity;
        this.drinkSound.play();
    }

    //Eat
    eat() {
        this.alcoholRate -= 0.3;
        this.eatSound.play();
    }

    //Draw the character
    draw(context) {
        let image = new Image();

        if (!this.isMoving) {
            if (this.hatColor !== null)
                image.src = this.persoHatPath.replace("Color", this.hatColor);
            else
                image.src = this.persoPath;
        } else {
            this.switchMoveImg++;

            if (this.switchMoveImg >= 15) {
                this.moveInc++;
                this.moveInc = this.moveInc % 2;
                this.switchMoveImg = 0;
            }

            if (this.hatColor !== null)
                image.src = this.persoHatMvPath.replace("Color", this.hatColor)
                    .replace("0", this.moveInc)
            else
                image.src = this.persoMvPath.replace("0", this.moveInc);
        }

        context.drawImage(image, this.posX, this.posY, this.imageWidth, this.imageHeight)
    }

    addHat() {
        if (this.hatList.length >= 10)
            return;
        let idx = Math.floor(Math.random() * hats.length);
        this.hatList.push(hats[idx]);
        let hatDiv = document.getElementById("hat");
        let hatimg = document.createElement("img");
        hatimg.src = this.hatPath.replace("Color", hats[idx]);
        hatimg.setAttribute("tag", hats[idx]);
        hatimg.ondragstart = function (e) {
            e.dataTransfer.setData('text/plain', this.getAttribute("tag"));
        };
        hatDiv.appendChild(hatimg);
    }

    selectHat(idx) {
        this.hatColor = idx;
    }
}
