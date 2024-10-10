import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class HttpService{
    constructor(private http:HttpClient){}

    getFilm(title:string){
        const params = new HttpParams().set('title', title);
        return this.http.get(`http://www.omdbapi.com/?apikey=58ef636c&t=${title}`);
    }
}