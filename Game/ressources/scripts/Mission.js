import Task from './Task.js';
import {room1, room2} from './Room.js';

export default class Mission{

    title;
    task; //liste de taches
    room; // pièces quelle a 

    constructor(title, task, room) {
        this.title = title;
        this.task = task;
        this.room = room;
    }
}

export const mission1 = new Mission("mission 1",
[new Task(true, "Prendre photo de RhoneFM","Trouver le stand rhone fm et prendre la photo")],
[room1, room2]);