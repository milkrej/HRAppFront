import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-skill',
  templateUrl: './create-skill.component.html',
  styleUrls: ['./create-skill.component.css']
})
export class CreateSkillComponent implements OnInit {

  skill: Skill = new Skill();
  submitted = false;

  constructor(private skillService: SkillService,
    private router: Router) { }

  ngOnInit() {
  }

  newSkill(): void {
    this.submitted = false;
    this.skill = new Skill();
  }

  save() {
    this.skillService
    .addNewSkill(this.skill).subscribe(data => {
      console.log(data)
      this.skill = new Skill();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/skills']);
  }

}
