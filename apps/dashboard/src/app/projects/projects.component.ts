import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '@workshop/core-data'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$;
  selectedProject: Project;

  constructor(private projectsService: ProjectsService) {

  }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(){
    this.projects$ = this.projectsService.all()
  }

  deleteProject(project){
    this.projectsService.delete(project.id)
      .subscribe(result => this.getProjects());
  }

  selectProject = (project) => {
    this.selectedProject = project;
  }

  saveProject(project){
    console.log("Saving Project", project);
  }

  cancel = () => {
    this.selectProject(null);
  }
}
