import {
    achatBilletEntree,
    achatPot,
    boirePorteDeNovembre,
    boireSucreGpCornut,
    chapeauNouvelliste,
    degusterAbricool,
    entrerAfter,
    mangerFoodtruck,
    passerSecurite,
    photoRhoneFm,
    retirerArgent,
    roueSwisscom,
    saluerPersonnalite,
    trouverAmiAfter,
    trouverAmiComptoir
} from './Task.js';
import {
    abricoolRoom,
    afterRoom,
    aleatoire1Room,
    aleatoire2Room,
    aleatoire3Room,
    entreeRoom,
    espaceGourmandRoom,
    gillardRoom,
    gpCornutRoom,
    nouvellisteRoom,
    potChambreRoom,
    rhoneFmRoom,
    swisscomRoom
} from './Room.js';


export default class Mission {

    title;
    tasks; //liste de taches
    rooms; // pièces quelle a
    startRoom;

    constructor(title, tasks, rooms, startI, startJ) {
        this.title = title;
        this.tasks = tasks;
        this.startRoom = rooms[startI][startJ];
        this.rooms = rooms;
        this._startI = startI;
        this._startJ = startJ;
    }

    getTasks() {
        let taskCopy = [];
        for (let task of this.tasks) {
            taskCopy.push(task.clone());
        }
        return taskCopy;
    }

    get startI() {
        return this._startI;
    }

    get startJ() {
        return this._startJ;
    }

}

export const missionDemo = new Mission("Mission démo", [chapeauNouvelliste, saluerPersonnalite, boireSucreGpCornut],
    [[null, gillardRoom, potChambreRoom, aleatoire1Room],
        [espaceGourmandRoom, null, null, nouvellisteRoom],
        [aleatoire3Room, rhoneFmRoom, aleatoire2Room, gpCornutRoom]], 0, 1);

export const missionEntree = new Mission("Mission entrée", [retirerArgent, achatBilletEntree, passerSecurite], [[entreeRoom]], 0, 0);

export const missionCerm1 = new Mission("Mission CERM 1", [trouverAmiComptoir, photoRhoneFm, chapeauNouvelliste, achatPot],
    [[null, nouvellisteRoom, null],
        [aleatoire1Room, aleatoire2Room, potChambreRoom],
        [null, null, rhoneFmRoom]], 0, 1);

export const missionCerm2 = new Mission("Mission CERM 2", [roueSwisscom, boirePorteDeNovembre],
    [[aleatoire3Room, null],
        [gillardRoom, aleatoire1Room],
        [null, swisscomRoom]], 0, 0);

export const missionExterieure = new Mission("Mission extérieure", [mangerFoodtruck, boireSucreGpCornut],
    [[aleatoire2Room, null],
        [gpCornutRoom, aleatoire3Room]], 0, 0);

export const missionEspaceGourmand = new Mission("Mission espace Gourmand", [degusterAbricool, saluerPersonnalite],
    [[abricoolRoom, null, null],
        [nouvellisteRoom, null, espaceGourmandRoom],
        [aleatoire1Room, swisscomRoom, aleatoire2Room]], 0, 0);

export const missionAfter = new Mission("Mission After", [trouverAmiAfter, entrerAfter],
    [[aleatoire3Room, gpCornutRoom, null],
        [null, gillardRoom, afterRoom]], 0, 0);

