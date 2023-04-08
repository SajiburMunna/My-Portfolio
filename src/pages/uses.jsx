import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <SimpleLayout title="Software I use, gadgets I love..." intro="">
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="14” HP-X360, 8GB RAM, 224GB SSD (2018)">
              I am using an Intel-based Linux OS 14” HP Laptop.The HP x360
              laptop is a versatile and powerful device that is designed for
              productivity and entertainment.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VS Code">
              VS Code is a powerful and versatile code editor that provides a
              range of features and tools to help developers write code
              efficiently and effectively. Its ease of use, customizability, and
              wide range of extensions make it a popular choice among developers
              of all levels of experience.
            </Tool>
            <Tool title="Replit (Online)">
              Replit is a powerful and versatile platform that provides a range
              of features and tools to help developers write, test, and deploy
              code efficiently and effectively.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
