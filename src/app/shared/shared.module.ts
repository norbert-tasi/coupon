import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ElapsedTimePipe } from './elapsed-time.pipe';

const declarations = [ElapsedTimePipe];

const modules = [
  CommonModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule,
  RouterModule
];

@NgModule({
  declarations: [...declarations],
  imports: [
    ...modules
  ],
  exports: [declarations, modules]
})
export class SharedModule { }
