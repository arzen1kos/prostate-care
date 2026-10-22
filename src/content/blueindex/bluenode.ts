export const bluenodeData = {
  key: `Abiraterone mCRPC`,
  text: `Abiraterone for mCRPC`,
  info: `
    <strong>Abiraterone acetate (Zytiga®)</strong> is a selective, irreversible CYP17 inhibitor used in combination with prednisone for treating <strong>metastatic castration-resistant prostate cancer (mCRPC)</strong>.
    <br><br>
    It blocks androgen biosynthesis, prolongs survival, and improves symptoms in both pre- and post-chemotherapy settings. It is now <strong>PHARMAC-funded in New Zealand</strong> under Special Authority.
  `,
  children: [
    {
      key: `Context`,
      text: `Prostate Cancer Burden`,
      info: `
        Prostate cancer is one of the most common cancers globally, accounting for 8% of diagnoses and deaths (2012).
        <br><br>
        <strong>Economic burden:</strong><br>
        - Lifetime cost per US patient: >$110,000<br>
        - US-wide 2008 cohort: $12.4 billion<br><br>
        <strong>Progression Model:</strong><br>
        Localised → Rising PSA → Metastases → CRPC → Death
      `,
      children: [
        {
          key: `DetectionStats`,
          text: `Disease Progression Stats`,
          info: `
            - 10–20% of men present with metastatic disease<br>
            - 20–30% of localised cases eventually metastasise<br>
            - Median survival for mCRPC used to be <2 years
          `
        }
      ]
    },
    {
      key: `TherapyEvolution`,
      text: `Treatment Evolution`,
      info: `
        <strong>Before 2004:</strong> Only ADT, palliative intent<br>
        <strong>2004:</strong> Docetaxel + prednisone shows ~2-month OS benefit<br>
        <strong>Post-2010:</strong> New agents target androgen axis (e.g. abiraterone)
      `,
      children: [
        {
          key: `AbirateroneDesign`,
          text: `Abiraterone Mechanism`,
          info: `
            Abiraterone inhibits CYP17 enzymes (17α-hydroxylase and C17,20-lyase), blocking androgen synthesis in the adrenal glands and tumor microenvironment.
            <br><br>
            Leads to ↓ testosterone and ↑ mineralocorticoids → side effects like hypertension, hypokalaemia, oedema.<br>
            Requires co-treatment with low-dose prednisone.
          `
        },
        {
          key: `Comparison`,
          text: `Comparison to Ketoconazole`,
          info: `
            Ketoconazole was a non-specific CYP17 inhibitor with high toxicity.<br>
            Abiraterone is more potent and selective with a better safety profile.
          `
        }
      ]
    },
    {
      key: `NZContext`,
      text: `New Zealand Use`,
      info: `
        <strong>Findings:</strong><br>
        - ADT underused; chemotherapy rarely administered<br>
        - Māori/Pacific men more likely to receive ADT/orchidectomy<br>
        - Monitoring (e.g. PSA) not always consistent<br><br>
        <strong>PHARMAC Funding (May 2015):</strong><br>
        Abiraterone listed under Special Authority for mCRPC, pre- or post-chemotherapy
      `,
      children: [
        {
          key: `Criteria`,
          text: `Eligibility Criteria`,
          info: `
            <strong>Initial:</strong> mCRPC with metastases, ECOG 0–1 (or 0–2 post-taxane), progression after ADT<br>
            <strong>Renewal:</strong> PSA response, no clinical progression, no taxane use, ongoing benefit
          `
        }
      ]
    },
    {
      key: `TrialEvidence`,
      text: `Clinical Trials`,
      info: `
        Two key Phase III trials demonstrate survival and quality-of-life benefits of abiraterone + prednisone in mCRPC.
      `,
      children: [
        {
          key: `COUAA301`,
          text: `Post-Chemo (COU-AA-301)`,
          info: `
            <strong>Participants:</strong> 1195 men with prior docetaxel<br>
            <strong>Results:</strong> OS 14.8 vs 10.9 months; rPFS, PSA response improved<br>
            <strong>AEs:</strong> Mostly mild, mineralocorticoid-related
          `
        },
        {
          key: `ElderlySubgroup`,
          text: `Elderly (≥75) Subgroup`,
          info: `
            <strong>OS:</strong> 15.6 vs 9.3 months<br>
            <strong>PSA Response:</strong> 34% vs 8%<br>
            Well-tolerated in older patients
          `
        },
        {
          key: `COUAA302`,
          text: `Pre-Chemo (COU-AA-302)`,
          info: `
            <strong>Participants:</strong> 1088 chemo-naïve men<br>
            <strong>rPFS:</strong> 16.5 vs 8.3 months<br>
            <strong>OS:</strong> 34.7 vs 30.3 months (adjusted)<br>
            <strong>Other Benefits:</strong> Delayed chemo, less opiate use, better quality of life
          `
        },
        {
          key: `EAP`,
          text: `Real-World (EAP Study)`,
          info: `
            <strong>Sample:</strong> 2314 men post-chemo (23 countries)<br>
            <strong>Median follow-up:</strong> 5.7 months<br>
            <strong>Findings:</strong> No new safety signals; AE profile similar to COU-AA-301
          `
        }
      ]
    },
    {
      key: `Conclusion`,
      text: `Concluding Remarks`,
      info: `
        - Abiraterone confirms importance of androgen inhibition in mCRPC<br>
        - Part of a growing treatment arsenal (e.g. enzalutamide, sipuleucel-T)<br>
        - No biomarker exists to choose agent order<br>
        - Early treatment, monitoring, and multidisciplinary care improve outcomes
      `
    }
  ]
};


/*
    { 
      key: ``, text: ``,
      info: 
      ``
    },

    <strong>
    </strong>
*/