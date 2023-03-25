import Jouelslabs from '@/images/logos/jouleslabs.png'
import logoVanilla from '@/images/logos/vanilla.svg'
import logoGolang from '@/images/logos/icons8-golang.svg'
import logoKubernetes from '@/images/logos/kubernetes.svg'
import logoCaptainhook from '@/images/logos/captainhook.svg'
const siteMeta = {
  title: 'Brian Ketelsen',
  description:
    'Brian Ketelsen is a developer advocate, keynote speaker, author, and open source practitioner.',
  copyright: 'Brian Ketelsen, CC-BY-SA',
  author: {
    name: 'Brian Ketelsen',
    email: 'me@brian.dev',
    twitter: 'https://twitter.com/bketelsen',
    mastodon: 'https://tty0.social/@bketelsen',
    instagram: 'https://instagram.com/bketelsen',
    github: 'https://github.com.com/bketelsen',
    linkedin: 'https://linkedin.com/in/brianketelsen',
    twitch: 'https://twitch.tv/bketelsen',
    youtube: 'https://youtube.com/@bketelsen',
  },
  siteUrl: 'https://brian.dev',
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
