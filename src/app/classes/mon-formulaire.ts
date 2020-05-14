export class MonFormulaire {
    nom: string;
    constructor(nom: string){
        this.nom = nom;
    }

    setRecherche(recherche){
        this.nom = recherche;
    }
}
