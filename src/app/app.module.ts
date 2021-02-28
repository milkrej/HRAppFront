import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import{ HttpClientModule} from '@angular/common/http';
import { CandidateService } from './services/candidate.service';
import { CreateCandidateComponent } from './components/create-candidate/create-candidate.component';
import { CreateSkillComponent } from './components/create-skill/create-skill.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import{FormsModule} from '@angular/forms';
import { ViewCandidateDetailsComponent } from './components/view-candidate-details/view-candidate-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateListComponent,
    CreateCandidateComponent,
    CreateSkillComponent,
    SkillListComponent,
    ViewCandidateDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CandidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
