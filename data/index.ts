export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "I love exploring new features",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 0,
    title: "TopNotch City Real Estate Platform",
    des: "Developed a full-featured real estate web app with property listings, virtual tours, location-based search, and admin/agent dashboards.",
    img: "/topnotch.png",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://topnotchcity.com",
  },
  {
    id: 1,
    title: "Dinovate Solutions Web Platform",
    des: "Designed and built a responsive web application with engaging animations, admin dashboard, and dynamic content management.",
    img: "/dinovate.png",
    iconLists: ["/re.svg", "/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://dinovate.com",
  },
  {
    id: 2,
    title: "LifeSync App & Admin Dashboard",
    des: "Engineered the LifeSync app with Expo for real-time Bluetooth syncing, SOS alerts, and location tracking, plus an admin dashboard with GraphQL analytics.",
    img: "/lifesync.png",
    iconLists: ["/next.svg", "/dock.svg", "git.svg"],
    link: "https://lifesync.cc",
  },
  {
    id: 3,
    title: "MyNebor Technologies Admin Dashboard",
    des: "Developed an admin dashboard for gated community tools with React, including transaction tracking and subscription analytics.",
    img: "/mynebor.png",
    iconLists: ["/fm.svg", "/tail.svg", "/next.svg", "/dock.svg", "git.svg"],
    link: "https://mynebor.com",
  },
  {
    id: 4,
    title: "HOTR Port Harcourt Member System",
    des: "Built a church member scan system to monitor attendance, integrated real-time analytics, and created an admin dashboard for data management.",
    img: "/hotr.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://member.hotrportharcourt.com",
  },
  {
    id: 5,
    title: "Agcoms International",
    des: "Developed a corporate web application featuring modern designs, dynamic content updates, and a scalable backend.",
    img: "/agcoms.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://www.agcomsinternational.com",
  },
  {
    id: 7,
    title: "UNDP Africa Borderlands Data Portal",
    des: "Built a data-driven visualization platform for the UNDP Africa Borderlands Centre, enabling users to explore datasets across 106 regions with interactive charts and maps.",
    img: "/undp.png",
    iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://data.africaborderlands.com",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Humphrey on the LifeSync app was an absolute pleasure. He understood our needs and delivered a solution that has truly transformed how we support our users. His professionalism and dedication made all the difference.",
    name: "Franca Austin-opara",
    title: "CEO of LifeSync Health",
  },
  {
    quote:
      "Humphrey’s work on our platform was nothing short of amazing. He brought our vision to life with incredible attention to detail and a deep understanding of our goals. We're so grateful for his expertise and partnership.",
    name: "Temidayo Ibitoye",
    title: "CEO and Founder",
  },
  {
    quote:
      "Humphrey developed a system that has been a game changer for our church. It’s simple to use, highly effective, and perfectly tailored to our needs. His work has been a blessing to our community.",
    name: "Pastor Lanre Oluseye",
    title: "Head Pastor HOTR Port Harcourt",
  },
  {
    quote:
      "Humphrey’s contributions to Mynebor Technologies have been invaluable. The solutions he provided have streamlined our operations and improved how we serve our users.",
    name: "Akuma Isaac",
    title: "CEO of Mynebor Technologies",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer - Dinovate Solutions",
    desc: "Built a responsive web platform with Next.js, GSAP animations, and dynamic content management. Designed an intuitive admin dashboard with Prisma and PostgreSQL integration.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Developer - LifeSync Technologies",
    desc: "Engineered the LifeSync app with Expo, integrating real-time SOS alerts, Bluetooth smartwatch syncing, and admin dashboard features using GraphQL and Redis.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Frontend Developer - Mynebor Technologies",
    desc: "Developed a robust admin dashboard for managing transactions and subscriptions. Enhanced the mobile app UI with reusable, modern components for seamless user experience.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Full Stack Developer - HOTR Port Harcourt",
    desc: "Built a church member scan system for attendance monitoring, integrated analytics, and designed an admin dashboard for efficient member management.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/joshhumphrey02",
  },
  // {
  // 	id: 2,
  // 	img: '/twit.svg',
  // },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/joshhumphrey02/",
  },
];
