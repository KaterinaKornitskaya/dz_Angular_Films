import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import {HttpService} from './http.service';


@Component({
    selector: 'my-app',
    standalone: true, // указывает, что компонент будет независимым, то есть для него не нужно создавать дополнительных модулей
    imports: [HttpClientModule, FormsModule],
    templateUrl: './app.component.html',
    providers: [HttpService]
  })

export class AppComponent {
    public title:string = "";
    filmTitle:string;
    filmYear:string;
    filmDirector:string;
    filmReleased:string;
    filmActors:string;
    filmPoster:string;
    filmRuntime:string;
    filmGenre:string;
    filmPlot:string;
    constructor(private httpService:HttpService){}
    show(){
        this.httpService.getFilm(this.title).subscribe((data:object)=>{
            this.filmTitle = data["Title"];
            this.filmYear = data["Year"];
            this.filmDirector = data["Director"];
            this.filmReleased = "Реліз: " + data["Released"];
            this.filmActors = "Актори: " + data["Actors"];
            this.filmPoster = data["Poster"];
            this.filmRuntime = "Тривалість: " + data["Runtime"];
            this.filmGenre = "Жанр: " + data["Genre"];
            this.filmPlot = "Опис: " + data["Plot"];
        })
    }
}