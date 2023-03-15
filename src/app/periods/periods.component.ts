import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HerService } from '../her.service';

@Component({
  selector: 'app-periods',
  templateUrl: './periods.component.html',
  styleUrls: ['./periods.component.css']
})
export class PeriodsComponent  {

    constructor(private show :HerService,private router : Router){
    }
  
    database=this.show.getPeriods();
gotoHere(id:string,cat:any){
  localStorage.setItem('id',id)
  localStorage.setItem('cat',cat)
  this.router.navigate(['/single'])
}
  
  
  periods=[
    
    
    
    {
           
               "id":"1",
               "img":"/assets/dataimages/periods1.jpg",
               "title":"Why do you poop so much on your period?",
               "pic":"/assets/images/rachel.jpeg",
				       "cat":"periods",
               "author":"Dr Rachel Green",
               "date":"9-10-2021",
               "short":"Dealing with period blood is bad enough, but to add insult to injury, it feels like you’re also running to the bathroom every six seconds on your period.",
               "des":"If you’ve ever wondered if you could just be imagining the fact that you have to poop more on your period, let me assure you that you’re not imagining things. Your menstrual cycle really gets things flowing in your body, including making your stool flow a little more smoothly than usual. The stool is looser, so you’re more likely to have a bowel movement when you’re on your period.You have that bonus fun thanks to prostaglandins in your body that help your smooth muscle relax, preparing to shed your uterine lining for you. Thanks, body! Fun fact: Those prostaglandins are also the same vital part of the labor process, to help your body get rid of excess poop that stands in the way of your baby’s descent into the birth canal.",
	},
	 {
           
               "id":"2",
               "img":"/assets/dataimages/periods2.jpg",
               "title":"Is PMS even real?",
               "pic":"/assets/images/joey.jpg",
				       "cat":"periods",
               "author":"Dr Drake Ramoray",
               "date":"30-7-2021",
               "short":"If you ask any woman, including myself as a teenager who once cried when my waitress informed me that the restaurant was out of mozzarella sticks that night, PMS is most definitely real.",
               "des":"I can count to the day when I struggle with my mood right before my period is about to start. It’s not so much that my mood changes as it is that things that wouldn’t normally upset me do. Examples include traffic, or a work mistake, or my husband’s snoring. These become insurmountable obstacles. It’s like I have less coping ability than normal.Alas, science has debated if PMS is a “real” phenomenon for a long time now. However, a very new study has shown that some women may simply be more sensitive to changes in hormone levels, even normal changes. These could contribute to the increased symptoms of sadness, irritability, and depression that many women face. The study also suggested that up to 56 percent of severe PMS cases are genetically inherited. Thanks, Mom.",
},

{
           
               "id":"3",
               "img":"/assets/dataimages/periods3.jpeg",
               "title":"Why are some periods so different?",
               "pic":"/assets/images/joey.jpg",
				      "cat":"periods",
               "author":"Dr Drake Ramoray",
               "date":"22-1-2021",
               "short":"I know some women who have heavy, awful periods that last a week, while other women get away with super light, two-day long periods.",
               "des":"The answer to this one is that science doesn’t know. For all the technology that we have in the world, the female body and intricacies of the menstrual cycle have long been ignored. More and more research is being done, fortunately, to unlock the mysteries of menstruation. What we do know is that there can be a lot of variety to women’s cycles. In general, however, if your period is heavy for more than seven days and/or you have heavy bleeding that is a lot more than usual, it could be a sign of a problem.",
},
{
			       	"id":"4",
               "img":"/assets/dataimages/periods4.jpg",
               "title":"Am I pregnant?",
               "pic":"/assets/images/joey.jpg",
				       "cat":"periods",
               "author":"Dr Drake Ramoray",
               "date":"22-5-2021",
               "short":"OK, this one’s kind of a big deal. If you miss a period",
               "des":"The answer to this one is definitely no. Women can miss their period for many reasons, including infection, nutritional changes, travel, and stress. If you skip a period and get a negative pregnancy test, you should schedule a visit to your doctor, just to confirm that there is nothing serious going on. Consistent, irregular periods are a sign that you may need some medical attention or have an underlying disorder.",
},
{
			       	"id":"5",
               "img":"/assets/dataimages/periods5.jpeg",
               "title":"Can I get pregnant on my period?",
               "pic":"/assets/images/joey.jpg",
				       "cat":"periods",
               "author":"Dr Drake Ramoray",
               "date":"25-8-2021",
               "short":"Technically, yes, you can get pregnant on your period.",
               "des":"Every woman’s cycle is different, and if you happen to ovulate early on in your cycle, it’s possible you could get pregnant. For example, say you have unprotected sex on the last day of your period (day four), then you ovulate on day six. Sperm can live for up to five days in your reproductive tract, so there is a slight chance that sperm could find its way to a released egg.",
},
{
				       "id":"6",
               "img":"/assets/dataimages/periods6.jpg",
               "title":"Was it actually a miscarriage?",
               "pic":"/assets/images/joey.jpg",
				       "cat":"periods",
               "author":"Dr Drake Ramoray",
               "date":"5-8-2021",
               "short":"Although it can be shocking to think about, if you’re a sexually active, fertile woman, you may have been pregnant and never even known it.",
               "des":"Although it can be shocking to think about, if you’re a sexually active, fertile woman, you may have been pregnant and never even known it. Sadly, 25 percent of all clinically diagnosed pregnancies end in a miscarriage. And what’s worse, some women might not know they are pregnant yet and mistake their period for a miscarriage. Find out more information about the symptoms of a miscarriage, and always check in with your doctor if you are concerned that you might be experiencing a miscarriage.",
},
{			   
               "id":"7",
               "img":"/assets/dataimages/periods7.jpg",
               "title":"Why is my period so light?",
               "pic":"/assets/images/joey.jpg",
				       "cat":"periods",
               "author":"Dr Drake Ramoray",
               "date":"5-8-2021",
               "short":"If you define a light period by how many days your period lasts, Shepherd told INSIDER that super short periods could be a sign of fibroids, polyps, or PCOS.",
               "des":"If you define a light period by how many days your period lasts, Shepherd told INSIDER that super short periods could be a sign of fibroids, polyps, or PCOS.In terms of how heavy you bleed, however, your flow could be naturally light, while certain forms of birth control, like the pill, can make your period lighter",
},
{			   
               "id":"8",
               "img":"/assets/dataimages/periods8.jpg",
               "title":"Why did I miss a period?",
               "pic":"/assets/images/joey.jpg",
				      "cat":"periods",
               "author":"Dr Drake Ramoray",
               "date":"5-8-2021",
               "short":"If your period skips a few months, this is a red flag that you need to talk to your doctor ASAP.",
               "des":"It could be that you're pregnant, under a lot of stress, on a birth control that has stopped your period, have lost weight, or simply that your cycle is still figuring out its flow. But missing a period could also be a sign of a more serious condition like polycystic ovarian syndrome (PCOS), or other chronic conditions.[PCOS] is a hormonal disorder that can have a number of symptoms, one of which is very long cycles or missed periods.Many women with PCOS may not ovulate or not ovulate regularly, Mullen said.",
},




]
}