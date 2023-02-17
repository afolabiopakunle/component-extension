import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PostService } from './post.service';

const routes: Routes = [
  { path: '', component: ComponentBComponent },
  { path: 'post/:id', component: ComponentAComponent },
]
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, ComponentBComponent, ComponentAComponent ],
  providers: [PostService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
