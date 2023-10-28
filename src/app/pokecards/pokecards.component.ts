import { Component } from '@angular/core';
import { HttpClient,
  HttpHeaders } from '@angular/common/http';

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

  pokeList : any[] = []
  configUrl = 'https://pokeapi.co/api/v2/pokemon';
  pokeTypes: {[index: string]:any} = {
    'normal':'gray',
    'fire':'red',
    'water':'blue',
    'grass':'green',
    'flying':'blue',
    'fighting':'orange',
    'poison':'purple',
    'electric':'yellow',
    'ground':'brown',
    'rock':'lightbrown',
    'psychic':'pink',
    'ice':'cyan',
    'bug':'lightgreen',
    'ghost':'violet',
    'steel':'gray',
    'dragon':'blue',
    'dark':'gray',
    'fairy':'pink'
  }

  getColor(type:string){
    return this.pokeTypes[type.toLowerCase()];
  }

  searchText(textValue:string){
    console.log(textValue)
  }

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
          x.gif = value?.sprites?.versions['generation-v']['black-white']['animated']['front_default']
          // console.log(x)
        }
      });
    })
    console.log(this.pokeList);
  }
}
