"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Handle reveal animations on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all elements with .reveal class
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return (
    <main className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
    
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-glow"></div>
        <div className="wrap hero-inner">
          <div className="reveal">
            <p className="eyebrow">PARENT TECHNOLOGY COMPANY · GURUGRAM, INDIA</p>
            <h1>AI-native products.<br /><span className="grad-text">Human-scale impact.</span></h1>
            <p className="lede">Dishaayein Technology builds AI-first platforms that make operations faster and cheaper for businesses — and puts the same intelligence to work reuniting families and connecting communities.</p>
            <div className="hero-ctas">
              <a className="btn-primary" href="#ecosystem">Explore the Ecosystem</a>
              <a className="btn-ghost" href="#contact">Partner With Us</a>
            </div>
            <div className="chip-strip">
              <span className="chip-sm">⚡ 10× Faster Ops</span>
              <span className="chip-sm">💰 60% Cost Reduction</span>
              <span className="chip-sm">🤖 24/7 AI Copilots</span>
              <span className="chip-sm">🧩 4 AI-Native Products</span>
            </div>
          </div>
          <div className="hero-visual reveal">
            <div className="ring r2"></div>
            <div className="ring"></div>
            <span className="orbit-dot" style={{width:'10px',height:'10px',top:'18%',left:'70%'}}></span>
            <span className="orbit-dot" style={{width: '6px',height: '6px',top: '75%',left: '22%',animationDelay: '.6s'}}></span>
            <span className="orbit-dot" style={{width: '8px',height: '8px',top: '65%',left: '80%',animationDelay: '1.2s'}}></span>
            <span className="orbit-dot" style={{width: '5px',height: '5px',top: '12%',left: '20%',animationDelay: '1.8s'}}></span>
            <Image src="/logos/Dark Vertical.png" alt="Dishaayein Technology logo mark" width={180} height={250} />
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="impact">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">AI Impact</p>
            <h2>What AI-native actually changes for you.</h2>
            <p>Every product in the Dishaayein ecosystem is built AI-first — not bolted on after the fact. Here's what that means in practice.</p>
          </div>
          <div className="impact-grid reveal">
            <div className="impact-card">
              <div className="iicon">⚡</div>
              <div className="inum">10×</div>
              <div className="ilbl">Faster operations — from manual workflows to AI-automated ones, audited and shipped in weeks.</div>
            </div>
            <div className="impact-card">
              <div className="iicon">💰</div>
              <div className="inum">60%</div>
              <div className="ilbl">Average cost reduction once repetitive processes are handed to AI copilots and workflows.</div>
            </div>
            <div className="impact-card">
              <div className="iicon">💬</div>
              <div className="inum">0 SQL</div>
              <div className="ilbl">Needed to query your own data — ask in plain English, get charts and answers instantly.</div>
            </div>
            <div className="impact-card">
              <div className="iicon">🔔</div>
              <div className="inum">24/7</div>
              <div className="ilbl">AI cross-matching keeps working around the clock — even for our social-impact platforms.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about">
        <div className="wrap">
          <div className="who-grid">
            <div className="reveal">
              <p className="eyebrow">Who We Are</p>
              <h2>A parent tech company<br />with purpose.</h2>
              <p className="lead">We build cutting-edge technology products and platforms that drive business growth — while giving back to society through digital welfare initiatives.</p>
              <p className="who-founded">📍 Founded in Gurugram, India</p>
            </div>
            <div className="mini-stats reveal">
              <div className="mini-card"><div className="num">4</div><div className="lbl">Products &amp; Platforms</div></div>
              <div className="mini-card"><div className="num">20+</div><div className="lbl">Database Integrations</div></div>
              <div className="mini-card"><div className="num">30+</div><div className="lbl">Automation Workflows Built</div></div>
              <div className="mini-card"><div className="num">24/7</div><div className="lbl">Social Welfare Active</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM SECTION */}
      <section id="ecosystem" className="ecosystem">
        <div className="wrap">
          <div className="section-head reveal" style={{ margin: '0 auto 20px', textAlign: 'center', maxWidth: '600px' }}>
            <p className="eyebrow" style={{ justifyContent: 'center' }}>Our Ecosystem</p>
            <h2>Four pillars. One vision.</h2>
            <p style={{ margin: '16px auto 0' }}>One parent company, four independent products — each built with the same AI-first, India-specific philosophy.</p>
          </div>

          <div className="hub-wrap reveal">
            <svg className="hub-svg" viewBox="0 0 900 620" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="lineGrad1" x1="450" y1="310" x2="180" y2="140" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#7c2ae8"/><stop offset="1" stopColor="#8b3ef0"/>
                </linearGradient>
                <linearGradient id="lineGrad2" x1="450" y1="310" x2="720" y2="140" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#7c2ae8"/><stop offset="1" stopColor="#1f7ee6"/>
                </linearGradient>
                <linearGradient id="lineGrad3" x1="450" y1="310" x2="180" y2="480" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#7c2ae8"/><stop offset="1" stopColor="#0aabc4"/>
                </linearGradient>
                <linearGradient id="lineGrad4" x1="450" y1="310" x2="720" y2="480" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#7c2ae8"/><stop offset="1" stopColor="#12a370"/>
                </linearGradient>
                <radialGradient id="centerGlow" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0" stopColor="#7c2ae8" stopOpacity="0.45"/>
                  <stop offset="1" stopColor="#7c2ae8" stopOpacity="0"/>
                </radialGradient>
              </defs>

              <path className="spoke-line" d="M450 310 L180 140" stroke="url(#lineGrad1)" strokeWidth="1.5" fill="none"/>
              <path className="spoke-line" d="M450 310 L720 140" stroke="url(#lineGrad2)" strokeWidth="1.5" fill="none"/>
              <path className="spoke-line" d="M450 310 L180 480" stroke="url(#lineGrad3)" strokeWidth="1.5" fill="none"/>
              <path className="spoke-line" d="M450 310 L720 480" stroke="url(#lineGrad4)" strokeWidth="1.5" fill="none"/>

              <circle cx="450" cy="310" r="86" fill="url(#centerGlow)" className="node-pulse"/>
              <circle cx="450" cy="310" r="58" className="hub-node-bg" stroke="#7c2ae8" strokeWidth="1.4"/>
              <text x="450" y="304" textAnchor="middle" className="hub-center-label hub-text" fontSize="15">Dishaayein</text>
              <text x="450" y="324" textAnchor="middle" className="hub-center-label hub-text" fontSize="15">Technology</text>

              <g>
                <circle cx="180" cy="140" r="10" className="hub-node-bg" stroke="#8b3ef0" strokeWidth="2"/>
                <circle cx="180" cy="140" r="3" fill="#8b3ef0"/>
                <text x="180" y="100" textAnchor="middle" className="hub-node-label" fill="#8b3ef0">AI BRAND</text>
                <text x="180" y="122" textAnchor="middle" className="hub-center-label hub-text" fontSize="18">Nexiva AI</text>
              </g>

              <g>
                <circle cx="720" cy="140" r="10" className="hub-node-bg" stroke="#1f7ee6" strokeWidth="2"/>
                <circle cx="720" cy="140" r="3" fill="#1f7ee6"/>
                <text x="720" y="100" textAnchor="middle" className="hub-node-label" fill="#1f7ee6">SAAS PRODUCT</text>
                <text x="720" y="122" textAnchor="middle" className="hub-center-label hub-text" fontSize="18">DB AI Magic</text>
              </g>

              <g>
                <circle cx="180" cy="480" r="10" className="hub-node-bg" stroke="#0aabc4" strokeWidth="2"/>
                <circle cx="180" cy="480" r="3" fill="#0aabc4"/>
                <text x="180" y="530" textAnchor="middle" className="hub-node-label" fill="#0aabc4">SOCIAL PLATFORM</text>
                <text x="180" y="510" textAnchor="middle" className="hub-center-label hub-text" fontSize="18">Why&amp;Who</text>
              </g>

              <g>
                <circle cx="720" cy="480" r="10" className="hub-node-bg" stroke="#12a370" strokeWidth="2"/>
                <circle cx="720" cy="480" r="3" fill="#12a370"/>
                <text x="720" y="530" textAnchor="middle" className="hub-node-label" fill="#12a370">NGO SERVICE</text>
                <text x="720" y="510" textAnchor="middle" className="hub-center-label hub-text" fontSize="18">MFN</text>
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* NEXIVA AI */}
      <section className="brand-panel">
        <div className="wrap reveal">
          <div className="brand-top">
            <div className="brand-id">
              <span className="brand-tag" style={{ borderColor: 'rgba(139,62,240,0.4)', color: 'var(--c-nexiva)' }}>AI Brand</span>
              <span className="brand-name">Nexiva AI</span>
            </div>
            <a className="brand-url" href="https://nexiva.dev" target="_blank" rel="noopener">nexiva.dev ↗</a>
          </div>
          <p className="brand-headline">India's Operational Intelligence &amp; Business Automation Partner.</p>
          <p className="brand-sub">AI-first, zero templates, precision-built for your business — Nexiva maps operations, automates workflows end-to-end, and ships custom AI copilots trained on your data.</p>

          <div className="feature-grid">
            <div className="feature-card">
              <span className="ficon">🔍</span>
              <h4>Automation Audit</h4>
              <p>Deep-dive into your operations. Map every manual process, identify opportunities, and get a custom roadmap in 5 days.</p>
            </div>
            <div className="feature-card">
              <span className="ficon">⚙️</span>
              <h4>Workflow Automation</h4>
              <p>End-to-end automated workflows — lead capture to invoice generation. API integrations, testing &amp; handover training included.</p>
            </div>
            <div className="feature-card">
              <span className="ficon">🤖</span>
              <h4>AI Copilots</h4>
              <p>Custom AI assistants trained on your data. Handle queries, summarise reports, draft content — available 24/7.</p>
            </div>
          </div>

          <div className="badge-row">
            <span className="badge">10× Faster Ops</span>
            <span className="badge">60% Cost Reduction</span>
            <span className="badge">30-Day QuickStart</span>
            <span className="badge">India-First Expertise</span>
          </div>
        </div>
      </section>

      {/* DB AI MAGIC */}
      <section className="brand-panel">
        <div className="wrap reveal">
          <div className="brand-top">
            <div className="brand-id">
              <span className="brand-tag" style={{ borderColor: 'rgba(31,126,230,0.4)', color: 'var(--c-dbmagic)' }}>SaaS Product</span>
              <span className="brand-name">DB AI Magic</span>
            </div>
            <a className="brand-url" href="https://dbmagic.pro" target="_blank" rel="noopener">dbmagic.pro ↗</a>
          </div>
          <p className="brand-headline">Turn any database into visual business intelligence.</p>
          <p className="brand-sub">No SQL. No coding. Ask in plain English — get instant charts, dashboards &amp; automated MIS reports. Includes the Chatty DB conversational query engine.</p>

          <div className="feature-grid">
            <div className="feature-card">
              <span className="ficon">💬</span>
              <h4>Chatty DB</h4>
              <p>Ask questions in plain English — "top 5 customers this month" — get instant visual answers.</p>
            </div>
            <div className="feature-card">
              <span className="ficon">📊</span>
              <h4>AI Magic Dashboards</h4>
              <p>Click AI Magic: full business dashboard auto-generated from your live data in seconds.</p>
            </div>
            <div className="feature-card">
              <span className="ficon">🗄️</span>
              <h4>20+ Databases</h4>
              <p>PostgreSQL, MySQL, MongoDB, MSSQL, SQLite, BigQuery, Snowflake, Redis &amp; more.</p>
            </div>
            <div className="feature-card">
              <span className="ficon">📥</span>
              <h4>Automated Reports</h4>
              <p>Build MIS reports. Schedule automated delivery to email or Slack — hands-free.</p>
            </div>
          </div>

          <div className="badge-row">
            <span className="badge">Universal Web IDE</span>
            <span className="badge">No Installation Required</span>
            <span className="badge">Free for Individuals</span>
          </div>
        </div>
      </section>

      {/* WHY&WHO */}
      <section className="brand-panel">
        <div className="wrap reveal">
          <div className="brand-top">
            <div className="brand-id">
              <span className="brand-tag" style={{ borderColor: 'rgba(10,171,196,0.4)', color: 'var(--c-whynwho)' }}>Social Platform</span>
              <span className="brand-name">Why&amp;Who</span>
            </div>
            <a className="brand-url" href="https://whynwho.com" target="_blank" rel="noopener">whynwho.com ↗</a>
          </div>
          <p className="brand-headline">A modern Q&amp;A platform for curious minds.</p>
          <p className="brand-sub">Ask questions, share knowledge, explore ideas, and connect with thinkers worldwide — built with React by Dishaayein Technology.</p>

          <div className="feature-grid two">
            <div className="feature-card">
              <span className="ficon">❓</span>
              <h4>Ask &amp; Answer</h4>
              <p>A clean, focused space to ask real questions and share knowledge without the noise.</p>
            </div>
            <div className="feature-card">
              <span className="ficon">🌐</span>
              <h4>Global Community</h4>
              <p>Connect with thinkers worldwide, explore ideas, and follow topics you care about.</p>
            </div>
          </div>

          <div className="badge-row">
            <span className="badge">Available as Android App</span>
            <span className="badge">Built with React</span>
          </div>
        </div>
      </section>

      {/* MFN */}
      <section className="brand-panel">
        <div className="wrap reveal">
          <div className="brand-top">
            <div className="brand-id">
              <span className="brand-tag" style={{ borderColor: 'rgba(18,163,112,0.4)', color: 'var(--c-mfn)' }}>NGO Service</span>
              <span className="brand-name">MFN</span>
            </div>
            <a className="brand-url" href="https://missingfound.online" target="_blank" rel="noopener">missingfound.online ↗</a>
          </div>
          <p className="brand-headline">Missing Found Network — reuniting families across India.</p>
          <p className="brand-sub">Report missing persons &amp; found individuals instantly, with AI-powered cross-matching of cases and instant alerts for missing persons in your area.</p>

          <div className="feature-grid">
            <div className="feature-card">
              <span className="ficon">📢</span>
              <h4>Instant Reporting</h4>
              <p>Report missing persons &amp; found individuals instantly, straight from the app.</p>
            </div>
            <div className="feature-card">
              <span className="ficon">🧩</span>
              <h4>AI Cross-Matching</h4>
              <p>AI-powered cross-matching of cases helps connect reports faster than manual review.</p>
            </div>
            <div className="feature-card">
              <span className="ficon">🔔</span>
              <h4>Area Alerts</h4>
              <p>Instant alerts for missing persons in your area, with testimonials from police, families &amp; volunteers.</p>
            </div>
          </div>

          <div className="badge-row">
            <span className="badge">Available as Android App</span>
            <span className="badge">Trusted by Police &amp; Volunteers</span>
          </div>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Why Partner With Us</p>
            <h2>Built different. Built to last.</h2>
          </div>
          <div className="partner-grid reveal">
            <div className="partner-card">
              <div className="picon">🧱</div>
              <h3>Full-Stack Capability</h3>
              <p>From AI/ML models to production web apps — we build end-to-end across .NET, React, and Next.js.</p>
            </div>
            <div className="partner-card">
              <div className="picon">🧠</div>
              <h3>AI-Native Philosophy</h3>
              <p>Every product we build has AI embedded at its core — not bolted on as an afterthought.</p>
            </div>
            <div className="partner-card">
              <div className="picon">🇮🇳</div>
              <h3>India-Specific Expertise</h3>
              <p>GST compliance, UPI, WhatsApp Business — we understand India's business ecosystem inside out.</p>
            </div>
            <div className="partner-card">
              <div className="picon">❤️</div>
              <h3>Social Responsibility</h3>
              <p>We don't just build for profit. MFN and Why&amp;Who reflect our commitment to society.</p>
            </div>
            <div className="partner-card">
              <div className="picon">🚀</div>
              <h3>Proven Delivery</h3>
              <p>30+ automation workflows, multi-tenant platforms, 20+ DB integrations — shipped and live.</p>
            </div>
            <div className="partner-card">
              <div className="picon">🔒</div>
              <h3>Enterprise-Grade Security</h3>
              <p>Role-based access, encrypted data, scalable cloud infrastructure — security is non-negotiable.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}