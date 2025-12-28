import { useNavigate } from "react-router-dom";
import React from "react";
import Logincard from "./Logincard";

function Process({showLogin, setLoginFalse}){
  return(
    <main className="process-page">
      {showLogin ? <Logincard setLoginFalse={setLoginFalse} /> : null}
      <section className="process-hero">
        <div className="process-copy">
          <div className="pill">How adoption works</div>
          <h1>Every step is warm, guided, and simple.</h1>
          <p className="lede">
            We pair you with a coordinator, schedule a cozy meet-and-greet, and handle the paperwork so you can focus on bonding.
          </p>
          <div className="process-meta">
            <div className="meta-tile">
              <span className="meta-label">Average timeline</span>
              <strong>5 - 7 days</strong>
            </div>
            <div className="meta-tile">
              <span className="meta-label">Support</span>
              <strong>Coach + text check-ins</strong>
            </div>
            <div className="meta-tile">
              <span className="meta-label">First 30 days</span>
              <strong>Training tips + vet list</strong>
            </div>
          </div>
        </div>
        <div className="process-visual">
          <div className="process-orb orb-one"></div>
          <div className="process-orb orb-two"></div>
          <div className="process-friend-card">
            <div className="process-friend-head">
              <p className="eyebrow">Next up</p>
              <span className="badge badge-soft">Meet & greet</span>
            </div>
            <p className="pet-name">Piper</p>
            <p className="pet-detail">Cattle dog · Puzzle lover</p>
            <div className="process-progress">
              <div className="progress-bar">
                <span style={{width: "68%"}}></span>
              </div>
              <p className="muted">Paperwork 68% ready</p>
            </div>
            <div className="process-reminder">
              <span className="dot"></span>
              Bring comfy clothes and a favorite treat to share.
            </div>
          </div>
          <div className="process-sparkles">
            <span className="sparkle s1"></span>
            <span className="sparkle s2"></span>
            <span className="sparkle s3"></span>
            <span className="sparkle s4"></span>
          </div>
          <div className="process-floating-note">
            <p className="small">Our coordinators demo harness fits, crate cozy tips, and quiet spaces so your new friend feels safe.</p>
          </div>
        </div>
      </section>

      <section className="process-grid">
        <article className="process-card">
          <div className="step-badge">1</div>
          <h3>Tell us about home</h3>
          <p>Share your routine, space, and any resident pets. We match by energy and lifestyle, not just looks.</p>
          <ul className="step-list">
            <li>Quick form + chat</li>
            <li>Photo of sleeping/yard space (optional)</li>
            <li>Pick your meet windows</li>
          </ul>
        </article>
        <article className="process-card">
          <div className="step-badge">2</div>
          <h3>Meet your match</h3>
          <p>Guided meet-and-greets with calm intros. We show feeding, enrichment, and first-night routines.</p>
          <ul className="step-list">
            <li>Indoor + outdoor intros</li>
            <li>Ask us anything time</li>
            <li>Snuggle photo keepsake</li>
          </ul>
        </article>
        <article className="process-card">
          <div className="step-badge">3</div>
          <h3>Paperwork made easy</h3>
          <p>We pre-fill medical, microchip, and city registration drafts so you just sign and celebrate.</p>
          <ul className="step-list">
            <li>Vaccines + vet notes</li>
            <li>Microchip registered to you</li>
            <li>Starter kit: food, toy, tag</li>
          </ul>
        </article>
        <article className="process-card">
          <div className="step-badge">4</div>
          <h3>Homecoming coaching</h3>
          <p>We text check-ins, share training videos, and schedule a follow-up to celebrate wins.</p>
          <ul className="step-list">
            <li>48-hour check-in</li>
            <li>Behavior coach hotline</li>
            <li>First playdate invite</li>
          </ul>
        </article>
      </section>

      <section className="timeline-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">What to expect</p>
            <h2>Friendly timeline, zero guesswork.</h2>
          </div>
          <a href="my-adoption.html" className="text-link">View your adoption card</a>
        </div>
        <div className="timeline">
          <div className="timeline-step done">
            <div className="timeline-dot">1</div>
            <p className="timeline-title">Apply online</p>
            <p className="muted small">Share your vibe and preferences.</p>
          </div>
          <div className="timeline-step done">
            <div className="timeline-dot">2</div>
            <p className="timeline-title">Coordinator call</p>
            <p className="muted small">Schedule a meet and prep checklist.</p>
          </div>
          <div className="timeline-step">
            <div className="timeline-dot">3</div>
            <p className="timeline-title">Meet & greet</p>
            <p className="muted small">30-60 mins with a coach on site.</p>
          </div>
          <div className="timeline-step">
            <div className="timeline-dot">4</div>
            <p className="timeline-title">Homecoming</p>
            <p className="muted small">Paperwork, supplies, first night plan.</p>
          </div>
        </div>
      </section>

      <section className="process-banner">
        <div>
          <p className="eyebrow">Need a hand?</p>
          <h2>Our team loves questions, big and small.</h2>
          <p className="lede">Text us photos of your space, ask about bonding games, or book a second meet—it's all part of the process.</p>
        </div>
        <div className="process-actions">
          <a href="pets.html" className="primary-btn">Browse adoptables</a>
          <a href="my-adoption.html" className="primary-btn">See my adoption card</a>
        </div>
      </section>

      
    </main>
  )
}

export default Process