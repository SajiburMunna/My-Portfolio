import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <SimpleLayout
        title="That's Great! You are here."
        intro="I love sharing resources and information with others. Whether it's a helpful article, a useful tool, or a new idea, I believe that sharing knowledge can inspire and empower people to learn and grow. I'm passionate about connecting with others and helping them find the information they need to succeed."
      >
        <div className="space-y-20">
          <SpeakingSection title="Roadmap">
            <Appearance
              href="https://roadmap.sh/frontend"
              title="Frontend Roadmap 2023"
              description="Step by step guide to becoming a modern frontend developer in 2023"
              event="roadmap.sh"
              cta="Let's go!"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
