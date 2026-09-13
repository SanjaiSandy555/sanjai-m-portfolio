import { ProjectDetail, EducationItem, ExperienceItem, CertificationItem, FreelanceService, ToolGroup } from './types';

/**
 * =======================================================================
 * CENTRAL PORTFOLIO CONFIGURATION
 * Real credentials, contact information, and professional assets for SANJAI M.
 * =======================================================================
 */
export const PORTFOLIO_CONFIG = {
  NAME: 'Sanjai',
  FULL_NAME: 'SANJAI M',
  DESIGNATION: 'Software Engineer & Data Analyst',
  TAGLINE: 'Building software. Analyzing data. Exploring what’s next.',
  SECONDARY_TAGLINE: 'Software Engineer with 9 months of enterprise production experience at 4W Technologies. Proficient in Java, PHP, MySQL, Linux systems, and advanced Microsoft Excel.',
  AVAILABILITY: 'Available for Full-Time Roles & Freelance Projects',
  FREELANCE_STATUS: 'Open for Freelance Contracts & Immediate Hiring',
  
  // Real contact details from uploaded resume
  PHONE: '+91 9952022462',
  WHATSAPP_NUMBER: '919952022462',
  WHATSAPP_PREFILLED_MESSAGE: 'Hi Sanjai, I saw your portfolio and would like to discuss a job / freelance project with you.',
  EMAIL: 'sanjaisandy115@gmail.com',
  GITHUB_URL: 'https://github.com/SanjaiSandy555',
  LINKEDIN_URL: 'https://linkedin.com/in/sanjai-m-5b87b3246',
  PORTFOLIO_WEB: 'https://sanjai-m-portfolio.kesug.com',
  RESUME_URL: '#resume',
  
  PROFILE_IMAGE: '', 
  LOCATION: 'Oldwashermenpet, Chennai - 600021, Tamil Nadu, India',
};

export const HERO_CAREER_TAGS = [
  'Software Engineer (9 Mos @ 4W Technologies)',
  'Data Analyst & Excel Specialist',
  'Available for Freelance & Full-time'
];

export const HERO_INTERESTS = 'Backend Engineering • Database Architecture • Automation & Systems';

export const QUICK_SUMMARY_ITEMS = [
  {
    category: 'SOFTWARE',
    title: 'Development & Production Systems',
    description: '9 months at 4W Technologies maintaining enterprise web applications, backend services, and clean architecture.'
  },
  {
    category: 'DATA & EXCEL',
    title: 'Analytics & Spreadsheet Automation',
    description: 'Advanced Microsoft Excel modeling, pivot dashboards, data wrangling, and structured business metrics.'
  },
  {
    category: 'DATABASE',
    title: 'MySQL & Relational Systems',
    description: 'Relational database schema modeling, CRUD operations, indexing, and complex SQL query optimization.'
  },
  {
    category: 'FREELANCE',
    title: 'Web & Engineering Solutions',
    description: 'Ready to build custom web applications, internal assessment portals, catering booking portals, and server setups.'
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'M.Sc. Data Science',
    institution: 'Vellore Institute of Technology (VIT), Chennai',
    scoreLabel: 'Degree',
    score: 'PG Candidate',
    status: 'Post Graduate (PG)',
    period: '2023 – 2025',
    highlights: [
      'Postgraduate specialization in Data Science, Machine Learning, and Big Data Analytics.',
      'Advanced predictive modeling, statistical inference, and relational query systems.'
    ]
  },
  {
    degree: 'B.Sc. Computer Science',
    institution: 'Dwaraka Doss Goverdhan Doss Vaishnav College, Chennai - 600106',
    scoreLabel: 'CGPA',
    score: '8.45 / 10',
    status: 'Graduated (UG)',
    period: '2022 – 2025',
    highlights: [
      'Graduated with 8.45 CGPA distinction in Computer Science.',
      'Core foundations in Data Structures, OOP (Java, Python, C++), MySQL, and Web Systems.'
    ]
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'P.A.K. Palanisamy Hr. Sec. School, Chennai - 600021',
    scoreLabel: 'Score',
    score: '81.1%',
    status: 'Completed',
    period: '2020 – 2022',
    highlights: [
      'Passed with 81.1% distinction in Computer Science, Math, Physics, and Chemistry.'
    ]
  },
  {
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'P.A.K. Palanisamy Hr. Sec. School, Chennai - 600021',
    scoreLabel: 'Score',
    score: '75.4%',
    status: 'Completed',
    period: '2018 – 2020',
    highlights: [
      'Passed with 75.4% distinction in Mathematics, Science, and Languages.'
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Software Engineer',
    company: '4W Technologies',
    period: '9 Months (Professional Experience)',
    location: 'Chennai, India',
    summary: '9 months of hands-on software engineering experience at 4W Technologies contributing to production application maintenance, remote server management, automated task scheduling, and relational database integrity.',
    responsibilities: [
      'Maintained, debugged, and enhanced enterprise production software modules to meet strict performance SLAs.',
      'Administered remote server environments, file transfers, and scheduled deployments utilizing WinSCP, CoreFTP, PuTTY, and Linux Commands.',
      'Performed file and directory diff audits and version comparisons using Beyond Compare to prevent release regressions.',
      'Configured and audited automated background routines via Windows Task Scheduler, RClone, Syncovery, and custom batch scripts.',
      'Managed backend relational databases in MySQL, optimizing CRUD queries and maintaining schema consistency.',
      'Diagnosed defects, executed root-cause analysis on production issues, and collaborated cross-functionally.'
    ],
    toolsUsed: [
      'Java',
      'PHP',
      'MySQL',
      'Linux Commands',
      'WinSCP',
      'CoreFTP',
      'PuTTY',
      'Remote Desktop (RDC)',
      'Beyond Compare',
      'RClone',
      'Syncovery',
      'Batch files',
      'Task Scheduler',
      'Git & GitHub',
      'Microsoft Excel'
    ]
  }
];

export const FREELANCE_SERVICES: FreelanceService[] = [
  {
    id: 'fullstack-web',
    title: 'Custom Web Application Development',
    category: 'Web Development',
    shortDescription: 'End-to-end responsive web applications with interactive client interfaces, secure PHP/Node backends, and relational databases.',
    deliverables: [
      'Custom frontend design (HTML5, CSS3, modern JavaScript)',
      'Backend CRUD services & business logic in PHP / Java',
      'Relational MySQL schema design & data validation',
      'SMS / Email alerts integration (Twilio API, automated notices)'
    ],
    techStack: ['PHP', 'MySQL', 'JavaScript', 'HTML5/CSS3', 'Bootstrap', 'Twilio API'],
    estimatedTurnaround: '1 – 3 Weeks'
  },
  {
    id: 'excel-analytics',
    title: 'Microsoft Excel Automation & Analytics Dashboards',
    category: 'Data & Productivity',
    shortDescription: 'Transform unstructured business spreadsheets into automated, mistake-proof models with advanced formulas, pivot tables, and visual KPI charts.',
    deliverables: [
      'Complex formula design (VLOOKUP, XLOOKUP, INDEX/MATCH, nested IFs)',
      'Automated Pivot Tables & interactive slicer dashboards',
      'Data cleaning, duplication removal, and anomaly detection',
      'Standardized reporting templates for executive decision-making'
    ],
    techStack: ['Microsoft Excel', 'Pivot Tables', 'Advanced Formulas', 'Data Modeling', 'Power BI'],
    estimatedTurnaround: '2 – 5 Days'
  },
  {
    id: 'database-crud',
    title: 'Database Design, Migration & CRUD Portals',
    category: 'Database & Systems',
    shortDescription: 'Robust relational database modeling, schema optimization, and custom administrative management dashboards (like the CIAMS portal).',
    deliverables: [
      'Normalized 3NF MySQL relational database schema',
      'Secure admin CRUD portal with user role management',
      'Query optimization, indexing, and performance tuning',
      'Data import/export pipelines (CSV, Excel, SQL dumps)'
    ],
    techStack: ['MySQL', 'RDBMS', 'PHP', 'SQL Optimization', 'Admin Portals'],
    estimatedTurnaround: '1 – 2 Weeks'
  },
  {
    id: 'server-deployment',
    title: 'Server Setup, File Sync & Deployment Automation',
    category: 'System Operations',
    shortDescription: 'Secure remote server configurations, automated file synchronization routines, and batch maintenance scripts.',
    deliverables: [
      'SFTP/FTP secure file sync setups using WinSCP & CoreFTP',
      'Scheduled automated routines using Windows Task Scheduler & batch files',
      'Cloud & remote file backup syncing with RClone & Syncovery',
      'Directory diff audits with Beyond Compare before live releases'
    ],
    techStack: ['Linux Commands', 'WinSCP', 'CoreFTP', 'PuTTY', 'RDC', 'Task Scheduler', 'RClone'],
    estimatedTurnaround: '2 – 7 Days'
  }
];


export const PROJECTS_DATA: ProjectDetail[] = [
  {
    id: 'ciams',
    title: 'CIAMS — Campus & Asset Information Management System',
    category: 'Software',
    subtitle: 'Comprehensive Asset Tracking, Departmental Inventory & Lifecycle Management',
    featured: true,
    shortDescription: 'Enterprise-grade information and asset management software streamlining institution inventory, audits, maintenance cycles, and role-based tracking.',
    technologies: ['Java', 'PHP', 'MySQL', 'JavaScript', 'HTML/CSS', 'Apache'],
    githubUrl: 'https://github.com/sanjaimuthamizh',
    caseStudy: {
      problem: 'Educational and corporate institutions frequently struggle with scattered manual asset ledgers, untracked hardware allocations, and lack of accountability during periodic equipment audits.',
      solution: 'Architected a centralized asset management system featuring structured relational databases, role-gated access for administrators, and instant lifecycle audit reporting.',
      technologies: ['Java', 'PHP', 'MySQL Relational Schema', 'JavaScript UI', 'Bootstrap CSS'],
      features: [
        'Centralized hardware and software asset repository with unique asset tagging',
        'Role-Based Access Control (RBAC) for department heads, lab assistants, and system administrators',
        'Audit history logs tracking asset movement, checkout dates, and maintenance tickets',
        'Detailed departmental reports and CSV/Excel export support for institutional records'
      ],
      development: 'Developed core database schema with normalized relational constraints in MySQL. Implemented server-side CRUD logic, session handling, and validation to prevent concurrent checkout conflicts.',
      dataArchitecture: 'Normalized 3NF relational database schema handling asset categories, locations, allocation history, vendor contacts, and status logs with indexed primary/foreign keys.',
      result: 'Delivered a functional, responsive platform that reduced asset lookup times and replaced error-prone paper logs with structured digital audits.'
    }
  },
  {
    id: 'weather-application',
    title: 'Weather Intelligence Application',
    category: 'Web',
    subtitle: 'Real-time Meteorological Dashboard & Forecast Visualizer',
    featured: false,
    shortDescription: 'Dynamic weather tracking web application fetching live environmental data, visual metrics, and interactive forecasts for cities worldwide.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'REST Weather API', 'Data Visualization'],
    githubUrl: 'https://github.com/sanjaimuthamizh',
    caseStudy: {
      problem: 'Users need instant, clutter-free access to critical meteorological indicators (temperature, humidity, wind velocity, barometric pressure) with responsive visual clarity.',
      solution: 'Built a lightweight, responsive meteorological dashboard consuming live REST APIs with graceful error handling and visual data readouts.',
      technologies: ['Modern JavaScript', 'RESTful Weather APIs', 'Asynchronous Fetch/Promises', 'Responsive UI'],
      features: [
        'Real-time atmospheric condition retrieval by city name with geolocation support',
        'Key metric cards displaying humidity percentages, wind speed, pressure, and visibility',
        'Dynamic visual theme reflecting current weather conditions (clear, overcast, rainy)',
        'Cached recent searches for rapid re-querying without redundant network overhead'
      ],
      development: 'Structured asynchronous data fetching routines with robust fallback handling for invalid inputs or rate limits. Formatted temperature and wind metrics dynamically.',
      dataArchitecture: 'REST JSON payload parsing, sanitization, and structured transformation into UI component states.',
      result: 'Created an accessible, fast-loading weather dashboard with clean visual feedback and intuitive data presentation.'
    }
  },
  {
    id: 'catering-platform',
    title: 'Catering Management & Booking Platform',
    category: 'Web',
    subtitle: 'Event Catering Booking, Menu Customization & Order Flow',
    featured: false,
    shortDescription: 'Interactive catering service portal allowing clients to customize event menus, calculate cost estimates in real-time, and manage booking inquiries.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    githubUrl: 'https://github.com/sanjaimuthamizh',
    caseStudy: {
      problem: 'Event catering orders are often delayed due to manual back-and-forth menu discussions, guest count re-estimations, and disorganized booking tracking.',
      solution: 'Created an interactive web platform with dynamic menu builder, tiered per-head pricing calculations, and automated inquiry capture for caterers.',
      technologies: ['PHP Backend', 'MySQL Database', 'Client-side Dynamic Calculation Scripts', 'CSS Grid'],
      features: [
        'Interactive menu course selection (Appetizers, Mains, Desserts, Beverages)',
        'Real-time dynamic per-person and total cost estimator based on guest attendance counts',
        'Booking submission workflow storing customer requests directly into MySQL tables',
        'Admin reservation overview to review, confirm, and update inquiry statuses'
      ],
      development: 'Engineered backend order handling routines, relational schema for menu catalog and orders, and client-side DOM recalculations for instant budget visibility.',
      dataArchitecture: 'Relational design connecting customers, event dates, menu selections, and order status indicators.',
      result: 'Streamlined the booking workflow, giving clients transparency over costs and providing vendors organized record management.'
    }
  },
  {
    id: 'ecommerce-clothing',
    title: 'E-Commerce Apparel Platform',
    category: 'Web',
    subtitle: 'Multi-category Clothing Store with Shopping Cart & Inventory Logic',
    featured: false,
    shortDescription: 'Full-featured online fashion store featuring catalog browsing, category filtering, cart management, and structured product databases.',
    technologies: ['React / JavaScript', 'PHP / Node Backend', 'MySQL', 'CSS3', 'REST API'],
    githubUrl: 'https://github.com/sanjaimuthamizh',
    caseStudy: {
      problem: 'Modern shoppers demand seamless product filtering, intuitive cart interactions, and instant feedback without cumbersome page reloads.',
      solution: 'Built an aesthetic e-commerce interface with instant category filtering, size/color selectors, client-side cart synchronization, and clean checkout states.',
      technologies: ['JavaScript/React', 'Relational Product Schema', 'Local State Management', 'Modern CSS'],
      features: [
        'Multi-category catalog browsing with price range and size filtering',
        'Detailed product view with gallery thumbnails, size charts, and stock availability',
        'Persistent shopping cart with quantity adjustment and subtotal recalculations',
        'Admin inventory catalog structure for adding and updating SKU listings'
      ],
      development: 'Constructed responsive product cards, state-driven cart drawer, and normalized database tables managing product variants, stock, and categories.',
      dataArchitecture: 'Product-SKU-Category relational tables with foreign key constraints and indexed search attributes.',
      result: 'Achieved an elegant shopping experience prioritizing fast catalog navigation and responsive checkout UI.'
    }
  },
  {
    id: 'house-price-prediction',
    title: 'House Price Prediction & Real Estate Analytics',
    category: 'Data',
    subtitle: 'End-to-End Regression Pipeline & Exploratory Data Analysis',
    featured: false,
    shortDescription: 'Data science case study analyzing real estate valuation drivers through exploratory analysis, feature engineering, and predictive regression modeling.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-Learn'],
    githubUrl: 'https://github.com/sanjaimuthamizh',
    caseStudy: {
      problem: 'Real estate valuations are influenced by complex non-linear combinations of square footage, location amenities, age of property, and room counts.',
      solution: 'Executed a structured Data Science workflow: raw data ingestion, missing value imputation, outlier detection, correlation analysis, and regression modeling.',
      technologies: ['Python 3', 'Pandas DataFrames', 'NumPy Arrays', 'Matplotlib & Seaborn Visualizations', 'Scikit-Learn Regression'],
      features: [
        'Exploratory Data Analysis (EDA) uncovering key property value drivers',
        'Correlation heatmaps and feature distribution histograms',
        'Data preprocessing including log transformation of skewed price targets and one-hot encoding',
        'Comparative evaluation of baseline Linear Regression and Regularized models'
      ],
      development: 'Wrote modular Python scripts for data cleaning, imputing median values for skewed distributions, and systematically validating model residuals.',
      dataArchitecture: 'Tabular dataset pipeline structured from raw CSV → cleaned dataframe → scaled feature matrices (X_train, X_test, y_train, y_test).',
      result: 'Identified the highest positive correlation factors (living area, overall quality rating) and provided visual diagnostic residual plots.',
      pipelineSteps: ['Dataset Ingestion', 'Data Cleaning & Imputation', 'Exploratory Data Analysis', 'Feature Engineering', 'Regression Modeling', 'Evaluation & Prediction']
    }
  },
  {
    id: 'credit-card-analysis',
    title: 'Credit Card Transaction Analysis & Risk Modeling',
    category: 'AI / ML',
    subtitle: 'Classification Workflow & Financial Pattern Recognition',
    featured: false,
    shortDescription: 'Supervised machine learning study addressing class imbalance, feature scaling, and predictive pattern identification on financial transactions.',
    technologies: ['Python', 'Pandas', 'Scikit-Learn', 'Matplotlib', 'Classification Metrics'],
    githubUrl: 'https://github.com/sanjaimuthamizh',
    caseStudy: {
      problem: 'Financial transaction datasets feature extreme class imbalance where anomalous or default events represent a tiny fraction of total activity.',
      solution: 'Implemented data preprocessing pipelines with robust feature scaling, stratified train-test splits, and precision-recall trade-off evaluations.',
      technologies: ['Python', 'Pandas', 'Scikit-Learn Classification', 'Confusion Matrix Evaluation'],
      features: [
        'Class imbalance handling and descriptive statistical profiling',
        'Standard scaling of numerical attributes and transaction volumes',
        'Model training comparing Logistic Regression and decision trees',
        'Evaluation utilizing Precision, Recall, F1-Score, and ROC-AUC curves'
      ],
      development: 'Constructed evaluation metrics focusing specifically on recall and confusion matrices to minimize costly false negatives.',
      dataArchitecture: 'Feature matrices with standardized variance scaling and stratified cross-validation folds.',
      result: 'Demonstrated practical mastery over supervised classification workflows and realistic evaluation methods beyond simple accuracy.',
      pipelineSteps: ['Problem Framing', 'Dataset Preprocessing', 'Feature Normalization', 'Model Training', 'Evaluation via Precision-Recall', 'Insight Synthesis']
    }
  },
  {
    id: 'ai-image-classification',
    title: 'AI Image Classification & Visual Intelligence',
    category: 'AI / ML',
    subtitle: 'Deep Learning / Computer Vision Exploration Pipeline',
    featured: false,
    shortDescription: 'Applied exploration into convolutional visual feature extraction, image preprocessing, and category classification architectures.',
    technologies: ['Python', 'NumPy', 'TensorFlow / PyTorch Concepts', 'Matplotlib', 'OpenCV Basics'],
    githubUrl: 'https://github.com/sanjaimuthamizh',
    caseStudy: {
      problem: 'High-dimensional pixel arrays require spatial feature hierarchies (edges, textures, shapes) to accurately categorize imagery under varying lighting and orientations.',
      solution: 'Constructed an image preprocessing and classification pipeline applying image normalization, data augmentation, and convolutional feature mapping.',
      technologies: ['Python', 'Image Preprocessing Pipelines', 'NumPy Matrix Operations', 'Visual Loss/Accuracy Curves'],
      features: [
        'Image resizing, grayscale/RGB normalization, and batch tensor formatting',
        'Data augmentation techniques (random rotations, horizontal flips) to reduce overfitting',
        'Training progression monitoring with loss and accuracy visual tracking',
        'Sample prediction visualizer displaying test image inference with confidence scores'
      ],
      development: 'Engineered preprocessing pipelines and visualized intermediate feature responses to understand neural representation layers.',
      dataArchitecture: 'Tensor dimensions (Batch, Height, Width, Channels) fed into sequential layer architectures.',
      result: 'Established solid practical understanding of computer vision foundations, tensor manipulation, and validation loss monitoring.',
      pipelineSteps: ['Problem & Data Collection', 'Tensor Preprocessing', 'Model Architecture', 'Training Loop & Augmentation', 'Validation & Inference']
    }
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: 'Data Science & Machine Learning Foundations',
    issuer: 'VIT Chennai Postgraduate Program & Online Specialization',
    date: 'Academic & Professional Coursework',
    skillsCovered: ['Python', 'Pandas', 'NumPy', 'EDA', 'Statistical Modeling', 'Machine Learning']
  },
  {
    title: 'Database Management Systems & SQL',
    issuer: 'Computer Science Curriculum & Certification',
    date: 'Core Foundation',
    skillsCovered: ['MySQL', 'RDBMS', 'Relational Schema Design', 'Query Optimization', 'CRUD']
  },
  {
    title: 'Full Stack Software Development (Java, PHP, Web)',
    issuer: 'Industry Practical Training & 4W Technologies Experience',
    date: 'Practical Experience',
    skillsCovered: ['Java', 'PHP', 'JavaScript', 'HTML/CSS', 'Linux', 'Git', 'WinSCP']
  },
  {
    title: 'AWS Cloud & Infrastructure Fundamentals',
    issuer: 'Cloud Computing Foundations',
    date: 'Self-Paced Exploration',
    skillsCovered: ['AWS EC2', 'Amazon S3', 'IAM Roles', 'Cloud Architecture', 'Monitoring']
  }
];

export const TARGET_ROLES = [
  {
    id: 'data-analyst',
    title: 'DATA ANALYST',
    badge: 'Insights & Analytics',
    description: 'Specialized in extracting clear, actionable answers from complex datasets through meticulous cleaning, statistical queries, and visual dashboards.',
    coreSkills: [
      'Data cleaning & transformation',
      'Exploratory Data Analysis (EDA)',
      'SQL & Complex Relational Queries',
      'Excel & Advanced Modeling',
      'Power BI & Business Intelligence',
      'Descriptive & Inferential Statistics',
      'Data Visualization & Storytelling',
      'Stakeholder Reporting & KPIs'
    ],
    highlight: 'Transforms raw numbers into clear strategic decisions.'
  },
  {
    id: 'software-engineer',
    title: 'SOFTWARE ENGINEER',
    badge: 'Architecture & Systems',
    description: 'Focused on developing resilient backend logic, robust APIs, efficient database structures, and disciplined problem-solving practices.',
    coreSkills: [
      'Application development & maintenance',
      'Backend engineering (Java, Python, PHP)',
      'Relational Database Modeling (MySQL)',
      'RESTful APIs & Service Communication',
      'Object-Oriented Design (OOPS)',
      'Systematic Debugging & Root Cause Analysis',
      'Deployment & Server Tasks',
      'Clean Code & Version Control (Git)'
    ],
    highlight: 'Designs dependable, scalable software systems.'
  },
  {
    id: 'software-developer',
    title: 'SOFTWARE DEVELOPER',
    badge: 'Applications & Web',
    description: 'Passionate about building responsive, practical end-to-end web applications combining intuitive frontends with stable backend services.',
    coreSkills: [
      'Interactive Web Applications',
      'Full-Stack Development',
      'Modern JavaScript & React',
      'HTML5 & Modern CSS / Bootstrap',
      'PHP & Server Scripting',
      'MySQL Database Integration & CRUD',
      'Cross-Browser & Responsive Optimization',
      'Developer Workflows & File Sync Tools'
    ],
    highlight: 'Delivers complete, user-friendly digital products.'
  }
];

export const TECHNICAL_SKILLS_CATEGORIES = [
  {
    title: 'PROGRAMMING LANGUAGES',
    description: 'Core languages used for software development, system scripting, and algorithmic problem solving.',
    skills: [
      { name: 'Python', level: 'Advanced / Data & Scripting', context: 'Data analysis, pandas, numpy, scripting' },
      { name: 'Java', level: 'Proficient / Backend', context: 'OOP concepts, core logic, enterprise systems' },
      { name: 'C++', level: 'Strong Foundation', context: 'Data structures, algorithm complexity' },
      { name: 'JavaScript', level: 'Proficient / Web', context: 'DOM manipulation, asynchronous fetch, modern ES6+' },
      { name: 'PHP', level: 'Practical / Full-Stack', context: 'Backend server scripting, MySQL connectivity' }
    ]
  },
  {
    title: 'WEB TECHNOLOGIES',
    description: 'Technologies powering responsive client-side experiences and web application interfaces.',
    skills: [
      { name: 'HTML5', level: 'Semantic Markup', context: 'Accessibility, structure, SEO best practices' },
      { name: 'CSS3', level: 'Responsive Layouts', context: 'Flexbox, Grid, animations, variables' },
      { name: 'JavaScript', level: 'Core Logic', context: 'Event loops, promises, modular patterns' },
      { name: 'React', level: 'Component Architecture', context: 'Hooks, state management, SPA design' },
      { name: 'Bootstrap', level: 'UI Framework', context: 'Rapid prototyping, grid system' },
      { name: 'PHP', level: 'Server Rendering', context: 'Form processing, session authentication' }
    ]
  },
  {
    title: 'DATABASE & BACKEND FOUNDATIONS',
    description: 'Structured data persistence, relational modeling, and query execution standards.',
    skills: [
      { name: 'MySQL', level: 'Primary RDBMS', context: 'Complex joins, indexing, query optimization' },
      { name: 'DBMS / RDBMS', level: 'Core Principles', context: 'ACID properties, entity-relationship models' },
      { name: 'OOPS Concepts', level: 'Design Methodology', context: 'Inheritance, encapsulation, polymorphism, abstraction' },
      { name: 'CRUD Operations', level: 'Data Manipulation', context: 'Safe insert, select, update, delete workflows' },
      { name: 'SQL', level: 'Advanced Querying', context: 'Aggregations, group by, subqueries, constraints' }
    ]
  },
  {
    title: 'DATA & ANALYTICS',
    description: 'Libraries, statistical methodologies, and analytical tools for end-to-end data exploration.',
    skills: [
      { 
        name: 'Microsoft Excel', 
        level: 'Expert Formulas & Analytics', 
        context: 'Complex XLOOKUP & Nested Logic, Interactive Pivot Slicers, KPI Dashboards & Data Sanitization' 
      },
      { name: 'Python', level: 'Core Engine', context: 'Scientific computing and automation' },
      { name: 'Pandas', level: 'Data Wrangling', context: 'DataFrames, merging, groupby, cleaning' },
      { name: 'NumPy', level: 'Numerical Arrays', context: 'Vectorized operations, linear algebra' },
      { name: 'Power BI', level: 'BI Dashboards', context: 'Visual reports, DAX expressions, KPIs' },
      { name: 'SQL for Analytics', level: 'Extraction', context: 'Window functions, analytical rollups' },
      { name: 'Matplotlib & Seaborn', level: 'Visual Plots', context: 'Statistical figures, correlation heatmaps' },
      { name: 'Exploratory Data Analysis', level: 'Core Discipline', context: 'Pattern detection, correlation discovery' }
    ]
  }
];

export const TOOLS_CATEGORIES: ToolGroup[] = [
  {
    group: 'Data, Analytics & Productivity',
    description: 'Analytical modeling, spreadsheet automation, and business intelligence.',
    tools: [
      { 
        name: 'Microsoft Excel', 
        description: 'Advanced Modeling & Formulas (XLOOKUP, INDEX-MATCH, nested IFS), Dynamic Pivot Tables & Slicers, Data Cleansing & Deduplication, Conditional Rules, and Executive KPI Dashboards.', 
        badge: 'Excel Specialist / XLSX',
        highlight: true 
      },
      { 
        name: 'Microsoft Office', 
        description: 'Comprehensive technical reporting, system documentation, and structured client presentations.',
        badge: 'Productivity'
      },
      { 
        name: 'Power BI', 
        description: 'Interactive business intelligence dashboards and cross-functional reporting metrics.',
        badge: 'BI & Reporting'
      }
    ]
  },
  {
    group: 'System Administration & Remote Operations',
    description: 'Remote server administration, secure deployment channels, and host diagnostics.',
    tools: [
      { name: 'Linux Commands', description: 'Terminal navigation, process supervision, grep filtering, cron tasks, and permission audits.' },
      { name: 'WinSCP', description: 'Secure SFTP / FTP multi-tier file transfers and remote server file synchronization.' },
      { name: 'CoreFTP', description: 'Secure FTP client for file uploads, maintenance routines, and deployment artifacts.' },
      { name: 'PuTTY', description: 'SSH and telnet terminal client for secure remote server sessions and CLI administration.' },
      { name: 'Remote Desktop (RDC)', description: 'Remote server access, session management, and Windows server health monitoring.' },
      { name: 'XAMPP & WAMP', description: 'Local Apache, MySQL, and PHP server stacks for local testing and validation.' }
    ]
  },
  {
    group: 'Version Control & Diff Audits',
    description: 'Code integrity, version tracking, and release regression prevention.',
    tools: [
      { name: 'Beyond Compare', description: 'High-precision directory diffing, file comparison, and merge validation to prevent production regressions.', highlight: true },
      { name: 'Git & GitHub', description: 'Distributed version control, branch management, pull requests, and collaborative workflows.' }
    ]
  },
  {
    group: 'Automation, Sync & Scheduling',
    description: 'Automated recurring tasks, background routines, and automated sync jobs.',
    tools: [
      { name: 'Windows Task Scheduler', description: 'Automating background routine triggers, batch maintenance scripts, and health tasks.' },
      { name: 'RClone', description: 'Command-line tool for synchronizing directories and cloud storage backups.' },
      { name: 'Syncovery', description: 'Automated file synchronization, real-time backup monitoring, and mirror routines.' },
      { name: 'Batch Files (.bat)', description: 'Custom command-line scripting for routine operational tasks and environment setups.' }
    ]
  },
  {
    group: 'Development IDEs & Editors',
    description: 'High-productivity development environments for Java, PHP, and web systems.',
    tools: [
      { name: 'IntelliJ IDEA', description: 'Primary IDE for Java development and enterprise project engineering.' },
      { name: 'Visual Studio Code', description: 'Fast, extensible editor for web frontend, PHP scripts, and modern tooling.' },
      { name: 'Eclipse', description: 'Java IDE for backend development and workspace dependency management.' }
    ]
  }
];

