import Task from './Task.js';
import {room1, room2} from './Room.js';

export default class Mission{

    title;
    task; //liste de taches
    rooms; // pièces quelle a
    startRoom;
    constructor(title, task, rooms, startRoom) {
        this.title = title;
        this.task = task;
        this.startRoom= startRoom;
        this.rooms = rooms;
    }
}
/*
export const mission1 = new Mission("Mission entrée",
    [])
/*

/*
export const mission1 = new Mission("mission 1",
[new Task(true, room1,"Trouver le stand rhone fm et prendre la photo")],
[[null, room2],
        [room1, room2]
        [room1, null]],
    room1);

 */