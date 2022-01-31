import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmailserviceService {
 url="http://localhost:3000/mails";
  constructor(private http:HttpClient) { }

  sendEmail(data: any){
    return this.http.post(`${this.url}`,data)
  }
}
