/* About page components */
const { useState: useStateA, useEffect: useEffectA, useRef: useRefA } = React;

function AboutHero() {
  const bg = useRefA(null);
  useEffectA(() => {
    const on = () => { if (bg.current) bg.current.style.transform = `translateY(${window.scrollY * 0.3}px) scale(1.08)`; };
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useLucide();
  return (
    <header className="ahero">
      <div ref={bg} className="ahero__bg tone1"><div className="proj-card__grid"></div><i data-lucide="user"></i></div>
      <div className="dhero__scrim"></div>
      <div className="wrap ahero__inner">
        <a className="dhero__back" href="index.html"><i data-lucide="arrow-left" style={{ width: 15, height: 15 }}></i> Home</a>
        <span className="dhero__sector">About</span>
        <h1 className="ahero__title">Kamran Azmi</h1>
        <span className="ahero__role">Founder · Azmi Construction Services</span>
      </div>
    </header>
  );
}

/* ============================================================
   PhotoUploader — interactive, user-fillable photo tool.
   Drag-and-drop (or click) to add images; multiple supported.
   Persists to localStorage (downscaled), so drops survive
   reloads. Single mode = one swappable frame; multi mode =
   main frame + thumbnail rail + lightbox with prev/next.
   ============================================================ */
/* ============================================================
   PhotoGallery — display-only, seamless sliding gallery.
   Arrow buttons + dots + thumbnail rail + Ken-Burns active
   slide + click-to-zoom lightbox. Auto-advances, pauses on
   hover. No upload affordance.
   ============================================================ */
function PhotoGallery({ photos = [], tone = 1, ico = 'image', aspect, label = 'Photo' }) {
  const [i, setI] = useStateA(0);
  const [box, setBox] = useStateA(false);
  const [paused, setPaused] = useStateA(false);
  const n = photos.length;
  const go = (d) => setI((v) => (v + d + n) % n);

  useEffectA(() => {
    if (paused || box || n < 2) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), 5200);
    return () => clearInterval(t);
  }, [paused, box, n]);
  useLucide(i, box, n);

  if (!n) {
    return (
      <div className="pgallery">
        <div className="pgallery__main" style={aspect ? { aspectRatio: aspect } : null}>
          <div className={`pgallery__empty tone${tone}`}><div className="proj-card__grid"></div><i data-lucide={ico}></i></div>
        </div>
      </div>
    );
  }

  return (
    <div className="pgallery" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="pgallery__main" style={aspect ? { aspectRatio: aspect } : null}>
        <div className="pgallery__track" style={{ transform: `translateX(-${i * 100}%)` }}>
          {photos.map((src, k) => (
            <div className={`pgallery__slide ${k === i ? 'on' : ''}`} key={k}>
              <img src={src} alt={`${label} ${k + 1}`} loading={k === 0 ? 'eager' : 'lazy'} />
            </div>
          ))}
        </div>
        <button className="pgallery__expand" onClick={() => setBox(true)} aria-label="View larger"><i data-lucide="maximize-2"></i></button>
        {n > 1 && (
          <React.Fragment>
            <button className="pgallery__arrow prev" onClick={() => go(-1)} aria-label="Previous photo"><i data-lucide="chevron-left"></i></button>
            <button className="pgallery__arrow next" onClick={() => go(1)} aria-label="Next photo"><i data-lucide="chevron-right"></i></button>
            <span className="pgallery__count">{i + 1} / {n}</span>
            <div className="pgallery__dots">
              {photos.map((s, k) => <button key={k} className={k === i ? 'on' : ''} onClick={() => setI(k)} aria-label={`Photo ${k + 1}`}></button>)}
            </div>
          </React.Fragment>
        )}
      </div>

      {n > 1 && (
        <div className="pgallery__rail">
          {photos.map((src, k) => (
            <button key={k} className={`pgthumb ${k === i ? 'on' : ''}`} onClick={() => setI(k)} aria-label={`Photo ${k + 1}`}><img src={src} alt="" loading="lazy" /></button>
          ))}
        </div>
      )}

      {box && (
        <div className="jt__lightbox" onClick={() => setBox(false)}>
          <button className="jt__close" onClick={() => setBox(false)} aria-label="Close"><i data-lucide="x"></i></button>
          <div className="jt__lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <div className="pmedia pmedia--img jt__lightbox-photo"><img src={photos[i]} alt={label} /></div>
            {n > 1 && (
              <React.Fragment>
                <button className="jt__lb-nav prev" onClick={() => go(-1)} aria-label="Previous"><i data-lucide="chevron-left"></i></button>
                <button className="jt__lb-nav next" onClick={() => go(1)} aria-label="Next"><i data-lucide="chevron-right"></i></button>
                <span className="jt__lb-count">{i + 1} / {n}</span>
              </React.Fragment>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function Bio() {
  return (
    <section className="bio">
      <div className="wrap bio__grid">
        <Reveal>
          <SectionHead index="01" eyebrow="My Story" title="Building Excellence Across Continents" />
        </Reveal>
        <Reveal delay={100} className="bio__body">
          <p>Kamran Azmi's 40-year career spans construction, real estate development, and operations leadership across five continents. He has progressed from technical mastery to strategic enterprise leadership, managing multimillion-dollar projects, multinational teams, and complex international operations.</p>
          <p>A recognized specialist in ready-mix concrete operations, he has repeatedly transformed batching plants into high-margin profit centers across multiple markets, applying strategic operational discipline and P&L management to drive substantial profitability gains.</p>
          <p>His trajectory reflects disciplined growth: each role building on the last, each region expanding his understanding of how to deliver excellence across different markets and operating environments. Today, he serves as an executive advisor to enterprises undertaking ambitious urban development projects globally.</p>
        </Reveal>
      </div>
      <div className="wrap">
        <Reveal delay={160} className="bio__photo">
          <PhotoGallery photos={['images/about/mystory.jpeg']} tone={1} ico="user" label="Kamran Azmi" aspect="21 / 9" />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- INTERACTIVE JOURNEY TIMELINE ---------- */
const JOURNEY = [
  { tag: 'Foundation', ico: 'graduation-cap', tone: 1,
    photos: ['images/about/foundation/2.jpeg', 'images/about/foundation/1.jpeg', 'images/about/foundation/6.jpeg', 'images/about/foundation/5.jpeg', 'images/about/foundation/4.jpeg', 'images/about/foundation/3.jpeg'],
    title: 'The Foundation', place: 'Kharkov Institute · USSR',
    text: 'As a teenager, Kamran Azmi earned a prestigious scholarship to study civil engineering at the Kharkov Institute of Civil Engineering in the former Soviet Union — one of Europe\u2019s most rigorous technical institutes. He emerged equipped with advanced training in building construction management and early exposure to international operating environments.' },
  { tag: 'Global Expertise', ico: 'globe', tone: 0,
    photos: ['images/about/operations/2.jpeg', 'images/about/operations/1.jpeg'],
    title: 'International Operations', place: 'Pakistan · Qatar · Kuwait · UAE',
    text: 'His career was built across multiple continents. He spent formative years in Pakistan, Qatar, Kuwait, and the UAE, translating technical mastery into operational leadership on demanding projects. Each region expanded his understanding of construction across different markets and cultures. Over the course of his career, he has become fluent in English, Russian, Urdu, and French, navigating different regional contexts with ease.' },
  { tag: 'Versatility', ico: 'layers', tone: 2,
    photos: ['images/about/leadership/2.jpeg', 'images/about/leadership/1.jpeg', 'images/about/leadership/redco-readymix.png', 'images/about/leadership/3.jpeg'],
    title: 'Diversified Leadership', place: 'Cross-Industry Operations',
    text: 'Throughout his career, Kamran developed expertise beyond traditional construction. He scaled ready-mix concrete operations into profit centers and managed textile manufacturing enterprises. This cross-industry experience gave him distinctive operational insight and an extensive global partnership network. He understands how to build businesses, not just buildings.' },
  { tag: 'South Asia', ico: 'building-2', tone: 1,
    photos: ['images/about/southasia/0.jpeg', 'images/about/southasia/redco-pump.png', 'images/about/southasia/banu-mukhtar-concrete.jpg', 'images/about/southasia/2.jpeg', 'images/about/southasia/1.jpeg', 'images/about/southasia/3.jpeg'],
    title: 'Building at Scale', place: 'Islamabad, Pakistan',
    text: 'He moved to Islamabad and led major high-rise residential and commercial developments. The work was complex: managing international standards on Pakistani sites, coordinating multinational teams, and navigating procurement across borders. His reputation grew with each delivered project. He is also a lifetime member of the Pakistan Engineering Council.' },
  { tag: 'the Middle East', ico: 'landmark', tone: 0,
    photos: ['images/about/doha/1.jpg', 'images/about/doha/2.jpg', 'images/about/doha/3.jpg'],
    title: 'Building Excellence', place: 'Qatar',
    text: 'For six years, he directed flagship projects across Qatar\u2019s rapid expansion — shopping malls, mixed-use developments, and hospitality complexes for major regional clients. Significant in scale and visibility, Doha refined his ability to manage world-class development on compressed timelines. It also deepened his command of ready-mix concrete production at scale — building on his Gulf experience as GM of ready-mix operations in Abu Dhabi (Redco Group) and as COO of the NLC-Izhar JV ready-mix concrete plants.' },
  { tag: 'Africa', ico: 'trending-up', tone: 2,
    photos: ['images/about/parkland/2.jpeg', 'images/about/parkland/p8.jpeg', 'images/about/parkland/6.jpeg', 'images/about/parkland/1.jpeg', 'images/about/parkland/p9.jpeg'],
    title: 'Building Systems, Not Just Buildings', place: 'Parkland · Kinshasa · 2021',
    text: 'In 2021, he took the helm at Parkland in Kinshasa. What he accomplished there defined his approach to leadership. He drove 400% growth in three years — scaling the company through strategic expansion into ready-mix concrete operations and in-house real estate development, transforming the batching plant into a high-profit revenue stream. He built operational systems where they didn\u2019t exist, mentored emerging leaders, and established standards of excellence in a challenging market.' },
  { tag: 'Your Project', ico: 'compass', tone: 1,
    photos: ['images/about/today/site-visit.jpeg', 'images/about/today/2.jpeg', 'images/about/today/3.jpeg'],
    title: 'Your Next Landmark Project', place: 'Azmi Construction Services',
    text: 'Azmi Construction Services exists for enterprises undertaking complex urban development across continents. Kamran brings operational rigor forged across 40 years of delivery — from technical execution to strategic scaling to cross-cultural team leadership. He has built in emerging markets and developed economies, scaled operations, managed risk across borders, and transformed ambitious visions into delivered reality. Whether you\u2019re expanding into new regions, managing multinational teams, or executing landmark projects, his expertise translates to your success.' },
];

function JourneyTimeline() {
  const [active, setActive] = useStateA(0);
  const n = JOURNEY.length;
  const c = JOURNEY[active];
  const go = (d) => setActive((v) => Math.min(n - 1, Math.max(0, v + d)));
  useEffectA(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') setActive((v) => Math.min(n - 1, v + 1));
      else if (e.key === 'ArrowLeft') setActive((v) => Math.max(0, v - 1));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [n]);
  useLucide(active);

  const fillPct = n > 1 ? (active / (n - 1)) * 100 : 0;

  return (
    <section className="journey">
      <div className="wrap">
        <SectionHead index="02" eyebrow="The Journey" max="18em" />

        <div className="jt">
          {/* rail */}
          <div className="jt__rail">
            <div className="jt__line"></div>
            <div className="jt__line-fill" style={{ width: `${fillPct}%` }}></div>
            {JOURNEY.map((ch, i) => (
              <button
                key={ch.tag}
                className={`jt__node ${i === active ? 'on' : ''} ${i < active ? 'done' : ''}`}
                onClick={() => setActive(i)}
                aria-label={ch.title}>
                <span className="jt__dot"><i data-lucide={ch.ico}></i></span>
                <span className="jt__label">{ch.tag}</span>
              </button>
            ))}
          </div>

          {/* stage */}
          <div className="jt__stage" key={active}>
            <div className="jt__media-col">
              <PhotoGallery photos={c.photos || []} tone={c.tone} ico={c.ico} label={c.title} />
            </div>
            <div className="jt__body">
              <span className="jt__chapno">Chapter {String(active + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}</span>
              <h3 className="jt__title">{c.title}</h3>
              <p className="jt__text">{c.text}</p>
              <div className="jt__nav">
                <button className="jt__btn" onClick={() => go(-1)} disabled={active === 0} aria-label="Previous chapter"><i data-lucide="arrow-left"></i></button>
                <button className="jt__btn" onClick={() => go(1)} disabled={active === n - 1} aria-label="Next chapter"><i data-lucide="arrow-right"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* stable per-chapter storage key */
function ch_key(c) { return c.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''); }

/* ---------- SKILLS SHOWCASE — portrait + grouped expertise ---------- */
const SKILL_GROUPS = [
  { h: 'Build & Deliver', ico: 'hard-hat', items: ['Construction Management', 'Project Leadership', 'Quality Assurance'] },
  { h: 'Operate & Scale', ico: 'trending-up', items: ['Operations & P&L Ownership', 'Ready-Mix Production', 'Strategic Planning'] },
  { h: 'Lead & Grow', ico: 'users', items: ['Workforce Development', 'International Procurement', 'Contract Negotiation'] },
];
function SkillsShowcase() {
  useLucide();
  return (
    <section className="skillshow">
      <div className="wrap skillshow__grid">
        <Reveal className="skillshow__left" as="div">
          <PhotoGallery photos={['images/about/skills-portrait.jpeg']} tone={1} ico="user" label="Kamran Azmi" aspect="4 / 5" />
          <div className="skillshow__badge">
            <span className="skillshow__badge-v">40<em>+</em></span>
            <span className="skillshow__badge-k">Years on the world's<br />most demanding sites</span>
          </div>
        </Reveal>
        <div className="skillshow__right">
          <SectionHead index="03" eyebrow="Skills & Expertise" title="Sharpened on site, proven at scale" max="16em" />
          <div className="skillshow__groups">
            {SKILL_GROUPS.map((g, i) => (
              <Reveal key={g.h} delay={i * 80} className="skillgroup" as="div">
                <div className="skillgroup__head">
                  <span className="skillgroup__ico"><i data-lucide={g.ico} style={{ width: 18, height: 18 }}></i></span>
                  <h4 className="skillgroup__h">{g.h}</h4>
                </div>
                <ul className="skillgroup__list">
                  {g.items.map((it) => <li key={it}><i data-lucide="check" style={{ width: 14, height: 14 }}></i> {it}</li>)}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Credentials() {
  useLucide();
  const cols = [
    { h: 'Expertise', items: ['Construction Management', 'Ready-Mix Concrete Operations', 'Real-Estate Development', 'Operations & P&L Leadership', 'International Procurement'] },
    { h: 'Recognition', items: ['5x Revenue Growth', '100+ Projects Delivered', 'Multinational Team Leadership', 'Landmark Structures'] },
    { h: 'Reach', items: ['Congo · Qatar · UAE', 'Pakistan · Ukraine', 'Cross-Border Delivery', 'Four World Regions'] },
  ];
  return (
    <section className="creds">
      <div className="wrap">
        <SectionHead index="04" eyebrow="Credentials" light title="Background & recognition" />
        <div className="creds__grid">
          {cols.map((c, i) => (
            <Reveal key={c.h} delay={i * 90} className="creds__col">
              <span className="creds__h">{c.h}</span>
              <ul>{c.items.map((it) => <li key={it}><i data-lucide="minus" style={{ width: 14, height: 14 }}></i> {it}</li>)}</ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { AboutHero, Bio, JourneyTimeline, SkillsShowcase, Credentials });
