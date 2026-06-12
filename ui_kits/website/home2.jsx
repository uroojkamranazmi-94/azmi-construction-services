/* Homepage part 2 — Services teaser, Global Reach teaser, Contact */
const { useState: useStateS, useEffect: useEffectS, useRef: useRefS } = React;

/* ---------- SERVICES TEASER (links to services.html) ---------- */
const SVC_TEASER = [
  { ico: 'compass', name: 'Executive Advisory' },
  { ico: 'layers', name: 'Ready-Mix Concrete Operations' },
  { ico: 'settings-2', name: 'Operational Optimization' },
  { ico: 'hard-hat', name: 'Project Leadership' },
  { ico: 'users', name: 'Team & Talent Development' },
  { ico: 'trending-up', name: 'Business Expansion' },
  { ico: 'globe-2', name: 'International Market Entry' },
];

function ServicesTeaser() {
  useLucide();
  return (
    <section className="svc-teaser" id="services">
      <div className="wrap svc-teaser__grid">
        <Reveal className="svc-teaser__intro" as="div">
          <SectionHead index="02" eyebrow="Services" title="Seven disciplines, one tailored engagement" max="14em" />
          <p className="svc-teaser__lead">From boardroom strategy to on-site delivery — combine the capabilities you need into a single scope of work.</p>
          <Button icon="arrow-right" href="services.html">Explore Services</Button>
        </Reveal>
        <div className="svc-teaser__list">
          {SVC_TEASER.map((s, i) => (
            <Reveal key={s.name} delay={i * 50} as="div" className="svc-teaser__row">
              <a className="svc-teaser__row-a" href="services.html" data-hover>
                <span className="svc-teaser__ic"><i data-lucide={s.ico} style={{ width: 19, height: 19 }}></i></span>
                <span className="svc-teaser__nm">{s.name}</span>
                <i data-lucide="arrow-up-right" className="svc-teaser__go" style={{ width: 16, height: 16 }}></i>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- GLOBAL REACH TEASER (links to reach.html) ---------- */
function ReachTeaser() {
  useLucide();
  return (
    <section className="reach-teaser" id="reach">
      <div className="reach-teaser__bg" aria-hidden="true"></div>
      <div className="wrap reach-teaser__inner">
        <SectionHead index="03" eyebrow="Global Reach" light title="Delivery across four continents" max="18em" />
        <p className="reach-teaser__lead">Landmark projects across Central Africa, the Gulf, and South Asia — seven cities, four countries, one consistent standard.</p>
        <div className="reach-teaser__regions">
          {COUNTRY_GROUPS.map((c) => {
            const totalProjects = c.cities.reduce((sum, city) => sum + city.projects.length, 0);
            return (
              <a key={c.country} className="reach-teaser__region" href="projects.html#reach" data-hover>
                <span className="reach-teaser__r-n">{c.country}</span>
                <span className="reach-teaser__r-m">{c.cities.map(city => city.city).join(', ')}</span>
              </a>
            );
          })}
        </div>
        <Button variant="ghost-dark" icon="arrow-right" href="projects.html">View the world map</Button>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  const [sent, setSent] = useStateS(false);
  const [scope, setScope] = useStateS('');
  useEffectS(() => {
    try {
      const raw = sessionStorage.getItem('ska_engagement');
      if (raw) {
        const arr = JSON.parse(raw);
        if (Array.isArray(arr) && arr.length) setScope('Requested engagement: ' + arr.join(', ') + '.');
        sessionStorage.removeItem('ska_engagement');
      }
    } catch (e) {}
  }, []);
  useLucide(sent);
const submit = async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) setSent(true);
  } catch (err) {
    console.error('Error:', err);
  }
};
  return (
    <section className="contact" id="contact">
      <div className="contact__grid-bg"></div>
      <div className="wrap">
        <SectionHead index="04" eyebrow="Consultation" copper light />
        <div className="contact__layout">
          <div className="contact__intro">
            <h2 className="contact__title">Let's shape what comes next.</h2>
            <p className="contact__lead">Start a conversation about your project, your operations, or your next market. Direct, results-focused, grounded in four decades of global delivery.</p>
            <div className="contact__rows">
              <a className="crow" href="mailto:syedkamranazmi@yahoo.com"><i data-lucide="mail"></i><span>syedkamranazmi@yahoo.com</span></a>
              <a className="crow" href="#"><i data-lucide="linkedin"></i><span>linkedin.com/in/kamran-azmi</span></a>
            </div>
          </div>
          <div className="form">
            {sent ? (
              <div className="form__done">
                <span className="form__burst"><i data-lucide="check"></i></span>
                <h4>Request received</h4>
                <p>Thank you — Syed's office will be in touch within two business days.</p>
                <button className="form__again" onClick={() => setSent(false)}>Send another</button>
              </div>
            ) : (
              <form className="form__grid" onSubmit={submit}>
                <div className="field"><label>Name</label><input name="name" required placeholder="Your full name" /></div>
                <div className="field"><label>Email</label><input name="email" required type="email" placeholder="you@company.com" /></div>
                <div className="field"><label>Phone</label><input name="phone" type="tel" placeholder="+1 234 567 890" /></div>
                <div className="field"><label>Company</label><input name="company" placeholder="Organization" /></div>
                <div className="field full"><label>Project Scope</label><textarea name="scope" rows="2" value={scope} onChange={(e) => setScope(e.target.value)} placeholder="Tell us about your project…"></textarea></div>
                <div className="field full"><label>Preferred Contact</label>
                  <select name="preferred" defaultValue=""><option value="" disabled>Select a method</option><option>Email</option><option>Phone</option><option>WhatsApp</option></select>
                </div>
                <div className="field full"><Button type="submit" icon="arrow-right" full>Schedule a Consultation</Button></div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ServicesTeaser, ReachTeaser, Contact });
