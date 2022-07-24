import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    this.authService.login('eve.holt@reqres.in','cityslicka').subscribe(res => {
      console.log({res})
      if (res.token) {
        sessionStorage.setItem('token', res.token)
      }
    },(err)=>console.log('error', err),()=>console.log('peticion finalizada'))
  }

}
