import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HerService } from '../her.service';

@Component({
  selector: 'app-pregnancy',
  templateUrl: './pregnancy.component.html',
  styleUrls: ['./pregnancy.component.css']
})
export class PregnancyComponent {


  constructor(private show :HerService,private router : Router){
  }

  database=this.show.getPreg();
gotoHere(id:string,cat:any){
  localStorage.setItem('id',id)
  localStorage.setItem('cat',cat)
  this.router.navigate(['/single'])
}
preg=[
  {
    "id":"1",
    "img":"/assets/dataimages/pregsign.jpeg",
    "title":"First Signs of Pregnancy",
    "pic":"/assets/images/rachel.jpeg",
    "author":"Dr. Rachel Green",
    "cat":"preg",
    "date":"12 Nov 2018",
    "short":"The most common sign of early pregnancy? A missed period.",
    "des":" Your menstrual cycle is your body’s way of preparing for a possible pregnancy each month. Part of that is the thickening of your uterine lining, which is where a fertilized egg would implant to begin a pregnancy.If you’re not pregnant, your period is how your uterus sheds that extra lining. If you are pregnant, that lining stays put and you don’t get your normal flow. This is why a missed period is often the earliest sign of pregnancy. Of course, a delayed or missed period doesn’t always mean you’re pregnant. If your body is under a lot of stress or you have a hormonal imbalance, you could be experiencing an irregular menstrual cycle."

},

{
  "id":"2",
  "img":"/assets/dataimages/nopreg.jpeg",
  "title":"Could you have early pregnancy symptoms and not be pregnant?",
  "pic":"/assets/images/joey.jpg",
  "cat":"preg",
  "author":"Dr. Drake Ramoray",
  "date":"30 Sept 2021",
  "short":"Have symptoms, Not pregnant?",
  "des":"Yes. As we’ve mentioned, many early pregnancy symptoms can overlap with symptoms of other conditions, especially premenstrual symptoms. So, the best way to know if the symptoms you’re experiencing are pregnancy related is to try to relax and patiently wait until it’s time to take a pregnancy test."

},
{
  "id":"3",
  "img":"/assets/dataimages/image3.jpeg",
  "title":"When should you see a doctor about a new pregnancy?",
  "pic":"/assets/images/pheobe.jpeg",
  "cat":"preg",
  "author":"Pheobe Buffay",
  "date":"13 Jan 2021",
  "short":"If you’ve taken a pregnancy test and it’s positive, go ahead and make your first prenatal visit right away",
  "des":"If you’ve taken a pregnancy test and it’s positive, go ahead and make your first prenatal visit right away. This is also a great time to start looking into educational resources like the myHealthyPregnancy app.At the first prenatal visit, you’ll get a physical exam and other tests to make sure everything is looking healthy, and you’ll learn about the rest of your prenatal appointment schedule. You’ll also get to talk through any expectations and questions you have, such as which foods to eat and avoid while pregnant."

},
{
  "id":"4",
  "img":"/assets/dataimages/image4.jpeg",
  "title":"Pregnancy Tests",
  "pic":"/assets/images/rachel.jpeg",
  "cat":"preg",
  "author":"Dr. Rachel Green",
  "date":"10 July 2022",
  "short":"Pregnancy Tests",
  "des":"Pregnancy tests look for a special hormone —human chorionic gonadotropin (HCG) — that only develops in a person’s body during pregnancy. These tests can use either your pee or blood to look for HCG. At-home pregnancy tests that use your pee are the most common type. When used correctly, home pregnancy tests are 99% accurate."

},
{
  "id":"5",
  "img":"/assets/dataimages/image5.jpeg",
  "title":"What hormone levels are checked for a pregnancy test?",
  "pic":"/assets/images/pheobe.jpeg",
  "cat":"preg",
  "author":"Pheobe Buffay",
  "date":"20 Oct 2020",
  "short":"What hormone levels are checked for a pregnancy test?",
  "des":"Pregnancy tests look for an elevated amount of HCG. Levels of HCG rise quickly – doubling every few days in the first weeks of pregnancy. The placenta produces HCG. Only pregnant people have a placenta, which develops shortly after a fertilized egg attaches to your uterine wall."

},
{
  "id":"6",
  "img":"/assets/dataimages/image6.jpeg",
  "title":"When should I take a pregnancy test?",
  "pic":"/assets/images/joey.jpg",
  "cat":"preg",
  "author":"Dr Drake Ramoray",
  "date":"29 Oct 2017",
  "short":"If you think you could be pregnant, it’s a good idea to take a test and make sure.",
  "des":"If you think you could be pregnant, it’s a good idea to take a test and make sure. Home pregnancy tests can differ in how early they’ll detect a pregnancy. In many cases, you might get a positive result from an at-home test as early as 10 days after conception. For a more accurate result, wait until after you’ve missed your period to take a test. Remember, if you take a test too soon, it could be negative even if you’re pregnant. If you get a negative test and then miss your period, take another test."

},
{
  "id":"7",
  "img":"/assets/dataimages/image7.jpeg",
  "title":"At-home pregnancy test",
  "cat":"preg",
  "pic":"/assets/images/rachel.jpeg",
  "author":"Dr. Rachel Green",
  "date":"14 April 2021",
  "short":"There are three ways to take an at-home pregnancy test:",
  "des":"There are three ways to take an at-home pregnancy test: Pee in a clean cup. Then, place one to several drops of your pee on a chemical strip Place the pregnancy test strip in your urine stream while you pee. Pee in a clean cup and then dip the test strip in the pee while it’s still in the cup.For many of these tests, HCG can be detected in your urine about 10 days after conception. However, taking it after you miss your period reduces the chance of getting a false-negative result. A missed period typically happens around 14 days after conception."

},
{
  "id":"8",
  "img":"/assets/dataimages/image8.jpeg",
  "title":"Are all home pregnancy testing methods the same?",
  "pic":"/assets/images/pheobe.jpeg",
  "cat":"preg",
  "author":"Pheobe Buffay",
  "date":"20 May 2019",
  "short":"Most brands of at-home pregnancy tests are reliable.",
  "des":"Most brands of at-home pregnancy tests are reliable. Although the exact testing method of different pregnancy tests can differ from one type to the other, they all look for HCG in your body. If you’re using an at-home test, most will give you the same result. The difference with your at-home tests will be the sensitivity of the test. Some might be more sensitive than others and produce a positive result (detect HCG in your urine) sooner than others. For the most accurate reading, it’s still recommended that you wait until you’ve missed your period. At that point, all tests should be accurate."

},
{
  "id":"9",
  "img":"/assets/dataimages/image9.jpeg",
  "title":"Exercise in Pregnancy",
  "pic":"/assets/images/rachel.jpeg",
  "author":"Dr Rachel Green",
  "cat":"preg",
  "date":"14 Nov 2019",
  "short":"Exercise in Pregnancy",
  "des":"Staying active is important for your general health and can help you reduce stress, improve circulation, and boost your mood. It can also encourage better sleep. Take a pregnancy exercise class or walk at least 15 to 20 minutes a day at a moderate pace—in cool, shaded areas or indoors in order to prevent overheating.Pilates, yoga, swimming, and walking are also great activities for most pregnant people, but be sure to check with your doctor first before starting any exercise program. Aim for 30 minutes of exercise most days of the week. Listen to your body, though, and don't overdo it."

},
]

}

