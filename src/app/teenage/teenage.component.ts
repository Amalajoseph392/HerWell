import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HerService } from 'src/app/her.service';

@Component({
  selector: 'app-teenage',
  templateUrl: './teenage.component.html',
  styleUrls: ['./teenage.component.css']
})
export class TeenageComponent {

  constructor(private show :HerService,private router : Router){
  }

  database=this.show.getTeen();
gotoHere(id:string,cat:any){
  localStorage.setItem('id',id)
  localStorage.setItem('cat',cat)
  this.router.navigate(['/single'])
}

teen=[
     
    {
           
              "id":"1",
               "img":"https://static.toiimg.com/photo/msid-83205915/83205915.jpg",
               "title":"Lets know about early age mensuration",
               "pic":"https://theselfpublisher.com/wp-content/uploads/bb-plugin/cache/C.S.-Lakin-circle.jpg",
               "author":"C.S Lakin",
               "date":"01-01-2022",
               "cat":"teen",
               "short":"Female puberty is starting earlier and earlier, with worrying consequences for women's health",
               "des":"Three weeks before her eighth birthday, Josie got her period at school. Magen, her mother, stopped at a drugstore for supplies before picking up her daughter. In the tampon aisle, she found a shelf of tween” menstrual pads promising to fit smaller bodies.” She remembers thinking, How does this even exist as a product Magen was heartbroken that her seven-year-old was menstruating but not completely surprised. She had begun to notice her daughter’s body odor when Josie was six. By the time Josie turned seven, she was getting blackheads on her nose, slamming doors and sleeping late. She developed breast buds the summer before second grade. That was traumatizing for both of us, Magen says.Magen showed Josie how to put a pad in her underwear and then called the pediatrician, expecting to be referred for some kind of hormonal testing. Instead, Magen recalls, he said, Yes, this happens. She likely won’t be regular for a while, but she’s very clearly in puberty at eight years old.”The average age of menarche, or a girl’s first period, in the U.S. is now 12, according to the most recent data from the Centers for Disease Control and Prevention’s National Health and Nutrition Examination Survey, down from 14 a century ago and as much as six months earlier than 20 or 30 years ago. But puberty does not start with menstruation. The onset of breast development, or thelarche, tends to come first, just as Josie experienced. We’re now seeing thelarche occur 18 months to two years earlier than we did a few decades ago,” says Frank Biro, who studies problems related to pubertal maturation at Cincinnati Children’s Hospital Medical Center. His research, published in 2013 in the journal Pediatrics, put the average age of breast development at 8.8 years old for African-American girls, 9.3 for Hispanic girls, 9.7 for Caucasians and 9.7 for Asian-Americans. The age of breast development has clearly dropped, while the age of menarche has drifted down. They are both concerning, he says.One popular misconception about menarche is that it represents the onset of ovulation; in fact, most girls do not begin ovulating regularly for up to two years after their first period, which is why early ones can be light and irregular. Menarche is instead triggered by changes in a girl’s estrogen levels. The most probable explanation for why periods and breast development might be happening younger is that girls tend to weigh more today than they did a generation ago—and this higher body fat percentage is leading to earlier activation of the pituitary gland, which produces the hormones responsible for puberty.            In Biro’s study, a higher body mass index (BMI) was the strongest predictor of early breast development across all racial groups, although the relation was correlative, not causal. What we need to ask is, Why has BMI gone up?” he says. Decreased physical activity and a more calorically dense diet are probably part of the puzzle. But I think another critical piece is our ubiquitous environmental exposure to endocrine-disrupting chemicals,” or EDCs. This class of chemicals (including phthalates, bisphenol A and others) is used in many consumer products (shower curtains, plastic bottles, couch cushions) and has been shown to mimic estrogen and other naturally occurring hormones in the human body. Biro theorizes that some of these chemicals may promote weight gain or contribute to early puberty by influencing how cells and the body regulate metabolism, which then affects estrogen production. He is currently leading a study tracking the growth and development of 379 girls from age six onward that has been examining relations between their pubertal development and environmental exposures. Trauma could be another explanation: Stress can also change your estrogen levels,” Biro says.",
             
            },
    {
               "id":"2",
                "img":"https://images.ctfassets.net/juauvlea4rbf/1DuQJLlEXO4mqei204SgWs/90a81034d9ac013681aae206a25307f4/Getting-your-period-at-school_2x.png?w=1920&h=960&q=50&fm=webp",
                "title":"Getting your period at school: 5 tips for stress-free periods",
                "pic":"/assets/images/rachel.jpeg",
                "author":"Ada Dubraska ",
                "cat":"teen",
                "date":"September 21, 2017",
                "short":"Here are five tips for how to deal with an unexpected period at school, or in any other public setting.",
                "des":" It's unlikely that your first period will be very heavy, so you'll probably figure out that it's happened before your clothes are stained. But if your clothes do get stained on your first period, or a later one, you'll definitely want to visit the nurse or counselor. You don't want to be worried all day long that someone will see the stain, so you need some fresh clothes. Maybe you have sweatpants in your locker for gym class. If you don't have any spare clothes, you'll need to see someone on the school staff so you can call a parent, who can bring you some clothes or pick you up and take you home. What if you return to class with different pants on and someone asks about it? You don't have to say what really happened. That would be embarrassing. Instead, you can just say something like,I spilled something on my pants so I changed. Do you feel less worried now about getting your period at school? We hope so. Although it's not very convenient to get your period at school, remember that there are people you can turn to for help. You'll get in the habit of being prepared. And before you know it, getting your period — wherever you are — will be no big deal.",
              
            },
    
     {
           "id":"3",
            "img":"https://www.shape.com/thmb/ydog5LPICLJ1uBvEBfHpmC1A7CE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/signs-breast-cancer-c3ef3131a0344dc5ab8ffc49a38fa85c.jpg",
            "title":"Why are my breasts different sizes? Is there anything I can do about it?",
            "pic":"/assets/images/rachel.jpeg",
            "author":"Amy W",
            "date":"22 Jan 2023",
            "cat":"teen",
            "short":"Differant breast size is so common",
            "des": "It is normal to have different sized breasts. Many girls and women do.  If you have just started developing breasts, one breast may grow more quickly than the other. This difference in breast size may even out. But it's also perfectly normal for breasts to be different sizes even when they're fully developed.If the size difference between your breasts bothers you, you can wear an extra-supportive bra or put a special insert in your bra (on the side where the breast is smaller). This will make your breasts look more equal in size. A bra salesperson can help with ideas for evening things out. Don't be embarrassed — rest assured, they've helped others with the same concern! If you're still uncomfortable about your breast size, talk to your doctor or gynecologist. He or she can reassure you that your breasts are normal and talk to you about your options. The only way to permanently change the shape of the breasts is through plastic surgery. Most doctors recommend that a girl wait until her breasts are done growing (about age 20) before considering plastic surgery.",
           
        },
    
      {
       "id":"4",
        "img":"https://vaya.in/news/wp-content/uploads/2019/02/irregular-periods-1280x720.jpg",
        "title":"What causes irregular periods?",
        "pic":"/assets/images/pheobe.jpeg",
        "author":"Dr. Monica Geller",
        "cat":"teen",
        "date":"13 Dec 2022",
        "short":"Most of the time, irregular periods are part of the normal changes that can happen when you're a teen",
        "des":"Sometimes, irregular periods can be caused by some medicines, exercising too much, having a very low or high body weight, or not eating enough calories.Hormone imbalances can also cause irregular periods. For example, thyroid hormone levels that are too low or too high can cause problems with periods. Some girls have extra androgen, a hormone that can cause hair growth on the face, chin, chest, and abdomen. Extra androgen can also makes girls gain weight and have irregular periods."
    
    },
    
    {
       "id":"5",
        "img":"https://genepowerx.com/wp-content/uploads/2022/05/Irregular-Menstrual-Cycle-700x400.jpg",
        "title":"What is irregular periods?",
        "pic":"/assets/images/pheobe.jpeg",
        "author":"Pheobe Buffay",
        "cat":"teen",
        "date":"14 March 2021",
        "short":"Irregular perriods are so common among teenage girls.",
        "des":"A girl's body may not follow an exact schedule. It's common, especially in the first 2 years after a girl starts getting her period, to skip periods or to have irregular periods. Illness, rapid weight change, or stress can also make things more unpredictable. That's because the part of the brain that regulates periods is influenced by events like these. Going on a trip or having a major change in schedule can also make your period come at a different time than expected. All of this is perfectly normal.A girl's body may not follow an exact schedule. It's common, especially in the first 2 years after a girl starts getting her period, to skip periods or to have irregular periods. Illness, rapid weight change, or stress can also make things more unpredictable. That's because the part of the brain that regulates periods is influenced by events like these. Going on a trip or having a major change in schedule can also make your period come at a different time than expected. All of this is perfectly normal."
    
    },
    
    {
       "id":"6",
        "img":"https://images.ctfassets.net/6mz6gnctx58g/3sVyCGrlXXugPz7wH5KJ9C/0c5a14314348239d2881775c6ac4a36b/Symptoms_for_Delayed_Puberty_Mb_2x.png",
        "title":"Dealing with delayed puberty",
        "pic":"/assets/images/joey.jpg",
        "author":"Dr. Drake Remoray",
        "cat":"teen",
        "date":"11 Feb 2019",
        "short":"It can be tough to watch your friends grow and develop when the same thing's not happening to you.",
        "des":"It can be tough to watch your friends grow and develop when the same thing's not happening to you. You may feel like you're never going to catch up. Even when the doctor or your parents reassure you that things will be OK, it's hard to wait for something that can affect how you feel about yourself.If you're feeling depressed or having school or other problems, talk to your mom or dad, your doctor, or another trusted adult about finding a counselor or therapist you can talk to. They can help you sort out your feelings and suggest ways to cope with them. Delayed puberty can be difficult for anyone to accept and deal with. But it's a problem that usually gets solved. Ask for help if you have any concerns about your development"
    
    },
    
    {
       "id":"7",
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR8qyA_WVGhNEQ-Z0_zqrlpBEnWtIwZIQT0Q&usqp=CAU",
        "title":" How to use tampon?",
        "pic":"/assets/images/rachel.jpeg",
        "author":"Dr. Rachel Green",
        "date":"12 April 2017",
        "cat":"teen",
        "short":"Tampons and its use",
        "des":"A tampon is put into the vagina using an applicator or a finger. After washing your hands, follow the directions that come with the tampons carefully and be sure to relax.It's very important to change tampons every few hours and that you wear the absorbency type that is right for you. Change a tampon every 4–6 hours or when it's saturated with blood.Tampons have a string attached to one end that stays outside a girl's body. To remove the tampon, pull gently on the string until the tampon comes out. Wrap it in toilet paper and throw it in the trash.Don't flush a tampon down the toilet. Even when the box says a tampon is flushable, tampons can still cause problems in some plumbing systems.Because you can't see a tampon, you'll need to remember when it's time to change. If you forget to change it, you may get spotting or leakage on your underwear or clothing"
    
    },
    
    {
       "id":"8",
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMAak2gjAWom_lodXECXRTm5XRTX0loZBsPg&usqp=CAU",
        "title":"What are Tampons?",
        "pic":"/assets/images/rachel.jpeg",
        "author":"Dr. Rachel Green",
        "date":"16 May 2019",
        "cat":"teen",
        "short":"Tampons absorb blood from inside the vagina. A tampon is also made of absorbent material, but it's compressed into a small tube",
        "des":"Tampons absorb blood from inside the vagina. A tampon is also made of absorbent material, but it's compressed into a small tube. Tampons come in different sizes and absorbencies for heavier and lighter periods.Tampons also can come with or without deodorant. There's no need for deodorant in a tampon, though, because changing tampons regularly usually gets rid of any odor. The deodorant in tampons can irritate the vagina, and could cause an allergic reaction in some girls.Some tampons come with an applicator. An applicator is a plastic or cardboard tube that guides the tampon into the vagina. Other tampons are inserted using a finger."
    
    },
    
    {
       "id":"9",
        "img":"https://hips.hearstapps.com/hmg-prod/images/menstrual-cup-on-pink-background-feminine-hygiene-royalty-free-image-1617216632.?crop=0.626xw:0.939xh;0.272xw,0.0612xh&resize=1200:*",
        "title":"What is menstrual cup?",
        "pic":"/assets/images/joey.jpeg",
        "cat":"teen",
        "author":"Dr. Drake Ramoray",
        "date":"23 June 2022",
        "short":"Like a tampon, a menstrual cup is inserted into the vagina. Instead of absorbing blood, the cup catches it before it flows out of the vagina",
        "des":"Like a tampon, a menstrual cup is inserted into the vagina. Instead of absorbing blood, the cup catches it before it flows out of the vagina. Menstrual cups are made of flexible materials, like rubber or silicone. You can't see when the cup is full, so empty it (or, in the case of disposable cups, throw it away) several times a day. Instructions that come with the cup explain how to do this. Because some menstrual cups look like a diaphragm, girls might wonder if a menstrual cup could be used as birth control. But a menstrual cup does not prevent pregnancy."
    
    },
    
    {
       "id":"10",
        "img":"/assets/dataimages/sexabuse1.jpeg",
        "title":"Sexual abuse! What is it?",
        "pic":"/assets/images/rachel.jpeg",
        "author":"Dr Rachel Green",
        "date":"30 Nov 2020",
        "cat":"teen",
        "short":"Sexual abuse is one form of child abuse.",
        "des":"Sexual abuse is one form of child abuse. It includes a wide range of actions between a child and an adult or older child. Often these involve body contact, but not always. Exposing one's genitals to children or pressuring them for sex is sexual abuse. Using a child for pornography is also sexual abuse.Most sexual abusers know the child they abuse. They may be family friends, neighbors or babysitters. About one-third of abusers are related to the child. Most abusers are men. If you think a child may have been abused, it's important to report it."
    
    },
    
    {
       "id":"11",
        "img":"/assets/dataimages/pads1.jpeg",
        "title":"Intoducing Pads To Teenage",
        "pic":"/assets/images/pheobe.jpeg",
        "author":"Pheobe Buffay",
        "date":"12 Jan 2023 ",
        "short":"What Are Pads?",
        "cat":"teen",
        "des":"Pads are rectangles of absorbent material that attach to the inside of a girl's underwear and catch menstrual blood. They're sometimes also called sanitary pads or sanitary napkins. Some pads have extra material on the sides. These wings fold over the edges of your underwear to help hold the pad in place and prevent leaking. There are many different types of pads, including:Some girls have heavier bleeding with their periods and others have lighter bleeding. And most girls have a light days and heavier days. Pads can vary by size or by absorbency. You want to try to find a pad that is big enough that you don't worry about leaking through, but is small enough to be comfortable. It might take a little bit of experimenting to find the right pad for the different times of your period.Some pads are scented or come with a deodorant in them. But these can irritate the vagina or cause an allergic reaction in some girls."
    
    },
    
    {
       "id":"12",
        "img":"https://images-prod.dazeddigital.com/1000/azure/dazed-prod/1250/4/1254766.jpg",
        "title":"Usage of Pads",
        "pic":"/assets/images/rachel.jpeg",
        "author":"Dr Rachel Green",
        "date":"13 Nov 2020",
        "cat":"teen",
        "short":"How to use pads",
        "des":"Pads should be changed every 3–4 hours, even if you have a light flow. Regular changing prevents buildup of bacteria and stops odor. If you have a heavier flow, you might need to change pads more often to make sure you don't leak."
    
    },
    
     
    
    
    
    
    
    ]


}