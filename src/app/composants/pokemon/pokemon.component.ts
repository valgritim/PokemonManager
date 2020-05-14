import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

@Input() pokemon = {};
@Output() evenementClicImage = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }
clicSurImage(nom: string){
  this.evenementClicImage.emit(nom);
}

}
