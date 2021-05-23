import { FilmesComponent } from './filmes/filmes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'sobre', component: SobreComponent},
  {path:'filmes', component: FilmesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
