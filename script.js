document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        { title: 'E-commerce Transformation', description: 'Improved online customer experience for a retail giant using modern technologies.' },
        { title: 'CRM Implementation', description: 'Seamlessly integrated a CRM solution for better customer engagement and insights.' },
        { title: 'Compliance Risk Management', description: 'Developed a compliance framework to ensure smooth operations for a multinational company.' },
        { title: 'Data Visualization Dashboard', description: 'Designed and implemented a dashboard for tracking KPIs, leading to data-driven decision-making.' },
        { title: 'Market Segmentation Analysis', description: 'Performed segmentation analysis to identify new customer demographics for targeted campaigns.' },
        { title: 'Process Optimization', description: 'Streamlined internal processes, resulting in a 20% reduction in operational costs.' },
        { title: 'Customer Journey Mapping', description: 'Mapped and improved the end-to-end customer journey to enhance satisfaction and retention.' },
        { title: 'Regulatory Compliance Audit', description: 'Conducted a compliance audit to ensure adherence to financial regulations across departments.' },
        { title: 'Product Lifecycle Analysis', description: 'Analyzed product performance through lifecycle stages to identify areas for improvement and innovation.' }
    ];

    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) {
        console.error('Error: .projects-grid element not found in the DOM.');
        return;
    }

    projects.forEach(project => {
        const projectBlock = document.createElement('div');
        projectBlock.className = 'project';

        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;

        projectBlock.appendChild(projectTitle);
        projectBlock.appendChild(projectDescription);

        projectsGrid.appendChild(projectBlock);
    });

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth',
                });
            } else {
                console.warn(`Warning: Section with ID "${targetId}" not found.`);
            }
        });
    });
});
