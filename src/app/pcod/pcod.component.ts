import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HerService } from '../her.service';

@Component({
  selector: 'app-pcod',
  templateUrl: './pcod.component.html',
  styleUrls: ['./pcod.component.css']
})
export class PcodComponent {



  constructor(private show :HerService,private router : Router){
  }

  database=this.show.getPcod();
gotoHere(id:string,cat:any){
  localStorage.setItem('id',id)
  localStorage.setItem('cat',cat)
  this.router.navigate(['/single'])
}

  
pcod=[
    
    
    
  {
         
             "id":"1",
             "img":"/assets/dataimages/pcod1.jpg",
             "title":"How would I know if I have PCOS?",
             "pic":"/assets/images/rachel.jpeg",
       "cat":"pcod",
             "author":"Dr Rachel Green",
             "date":"8-10-2022",
             "short":"Your symptoms can be vague or mimic symptoms of other conditions, so PCOS can go undiagnosed for a while. There's no single test for it, but a physical exam, ultrasound, and blood tests can help diagnose PCOS.",
             "des":"Your symptoms can be vague or mimic symptoms of other conditions, so PCOS can go undiagnosed for a while. There's no single test for it, but a physical exam, ultrasound, and blood tests can help diagnose PCOS.You need to meet 2 of these 3 official criteria to be diagnosed:Irregular, heavy, or missed periods due to missed ovulation—the release of an egg from your ovaries. This also keeps you from becoming pregnant.Signs of higher-than-normal levels of androgens—male hormones that women also have. They can cause unwanted hair growth, called hirsutism, on your face—especially the upper lip and on the chin, back, chest, and in other places where men typically grow hair. You might lose hair or see it thinning. We can detect those androgens in blood work. Collections of 12 or more egg follicles or cysts on your ovaries that may be larger than normal. Your doctor will use an ultrasound to check for cysts. (Women who don't have PCOS may also have cysts, but fewer than 12 don't meet the criteria for a diagnosis.) Some women with PCOS may not have any cysts",
},
 {
         
             "id":"2",
             "img":"/assets/dataimages/pcod2",
             "title":"What causes PCOS??",
             "pic":"/assets/images/pheobe.jpeg",
       "cat":"pcod",
             "author":"Pheobe Buffay",
             "date":"30-11-2020",
             "short":"We don't have a definitive cause for PCOS.",
             "des":"We don't have a definitive cause for PCOS. Researchers think genetics and environmental factors may play a role in PCOS. There's also a link between PCOS and obesity, and women with PCOS are more likely to be obese. Obesity doesn't cause PCOS, but makes it worse because of insulin resistance, when high levels of insulin—a hormone made by your pancreas—don't get used by your body.",
},

{
         
             "id":"3",
             "img":"/assets/dataimages/pcod3.jpg",
             "title":"How will a PCOS diagnosis affect me and how do we treat it?",
             "pic":"/assets/images/joey.jpg",
       "cat":"pcod",
             "author":"Dr Drake Remoray",
             "date":"10-10-2021",
             "short":"Treatments vary depending on the particular phase of your reproductive life and can include lifestyle changes or medications to help control symptoms.",
             "des":"Treatments vary depending on the particular phase of your reproductive life and can include lifestyle changes or medications to help control symptoms.In the lifestyle category, I recommend my patients exercise at least 30-40 minutes, 3-4 times a week and stay active on other days. I also suggest a carbohydrate-restricted diet, since women with PCOS don't always process carbohydrates as easily as other women. Too many refined carbohydrates like sugars can lead to insulin resistance and weight gain.We also want to make sure you have regular periods. If you don’t, the lining of the uterus can thicken or overgrow and could develop later into endometrial cancer. Having regular periods helps thin out the lining."
},
{
      "id":"4",
             "img":"/assets/dataimages/pcod4.jpg",
             "title":"What should I know going forward?",
             "pic":"/assets/images/rachel.jpeg",
       "cat":"pcod",
             "author":"Dr Rachel Green",
             "date":"9-5-2019",
             "short":"At all stages of PCOS, we worry about possible future development of heart disease, including high blood pressure, high cholesterol, and stroke, along with type 2 diabetes.",
             "des":" At all stages of PCOS, we worry about possible future development of heart disease, including high blood pressure, high cholesterol, and stroke, along with type 2 diabetes. I want to help my patients maintain a healthy lifestyle by eating well and getting recommended levels of exercise, like we talked about before. This helps reduce risk of heart disease and type 2 diabetes in the future.When you've finished menopause, estrogen and testosterone hormones come down naturally, and then PCOS symptoms can improve. Remember that through each stage of the disorder, although we can't cure it, we can manage the symptoms. A reproductive endocrinologist can help.",
},
{
      "id":"5",
             "img":"/assets/dataimages/pcod5.jpg",
             "title":"Signs and Symptoms",
             "pic":"/assets/images/joey.jpg",
       "cat":"pcod",
             "author":"Dr Drake Ramoray",
             "date":"2-12-2018",
             "short":"The preliminary signs and symptoms of PCOS usually develop around the first menstrual period during puberty. However, it may also develop later as a result of weight gain. The signs and symptoms of PCOS vary. ",
             "des":"The preliminary signs and symptoms of PCOS usually develop around the first menstrual period during puberty. However, it may also develop later as a result of weight gain. The signs and symptoms of PCOS vary. The signs and symptoms can be typically more severe if the patient is obese. PCOS is typically diagnosed when at least two of the following signs are present in the patient:Irregular Menstrual Cycle (Periods): A common sign of PCOS is an infrequent, irregular, or prolonged menstrual cycle. For example, having fewer than nine periods a year, or more than 35 days between periods, or abnormally heavy periods are considered irregular periods. Excess Androgen: Increased levels of male hormones (androgens) may result in physical signs such as hirsutism (excessive facial and body hair) and occasionally male-pattern baldness and severe acne.Polycystic Ovaries: The ovaries might increase in size and contain follicles that surround the eggs. These follicles do not open and form small cysts. Hence, the ovaries might fail to function regularly. ",
},

{
      "id":"6",
             "img":"/assets/dataimages/pcod6.jpg",
             "title":"Diagnosis of PCOD/PCOS",
             "pic":"/assets/images/pheobe.jpeg",
       "cat":"pcod",
             "author":"Pheobe Buffay",
             "date":"5-8-2021",
             "short":"here is no specific test for diagnosing PCOS. The doctor will begin with discussing your medical history, including patient’s menstrual periods and weight changes",
             "des":"There is no specific test for diagnosing PCOS. The doctor will begin with discussing your medical history, including patient’s menstrual periods and weight changes. Moreover, a doctor may recommend a physical examination to check for signs of excess hair growth, acne and insulin resistance.A physician might recommend:Pelvic Exam: In it, the doctor checks the uterus. This examination would confirm your reproductive organs’ health. It also inspects the uterus for masses, growth, or other abnormalities.Blood Tests: Blood tests are performed to measure hormone levels. This testing excludes possible causes of menstrual irregularities or excessive androgen levels that mimic PCOS. Your doctor may have your triglycerides, 25-hydroxy Vit D3, FSH, serum luteinising hormone, testosterone, estradiol, 17-OH progesterone, TSH, and serum prolactin checked. Ultrasound: Transvaginal ultrasound is done to check the size and appearance of your ovaries and the thickness of the uterus lining.",
},



]
}


