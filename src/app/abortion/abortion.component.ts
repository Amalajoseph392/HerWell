import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HerService } from '../her.service';

@Component({
  selector: 'app-abortion',
  templateUrl: './abortion.component.html',
  styleUrls: ['./abortion.component.css']
})
export class AbortionComponent {



  constructor(private show :HerService,private router : Router){
  }
  database=this.show.getAbortion();
  gotoHere(id:string,cat:any){
    localStorage.setItem('id',id)
    localStorage.setItem('cat',cat)
    this.router.navigate(['/single'])
  }

  abortion=[
    
    
    
    {
           
               "id":"1",
               "img":"/assets/dataimages/abort1.jpg",
               "title":"How safe is abortion?",
               "pic":"/assets/images/rachel.jpeg",
				 "cat":"abortion",
               "author":"Dr Rachel Green",
               "date":"9-10-2021",
               "short":"Abortion, using the recommended methods, is a very safe procedure. It can happen as an outpatient procedure, or it can be done with medications or tablets.",
               "des":"Abortion, using the recommended methods, is a very safe procedure. It can happen as an outpatient procedure, or it can be done with medications or tablets. These tablets, Misoprostol and Mifepristone, are actually on the WHO’s core essential medicine list. When these tablets became known as a way to induce abortion decades ago, the medical community was cautious, and they were often provided in hospitalized settings, but the evidence has accumulated so much over the years that we now know that these can be safely provided by a wide range of health workers, not just OB GYN doctors, but general physicians, nurses, midwives, and, in some situations in early pregnancy, by nonclinical providers as well.",
	},
	 {
           
               "id":"2",
               "img":"/assets/dataimages/abort2.jpg",
               "title":"How to avoid misinformation about abortion?",
               "pic":"/assets/images/joey.jpg",
				 "cat":"abortion",
               "author":"Dr Drake Ramoray",
               "date":"30-11-2021",
               "short":"WHO is a good place to start to get evidence based information on the aspects of care and abortion care.",
               "des":"WHO is a good place to start to get evidence based information on the aspects of care and abortion care. And I would encourage readers to visit the WHO health topic page to learn about the evidence. But of course, it's also important for individuals to have accurate information about their local context and what their rights are, what the accessibility to services are and what the potential risks are of seeking care within their context. So, of course, it's important to also find a respected and trusted source, perhaps a professional association.",
},

{
           
               "id":"3",
               "img":"/assets/dataimages/abort3",
               "title":"Do restrictions on abortion reduce abortion rates?",
               "pic":"/assets/images/joey.jpg",
				 "cat":"abortion",
               "author":"Dr Drake Ramoray",
               "date":"22-1-2021",
               "short":"The science and the evidence show us that restricting abortion does not reduce abortion rates.",
               "des":"There is a trend, though, in countries with more restrictive laws, there are more unintended pregnancies that end in abortion. Furthermore, we find that unsafe abortion is significantly higher in the groups of countries where the laws are most restrictive. In fact, we see that in countries where laws are relatively liberal, most abortions, about nine and 10 occur in safe circumstances. But if you go to the other extreme of the most restrictive group of countries, only about one in four can be considered to be safe.",
},
{
				"id":"4",
               "img":"/assets/dataimages/abort4.jpg",
               "title":"What are some of the barriers to abortion?",
               "pic":"/assets/images/joey.jpg",
				 "cat":"abortion",
               "author":"Dr Drake Ramoray",
               "date":"22-5-2021",
               "short":"Even when the law allows abortion on certain grounds and certain conditions, the same countries have laws that also make it criminal.",
               "des":" If you provide abortion outside those defined grounds three out of four countries actually have criminal penalties for women who are seeking abortion care. There are so many aspects that are written into the law that stand in the way of actually being able to access care, including proving rape, requiring the approval of medical boards or judicial committees ,and mandatory waiting periods. It can also be a challenge to find a healthcare provider willing to provide abortion care free of stigma, free of disrespect, free of abuse. ",
},
{
				"id":"5",
               "img":"/assets/dataimages/abort5.png",
               "title":" The equity issues that arise in access to abortion care",
               "pic":"/assets/images/joey.jpg",
				 "cat":"abortion",
               "author":"Dr Drake Ramoray",
               "date":"25-8-2021",
               "short":"We know that access issues are even at the best of times, not equitable.",
               "des":"So the minute you add in barriers and restrictions that come in through law and other places, we know that some women and some girls and some individuals will suffer more than others.The specifics of who gets discriminated may vary in different contexts and in different countries. It may be people living in vulnerable situations. It may be because of color, race, ethnicity, or multiple factors working together that make it harder over and above the difficulties and the stigma related to abortion care to actually access care.",
},
{
				"id":"6",
               "img":"/assets/dataimages/abort6.png",
               "title":"What can be done to improve access?",
               "pic":"/assets/images/joey.jpg",
				 "cat":"abortion",
               "author":"Dr Drake Ramoray",
               "date":"5-8-2021",
               "short":"Luckily, there are only about 20 countries in the world where there is absolutely no indication for a lawful abortion.",
               "des":"We find very often care that is not evidence based. We find that the appropriate medicines may not be registered in the essential medicine lists. Providers might not be trained and national guidelines, for example, may not be in tune with the latest evidence as put out by WHO or other professional societies. There is so much progress to be made by starting with what we can within the context of the country.",
},
{			   
               "id":"7",
               "img":"/assets/dataimages/abort7.avif",
               "title":"Family planning advice come into abortion care",
               "pic":"/assets/images/joey.jpg",
				 "cat":"abortion",
               "author":"Dr Drake Ramoray",
               "date":"5-8-2021",
               "short":"Family planning and contraception is an essential part of sexual and reproductive healthcare services, but it’s not the only part. It's all along a continuum.",
               "des":"We don’t see abortion as being distinct or unique. There are about 121 million unintended pregnancies in the world every year. About six out of 10 women who are pregnant and don’t want to be end the pregnancy through an induced abortion. Now, clearly, if there are women who are not wanting to be pregnant at a particular time, then it's important that we provide them with the access to affordable contraception and declining rates of unintended pregnancy will also have an effect on abortion rates.",
},
{			   
               "id":"8",
               "img":"/assets/dataimages/abort8.jpg",
               "title":"Human rights factor into abortion & reproductive health?",
               "pic":"/assets/images/joey.jpg",
				 "cat":"post",
               "author":"Dr Drake Ramoray",
               "date":"5-8-2021",
               "short":"WHO’s definition of health is not just the absence of disease, but a complete sense of health and wellbeing. ",
               "des":" It is a rights issue. You can't separate health and rights because they're two sides of the same coin, one interacts with the other. You cannot have health without respecting the rights of the individuals seeking that healthcare. And then when you are respectful of the rights of individuals, then it becomes a no brainer that ensuring access to healthcare for these individuals is important as well. ",
},




]
}


