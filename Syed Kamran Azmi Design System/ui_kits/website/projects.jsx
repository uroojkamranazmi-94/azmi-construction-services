/* Projects page — hero + searchable explorer (masonry grid) */
const { useState: useStateP, useEffect: useEffectP, useRef: useRefP, useMemo: useMemoP } = React;

/* ---------- HERO ---------- */
function ProjectsHero() {
  const bg = useRefP(null);
  useEffectP(() => {
    const on = () => { if (bg.current) bg.current.style.transform = `translateY(${window.scrollY * 0.28}px) scale(1.08)`; };
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useLucide();
  return (
    <header className="ahero projects-hero">
      <div ref={bg} className="ahero__bg" aria-hidden="true"><div className="proj-card__grid"></div><i data-lucide="layout-grid"></i></div>
      <div className="dhero__scrim"></div>
      <div className="wrap ahero__inner">
        <a className="dhero__back" href="index.html"><i data-lucide="arrow-left" style={{ width: 15, height: 15 }}></i> Home</a>
        <span className="dhero__sector">Projects &amp; Global Reach</span>
        <h1 className="ahero__title">A portfolio built<br />across global regions</h1>
        <span className="ahero__role">Explore where the work has taken us on the map, then search and filter the full body of work below.</span>
      </div>
    </header>
  );
}

/* ---------- EXPLORER (search + filter + masonry) ---------- */
function ProjectsExplorer() {
  const [q, setQ] = useStateP('');
  const [sector, setSector] = useStateP('All');
  useLucide(q, sector);
  const list = useMemoP(() => PROJECTS.filter((p) => {
    const ms = sector === 'All' || p.sectors.includes(sector);
    const hay = (p.name + ' ' + p.loc + ' ' + p.country + ' ' + p.sector + ' ' + p.expertise.join(' ')).toLowerCase();
    const mq = !q || hay.includes(q.toLowerCase());
    return ms && mq;
  }).sort((a, b) => a.rank - b.rank), [q, sector]);
  return (
    <section className="featured featured--page" id="projects">
      <div className="wrap">
        <SectionHead index="02" eyebrow="Landmark Projects" title="Selected highlights, ready to explore" max="26em">
          <p className="services__lead">Selected developments from an extensive portfolio spanning 40+ years across residential, commercial, industrial, mixed-use, and hospitality sectors globally.</p>
        </SectionHead>
        <div className="featured__controls">
          <div className="search">
            <i data-lucide="search"></i>
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search projects, places, sectors, expertise…" />
            {q && <button onClick={() => setQ('')} aria-label="Clear"><i data-lucide="x" style={{ width: 15, height: 15 }}></i></button>}
          </div>
          <div className="chips">
            {SECTORS.map((s) => <button key={s} className={`chip ${sector === s ? 'active' : ''}`} onClick={() => setSector(s)}>{s}</button>)}
          </div>
        </div>
        <div className="featured__count">{list.length} project{list.length !== 1 ? 's' : ''} shown</div>
        <div className="pgrid">
          {list.map((p, idx) => (
            <Reveal key={p.id} delay={(idx % 3) * 70} className="pgrid__item">
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>
        {list.length === 0 && <p className="featured__empty">No projects match — try a different search or filter.</p>}
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function ProjectsCTA() {
  useLucide();
  return (
    <section className="dcta">
      <div className="dcta__grid-bg"></div>
      <div className="wrap dcta__inner">
        <Eyebrow copper light>Have a project in mind?</Eyebrow>
        <h2 className="dcta__title">Let's deliver the next landmark.</h2>
        <p className="dcta__lead">Four decades of complex, multi-phase delivery — at your service.</p>
        <Button icon="arrow-right" href="index.html#contact">Start a Consultation</Button>
      </div>
    </section>
  );
}

Object.assign(window, { ProjectsHero, ProjectsExplorer, ProjectsCTA });
