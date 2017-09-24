import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from './passwordValidator';
import { LoginService } from './login.service';

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.css']
})
export class MdfComponent implements OnInit {

  form: FormGroup; 
  
  constructor(fb: FormBuilder, private _loginService: LoginService) { 
      this.form = fb.group({
      username:['',Validators.required ],
      password:['',Validators.compose([Validators.required, PasswordValidator.cannotContainSpace])]
      })
  }

  login(){        
    var result = this._loginService.login(this.form.controls['username'].value,
    this.form.controls['password'].value);

      if(!result){
          this.form.controls['password'].setErrors({
              invalidLogin: true
          });
      }        
  }
  
  ngOnInit() {
  }

}
