import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons = [

    { 'id': 1, 'img': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png','nom' : 'Bulbizarre', 'categorie': 'graine', 'type': 'plante et poison', 'taille' : 0.70, 'poids':6.9},
    { 'id': 2,'img': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png', 'nom' : 'Herbizarre', 'categorie': 'graine', 'type': 'plante et poison', 'taille' : 1, 'poids':13},
    { 'id': 3,'img': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png', 'nom' :'Florizarre', 'categorie': 'graine', 'type': 'plante et poison', 'taille' : 2, 'poids': 100 },
    { 'id': 4,'img': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png', 'nom' :'Salamèche', 'categorie': 'lézard', 'type' : 'feu', 'taille' : 0.60 , 'poids' : 8.5},
    { 'id': 5,'img': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png', 'nom' :'Reptincel', 'categorie' : 'flamme', 'type': 'feu', 'taille': 1.1, 'poids': 19},
    { 'id': 6,'img': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', 'nom' : 'Dracaufeu','categorie' : 'flamme', 'type': 'feu et vol', 'taille': 1.7 , 'poids': 90.5}
    
  ]
  pokemonByName = [];

  constructor() { }

  getPokemons(){
    return this.pokemons;
  }

  comptagePokemons(){
    return this.pokemons.length;
  }

  rechercherPokemon(nomDuPokemon: string){
    let regex = new RegExp(nomDuPokemon, 'gi'); //gi=case insensitive regex
    return this.pokemons.filter(pokemon => pokemon.nom.match(regex));
  }

  annulerRecherche(){
  
  }
}
