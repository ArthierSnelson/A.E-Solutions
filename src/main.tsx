import React, { FormEvent, useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { services, projectSlots } from './data'
import './styles.css'

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

function SmartLink({ href, children, ...props }: LinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      const hash = href.slice(href.indexOf('#'))
      window.history.pushState({}, '', href)
      window.dispatchEvent(new PopStateEvent('popstate'))
      window.setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 0)
      return
    }
    if (href.startsWith('/')) {
      e.preventDefault()
      window.history.pushState({}, '', href)
      window.dispatchEvent(new PopStateEvent('popstate'))
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
  return <a href={href} onClick={handleClick} {...props}>{children}</a>
}

function Mark() {
  return (
    <SmartLink href="/" className="brand" aria-label="AE Solutions home">
      <span className="monogram" aria-hidden="true"><b>A</b><i>E</i></span>
      <span className="brand-copy"><strong>AE</strong><span>SOLUTIONS</span></span>
    </SmartLink>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('popstate', close)
    return () => window.removeEventListener('popstate', close)
  }, [])
  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <Mark />
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
          <span></span><span></span>
        </button>
        <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          <SmartLink href="/#services">Services</SmartLink>
          <SmartLink href="/#work">Work</SmartLink>
          <SmartLink href="/ventures">Ventures</SmartLink>
          <SmartLink href="/about">About</SmartLink>
          <SmartLink href="/contact">Contact</SmartLink>
          <SmartLink href="/contact" className="nav-cta">Start a project <Arrow /></SmartLink>
        </nav>
      </div>
    </header>
  )
}

function Arrow() { return <span aria-hidden="true">↗</span> }

function PageFrame({ children }: { children: React.ReactNode }) {
  return <><Header />{children}<Footer /></>
}

function HeroGraphic() {
  return (
    <div className="system-graphic" aria-hidden="true">
      <div className="orbital one"></div><div className="orbital two"></div><div className="orbital three"></div>
      <div className="system-core"><span>AE</span></div>
      {['WEB','APP','OPS','LEADS','VENTURE'].map((x, i) => <div key={x} className={`node n${i+1}`}><b>{String(i+1).padStart(2,'0')}</b>{x}</div>)}
      <div className="scanline"></div>
    </div>
  )
}

function Home() {
  useSeo('AE Solutions — Build. Automate. Grow.', 'AE Solutions builds websites, applications, automation, lead-generation systems and digital ventures around commercial outcomes.')
  return (
    <PageFrame>
      <main>
        <section className="hero">
          <div className="hero-grid shell">
            <div className="hero-copy reveal">
              <div className="eyebrow"><span></span>DIGITAL <i>•</i> OPERATIONS <i>•</i> GROWTH <i>•</i> CAPITAL</div>
              <h1>BUILD.<br /><em>AUTOMATE.</em><br />GROW.</h1>
              <p>Websites, applications, automation, lead generation and strategic investment — built around commercial outcomes.</p>
              <div className="hero-actions">
                <SmartLink href="/contact" className="button primary">Start a project <Arrow /></SmartLink>
                <a href="#services" className="button text">Explore capabilities <span>↓</span></a>
              </div>
            </div>
            <HeroGraphic />
          </div>
          <div className="hero-foot shell">
            <span className="hero-index">AE / 001</span>
            <p>AE Solutions builds the systems behind growing businesses.</p>
            <span className="scroll-note">SCROLL TO EXPLORE</span>
          </div>
        </section>

        <section className="manifesto section-dark">
          <div className="shell two-col-intro">
            <p className="section-kicker">AE SOLUTIONS / CAPABILITIES</p>
            <h2>Five capabilities.<br /><span>One commercial objective.</span></h2>
          </div>
        </section>

        <section className="services-section section-dark" id="services">
          <div className="shell service-list">
            {services.map(service => (
              <SmartLink href={service.slug === 'investments' ? '/ventures' : `/services/${service.slug}`} className="service-row" key={service.slug}>
                <span className="service-code">{service.code}</span>
                <h3>{service.title}</h3>
                <p>{service.short}</p>
                <span className="service-arrow"><Arrow /></span>
              </SmartLink>
            ))}
          </div>
        </section>

        <section className="operating-model">
          <div className="shell operating-grid">
            <div className="sticky-copy">
              <p className="section-kicker dark">HOW AE WORKS</p>
              <h2>Execution before theatre.</h2>
              <p>AE can deliver a defined project or build an ongoing operating relationship where the commercial case supports it.</p>
              <SmartLink href="/contact" className="inline-link">Discuss a problem <Arrow /></SmartLink>
            </div>
            <div className="steps">
              {[
                ['01','Diagnose the commercial problem','Start with the constraint, bottleneck or opportunity — not a predetermined piece of technology.'],
                ['02','Build the right system','Design the smallest robust system capable of producing the intended result.'],
                ['03','Launch and measure','Put the work into the real operating environment and track what changes.'],
                ['04','Improve, automate and scale','Remove friction, strengthen what works and automate the repeatable parts.']
              ].map(([n,t,c]) => <article className="step" key={n}><span>{n}</span><div><h3>{t}</h3><p>{c}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="work-section section-dark" id="work">
          <div className="shell section-heading-row">
            <div><p className="section-kicker">SELECTED WORK</p><h2>Built to be useful.<br />Built to perform.</h2></div>
            <p className="muted-note">Real projects will replace these slots as the public portfolio is assembled.</p>
          </div>
          <div className="shell work-grid">
            {projectSlots.map((project, i) => <article className="project-card" key={i}>
              <div className={`project-visual pv${i+1}`}><span>{String(i+1).padStart(2,'0')}</span><div className="project-lines"></div></div>
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.copy}</p>
            </article>)}
          </div>
        </section>

        <section className="venture-banner">
          <div className="shell venture-grid">
            <div><p className="section-kicker dark">VENTURES / INVESTMENTS</p><h2>We do not only build for clients.</h2></div>
            <div><p>AE also develops and selectively invests in digital products and commercial opportunities where build capability, operations and distribution can compound together.</p><SmartLink href="/ventures" className="button dark-outline">Explore ventures <Arrow /></SmartLink></div>
          </div>
        </section>

        <section className="about-strip section-dark">
          <div className="shell about-grid">
            <p className="section-kicker">BUILT AROUND EXECUTION</p>
            <blockquote>“Useful technology is technology that earns its place in the business.”</blockquote>
            <p>AE Solutions combines technical build capability with sales, operations and commercial judgement. The objective is simple: solve the right problem and make the result useful in the real world.</p>
          </div>
        </section>

        <section className="audience-section">
          <div className="shell">
            <div className="section-heading-row light"><div><p className="section-kicker dark">WHO WE WORK WITH</p><h2>Different starting points.<br />The same standard.</h2></div></div>
            <div className="audience-grid">
              {[
                ['01','Established businesses','Better digital systems, stronger customer journeys and less operational friction.'],
                ['02','Founders','Products built, tested and commercialised with practical scope.'],
                ['03','Growth teams','Repeatable lead-generation and automation infrastructure that can scale.']
              ].map(([n,t,c]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}
            </div>
          </div>
        </section>

        <CTA />
      </main>
    </PageFrame>
  )
}

function CTA() {
  return <section className="cta-section"><div className="shell cta-grid"><p className="section-kicker">START A CONVERSATION</p><h2>Have a commercial problem worth solving?</h2><SmartLink href="/contact" className="button light">Start a project <Arrow /></SmartLink></div></section>
}

function ServicePage({ slug }: { slug: string }) {
  const service = services.find(s => s.slug === slug)
  useSeo(service ? `${service.title} — AE Solutions` : 'Page Not Found — AE Solutions', service?.description ?? 'The requested page could not be found.')
  if (!service) return <NotFound />
  return <PageFrame><main className="inner-page">
    <section className="inner-hero section-dark"><div className="shell"><p className="section-kicker">SERVICE / {service.code}</p><h1>{service.title}</h1><p className="lede">{service.description}</p><SmartLink href="/contact" className="button primary">Start a project <Arrow /></SmartLink></div></section>
    <section className="detail-section"><div className="shell detail-grid"><div><p className="section-kicker dark">WHAT WE CAN DELIVER</p><h2>Practical scope.<br />Clear output.</h2></div><div className="bullet-list">{service.deliverables.map((d,i)=><div key={d}><span>{String(i+1).padStart(2,'0')}</span><p>{d}</p></div>)}</div></div></section>
    <section className="section-dark detail-section"><div className="shell detail-grid"><div><p className="section-kicker">GOOD FIT WHEN</p><h2>You know the outcome.<br /><span className="subtle">The route needs work.</span></h2></div><div className="fit-list">{service.idealFor.map(x=><div key={x}><span>↳</span><p>{x}</p></div>)}</div></div></section>
    <section className="process-mini"><div className="shell"><p className="section-kicker dark">PROCESS</p><div className="mini-grid">{['Scope the problem','Define the system','Build and launch','Measure and improve'].map((x,i)=><article key={x}><span>0{i+1}</span><h3>{x}</h3></article>)}</div></div></section>
    <CTA />
  </main></PageFrame>
}

function Ventures() {
  const venture = services.find(s => s.slug === 'investments')!
  useSeo('Ventures & Investments — AE Solutions', venture.description)
  return <PageFrame><main className="inner-page"><section className="inner-hero section-dark"><div className="shell"><p className="section-kicker">AE / VENTURES</p><h1>Build capability.<br /><span>Commercial conviction.</span></h1><p className="lede">{venture.description}</p></div></section>
    <section className="detail-section"><div className="shell section-heading-row light"><div><p className="section-kicker dark">PORTFOLIO</p><h2>Owned and backed<br />opportunities.</h2></div><p className="muted-note dark-text">Public venture details will be added here as individual products are ready to be announced.</p></div><div className="shell venture-cards">{[1,2,3].map(i=><article key={i}><span>VENTURE / 0{i}</span><div className="venture-placeholder">AE</div><h3>Venture slot</h3><p>Reserved for a verified AE product, investment or strategic partnership.</p></article>)}</div></section>
    <section className="section-dark detail-section"><div className="shell detail-grid"><div><p className="section-kicker">APPROACH</p><h2>Execution is part of the investment case.</h2></div><div className="prose"><p>AE is best suited to opportunities where building, distribution, operations or automation can materially improve the outcome. That keeps the investment activity close to the capabilities the company can actually influence.</p><p>No inflated claims. No passive logo collection. The focus is on opportunities where practical involvement makes sense.</p></div></div></section><CTA /></main></PageFrame>
}

function About() {
  useSeo('About — AE Solutions', 'AE Solutions combines technical build capability with sales, operations and commercial judgement.')
  return <PageFrame><main className="inner-page"><section className="inner-hero section-dark"><div className="shell"><p className="section-kicker">ABOUT AE</p><h1>Built around<br /><span>execution.</span></h1><p className="lede">AE Solutions exists to combine technical build capability with sales, operations and commercial judgement — and use that combination to solve commercially meaningful problems.</p></div></section>
    <section className="detail-section"><div className="shell detail-grid"><div><p className="section-kicker dark">THE PRINCIPLE</p><h2>Technology should earn its place.</h2></div><div className="prose dark-text"><p>A website should create confidence and action. An application should make a task meaningfully better. Automation should remove genuine friction. Lead generation should create a repeatable path to conversations.</p><p>That is the standard AE is designed around: useful systems, commercial discipline and continual improvement.</p></div></div></section><CTA /></main></PageFrame>
}

function Contact() {
  const [sent, setSent] = useState(false)
  useSeo('Start a Project — AE Solutions', 'Tell AE Solutions what you need across websites, apps, automation, lead generation or ventures.')
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true) }
  return <PageFrame><main className="contact-page section-dark"><div className="shell contact-grid"><div className="contact-copy"><p className="section-kicker">START A PROJECT</p><h1>Tell us what needs solving.</h1><p>Give us the problem, the commercial context and what a useful outcome would look like. We can work out the route from there.</p><div className="contact-meta"><span>AE / ENQUIRIES</span><span>Website • Apps • Automation • Leads • Ventures</span></div></div>
    <form className="contact-form" onSubmit={submit}>{sent ? <div className="success-state"><span>✓</span><h2>Enquiry captured.</h2><p>This first version is running in demo mode, so nothing has been transmitted yet. The form is ready to be connected to the final email or CRM endpoint.</p><button type="button" onClick={()=>setSent(false)} className="button primary">Send another</button></div> : <>
      <Field label="Name"><input required name="name" autoComplete="name" /></Field>
      <Field label="Company"><input name="company" autoComplete="organization" /></Field>
      <Field label="Email"><input required type="email" name="email" autoComplete="email" /></Field>
      <Field label="What do you need?"><select required name="need" defaultValue=""><option value="" disabled>Select one</option><option>Website</option><option>App</option><option>Automation</option><option>Lead Generation</option><option>Investment</option><option>Other</option></select></Field>
      <Field label="Budget range"><select name="budget" defaultValue=""><option value="">Not sure yet</option><option>Under £1,000</option><option>£1,000 – £3,000</option><option>£3,000 – £10,000</option><option>£10,000 – £25,000</option><option>£25,000+</option></select></Field>
      <Field label="Project description"><textarea required rows={5} name="description" /></Field>
      <button className="button primary submit-button" type="submit">Send enquiry <Arrow /></button><p className="form-note">Demo submission only — no data leaves this page yet.</p>
    </>}</form></div></main></PageFrame>
}

function Field({label, children}: {label:string, children:React.ReactNode}) { return <label className="field"><span>{label}</span>{children}</label> }

function NotFound() {
  useSeo('Page Not Found — AE Solutions', 'The requested page could not be found.')
  return <PageFrame><main className="not-found section-dark"><div className="shell"><span className="huge-code">404</span><p className="section-kicker">PAGE NOT FOUND</p><h1>Wrong route.<br />Useful destination.</h1><SmartLink href="/" className="button primary">Return home <Arrow /></SmartLink></div></main></PageFrame>
}

function Footer() {
  return <footer className="footer"><div className="shell footer-top"><Mark /><div className="footer-links"><div><span>SERVICES</span><SmartLink href="/services/web">Web</SmartLink><SmartLink href="/services/apps">Apps</SmartLink><SmartLink href="/services/automation">Automation</SmartLink><SmartLink href="/services/lead-generation">Lead Generation</SmartLink></div><div><span>COMPANY</span><SmartLink href="/ventures">Ventures</SmartLink><SmartLink href="/about">About</SmartLink><SmartLink href="/contact">Contact</SmartLink></div><div><span>EXTERNAL</span><a href="#" onClick={e=>e.preventDefault()}>LinkedIn ↗</a><a href="#" onClick={e=>e.preventDefault()}>Privacy</a></div></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} AE SOLUTIONS</span><span>BUILD / AUTOMATE / GROW</span></div></footer>
}

function useSeo(title:string, description:string) {
  useEffect(() => {
    document.title = title
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name','description'); document.head.appendChild(meta) }
    meta.setAttribute('content', description)
  }, [title, description])
}

function App() {
  const [path, setPath] = useState(window.location.pathname)
  useEffect(() => {
    const update = () => setPath(window.location.pathname)
    window.addEventListener('popstate', update)
    return () => window.removeEventListener('popstate', update)
  }, [])
  const page = useMemo(() => {
    if (path === '/') return <Home />
    if (path === '/ventures') return <Ventures />
    if (path === '/about') return <About />
    if (path === '/contact') return <Contact />
    if (path.startsWith('/services/')) return <ServicePage slug={path.split('/').filter(Boolean)[1]} />
    return <NotFound />
  }, [path])
  return page
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>)
