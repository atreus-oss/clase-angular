import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiURL = 'https://api.unsplash.com/photos';
  private accessKey = 'UoPNfokEpB0SDsxtl9VbzqRkgCerF7HXQEYWQFSFm4s';


  constructor(private http: HttpClient) { }

  getImages(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}?client_id=${this.accessKey}`);
  }

}
