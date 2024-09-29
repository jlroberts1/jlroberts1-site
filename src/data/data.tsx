import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'James Roberts - Android Engineer',
  description: "Resume and more information about James Roberts",
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
  Testimonials: 'testimonials',
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
        I'm an Ohio based <strong className="text-stone-100">Android Engineer</strong>, currently working at <strong className="text-stone-100">Tinybeans</strong>, helping families turn their moments into memories.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me learning and experiementing with new <strong className="text-stone-100">platforms</strong> and <strong className="text-stone-100">languages</strong>, playing my <strong className="text-stone-100">guitar</strong>, or exploring my beautiful area via a <strong className="text-stone-100">hike</strong>, or <strong className="text-stone-100">motorcycle</strong>.
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
    {label: 'Age', text: '41', Icon: CalendarIcon},
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
      }
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
        name: 'HTML',
        level: 6,
      },
      {
        name: 'CSS',
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
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2023 - Present',
    location: 'Tinybeans',
    title: 'Engineering Manager, Mobile',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'August 2022 - July 2023',
    location: 'Tinybeans',
    title: 'Lead Android Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'May 2022 - August 2022',
    location: 'PagerDuty',
    title: 'CAP Android Developer',
    content: (
      <p>
      </p>
    ),
  },
  {
    date: 'January 2017 - May 2022',
    location: 'Babbling Brook',
    title: 'Android Engineer',
    content: (
      <p>
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
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
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https:/www.linkedin.com/in/jlroberts1'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://x.com/xoomdev'},
];
