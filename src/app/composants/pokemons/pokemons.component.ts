import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { MonFormulaire } from 'src/app/classes/mon-formulaire';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons = [];
  compte = 0;
  monFormulaire = new MonFormulaire('');  
  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemons = this.pokemonService.getPokemons();
    this.compte = this.pokemonService.comptagePokemons();
  }

  auClicRecherche(nomDuPokemon){
     this.pokemons = this.pokemonService.rechercherPokemon(nomDuPokemon);
  }

  annulerRecherche(){
    this.pokemons = this.pokemonService.getPokemons();
    this.monFormulaire.setRecherche('');
  }
}
