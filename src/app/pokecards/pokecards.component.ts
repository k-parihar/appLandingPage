import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'pokecards',
  templateUrl: './pokecards.component.html',
  styleUrls: ['./pokecards.component.scss']
})
export class PokecardsComponent{
  constructor(private http: HttpClient){}

  ngOnInit(){
    this.getPokemon();
  }

  // pika = "https://w7.pngwing.com/pngs/618/649/png-transparent-pokemon-pikachu-hey-you-pikachu-ash-ketchum-pokemon-pikachu-mammal-dog-like-mammal-vertebrate.png"
  pokeList : any[] = []
  configUrl = 'https://pokeapi.co/api/v2/pokemon';

  getPokemon() {
    let result = this.http.get<any>(this.configUrl).subscribe({
      next : (value)=>{
        // console.log(value.results)
        this.pokeList = value?.results
        this.getPokemonDetails();
      }
    });
    // console.log(result)
    // return result
  }

  getPokemonDetails(){
    this.pokeList.map(x=>{
      this.http.get<any>(x.url).subscribe({
        next : (value)=>{
          x.id = value?.id
          x.types = value?.types
          x.image = value?.sprites?.front_default
          // console.log(x)
        }
      });
    })
    console.log(this.pokeList);
  }
}
