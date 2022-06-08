import Obstacle, {
    abricool, after,
    bancomat,
    billeterie,
    bubbleTea,entreeComptoir, espaceGourmand,
    fondue, friendGreen, friendPurple, gillard,
    glacier, gpCornut,
    marrons, nourriture, nouvelliste, potDeChambre, rhoneFm, swisscom, zonePersonnalites,
} from './Obstacle.js';

export default class Room{
    obsacle; // pour chaque obstacle, on va dire quelle action on va déclancher -> liste

    name;
    image;

    constructor(name, image, obsacle) {
        this.obsacle = obsacle;
        this.name = name;
        this.image = "ressources/images/Salles/" + image;
    }
}

// exemple pour ecrire les différentes room
// les actions comme tournée la roue devront être écrit 
// et ajouter dans le helper pour avoir une liste de fonction à écrire
// à voir si pas mieux de les crée au niveau des missions pour les "mures"
export const room1 = new Room("room1","gilliard.jpg",
[
    new Obstacle(10,10,30,30,true,(player)=>{
        player.drink();
    })
]);

export const room2 = new Room("room2","rhonefm.jpg",
[
    new Obstacle(10,10,30,30,true,(player)=>{
        player.drink();
    })
]);

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

export const aleatoire1Room = new Room("Aleatoire1", "aleatoire1.jpg", [friendPurple]);

export const aleatoire2Room = new Room("Aleatoire2", "aleatoire2.jpg", []);

export const aleatoire3Room = new Room("Aleatoire3", "aleatoire3.jpg", []);

















