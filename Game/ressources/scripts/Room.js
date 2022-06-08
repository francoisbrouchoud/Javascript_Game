import {
    abricool,
    after,
    aleatoireBoisson,
    aleatoireBoisson2,
    aleatoireBoisson3,
    aleatoireNourriture1,
    aleatoireNourriture2,
    aleatoireNourriture3,
    bancomat,
    billeterie,
    bubbleTea,
    cigare,
    entreeComptoir,
    espaceGourmand,
    fondue,
    friendGreen,
    friendPurple,
    gillard,
    glacier,
    gpCornut,
    marrons,
    nourriture,
    nouvelliste,
    potDeChambre,
    rhoneFm,
    swisscom,
    zonePersonnalites,
} from './Obstacle.js';

class Room {
    //For each obstacle, we'll say which action we'll trigger -> list
    obsacle;

    name;
    image;

    constructor(name, image, obsacle) {
        this.obsacle = obsacle;
        this.name = name;
        this.image = "ressources/images/Salles/" + image;
    }
}

export const abricoolRoom = new Room("Abricool", "abricool.jpg", [abricool, glacier, marrons, bubbleTea, fondue]);

export const gillardRoom = new Room("Gillard", "gilliard.jpg", [gillard, glacier, marrons, bubbleTea, fondue]);

export const afterRoom = new Room("After", "after.jpg", [after, friendGreen]);

export const espaceGourmandRoom = new Room("Espace Gourmand", "espacegourmand.jpg", [espaceGourmand, zonePersonnalites]);

export const entreeRoom = new Room("Entrée", "entree.jpg", [bancomat, entreeComptoir, billeterie]);

export const swisscomRoom = new Room("Swisscom", "swisscom.jpg", [swisscom, nourriture]);

export const gpCornutRoom = new Room("Grand-père Conrnut", "gpcornut.jpg", [gpCornut, nourriture]);

export const potChambreRoom = new Room("Pot de chambre", "potdechambre.jpg", [potDeChambre, nourriture]);

export const nouvellisteRoom = new Room("Nouvelliste", "nouvelliste.jpg", [nouvelliste]);

export const rhoneFmRoom = new Room("Rhône FM", "rhonefm.jpg", [rhoneFm]);

export const aleatoire1Room = new Room("Aleatoire1", "aleatoire1.jpg", [friendPurple, aleatoireBoisson, aleatoireNourriture1, marrons, aleatoireBoisson2, fondue]);

export const aleatoire2Room = new Room("Aleatoire2", "aleatoire2.jpg", [aleatoireBoisson, aleatoireNourriture1, bubbleTea, cigare, aleatoireBoisson3]);

export const aleatoire3Room = new Room("Aleatoire3", "aleatoire3.jpg", [aleatoireBoisson, aleatoireNourriture1, bubbleTea, aleatoireNourriture2, aleatoireNourriture3]);

















