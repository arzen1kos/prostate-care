// import { resourceContent } from '../home.ts'

// const nodeTitleGetter = (title:string, user: string) => {
//   return resourceContent.contentByCategory[user].title || `Stage 0 – Stay Ahead, Stay Informed`;
// };

export const blueguideData = {
  key: `Start Here`,
  text: `Start Here`,
  info: `
    Navigating this journey can often bring worry and unknowns. This guide is here for you and your whānau: to make things clearer, one step at a time.
  `,
  description: [
    `Welcome to Blue Guide — your personal guide to understanding prostate cancer. `,
    `From early screening to treatment options, this walkthrough helps you navigate each step with clarity and confidence.`,
    `Learn what to ask your doctor, explore support resources, and feel more informed — all in one simple, accessible path.`,
    `Watch the demo below to see how Blue Journey can help you or a loved one. Then scroll down to explore the interactive page map.`
  ],
  children: [
    {
      key: `Stage Zero`,
      text: "Stage 0 – Stay Ahead, Stay Informed",
      info: `
      <strong>About Stage 0</strong>
      On this page, you’ll find essential details about Stage 0 prostate cancer — what it means, how it’s monitored, and how you can take proactive steps for your health.
      <br><br>

      + 
      <a href="/stage-0/what-you-need-to-know-early">
      What prostate cancer is, and what it isn\’t<br>
      </a>
      + 
      <a href="/stage-0/should-i-get-screened">
      What you need to know about screening and how to get tested<br>
      </a>
      + 
      <a href="/stage-0/small-choices-big-impact">
      How to lower your risk of prostate cancer — habits & lifestyle tips<br>
      </a>
      `,
      children: [
        {
          key: `Starters, Prevention, Testing`,
          text: `What You Need to Know Early`,
          info: `
          <strong>+ Intro to prostate basics, risks, symptoms,  <br></strong>
          <strong>+ What prostate cancer is (and isn\’t),  <br></strong>
          <strong>+ Why screening matter,  <br></strong>
          <strong>+ What the PSA test actually tells you <br></strong>          

          <br><br>
          <button class="rounded-md p-2 bg-[var(--color-palette-five)] hover:bg-[var(--color-palette-five)]">
            <a class="text-[var(--color-palette-one)] hover:text-[var(--color-palette-two)]" href="/stage-0/what-you-need-to-know-early">Walk This Way →</a>
          </button>
          `
        },
        {
          key: `Nutrition & Healthy Lifestyle Tips`,
          text: `Small Choices, Big Impact`,
          info: `
          <strong>+ Nutrition tips to support prostate health<br></strong>
          <strong>+ Building healthy sleep & fitness habits<br></strong>
          <strong>+ How lifestyle influences your risk<br></strong>

          <br><br>
          <button class="rounded-md p-2 bg-[var(--color-palette-five)] hover:bg-[var(--color-palette-five)]">
            <a class="text-[var(--color-palette-one)] hover:text-[var(--color-palette-two)]" href="/stage-0/small-choices-big-impact">Walk This Way →</a>
          </button>          
          `
        },
        {
          key: `Testing`,
          text: `Should I Get Screened?`,
          info: `
          <strong>PSA test info, who screening is for, etc.</strong>
          <br>
            + What to do if you get tested<br>
            + What to do if you get diagnosed<br>
          <strong>What “watchful waiting” means</strong>
          <br>
          + <br>
          <strong>Next steps & questions to ask. How to track changes without stress</strong>
          <br>
          + <br>

          <br><br>
          <button class="rounded-md p-2 bg-[var(--color-palette-five)] hover:bg-[var(--color-palette-five)]">
            <a class="text-[var(--color-palette-one)] hover:text-[var(--color-palette-two)]" href="/stage-0/should-i-get-screened">Walk This Way →</a>
          </button>          
          `
        },        
      ]
    },
    {
      key: `Stage One`,
      text: "Stage 1 – You Caught It Early. That’s Power",
      info: `
      <strong>About Stage 1</strong>
      Early diagnosis means better options. Learn what Stage 1 means, treatment choices, supportive care like diet and fitness, and how to work with your medical team.
      <br><br>
      + <a href="/stage-1/understanding-your-diagnosis">
          Understanding Your Diagnosis<br>
        </a>

      + <a href="/stage-1/doctor-time-making-every-visit-count">
          Doctor Time: Making Every Visit Count<br>
        </a>        
      + <a href="/stage-1/navigating-your-options">
          Navigating Your Options<br>
        </a>
      `,
      children: [
        {
          key: `Diagnosis`,
          text: `Understanding Your Diagnosis`,
          info: `
          <strong>+ What Stage 1 means, in plain terms.</strong><br>
          <strong>+ First-line treatment options explained.",</strong><br>
          <strong>+ What staying on active surveillance looks like</strong><br>

          <br><br>
          <button class="rounded-md p-2 bg-[var(--color-palette-five)] hover:bg-[var(--color-palette-five)]">
            <a class="text-[var(--color-palette-one)] hover:text-[var(--color-palette-two)]" href="/stage-1/understanding-your-diagnosis">Walk This Way →</a>
          </button>            

          `
        },
        {
          key: `Check-Ups`,
          text: `Doctor Time: Making Every Visit Count`,
          info: `
          <strong>+ How often to check in with your doctor, based on your stage.</strong><br>
          <strong>+ What to ask about symptoms, treatment, and side effects.</strong><br>
          <strong>+ Tips for tracking appointments, results, and follow-ups.</strong><br>

          <br><br>
          <button class="rounded-md p-2 bg-[var(--color-palette-five)] hover:bg-[var(--color-palette-five)]">
            <a class="text-[var(--color-palette-one)] hover:text-[var(--color-palette-two)]" href="/stage-1/doctor-time-making-every-visit-count">Walk This Way →</a>
          </button>            
          `
        },        
        {
          key: `Treatment Plan`,
          text: `Navigating Your Options`,
          info: `
          <strong>+ Treatment paths: surgery, radiation, hormone therapy.</strong><br>
          <strong>+ What to expect during and after.</strong><br>
          <strong>+ Working with your medical team.</strong><br>

          <br><br>
          <button class="rounded-md p-2 bg-[var(--color-palette-five)] hover:bg-[var(--color-palette-five)]">
            <a class="text-[var(--color-palette-one)] hover:text-[var(--color-palette-two)]" href="/stage-1/navigating-your-options">Walk This Way →</a>
          </button>            
          `
        },        
      ]
    },
    {
      key: `Stage Two`,
      text: "Stage 2 – You’re Not in This Alone",
      info: `
      <strong>About Stage 2</strong>
      Focus on mental and emotional support, managing “what if” worries, building your support network, and recognizing body signals like side effects and fatigue to stay steady and active.
      <br><br>
      +
      <a href="/stage-2/staying-grounded-through-it-all">
     Staying Grounded Through It All<br>
      </a>
      +
      <a href="/stage-2/body-care-that-builds-you-up">
        Body Care That Builds You Up<br>
      </a>      
      + 
      <a href="/stage-2/your-body-your-needs">
      Your Body, Your Needs<br>
      </a>      
      `,
      children: [
        {
          key: `Diet & Fitness`,
          text: `Strength Starts with Care`,
          info: `
          <strong>+ Eating to support recovery.</strong><br>
          <strong>+ Sleep hygiene during stress.</strong><br>
          <strong>+ Safe movement & light fitness</strong><br>

          <br><br>
          <button class="rounded-md p-2 bg-[var(--color-palette-five)] hover:bg-[var(--color-palette-five)]">
            <a class="text-[var(--color-palette-one)] hover:text-[var(--color-palette-two)]" href="/stage-2/body-care-that-builds-you-up">Walk This Way →</a>
          </button>            
          `
        },        
        {
          key: `Mind Matters`,
          text: `Staying Grounded Through It All`,
          info: `
          <strong>+ Coping with “what if” thoughts and emotional overwhelm.</strong><br>
          <strong>+ Knowing when to ask for help — and who to turn to.</strong><br>
          <strong>+ Using tools, check-ins, and conversations to stay steady.</strong><br>
          <br><br>
          <button class="rounded-md p-2 bg-[var(--color-palette-five)] hover:bg-[var(--color-palette-five)]">
            <a class="text-[var(--color-palette-one)] hover:text-[var(--color-palette-two)]" href="/stage-2/staying-grounded-through-it-all">Walk This Way →</a>
          </button>               
          `
        },      
        {
          key: `Signs & Warnings`,
          text: `Your Body, Your Needs`,
          info: `
          <strong>+ Managing side effects through food & rest.</strong><br>
          <strong>+ Handling fatigue & disrupted sleep.</strong><br>
          <strong>+ Keeping active within your limits.</strong><br>
          <br><br>
          <button class="rounded-md p-2 bg-[var(--color-palette-five)] hover:bg-[var(--color-palette-five)]">
            <a class="text-[var(--color-palette-one)] hover:text-[var(--color-palette-two)]" href="/stage-2/your-body-your-needs">Walk This Way →</a>
          </button>               
          `
        },        
      ]
    },
    {
      key: `Stage Three`,
      text: "Stage 3 – It’s a Lot. We’ll Walk It With You",
      info: `
      <strong>About Stage 3</strong>
      Learn about Stage 3 treatments, coordinating care, managing complex symptoms, gentle self-care, and emotional support to stay grounded.
      <br><br>
      + 
      <a href="/stage-3/what-to-expect-now">
      What to Expect Now<br>
      </a>
      + 
      <a href="/stage-3/caring-for-a-tired-body">
     Caring for a Tired Body<br>
      </a>
      + 
      <a href="/stage-3/finding-your-ground">
      Finding Your Ground<br>
      </a>      
      `,
      children: [
        {
          key: `Mid-stage Care Plan `,
          text: `What to Expect Now`,
          info: `
          <strong>+ Stage 3 treatment landscape.</strong><br>
          <strong>+ Coordinating care across teams.</strong><br>
          <strong>+ Understanding more complex symptoms.</strong><br>

          <br><br>
          <button class="rounded-md p-2 bg-[var(--color-palette-five)] hover:bg-[var(--color-palette-five)]">
            <a class="text-[var(--color-palette-one)] hover:text-[var(--color-palette-two)]" href="/stage-3/what-to-expect-now">Walk This Way →</a>
          </button>             
          `
        },
        {
          key: `Self-Care`,
          text: `Caring for a Tired Body`,
          info: `
          <strong>+ Gentle nutrition and hydration tips.</strong><br>
          <strong>+ Fatigue, sleep disruption, and what helps.</strong><br>
          <strong>+ Movement when you can — or resting when you need.</strong><br>

          <br><br>
          <button class="rounded-md p-2 bg-[var(--color-palette-five)] hover:bg-[var(--color-palette-five)]">
            <a class="text-[var(--color-palette-one)] hover:text-[var(--color-palette-two)]" href="/stage-3/caring-for-a-tired-body">Walk This Way →</a>
          </button>             
          `
        },        
        {
          key: `Mid-stage support`,
          text: `Finding Your Ground`,
          info: `
          <strong>+ Naming difficult emotions.</strong><br>
          <strong>+ Support groups that feel real.</strong><br>
          <strong>+ Keeping some control in the chaos</strong><br>

          <br><br>
          <button class="rounded-md p-2 bg-[var(--color-palette-five)] hover:bg-[var(--color-palette-five)]">
            <a class="text-[var(--color-palette-one)] hover:text-[var(--color-palette-two)]" href="/stage-3/finding-your-ground">Walk This Way →</a>
          </button>             
          `
        },        
      ]
    },           
    {
      key: `Stage Four`,
      text: "Stage 4 – Comfort. Dignity. You.",
      info: `
      <strong>About Stage 4</strong>
      Explore treatment and comfort choices, understand palliative support, find daily relief with sleep and symptom tools, and focus on honoring your life and legacy.
      <br><br>
      + 
      <a href="/stage-4/the-care-that-fits-you">
      The Care That Fits You<br>
      </a>
      + 
      <a href="/stage-4/support-for-the-day-to-day">
     Support for the Day-to-Day<br>
      </a>
      + 
      <a href="/stage-4/honouring-your-life">
      Honouring Your Life<br>
      </a>       
      `,
      children: [
        {
          key: `The Care Plan`,
          text: `The Care That Fits You`,
          info: `
          <strong>+ Treatment vs. comfort decisions</strong><br>
          <strong>+ What palliative support actually means</strong><br>
          <strong>+ Being heard by your team</strong><br>

          <br><br>
          <button class="rounded-md p-2 bg-[var(--color-palette-five)] hover:bg-[var(--color-palette-five)]">
            <a class="text-[var(--color-palette-one)] hover:text-[var(--color-palette-two)]" href="/stage-4/the-care-that-fits-you">Walk This Way →</a>
          </button>            
          `
        },
        {
          key: `Relief & Rest`,
          text: `Support for the Day-to-Day`,
          info: `
          <strong>+ Eating what feels right</strong><br>
          <strong>+ Sleep, pain relief, and symptom tools</strong><br>
          <strong>+ Movement, touch, or stillness — what works for you</strong><br>

          <br><br>
          <button class="rounded-md p-2 bg-[var(--color-palette-five)] hover:bg-[var(--color-palette-five)]">
            <a class="text-[var(--color-palette-one)] hover:text-[var(--color-palette-two)]" href="/stage-4/support-for-the-day-to-day">Walk This Way →</a>
          </button>            
          `
        },        
        {
          key: `Legacy & Life`,
          text: `Honouring Your Life`,
          info: `
          <strong>+ Intro to prostate basics, risks, symptoms</strong><br>
          <strong>+ Processing what matters to you." </strong><br>
          <strong>+ Creative legacy & joy in small things."</strong><br>
          <strong>+ Support for family & chosen whānau </strong><br>

          <br><br>
          <button class="rounded-md p-2 bg-[var(--color-palette-five)] hover:bg-[var(--color-palette-five)]">
            <a class="text-[var(--color-palette-one)] hover:text-[var(--color-palette-two)]" href="/stage-4/honouring-your-life">Walk This Way →</a>
          </button>            
          `
        },        
      ]
    },
    {
      key: `Caregiving`,
      text: "Caregiver – You’re Helping. Don’t Forget You Matter Too.",
      info: `
      <strong>About Stage 4</strong>
      Understand what’s happening with your loved one’s prostate cancer, learn how to support them gently, while also caring for your own well-being. Find honest guidance, practical tools, and heartfelt support to help you through every step.
      <br><br>
      + 
      <a href="/caregiver/the-basics-you-need">
      The Basics You Need<br>
      </a>
      + 
      <a href="/caregiver/real-support-for-real-people">
     You’re Part of This — But You’re Still You<br>
      </a>
      + 
      <a href="/caregiver/youre-part-of-this-but-youre-still-you">
      Real Support for Real People<br>
      </a>      
      `,
      children: [
        {
          key: `The Basics`,
          text: `The Basics You Need`,
          info: `
          <strong>+ Intro to prostate basics, risks, symptoms,  </strong><br>
          <strong>+ What’s happening in your loved one’s body.</strong><br>
          <strong>+ How to assist with treatment & symptoms.</strong><br>
          <strong>+ Clear answers to tough questions.</strong><br>

          <br><br>
          <button class="rounded-md p-2 bg-[var(--color-palette-five)] hover:bg-[var(--color-palette-five)]">
            <a class="text-[var(--color-palette-one)] hover:text-[var(--color-palette-two)]" href="/caregiver/the-basics-you-need">Walk This Way →</a>
          </button>            
          `
        },
        {
          key: `Self- Care`,
          text: `You’re Part of This — But You’re Still You`,
          info: `
          <strong>+ Managing burnout, sleep loss, and food fatigue."</strong><br>
          <strong>+ Fitness or rest — what your body asks for."</strong><br>
          <strong>+ Emotional weight & how to put it down sometimes.</strong><br>

          <br><br>
          <button class="rounded-md p-2 bg-[var(--color-palette-five)] hover:bg-[var(--color-palette-five)]">
            <a class="text-[var(--color-palette-one)] hover:text-[var(--color-palette-two)]" href="/caregiver/youre-part-of-this-but-youre-still-you">Walk This Way →</a>
          </button>            
          `
        },        
        {
          key: `Support Guide`,
          text: `Real Support for Real People`,
          info: `
          <strong>+ Who to call, where to go</strong><br>
          <strong>+ Practical guides, appointment planners</strong><br>
          <strong>+ Honest voices from other caregivers</strong><br>

          <br><br>
          <button class="rounded-md p-2 bg-[var(--color-palette-five)] hover:bg-[var(--color-palette-five)]">
            <a class="text-[var(--color-palette-one)] hover:text-[var(--color-palette-two)]" href="/caregiver/real-support-for-real-people">Walk This Way →</a>
          </button>            
          `
        },        
      ]
    },
    {
      key: `Research`,
      text: "Researcher – Explore. Understand. Advance.",
      info: `
      <strong>About Research Page</strong>
      Explore prostate cancer statistics and staging, the latest trials and treatment innovations, and access tools and funding opportunities to support research and collaboration.
      <br><br>
      + 
      <a href="/researcher/structured-understanding">
      Structured Understanding<br>
      </a>
      + 
      <a href="/researcher/trials-treatment-innovation">
     Trials, Treatment & Innovation<br>
      </a>
      + 
      <a href="/researcher/tools-grants-collaboration">
      Tools, Grants & Collaboration<br>
      </a>    
      `,
      children: [
        {
          key: `Statistics`,
          text: `Structured Understanding`,
          info: `
          <strong>+ Disease progression: staging, grading, biomarkers."</strong><br>
          <strong>+ Diagnostic pathways: PSA, biopsy, imaging."</strong><br>
          <strong>+ Cross-system comparisons (NZ, AUS, US, EU)."</strong><br>
          <strong>+ Population data & cohort breakdowns<b<strong/>r>

          <br><br>
          <button class="rounded-md p-2 bg-[var(--color-palette-five)] hover:bg-[var(--color-palette-five)]">
            <a class="text-[var(--color-palette-one)] hover:text-[var(--color-palette-two)]" href="/researcher/structured-understanding">Walk This Way →</a>
          </button>           
          `
        },
        {
          key: `Research Updates`,
          text: `Trials, Treatment & Innovation`,
          info: `
          <strong>+ Ongoing trials & novel therapies (NZ/international)</strong><br>
          <strong>+ Treatment outcomes by demographic & stage.</strong><br>
          <strong>+ Health equity & access gaps.</strong><br>
          <strong>+ NZ-specific research themes (rural, Māori, Pacific populations)</strong><br>

          <br><br>
          <button class="rounded-md p-2 bg-[var(--color-palette-five)] hover:bg-[var(--color-palette-five)]">
            <a class="text-[var(--color-palette-one)] hover:text-[var(--color-palette-two)]" href="/researcher/trials-treatment-innovation">Walk This Way →</a>
          </button>           
          `
        },        
        {
          key: `Community & Grants`,
          text: `Tools, Grants & Collaboration`,
          info: `
          <strong>+ Active and upcoming grant opportunities (HRC, MBIE, etc.)</strong><br>
          <strong>+ Submission guidelines & funding timelines.</strong><br>
          <strong>+ Participant recruitment tools. Data-sharing agreement<strong/>s & ethics resources.<br>
          <strong>+ Researcher contact networks & collaboration portals</strong><br>

          <br><br>
          <button class="rounded-md p-2 bg-[var(--color-palette-five)] hover:bg-[var(--color-palette-five)]">
            <a class="text-[var(--color-palette-one)] hover:text-[var(--color-palette-two)]" href="/researcher/tools-grants-collaboration">Walk This Way →</a>
          </button>           
          `
        },        
      ]
    },         
  ]
};
