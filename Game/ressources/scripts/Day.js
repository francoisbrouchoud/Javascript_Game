import {
    missionAfter,
    missionCerm1,
    missionCerm2,
    missionEntree,
    missionEspaceGourmand,
    missionExterieure
} from './Mission.js';

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


export const day1 = new Day(1, "lundi", "text", 140, [missionEntree, missionCerm1, missionCerm2, missionAfter]);
export const day2 = new Day(2, "mardi", "text", 120, [missionEntree, missionExterieure, missionEspaceGourmand, missionAfter]);
export const day3 = new Day(3, "mercredi", "text", 100, [missionEntree, missionCerm1, missionEspaceGourmand, missionAfter]);
export const day4 = new Day(4, "jeudi", "text", 160, [missionEntree, missionCerm2, missionExterieure, missionCerm1, missionAfter]);
export const day5 = new Day(5, "vendredi", "text", 140, [missionEntree, missionCerm1, missionCerm2, missionExterieure, missionAfter]);
export const day6 = new Day(6, "samedi", "text", 120,[missionEntree, missionCerm2, missionEspaceGourmand, missionExterieure, missionAfter]);
export const day7 = new Day(7, "dimanche", "text", 100, [missionEntree, missionCerm1, missionExterieure, missionCerm2, missionEspaceGourmand, missionAfter]);