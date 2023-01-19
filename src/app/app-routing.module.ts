import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './pages/character-list/character-list.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { Error404Component } from './pages/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'formulario', component: ContactComponent },
  { path: 'curriculum-vitae', component: CurriculumComponent },
  { path: 'personajes-star-wars', component: CharacterListComponent },
  { path: 'error-404', component: Error404Component },
  { path: '**', pathMatch: 'full', redirectTo: 'error-404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
