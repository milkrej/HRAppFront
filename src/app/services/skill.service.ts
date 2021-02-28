import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private baseUrl='http://localhost:8091/api/skills';

  constructor(private httpClient:HttpClient) { }

  getAllSkills(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  getAllSkillsByCandidate(candidateid:number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/${candidateid}`);
  }

  

  addNewSkill(skill:Skill): Observable<any> {
    return this.httpClient.post(this.baseUrl, skill);
  }


  removeSkill(skillName:string): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${skillName}`);
  }
}
