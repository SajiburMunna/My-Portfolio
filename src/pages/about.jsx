import Image from 'next/future/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/soj-head.jpeg'
import siteMeta from '@/data/siteMeta'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-yellow-500 dark:text-zinc-200 dark:hover:text-yellow-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-yellow-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Who is passionate about building software and learning new
              technologies ...
            </h1>
            <div className="prose mt-6 space-y-7 text-lg text-zinc-600 dark:prose-invert dark:text-zinc-400">
              <p>
                Howdy! Thanks for stopping here. I’m Sojib Hossen a frontend
                software engineer currently based in Dhaka, Bangladesh. I was
                born and raised in Magura, Bangladesh, where I developed a
                strong passion for programming from a young age. I completed my
                Bachelor of Science in Computer Science and Engineering from
                Bangladesh University of Business and Technology, one of the top
                universities in Bangladesh.
                <br /> As a frontend software engineer, I am passionate about
                creating intuitive and user-friendly web applications that
                provide a seamless user experience. I have over 1 year of
                experience in developing responsive and dynamic web applications
                that adhere to modern web standards and best practices. I am
                skilled in JavaScript,Typescript and React, and have experience
                working with various frameworks and libraries. In my current
                role as a frontend software engineer, I am responsible for
                collaborating with the design team to develop and implement new
                features for our company&apos;s web application. I ensure that
                the web pages are responsive, user-friendly, and adhere to
                modern web standards. I have experience conducting code reviews
                and providing constructive feedback to team members to improve
                code quality.
                <br /> Outside of work, I enjoy staying up to date with the
                latest web development trends and technologies. I also enjoy
                reading books, playing video games, and spending time with
                family and friends. I am excited to continue growing my skills
                as a frontend software engineer and am passionate about creating
                innovative solutions that make a difference. Thank you for
                taking the time to learn more about me, and I look forward to
                connecting with you soon.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href={siteMeta.author.twitter} icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>

              <SocialLink
                href={siteMeta.author.instagram}
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href={siteMeta.author.github}
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href={siteMeta.author.linkedin}
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href={`mailto:${siteMeta.author.email}`}
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                {siteMeta.author.email}
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
