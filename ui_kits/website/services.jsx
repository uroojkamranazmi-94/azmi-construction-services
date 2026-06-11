/* Services page — full services, engagement builder, process, competencies */
const { useState: useStateSv, useEffect: useEffectSv, useRef: useRefSv } = React;

const SERVICES = [
  { ico: 'compass', name: 'Executive Advisory', exKey: 'strat', desc: 'Strategic guidance for boards, owners, and leadership teams navigating complex builds.' },
  { ico: 'layers', name: 'Ready-Mix Concrete Operations', exKey: 'pcd', desc: 'Standing up, turning around, and scaling batching plants into high-margin profit centers — the engine behind 400% growth at Parkland.' },
  { ico: 'settings-2', name: 'Operational Optimization', exKey: 'ops', desc: 'Process, procurement, and delivery efficiency engineered at scale.' },
  { ico: 'hard-hat', name: 'Project Leadership', exKey: 'pde', desc: 'Delivery excellence on complex, multi-phase, fast-tracked programs.' },
  { ico: 'users', name: 'Team & Talent Development', exKey: 'wf', desc: 'Building durable, high-performing site organizations that outlast the project.' },
  { ico: 'trending-up', name: 'Business Expansion', exKey: 'pcd', desc: 'Scaling operations and revenue with discipline and P&L ownership.' },
  { ico: 'globe-2', name: 'International Market Entry', exKey: 'proc', desc: 'Cross-border setup, procurement, and regulatory compliance, end to end.' },
];

/* ---------- HERO ---------- */
function ServicesHero() {
  const bg = useRefSv(null);
  useEffectSv(() => {
    const on = () => { if (bg.current) bg.current.style.transform = `translateY(${window.scrollY * 0.28}px) scale(1.08)`; };
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useLucide();
  return (
    <header className="ahero services-hero">
      <div ref={bg} className="ahero__bg" aria-hidden="true"><div className="proj-card__grid"></div><i data-lucide="hard-hat"></i></div>
      <div className="dhero__scrim"></div>
      <div className="wrap ahero__inner">
        <a className="dhero__back" href="index.html"><i data-lucide="arrow-left" style={{ width: 15, height: 15 }}></i> Home</a>
        <span className="dhero__sector">Services</span>
        <h1 className="ahero__title">Four decades of delivery,<br />working for you</h1>
        <span className="ahero__role">Seven advisory disciplines — selectable into a single, tailored engagement.</span>
      </div>
    </header>
  );
}

/* ---------- SERVICES + ENGAGEMENT BUILDER ---------- */
function ServicesGrid() {
  const [sel, setSel] = useStateSv([]);
  useLucide(sel.length);
  const toggle = (name) => setSel((s) => s.includes(name) ? s.filter((x) => x !== name) : [...s, name]);
const request = () => {
  try { sessionStorage.setItem('ska_engagement', JSON.stringify(sel)); } catch (e) {}
  window.location.href = 'index.html#contact';
};
  return (
    <section className="services services--page" id="services">
      <div className="wrap">
        <SectionHead index="01" eyebrow="Capabilities" title="Select the services you need" max="24em">
          <p className="services__lead">Each discipline stands on its own — or combine several below and we'll compose a single, tailored scope of work.</p>
        </SectionHead>
        <div className="services__grid">
          {SERVICES.map((s) => {
            const rel = projectsByExpertise(s.exKey, 3);
            return (
              <Reveal key={s.name} className={`svc-card ${sel.includes(s.name) ? 'is-sel' : ''}`}>
                <div className="svc-card__inner">
                  <div className="svc-card__top" onClick={() => toggle(s.name)} data-hover>
                    <span className="svc-card__ico"><i data-lucide={s.ico} style={{ width: 24, height: 24 }}></i></span>
                    <span className="svc-card__check"><i data-lucide={sel.includes(s.name) ? 'check' : 'plus'} style={{ width: 16, height: 16 }}></i></span>
                  </div>
                  <h3 className="svc-card__name" onClick={() => toggle(s.name)} data-hover>{s.name}</h3>
                  <p className="svc-card__desc">{s.desc}</p>
                  <div className="svc-card__rel">
                    <span className="svc-card__rel-h">Related projects</span>
                    {rel.map((p) => (
                      <a key={p.id} className="svc-card__rel-a" href={`project.html?id=${p.id}`} onClick={(e) => e.stopPropagation()} data-hover>
                        <span className={`svc-card__rel-ic tone${p.tone}`}><i data-lucide={p.ico} style={{ width: 14, height: 14 }}></i></span>
                        <span className="svc-card__rel-nm">{p.name}</span>
                        <span className="svc-card__rel-lo">{p.city}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className={`engage ${sel.length ? 'is-on' : ''}`}>
          <div className="engage__left">
            <span className="engage__label">Build Your Engagement</span>
            <p className="engage__hint">{sel.length ? `${sel.length} service${sel.length > 1 ? 's' : ''} selected — we'll tailor a combined scope.` : 'Select the services above to compose a tailored engagement.'}</p>
            <div className="engage__chips">
              {sel.map((s) => <span key={s} className="engage__chip">{s}<i data-lucide="x" style={{ width: 12, height: 12 }} onClick={() => setSel((v) => v.filter((x) => x !== s))}></i></span>)}
            </div>
          </div>
          <button className="engage__cta" disabled={!sel.length} onClick={request}>
            Request this engagement <i data-lucide="arrow-right" style={{ width: 16, height: 16 }}></i>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */
const STEPS = [
  { n: '01', ico: 'search', name: 'Assess', desc: 'A direct, unsentimental read of your project, operations, or target market — risks, gaps, and the real constraints.' },
  { n: '02', ico: 'pencil-ruler', name: 'Plan', desc: 'A delivery strategy with clear ownership: procurement, schedule, quality, and the team structure to execute it.' },
  { n: '03', ico: 'hard-hat', name: 'Deliver', desc: 'Hands-on leadership through the build — coordinating multinational teams against an aggressive program.' },
  { n: '04', ico: 'trending-up', name: 'Scale', desc: 'Lock in the gains: durable site organizations, repeatable systems, and P&L outcomes that compound.' },
];
function Process() {
  useLucide();
  return (
    <section className="process">
      <div className="wrap">
        <SectionHead index="02" eyebrow="How we work" title="A disciplined path from brief to handover" max="22em" />
        <div className="process__grid">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 80} className="pstep" as="div">
              <div className="pstep__top"><span className="pstep__n">{s.n}</span><span className="pstep__ico"><i data-lucide={s.ico} style={{ width: 22, height: 22 }}></i></span></div>
              <h4 className="pstep__name">{s.name}</h4>
              <p className="pstep__desc">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- COMPETENCIES ---------- */
const COMPS = [
  { ico: 'building', name: 'Construction Management', years: 40 },
  { ico: 'layers', name: 'Ready-Mix Concrete Operations & Profit Center Development', years: 30 },
  { ico: 'briefcase', name: 'Operations Leadership', years: 35 },
  { ico: 'trending-up', name: 'P&L Ownership', years: 28 },
  { ico: 'target', name: 'Strategic Planning', years: 30 },
  { ico: 'users', name: 'Workforce Development', years: 33 },
  { ico: 'hard-hat', name: 'Project Delivery & Execution', years: 36 },
  { ico: 'file-signature', name: 'Contract Negotiation', years: 26 },
  { ico: 'globe', name: 'International Procurement', years: 24 },
];
function Competencies() {
  useLucide();
  return (
    <section className="comps comps--alt" id="competencies">
      <div className="wrap">
        <SectionHead index="03" eyebrow="Core Competencies" title="Where deep expertise compounds" max="18em" />
        <div className="comps__grid">
          {COMPS.map((c, i) => (
            <Reveal key={c.name} delay={(i % 4) * 60} className="comp" as="div">
              <div className="comp__inner" data-hover>
                <div className="comp__ico"><i data-lucide={c.ico} style={{ width: 22, height: 22 }}></i></div>
                <h4 className="comp__name">{c.name}</h4>
                <div className="comp__bar"><span style={{ width: (c.years / 40 * 100) + '%' }}></span></div>
                <span className="comp__years"><Counter to={c.years} suffix="+ yrs" /></span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function ServicesCTA() {
  useLucide();
  return (
    <section className="dcta">
      <div className="dcta__grid-bg"></div>
      <div className="wrap dcta__inner">
        <Eyebrow copper light>Ready to start?</Eyebrow>
        <h2 className="dcta__title">Let's shape what comes next.</h2>
        <p className="dcta__lead">Tell us about your project, your operations, or your next market.</p>
        <Button icon="arrow-right" href="consultation.html">Start a Consultation</Button>
      </div>
    </section>
  );
}

Object.assign(window, { ServicesHero, ServicesGrid, Process, Competencies, ServicesCTA });
