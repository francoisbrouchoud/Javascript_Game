export default class Obstacle {

    posX;
    posY;
    height;
    width;
    active; //est-ce qu'il est activé ou pas, déclanche ou pas l'action
    using;
    continuousAction;
    action; //on va lui passer une fonction qu'il va executer quand il sera touché


    constructor(posX, posY, width, height, active, action, continusAction = false) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.active = active;
        this.using = false;
        this.action = action;
        this.continuousAction = continusAction
    }

    getPosition() {
        return {obsX: this.posX, obsY: this.posY, obsW: this.width, obsH: this.height}
    }

    getStatus() {
        return {status: this.active}
    }

}

export const abricool = new Obstacle(138, 111, 294, 115, true, (game) => {
    game.player.drink();
    game.writeConversation("Boit de l'abricool, reste cool!");
    game.validationTask(28);
}, (game)=>{
    game.player.drink();
});

export const gillard = new Obstacle(138, 111, 294, 115, true, (game) => {
    game.player.drink();
    game.writeConversation("N'oublie pas de prendre ton badge Porte de Novembre.");
    game.validationTask(25);
}, (game)=>{
    game.player.drink();
});

export const glacier = new Obstacle(447, 114, 75, 108, true, (game) => {
    game.player.eat();
    game.writeConversation("Deux ou trois boules?");
}, (game)=>{
    game.player.eat();
});

export const marrons = new Obstacle(90, 345, 75, 108, true, (game) => {
    game.player.eat();
    game.writeConversation("Chaud les marrons chaud.");
}, (game)=>{
    game.player.eat();
});

export const bubbleTea = new Obstacle(171, 346, 75, 108, true, (game) => {
    game.player.drink();
    game.writeConversation("Quelle saveur tes boules?");
}, (game)=>{
    game.player.drink();
});

export const fondue = new Obstacle(275, 340, 295, 116, true, (game) => {
    game.player.eat();
    game.writeConversation("Plutôt pain ou patates?");
}, (game)=>{
    game.player.eat();
});

export const after = new Obstacle(101, 0, 513, 198, true, (game) => {
    //game.player.drink();
    game.writeConversation("Tcheu c'te foule!");
    game.validationTask(31);
});

export const espaceGourmand = new Obstacle(101, 0, 513, 198, true, (game) => {
    game.player.drink();
    game.writeConversation("Glou glou glou.");
}, (game)=>{
    game.player.drink();
});


export const bancomat = new Obstacle(45, 0, 75, 108, true, (game) => {
    game.validationTask(3);
    game.writeConversation("Dans deux jours, plus de salaire...");
});

export const entreeComptoir = new Obstacle(190, 0, 326, 127, true, (game) => {
    game.validationTask(2);
    game.writeConversation("Encore un mois d'octobre difficile.");
});

export const billeterie = new Obstacle(355, 310, 307, 118, true, (game) => {
    game.validationTask(1);
    game.writeConversation("Vous ne voulez pas la permanente? \n" + "Non non je viens juste pour ce soir.");
});

export const swisscom = new Obstacle(115, 284, 307, 118, true, (game) => {
    game.validationTask(24);
    game.writeConversation("Souscrivez un nouvel abonnement.");
});

export const gpCornut = new Obstacle(115, 284, 307, 118, true, (game) => {
    game.player.drink(0.2);
    game.writeConversation("Un petit sucre?");
    game.validationTask(27);
}, (game)=>{
    game.player.drink(0.2);
});

export const potDeChambre = new Obstacle(115, 284, 307, 118, true, (game) => {
    game.player.drink(0.07);
    game.writeConversation("Quelle taille?");
    game.validationTask(23);
}, (game)=>{
    game.player.drink(0.07);
});


export const nourriture = new Obstacle(315, 95, 307, 118, true, (game) => {
    game.player.eat();
    game.writeConversation("Miam miam.");
    game.validationTask(26);
}, (game)=>{
    game.player.eat();
});

export const nouvelliste = new Obstacle(220, 106, 307, 118, true, (game) => {
    game.player.addHat();
    game.writeConversation("Prends ton chapeau et ne le lâche plus.");
    game.validationTask(22);
});

export const rhoneFm = new Obstacle(220, 106, 307, 118, true, (game) => {
    game.validationTask(21);
    game.writeConversation("Oublie pas la photo souvenir.");
});

export const friendPurple = new Obstacle(478, 250, 33, 40, true, (game) => {
    game.validationTask(11);
    game.writeConversation("T'étais où?");
});

export const friendGreen = new Obstacle(343, 404, 46, 56, true, (game) => {
    game.validationTask(30);
    game.writeConversation("Y'a pas de réseau ici.");
});

export const zonePersonnalites = new Obstacle(439, 215, 133, 120, true, (game) => {
    game.validationTask(29);
    game.writeConversation("Salut l'ami!");
});


export const aleatoireBoisson = new Obstacle(138, 111, 294, 115, true, (game) => {
    game.player.drink();
    game.writeConversation("Glou glou glou.");
}, (game)=>{
    game.player.drink();
});

export const aleatoireNourriture1 = new Obstacle(447, 114, 75, 108, true, (game) => {
    game.player.eat();
    game.writeConversation("Miam miam miam.");
}, (game)=>{
    game.player.eat();
});

export const aleatoireBoisson2 = new Obstacle(171, 346, 75, 108, true, (game) => {
    game.player.drink();
    game.writeConversation("Glou glou glou.");
}, (game)=>{
    game.player.drink();
});

export const cigare = new Obstacle(275, 340, 295, 116, true, (game) => {
    game.writeConversation("Un ptit cigare?");
});

export const aleatoireBoisson3 = new Obstacle(90, 345, 75, 108, true, (game) => {
    game.player.drink();
    game.writeConversation("Glou glou glou.");
}, (game)=>{
    game.player.drink();
});

export const aleatoireNourriture2 = new Obstacle(90, 345, 75, 108, true, (game) => {
    game.player.eat();
    game.writeConversation("Miam miam miam.");
}, (game)=>{
    game.player.eat();
});

export const aleatoireNourriture3 = new Obstacle(275, 340, 295, 116, true, (game) => {
    game.player.eat();
    game.writeConversation("Miam miam miam.");
}, (game)=>{
    game.player.eat();
});