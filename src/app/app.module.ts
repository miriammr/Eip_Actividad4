import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Error404Component } from './pages/error404/error404.component';
import { DirectiveLinkDirective } from './directives/directive-link.directive';
import { DirectiveInputDirective } from './directives/directive-input.directive';
import { FormsModule } from '@angular/forms';
import { CharacterListComponent } from './pages/character-list/character-list.component';
import { CardComponent } from './pages/card/card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CurriculumComponent,
    ContactComponent,
    Error404Component,
    DirectiveLinkDirective,
    DirectiveInputDirective,
    CharacterListComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
