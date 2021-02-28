import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/model/candidate';
import { CandidateService } from 'src/app/services/candidate.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.css']
})
export class CreateCandidateComponent implements OnInit {

  candidate: Candidate = new Candidate();
  submitted = false;

  constructor(private candidateService: CandidateService,
    private router: Router) { }

  ngOnInit() {
  }

  newCandidate(): void {
    this.submitted = false;
    this.candidate = new Candidate();
  }

  save() {
    this.candidateService
    .addNewCandidate(this.candidate).subscribe(data => {
      console.log(data)
      this.candidate = new Candidate();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/jobcandidates']);
  }
}


