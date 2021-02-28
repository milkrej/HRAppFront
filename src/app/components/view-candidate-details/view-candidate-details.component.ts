import { Component, OnInit, Input } from '@angular/core';
import { Candidate } from 'src/app/model/candidate';
import { Router,ActivatedRoute } from '@angular/router';
import { CandidateService } from 'src/app/services/candidate.service';
import{CandidateListComponent} from '..//candidate-list/candidate-list.component';
import { Skill } from 'src/app/model/skill';
import { Observable } from 'rxjs';
import { SkillService } from 'src/app/services/skill.service';


@Component({
  selector: 'app-view-candidate-details',
  templateUrl: './view-candidate-details.component.html',
  styleUrls: ['./view-candidate-details.component.css']
})
export class ViewCandidateDetailsComponent implements OnInit {
  candidateId!:number;
  candidate!:Candidate;
  skills!: Observable<Skill[]>;

  constructor(private route: ActivatedRoute,private router: Router,
    private candidateService: CandidateService, private skillService:SkillService) { }

  ngOnInit(): void {
    this.candidate=new Candidate();
    this.candidateId = this.route.snapshot.params['candidateId'];
    // console.log(this.candidateId);
    this.skillService.getAllSkillsByCandidate(this.candidateId)
      .subscribe(data => {
        console.log(data)
        this.skills = data;
      }, error => console.log(error));;

    this.candidateService.getCandidateById(this.candidateId)
      .subscribe(data => {
        console.log(data)
        this.candidate = data;
      }, error => console.log(error));
  
  }
  getCandidatesSkills(){
    this.skills=this.skillService.getAllSkillsByCandidate(this.candidateId);
  }

  list(){
    this.router.navigate(['jobcandidates']);
  } 
  }

  


