import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
// 引入  AppComponent
import { AppComponent } from './app.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TodoModule } from './todo/todo.module';
import { TodoComponent } from './todo/todo.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';


registerLocaleData(zh);


// 注册到NgModule
@NgModule({
  declarations: [
    AppComponent,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    TodoModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzInputModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  // 启动 AppComponent
  bootstrap: [AppComponent]
})
export class AppModule { }
