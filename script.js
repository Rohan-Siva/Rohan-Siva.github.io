document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const currentYear = document.getElementById('current-year');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
    
    // Experience data
    const experienceData = [
        {
            title: "Machine Learning Intern",
            company: "Cisco",
            logo: "./assets/images/company_logos/cisco.png",
            period: "May 2025 - Present",
            description: [
                "Developed kRAIG, an AI agent converting natural language into executable Kubeflow Pipelines for ETL workflows, achieving 100% pipeline success and 91.7% component accuracy using Claude 3.7 with grounded prompting",
                "Built a production-ready FastAPI microservice with data validation and high-speed crawling (200+ URLs/sec)",
                "Integrated agent with PostgreSQL & S3 via tool calling (MCP), enabling automated ETL into enterprise data storages",
                "Enhanced the system with a RAG-based pipeline generator using Elasticsearch & safety guardrails for database operations"
            ],
            skills: ["Python", "FastAPI", "Kubeflow", "PostgreSQL", "Elasticsearch", "AWS S3"]
        },
        {
            title: "AI Researcher",
            company: "PKU Lab @ Peking University",
            logo: "./assets/images/company_logos/pku.png",
            period: "May 2025 - Present",
            description: [
                "Leading research on a novel framework for uncertainty-aware multimodal planning by integrating block-by-block diffusion into Chain-of-Thought reasoning, enabling a real-time uncertainty feedback loop based on posterior variance",
                "Designed architecture that replaces autoregressive CoT with diffusion-based generation, reducing latency by up to 34% through parallelizable reasoning and real-time auditing for improved model reliability in VLM-based autonomous driving"
            ],
            skills: ["Python", "PyTorch", "Diffusion Models", "Autonomous Systems"]
        },
        {
            title: "AI Researcher",
            company: "IX (Information eXperience) Lab @ UT Austin",
            logo: "./assets/images/company_logos/utexas.png",
            period: "Aug 2024 - Present",
            description: [
                "Built full-stack systems integrating LLMs into interactive information retrieval interfaces using Python, Node.js, and the OpenAI API, enabling real-time query refinement through dynamic user feedback loops",
                "Designed and prototyped multi-pane user interaction flows in Figma to support sequential querying",
                "Evaluated search efficiency and AI-driven assistance models through user-centered interface testing and optimization"
            ],
            skills: ["Python", "Node.js", "OpenAI API", "Figma", "UX Research"]
        },
        {
            title: "AI Researcher",
            company: "Center for Autonomy @ UT Austin",
            logo: "./assets/images/company_logos/utexas.png",
            period: "Aug 2024 - Present",
            description: [
                "Developing an autonomous driving pipeline that disentangles black-box uncertainty into decision and perception uncertainty scores for targeted interventions (MLSys 2025)",
                "Led fine-tuning (PEFT) of LLaVa multimodal foundation models for autonomous driving using FMDP and conformal prediction, resulting in 5% improvement in task compliance and 40% reduction in decision variability",
                "Built a refinement pipeline using formal verification and active sensing, achieving 95% specification compliance"
            ],
            skills: ["Python", "PyTorch", "LLaVA", "Autonomous Driving", "Formal Methods"]
        },
        {
            title: "Machine Learning Engineer (Contract)",
            company: "Mercor AI",
            logo: "./assets/images/company_logos/mercor.jpeg",
            period: "Sep 2025",
            description: [
                "Developed plan–code pairs for ML engineering tasks from Kaggle competitions with verifiable outputs within task specs",
                "Automated data generation pipeline and preprocessing, producing structured supervision signals for model training",
                "Improved training and data generation efficiency by 50% through scalable dataset construction and validation"
            ],
            skills: ["Python", "Machine Learning", "Data Pipeline", "Automation"]
        },
        {
            title: "Software Engineering Backend Intern",
            company: "Canyon Technologies LLC",
            logo: "./assets/images/company_logos/canyon.jpg",
            period: "May 2024 - Oct 2024",
            description: [
                "Developed a cloud-based inventory and display management platform using SpringBoot, Docker, and a REST API",
                "Integrated nxESL tags and BLOZI base stations to enable real-time updates, digital signage, and QR-code label management",
                "Designed and deployed a secure customer mailing system with Java and React.js, enhancing client communication"
            ],
            skills: ["Java", "SpringBoot", "Docker", "REST API", "React.js"]
        },
        {
            title: "SWE Researcher",
            company: "Keitt Lab @ UT Austin",
            logo: "./assets/images/company_logos/utexas.png",
            period: "Nov 2023 - July 2024",
            description: [
                "Built a low-power sensor mesh using XBee radios and time-synchronized Raspberry Pi nodes with a central communication unit, eliminating the need for Wi-Fi in remote wildlife monitoring locations",
                "Developed an ML-based acoustic detection system to identify bird species and locations from chirp data with real-time sound analysis"
            ],
            skills: ["Python", "Raspberry Pi", "XBee", "Machine Learning", "Signal Processing"]
        }
    ];

    // Projects data
    const projectsData = [
        {
            title: "MoodScribe – AI Social Sidekick",
            description: "A real-time AI assistant for Instagram DMs with a cyberpunk-themed interface and Flask backend. Integrated Meta API for live chat scraping and deployed emotion-aware NLP models to generate mood-aligned response suggestions.",
            technologies: ["Python", "Flask", "LLaMA", "Unsloth", "JavaScript", "HTML/CSS"],
            highlights: [],
            links: {
                github: "#"
            }
        },
        {
            title: "Minerva – AI Study App",
            description: "An AI study assistant integrating Google Classroom API for note uploads and using OpenAI API with LlamaIndex in a RAG pipeline to generate personalized study guides and summaries.",
            technologies: ["Python", "React", "Flask", "OpenAI API", "LlamaIndex", "Google Classroom API"],
            highlights: [],
            links: {
                github: "#"
            }
        }
    ];

    // Publications data
    const publicationsData = [
        {
            title: "Know Where You're Uncertain When Planning with Multimodal Foundation Models: A Formal Framework",
            authors: "Bhatt, N. P., Yang, Y., Siva, R., Milan, D., Topcu, U., & Wang, Z.",
            conference: "<span class='conference-highlight'>MLSys 2025 🏆</span>",
            abstract: "This paper presents a novel framework for uncertainty-aware multimodal planning by integrating block-by-block diffusion into Chain-of-Thought reasoning, enabling a real-time uncertainty feedback loop based on posterior variance. The architecture replaces autoregressive CoT with diffusion-based generation, reducing latency by up to 34% through parallelizable reasoning and real-time auditing for improved model reliability in VLM-based autonomous driving.",
            links: {
                paper: "https://arxiv.org/abs/2411.01639",
                code: "https://github.com/uncertainty-in-planning/uncertainty-in-planning.github.io",
                openreview: "https://openreview.net/forum?id=HPHrIBlJYw"
            }
        }
    ];

    // Render experience
    function renderExperience() {
        const experienceList = document.querySelector('.experience-list');
        if (!experienceList) return;

        experienceData.forEach(exp => {
            const expItem = document.createElement('div');
            expItem.className = 'experience-item';
            
            const expHeader = document.createElement('div');
            expHeader.className = 'experience-header';
            
            
            const headerContent = document.createElement('div');
            headerContent.className = 'header-content';
            
            const titleRow = document.createElement('div');
            titleRow.className = 'title-row';
            
            const title = document.createElement('h3');
            title.className = 'experience-title';
            title.textContent = exp.title;
            
            const company = document.createElement('span');
            company.className = 'experience-company';
            company.textContent = exp.company;
            
            const period = document.createElement('span');
            period.className = 'experience-period';
            period.textContent = exp.period;
            
            const description = document.createElement('ul');
            description.className = 'experience-description';
            exp.description.forEach(desc => {
                const li = document.createElement('li');
                li.textContent = desc;
                description.appendChild(li);
            });
            
            const skills = document.createElement('div');
            skills.className = 'experience-skills';
            exp.skills.forEach(skill => {
                const skillTag = document.createElement('span');
                skillTag.className = 'skill-tag';
                skillTag.textContent = skill;
                skills.appendChild(skillTag);
            });
            
            titleRow.appendChild(title);
            titleRow.appendChild(company);
            
            headerContent.appendChild(titleRow);
            headerContent.appendChild(period);
            
            expHeader.appendChild(headerContent);
            
            expItem.appendChild(expHeader);
            expItem.appendChild(description);
            expItem.appendChild(skills);
            
            experienceList.appendChild(expItem);
        });
    }

    // Render projects
    function renderProjects() {
        const projectsGrid = document.querySelector('.projects-grid') || document.createElement('div');
        if (!document.querySelector('.projects-grid')) {
            projectsGrid.className = 'projects-grid';
            document.querySelector('#projects .section-content').appendChild(projectsGrid);
        }

        projectsData.forEach((project, index) => {
            const projectElement = document.createElement('div');
            projectElement.className = 'project-card fade-in';
            projectElement.style.animationDelay = `${index * 100}ms`;
            
            // Create image container with placeholder if no image
            const imageHTML = project.image ? 
                `<div class="project-image-container">
                    <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
                </div>` : 
                `<div class="project-image-container" style="background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);">
                    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: rgba(255,255,255,0.1); font-size: 2.5rem;">
                        <i class="fas fa-code"></i>
                    </div>
                </div>`;
            
            // Create links
            const linksHTML = [];
            if (project.links.demo) {
                linksHTML.push(`<a href="${project.links.demo}" class="project-link" target="_blank" rel="noopener noreferrer" aria-label="View ${project.title} Demo">
                    <i class="fas fa-external-link-alt"></i> Demo
                </a>`);
            }
            if (project.links.code) {
                linksHTML.push(`<a href="${project.links.code}" class="project-link" target="_blank" rel="noopener noreferrer" aria-label="View ${project.title} Code">
                    <i class="fab fa-github"></i> Code
                </a>`);
            }
            if (project.links.paper) {
                linksHTML.push(`<a href="${project.links.paper}" class="project-link" target="_blank" rel="noopener noreferrer" aria-label="View ${project.title} Paper">
                    <i class="fas fa-file-alt"></i> Paper
                </a>`);
            }
            
            projectElement.innerHTML = `
                ${imageHTML}
                <div class="project-content">
                    <div class="project-header">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                    </div>
                    ${project.technologies && project.technologies.length > 0 ? `
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>` : ''}
                    <ul class="project-highlights">
                        ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                    </ul>
                    ${linksHTML.length > 0 ? `
                    <div class="project-links">
                        ${linksHTML.join('')}
                    </div>` : ''}
                </div>
            `;
            
            projectsGrid.appendChild(projectElement);
        });
    }

    // Render publications
    function renderPublications() {
        const publicationsList = document.querySelector('.publications-list') || document.createElement('div');
        if (!document.querySelector('.publications-list')) {
            publicationsList.className = 'publications-list';
            document.querySelector('#publications .section-content').appendChild(publicationsList);
        }

        publicationsData.forEach((pub, index) => {
            const pubElement = document.createElement('div');
            pubElement.className = 'publication-item fade-in';
            pubElement.style.animationDelay = `${index * 100}ms`;
            
            // Create links
            const linksHTML = [];
            if (pub.links.paper) {
                linksHTML.push(`<a href="${pub.links.paper}" class="publication-link" target="_blank" rel="noopener noreferrer" aria-label="View ${pub.title} Paper">
                    <i class="fas fa-file-pdf"></i> Paper
                </a>`);
            }
            if (pub.links.code) {
                linksHTML.push(`<a href="${pub.links.code}" class="publication-link" target="_blank" rel="noopener noreferrer" aria-label="View ${pub.title} Code">
                    <i class="fab fa-github"></i> Code
                </a>`);
            }
            if (pub.links.openreview) {
                linksHTML.push(`<a href="${pub.links.openreview}" class="publication-link" target="_blank" rel="noopener noreferrer" aria-label="View ${pub.title} on OpenReview">
                    <i class="fas fa-comment-alt"></i> OpenReview
                </a>`);
            }
            
            const hasAbstract = pub.abstract && pub.abstract.trim() !== '';
            
            pubElement.innerHTML = `
                <div class="publication-header">
                    <h3 class="publication-title">${pub.title}</h3>
                    <p class="publication-authors">${pub.authors}</p>
                    <span class="publication-venue">${pub.conference}</span>
                </div>
                ${linksHTML.length > 0 ? `
                <div class="publication-links">
                    ${linksHTML.join('')}
                </div>` : ''}
            `;
            
            publicationsList.appendChild(pubElement);
        });

    }

    // Handle contact form submission
    function handleContactForm(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData.entries());
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formValues);
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success';
        successMessage.textContent = 'Thank you for your message! I will get back to you soon.';
        form.appendChild(successMessage);
        
        // Reset form
        form.reset();
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    }

    // Initialize
    function init() {
        renderExperience();
        renderProjects();
        renderPublications();
        setupEventListeners();
        setupNavigation();
        setupScrollSpy();
    }
    
    // Setup navigation
    function setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Update active link
                    navLinks.forEach(navLink => navLink.classList.remove('active'));
                    link.classList.add('active');
                    
                    // Smooth scroll to section
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Update active nav link based on scroll position
    function setupScrollSpy() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                    });
                }
            });
        }, {
            rootMargin: '-80px 0px 0px 0px',
            threshold: 0.2
        });
        
        sections.forEach(section => observer.observe(section));
    }

    // Add smooth scrolling for anchor links
    function setupEventListeners() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Add form submission handler
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', handleContactForm);
        }
    }

    // Start the application
    init();
});
