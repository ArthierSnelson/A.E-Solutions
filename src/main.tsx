import React, { FormEvent, useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type Holding = {
  code: string
  name: string
  category: string
  description: string
  status: string
  mark: string
}

const holdings: Holding[] = [
  {
    code: '01',
    name: 'Camelot',
    category: 'Digital systems & growth',
    description: 'The operating company for websites, digital systems, automation and commercial growth services.',
    status: 'Developing',
    mark: 'C',
  },
  {
    code: '02',
    name: 'Lumi Project',
    category: 'Consumer technology',
    description: 'A growing collection of playful digital products and interactive consumer experiences.',
    status: 'In development',
    mark: 'L',
  },
  {
    code: '03',
    name: 'Tephtie',
    category: 'Apparel & lifestyle',
    description: 'An independent clothing and lifestyle brand being developed within the AE group.',
    status: 'In development',
    mark: 'T',
  },
  {
    code: '04',
    name: 'Publishing',
    category: 'Books, media & intellectual property',
    description: 'A publishing company for books and original intellectual property. Brand identity still to be named.',
    status: 'Planned',
    mark: 'P',
  },
]

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

function Arrow() { return <span aria-hidden="true">↗</span> }

function Mark() {
  return (
    <SmartLink href="/" className="brand" aria-label="AE Solutions home">
      <span className="ae-mark" aria-hidden="true">AE</span>
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
          <SmartLink href="/#companies">Companies</SmartLink>
          <SmartLink href="/ventures">Ventures</SmartLink>
          <SmartLink href="/#principles">Principles</SmartLink>
          <SmartLink href="/about">About</SmartLink>
          <SmartLink href="/contact">Contact</SmartLink>
          <SmartLink href="/contact" className="nav-cta">Get in touch <Arrow /></SmartLink>
        </nav>
      </div>
    </header>
  )
}

function PageFrame({ children }: { children: React.ReactNode }) {
  return <><Header />{children}<Footer /></>
}

function MountainArt() {
  return (
    <div className="mountain-art" aria-hidden="true">
      <div className="mist mist-one"></div>
      <div className="mist mist-two"></div>
      <div className="ridge ridge-back"></div>
      <div className="ridge ridge-mid"></div>
      <div className="ridge ridge-front"></div>
      <div className="summit-person"><span></span></div>
    </div>
  )
}

function Home() {
  useSeo(
    'AE Solutions — We build, own and grow companies.',
    'AE Solutions is a growing parent company for independent businesses, digital products, brands and intellectual property.'
  )
  return (
    <PageFrame>
      <main>
        <section className="hero holding-hero">
          <MountainArt />
          <div className="hero-shade"></div>
          <div className="shell holding-hero-inner">
            <div className="holding-copy">
              <p className="eyebrow">AE SOLUTIONS / GROUP</p>
              <h1><span>AE SOLUTIONS</span><br />We build, own<br />and grow companies.</h1>
              <p className="hero-lede">A growing group of independent businesses and products, built with a long-term view.</p>
              <div className="hero-actions">
                <a href="#companies" className="button silver">Explore the group <span>↓</span></a>
                <SmartLink href="/about" className="button ghost">About AE <Arrow /></SmartLink>
              </div>
            </div>
          </div>
          <div className="shell hero-foot">
            <span>AE / 001</span>
            <p>BUILD • OWN • DEVELOP • COMPOUND</p>
            <span className="motto-mini">FORTUNA FAVET FORTIBUS</span>
          </div>
        </section>

        <section className="intro-panel" id="companies">
          <div className="shell intro-grid">
            <p className="section-kicker dark">THE GROUP</p>
            <div>
              <h2>Small by design today.<br /><span>Built for the long term.</span></h2>
              <p>AE Solutions provides the parent structure for a developing portfolio of companies, products and intellectual property. Each business has its own purpose. AE provides ownership, direction and a shared long-term standard.</p>
            </div>
          </div>
        </section>

        <section className="holdings-section section-dark">
          <div className="shell holdings-list">
            {holdings.map((holding) => (
              <article className="holding-row" key={holding.code}>
                <span className="holding-code">{holding.code}</span>
                <div className="holding-mark" aria-hidden="true">{holding.mark}</div>
                <div className="holding-main">
                  <p>{holding.category}</p>
                  <h3>{holding.name}</h3>
                </div>
                <p className="holding-description">{holding.description}</p>
                <span className="holding-status">{holding.status}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="group-model" id="principles">
          <div className="shell group-model-grid">
            <div className="sticky-copy">
              <p className="section-kicker dark">HOW AE THINKS</p>
              <h2>Separate brands.<br />Shared standards.</h2>
              <p>AE is not intended to flatten every idea into one brand. The point is the opposite: give each company room to become excellent at one thing while retaining disciplined ownership above it.</p>
            </div>
            <div className="principles-list">
              {[
                ['01', 'Build before boasting', 'The portfolio should become impressive because the companies become useful — not because the parent site says they are.'],
                ['02', 'Let each company specialise', 'Camelot sells digital services. Lumi builds consumer products. Tephtie develops apparel. AE owns the structure, not every customer relationship.'],
                ['03', 'Keep ownership patient', 'Projects are developed with a long-term view instead of forcing every idea to monetise in the same way or on the same timetable.'],
                ['04', 'Compound what works', 'Shared knowledge, systems, distribution and capital can move between companies when it genuinely improves the outcome.'],
              ].map(([n, title, copy]) => (
                <article className="principle" key={n}><span>{n}</span><div><h3>{title}</h3><p>{copy}</p></div></article>
              ))}
            </div>
          </div>
        </section>

        <section className="venture-statement section-dark">
          <div className="shell venture-statement-grid">
            <p className="section-kicker">AE / VENTURES</p>
            <h2>New businesses belong here when the idea deserves its own identity.</h2>
            <p>Future companies may be built internally, formed with partners or selectively acquired. There is no requirement to fill the portfolio quickly. Quality and fit matter more than the number of logos.</p>
            <SmartLink href="/ventures" className="inline-link light-link">View the venture approach <Arrow /></SmartLink>
          </div>
        </section>

        <section className="motto-section">
          <div className="shell motto-grid">
            <div className="motto-rule"></div>
            <p className="latin">FORTUNA FAVET FORTIBUS</p>
            <h2>Fortune favours the brave.</h2>
            <p>Not recklessness. The willingness to build, commit and take calculated risks when the opportunity warrants it.</p>
          </div>
        </section>

        <CTA />
      </main>
    </PageFrame>
  )
}

function Ventures() {
  useSeo('Ventures — AE Solutions', 'How AE Solutions approaches new businesses, products, partnerships and long-term ownership.')
  return (
    <PageFrame><main className="inner-page">
      <section className="inner-hero section-dark"><div className="shell">
        <p className="section-kicker">AE / VENTURES</p>
        <h1>Build carefully.<br /><span>Own patiently.</span></h1>
        <p className="lede">AE is the home for companies and products we believe are worth building over time. The current group is early-stage; the objective is to make each holding stronger before making the group larger.</p>
      </div></section>
      <section className="portfolio-page"><div className="shell">
        <div className="section-heading-row light"><div><p className="section-kicker dark">CURRENT HOLDINGS</p><h2>The group as it stands today.</h2></div><p className="muted-note dark-text">No inflated scale claims. These are developing businesses and projects at different stages.</p></div>
        <div className="portfolio-cards">{holdings.map(h => <article key={h.code}><div className="portfolio-mark">{h.mark}</div><span>{h.code} / {h.status}</span><h3>{h.name}</h3><p className="portfolio-category">{h.category}</p><p>{h.description}</p></article>)}</div>
      </div></section>
      <section className="section-dark detail-section"><div className="shell detail-grid"><div><p className="section-kicker">WHAT BELONGS IN AE</p><h2>A business should earn its independence.</h2></div><div className="prose"><p>A new idea belongs in the group when it has a clear purpose, a credible route to becoming useful and enough identity to stand as its own business or product.</p><p>AE can contribute ownership, operating systems, capital, technical build capability and commercial experience, but it does not need every holding to look or operate the same way.</p></div></div></section>
      <CTA />
    </main></PageFrame>
  )
}

function About() {
  useSeo('About — AE Solutions', 'AE Solutions is the parent company for a developing portfolio of independent businesses and products.')
  return (
    <PageFrame><main className="inner-page">
      <section className="inner-hero section-dark"><div className="shell"><p className="section-kicker">ABOUT AE</p><h1>The company<br /><span>behind the companies.</span></h1><p className="lede">AE Solutions exists to build and hold a portfolio of independent businesses, products and intellectual property with a long-term ownership mindset.</p></div></section>
      <section className="detail-section"><div className="shell detail-grid"><div><p className="section-kicker dark">WHY THE STRUCTURE EXISTS</p><h2>One parent.<br />Different missions.</h2></div><div className="prose dark-text"><p>Camelot should be judged on its digital services. Lumi should be judged on its products. Tephtie should be judged on its clothing. A publishing company should be judged on the books and intellectual property it develops.</p><p>AE gives those businesses a common home without forcing them into the same customer proposition. The parent company is there to hold ownership, allocate attention and resources, and preserve a consistent standard of execution.</p></div></div></section>
      <CTA />
    </main></PageFrame>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)
  useSeo('Contact — AE Solutions', 'Contact AE Solutions about the group, partnerships, ventures or corporate enquiries.')
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true) }
  return (
    <PageFrame><main className="contact-page section-dark"><div className="shell contact-grid">
      <div className="contact-copy"><p className="section-kicker">AE / CONTACT</p><h1>Start a conversation.</h1><p>For group enquiries, partnerships, venture opportunities or anything that belongs at parent-company level.</p><div className="contact-meta"><span>AE SOLUTIONS</span><span>GROUP • VENTURES • PARTNERSHIPS</span></div></div>
      <form className="contact-form" onSubmit={submit}>{sent ? <div className="success-state"><span>✓</span><h2>Enquiry captured.</h2><p>This version is still in demo mode, so nothing has been transmitted. The form is ready for the final email or CRM endpoint.</p><button type="button" onClick={() => setSent(false)} className="button silver">Send another</button></div> : <>
        <Field label="Name"><input required name="name" autoComplete="name" /></Field>
        <Field label="Company"><input name="company" autoComplete="organization" /></Field>
        <Field label="Email"><input required type="email" name="email" autoComplete="email" /></Field>
        <Field label="Enquiry type"><select required name="need" defaultValue=""><option value="" disabled>Select one</option><option>Group / corporate</option><option>Partnership</option><option>Venture opportunity</option><option>Investment</option><option>Media</option><option>Other</option></select></Field>
        <Field label="Message"><textarea required rows={6} name="description" /></Field>
        <button className="button silver submit-button" type="submit">Send enquiry <Arrow /></button><p className="form-note">Demo submission only — no data leaves this page yet.</p>
      </>}</form>
    </div></main></PageFrame>
  )
}

function Field({ label, children }: { label: string, children: React.ReactNode }) { return <label className="field"><span>{label}</span>{children}</label> }

function CTA() {
  return <section className="cta-section"><div className="shell cta-grid"><p className="section-kicker">AE SOLUTIONS</p><h2>Building something that belongs in the conversation?</h2><SmartLink href="/contact" className="button light">Get in touch <Arrow /></SmartLink></div></section>
}

function NotFound() {
  useSeo('Page Not Found — AE Solutions', 'The requested page could not be found.')
  return <PageFrame><main className="not-found section-dark"><div className="shell"><span className="huge-code">404</span><p className="section-kicker">PAGE NOT FOUND</p><h1>Wrong route.<br />Back to the group.</h1><SmartLink href="/" className="button silver">Return home <Arrow /></SmartLink></div></main></PageFrame>
}

function Footer() {
  return <footer className="footer"><div className="shell footer-top"><div><Mark /><p className="footer-motto">FORTUNA FAVET FORTIBUS<br /><span>Fortune favours the brave.</span></p></div><div className="footer-links"><div><span>GROUP</span><SmartLink href="/#companies">Companies</SmartLink><SmartLink href="/ventures">Ventures</SmartLink></div><div><span>COMPANY</span><SmartLink href="/about">About</SmartLink><SmartLink href="/contact">Contact</SmartLink></div><div><span>EXTERNAL</span><a href="#" onClick={e => e.preventDefault()}>LinkedIn ↗</a><a href="#" onClick={e => e.preventDefault()}>Privacy</a></div></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} AE SOLUTIONS</span><span>BUILD / OWN / DEVELOP / COMPOUND</span></div></footer>
}

function useSeo(title: string, description: string) {
  useEffect(() => {
    document.title = title
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta) }
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
    return <NotFound />
  }, [path])
  return page
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>)