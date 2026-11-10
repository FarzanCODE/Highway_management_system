import { Link } from 'react-router-dom'
import './home/home.css'
import Architecture from './home/Architecture'
import Faq from './home/Faq'
import HowItWorks from './home/HowItWorks'
import Icon from './home/Icon'
import Roles from './home/Roles'
import Section from './home/Section'
import Simulator from './home/Simulator'

const BEFORE = [
  ['Queues and cash handling', 'Vehicles stop at every booth to pay, causing congestion and wasted fuel and time.'],
  ['Leakage and disputes', 'Manual collection makes money easy to lose and payments hard to prove.'],
  ['Disconnected plazas', 'Each plaza keeps its own records, so rates drift and there is no single view of revenue.'],
]
const AFTER = [
  ['Automatic wallet payment', 'The tag is read, the toll is calculated and debited from a prepaid wallet in one step.'],
  ['Correct by design', 'No double charges, no negative balances, and every rupee is written to an audit ledger.'],
  ['One cloud platform', 'Rates, vehicles, users and revenue live in one place, visible to the right people.'],
]
const FEATURES = [
  ['wallet', 'Prepaid wallet', 'Drivers top up once; every toll is debited automatically with a full history.'],
  ['clock', 'Pay later', 'A short wallet does not stop the vehicle. The toll becomes a due, within set limits.'],
  ['bell', 'Notifications', 'Toll paid, low balance, credit used, due soon and overdue alerts.'],
  ['chart', 'Revenue dashboards', 'Revenue by plaza, vehicle type and day for operators and admins.'],
  ['ledger', 'Audit and reconciliation', 'An append-only ledger and a report proving it matches every wallet.'],
  ['shield', 'Role-based access', 'Drivers, operators and admins see and do only what their role allows.'],
]
const NAV = [['challenge', 'Overview'], ['how', 'How it works'], ['demo', 'Live demo'], ['roles', 'Users and roles'], ['cloud', 'Architecture'], ['faq', 'FAQ']]

export default function HomePage() {
  return (
    <div className="lp">
      <section className="lp-hero">
        <div className="lp-wrap lp-hero__layout">
          <div className="lp-hero__inner">
            <span className="lp-eyebrow lp-eyebrow--light"><span className="lp-pulse" /> ONE PLATFORM. EVERY PLAZA.</span>
            <h1>Toll roads,<br />without the <span>slow lane.</span></h1>
            <p>Every crossing, wallet and plaza in sync. TollCloud makes collection feel invisible and keeps every rupee accountable.</p>
            <div className="lp-hero__actions">
              <Link to="/login" className="lp-btn lp-btn--primary">Enter the dashboard <span aria-hidden="true">↗</span></Link>
              <a href="#how" className="lp-btn lp-btn--light">Explore the platform</a>
            </div>
            <div className="lp-hero__proof"><span className="lp-proof-avatars" aria-hidden="true"><i>D</i><i>O</i><i>A</i></span><span>One connected view for drivers, operators and admins</span></div>
          </div>
          <div className="lp-hero-visual" aria-label="Illustration of the TollCloud live operations dashboard">
            <div className="lp-visual-orbit lp-visual-orbit--one" />
            <div className="lp-visual-orbit lp-visual-orbit--two" />
            <div className="lp-live-card">
              <div className="lp-live-card__top"><span><i /> LIVE NETWORK</span><span>● ALL SYSTEMS NORMAL</span></div>
              <div className="lp-network-map">
                <svg viewBox="0 0 540 310" role="presentation" aria-hidden="true">
                  <path className="lp-map-road lp-map-road--back" d="M-30 234C83 178 113 266 225 214S375 136 574 180" />
                  <path className="lp-map-road" d="M-28 226C85 170 119 257 230 204S383 128 570 172" />
                  <path className="lp-map-road lp-map-road--back" d="M78-28C125 83 178 74 220 166s129 127 195 181" />
                  <path className="lp-map-road" d="M87-28C134 83 187 74 229 166s129 127 195 181" />
                  <path className="lp-map-road lp-map-road--back" d="M414-20C355 65 409 110 359 183s-8 96 24 147" />
                  <path className="lp-map-road" d="M423-20C364 65 418 110 368 183s-8 96 24 147" />
                  <path className="lp-map-minor" d="M18 45c91 30 104 8 173 25m220 203c30-38 69-42 122-37M242 28c40 3 52 28 56 60M27 277c50-35 77-41 114-40" />
                </svg>
                <span className="lp-map-label lp-map-label--one">NORTH GATE</span>
                <span className="lp-map-label lp-map-label--two">RIVER CROSSING</span>
                <span className="lp-map-label lp-map-label--three">EAST EXPRESS</span>
                <span className="lp-map-pin lp-map-pin--one"><i /></span>
                <span className="lp-map-pin lp-map-pin--two"><i /></span>
                <span className="lp-map-pin lp-map-pin--three"><i /></span>
                <span className="lp-map-car">↗</span>
              </div>
              <div className="lp-live-card__bottom">
                <div><span>Crossings today</span><strong>12,486 <i>+8.2%</i></strong></div>
                <div><span>Revenue collected</span><strong>₹ 8.42L</strong></div>
                <div><span>Plazas online</span><strong>08 <b>●</b></strong></div>
              </div>
            </div>
            <div className="lp-float-card"><span className="lp-float-card__icon">✓</span><span><strong>Payment verified</strong><small>FASTag · just now</small></span><b>₹ 120</b></div>
            <span className="lp-hero-index">01 — 03 &nbsp; / &nbsp; CONNECTED ROADS</span>
          </div>
        </div>
      </section>

      <div className="lp-strip">
        <div className="lp-wrap lp-strip__grid">
          <div><strong>3</strong><span>user roles</span></div>
          <div><strong>4</strong><span>vehicle classes</span></div>
          <div><strong>1</strong><span>database transaction per toll</span></div>
          <div><strong>0</strong><span>double charges or negative balances</span></div>
        </div>
      </div>

      <nav className="lp-subnav" aria-label="Page sections">
        <div className="lp-wrap">{NAV.map(([id, label]) => (<a key={id} href={`#${id}`}>{label}</a>))}</div>
      </nav>

      <Section id="challenge" eyebrow="Overview" title="What the system solves" lead="Traditional toll collection is slow, difficult to audit and split across plazas. This platform replaces it with one central, automatic system.">
        <div className="lp-compare">
          <div className="lp-compare__col">
            <h3>Traditional collection</h3>
            {BEFORE.map(([t, d]) => (<div className="lp-compare__row" key={t}><span className="lp-compare__mark lp-compare__mark--bad"><Icon name="x" size={14} /></span><div><h4>{t}</h4><p>{d}</p></div></div>))}
          </div>
          <div className="lp-compare__col lp-compare__col--good">
            <h3>With this platform</h3>
            {AFTER.map(([t, d]) => (<div className="lp-compare__row" key={t}><span className="lp-compare__mark lp-compare__mark--good"><Icon name="check" size={14} /></span><div><h4>{t}</h4><p>{d}</p></div></div>))}
          </div>
        </div>
        <div className="lp-features">
          {FEATURES.map(([icon, t, d]) => (<article key={t} className="lp-feature"><span className="lp-feature__icon"><Icon name={icon} /></span><h4>{t}</h4><p>{d}</p></article>))}
        </div>
      </Section>

      <Section id="how" eyebrow="How it works" title="What happens when a vehicle passes a toll plaza" lead="Select a step to see what the system checks." tone="grey">
        <HowItWorks />
      </Section>

      <Section id="demo" eyebrow="Live demo" title="Process a toll event" lead="Runs in your browser using the same rules as the real server. Try a normal toll, an empty wallet, pay later and a repeated request.">
        <Simulator />
      </Section>

      <Section id="roles" eyebrow="Users and roles" title="Three roles, each with a clear job" lead="Each person sees only their own screens. Select a role to see what they do, and sign in with the demo account." tone="grey">
        <Roles />
      </Section>

      <Section id="cloud" eyebrow="Architecture" title="A three-tier cloud application" lead="Select a tier to see its role and the cloud service model it uses." tone="navy">
        <Architecture />
      </Section>

      <Section id="faq" eyebrow="FAQ" title="Frequently asked questions">
        <Faq />
      </Section>

      <section className="lp-cta">
        <div className="lp-wrap">
          <h2>See the system in action</h2>
          <p>Sign in with a demo account and follow a toll from the wallet to the dashboard.</p>
          <div className="lp-hero__actions lp-hero__actions--center">
            <Link to="/login" className="lp-btn lp-btn--primary">Log in</Link>
            <Link to="/register" className="lp-btn lp-btn--light">Create a driver account</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
