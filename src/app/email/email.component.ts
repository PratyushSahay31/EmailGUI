import { Component, OnInit } from '@angular/core';
import { EmailserviceService } from '../emailservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  data={
    to:"",
    subject:"",
    message:""
  }
  
  constructor(private email:EmailserviceService, private snack:MatSnackBar) { }

  ngOnInit(): void {
  }
  reset(){
      this.data.to="";
      this.data.subject="";
      this.data.message="";
  }
  submitForm(){
    if(this.data.to=''){
      console.warn("error");
      this.snack.open("Fields Cannot be empty" , "OK");
    }
    else{
      this.email.sendEmail(this.data).subscribe((res)=>{ 
      console.warn(res);
      this.snack.open("Your email has been sent","cancel")
      this.data.to="";
      this.data.subject="";
      this.data.message="";
    }
    )
  }}
}
