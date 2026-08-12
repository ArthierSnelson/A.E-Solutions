export type Service = {
  slug: string
  code: string
  title: string
  short: string
  description: string
  deliverables: string[]
  idealFor: string[]
}

export const services: Service[] = [
  {
    slug: 'web',
    code: '01',
    title: 'Website Design & Development',
    short: 'High-standard digital front doors built to earn trust and drive action.',
    description: 'From lean commercial landing pages to substantial corporate sites, AE builds responsive websites around clarity, credibility and conversion — with the foundations needed to measure and improve performance.',
    deliverables: ['Strategy and sitemap', 'Responsive design', 'Front-end development', 'SEO foundations', 'Analytics setup', 'Deployment and maintenance'],
    idealFor: ['Businesses replacing an outdated site', 'New ventures that need a credible launch', 'Teams that need cleaner conversion paths']
  },
  {
    slug: 'apps',
    code: '02',
    title: 'App Development',
    short: 'Focused digital products, internal tools and client-facing applications.',
    description: 'AE turns operational problems and product ideas into usable software. The priority is practical scope, fast iteration and an interface people can actually use.',
    deliverables: ['Product scoping', 'UX and interface design', 'Web application development', 'Internal tools and portals', 'Testing and launch support', 'Iteration roadmap'],
    idealFor: ['Founders validating a product', 'Businesses replacing manual processes', 'Teams needing a bespoke internal tool']
  },
  {
    slug: 'automation',
    code: '03',
    title: 'Business Automation',
    short: 'Remove repetitive work and connect the systems that already run the business.',
    description: 'AE maps repetitive workflows, identifies the parts worth automating and connects software, data and practical AI where it produces a measurable operating advantage.',
    deliverables: ['Workflow mapping', 'System integrations', 'Task automation', 'AI-assisted operations', 'Notifications and routing', 'Monitoring and documentation'],
    idealFor: ['Teams losing time to repetitive admin', 'Businesses with disconnected systems', 'Operators scaling faster than headcount']
  },
  {
    slug: 'lead-generation',
    code: '04',
    title: 'Lead Generation',
    short: 'Repeatable prospecting and outreach infrastructure built for disciplined growth.',
    description: 'AE builds acquisition systems that turn target markets into organised prospecting, outreach and qualification workflows — with the process designed to be repeatable rather than dependent on one-off effort.',
    deliverables: ['ICP and market structure', 'Prospect sourcing workflows', 'Outreach infrastructure', 'Lead qualification', 'Pipeline organisation', 'Reporting and optimisation'],
    idealFor: ['B2B businesses building outbound', 'Sales teams needing better prospecting infrastructure', 'Operators entering new markets']
  },
  {
    slug: 'investments',
    code: '05',
    title: 'Investments & Ventures',
    short: 'Selective digital products and commercial opportunities where execution matters.',
    description: 'AE does not only build for clients. It also develops and selectively backs digital products and commercial opportunities where technical execution, operations and go-to-market can compound together.',
    deliverables: ['Opportunity evaluation', 'Product build support', 'Commercial systems', 'Operational involvement', 'Go-to-market support', 'Long-term iteration'],
    idealFor: ['Digital-first opportunities', 'Products where build and distribution reinforce each other', 'Selective partnerships with aligned operators']
  }
]

export const projectSlots = [
  { type: 'MEDIA / WEB', title: 'Selected work / project slot', copy: 'Reserved for a premium personal-brand or media website.' },
  { type: 'PRODUCT / APP', title: 'Selected work / project slot', copy: 'Reserved for an application or owned digital product.' },
  { type: 'GROWTH SYSTEM', title: 'Selected work / project slot', copy: 'Reserved for automation or lead-generation infrastructure.' },
  { type: 'VENTURE', title: 'Selected work / project slot', copy: 'Reserved for an AE-owned or backed venture.' }
]
