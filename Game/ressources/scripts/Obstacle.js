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

}

export const abricool = new Obstacle(416,333,884,347, true, (game)=>{
    game.player.drink();
    game.validationTask(28);
});

export const gillard = new Obstacle(416,333,884,347, true, (game)=>{
    game.player.drink();
    game.validationTask(25);
});

export const glacier = new Obstacle(1343,342,226,325, true, (game)=>{
    game.player.eat();
});

export const marrons = new Obstacle(270,1035,226,325, true, (game)=>{
    game.player.eat();
});

export const bubbleTea = new Obstacle(515,1039,226,325, true, (game)=>{
    game.player.drink();
});

export const fondue = new Obstacle(826,1019,884,347, true, (game)=>{
    game.player.eat();
});

export const after = new Obstacle(303,0,1541,595, true, (game)=>{
    game.player.drink();
    game.validationTask(31);
});

export const espaceGourmand = new Obstacle(303,0,1541,595, true, (game)=>{
    game.player.drink();
});


export const bancomat = new Obstacle(134,0,226,325, true, (game)=>{
    game.validationTask(3);
});

export const entreeComptoir = new Obstacle(571,0,977,381, true, (game)=>{
    game.validationTask(2);
});

export const billeterie = new Obstacle(1064,929,920,354, true, (game)=>{
    game.validationTask(1);
});

export const swisscom = new Obstacle(346,853,920,354, true, (game)=>{
    game.validationTask(24);
});

export const gpCornut = new Obstacle(346,853,920,354, true, (game)=>{
    game.player.drink();
    game.validationTask(27);
});

export const potDeChambre = new Obstacle(346,853,920,354, true, (game)=>{
    game.player.drink();
    game.validationTask(23);
});


export const nourriture = new Obstacle(946,284,920,354, true, (game)=>{
    game.player.eat();
    game.validationTask(26);
});

export const arret = new Obstacle(1243,29,479,313, true, (game)=>{
});

export const busPorteArriere = new Obstacle(887,723,91,257, true, (game)=>{
});

export const busPorteAvant = new Obstacle(1193,889,91,257, true, (game)=>{
});

export const nouvelliste = new Obstacle(661,317,920,354, true, (game)=>{
    game.validationTask(22);
});

export const rhoneFm = new Obstacle(661,317,920,354, true, (game)=>{
    game.validationTask(21);
});

export const friendPurple = new Obstacle(1435, 750, 101, 120, true, (game)=>{
    game.validationTask(11);
    game.validationTask(12);
    game.validationTask(13);
    game.validationTask(30);
});

export const friendGreen = new Obstacle(1029, 1211, 137, 169, true, (game)=>{
    game.validationTask(11);
    game.validationTask(12);
    game.validationTask(13);
    game.validationTask(30);
});

export const zonePersonnalites = new Obstacle(1317, 645, 399, 361, true, (game)=>{
    game.validationTask(29);
});