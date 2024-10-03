import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import blogScreenshot from '../images/blog.webp';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import blogImage from '../images/testimonial.webp';
import {
  About,
  BlogSection,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'James Roberts - Android Engineer',
  description: 'Resume and more information about James Roberts',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Blog: 'blog',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi! I'm James Roberts.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm an Ohio based <strong className="text-stone-100">Android Engineer</strong>, currently working at{' '}
        <strong className="text-stone-100">Tinybeans</strong>, helping families turn their moments into memories.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me learning and experiementing with new{' '}
        <strong className="text-stone-100">platforms</strong> and <strong className="text-stone-100">languages</strong>,
        playing my <strong className="text-stone-100">guitar</strong>, or exploring my beautiful area via a{' '}
        <strong className="text-stone-100">hike</strong>, or <strong className="text-stone-100">motorcycle</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am an Android Engineer that is passionate about technology, learning, and creating experiences. I am a Kotlin and Jetpack Compose lover. I have experience working with all of the latest Jetpack libraries such as Compose, Room, Media, WorkManager, and Material Design. I also have extensive experience in RxJava and Kotlin Coroutines / Flow, as well as Fragments and the View system. I am a big proponent of clean, sensible code, MVVM, and SOLID principles. While I'm always striving to learn how to be a better Android Engineer, currently I am also learning Go as well as some JS and React! If you want to know more, read on or contact me!`,
  aboutItems: [
    {label: 'Location', text: 'Stoutsville, Ohio', Icon: MapIcon},
    {label: 'Nationality', text: 'Korean / Native American / Caucasion', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Guitar, Hiking', Icon: SparklesIcon},
    {label: 'Study', text: 'Udacity Kotlin Android Developer Nanodegree', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Tinybeans', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Development',
    skills: [
      {
        name: 'Mobile',
        level: 10,
      },
      {
        name: 'Backend',
        level: 4,
      },
      {
        name: 'Web Frontend',
        level: 5,
      },
      {
        name: 'CI / CD / CLI',
        level: 7,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 5,
      },
      {
        name: 'Typescript',
        level: 5,
      },
      {
        name: 'HTML/CSS',
        level: 6,
      },
      {
        name: 'Tailwind',
        level: 5,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Golang',
        level: 7,
      },
      {
        name: 'Java',
        level: 7,
      },
      {
        name: 'Rust',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'Android Native',
        level: 10,
      },
      {
        name: 'iOS Native (Swift/Obj C)',
        level: 6,
      },
      {
        name: 'KMP / CMP',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'July 2021',
    location: 'Udacity',
    title: 'Android Kotlin Developer Nanodegree',
    content: (
      <p>
        Comprehensive Nanodegree focused on Android development. Projects, courses, and practice covering custom views,
        lifecycles, architecure, persistence, networking, animations, testing, and much more. Real feedback during code
        reviews from facilitators.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2023 - Present',
    location: 'Tinybeans',
    title: 'Engineering Manager, Mobile',
    content: (
      <ul>
        <li>
          &#8226; Lead the mobile engineering team, delivering high-quality apps with measurable performance
          improvements.
        </li>
        <li>
          &#8226; Oversee project timelines and milestones, ensuring timely and efficient delivery of mobile solutions.
        </li>
        <li>&#8226; Mentor and supportteammembers,fostering a collaborative and innovative work environment.</li>
        <li>
          &#8226; Implement best practices in mobile development, achieving significant increases in user engagement.
        </li>
        <li>
          &#8226; Improved project test coverages from 0 to 45% and implemented the use of feature flags to increase the
          quality and stability of releases.
        </li>
        <li>
          &#8226; Created a standard for observability and traceability throughout the mobile projects to understand how
          our apps are performing.
        </li>
      </ul>
    ),
  },
  {
    date: 'August 2022 - July 2023',
    location: 'Tinybeans',
    title: 'Lead Android Engineer',
    content: (
      <ul>
        <li>&#8226; Lead Android team to deliver high-quality apps, increasing user engagement by 27%</li>
        <li>&#8226; Developed a new rewritten Android app, boosting Play Store rating from 2.2 to over 4 stars</li>
        <li>&#8226; Optimized app performance and enhanced UI/UX for improved user experience</li>
        <li>&#8226; Collaborated with cross-functional teams for seamless app updates</li>
        <li>&#8226; Analyzed user feedback to implement improvements, significantly increasing user satisfaction</li>
        <li>&#8226; Hired, onboarded, and mentored new engineers on the team</li>
      </ul>
    ),
  },
  {
    date: 'May 2022 - August 2022',
    location: 'PagerDuty',
    title: 'CAP Android Developer',
    content: (
      <ul>
        <li>&#8226; Developed and maintained Android apps, enhancing user experience and performance</li>
        <li>&#8226; Collaborated with teams to deliver new features, improving app functionality</li>
        <li>&#8226; Conducted code reviews to ensure a high-quality maintainable codebase.</li>
        <li>&#8226; Resolved issues to reduce app crashes and improve stability</li>
        <li>&#8226; Implemented automated testing, increasing code coverage and reliability</li>
      </ul>
    ),
  },
  {
    date: 'January 2017 - May 2022',
    location: 'Babbling Brook',
    title: 'Android Engineer',
    content: (
      <ul>
        <li>
          &#8226; Developed cutting-edge Android applications, integrating new technologies to enhance the user
          experience and app functionality
        </li>
        <li>
          &#8226; Optimized app performance, reducing load times and improving user retention rates through data-driven
          enhancements
        </li>
        <li>
          &#8226; Conducted thorough code reviews and implemented best practices, significantly reducing bug rates in
          production releases.
        </li>
        <li>
          &#8226; Pioneered adoptions of new Android frameworks, positioning the company at the forefront of mobile
          development trends
        </li>
      </ul>
    ),
  },
];

/**
 * Blog section
 */
export const blog: BlogSection = {
  imageSrc: blogImage,
  blogs: [
    {
      name: 'Fragmented Thoughts',
      href: 'https://fragmentedthoughts.jlroberts.me',
      screenshot: blogScreenshot,
      description: 'Random thoughts throughout development and life.',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'If you would like to reach out you can find me at any of the following places.',
  items: [
    {
      type: ContactType.Email,
      text: 'james.lee.roberts1@gmail.com',
      href: 'mailto:james.lee.roberts1@gmail.com',
    },
    {
      type: ContactType.Twitter,
      text: '@xoomdev',
      href: 'https://x.com/xoomdev',
    },
    {
      type: ContactType.LinkedIn,
      text: 'in/jlroberts1',
      href: 'https://www.linkedin.com/in/jlroberts1',
    },
    {
      type: ContactType.Github,
      text: 'jlroberts1',
      href: 'https://github.com/jlroberts1',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/jlroberts1'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/jlroberts1'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://x.com/xoomdev'},
];
