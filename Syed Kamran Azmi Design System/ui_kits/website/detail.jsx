/* Project detail page components */
const { useState: useStateD, useEffect: useEffectD, useRef: useRefD } = React;

function getProject() {
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  return PROJECTS.find((p) => p.id === id) || PROJECTS[0];
}

/* Parallax dark hero — name, location, sector */
function ProjectHero({ p }) {
  const bg = useRefD(null);
  useEffectD(() => {
    const on = () => { if (bg.current) bg.current.style.transform = `translateY(${window.scrollY * 0.32}px) scale(1.08)`; };
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useLucide();
  return (
    <header className="dhero">
      <div ref={bg} className={`dhero__bg tone${p.tone}`}>
        {p.img
          ? <img className="dhero__photo" src={p.img} alt={p.name} />
          : <React.Fragment><div className="proj-card__grid"></div><i data-lucide={p.ico}></i></React.Fragment>}
      </div>
      <div className="dhero__scrim"></div>
      <div className="wrap dhero__inner">
        <a className="dhero__back" href="index.html#featured"><i data-lucide="arrow-left" style={{ width: 15, height: 15 }}></i> All Projects</a>
        <span className="dhero__sector">{p.sector}</span>
        <h1 className="dhero__title">{p.fullName}</h1>
        <span className="dhero__loc"><i data-lucide="map-pin" style={{ width: 15, height: 15 }}></i> {p.loc}</span>
      </div>
    </header>
  );
}

/* Project showcase — a uniform-size scrolling slideshow of all photos */
function ProjectShowcase({ p }) {
  const gallery = (p.gallery && p.gallery.length) ? p.gallery : (p.img ? [p.img] : []);
  const n = gallery.length;
  const [i, setI] = useStateD(0);
  const [paused, setPaused] = useStateD(false);
  const go = (d) => setI((v) => (v + d + n) % n);
  useEffectD(() => {
    if (paused || n < 2) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), 5000);
    return () => clearInterval(t);
  }, [paused, n]);
  useLucide(i);

  if (!n) {
    return (
      <section className="dshow">
        <div className="wrap"><ProjMedia p={p} className="dshow__media" showName /></div>
      </section>
    );
  }

  return (
    <section className="dshow">
      <div className="wrap">
        <div className="dslides" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="dslides__viewport">
            <div className="dslides__track" style={{ transform: `translateX(-${i * 100}%)` }}>
              {gallery.map((src, k) => (
                <div className="dslides__slide" key={src}>
                  <img src={src} alt={`${p.name} — view ${k + 1}`} loading={k === 0 ? 'eager' : 'lazy'} />
                </div>
              ))}
            </div>
            {n > 1 && (
              <React.Fragment>
                <button className="dslides__nav prev" onClick={() => go(-1)} aria-label="Previous photo"><i data-lucide="chevron-left"></i></button>
                <button className="dslides__nav next" onClick={() => go(1)} aria-label="Next photo"><i data-lucide="chevron-right"></i></button>
                <span className="dslides__count">{String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}</span>
              </React.Fragment>
            )}
          </div>
          {n > 1 && (
            <div className="dslides__dots">
              {gallery.map((src, k) => (
                <button key={src} className={k === i ? 'on' : ''} onClick={() => setI(k)} aria-label={`Photo ${k + 1}`}></button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* Overview: brief description + sector facts + expertise tags */
function ProjectOverview({ p }) {
  useLucide();
  const hasDesc = p.desc && p.desc.trim().length > 0;
  return (
    <section className="doverview">
      <div className="wrap doverview__grid">
        <Reveal>
          <SectionHead index="01" eyebrow="Overview" />
          {hasDesc ? (
            <p className="doverview__lead">{p.desc}</p>
          ) : (
            <p className="doverview__lead">A {p.rawSector.toLowerCase()} engagement in {p.loc}, delivered under the direction of Kamran Azmi with full operational and delivery leadership.</p>
          )}
        </Reveal>
        <Reveal delay={120} className="doverview__facts">
          <span className="doverview__facts-h">Project Facts</span>
          <ul>
            <li><span className="k">Location</span><span className="v">{p.loc}</span></li>
            <li><span className="k">Sector</span><span className="v">{p.rawSector}</span></li>
            <li><span className="k">Disciplines</span><span className="v">{p.expertise.length} areas of expertise</span></li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* Areas of Expertise — tag list */
function ProjectExpertise({ p }) {
  useLucide();
  return (
    <section className="dexpertise">
      <div className="wrap">
        <SectionHead index="02" eyebrow="Capabilities Applied" title="Areas of expertise" max="20em" />
        <div className="dtags">
          {p.expertise.map((ex, i) => (
            <Reveal key={ex} delay={(i % 5) * 50} as="span" className="dtag">
              <i data-lucide="check" style={{ width: 14, height: 14 }}></i> {ex}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Related projects — 3 from the same sector */
function RelatedProjects({ current }) {
  const rel = relatedBySector(current, 3);
  if (!rel.length) return null;
  return (
    <section className="drelated">
      <div className="wrap">
        <SectionHead index="03" eyebrow="More Work" title={`More ${current.sector.toLowerCase()} projects`} />
        <div className="drelated__grid">
          {rel.map((p, i) => (
            <Reveal key={p.id} delay={i * 90}><ProjectCard p={p} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCTA() {
  return (
    <section className="dcta">
      <div className="dcta__grid-bg"></div>
      <div className="wrap dcta__inner">
        <Eyebrow light copper>Consultation</Eyebrow>
        <h2 className="dcta__title">Planning a project of this scale?</h2>
        <p className="dcta__lead">Bring four decades of global delivery experience to your next build.</p>
        <Button icon="arrow-right" href="index.html#contact">Start a Consultation</Button>
      </div>
    </section>
  );
}

Object.assign(window, { getProject, ProjectHero, ProjectShowcase, ProjectOverview, ProjectExpertise, RelatedProjects, ProjectCTA });
