import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ApisService } from 'src/app/Services/apis.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {
  loginForm!: FormGroup;
  loginError:string ='';
  constructor(private fb: FormBuilder, private apiService : ApisService, private route: Router , private translate: TranslateService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      console.log('Form Data:', formData);
      this.apiService.Login(formData).subscribe({
        next:(response)=>{
          console.log(response);
          this.route.navigate(['/home']);
        },
        error:(err)=>{
          console.log(err);
          this.loginError = this.translate.instant('LOGIN.INVALID');

        }
      }

      )
      // هنا تبعت formData للـ API
    }
  }
}
