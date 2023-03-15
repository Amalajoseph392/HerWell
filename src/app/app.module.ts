import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { CatNavbarComponent } from './utils/cat-navbar/cat-navbar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { BhomeComponent } from './blog/bhome/bhome.component';
import { BsinglePostComponent, SafePipe } from './blog/bsingle-post/bsingle-post.component';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { PostCardComponent } from './utils/post-card/post-card.component';
import { TeenageComponent } from './teenage/teenage.component';
import { PeriodsComponent } from './periods/periods.component';
import { PregnancyComponent } from './pregnancy/pregnancy.component';
import { PostpartumComponent } from './postpartum/postpartum.component';
import { AbortionComponent } from './abortion/abortion.component';
import { PcodComponent } from './pcod/pcod.component';
import { ContactComponent } from './contact/contact.component';
import { Home1Component } from './home1/home1.component';
import { AskComponent } from './ask/ask.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CatNavbarComponent,
    FooterComponent,
    BhomeComponent,
    BsinglePostComponent,
    CommentFormComponent,
    CommentListComponent,
    SubscriptionComponent,
    PostCardComponent,
    TeenageComponent,
    PeriodsComponent,
    SafePipe,
    PregnancyComponent,
    PostpartumComponent,
    AbortionComponent,
    PcodComponent,
    ContactComponent,
    Home1Component,
    AskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
