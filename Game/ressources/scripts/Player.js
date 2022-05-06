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
    hasHat; //Est-ce qu'il possède un chapeau ou pas ?
    // constante
     imagePath = "ressources/images/Perso_principal.png";
     imageWidth=50;
     imageHeight=50;
     pasPerso = 5;

    constructor(name, age, w, h) {
        this.age = age;
        this.name = name;
        this.posX = w/2 -25;
        this.posY = h/2 -25;
      }
    //qu'est-ce qu'il a besoin faire
    // déplacement
    move(direction){
        switch(direction){
            case 'w':
                this.posY -= this.pasPerso;
                break;
            case 'a':
                this.posX -= this.pasPerso;
                break;
            case 's':
                this.posY += this.pasPerso;
                break;
            case 'd':
                this.posX += this.pasPerso;
                break;
       }
    }
    changePage(x,y){
        this.posX = x;
        this.posY = y; 
    }
    getPosition(){
        return {x:this.posX ,y:this.posY}
    }
    // boire
    // dormir
    // manger
    // dessiner le personnage
    draw(context){

        var image= new Image();
        image.src = this.imagePath;
    
        context.drawImage(image,this.posX,this.posY,this.imageWidth,this.imageHeight)
        context.stroke();
            
        //Restauration du context
        context.restore();
   }
    //

}