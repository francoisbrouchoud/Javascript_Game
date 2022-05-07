export default class Task{

    active; //est-ce quelle est active ou pas
    room; //quelle salle qui lui est associéé
    desciption;

    constructor(active, room, desciption) {
        this.active = active;
        this.room = room;
        this.desciption = desciption;
    }
}