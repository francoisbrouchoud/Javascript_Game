import Obstacle, {
    abricoolGillard,
    afterGourmand, arret,
    bancomat,
    billeterie,
    bubbleTea, busPorteArriere, busPorteAvant, entreeComptoir,
    fondue,
    glacier,
    marrons, nourriture, nouvellisteRhonefm, swisscomGpcornutPot
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

export const abricool = new Room("Abricool", "abricool.jpg", [abricoolGillard, glacier, marrons, bubbleTea, fondue]);

export const gillard = new Room("Gillard", "gillard.jpg", [abricoolGillard, glacier, marrons, bubbleTea, fondue]);

export const after = new Room("After", "after.jpg", [afterGourmand]);

export const espaceGourmand = new Room("Espace Gourmand", "espacegourmand.jpg", [afterGourmand]);

export const entree = new Room("Entrée", "entree.jpg", [bancomat, entreeComptoir, billeterie]);

export const swisscom = new Room("Swisscom", "swisscom.jpg", [swisscomGpcornutPot, nourriture]);

export const gpCornut = new Room("Grand-père Conrnut", "gpcornut.jpg", [swisscomGpcornutPot, nourriture]);

export const potChambre = new Room("Pot de chambre", "potdechambre.jpg", [swisscomGpcornutPot, nourriture]);

export const lunabus = new Room("Lunabus", "lunabus.jpg", [arret, busPorteArriere, busPorteAvant]);

export const nouvelliste = new Room("Nouvelliste", "nouvelliste.jpg", [nouvellisteRhonefm]);

export const rhoneFm = new Room("Rhône FM", "rhonefm.jpg", [nouvellisteRhonefm]);

















