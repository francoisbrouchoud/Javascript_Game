export default class Obstacle{

    posX;
    posY;
    height;
    width;
    active; //est-ce qu'il est activé ou pas, déclanche ou pas l'action
    action; //on va lui passer une fonction qu'il va executer quand il sera touché


    constructor(posX, posY, width, height, active, action) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.active = active;
        this.action = action;
    }

    getPosition(){
        return {obsX:this.posX ,obsY:this.posY, obsW:this.width, obsH:this.height}
    }

    getStatus(){
        return{status:this.active}
    }

    draw(context){

        var image= new Image();
        image.src = "ressources/images/Steve/SteveFace.jpg";


        context.drawImage(image,this.posX,this.posY,this.width,this.height)
        context.stroke();

        //Restauration du context
        context.restore();
    }
}