export const heroContent = {
    title: "Every Journey Deserves the Right Guide",
    description: "Navigate prostate cancer with guidance curated for patients, caregivers, and researchers alike.",

    description1: "From diagnosis to discovery, we’re here with resources for every role and every stage.",

    description2: "Get the facts right on Prostate Cancer.",

    exploreButton: "Get Started with BluePrint",
    exploreLink: "/blueprint",
    carouselImages: [
      {
        src: "/assets/images/blue/bluebeacon.png",
        alt: "bluebeacon",
        text: "Where’s my nearest clinics & support hub?",
        link: "/blueprint/bluebeacon"
      },
      {
        src: "/assets/images/blue/bluenode.png",
        alt: "bluenode",
        text: "Prostate cancer demystified!",
        link:"/blueprint/bluenode"
      },
      {
        src: "/assets/images/blue/bluestats.png",
        alt: "bluestats",
        text: "Know thy facts! Prostate stats",
        link:"/blueprint/bluestats"
      }
    ],
};

export const userContent = {
    title: "A Path Just for You",
    description: " Understanding where you stand is the first step to healing and helping. Let’s begin your journey with care that’s made for you.",
    users: [
        { icon: "0", label: "stage-0", type: "Patient"},
        { icon: "1", label: "stage-1", type: "Patient"},
        { icon: "2", label: "stage-2", type: "Patient"},
        { icon: "3", label: "stage-3", type: "Patient"},              
        { icon: "4", label: "stage-4", type: "Patient"},         
    ],
    other: [
        { icon: "caregiver", label: "caregiver", type:  "Caregiver" },
        { icon: "researcher", label: "researcher", type:  "Researcher" },
        // { icon: "", label: "everything", type:  "General" },
    ],
};

export const resourceContent = {
    sectionTitle: "Stage 0 – Stay Ahead, Stay Informed",
    sectionSubtitle: "Prostate Cancer Resource Hub",
    ctaButton: "Learn More",
    contentByCategory: {
        "stage-0": {
            parentLink: "stage-0",
            title: "Stage 0 – Stay Ahead, Stay Informed",
            data: [
                {
                    heading: "What You Need to Know Early",
                    content: [
                        "➤ Intro to prostate basics, risks, symptoms", 
                        "➤ What prostate cancer is (and isn\’t)", 
                        "➤ Why screening matter", 
                        "➤ What the PSA test actually tells you"
                    ],
                    cardStatus: "complete",
                },
                {
                    heading: "Small Choices, Big Impact",
                    content: [
                        "➤ Nutrition tips to support prostate health",
                        "➤ Building healthy sleep & fitness habits",
                        "➤ How lifestyle influences your risk"
                    ],
                    cardStatus: "complete",
                },
                {
                    heading: "Should I Get Screened?",
                    content: [
                        "➤ PSA test info, who screening is for, etc.",
                        "➤ What “watchful waiting” means.",
                        "➤ Next steps & questions to ask. How to track changes without stress"
                    ],
                    cardStatus: "complete",
                },
            ],
        },
        "stage-1": {
            parentLink: "stage-1",
            title: "Stage 1 – You Caught It Early. That’s Power",
            data: [
                {
                    heading: "Understanding Your Diagnosis",
                    content: [
                        "➤ What Stage 1 means, in plain terms.",
                        "➤ First-line treatment options explained.",
                        "➤ What staying on active surveillance looks like"
                    ],
                    cardStatus: "complete",
                },
                {
                    heading: "Doctor Time: Making Every Visit Count",
                    content: [
                        "➤ How often to check in with your doctor, based on your stage.",
                        "➤ What to ask about symptoms, treatment, and side effects.",
                        "➤ Tips for tracking appointments, results, and follow-ups."
                    ],
                    cardStatus: "complete",
                },
                {
                    heading: "Navigating Your Options",
                    content: [
                        "➤ Treatment paths: surgery, radiation, hormone therapy.",
                        "➤ What to expect during and after.",
                        "➤ Working with your medical team."
                    ],
                    cardStatus: "complete",
                },                
            ],
        },
        "stage-2": {
            parentLink: "stage-2",
            title: "Stage 2 – You’re Not in This Alone",
            data: [
                {
                    heading: "Staying Grounded Through It All",
                    content: [
                        "➤ Coping with “what if” thoughts and emotional overwhelm.",
                        "➤ Knowing when to ask for help — and who to turn to.",
                        "➤ Using tools, check-ins, and conversations to stay steady."
                    ],
                    cardStatus: "incomplete",
                },
                {
                    heading: "Body Care That Builds You Up",
                    content: [
                        "➤ Gentle food habits that work with your energy levels.",
                        "➤ Kegel exercises to support pelvic strength and recovery.",
                        "➤ Moving with care — or resting when your body asks."
                    ],
                    cardStatus: "complete",
                },
                {
                    heading: "Your Body, Your Needs",
                    content: [
                        "➤ Managing side effects through food & rest.",
                        "➤ Handling fatigue & disrupted sleep.",
                        "➤ Keeping active within your limits."
                    ],
                    cardStatus: "incomplete",
                },
            ],
        },
        "stage-3": {
            parentLink: "stage-3",
            title: "Stage 3 – It’s a Lot. We’ll Walk It With You",
            data: [
                {
                    heading: "What to Expect Now",
                    content: [
                        "➤ Stage 3 treatment landscape.",
                        "➤ Coordinating care across teams.",
                        "➤ Understanding more complex symptoms."
                    ],
                    cardStatus: "incomplete",
                },
                {
                    heading: "Caring for a Tired Body",
                    content: [
                        "➤ Gentle nutrition and hydration tips.",
                        "➤ Fatigue, sleep disruption, and what helps.",
                        "➤ Movement when you can — or resting when you need."
                    ],
                    cardStatus: "incomplete",
                },
                {
                    heading: "Finding Your Ground",
                    content: [
                        "➤ Naming difficult emotions.",
                        "➤ Support groups that feel real.",
                        "➤ Keeping some control in the chaos"
                    ],
                    cardStatus: "incomplete",
                }
            ],
        },
        "stage-4": {
            parentLink: "stage-4",
            title: "Stage 4 – Comfort. Dignity. You.",
            data: [
                {
                    heading: "The Care That Fits You",
                    content: [
                        "➤ Treatment vs. comfort decisions.",
                        "➤ What palliative support actually means.",
                        "➤ Being heard by your team"
                    ],
                    cardStatus: "incomplete",
                },
                {
                    heading: "Support for the Day-to-Day",
                    content: [
                        "➤ Eating what feels right.",
                        "➤ Sleep, pain relief, and symptom tools.",
                        "➤ Movement, touch, or stillness — what works for you."
                    ],
                    cardStatus: "incomplete",
                },
                {
                    heading: "Honouring Your Life",
                    content: [
                        "➤ Processing what matters to you.",
                        "➤ Creative legacy & joy in small things. ",
                        "➤ Support for family & chosen whānau"
                    ],
                    cardStatus: "incomplete",
                }
            ],
        },
        "caregiver": {
            parentLink: "caregiver",
            title: "Caregiver – You’re Helping. Don’t Forget You Matter Too.",
            data: [
                {
                    heading: "The Basics You Need",
                    content: [
                        "➤ What’s happening in your loved one’s body.",
                        "➤ How to assist with treatment & symptoms.",
                        "➤ Clear answers to tough questions."
                    ],
                    cardStatus: "incomplete",
                },
                {
                    heading: "You’re Part of This — But You’re Still You",
                    content: [
                        "➤ Managing burnout, sleep loss, and food fatigue.",
                        "➤ Fitness or rest — what your body asks for.",
                        "➤ Emotional weight & how to put it down sometimes."
                    ],
                    cardStatus: "incomplete",
                },
                {
                    heading: "Real Support for Real People",
                    content: [
                        "➤ Who to call, where to go.",
                        "➤ Practical guides, appointment planners.",
                        "➤ Honest voices from other caregivers."
                    ],
                    cardStatus: "incomplete",                    
                }
            ],
        },
        "researcher": {
                parentLink: "researcher",
                title: "Researcher – Explore. Understand. Advance.",
                data: [
                {
                    heading: "Structured Understanding",
                    content: [
                        "➤ Disease progression: staging, grading, biomarkers.",
                        "➤ Diagnostic pathways: PSA, biopsy, imaging.",
                        "➤ Cross-system comparisons (NZ, AUS, US, EU).",
                        "➤ Population data & cohort breakdowns"
                    ],
                    cardStatus: "incomplete",
                },
                {
                    heading: "Trials, Treatment & Innovation",
                    content: [
                        "➤ Ongoing trials & novel therapies (NZ/international).",
                        "➤ Treatment outcomes by demographic & stage.",
                        "➤ Health equity & access gaps.",
                        "➤ NZ-specific research themes (rural, Māori, Pacific populations)."
                    ],
                    cardStatus: "complete",
                },
                {
                    heading: "Tools, Grants & Collaboration",
                    content: [
                        "➤ Active and upcoming grant opportunities (HRC, MBIE, etc.).",
                        "➤ Submission guidelines & funding timelines.",
                        "➤ Participant recruitment tools. Data-sharing agreements & ethics resources.",
                        "➤ Researcher contact networks & collaboration portals"
                    ],
                    cardStatus: "incomplete",                    
                }
            ]
        },
        // "everything": {
        //         parentLink: "General",
        //         title: "General – Explore. Understand. Advance.",
        //         data: [
        //         {
        //             heading: " ",
        //             content: [
        //                 "➤ ",
        //                 "➤ ",
        //                 "➤ ",
        //                 "➤ "
        //             ],
        //         },
        //         // {
        //         //     heading: " ",
        //         //     content: [
        //         //         "➤ ",
        //         //         "➤ ",
        //         //         "➤ ",
        //         //         "➤ "
        //         //     ],
        //         // },
        //         // {
        //         //     heading: " ",
        //         //     content: [
        //         //         "➤ ",
        //         //         "➤ ",
        //         //         "➤ ",
        //         //         "➤ "
        //         //     ],
        //         // },                
        //     ]
        // }
    }
};

export const overviewContent = {
    title: "Share Your Life Stories",
    description: "Melanie Smith",
    mainButton: "Share & Look",
    link: "/hero-hourney",
    // carouselImages: [],
    paragraph: "Life Stories celebrates the journeys of those impacted by cancer like Melanie, offering hope, healing, and human connection through every shared word.",
    mediaSource: "/assets/videos/videoplayback - Trim.mp4",
    // paragraph1: "BluePrintNZ is a platform designed to showcase modern web development techniques and best practices using Astro and Netlify.",
    // paragraph2: "Our mission is to provide a blueprint for building fast, accessible, and modern websites that leverage the power of Astro's multi-page application architecture and Netlify's deployment platform.",
    // mediaSource: "https://youtu.be/Jr5Lb-amQDY"
};