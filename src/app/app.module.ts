import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { NewpostComponent } from './newpost/newpost.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    NewpostComponent,
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 



}
