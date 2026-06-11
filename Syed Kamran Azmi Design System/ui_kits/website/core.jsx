/* ============================================================
   Core primitives — shared across all pages (window-exported)
   ============================================================ */
const { useState, useEffect, useRef, useCallback } = React;

function useLucide(dep) {
  useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
}

/* ---- Eyebrow ---- */
function Eyebrow({ children, copper, light, style }) {
  return (
    <span className="eyebrow" style={{ color: copper ? 'var(--copper)' : (light ? 'var(--teal-300)' : 'var(--teal)'), ...style }}>
      {children}
    </span>
  );
}

/* ---- Section head: copper index + eyebrow + serif title ---- */
function SectionHead({ index, eyebrow, title, copper, light, center, max, children }) {
  return (
    <div className={`sec-head ${center ? 'sec-head--center' : ''} ${light ? 'sec-head--light' : ''}`}>
      <div className="sec-head__ix">
        {index && <span className="sec-head__num">{index}</span>}
        <Eyebrow copper={copper} light={light}>{eyebrow}</Eyebrow>
      </div>
      {title && <h2 className="sec-head__title" style={max ? { maxWidth: max } : null}>{title}</h2>}
      {children}
    </div>
  );
}

/* ---- Button with click ripple + chamfer (styled in CSS) ---- */
function Button({ variant = 'primary', icon, children, onClick, href, type, full }) {
  const ref = useRef(null);
  const ripple = (e) => {
    const el = ref.current; if (!el) return;
    const r = document.createElement('span');
    r.className = 'btn__ripple';
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    r.style.width = r.style.height = size + 'px';
    r.style.left = (e.clientX - rect.left - size / 2) + 'px';
    r.style.top = (e.clientY - rect.top - size / 2) + 'px';
    el.appendChild(r);
    setTimeout(() => r.remove(), 600);
  };
  const Tag = href ? 'a' : 'button';
  return (
    <Tag ref={ref} href={href} type={href ? undefined : (type || 'button')}
      className={`btn btn--${variant} ${full ? 'btn--full' : ''}`}
      onClick={(e) => { ripple(e); onClick && onClick(e); }}>
      <span className="btn__label">{children}</span>
      {icon && <i data-lucide={icon}></i>}
    </Tag>
  );
}

/* ---- Animated counter (resilient: IO + in-view + failsafe) ---- */
function Counter({ to, suffix = '', prefix = '', duration = 1700, decimals = 0 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const run = () => {
      if (started.current) return; started.current = true;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(eased * to);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    let io;
    try {
      io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) run(); }), { threshold: 0.4 });
      io.observe(el);
    } catch (e) {}
    const r = el.getBoundingClientRect();
    if (r.top < (window.innerHeight || 800) && r.bottom > 0) run();
    const fb = setTimeout(run, 1500);
    return () => { io && io.disconnect(); clearTimeout(fb); };
  }, [to, duration]);
  const shown = decimals ? val.toFixed(decimals) : Math.round(val);
  return <span ref={ref}>{prefix}{shown}{suffix}</span>;
}

/* ---- Scroll reveal (resilient) ---- */
function Reveal({ children, delay = 0, as = 'div', className = '', style }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    let io;
    try {
      io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }), { threshold: 0.12 });
      io.observe(el);
    } catch (e) {}
    const r = el.getBoundingClientRect();
    if (r.top < (window.innerHeight || 800) && r.bottom > 0) setShown(true);
    const fb = setTimeout(() => setShown(true), 1300);
    return () => { io && io.disconnect(); clearTimeout(fb); };
  }, []);
  const Tag = as;
  return (
    <Tag ref={ref} className={`reveal ${shown ? 'is-in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </Tag>
  );
}

/* ---- Photo slot (gradient placeholder, optional parallax) ---- */
function Photo({ label, icon = 'image', tone = 0, className = '', style, children }) {
  return (
    <div className={`photo tone${tone} ${className}`} style={style}>
      <div className="photo__grid"></div>
      {label && <><i data-lucide={icon}></i><span>{label}</span></>}
      {children}
    </div>
  );
}

/* ---- Project media: real image when present, else a branded
   placeholder square stamped with the project name ---- */
function ProjMedia({ p, className = '', showName = true, children }) {
  if (p.img) {
    return (
      <div className={`pmedia pmedia--img ${className}`}>
        <img src={p.img} alt={p.name} loading="lazy" />
        {children}
      </div>
    );
  }
  return (
    <div className={`pmedia tone${p.tone} ${className}`}>
      <div className="proj-card__grid"></div>
      <i data-lucide={p.ico} className="pmedia__ico"></i>
      {showName && <span className="pmedia__name">{p.name}</span>}
      {children}
    </div>
  );
}

/* ---- Custom geometric cursor (skips touch devices) ---- */
function Cursor() {
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    const dot = document.createElement('div'); dot.className = 'cur cur--dot';
    const ring = document.createElement('div'); ring.className = 'cur cur--ring';
    document.body.appendChild(dot); document.body.appendChild(ring);
    document.body.classList.add('has-cursor');
    let rx = 0, ry = 0, x = 0, y = 0;
    const move = (e) => { x = e.clientX; y = e.clientY; dot.style.transform = `translate(${x}px,${y}px)`; };
    const loop = () => { rx += (x - rx) * 0.18; ry += (y - ry) * 0.18; ring.style.transform = `translate(${rx}px,${ry}px)`; requestAnimationFrame(loop); };
    const over = (e) => { if (e.target.closest('a,button,.proj-card,.svc-card,.region,.chip,input,select,textarea,[data-hover]')) ring.classList.add('is-hot'); };
    const out = (e) => { if (e.target.closest('a,button,.proj-card,.svc-card,.region,.chip,input,select,textarea,[data-hover]')) ring.classList.remove('is-hot'); };
    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);
    loop();
    return () => { window.removeEventListener('mousemove', move); document.removeEventListener('mouseover', over); document.removeEventListener('mouseout', out); dot.remove(); ring.remove(); document.body.classList.remove('has-cursor'); };
  }, []);
  return null;
}

/* ---- Scroll progress: vertical "build" bar ---- */
function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? (h.scrollTop || window.scrollY) / max : 0);
    };
    window.addEventListener('scroll', on, { passive: true }); on();
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <div className="scrollprog" aria-hidden="true">
      <span className="scrollprog__pct">{String(Math.round(p * 100)).padStart(2, '0')}</span>
      <div className="scrollprog__track"><div className="scrollprog__fill" style={{ height: (p * 100) + '%' }}></div></div>
    </div>
  );
}

Object.assign(window, { useLucide, Eyebrow, SectionHead, Button, Counter, Reveal, Photo, ProjMedia, Cursor, ScrollProgress });
