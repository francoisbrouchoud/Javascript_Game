export default class Obstacle{

    posX;
    posY;
    height;
    width;
    active; //est-ce qu'il est activé ou pas, déclanche ou pas l'action
    action; //on va lui passer une fonction qu'il va executer quand il sera touché

    constructor(posX, posY, height, width, active, action) {
        this.posX = posX;
        this.posY = posY;
        this.height = height;
        this.width = width;
        this.active = active;
        this.action = action;
    }
}