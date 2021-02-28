import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { CreateCandidateComponent } from './components/create-candidate/create-candidate.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { CreateSkillComponent } from './components/create-skill/create-skill.component';
import { ViewCandidateDetailsComponent } from './components/view-candidate-details/view-candidate-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'candidate', pathMatch: 'full' },
  { path: 'candidates', component: CandidateListComponent },
  { path: 'skills', component: SkillListComponent },
  { path: 'addCandidate', component: CreateCandidateComponent },
  { path: 'addSkill', component: CreateSkillComponent },
  { path: 'viewCandidateDetails/:candidateId', component: ViewCandidateDetailsComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
