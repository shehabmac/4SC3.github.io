// config.js (Students edit only this file)
window.SITE_CONFIG = {
  pageTitle: "Academic Digital Twin Case Study | Student Showcase",
  homeUrl: "https://roadwayvr.com",

  hero: {
    profileImage: "assets/img/image1.jpg",

    // NEW: course code tag shown above the course project pill
    courseTag: "SMRTTECH 4SC3",

    // updated tagline text (big pill)
    tagline: "Course Project: Smart Cities and Communities",

    studentName: "Shehab Ahmed",
    program: "Automation Engineering Technology, W Booth School of Engineering Practice",
    university: "McMaster University, Hamilton, ON, Canada",
    email: "ahmes119@mcmaster.ca"
  },

  disclaimer: {
    short:
      "Academic project for a university course. Educational purposes only. Not an official city analysis, consultation, or endorsement.",
    long:
      "This website presents a student academic project created for coursework. Any analyses, results, and potential improvements are simulation-based and provided for educational purposes only. They do not represent official work, endorsement, or consultation for the City of Toronto or any other city or agency.",
    videoOverlaySuggestion:
      "Academic Project · Educational Use Only · Not Official City Work"
  },

  theme: {
    heroBg: "#111111",
    heroText: "#ffffff",
    pageBg: "#f8fafc",
    accent: "#7c3aed"
  },

  dividers: {
    dividerBg: "#f9f9f9",
    dividerText: "#ffffff"
  },

  footer: {
    footerBg: "#111111",
    footerText: "#ffffff",
    footerBorder: "#222222",

    homeLinkText: "RoadwayVR",

    templateCredit:
      "This academic showcase template was developed by RoadwayVR.",

    templateCreditLinkText:
      "Learn more at RoadwayVR.com",

    templateCreditUrl:
      "https://roadwayvr.com"
  },

  intro: {
    projectTitleLabel: "Mini Project A",
    projectTitle: "Roadway and Traffic Modelling at Warden Avenue and Lawrence Avenue East, Toronto: SUMO Analysis of Automated Vehicles and Signal-Timing Intervention",
    heroVideo: "assets/video/video.mp4",
    heroVideoPoster: "",
    heroVideoAlt: "Autoplay preview video (academic project)",
    videoCaption:
      "Autoplay preview (≈20 seconds): Raw Video → SUMO (Traffic Simulation)"
  },

  caseStudy: {
    title: "Introduction",

    backgroundTitle: "Background",
    backgroundBullets: [
      "Roadway models represent streets, lane movements, signal states, and individual vehicles so that changes can be tested before implementation.",
      "The study area is Warden Avenue and Lawrence Avenue East in Scarborough, Toronto, represented in the model by junction J1.",
      "We focus on E206, a 30.07 m, three-lane incoming approach to J1 with a lane speed of about 50 km/h.",
      "The hypothetical municipal question: could a different vehicle fleet or a revised green split improve traffic on this approach?"
    ],

    problemTitle: "Problem Statement",
    problemBullets: [
      "A connected roadway model and a traceable human-driven vehicle (HDV) baseline must be built from the assigned GIS study area.",
      "The effect of a 100% connected automated vehicle (CAV) fleet is uncertain because it depends on the assumed controller behaviour.",
      "It is unclear whether moving green time at J1 improves E206 under the same demand and routes.",
      "Results are simulation-based and uncalibrated, so they must be communicated with their limits."
    ],

    objectivesTitle: "Project Objectives",
    objectivesBullets: [
      "Develop the Stage A1 network, configure Stage A2 HDV traffic, and establish the baseline speed–density behaviour on E206.",
      "Compare a 100% CAV condition with the HDV baseline while holding the roadway, demand, routes, and signals constant.",
      "Select, implement, and evaluate a J1 green-time change using before-and-after HDV results on E206.",
      "Present the results through speed–density figures, KPIs, and a showcase website."
    ]
  },

  overview: {
    title: "Methodology",
    steps: [
      {
        title: "Step 1: Roadway Network Development (SUMO, Stage A1)",
        text: "Build the Warden Avenue and Lawrence Avenue East network from the GIS reference, with lane geometry, junctions, and turning connections.",
        image: "assets/img/image5.jpg"
      },
      {
        title: "Step 2: HDV Baseline Traffic (SUMO, Stage A2)",
        text: "Assign twelve fixed-path flows (2,550 veh/h) and the 60-second J1 signal program, then record the E206 baseline.",
        image: "assets/img/image2.jpg"
      },
      {
        title: "Step 3: 100% CAV Scenario",
        text: "Change all twelve flows to a CACC-based CAV type with the same network, routes, demand, and signals.",
        image: "assets/img/image3.jpg"
      },
      {
        title: "Step 4: J1 Signal-Timing Intervention and Results",
        text: "Shift 5 seconds of green to the E206-serving phase (22/3/32/3 s) and compare speed–density results.",
        image: "assets/img/image4.jpg"
      }
    ]
  },

  implementation: {
    title: "Methodology Steps (Demo Modules)",
    modules: [
      {
        title: "Module 1: Roadway Network Development (SUMO)",
        bullets: [
          { text: "Develop the Stage A1 network from the supplied GIS reference, including edges, lane geometry, junctions, and connections." },
          { text: "Retain internal junction links in NETEDIT so vehicles can follow the intended paths through J1." },
          { text: "Identify E206 as the selected incoming approach: 30.07 m, three lanes, feeding J1." }
        ],
        image: "assets/img/image5.jpg"
      },
      {
        title: "Module 2: HDV Baseline Traffic and Signal Program",
        bullets: [
          { text: "Define twelve fixed-path flows from 0 to 3,600 s, with a nominal total of 2,550 vehicles per hour." },
          { text: "Use the static J1 program: 27/3/27/3 s phases in a 60-second cycle." },
          { text: "Run SUMO 1.26 with a 0.1-second step and 100-second edgeData output, analysing 36 complete intervals." }
        ],
        image: "assets/img/image2.jpg"
      },
      {
        title: "Module 3: 100% CAV Scenario",
        bullets: [
          { text: "Switch the twelve flows to a CAV type using CACC car following, a 0.6 s desired time gap, and a 1.5 m minimum gap." },
          { text: "Set acceleration to 2.9 m/s² and deceleration to 7.5 m/s², with the network, routes, and demand unchanged." },
          { text: "Use the 0.1-second step in all scenarios, because the original one-second step produced collisions and teleports." }
        ],
        image: "assets/img/image3.jpg"
      },
      {
        title: "Module 4: J1 Signal-Timing Intervention and Results",
        bullets: [
          { text: "Move 5 seconds of green to the E206-serving phase, changing 27/3/27/3 s to 22/3/32/3 s with the 60-second cycle unchanged." },
          { text: "Compare E206 mean speed, density, and waiting time with the HDV baseline over the same 36 intervals." },
          { text: "State the limits: no field calibration, one random seed, and no assessment of the approaches that lose green time." }
        ],
        image: "assets/img/image4.jpg"
      }
    ]
  },

  results: {
    title: "Results & Potential Improvements",
    subtitle:
      "E206 speed–density results from 36 complete 100-second observations (0–3,600 s) comparing the 100% HDV baseline with the 100% CAV scenario. The J1 signal-timing result is summarized in the discussion. Results are for educational purposes only.",

    charts: {
      left: {
        title: "Base: 100% HDV — E206 Speed–Density",
        src: "assets/img/image6.jpg",
        alt: "Speed–density plot for the 100% HDV baseline on E206: mean speed versus mean edge density with a dashed linear fit, R² = 0.781"
      },
      right: {
        title: "Scenario 1: 100% CAV — E206 Speed–Density",
        src: "assets/img/image7.jpg",
        alt: "Speed–density plot for the 100% CAV scenario on E206: mean speed versus mean edge density with a dashed linear fit, R² = 0.879"
      }
    },

    discussionTitle: "Discussion",
    discussionBullets: [
      "Baseline (100% HDV): mean E206 speed is 9.114 km/h and mean density is 73.73 veh/km.",
      "100% CAV: mean speed rises to 10.095 km/h and mean density falls to 65.63 veh/km, but gains vary by density band, so a uniform CAV benefit is not established.",
      "J1 signal change (22/3/32/3 s): mean speed rises to 12.622 km/h, mean density falls to 50.93 veh/km, and the E206 waiting-time sum falls from 5,114.3 s to 3,029.7 s.",
      "The signal gain comes at the cost of 5 s of green for the other phase, so the net effect on J1 needs an all-approach review.",
      "These are simulation results with no field calibration and a single run per scenario. The 22/3/32/3 plan is a candidate for further testing, not a ready municipal plan."
    ]
  },

  team: {
    title: "Team & Acknowledgments",
    subtitle:
      "This section clarifies academic context, roles, tools, and sources. Clear attribution improves credibility and shows ethical data handling.",

    members: [
      { name: "Shehab Ahmed", role: "Group 8 member — Roadway and traffic modelling" },
      { name: "Rithik Kottaram", role: "Group 8 member — Roadway and traffic modelling" },
      { name: "Alex Carpen", role: "Group 8 member — SUMO analysis" },
      { name: "Marcus Cameron", role: "Group 8 member — Results communication" }
    ],

    acknowledgments: [
      "Course: SMRTTECH 4SC3, Smart Cities and Communities",
      "Institution: McMaster University",
      "Instructor: Ahmad Mohammadi",
      "Tools: SUMO 1.26, NETEDIT, Python",
      "AI assistance was used to inspect files, prepare reruns, extract data, prepare charts, find literature, and draft parts of the report; the team checked the results."
    ],

    repoLabel: "Project Repository",
    repoUrl: "https://github.com/shehabmac"
  }
};
