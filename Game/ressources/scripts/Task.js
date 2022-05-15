import {entree} from "./Room.js";

export default class Task{

    active; //est-ce quelle est active ou pas
    room; //quelle salle qui lui est associéé
    desciption;

    constructor(active, room, desciption) {
        this.active = active;
        this.room = room;
        this.desciption = desciption;
    }
}

export const achatBilletEntree = new Task(true, entree, "Acheter un billet d'entrée");

export const passerSecturite = new Task(true, entree, "Passer le contrôle de sécurité");

export const retirerArgent = new Task(true, entree, "Retirer de l'argent au bancomat");

//Franchir porte devérouillée

export const trouverAmi = new Task(true, )