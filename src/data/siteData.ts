export type PageLink = {
  id: string;
  label: string;
  href: string;
};

export type Service = {
  title: string;
  short: string;
  icon: string;
  bullets: string[];
  image: string;
};

export type ProcessStep = {
  title: string;
  text: string;
  image: string;
};

export type TechLogo = {
  name: string;
  image: string;
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

export type WorkItem = {
  title: string;
  category: string;
  text: string;
  image: string;
  tags: string[];
};

export const pages: PageLink[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'services', label: 'Services', href: '/services' },
  { id: 'team', label: 'Our Team', href: '/team' },
  { id: 'portfolio', label: 'Portfolio', href: '/portfolio' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

export const services: Service[] = [
  {
    title: 'Web Application',
    short: 'Custom business web applications built with clean UI and scalable code.',
    icon: '/assets/s1.png',
    image: '/assets/advanced/code-screen.jpg',
    bullets: ['React interfaces', 'Admin dashboards', 'Business workflow tools'],
  },
  {
    title: 'Mobile Application',
    short: 'Mobile-first products that help your business reach users anywhere.',
    icon: '/assets/s2.png',
    image: '/assets/advanced/laptop-product.jpg',
    bullets: ['Responsive app design', 'API-ready screens', 'User-friendly flows'],
  },
  {
    title: 'UI/UX Design',
    short: 'Clear, modern, and conversion-focused product design for web and mobile.',
    icon: '/assets/s3.png',
    image: '/assets/advanced/portfolio-template.jpg',
    bullets: ['Wireframes', 'Design systems', 'Interactive prototypes'],
  },
  {
    title: 'Dedicated Team',
    short: 'A flexible software team that works with your business goals and schedule.',
    icon: '/assets/advanced/team-icon.png',
    image: '/assets/advanced/office-team.jpg',
    bullets: ['Developers', 'Designers', 'Project support'],
  },
  {
    title: 'Support & Maintenance',
    short: 'Ongoing updates, fixes, optimization, and technical care after launch.',
    icon: '/assets/advanced/maintenance-icon.png',
    image: '/assets/advanced/workspace-laptop.jpg',
    bullets: ['Bug fixing', 'Performance support', 'Feature updates'],
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: 'Development Team',
    text: 'We assign a clear product owner, project support, developer, designer, QA, and UX role for smooth delivery.',
    image: '/assets/advanced/process-development-team.jpg',
  },
  {
    title: 'Agile Process',
    text: 'We plan, build, review, and improve in short cycles so the project keeps moving without confusion.',
    image: '/assets/advanced/process-agile.jpg',
  },
  {
    title: 'Working Software',
    text: 'We focus on shipping clean, usable, responsive software that is ready for real users.',
    image: '/assets/advanced/process-working-software.jpg',
  },
];

export const techLogos: TechLogo[] = [
  { name: 'PHP', image: '/assets/t1.png' },
  { name: 'Laravel', image: '/assets/t2.png' },
  { name: 'HTML5', image: '/assets/t3.png' },
  { name: 'AngularJS', image: '/assets/t4.png' },
  { name: 'Android', image: '/assets/t5.png' },
  { name: 'Node.js', image: '/assets/t6.png' },
  { name: 'WordPress', image: '/assets/t7.png' },
  { name: '.NET', image: '/assets/dotnet.png' },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Amirul Islam',
    role: 'Chief Executive Officer',
    image: '/assets/team-ceo.svg',
    bio: 'Leads company vision, client relationships, and long-term software strategy.',
  },
  {
    name: 'Nazmus Sadat',
    role: 'Team Lead',
    image: '/assets/team-lead.svg',
    bio: 'Guides sprint planning, delivery reviews, and daily team coordination.',
  },
  {
    name: 'Mainuddin Ahmed',
    role: 'HR Manager',
    image: '/assets/team-hr.svg',
    bio: 'Supports hiring, culture, communication, and people operations.',
  },
  {
    name: 'Oli Ullah',
    role: 'QC Head',
    image: '/assets/team-dev.svg',
    bio: 'Builds responsive React pages, reusable components, and polished interfaces.',
  },
  {
    name: 'Samiul Haque',
    role: 'UI/UX Designer',
    image: '/assets/team-designer.svg',
    bio: 'Creates user flows, clean layouts, visual systems, and product experiences.',
  },
  {
    name: 'Feroz Ahmed',
    role: 'SEO Strategist',
    image: '/assets/team-seo.svg',
    bio: 'Plans page structure, keywords, content sections, and search-friendly layouts.',
  },
];

export const workItems: WorkItem[] = [
  {
    title: 'Net Reputation Dashboard',
    category: 'Admin Dashboard',
    text: 'A clean operations dashboard with client cards, package timelines, task progress, and manager views.',
    image: '/assets/advanced/client-cards.png',
    tags: ['Dashboard', 'Client Management', 'Task Tracking'],
  },
  {
    title: 'Performance Overview',
    category: 'Analytics UI',
    text: 'A metrics-focused dashboard concept for tracking clients, teams, tasks, and performance insights.',
    image: '/assets/advanced/dashboard-overview.png',
    tags: ['Analytics', 'Reports', 'Operations'],
  },
  {
    title: 'Task Management Login',
    category: 'Product UI',
    text: 'A polished authentication screen with a premium dark interface and clear product identity.',
    image: '/assets/advanced/task-login.png',
    tags: ['Authentication', 'SaaS UI', 'Dark Theme'],
  },
  {
    title: 'Portfolio Presentation',
    category: 'Creative Layout',
    text: 'A visual portfolio concept that shows profile, contact, work, and social details in a single flow.',
    image: '/assets/advanced/portfolio-template.jpg',
    tags: ['Portfolio', 'Branding', 'Presentation'],
  },
  {
    title: 'Software Team Website',
    category: 'Company Website',
    text: 'A professional website layout for software companies that need services, team, process, and contact pages.',
    image: '/assets/our-work.png',
    tags: ['Next.js', 'Company Site', 'Landing Page'],
  },
];

export const whyChooseUs = [
  {
    title: 'Clean Strategy',
    text: 'We start with the business goal before writing code or designing screens.',
    icon: '/assets/advanced/seo-icon.png',
  },
  {
    title: 'Real Team Capacity',
    text: 'We combine planning, design, development, quality control, and support in one workflow.',
    icon: '/assets/advanced/team-icon.png',
  },
  {
    title: 'Scalable Delivery',
    text: 'We build with clean structure so your project can grow over time.',
    icon: '/assets/s2.png',
  },
  {
    title: 'Reliable Support',
    text: 'We help with updates, fixes, improvements, and long-term technical care.',
    icon: '/assets/advanced/support-icon.png',
  },
];

export const contactCards = [
  {
    title: 'Development Center',
    text: 'Tower 71, Flat # 9 A-B, 516/3 South Manikdi, Matikata Road, ECB Chattar, Dhaka Cantonment, Dhaka - 1206',
    icon: '/assets/advanced/location-pin.png',
  },
  {
    title: 'Project Support',
    text: 'info@aan-nahl.com | +88 01624555544',
    icon: '/assets/advanced/support-icon.png',
  },
];

export const faqs = [
  {
    question: 'Does this project use real Next.js routes?',
    answer: 'Yes. Each navbar item opens a real App Router page for Home, About, Services, Our Team, Portfolio, and Contact.',
  },
  {
    question: 'Can I replace the images?',
    answer: 'Yes. Replace images inside public/assets and keep the same file names, or update the image paths in the data file.',
  },
  {
    question: 'Can this website connect to a backend later?',
    answer: 'Yes. The contact form and service buttons are ready for API integration when you add a backend.',
  },
];
