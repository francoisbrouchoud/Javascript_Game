const hats =["Green", "White", "Pink","Blue", "Red"];
export default class Player {

    name;
    age;
    points;
    alcoholRate;
    posX;
    posY;
    mission;
    day;
    isMoving;
    moveInc=0;
    switchMoveImg=0;
    hatList = [];
    hatColor = null;
    // constante
     persoPath = "ressources/images/Steve/SteveFace.png";
     persoMvPath = "ressources/images/Steve/SteveDepl0.png";
     persoHatPath = "ressources/images/Steve/SteveChapeauColor.png";
     persoHatMvPath = "ressources/images/Steve/SteveDepl0chColor.png";
     hatPath = "ressources/images/Steve/ChapeauNouvellisteColor.png";
     imageWidth=37;
     imageHeight=47;
     pasPerso = 5;

     alcoholRate;
     sound = new Audio();

    constructor(name, age, w, h) {
        this.age = age;
        this.name = name;
        this.posX = w/2 -25;
        this.posY = h/2 -25;
        this.alcoholRate = 40;
        this.sound
        this.sound.src = 'ressources/sounds/Drinking.wav';
      }
    // déplacement
    move(direction){
        switch(direction){
            case 'w':
                this.posY -= this.pasPerso;
                this.isMoving=true;
                break;
            case 'a':
                this.posX -= this.pasPerso;
                this.isMoving=true;
                break;
            case 's':
                this.posY += this.pasPerso;
                this.isMoving=true;
                break;
            case 'd':
                this.posX += this.pasPerso;
                this.isMoving=true;
                break;
       }
    }
    stopMove(){
        this.isMoving=false;
    }
    setPostion(x,y){
        this.posX = x;
        this.posY = y;
    }
    getPosition(){
        return {x:this.posX ,y:this.posY, playerW:this.imageWidth, playerH:this.imageHeight}
    }
    // boire
    drink(){
        this.alcoholRate += 5;
        this.sound.play();
    }
    // manger
    eat(){
        this.alcoholRate -= 5;
    }
    // dessiner le personnage
    draw(context){

        var image= new Image();

        //sound("Game/sounds/Walking.mp3");


        if(!this.isMoving){
            if(this.hatColor !==null)
                image.src = this.persoHatPath.replace("color",this.hatColor);
            else
                image.src = this.persoPath;
        }
        else{
            this.switchMoveImg++;

            if(this.switchMoveImg >= 15){
                this.moveInc++;
                this.moveInc = this.moveInc%2;
                this.switchMoveImg = 0;
            }

            if(this.hatColor !==null)
                image.src = this.persoHatMvPath.replace("Color",this.hatColor)
                                                .replace("0",this.moveInc)
            else
                image.src = this.persoMvPath.replace("0",this.moveInc);
        }

        context.drawImage(image,this.posX,this.posY,this.imageWidth,this.imageHeight)
        context.stroke();

        //Restauration du context
        context.restore();
   }

   addHat(){
        if(this.hatList.length >=10)
            return;
        let idx = Math.floor(Math.random()*hats.length);
        this.hatList.push(hats[idx]);
        let hatDiv = document.getElementById("hat");
        let hatimg = document.createElement("img");
        hatimg.src = this.hatPath.replace("Color",hats[idx]);
        hatimg.setAttribute("tag",hats[idx]);
        hatimg.ondragstart = function(e) {
            e.dataTransfer.setData('text/plain' , this.getAttribute("tag"));
        };
        hatDiv.appendChild(hatimg);
   }
   selectHat(idx){
        if(idx>=this.hatList.length||idx<=0)
            this.hatColor=null;
        else
            this.hatColor = this.hatList[idx];
   }
    /*sound(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        /*this.play = function(){
            this.sound.play();
        }
        this.stop = function(){
            this.sound.pause();
        }
    }*/

    /*playSound(){
        this.sound.play();
    }*/

    /*pauseSound(){
        this.sound.pause()
    }*/

}
