import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

import { Line, Logo, Row, Text } from "@once-ui-system/core";



const person: Person = {
  firstName: "Harun",
  lastName: "Geckaldi",
  name: "Harun Geckaldi",
  role: "Front-end Developer",
  avatar: '/images/avatar.jpg',
  location: 'Europe/London',
  languages: ['English', 'Turkish'],
  email: "hello@denizco.de"
};

const newsletter: Newsletter = {
  display: true,
    title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
    description: <>I occasionally write about web development, technology trends, and my experiences at the intersection of creativity and engineering.</>

};

const social: Social = [

{
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/bizimdeniz',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/harungeckaldi/',
    },
    {
        name: 'X',
        icon: 'x',
        link: 'https://x.com/bizimdeniz_',
    },
    {
        name: 'Kick',
        icon: 'kick',
        link: 'https://kick.com/bizimdeniz',
    },
    {
        name: 'Bio',
        icon: 'bio',
        link: 'https://bio.denizco.de',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:hello@denizco.de',
    },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Front-end Developer</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Glowy Joy</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          New project
        </Text>
      </Row>
    ),
    href: "https://glowyjoy.co.uk",
  },
  subline: (
    <>
      I&apos;m Harun, a fulfilment associate at {" "}
      <Logo
        dark
        icon="/trademarks/Amazon_logo.svg"
        style={{ display: "inline-flex", top: "0.45em", marginLeft: "0.25em"}}
      />
         and a front-end developer at {" "}
      <Logo
        dark
        icon="/trademarks/metadatasolutions.svg"
        style={{ display: "inline-flex", top: "0.45em", marginLeft: "0.25em", marginRight: "0.25em" }}
      />
      <br /> I like to play games and follow technology outside of work hours.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/bizimdeniz",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Harun is a Coventry-based Front-end Developer with a passion for transforming complex challenges into simple, 
        elegant design solutions. His work spans digital interfaces, interactive experiences, 
        and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
                company: 'GlowyJoy',
                timeframe: '2025 - Present',
                role: 'Co-founder',
                achievements: [
                    <>We sell a variety of beautiful jewellery products in the GlowyJoy Etsy store.<br />
                    <a href="https://www.etsy.com/shop/GlowyJoy" target="_blank" rel="noopener noreferrer"> 
                    Visit our Etsy shop
                    </a></>,
                    
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/cv/glow.png',
                        alt: 'GlowyJoy',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Amazon',
                timeframe: '2024 - Present',
                role: 'Fulfilment Associate',
                achievements: [
                    <>BHX4 at Amazon</>,
                    
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/cv/amazon.jpg',
                        alt: 'Amazon',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Metadata Solutions',
                timeframe: '2020 - Present',
                role: 'Support Associate',
                achievements: [
                    <>I help as a freelancer in design and coding works for Metadata Solutions company.<br />
                    <a href="https://www.metadatasolutions.co.uk" target="_blank" rel="noopener noreferrer"> 
                    Visit Metadata Solutions
                    </a>
                    </>
                    
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/cv/metadatas.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Delta Hotels by Marriott',
                timeframe: '2022 - 03.2025',
                role: 'Receptionist',
                achievements: [
                    <>Night Supervisor</>,
                    
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/cv/hotel.jpg',
                        alt: 'Hotel',
                        width: 16,
                        height: 9
                    }
                ]
            },
      
    ],
  },
   studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'University of Anadolu',
                description: <>Faculty of Business Administration.</>,
            },
            {
                name: 'University of Suleyman Demirel',
                description: <>Marketing and Advertising.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Technologies',
                description: <>Technologies in my use</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/cv/html5.png',
                        alt: 'Project image',
                        width: 5,
                        height: 5
                    },
                    {
                        src: '/images/cv/css3.png',
                        alt: 'Project image',
                        width: 5,
                        height: 5
                    },
                    {
                        src: '/images/cv/vue.png',
                        alt: 'Project image',
                        width: 5,
                        height: 5
                    },
                    {
                        src: '/images/cv/node.png',
                        alt: 'Project image',
                        width: 5,
                        height: 5
                    },
                    {
                        src: '/images/cv/npm.png',
                        alt: 'Project image',
                        width: 5,
                        height: 5
                    },
                    {
                        src: '/images/cv/react.png',
                        alt: 'Project image',
                        width: 5,
                        height: 5
                        
                    },
                    {
                        src: '/images/cv/wordpress.png',
                        alt: 'Project image',
                        width: 5,
                        height: 5
                    },
                    
                ]
            },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },  
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Coding, Design, Tech – My Ideas",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};


const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

// include quiz in the main export and remove the duplicate export below
export { person, social, newsletter, home, about, blog, work, gallery };
