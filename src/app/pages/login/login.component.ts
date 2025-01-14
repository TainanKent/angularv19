import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { InputModule } from '../../components/input/input.module';
import {
  TranslatePipe,
} from "@ngx-translate/core";
import { AuthService } from '../../auth.service';
/**
 * 
 * 要在HTML 顯示object 需要使用JsonPipe
 * imports: JsonPipe],
 * 要使用 formGroup 與要import ReactiveFormsModule
*/
@Component({
  selector: 'LoginComponent',
  templateUrl: './login.component.html',
  imports: [InputModule, ReactiveFormsModule, TranslatePipe],

})
export class LoginComponent {
  // injected HttpClient
  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AuthService
  ) {}
  // 透過 FormBuilder 建立資料
  fb =  new FormBuilder()

  loginForm = this.fb.group({
    username: 'kent_liu@systex.com',
    password: 'Test1234',
  });

  click($event: MouseEvent) {
    $event.preventDefault()
    console.log('click button', $event)
  }
  
  onSubmit() {
    console.log('loginForm', this.loginForm.value)
    // 呼叫登入API登入API
    this.http.post(
      'https://qa-api.carbon-envisionv2.com/api/auth/login',
      this.loginForm.value
    ).subscribe(data => {
      this.auth.setAuthStatus(true);
      this.router.navigate(['/dash']);
    });
    
  }
}
