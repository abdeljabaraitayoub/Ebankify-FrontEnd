import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule, Validators } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule
    ]
})
export class AuthModule { }
