import { Background, InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Harun',
    lastName:  'Geckaldi',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Front-end Developer ',
    avatar:    '/images/avatar.jpg',
    location:  'Europe/London',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Turkish']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
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
        link: 'https://kick.com/sunMaJesty',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:hello@denizco.de',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Front-end Developer</>,
    subline: <>I'm Harun, a fulfilment associate at <InlineCode>Amazon</InlineCode> and a front-end developer at <InlineCode>Metadata Solutions</InlineCode><br/>I like to play games and follow technology outside of work hours.</>
       
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com/bizimdeniz'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Harun is a Coventry-based Front-end Developer with a passion for transforming complex challenges into simple, elegant design solutions. Her work spans digital interfaces, interactive experiences, and the convergence of design and technology.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Amazon',
                timeframe: '2024 - Present',
                role: 'Fulfilment Associate',
                achievements: [
                    <>BHX4 at Amazon</>,
                    
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/amazon.jpg',
                        alt: 'Amazon',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Metadata Solutinos',
                timeframe: '2020 - Present',
                role: 'Support Associate',
                achievements: [
                    <>I help as a freelancer in design and coding works for Metadata Solutions company.</>
                    
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/metadatas.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Delta Hotels by Marriott',
                timeframe: '2022 - 03.2025',
                role: 'Receptionst',
                achievements: [
                    <>Night Supervisor</>,
                    
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/hotel.jpg',
                        alt: 'Hotel',
                        width: 16,
                        height: 9
                    }
                ]
            },

           
        ]
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
                        src: '/images/logo/html5.png',
                        alt: 'Project image',
                        width: 5,
                        height: 5
                    },
                    {
                        src: '/images/logo/css3.png',
                        alt: 'Project image',
                        width: 5,
                        height: 5
                    },
                    {
                        src: '/images/logo/vue.png',
                        alt: 'Project image',
                        width: 5,
                        height: 5
                    },
                    {
                        src: '/images/logo/node.png',
                        alt: 'Project image',
                        width: 5,
                        height: 5
                    },
                    {
                        src: '/images/logo/npm.png',
                        alt: 'Project image',
                        width: 5,
                        height: 5
                    },
                    {
                        src: '/images/logo/react.png',
                        alt: 'Project image',
                        width: 5,
                        height: 5
                        
                    },
                    {
                        src: '/images/logo/wordpress.png',
                        alt: 'Project image',
                        width: 5,
                        height: 5
                    },
                    
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };
