import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

@Input() pokemon: any;
@Output() evenementClicImage = new EventEmitter;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }
  clicSurImage(nom: string){
    this.evenementClicImage.emit(nom);
  }

}
