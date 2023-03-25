import Jouelslabs from '@/images/logos/jouleslabs.png'
import logoVanilla from '@/images/logos/vanilla.svg'
import logoGolang from '@/images/logos/icons8-golang.svg'
import logoKubernetes from '@/images/logos/kubernetes.svg'
import logoCaptainhook from '@/images/logos/captainhook.svg'
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
    name: 'Vanilla OS',
    description:
      'Vanilla OS is an immutable and atomic Ubuntu Linux-based Point Release distribution, that receives updates at the right time, neither before nor after, without sacrificing security and functionality.',
    link: { href: 'https://vanillaos.org', label: 'vanillaos.org' },
    logo: logoVanilla,
  },
  {
    name: 'Captain Hook',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: {
      href: 'https://github.com/bketelsen/captainhook',
      label: 'github.com',
    },
    logo: logoCaptainhook,
  },
  {
    name: 'Kubernetes',
    description: 'Production-Grade Container Scheduling and Management',
    link: {
      href: 'https://github.com/kubernetes/kubernetes',
      label: 'github.com',
    },
    logo: logoKubernetes,
  },
  {
    name: 'Go',
    description: 'Build fast, reliable, and efficient software at scale',
    link: { href: 'https://go.dev', label: 'go.dev' },
    logo: logoGolang,
  },
]

export default siteMeta
