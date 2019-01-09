import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './pages/top/top.component';
import { ScenarioComponent } from './pages/scenario/scenario.component';
import { ContentComponent } from './pages/content/content.component';
import { StoryComponent } from './pages/story/story.component';
import { TruthComponent } from './pages/truth/truth.component';
import { ProComponent } from './pages/pro/pro.component';
import { CharacterComponent } from './pages/character/character.component';
import { AgreementComponent } from './pages/agreement/agreement.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    ScenarioComponent,
    ContentComponent,
    StoryComponent,
    TruthComponent,
    ProComponent,
    CharacterComponent,
    AgreementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
