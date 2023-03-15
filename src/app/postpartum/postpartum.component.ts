import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HerService } from '../her.service';

@Component({
  selector: 'app-postpartum',
  templateUrl: './postpartum.component.html',
  styleUrls: ['./postpartum.component.css']
})
export class PostpartumComponent {


  constructor(private show :HerService,private router : Router){
  }

  database=this.show.getPost();
gotoHere(id:string,cat:any){
  localStorage.setItem('id',id)
  localStorage.setItem('cat',cat)
  this.router.navigate(['/single'])
}

post=[
    
    
    
  {
         
             "id":"1",
             "img":"/assets/dataimages/post1.jpg",
             "title":"What is Postpartum Depression",
             "pic":"/assets/images/rachel.jpeg",
       "cat":"post",
             "author":"Dr Rachel Green",
             "date":"11-10-2021",
             "short":"The birth of a baby can start a variety of powerful emotions, from excitement and joy to fear and anxiety",
             "des":"Most new moms experience postpartum baby blues after childbirth, which commonly include mood swings, crying spells, anxiety and difficulty sleeping. Baby blues usually begin within the first 2 to 3 days after delivery and may last for up to two weeks.But some new moms experience a more severe, long-lasting form of depression known as postpartum depression. Sometimes it's called peripartum depression because it can start during pregnancy and continue after childbirth. Rarely, an extreme mood disorder called postpartum psychosis also may develop after childbirth.Postpartum depression is not a character flaw or a weakness. Sometimes it's simply a complication of giving birth. If you have postpartum depression, prompt treatment can help you manage your symptoms and help you bond with your baby.",
},
 {
         
             "id":"2",
             "img":"/assets/dataimages/post2.avif",
             "title":"How long can postnatal depression last for?",
             "pic":"/assets/images/joey.jpg",
       "cat":"post",
             "author":"Dr Drake Ramoray",
             "date":"30-11-2021",
             "short":"Postnatal depression usually starts four to six weeks after the birth of the child",
             "des":"Postnatal depression usually starts four to six weeks after the birth of the child, although it can be a matter of months before symptoms develop. Depending on the severity of the symptoms and the sort of treatment applied, the time to resolution will be different for everybody. It may last several months and sometimes up to a year, depending on individual factors. For some who don’t receive support and treatment it can last much longer, so it’s important to get the correct help.",
},

{
         
             "id":"3",
             "img":"/assets/dataimages/post3",
             "title":"How common is postnatal depression?",
             "pic":"/assets/images/joey.jpg",
       "cat":"post",
             "author":"Dr Drake Ramoray",
             "date":"2-1-2021",
             "short":"If you looked at five different resources you’d get five different answers to this question.",
             "des":"It’s all down to reporting and diagnosis. It is felt that postnatal depression is often misdiagnosed or under-diagnosed. I would say that the 'baby-blues' is very common and exists for about 85% of new mothers in the UK. The more severe depressive disorder that is formally assessed and diagnosed occurs in around 10-15% of new mothers in the UK.",
},
{
      "id":"4",
             "img":"/assets/dataimages/post4.jpg",
             "title":"If you have postnatal depression after one birth will it happen again after the next birth?",
             "pic":"/assets/images/joey.jpg",
       "cat":"post",
             "author":"Dr Drake Ramoray",
             "date":"22-5-2021",
             "short":"This is a question that asks us to think about risk factors in the development of postnatal depression.",
             "des":"If you experienced postnatal depression after the birth of one child, you are at increased risk of developing postnatal depression after the birth of your next child. However, you may have coped well with you first child, and felt depressed after the second, or the other way around. In short, there’s no way of knowing. Instead of trying to predict what might happen remember that being mindful of your mood in the days and weeks after a future birth could help you spot the signs and get appropriate help and support early if you do start to experience symptoms.",
},
{
      "id":"5",
             "img":"/assets/dataimages/post5.jpeg",
             "title":"Can anti-depressants be dangerous for breastfed babies?",
             "pic":"/assets/images/joey.jpg",
       "cat":"post",
             "author":"Dr Drake Ramoray",
             "date":"2-2-2021",
             "short":"Your GP can prescribe medication to help with postnatal depression that’s safe for breastfed babies.",
             "des":"It's important to discuss potential benefits and side effects of medicines fully before taking any, and to keep monitoring progress with them. Medication may enter breast milk, and if you/the mother is breastfeeding you will need to bear this in mind when deciding whether or not to take it. Some drugs have known effects on infants, while others appear to be quite safe, so it’s important to discuss this with your doctor or another qualified medical professional. If you do decide to try medication, it may be necessary to try different drugs to achieve the best results. Again, your doctor will be able to advise you on drugs that are safe for you and your baby.",
},
{
      "id":"6",
             "img":"/assets/dataimages/post6.jpg",
             "title":"Is there any way to prevent postnatal depression or treat it before it becomes a real problem?",
             "pic":"/assets/images/joey.jpg",
       "cat":"post",
             "author":"Dr Drake Ramoray",
             "date":"5-8-2021",
             "short":"This is a really important question. The NHS is guided by the principals recommended by NICE (National Institute for Clinical Excellence in Health).",
             "des":"This body recommends that all pregnant woman are screened for their 'risk' of developing postnatal depression (and other psychological problems) and if they fall into a high-risk category preventative treatment should be offered to try and reduce the risk of symptoms developing post-partum. As part of this guidance all women should also be assessed following birth and at health visitor sessions for any changes to mood, so symptoms that occur can be managed more quickly.",
},
{			   
             "id":"7",
             "img":"/assets/dataimages/post7.jpg",
             "title":"What is puerperal psychosis?",
             "pic":"/assets/images/joey.jpg",
       "cat":"post",
             "author":"Dr Drake Ramoray",
             "date":"5-8-2021",
             "short":"This is a really important question. The NHS is guided by the principals recommended by NICE (National Institute for Clinical Excellence in Health).",
             "des":"Puerperal psychosis - also known as post-partum psychosis (PPP) is a much less common condition than postnatal depression. Where we estimate that around 15 in 100 women may suffer from postnatal depression, only around 1 in 1000 women experience PPP.PPP is a severe episode of mental illness, which begins suddenly in the days or weeks after having a baby. Symptoms vary and can change rapidly. They can include high mood (mania), depression, confusion, hallucinations and delusions. Puerperal psychosis is a psychiatric emergency. Professional help needs to be accessed immediately.This can happen to any woman. It often occurs ‘out of the blue’ to women who have not been ill before. It can be a frightening experience for women, their partners, friends and family. Women usually recover fully after an episode.",
},
{			   
             "id":"8",
             "img":"/assets/dataimages/post8.jpg",
             "title":"What treatment is there for Postnatal Depression?",
             "pic":"/assets/images/joey.jpg",
       "cat":"post",
             "author":"Dr Drake Ramoray",
             "date":"5-8-2021",
             "short":"There are two main approaches to treating postnatal depression: Talking therapies and medication.",
             "des":"Talking therapies like cognitive behavioural therapy (CBT) can be useful in providing patients with techniques for managing their symptoms, but there are often long waiting lists for this type of treatment when going through your GP.Another treatment method that is often prescribed for postnatal depression is antidepressants which some people find very effective, but they are not without side effects and have potential risks for the foetus.At The London Psychiatry Centre we also offer a highly effective non-invasive drug-free treatment for depression called repetitive Transcranial Magnetic Stimulation (rTMS). rTMS is free from side effects and is safe for use during pregnancy and after birth – you can find out more about our impressive success rates here.The good news is that with the right treatment and support, most women will make a full recovery.If you’re experiencing signs of postnatal depression and would like effective treatment without the wait, please don’t hesitate to call our admin team on 020 7580 4224 if you have any questions or if you would like to book a consultation.",
},




]
}


