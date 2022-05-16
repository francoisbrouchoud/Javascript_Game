import {
    abricoolRoom,
    aleatoire1Room,
    entree,
    entreeRoom, espaceGourmandRoom, gillardRoom, gpCornutRoom,
    nouvellisteRoom,
    potChambreRoom,
    rhoneFmRoom,
    swisscomRoom
} from "./Room.js";
import {abricool, espaceGourmand, gpCornut, nouvelliste} from "./Obstacle";

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

export const achatBilletEntree = new Task(true, entreeRoom, "Acheter un billet d'entrée");

export const passerSecurite = new Task(true, entreeRoom, "Passer le contrôle de sécurité");

export const retirerArgent = new Task(true, entreeRoom, "Retirer de l'argent au bancomat");

//Franchir porte devérouillée

export const trouverAmiComptoir = new Task(true, aleatoire1Room, "Trouve ton ami.");
export const trouverAmiComptoir2 = new Task(true, aleatoire2Room, "Trouve ton ami.");
export const trouverAmiComptoir3 = new Task(true, aleatoire3Room, "Trouve ton ami.");

export const trouverAmiAfter = new Task(true, afterRoom,  "Trouve ton ami.");
//export const acheterAboire = new Task(true, afterRoom,  "Trouve ton ami.");

export const photoRhoneFm = new Task(true, rhoneFmRoom,  "Fais toi prendre en photo au stand Rhône FM.");
export const chapeauNouvelliste = new Task(true, nouvellisteRoom,  "Choisis un chapeau au stand Nouvelliste.");
export const achatPot = new Task(true, potChambreRoom,  "Achète un pot de chambre.");


export const roueSwisscom = new Task(true, swisscomRoom,  "Tourne la roue au stand de Swisscom.");
export const boirePorteDeNovembre = new Task(true, gillardRoom,  "Savoure un verre de porte de Novembre.");
export const mangerFoodtruck = new Task(true, gpCornutRoom,  "Il est temps de manger.");
export const boireSucreGpCornut = new Task(true, gpCornutRoom,  "Désinfecte toi la bouche avec un sucre du grand-père Cornut");

export const degusterAbricool = new Task(true, abricoolRoom,  "Déguste un abricool.");
export const saluerPersonnalite = new Task(true, espaceGourmandRoom,  "Salue des personnalités");
export const trouverAmiAfter = new Task(true, afterRoom,  "Trouve ton ami.");

export const entrerAfter = new Task(true, afterRoom,  "Entre dans l'after.");

