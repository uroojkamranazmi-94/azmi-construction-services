/* Global Reach page — real dotted world map + regional breakdown */
const { useState: useStateR, useEffect: useEffectR, useMemo: useMemoR, useRef: useRefR } = React;

/* ---------- Equirectangular world, cropped to populated latitudes ----------
   x = lng + 180  (0..360)      y = TOP - lat   (TOP=83, BOTTOM=-56 -> H=139)   */
const MAP_W = 360, MAP_TOP = 83, MAP_BOTTOM = -56, MAP_H = MAP_TOP - MAP_BOTTOM;
const projX = (lng) => lng + 180;
const projY = (lat) => MAP_TOP - lat;
const pctX = (lng) => (projX(lng) / MAP_W) * 100;
const pctY = (lat) => (projY(lat) / MAP_H) * 100;

/* Land approximated as a union of ellipses in (lng,lat) degrees — {cx,cy,rx,ry} */
const LAND = [
  // North America
  [-100,58,34,15],[-98,40,22,12],[-150,63,15,8],[-112,30,10,12],[-101,20,8,8],
  [-86,13,8,4.5],[-82,33,8,10],[-122,52,10,8],
  // Greenland
  [-42,72,13,9],
  // South America
  [-63,-3,17,12],[-60,-18,13,12],[-67,-37,8,12],[-71,-49,4,6],
  // Europe
  [6,48,16,10],[28,52,22,11],[18,63,12,9],[-3,54,4.5,5],[-5,40,7,6],[18,42,12,7],
  // Africa
  [15,22,28,13],[-2,11,12,10],[22,2,18,14],[25,-22,13,12],[45,8,8,9],[24,-31,7,5],
  // Middle East
  [47,24,12,11],[38,37,12,7],[55,32,10,8],
  // Asia
  [60,58,22,13],[100,62,40,15],[140,62,18,10],[68,46,20,11],[105,34,18,12],
  [103,47,15,7],[78,23,11,12],[101,15,9,10],[126,38,5.5,7],
  // Japan
  [139,38,4.5,8],
  // Oceania / island arcs
  [110,-3,15,5],[122,6,9,9],[140,-6,10,4.5],[134,-25,18,11],[172,-42,3.5,6],[47,-20,4,9],
];
const isLand = (lng, lat) => LAND.some(([cx, cy, rx, ry]) => {
  const a = (lng - cx) / rx, b = (lat - cy) / ry; return a * a + b * b <= 1;
});

/* Pre-compute the dot field once */
const DOT_STEP = 3.2;
const MAP_DOTS = (() => {
  const dots = [];
  for (let lat = MAP_TOP - 1; lat > MAP_BOTTOM; lat -= DOT_STEP) {
    for (let lng = -179; lng < 180; lng += DOT_STEP) {
      if (isLand(lng, lat)) dots.push([projX(lng).toFixed(1), projY(lat).toFixed(1)]);
    }
  }
  return dots;
})();

function WorldMap({ activeRegion, onRegionPick, projects }) {
  useLucide(activeRegion);
  /* scatter pins that share a city so stacked projects stay clickable */
  const placed = useMemoR(() => {
    const groups = {};
    projects.forEach((p) => { (groups[p.locationKey] = groups[p.locationKey] || []).push(p); });
    const out = [];
    Object.values(groups).forEach((arr) => {
      const n = arr.length;
      arr.forEach((p, i) => {
        let dx = 0, dy = 0;
        if (n > 1) {
          const ring = 2.4;
          const ang = (i / n) * Math.PI * 2;
          dx = Math.cos(ang) * ring;
          dy = Math.sin(ang) * ring;
        }
        out.push({ ...p, _x: pctX(p.lng + dx), _y: pctY(p.lat + dy) });
      });
    });
    return out;
  }, [projects]);
  return (
    <div className="wmap">
      <div className="wmap__frame">
        <svg className="wmap__svg" viewBox={`0 0 ${MAP_W} ${MAP_H}`} preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          {MAP_DOTS.map((d, i) => <circle key={i} cx={d[0]} cy={d[1]} r="0.62" className="wmap__dot" />)}
        </svg>
        <div className="wmap__pins">
          {placed.map((p) => {
            const on = !activeRegion || activeRegion === p.region;
            return (
              <a key={p.id} className={`wpin ${on ? '' : 'dim'} ${activeRegion === p.region ? 'hot' : ''}`}
                href={`project.html?id=${p.id}`}
                style={{ left: p._x + '%', top: p._y + '%' }}
                onMouseEnter={() => onRegionPick(p.locationKey)} data-hover>
                <span className="wpin__ring"></span>
                <span className="wpin__dot"></span>
                <span className="wpin__tip">
                  <strong>{p.name}</strong>
                  <em>{p.city} · {p.country}</em>
                </span>
              </a>
            );
          })}
        </div>
        <span className="wmap__corner tl"></span><span className="wmap__corner tr"></span>
        <span className="wmap__corner bl"></span><span className="wmap__corner br"></span>
      </div>
      <p className="wmap__hint"><i data-lucide="mouse-pointer-click" style={{ width: 13, height: 13 }}></i> Hover a marker to focus its city · click to open the project</p>
    </div>
  );
}

/* ---------- REACH HERO ---------- */
function ReachHero() {
  const bg = useRefR(null);
  useEffectR(() => {
    const on = () => { if (bg.current) bg.current.style.transform = `translateY(${window.scrollY * 0.28}px) scale(1.08)`; };
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useLucide();
  return (
    <header className="ahero reach-hero">
      <div ref={bg} className="ahero__bg" aria-hidden="true"><div className="proj-card__grid"></div><i data-lucide="globe-2"></i></div>
      <div className="dhero__scrim"></div>
      <div className="wrap ahero__inner">
        <a className="dhero__back" href="index.html"><i data-lucide="arrow-left" style={{ width: 15, height: 15 }}></i> Home</a>
        <span className="dhero__sector">Global Reach</span>
        <h1 className="ahero__title">Projects across<br />five regions, three countries</h1>
        <span className="ahero__role">Four decades of delivery spanning Central Africa, the Gulf, and South Asia.</span>
      </div>
    </header>
  );
}

/* ---------- MAP + LOCATION SELECTOR ---------- */
function ReachMapSection() {
  const [locKey, setLocKey] = useStateR(LOCATION_GROUPS[0].key);
  useLucide(locKey);
  const cur = LOCATION_GROUPS.find((l) => l.key === locKey);
  return (
    <section className="reach2" id="reach">
      <div className="wrap">
        <SectionHead index="01" eyebrow="Where the work has taken us" light max="22em" />
        <div className="reach2__tabs">
          {LOCATION_GROUPS.map((l) => (
            <button key={l.key} className={`reach2__tab ${locKey === l.key ? 'on' : ''}`} onClick={() => setLocKey(l.key)}>
              <span className="reach2__tab-n">{l.city}</span>
              <span className="reach2__tab-c">{l.projects.length} project{l.projects.length > 1 ? 's' : ''}</span>
            </button>
          ))}
        </div>
        <WorldMap activeRegion={locKey} onRegionPick={setLocKey} projects={PROJECTS} />
        <div className="reach2__panel">
          <div className="reach2__panel-head">
            <div>
              <span className="reach2__kicker">{cur.country}</span>
              <h3 className="reach2__name">{cur.city}</h3>
            </div>
            <div className="reach2__stats">
              <div className="reach2__stat"><span className="v"><Counter to={cur.projects.length} /></span><span className="k">Projects</span></div>
            </div>
          </div>
          <p className="reach2__note">{cur.projects.length} project{cur.projects.length > 1 ? 's' : ''} delivered in {cur.city}, {cur.country}.</p>
          <div className="reach2__projects">
            {cur.projects.map((p) => (
              <a key={p.id} className="reach2__proj" href={`project.html?id=${p.id}`} data-hover>
                <span className={`reach2__proj-ic tone${p.tone}`}><i data-lucide={p.ico} style={{ width: 18, height: 18 }}></i></span>
                <span className="reach2__proj-bd">
                  <span className="reach2__proj-n">{p.name}</span>
                  <span className="reach2__proj-m">{p.sector}</span>
                </span>
                <i data-lucide="arrow-up-right" className="reach2__proj-go" style={{ width: 16, height: 16 }}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- REGIONAL SUMMARY STRIP ---------- */
function ReachSummary() {
  useLucide();
  const totals = [
    { v: 5, s: '', k: 'Cities Delivered' },
    { v: 3, s: '', k: 'Countries' },
    { v: 18, s: '', k: 'Landmark Projects' },
    { v: 40, s: '+', k: 'Years Delivering' },
  ];
  return (
    <section className="rsum">
      <div className="wrap">
        <SectionHead index="02" eyebrow="At a glance" title="A genuinely global delivery record" max="20em" />
        <div className="rsum__grid">
          {totals.map((t) => (
            <Reveal key={t.k} className="rsum__cell" as="div">
              <span className="rsum__v"><Counter to={t.v} suffix={t.s} /></span>
              <span className="rsum__k">{t.k}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function ReachCTA() {
  useLucide();
  return (
    <section className="dcta">
      <div className="dcta__grid-bg"></div>
      <div className="wrap dcta__inner">
        <Eyebrow copper light>Entering a new market?</Eyebrow>
        <h2 className="dcta__title">Cross-border delivery, de-risked.</h2>
        <p className="dcta__lead">Procurement, compliance, quality, and team-building — set up right, from the ground up.</p>
        <Button icon="arrow-right" href="consultation.html">Start a Consultation</Button>
      </div>
    </section>
  );
}

Object.assign(window, { ReachHero, ReachMapSection, ReachSummary, ReachCTA });
