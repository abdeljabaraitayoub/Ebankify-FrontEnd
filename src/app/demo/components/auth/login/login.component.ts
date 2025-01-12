import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/demo/service/auth.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    :host ::ng-deep .pi-eye,
    :host ::ng-deep .pi-eye-slash {
      transform: scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }
  `]
})
export class LoginComponent implements OnInit {

  valCheck: string[] = ['remember'];
  authForm: FormGroup;

  constructor(
    public layoutService: LayoutService, 
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.authForm = formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],  // Corrected validators
    });
  }

  ngOnInit() {
    if (this.auth.loggedIn()) {
      this.router.navigate(['/']);
    }
  }

  submit() {
    if (this.authForm.valid) {
      console.log(this.authForm.value);
      this.auth.setToken('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsaWJiaWUuYnJlaXRlbmJlcmdAeWFob28uY29tIiwiaWF0IjoxNzM2NTAyOTY5LCJleHAiOjE3MzY1MDQ0MDl9.G0mkjRRGJBKfSAYgk9oRJ3vzHzqglph7LD6AFG7XGgc');
      this.router.navigate(['/']);
    } else {
      console.log('Form is invalid');
    }
  }
}
