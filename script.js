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
            date: "May 2025 - Present",
            details: [
                "Developed kRAIG, an AI agent converting natural language into executable Kubeflow Pipelines for ETL workflows, achieving 100% pipeline success and 91.7% component accuracy using Claude 3.7 with grounded prompting",
                "Built a production-ready FastAPI microservice with data validation and high-speed crawling (200+ URLs/sec)",
                "Integrated agent with PostgreSQL & S3 via tool calling (MCP), enabling automated ETL into enterprise data storages",
                "Enhanced the system with a RAG-based pipeline generator using Elasticsearch & safety guardrails for database operations",
                "Designed an evaluation framework with variance analysis across 6 model variants, improving pipeline success rate from 0% to 100% while reducing variance to 18%"
            ]
        },
        {
            title: "Machine Learning Engineer (Contract)",
            company: "Mercor AI",
            date: "Sep 2025",
            details: [
                "Developed plan–code pairs for ML engineering tasks from Kaggle competitions with verifiable outputs",
                "Automated data generation pipeline and preprocessing, producing structured supervision signals for model training",
                "Improved training and data generation efficiency by 50% through scalable dataset construction"
            ]
        },
        {
            title: "AI Researcher",
            company: "VITA Lab @ UT Austin",
            date: "Aug 2024 - Present",
            details: [
                "Developed an autonomous driving pipeline that disentangles black-box uncertainty into decision and perception uncertainty scores (MLSys 2025)",
                "Led fine-tuning of LLaVa multimodal foundation models using FMDP and conformal prediction, resulting in 5% improvement in task compliance",
                "Built a refinement pipeline using formal verification and active sensing, achieving 95% specification compliance"
            ]
        },
        {
            title: "AI Researcher",
            company: "PKU Lab @ Peking University",
            date: "May 2025 - Present",
            details: [
                "Research on uncertainty-aware multimodal planning by integrating diffusion models into Chain-of-Thought reasoning",
                "Designed architecture that replaces autoregressive CoT with diffusion-based generation, reducing latency by 34%"
            ]
        }
    ];

    // Projects data
    const projectsData = [
        {
            title: "MoodScribe – AI Social Sidekick",
            description: "A real-time AI assistant for Instagram DMs with emotion-aware response generation.",
            technologies: ["Python", "Flask", "LLaMA", "Unsloth", "NLP"],
            details: [
                "Integrated Meta API for live chat scraping",
                "Reduced training costs with Unsloth and LoRA adapters",
                "Implemented tone matching and conversation goal tracking"
            ],
            github: "#",
            demo: "#"
        },
        {
            title: "Minerva – AI Study App",
            description: "AI study assistant with Google Classroom integration and RAG pipeline.",
            technologies: ["Python", "React", "Flask", "OpenAI API", "LlamaIndex"],
            details: [
                "Built note processing and summarization system",
                "Created AI-driven quiz generator and study planner",
                "Implemented LMS sync for automatic content updates"
            ],
            github: "#",
            demo: "#"
        }
    ];

    // Publications data
    const publicationsData = [
        {
            title: "Know Where You're Uncertain When Planning with Multimodal Foundation Models: A Formal Framework",
            authors: "Bhatt, N. P., Yang, Y., Siva, R., Milan, D., Topcu, U., & Wang, Z.",
            conference: "MLSys 2025",
            links: {
                paper: "https://arxiv.org/abs/2411.01639",
                code: "https://github.com/uncertainty-in-planning/uncertainty-in-planning.github.io",
                openreview: "https://openreview.net/forum?id=HPHrIBlJYw"
            },
            abstract: "This paper presents a formal framework for understanding and quantifying uncertainty in multimodal foundation models for planning tasks."
        }
    ];

    // Render experience
    function renderExperience() {
        const experienceGrid = document.querySelector('.experience-grid') || document.querySelector('.experience-list');
        if (!experienceGrid) return;

        experienceData.forEach(exp => {
            const expElement = document.createElement('div');
            expElement.className = 'experience-card fade-in';
            expElement.innerHTML = `
                <div class="experience-header">
                    <div>
                        <h3 class="experience-title">${exp.title}</h3>
                        <p class="experience-company">${exp.company}</p>
                    </div>
                    <span class="experience-date">${exp.date}</span>
                </div>
                <ul class="experience-details">
                    ${exp.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            `;
            experienceGrid.appendChild(expElement);
        });
    }

    // Render projects
    function renderProjects() {
        const projectsGrid = document.querySelector('.projects-grid');
        if (!projectsGrid) return;

        projectsData.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'project-card fade-in';
            projectElement.innerHTML = `
                <div class="project-header">
                    <h3>${project.title}</h3>
                    <div class="project-links">
                        ${project.github ? `<a href="${project.github}" target="_blank" class="project-link"><i class="fab fa-github"></i> Code</a>` : ''}
                        ${project.demo ? `<a href="${project.demo}" target="_blank" class="project-link"><i class="fas fa-external-link-alt"></i> Demo</a>` : ''}
                    </div>
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <ul class="project-details">
                    ${project.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            `;
            projectsGrid.appendChild(projectElement);
        });
    }

    // Render publications
    function renderPublications() {
        const publicationsList = document.querySelector('.publications-list');
        if (!publicationsList) return;

        publicationsData.forEach(pub => {
            const pubElement = document.createElement('div');
            pubElement.className = 'publication-item fade-in';
            pubElement.innerHTML = `
                <h3>${pub.title}</h3>
                <p class="publication-authors">${pub.authors}</p>
                <p class="publication-conference">${pub.conference}</p>
                <p class="publication-abstract">${pub.abstract}</p>
                <div class="publication-links">
                    ${pub.links.paper ? `<a href="${pub.links.paper}" target="_blank" class="publication-link"><i class="fas fa-file-pdf"></i> Paper</a>` : ''}
                    ${pub.links.code ? `<a href="${pub.links.code}" target="_blank" class="publication-link"><i class="fab fa-github"></i> Code</a>` : ''}
                    ${pub.links.openreview ? `<a href="${pub.links.openreview}" target="_blank" class="publication-link"><i class="fas fa-book-open"></i> OpenReview</a>` : ''}
                </div>
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
        // Render all sections
        renderExperience();
        renderProjects();
        renderPublications();
        
        // Add smooth scrolling for anchor links
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
