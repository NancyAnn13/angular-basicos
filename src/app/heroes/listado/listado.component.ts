import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'


})

export class ListadoComponent {
  heroes: string[] = ['Spiderman','Iromnan','Hulk','Thor','Capitan Ameria'];
  heroeBorrado: string='';

  BorrarHeroe()
  {
    this.heroeBorrado = this.heroes.shift() || '';
    
    //console.log(HeroeBorrado);

  } 
}
