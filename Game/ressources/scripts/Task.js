export default class Task {
    id;
    active; //est-ce quelle est active ou pas
    description;
    done;

    constructor(id, active, description) {
        this.id = id;
        this.active = active;
        this.description = description;
        this.done = false;
    }

    clone() {
        return new Task(this.id, this.active, this.description);
    }
}

export const achatBilletEntree = new Task(1, true, "Acheter un billet d'entrée");

export const passerSecurite = new Task(2, true, "Passer le contrôle de sécurité");

export const retirerArgent = new Task(3, true, "Retirer de l'argent au bancomat");

export const trouverAmiComptoir = new Task(11, true, "Trouve ton ami. Il a toujours ses lunettes de soleil");

export const photoRhoneFm = new Task(21, true, "Fais toi prendre en photo au stand Rhône FM.");
export const chapeauNouvelliste = new Task(22, true, "Choisis un chapeau au stand Nouvelliste.");
export const achatPot = new Task(23, true, "Achète un pot de chambre.");

export const roueSwisscom = new Task(24, true, "Tourne la roue au stand de Swisscom.");
export const boirePorteDeNovembre = new Task(25, true, "Savoure un verre de porte de Novembre.");
export const mangerFoodtruck = new Task(26, true, "Il est temps de manger.");
export const boireSucreGpCornut = new Task(27, true, "Désinfecte toi la bouche avec un sucre du grand-père Cornut");

export const degusterAbricool = new Task(28, true, "Déguste un abricool.");
export const saluerPersonnalite = new Task(29, true, "Salue des personnalités");
export const trouverAmiAfter = new Task(30, true, "Trouve ton ami. Il a toujours une biere à la main.");

export const entrerAfter = new Task(31, true, "Entre dans l'after.");

