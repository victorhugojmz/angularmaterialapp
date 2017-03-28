import {Component , OnInit } from '@angular/core';
@Component({
  template: `
   <div class="container"> 
      <h1>About</h1>
       <div class="row"> 
        <div class="col-md-6-col-xs-12 col-sm-6 col-lg-6">
            <img src="{{ angular_logo }}" class="img img-responsive" alt="{{ description }}">
        </div>
        <div class="col-md-6-col-xs-12 col-sm-6 col-lg-6">
        <br>
           <div class="list-group">
            <a class="list-group-item">
                   <h6 class="list-group-item-heading">Repositorio de esta aplicación:</h6>
                   <a href="{{ app.repo }}"><p class="list-group-item-text">{{ app.repo }}</p></a>
             </a>
             <a class="list-group-item">
                   <h6 class="list-group-item-heading">Url de esta aplicación en produccion:</h6>
                   <p class="list-group-item-text">{{ app.url }}</p>
             </a>
             <a class="list-group-item">
                   <h6 class="list-group-item-heading">Herramienta de deployment</h6>
                   <p class="list-group-item-text">{{ app.deployment }}</p>
             </a>
             <a class="list-group-item">
                   <h6 class="list-group-item-heading">Propietario de esta aplicación:</h6>
                   <p class="list-group-item-text">{{ app.autor }}</p>
                   <p class="list-group-item-text">{{ app.company }}</p>
             </a>
             <a class="list-group-item">
                   <h6 class="list-group-item-heading">Licencia de esta aplicación:</h6>
                   <p class="list-group-item-text">{{ app.licencia }}</p>
             </a>
             <a class="list-group-item">
                   <h6 class="list-group-item-heading">Version de Angular</h6>
                   <p class="list-group-item-text">{{ app.version }}</p>
             </a>
           </div>
        </div>
      </div>
   </div>
  `,  
  styles: [` h1 { text-align: center; }`]
})
export class AboutComponent implements  OnInit {
  angular_logo: string;
  description :  string;
  app  = {
    descripcion : "Made with <3",
    version: "4.0",
    autor: "@victorhugo_jmz",
    url: "httt://firebase.com",
    deployment: "Firebase Hosting",
    repo: "https://github.com/victorhugojmz/angularmaterialapp",
    licencia: "MIT License",
    company: "@Develop Talent & Technology - 2017"
  };
  ngOnInit(): void {
    this.angular_logo = "http://geeklyjournal.com/wp-content/uploads/2016/09/angular-logo-534x441.png";
    this.description = "Angular 2 Logo";
  }
 }