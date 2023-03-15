import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HerService } from 'src/app/her.service';

@Component({
  selector: 'app-bhome',
  templateUrl: './bhome.component.html',
  styleUrls: ['./bhome.component.css']
})
export class BhomeComponent {

  constructor(private show :HerService,private router : Router){
  }

  database=this.show.getBhome();
gotoHere(id:string,cat:any){
  localStorage.setItem('id',id)
  localStorage.setItem('cat',cat)
  this.router.navigate(['/single'])
}

bhome= [
  {
       
    "id":"1",
    "img":"/assets/dataimages/pcod2",
    "title":"What causes PCOS??",
    "pic":"/assets/images/pheobe.jpeg",
"cat":"bhome",
    "author":"Pheobe Buffay",
    "date":"30-11-2020",
    "short":"We don't have a definitive cause for PCOS.",
    "des":"We don't have a definitive cause for PCOS. Researchers think genetics and environmental factors may play a role in PCOS. There's also a link between PCOS and obesity, and women with PCOS are more likely to be obese. Obesity doesn't cause PCOS, but makes it worse because of insulin resistance, when high levels of insulin—a hormone made by your pancreas—don't get used by your body.",
},

{			   
"id":"2",
"img":"/assets/dataimages/abort8.jpg",
"title":"Human rights factor into abortion & reproductive health?",
"pic":"/assets/images/joey.jpg",
"cat":"bhome",
"author":"Dr Drake Ramoray",
"date":"5-8-2021",
"short":"WHO’s definition of health is not just the absence of disease, but a complete sense of health and wellbeing. ",
"des":" It is a rights issue. You can't separate health and rights because they're two sides of the same coin, one interacts with the other. You cannot have health without respecting the rights of the individuals seeking that healthcare. And then when you are respectful of the rights of individuals, then it becomes a no brainer that ensuring access to healthcare for these individuals is important as well. ",
},
{			   
"id":"3",
"img":"/assets/dataimages/post7.jpg",
"title":"What is puerperal psychosis?",
"pic":"/assets/images/joey.jpg",
"cat":"bhome",
"author":"Dr Drake Ramoray",
"date":"5-8-2021",
"short":"This is a really important question. The NHS is guided by the principals recommended by NICE (National Institute for Clinical Excellence in Health).",
"des":"Puerperal psychosis - also known as post-partum psychosis (PPP) is a much less common condition than postnatal depression. Where we estimate that around 15 in 100 women may suffer from postnatal depression, only around 1 in 1000 women experience PPP.PPP is a severe episode of mental illness, which begins suddenly in the days or weeks after having a baby. Symptoms vary and can change rapidly. They can include high mood (mania), depression, confusion, hallucinations and delusions. Puerperal psychosis is a psychiatric emergency. Professional help needs to be accessed immediately.This can happen to any woman. It often occurs ‘out of the blue’ to women who have not been ill before. It can be a frightening experience for women, their partners, friends and family. Women usually recover fully after an episode.",
},
{
"id":"4",
"img":"/assets/dataimages/periods5.jpeg",
"title":"Can I get pregnant on my period?",
"pic":"/assets/images/joey.jpg",
"cat":"bhome",
"author":"Dr Drake Ramoray",
"date":"25-8-2021",
"short":"Technically, yes, you can get pregnant on your period.",
"des":"Every woman’s cycle is different, and if you happen to ovulate early on in your cycle, it’s possible you could get pregnant. For example, say you have unprotected sex on the last day of your period (day four), then you ovulate on day six. Sperm can live for up to five days in your reproductive tract, so there is a slight chance that sperm could find its way to a released egg.",
},

{
"id":"5",
"img":"/assets/dataimages/image8.jpeg",
"title":"Are all home pregnancy testing methods the same?",
"pic":"/assets/images/pheobe.jpeg",
"cat":"bhome",
"author":"Pheobe Buffay",
"date":"20 May 2019",
"short":"Most brands of at-home pregnancy tests are reliable.",
"des":"Most brands of at-home pregnancy tests are reliable. Although the exact testing method of different pregnancy tests can differ from one type to the other, they all look for HCG in your body. If you’re using an at-home test, most will give you the same result. The difference with your at-home tests will be the sensitivity of the test. Some might be more sensitive than others and produce a positive result (detect HCG in your urine) sooner than others. For the most accurate reading, it’s still recommended that you wait until you’ve missed your period. At that point, all tests should be accurate."

},

{
           
"id":"6",
"img":"/assets/dataimages/periods2.jpg",
"title":"Is PMS even real?",
"pic":"/assets/images/joey.jpg",
"cat":"bhome",
"author":"Dr Drake Ramoray",
"date":"30-7-2021",
"short":"If you ask any woman, including myself as a teenager who once cried when my waitress informed me that the restaurant was out of mozzarella sticks that night, PMS is most definitely real.",
"des":"I can count to the day when I struggle with my mood right before my period is about to start. It’s not so much that my mood changes as it is that things that wouldn’t normally upset me do. Examples include traffic, or a work mistake, or my husband’s snoring. These become insurmountable obstacles. It’s like I have less coping ability than normal.Alas, science has debated if PMS is a “real” phenomenon for a long time now. However, a very new study has shown that some women may simply be more sensitive to changes in hormone levels, even normal changes. These could contribute to the increased symptoms of sadness, irritability, and depression that many women face. The study also suggested that up to 56 percent of severe PMS cases are genetically inherited. Thanks, Mom.",
},
{
         
"id":"7",
"img":"/assets/dataimages/abort2.jpg",
"title":"How to avoid misinformation about abortion?",
"pic":"/assets/images/joey.jpg",
"cat":"bhome",
"author":"Dr Drake Ramoray",
"date":"30-11-2021",
"short":"WHO is a good place to start to get evidence based information on the aspects of care and abortion care.",
"des":"WHO is a good place to start to get evidence based information on the aspects of care and abortion care. And I would encourage readers to visit the WHO health topic page to learn about the evidence. But of course, it's also important for individuals to have accurate information about their local context and what their rights are, what the accessibility to services are and what the potential risks are of seeking care within their context. So, of course, it's important to also find a respected and trusted source, perhaps a professional association.",
},
{
"id":"8",
"img":"/assets/dataimages/periods4.jpg",
"title":"Am I pregnant?",
"pic":"/assets/images/joey.jpg",
"cat":"bhome",
"author":"Dr Drake Ramoray",
"date":"22-5-2021",
"short":"OK, this one’s kind of a big deal. If you miss a period",
"des":"The answer to this one is definitely no. Women can miss their period for many reasons, including infection, nutritional changes, travel, and stress. If you skip a period and get a negative pregnancy test, you should schedule a visit to your doctor, just to confirm that there is nothing serious going on. Consistent, irregular periods are a sign that you may need some medical attention or have an underlying disorder.",
}





    
]

}
