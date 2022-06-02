export default class Obstacle{

    posX;
    posY;
    height;
    width;
    active; //est-ce qu'il est activé ou pas, déclanche ou pas l'action
    using;
    action; //on va lui passer une fonction qu'il va executer quand il sera touché


    constructor(posX, posY, width, height, active, action) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.active = active;
        this.using = false;
        this.action = action;
    }

    getPosition(){
        return {obsX:this.posX ,obsY:this.posY, obsW:this.width, obsH:this.height}
    }

    getStatus(){
        return{status:this.active}
    }

}

export const abricool = new Obstacle(138,111,294,115, true, (game)=>{
    game.player.drink();
    game.writeConversation("Boit de l'abricool, reste cool!");
    game.validationTask(28);
});

export const gillard = new Obstacle(138,111,294,115, true, (game)=>{
    game.player.drink();
    game.writeConversation("N'oublie pas de prendre ton badge Porte de Novembre.");
    game.validationTask(25);
});

export const glacier = new Obstacle(447,114,75,108, true, (game)=>{
    game.player.eat();
    game.writeConversation("Deux ou trois boules?");
});

export const marrons = new Obstacle(90,345,75,108, true, (game)=>{
    game.player.eat();
    game.writeConversation("Chaud les marrons chaud.");
});

export const bubbleTea = new Obstacle(171,346,75,108, true, (game)=>{
    game.player.drink();
    game.writeConversation("Quelle saveur tes boules?");
});

export const fondue = new Obstacle(275,340,295,116, true, (game)=>{
    game.player.eat();
    game.writeConversation("Plutôt pain ou patates?");
});

export const after = new Obstacle(101,0,513,198, true, (game)=>{
    game.player.drink();
    game.writeConversation("Tcheu c'te foule!");
    game.validationTask(31);
});

export const espaceGourmand = new Obstacle(101,0,513,198, true, (game)=>{
    game.player.drink();
    game.writeConversation("Glou glou glou.");
});


export const bancomat = new Obstacle(45,0,75,108, true, (game)=>{
    game.validationTask(3);
    game.writeConversation("Dans deux jours, plus de salaire...");
});

export const entreeComptoir = new Obstacle(190,0,326,127, true, (game)=>{
    game.validationTask(2);
    game.writeConversation("Encore un mois d'octobre difficile.");
});

export const billeterie = new Obstacle(355,310,307,118, true, (game)=>{
    game.validationTask(1);
    game.writeConversation("Vous ne voulez pas la permanente? \n" + "Non non je viens juste pour ce soir.");
});

export const swisscom = new Obstacle(115,284,307,118, true, (game)=>{
    game.validationTask(24);
    game.writeConversation("Souscrivez un nouvel abonnement.");
});

export const gpCornut = new Obstacle(115,284,307,118, true, (game)=>{
    game.player.drink();
    game.writeConversation("Un petit sucre?");
    game.validationTask(27);
});

export const potDeChambre = new Obstacle(115,284,307,118, true, (game)=>{
    game.player.drink();
    game.writeConversation("Quelle taille?");
    game.validationTask(23);
});


export const nourriture = new Obstacle(315,95,307,118, true, (game)=>{
    game.player.eat();
    game.writeConversation("Miam miam.");
    game.validationTask(26);
});

export const arret = new Obstacle(414,10,160,104, true, (game)=>{
});

export const busPorteArriere = new Obstacle(256,241,30,86, true, (game)=>{
});

export const busPorteAvant = new Obstacle(398,296,30,86, true, (game)=>{
});

export const nouvelliste = new Obstacle(220,106,307,118, true, (game)=>{
    game.player.addHat();
    game.writeConversation("Prends ton chapeau et ne le lâche plus.");
    game.validationTask(22);
});

export const rhoneFm = new Obstacle(220,106,307,118, true, (game)=>{
    game.validationTask(21);
    game.writeConversation("Oublie pas la photo souvenir.");
});

export const friendPurple = new Obstacle(478, 250, 33, 40, true, (game)=>{
    game.validationTask(11);
    game.writeConversation("T'étais où?");
});

export const friendGreen = new Obstacle(343, 404, 46, 56, true, (game)=>{
    game.validationTask(30);
    game.writeConversation("Y'a pas de réseau ici.");
});

export const zonePersonnalites = new Obstacle(439, 215, 133, 120, true, (game)=>{
    game.validationTask(29);
    game.writeConversation("Salut l'ami!");
});




export const aleatoireBoisson = new Obstacle(138,111,294,115, true, (game)=>{
    game.player.drink();
    game.writeConversation("Glou glou glou.");
});

export const aleatoireNourriture1 = new Obstacle(447,114,75,108, true, (game)=>{
    game.player.eat();
    game.writeConversation("Miam miam miam.");
});

export const aleatoireBoisson2 = new Obstacle(171,346,75,108, true, (game)=>{
    game.player.drink();
    game.writeConversation("Glou glou glou.");
});

export const cigare = new Obstacle(275,340,295,116, true, (game)=>{
    game.writeConversation("Un ptit cigare?");
});

export const aleatoireBoisson3 = new Obstacle(90,345,75,108, true, (game)=>{
    game.player.eat();
    game.writeConversation("Glou glou glou.");
});

export const aleatoireNourriture2 = new Obstacle(90,345,75,108, true, (game)=>{
    game.player.eat();
    game.writeConversation("Miam miam miam.");
});

export const aleatoireNourriture3 = new Obstacle(275,340,295,116, true, (game)=>{
    game.player.eat();
    game.writeConversation("Miam miam miam.");
});