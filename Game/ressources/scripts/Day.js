import {mission1} from './Mission.js';

export default class Day {

    name;
    text;
    id;
    mission; //liste de mission du jour
    time; // temps disponible pour la journée (en secondes)

    constructor(id, name, text, time, mission) {
        this.id = id;
        this.name = name;
        this.text = text;
        this.time = time;
        this.mission = mission;
    }
}

export const day1 = new Day(1, "lundi", "text", 120, [mission1]);