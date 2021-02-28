import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/services/skill.service';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {
  skills!: Observable<Skill[]>;

  constructor(private skillService: SkillService,
    private router: Router) {}

    ngOnInit() {
      this.reloadData();
    }

    reloadData() {
      this.skills = this.skillService.getAllSkills();
    }

    deleteSkill(skillName: string) {
      this.skillService.removeSkill(skillName)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }

}
