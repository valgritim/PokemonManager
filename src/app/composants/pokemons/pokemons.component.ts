import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { FormGroup, FormControl, Validators, PatternValidator } from '@angular/forms';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons = [];
  compte = 0; 
  patternPerso = "[a-zA-Z]"; 
  
  monFormulaire = new FormGroup({
    nom: new FormControl('',Validators.pattern(this.patternPerso))
  });
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
    
  }

}
