import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BhomeComponent } from './blog/bhome/bhome.component';
import { BsinglePostComponent } from './blog/bsingle-post/bsingle-post.component';
import { TeenageComponent } from './teenage/teenage.component';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { PeriodsComponent } from './periods/periods.component';
import { PregnancyComponent } from './pregnancy/pregnancy.component';
import { PostpartumComponent } from './postpartum/postpartum.component';
import { AbortionComponent } from './abortion/abortion.component';
import { PcodComponent } from './pcod/pcod.component';
import { Home1Component } from './home1/home1.component';
import { AskComponent } from './ask/ask.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
//   path:'',component:HomeComponent
// }

  path:'',component:Home1Component
},
{
  path:'bhome',component:BhomeComponent
},

{
  path:'teenage',component:TeenageComponent
},
{
  path:'single',component:BsinglePostComponent
},

{
  path:'comment',component:CommentFormComponent
},

{
  path:'periods',component:PeriodsComponent
},
{
  path:'pregnancy',component:PregnancyComponent
},

{
  path:'postpartum',component:PostpartumComponent
},

{
  path:'abortion',component:AbortionComponent
},
{
  path:'pcod',component:PcodComponent
},
{
  path:'ask',component:AskComponent
},
{
  path:'contact',component:ContactComponent
},
{
  path:'signup',component:SignupComponent
},
{
  path:'login',component:LoginComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
