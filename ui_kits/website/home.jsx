/* Homepage — Hero + Featured Projects (full grid + sector filter) */
const { useState: useStateH, useEffect: useEffectH, useRef: useRefH, useMemo } = React;

/* ---------- HERO ---------- */
function Hero({ onNav }) {
  useLucide();
  return (
    <header className="hero" id="top">
      <div className="hero__photo tone0" aria-hidden="true"></div>
      <div className="hero__scrim" aria-hidden="true"></div>
      <div className="grain" aria-hidden="true"></div>
      <span className="hero__tag" aria-hidden="true">Portfolio · 1985 — 2025</span>
      <div className="wrap hero__inner">
        <Eyebrow light style={{ color: '#e3a877' }}>Executive Construction Advisory · 40+ Years</Eyebrow>
        <h1 className="hero__title">Shaping the<br /><em>Cities</em> of Tomorrow</h1>
        <p className="hero__lead">A projects-first advisory built on four decades of delivering landmark structures across global regions — residential, commercial, mixed-use, office, and hospitality.</p>
        <div className="hero__cta">
          <Button icon="arrow-right" href="#featured">Explore Projects</Button>
          <Button variant="ghost-dark" icon="calendar" href="index.html#contact">Start a Consultation</Button>
        </div>
        <div className="hero__stats">
          {[{ n: 40, s: '+', c: 'Years' }, { n: 4, s: '', c: 'Continents' }, { n: 5, s: 'x', c: 'Revenue' }, { n: 400, s: '%', c: 'Ready-Mix Growth' }].map((x, i) => (
            <div className="hero__stat" key={i}><span className="num"><Counter to={x.n} suffix={x.s} /></span><span className="cap">{x.c}</span></div>
          ))}
        </div>
      </div>
      <div className="hero__ticker">
        <div className="hero__ticker-track">
          {[...Array(2)].map((_, r) => (
            <span key={r}>
              {PROJECTS.map((p) => <em key={p.id}>{p.name}<i>·</i>{p.city}<b></b></em>)}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}

/* ---------- PROJECT CARD (links to detail page) ---------- */
function ProjectCard({ p, big }) {
  const ref = useRefH(null);
  const onMove = (e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - r.left) / r.width - 0.5;
    const dy = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--px', (dx * 10).toFixed(2) + 'px');
    el.style.setProperty('--py', (dy * 10).toFixed(2) + 'px');
  };
  const onLeave = () => { const el = ref.current; if (el) { el.style.setProperty('--px', '0px'); el.style.setProperty('--py', '0px'); } };
  useLucide();
  return (
    <a ref={ref} className={`proj-card ${big ? 'proj-card--big' : ''}`} href={`project.html?id=${p.id}`} onMouseMove={onMove} onMouseLeave={onLeave} data-hover>
      <ProjMedia p={p} className="proj-card__media">
        <span className="proj-card__sector">{p.sector}</span>
        <span className="proj-card__bar"></span>
      </ProjMedia>
      <div className="proj-card__body">
        <span className="proj-card__loc"><i data-lucide="map-pin" style={{ width: 12, height: 12 }}></i> {p.loc}</span>
        <h3 className="proj-card__name">{p.name}</h3>
        <span className="proj-card__more">View project <i data-lucide="arrow-up-right" style={{ width: 15, height: 15 }}></i></span>
      </div>
    </a>
  );
}

/* ---------- FEATURED SLIDESHOW (homepage — 5 signature projects) ---------- */
const SLIDESHOW_IDS = ['pointe-anglaise', 'okapi', 'doha-festival', 'attock-oil', 'msheireb'];

function FeaturedSlideshow() {
  const slides = useMemo(() => SLIDESHOW_IDS.map((id) => PROJECTS.find((p) => p.id === id)).filter(Boolean), []);
  const n = slides.length;
  const [i, setI] = useStateH(0);
  const [paused, setPaused] = useStateH(false);
  const go = (d) => setI((v) => (v + d + n) % n);
  useEffectH(() => {
    if (paused || n < 2) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), 5500);
    return () => clearInterval(t);
  }, [paused, n]);
  useLucide(i);
  return (
    <section className="featured" id="featured">
      <div className="wrap">
        <div className="featured__head">
          <SectionHead index="01" eyebrow="Landmark Projects" title="A selection of signature work" max="20em" />
          <a className="featured__all-link" href="projects.html">View All Projects <i data-lucide="arrow-right" style={{ width: 16, height: 16 }}></i></a>
        </div>
        <div className="carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="carousel__track" style={{ transform: `translateX(-${i * 100}%)` }}>
            {slides.map((p) => (
              <div className="carousel__slide" key={p.id}>
                <a className={`carousel__media tone${p.tone}${p.img ? ' carousel__media--img' : ''}`} href={`project.html?id=${p.id}`} data-hover>
                  {p.img ? (
                    <img className="carousel__photo" src={p.img} alt={p.name} />
                  ) : (
                    <React.Fragment>
                      <div className="proj-card__grid"></div>
                      <i data-lucide={p.ico} className="carousel__ico"></i>
                      <span className="carousel__media-name">{p.name}</span>
                    </React.Fragment>
                  )}
                </a>
                <div className="carousel__caption">
                  <span className="carousel__era">{p.sector} · {p.loc}</span>
                  <h3 className="carousel__name">{p.name}</h3>
                  <p className="carousel__type">{p.desc ? p.desc.slice(0, 132).trim() + '…' : `A ${p.rawSector.toLowerCase()} project delivered in ${p.loc}.`}</p>
                  <a className="carousel__cta" href={`project.html?id=${p.id}`} data-hover>View Project <i data-lucide="arrow-right" style={{ width: 15, height: 15 }}></i></a>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel__nav prev" onClick={() => go(-1)} aria-label="Previous project"><i data-lucide="chevron-left"></i></button>
          <button className="carousel__nav next" onClick={() => go(1)} aria-label="Next project"><i data-lucide="chevron-right"></i></button>
        </div>
        <div className="carousel__dots">
          {slides.map((p, k) => <span key={p.id} className={k === i ? 'on' : ''} onClick={() => setI(k)} data-hover aria-label={`Go to slide ${k + 1}`}></span>)}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, FeaturedSlideshow, ProjectCard });
