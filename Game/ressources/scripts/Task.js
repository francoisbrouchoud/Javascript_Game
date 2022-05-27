import {
    abricoolRoom, afterRoom,
    aleatoire1Room, aleatoire2Room, aleatoire3Room,
    entreeRoom, espaceGourmandRoom, gillardRoom, gpCornutRoom,
    nouvellisteRoom,
    potChambreRoom,
    rhoneFmRoom,
    swisscomRoom
} from "./Room.js";


export default class Task{
    id;
    active; //est-ce quelle est active ou pas
    room; //quelle salle qui lui est associéé
    description;
    done;
    constructor(id, active, room, description) {
        this.id = id;
        this.active = active;
        this.room = room;
        this.description = description;
        this.done = false;
    }
}

export const achatBilletEntree = new Task(1,true, entreeRoom, "Acheter un billet d'entrée");

export const passerSecurite = new Task(2,true, entreeRoom, "Passer le contrôle de sécurité");

export const retirerArgent = new Task(3,true, entreeRoom, "Retirer de l'argent au bancomat");

//Franchir porte devérouillée

export const trouverAmiComptoir = new Task(11,true, aleatoire1Room, "Trouve ton ami.");
export const trouverAmiComptoir2 = new Task(12,true, aleatoire2Room, "Trouve ton ami.");
export const trouverAmiComptoir3 = new Task(13,true, aleatoire3Room, "Trouve ton ami.");

//export const acheterAboire = new Task(true, afterRoom,  "Trouve ton ami.");

export const photoRhoneFm = new Task(21,true, rhoneFmRoom,  "Fais toi prendre en photo au stand Rhône FM.");
export const chapeauNouvelliste = new Task(22,true, nouvellisteRoom,  "Choisis un chapeau au stand Nouvelliste.");
export const achatPot = new Task(23,true, potChambreRoom,  "Achète un pot de chambre.");


export const roueSwisscom = new Task(24,true, swisscomRoom,  "Tourne la roue au stand de Swisscom.");
export const boirePorteDeNovembre = new Task(25,true, gillardRoom,  "Savoure un verre de porte de Novembre.");
export const mangerFoodtruck = new Task(26,true, gpCornutRoom,  "Il est temps de manger.");
export const boireSucreGpCornut = new Task(27,true, gpCornutRoom,  "Désinfecte toi la bouche avec un sucre du grand-père Cornut");

export const degusterAbricool = new Task(28,true, abricoolRoom,  "Déguste un abricool.");
export const saluerPersonnalite = new Task(29,true, espaceGourmandRoom,  "Salue des personnalités");
export const trouverAmiAfter = new Task(30,true, afterRoom,  "Trouve ton ami.");

export const entrerAfter = new Task(31,true, afterRoom,  "Entre dans l'after.");

