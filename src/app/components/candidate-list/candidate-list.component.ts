import { Component, OnInit } from '@angular/core';
import{Observable} from 'rxjs';
import { CandidateService } from 'src/app/services/candidate.service';
import { Candidate } from 'src/app/model/candidate';
import { Router } from '@angular/router';
import { ViewCandidateDetailsComponent } from '../view-candidate-details/view-candidate-details.component';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
  candidates!: Observable<Candidate[]>;
  // test!:boolean;

  constructor(private candidateService: CandidateService,
    private router: Router) {}

    ngOnInit() {
      this.reloadData();
      // this.test=false;
    }

    reloadData() {
      this.candidates = this.candidateService.getAllCandidates();
    }

    deleteCandidate(email: string) {
      this.candidateService.removeCandidate(email)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }

    viewCandidateDetails(candidateId:number){
      this.router.navigate(['viewCandidateDetails',candidateId]);
      console.log(candidateId);
    }

    getCandidatesBySkill(skillName:string){
      this.candidateService.getCandidatesBySkill(skillName)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
      
    }
// implements OnInit { treba u redu iznad posle CandidateListComponent
// candidates:Candidate[];
//   constructor(private candidateService:CandidateService) { }

//   ngOnInit():  {
//     this.listCandidates();
//   }
//   listCandidates(){
//     this.candidateService.getCandidatesList().subscribe(
//       data=>{
//         this.candidates=data;
//       }
//     )
//   }

}
