import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faMedium } from '@fortawesome/free-brands-svg-icons';

export interface ContactLink {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactLink[] = [
  {
    link: 'https://github.com/ShikharBhatt',
    label: 'GitHub',
    icon: faGithub,
  },
  {
    link: 'https://www.instagram.com/shikhar__bhatt/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/shikharbhatt',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://twitter.com/Shikhar__Bhatt',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'https://medium.com/@shikhar.bhatt',
    label: 'Medium',
    icon: faMedium,
  },
  {
    link: 'mailto:shikhar.bhatt011@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;

