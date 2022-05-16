import Task, {
    achatBilletEntree,
    achatPot,
    chapeauNouvelliste,
    passerSecurite,
    photoRhoneFm,
    boirePorteDeNovembre,
    retirerArgent,
    roueSwisscom,
    trouverAmiComptoir,
    mangerFoodtruck,
    boireSucreGpCornut,
    degusterAbricool,
    saluerPersonnalite, trouverAmiAfter, entrerAfter
} from './Task.js';
import {
    abricoolRoom, afterRoom,
    aleatoire1Room,
    aleatoire2Room, aleatoire3Room,
    entreeRoom, espaceGourmandRoom, gillardRoom, gpCornutRoom,
    nouvellisteRoom,
    potChambreRoom,
    rhoneFmRoom,
    swisscomRoom
} from './Room.js';


export default class Mission{

    title;
    task; //liste de taches
    rooms; // pièces quelle a
    startRoom;
    constructor(title, task, rooms, startRoom) {
        this.title = title;
        this.task = task;
        this.rooms = rooms;
        this.startRoom = startRoom;
    }
}

export const missionEntree = new Mission("Mission entrée", [retirerArgent, achatBilletEntree, passerSecurite], [entreeRoom], entreeRoom);
export const missionCerm1 = new Mission("Mission CERM 1", [trouverAmiComptoir, photoRhoneFm, chapeauNouvelliste, achatPot], [[null,nouvellisteRoom,null],[aleatoire1Room,aleatoire2Room,potChambreRoom],[null,null,rhoneFmRoom]], aleatoire1Room );
export const missionCerm2 = new Mission("Mission CERM 2", [roueSwisscom, boirePorteDeNovembre], [[aleatoire3Room, null],[gillardRoom, aleatoire1Room],[null,swisscomRoom]], aleatoire3Room);
export const missionExterieure = new Mission("Mission extérieure", [mangerFoodtruck, boireSucreGpCornut], [[aleatoire2Room, null],[gpCornutRoom, aleatoire3Room]], aleatoire2Room);
export const missionEspaceGourmand = new Mission("Mission espace Gourmand", [degusterAbricool, saluerPersonnalite], [[abricoolRoom, null, null],[nouvellisteRoom, null, espaceGourmandRoom],[aleatoire1Room, swisscomRoom, aleatoire2Room]], abricoolRoom);
export const missionAfter = new Mission("Mission After", [trouverAmiAfter, entrerAfter], [[aleatoire3Room, gpCornutRoom, null],[null, gillardRoom, afterRoom]], aleatoire3Room);



/*export const mission1 = new Mission("mission 1",
[new Task(true, room1,"Trouver le stand rhone fm et prendre la photo")],
[[null, room2],
        [room1, room2]
        [room1, null]],
    room1);*/

