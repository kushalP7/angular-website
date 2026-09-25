import { PortfolioConfig } from '../interfaces/portfolio.interface';

export const PORTFOLIO_CONFIG: PortfolioConfig = {
  name: 'Kushal Prajapati',
  titles: [
    'Software Engineer',
    'Full Stack Developer',
    'MEAN Stack Developer',
    'Angular & Node.js Developer'
  ],
  introText: 'I build scalable, high-performance web applications using Angular, Node.js, PostgreSQL, and AWS. I enjoy solving complex backend problems, designing enterprise applications, and continuously learning modern cloud technologies.',
  profileImage: 'assets/images/profile-placeholder.jpeg',
  aboutImage: 'assets/images/about-placeholder.svg',
  bio:'I am a Software Engineer with 2+ years of experience developing enterprise web applications using Angular, Node.js, Express.js, PostgreSQL, and MongoDB. I have worked on multi-tenant SaaS platforms, REST APIs, real-time applications, and cloud deployments on AWS. I enjoy building clean architectures, optimizing application performance, and learning modern software engineering practices.',
  resumeUrl: 'assets/pdf/Kushal-Prajapati-Resume.pdf',
  socialLinks: [
    {
      platform: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: 'fab fa-github'
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: 'fab fa-linkedin'
    },
    {
      platform: 'LeetCode',
      url: 'https://leetcode.com/yourusername',
      icon: 'fas fa-code'
    }
  ],
  facts: [
    {
      label: 'Based in',
      value: 'Ahmedabad, Gujarat, India',
      icon: 'fas fa-map-marker-alt'
    },
    {
      label: 'Experience',
      value: '2+ Years',
      icon: 'fas fa-briefcase'
    },
    {
      label: 'Availability',
      value: 'Open to Work',
      icon: 'fas fa-circle-check'
    },
    {
      label: 'Specialization',
      value: 'Full Stack Development',
      icon: 'fas fa-code'
    }
  ],
  stats: [
    {
      label: 'Years Experience',
      value: 2,
      suffix: '+',
      icon: 'fas fa-history'
    },
    {
      label: 'Projects Built',
      value: 15,
      suffix: '+',
      icon: 'fas fa-folder'
    },
    {
      label: 'Technologies',
      value: 15,
      suffix: '+',
      icon: 'fas fa-code'
    },
    {
      label: 'Cloud Deployments',
      value: 5,
      suffix: '+',
      icon: 'fas fa-cloud'
    }
  ],
  education: [
    {
      institution: 'Stanford University',
      degree: 'M.S. in Computer Science (Specialization in Software Systems)',
      duration: '2016 - 2018',
      location: 'Stanford, CA',
      description: 'Focused on Advanced Software Engineering, Distributed Systems, and Human-Computer Interaction.'
    },
    {
      institution: 'University of California, Berkeley',
      degree: 'B.S. in Computer Science',
      duration: '2012 - 2016',
      location: 'Berkeley, CA',
      description: 'Graduated with Honors. Core coursework in Data Structures, Algorithms, Web Architecture, and Databases.'
    }
  ],
  certifications: [
    {
      name: 'Angular Enterprise Architecture Specialist',
      issuer: 'Angular Training & Tech Association',
      date: '2024',
      url: '#'
    },
    {
      name: 'AWS Certified Solutions Architect - Associate',
      issuer: 'Amazon Web Services',
      date: '2023',
      url: '#'
    },
    {
      name: 'Google UX Design Professional Certificate',
      issuer: 'Google',
      date: '2022',
      url: '#'
    }
  ],
  achievements: [
    {
      name: 'Speaker at Angular Global Summit 2024',
      details: 'Presented on "Optimizing Change Detection in Large-Scale Enterprise Applications".'
    },
    {
      name: 'Open Source Contributor',
      details: 'Active core contributor to several popular Angular community libraries.'
    },
    {
      name: 'Tech Lead Excellence Award',
      details: 'Recognized for leading a team of 10 developers to deliver a critical cloud migration project 2 months ahead of schedule.'
    }
  ] as any, // Cast for quick custom fields compatibility if needed
  skillsCategories: [
    {
      title: 'Frontend',
      icon: 'fas fa-laptop-code',
      skills: [
        {
          name: 'Angular',
          level: 90,
          experience: '2+ Years',
          icon: 'fab fa-angular'
        },
        {
          name: 'TypeScript',
          level: 90,
          experience: '2+ Years',
          icon: 'fas fa-code'
        },
        {
          name: 'JavaScript',
          level: 88,
          experience: '2+ Years',
          icon: 'fab fa-js'
        },
        {
          name: 'HTML5',
          level: 95,
          experience: '2+ Years',
          icon: 'fab fa-html5'
        },
        {
          name: 'CSS3 / SCSS',
          level: 90,
          experience: '2+ Years',
          icon: 'fab fa-css3-alt'
        },
        {
          name: 'Bootstrap',
          level: 85,
          experience: '2+ Years',
          icon: 'fab fa-bootstrap'
        }
      ]
    },
    {
      title: 'Backend',
      icon: 'fas fa-server',
      skills: [
        {
          name: 'Node.js',
          level: 90,
          experience: '2+ Years',
          icon: 'fab fa-node-js'
        },
        {
          name: 'Express.js',
          level: 90,
          experience: '2+ Years',
          icon: 'fas fa-server'
        },
        {
          name: 'REST API',
          level: 90,
          experience: '2+ Years',
          icon: 'fas fa-network-wired'
        },
        {
          name: 'Socket.IO',
          level: 80,
          experience: '1+ Year',
          icon: 'fas fa-comments'
        },
        {
          name: 'WebRTC',
          level: 75,
          experience: '1+ Year',
          icon: 'fas fa-video'
        }
      ]
    },
    {
      title: 'Database',
      icon: 'fas fa-database',
      skills: [
        {
          name: 'PostgreSQL',
          level: 88,
          experience: '2+ Years',
          icon: 'fas fa-database'
        },
        {
          name: 'MongoDB',
          level: 85,
          experience: '2+ Years',
          icon: 'fas fa-leaf'
        }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: 'fas fa-cloud',
      skills: [
        {
          name: 'AWS EC2',
          level: 80,
          experience: 'Learning',
          icon: 'fab fa-aws'
        },
        {
          name: 'AWS S3',
          level: 80,
          experience: 'Learning',
          icon: 'fab fa-aws'
        },
        {
          name: 'IAM',
          level: 75,
          experience: 'Learning',
          icon: 'fab fa-aws'
        },
        {
          name: 'GitHub Actions',
          level: 75,
          experience: 'Learning',
          icon: 'fab fa-github'
        },
        {
          name: 'Docker',
          level: 70,
          experience: 'Learning',
          icon: 'fab fa-docker'
        },
        {
          name: 'Linux',
          level: 80,
          experience: 'Learning',
          icon: 'fab fa-linux'
        }
      ]
    }
  ],
    experienceList: [
      {
        company: 'Confidential',
        designation: 'Software Engineer',
        duration: '2024 - Present',
        location: 'Ahmedabad, India',
        responsibilities: [
          'Developing enterprise web applications using Angular and Node.js.',
          'Building scalable REST APIs using Express.js and PostgreSQL.',
          'Implementing multi-tenant SaaS features.',
          'Deploying applications on AWS EC2 with Nginx and PM2.',
          'Working on CI/CD pipelines using GitHub Actions.',
          'Optimizing application performance and database queries.'
        ],
        techStack: [
          'Angular',
          'Node.js',
          'Express.js',
          'PostgreSQL',
          'MongoDB',
          'AWS',
          'GitHub Actions'
        ]
      }
    ],
  projectsList: [
    {
      title: 'Zenith Dashboard - Enterprise SaaS',
      description: 'A premium, real-time analytics dashboard designed for enterprise resource management. Features interactive charting, configurable widgets, deep data queries, and high-performance tables.',
      category: 'Angular',
      techStack: ['Angular', 'Signals', 'RxJS', 'Bootstrap 5', 'Chart.js', 'SCSS'],
      features: [
        'Real-time data streaming and synchronization using WebSockets',
        'State-of-the-art widgets drag-and-drop system',
        'Fully responsive with dedicated mobile dashboard experience',
        'Auto Dark/Light theme integration with state persistence'
      ],
      imageUrl: 'assets/images/projects/zenith-dashboard.svg', // REPLACE with project image
      githubUrl: 'https://github.com',
      liveUrl: 'https://google.com',
      featured: true
    },
    {
      title: 'Apex E-Commerce Platform',
      description: 'A modular, high-conversion e-commerce platform with a search engine, product filters, animations, an checkout process, and integration with Stripe payments.',
      category: 'Angular',
      techStack: ['Angular', 'RxJS', 'Stripe API', 'Bootstrap 5', 'SCSS', 'Node.js'],
      features: [
        'Advanced instant search and product filter system',
        'Stateful shopping cart synced with Local Storage',
        'Fully secure credit card processing with Stripe Elements',
        'Dynamic custom page transitions and hero animations'
      ],
      imageUrl: 'assets/images/projects/apex-ecommerce.svg', // REPLACE with project image
      githubUrl: 'https://github.com',
      liveUrl: 'https://google.com',
      featured: true
    },
    {
      title: 'CloudScale - Serverless API Gateway',
      description: 'A lightweight, ultra-fast serverless API gateway built to routing, throttle, and secure microservices. Features an administrative portal for endpoint management.',
      category: 'Cloud',
      techStack: ['AWS Lambda', 'DynamoDB', 'Node.js', 'Angular', 'API Gateway'],
      features: [
        'Serverless execution yielding 99.99% uptime',
        'Custom rate-limiting (throttling) policies per API key',
        'Live request logging and performance analytics charts',
        'Automatic SSL certificate provisioning and renewals'
      ],
      imageUrl: 'assets/images/projects/cloudscale-gateway.svg', // REPLACE with project image
      githubUrl: 'https://github.com',
      liveUrl: 'https://google.com',
      featured: false
    },
    {
      title: 'Aura Social Network',
      description: 'A micro-blogging platform emphasizing lightweight client footprint and absolute privacy. Includes image processing, post tagging, markdown support, and private messaging.',
      category: 'Node',
      techStack: ['Node.js', 'Express', 'MongoDB', 'Angular', 'Socket.io', 'WebRTC'],
      features: [
        'P2P secure messaging and voice/video calling using WebRTC',
        'Automatic image compression and blur-up loading indicators',
        'Rich text editor supporting Github-flavored Markdown',
        'Robust JWT authentication with fingerprint validation'
      ],
      imageUrl: 'assets/images/projects/aura-social.svg', // REPLACE with project image
      githubUrl: 'https://github.com',
      liveUrl: 'https://google.com',
      featured: false
    },
    {
      title: 'NeuroPath - Medical Image Analyzer',
      description: 'An AI-assisted medical imaging web portal allowing radiologists to upload MRI scans, run neural network inference, and annotate pathological findings in real-time.',
      category: 'Python',
      techStack: ['Python', 'FastAPI', 'PyTorch', 'Angular', 'Docker', 'AWS S3'],
      features: [
        'GPU-accelerated MRI scan classification on cloud instances',
        'Interactive WebGL canvas for scan slicing and annotation',
        'Compliant patient data management with audit trail logging',
        'DICOM file format parser and conversion utilities'
      ],
      imageUrl: 'assets/images/projects/neuropath-analyzer.svg', // REPLACE with project image
      githubUrl: 'https://github.com',
      liveUrl: 'https://google.com',
      featured: true
    }
  ],
  servicesList: [
    {
      title: 'Angular Development',
      description: 'Building scalable Angular applications using modern best practices.',
      icon: 'fab fa-angular'
    },
    {
      title: 'Backend Development',
      description: 'REST API development using Node.js, Express.js and PostgreSQL.',
      icon: 'fab fa-node-js'
    },
    {
      title: 'AWS Deployment',
      description: 'Deploying applications on AWS EC2 using Nginx, PM2 and GitHub Actions.',
      icon: 'fab fa-aws'
    },
    {
      title: 'Database Design',
      description: 'Designing efficient PostgreSQL and MongoDB databases.',
      icon: 'fas fa-database'
    },
    {
      title: 'Real-Time Applications',
      description: 'Building chat and notification systems using Socket.IO and WebRTC.',
      icon: 'fas fa-comments'
    }
  ],
  contactInfo: {
    email: 'kushal.prajapati.dev@gmail.com',
    phone: '+91 XXXXXXXXXX',
    location: 'Ahmedabad, Gujarat, India',
    availability: 'Open to Full-time Opportunities',
    mapEmbedUrl: 'https://www.google.com/maps?q=Ahmedabad,+Gujarat&output=embed'
  }
};
