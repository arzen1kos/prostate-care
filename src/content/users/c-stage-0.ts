import { resourceContent } from '../home'

export const content = {
    "stage-0": {
        // what-you-need-to-know-early
        heading1: {
            stageNum: `0`,
            headingNum: `1`,
            title: resourceContent.contentByCategory["stage-0"].data['0'].heading,
            label: `What You Need to Know Early`,
            description: resourceContent.contentByCategory["stage-0"].data['0'].content,
            main: {
                overview: {
                    subheading: 'Prostate Cancer Overview, Risks, & Symptoms & How to prevent it',
                    image: {
                        src:"/assets/s1/signs-symptoms.JPG",
                        alt:"Prostate Cancer Signs & Symptoms: https://i.dailymail.co.uk/1s/2024/05/06/16/67123075-0-image-a-41_1715008471827.jpg"
                    },
                    body: [
                        `Early prostate cancer rarely causes symptoms. Even people diagnosed with advanced prostate cancer may have no symptoms.`,
                        `Difficulty passing urine is not always a symptom of prostate cancer, but you should see your doctor if you are worried or if the following symptoms are ongoing:`,
                        {
                            items: [
                                'Frequent or sudden need to urinate',
                                'Blood in the urine or semen',
                                'A slow flow of urine',
                                'Needing to get up at night to pass urine',
                                'Feeling like your bladder is not empty after passing urine',
                                'Unexplained weight loss',
                                'Pain in bones (e.g. the neck, back, hips, or pelvis)'
                            ]
                        },
                    ],
                    link: 'https://www.cancercouncil.com.au/prostate-cancer/symptoms/',
                },
                whatItIs: {
                    subheading: 'What Prostate Cancer Is (and Isn’t) & How to prevent it',
                    main: [
                        `Prostate cancer starts in the prostate gland, which is part of the male reproductive system.`,
                        `It differs from other prostate conditions like benign prostatic hyperplasia (BPH) or prostatitis, which are not cancer.`,
                        {
                            type: 'list',
                            items: [
                                'Prostate cancer can be slow-growing or aggressive.',
                                'Not all prostate problems are cancer.',
                                'Only a biopsy can confirm prostate cancer.'
                            ]
                        }
                    ]
                },

                screeningMatters: {
                    subheading: 'Why Screening Matters',
                    main: [
                        `Screening helps detect prostate cancer before symptoms appear.`,
                        `Early detection increases the chance of successful treatment.`,
                        {
                            type: 'list',
                            items: [
                                'Some cancers grow slowly and may never cause problems.',
                                'Others may grow quickly and spread.',
                                'Regular screening can help identify which type it is.'
                            ]
                        }
                    ]
                },

                psaTest: {
                    subheading: 'What the PSA Test Actually Tells You',
                    main: [
                        `The PSA (Prostate-Specific Antigen) test measures the level of PSA in the blood.`,
                        `Higher levels may indicate prostate cancer, but can also result from other conditions.`,
                        {
                            type: 'list',
                            items: [
                                'PSA can be elevated due to infection, BPH, or recent ejaculation.',
                                'A high PSA doesn’t always mean cancer.',
                                'A normal PSA doesn’t rule it out completely.',
                                'It’s a tool—not a diagnosis on its own.'
                            ]
                        }
                    ]
                },
            },
            footnote: `Redirecting you back home in a moment…`,
            breadcrumbs: { link: "/stage-0/what-you-need-to-know-early", current: true }
        },
        // small-choices-big-impact
        heading2: {
            stageNum: `0`,
            headingNum: `2`,
            title: resourceContent.contentByCategory["stage-0"].data['1'].heading,
            label: `Small Choices, Big Impact`,
            description: resourceContent.contentByCategory["stage-0"].data['1'].content,
            main: {
                subheading: 'Small steps, big protection — discover how simple lifestyle habits can help lower your risk of prostate cancer and strengthen long-term wellness.',
                items: [
                    {
                        head: "Black currant",
                        content: "Rich in antioxidants, black currants may help reduce inflammation linked to prostate cancer progression.",
                        image: "/assets/s1/s1h2-black-currant.jpg",
                        link: "",
                        alt: "Black currant img source: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST2MkiZslqqQKwcAwGVfVHr8j4x1FgJK8oUg&s",
                    },
                    {
                        head: "Cycling",
                        content: "Love to ride? Good news — cycling doesn’t cause prostate cancer. Just use the right saddle and give your body some breaks.",
                        image: "/assets/s1/cycle-prostate.jpg",
                        link: "",
                        alt: "Cycling image source: https://images.justgiving.com/image/ea5d519c-71f4-48ed-b334-48510a865ff7.jpg?template=Size800w",
                    },                                        
                    {
                        head: "Kegel Exercise",
                        content: "Strengthening pelvic floor muscles through Kegels may support urinary control and prostate function.",
                        image: "/assets/s1/s1h2-kegel.JPG",
                        link: "",
                        alt: "Kegel image source: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qx8R_vhLvnIG9DfL4pMbwKRlsy8kxp4ovPKrvDdzHHx8XSBJDpwG1eUmWaGmXNRjtmw&usqp=CAU",
                    },
                    {
                        head: "Lycopene",
                        content: "This tomato-based antioxidant may slow prostate tumor growth and protect healthy cells.",
                        image: "/assets/s1/s1h2-lycopene.jfif",
                        link: "",
                        alt: "Tomatoes image source: https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/tomatoes-farm-1296x728-header.jpg?w=1155&h=1528",
                    },
                    {
                        head: "Smoking & Alcohol",
                        content: "Limiting tobacco and alcohol use can significantly reduce prostate cancer aggressiveness and recurrence.",
                        image: "/assets/s1/s1h2-no-alcohol-smoking.jfif",
                        link: "",
                        alt: "Vice image source: https://cdn.cancercenter.com/-/media/ctca/images/others/blogs/2023/06-june/01-blog-tobacco-alcohol-l.jpg",
                    },
                    {
                        head: "Legumes",
                        content: "Beans, lentils, and soy are full of plant-based compounds that may lower prostate cancer risk.",
                        image: "/assets/s1/s1h2-legumes.jfif",
                        link: "",
                        alt: "Legmes image source: https://cdn-bdcme.nitrocdn.com/YNVexMBpWKXfKFQpHsdWUgFTQYBFJoCh/assets/images/optimized/rev-f0a0aa3/kidsaregreatcooks.com/wp-content/uploads/2020/07/Legumes-sm.jpg",
                    },                    
                ],
                x: {
                    // body: [
                        // `p`,
                        // `p`,
                        // {
                        // },
                    // ],
                    link: '#',
                },
            },
            footnote: `Redirecting you back home in a moment…`,
            breadcrumbs: { link: "/stage-0/small-choices-big-impact", current: true }
        },
        // should-i-get-screened
        heading3: {
            stageNum: `0`,
            headingNum: 3,
            title: resourceContent.contentByCategory["stage-0"].data['2'].heading,
            label: `Should I Get Screened?`,
            description: resourceContent.contentByCategory["stage-0"].data['2'].content,
            main: {
                PSATest: {
                    subheading: 'What is the PSA test?',
                    body: [
                        `Prostate-specic antigen, or PSA, is a protein produced by cells of the prostate gland. The PSA test measures the level of PSA in a man’s blood.`,
                        `The blood level of PSA can be elevated for a number of reasons. The most important is prostate cancer but in addition a number of benign (non-cancerous) causes can raise the PSA. This includes a urinary tract infection, in ammation of the prostate or an enlarged prostate.`,
                    ],
                    summary:[
                         "+ PSA helps identify men at higher risk of symptomatic prostate cancer.",
                         "+ It can give false positives (detects cancer in men who won’t develop symptoms)",
                         "+ It can miss some aggressive cancers (false negatives), especially if the cut-off is 4 ng/ml.",
                         "+ Lowering the cut-off (e.g., to 3 ng/ml) increases sensitivity but also increases false positives.",
                    ],
                    link: 'https://otagourology.co.nz/what-we-treat/psa-testing-and-screening/',
                },
                PSARecom: {
                    subheading: 'Is the PSA test recommended for prostate cancer screening?',
                    body: [
                        ` PSA screening is where a blood PSA is obtained from a man who has no evidence of prostate cancer.  This allows us to calculate the riskof having the disease.`,
                        ` Recent evidence recommends PSA screening but there is widespread agreement that any man who is considering getting tested should rst be informed in detail about the potential harms and bene ts`
                    ],
                    link: '#',
                },
                PSAResult: {
                    subheading: ' What is a normal PSA test result?',
                    body: [
                        `There is no specific normal or abnormal level of PSA but there is a strong correlation between raised PSA and prostate cancer. We usually use a cut o level depending on your age. At Otago Urology we feel that the levels given below allow us to have a good safety margin to detect prosate cancer and not to over investigate a patient with a low risk.`,
                        // {
                        //     items: [
                        //     'item'
                        //     ]
                        // },
                    ],
                    link: '#',
                },
                PSALimitations: {
                    subheading: 'What are some of the limitations and potential harms of the PSA test for prostate cancer screening?',
                    body: [
                        `Finding a small tumor may not reduce a man’s chance of dying from prostate cancer. Some tumors found through PSA testing grow so slowly that they are unlikely to ever threaten a man’s life. Any treatment would be overdoing it and expose the patient to significant risks from complications of surgery or radiotherapy.`,
                        `A false-positive test result occurs when a man’s PSA level is elevated but no cancer is actually present. This may create anxiety for a man and his family and lead to additional medical procedures, such as a prostate biopsy, that can be harmful. Possible side effects of biopsies include serious infections, pain, and bleeding.`,
                        `A false-negative test result occurs when a man’s PSA level is low even though he actually has prostate cancer. This may give a false sense of assurance to the man, his family, and his doctor, potentially delaying necessary treatment.`,
                    ],
                    link: '#',
                },
                PSAMonitoring: {
                    subheading: 'How is the PSA test used in men who have been treated for prostate cancer?',
                    body: [
                        `The PSA test is used to monitor patients with a history of prostate cancer to detect recurrence. If a man’s PSA level begins to rise after treatment, it may be the first sign that the cancer has returned.`,
                        `Any detectable PSA in a man who has had his prostate removed for cancer is considered abnormal and must be followed up immediately.`,
                    ],
                    link: 'https://otagourology.co.nz/what-we-treat/psa-testing-and-screening/',
                },
            },
            footnote: `Redirecting you back home in a moment…`,
            breadcrumbs: { link: "/stage-0/should-i-get-screened", current: true }
        },
    },
}