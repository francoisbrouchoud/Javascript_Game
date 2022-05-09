export default class Player {

    name;
    age;
    points;
    alcoolRate;
    posX;
    posY;
    mission;
    day;
    isMoving;
    moveInc=0;
    switchMoveImg=0;
    hasHat; //Est-ce qu'il possède un chapeau ou pas ?
    // constante
     persoPath = "ressources/images/Steve/SteveFace.jpg";
     persoMvPath = "ressources/images/Steve/SteveDepl0.jpg";
     persoHatPath = "ressources/images/Steve/SteveChapeau.jpg";
     persoHatMvPath = "ressources/images/Steve/SteveDepl0ch.jpg";
     imageWidth=50;
     imageHeight=50;
     pasPerso = 5;

    constructor(name, age, w, h) {
        this.age = age;
        this.name = name;
        this.posX = w/2 -25;
        this.posY = h/2 -25;
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
    changePage(x,y){
        this.posX = x;
        this.posY = y; 
    }
    getPosition(){
        return {x:this.posX ,y:this.posY, playerW:this.imageWidth, playerH:this.imageHeight}
    }
    // boire
    drink(){
        
    }
    // dormir
    // manger
    // dessiner le personnage
    draw(context){

        var image= new Image();
        if(!this.isMoving){
            if(this.hasHat)
                image.src = this.persoHatPath
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

            if(this.hasHat)
                image.src = this.persoHatMvPath.replace("0",this.moveInc)
            else
                image.src = this.persoMvPath.replace("0",this.moveInc);
        }

        context.drawImage(image,this.posX,this.posY,this.imageWidth,this.imageHeight)
        context.stroke();
            
        //Restauration du context
        context.restore();
   }
    //

}