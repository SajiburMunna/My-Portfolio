import Jouelslabs from '@/images/logos/jouleslabs.png'
import fundednext from '@/images/logos/fundednext.svg'
import reviewxpo from '@/images/logos/reviewxpo.svg'

const siteMeta = {
  title: 'Sojib Hossen',
  description:
    'SOJIB HOSSEN is a Software Engineer, who is passionate about building software and learning new technologies. He is currently working as a Software Engineer at Jouleslabs. He is also a Javascript enthusiast. He loves to write about his experiences and share his knowledge with other',
  copyright: 'Sojib Hossen, Dhaka-1207, Bangladesh',
  author: {
    name: 'Sojib Hossen',
    email: 'sajiburmunna087@gmail.com',
    twitter: 'https://twitter.com/SajiburM?t=P8nwNL7EPwbiBToRBcVFKQ&s=09',
    instagram: 'https://instagram.com/saji_b087?igshid=ZDdkNTZiNTM=',
    github: 'https://github.com/SajiburMunna',
    linkedin: 'https://www.linkedin.com/in/sojib-hossen-627233176',
  },
  siteUrl: 'https://sajiburmunna.dev',
}
export const resume = [
  {
    company: 'Jouleslabs',
    title: 'Software Engineer',
    logo: Jouelslabs,
    start: '2022',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear(),
    },
  },
]
export const projects = [
  {
    name: 'FundedNext',
    contribution: 'Contribution as a Frontend Developer at Jouleslabs',
    description:
      'FundedNext is a prop trading firm for skilled traders worldwide! Join our funded trader program and start making money right away',
    techonlogies: 'Next.js, Material UI, Restful API, Redux, Stripe, etc',
    link: { href: 'https://app.fundednext.com/', label: 'app.fundednext.com' },
    logo: fundednext,
  },
  {
    name: 'ReviewXpo',
    contribution: 'Contribution as a Frontend Developer at Jouleslabs',
    description:
      'ReviewXpo is a reviews app for Shopify that helps gather reviews and user-generated photos, and videos from customers.',
    techonlogies:
      'NextJs, Typescript, Tailwind CSS, RESTful API,Shopify, Liquid, React Query',
    link: {
      href: 'https://reviewxpo.com',
      label: 'reviewxpo.com',
    },
    logo: reviewxpo,
  },
]

export default siteMeta
