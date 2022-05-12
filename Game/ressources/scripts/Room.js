import Obstacle from './Obstacle.js';

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