import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Candidate } from '../model/candidate';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})


export class CandidateService {
  
  private baseUrl='http://localhost:8091/api/jobcandidates';

  constructor(private httpClient:HttpClient) { }

  getAllCandidates(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  getCandidateById(candidateId:number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/by-candidateId/candidateId=${candidateId}`)
  }

  getCandidatesBySkill(skillName:string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/by-skill/?skillName=${skillName}`);
  }
  getCandidateByName(firstName:string, lastName:string):Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/by-name/?firstName=${firstName}&?lastName=${lastName}`);
  }

  addNewCandidate(candidate:Candidate): Observable<any> {
    return this.httpClient.post(this.baseUrl, candidate);
  }


  removeCandidate(email:string): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${email}`);
  }

  // addSkillToCandidate(email:string, skillName:string):Candidate{

  // }

}
