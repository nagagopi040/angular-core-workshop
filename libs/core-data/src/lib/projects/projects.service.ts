import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = "http://localhost:3000/";


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  model = "projects";
  
  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}${this.model}`
  }

  getUrlFromId(id){
    return `${this.getUrl()}/${id}`
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }

  create(project) {
    return this.httpClient.post(this.getUrl(), project);
  }

  update(project) {
    return this.httpClient.patch(this.getUrlFromId(project.id), project);
  }

  delete(projectId) {
    return this.httpClient.delete(this.getUrlFromId(projectId));
  }
}
