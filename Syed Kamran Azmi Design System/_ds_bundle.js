/* @ds-bundle: {"format":3,"namespace":"SyedKamranAzmiDesignSystem_10e328","components":[],"sourceHashes":{"ui_kits/website/about.jsx":"44b9e3af9a3c","ui_kits/website/chrome.jsx":"b1cdf7c245d2","ui_kits/website/core.jsx":"455221a31e1e","ui_kits/website/data.jsx":"befd86063516","ui_kits/website/detail.jsx":"22517588778b","ui_kits/website/home.jsx":"4ef68693574b","ui_kits/website/home2.jsx":"ee1c2428467d","ui_kits/website/projects.jsx":"1e08162ed0e8","ui_kits/website/reach.jsx":"7fb0d41eaa11","ui_kits/website/services.jsx":"9942cc078a39"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SyedKamranAzmiDesignSystem_10e328 = window.SyedKamranAzmiDesignSystem_10e328 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/website/about.jsx
try { (() => {
/* About page components */
const {
  useState: useStateA,
  useEffect: useEffectA,
  useRef: useRefA
} = React;
function AboutHero() {
  const bg = useRefA(null);
  useEffectA(() => {
    const on = () => {
      if (bg.current) bg.current.style.transform = `translateY(${window.scrollY * 0.3}px) scale(1.08)`;
    };
    window.addEventListener('scroll', on, {
      passive: true
    });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useLucide();
  return /*#__PURE__*/React.createElement("header", {
    className: "ahero"
  }, /*#__PURE__*/React.createElement("div", {
    ref: bg,
    className: "ahero__bg tone1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "proj-card__grid"
  }), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "user"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dhero__scrim"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap ahero__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "dhero__back",
    href: "index.html"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left",
    style: {
      width: 15,
      height: 15
    }
  }), " Home"), /*#__PURE__*/React.createElement("span", {
    className: "dhero__sector"
  }, "About"), /*#__PURE__*/React.createElement("h1", {
    className: "ahero__title"
  }, "Kamran Azmi"), /*#__PURE__*/React.createElement("span", {
    className: "ahero__role"
  }, "Founder \xB7 Azmi Construction Services")));
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
function PhotoGallery({
  photos = [],
  tone = 1,
  ico = 'image',
  aspect,
  label = 'Photo'
}) {
  const [i, setI] = useStateA(0);
  const [box, setBox] = useStateA(false);
  const [paused, setPaused] = useStateA(false);
  const n = photos.length;
  const go = d => setI(v => (v + d + n) % n);
  useEffectA(() => {
    if (paused || box || n < 2) return;
    const t = setInterval(() => setI(v => (v + 1) % n), 5200);
    return () => clearInterval(t);
  }, [paused, box, n]);
  useLucide(i, box, n);
  if (!n) {
    return /*#__PURE__*/React.createElement("div", {
      className: "pgallery"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pgallery__main",
      style: aspect ? {
        aspectRatio: aspect
      } : null
    }, /*#__PURE__*/React.createElement("div", {
      className: `pgallery__empty tone${tone}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "proj-card__grid"
    }), /*#__PURE__*/React.createElement("i", {
      "data-lucide": ico
    }))));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "pgallery",
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "pgallery__main",
    style: aspect ? {
      aspectRatio: aspect
    } : null
  }, /*#__PURE__*/React.createElement("div", {
    className: "pgallery__track",
    style: {
      transform: `translateX(-${i * 100}%)`
    }
  }, photos.map((src, k) => /*#__PURE__*/React.createElement("div", {
    className: `pgallery__slide ${k === i ? 'on' : ''}`,
    key: k
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: `${label} ${k + 1}`,
    loading: k === 0 ? 'eager' : 'lazy'
  })))), /*#__PURE__*/React.createElement("button", {
    className: "pgallery__expand",
    onClick: () => setBox(true),
    "aria-label": "View larger"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "maximize-2"
  })), n > 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "pgallery__arrow prev",
    onClick: () => go(-1),
    "aria-label": "Previous photo"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-left"
  })), /*#__PURE__*/React.createElement("button", {
    className: "pgallery__arrow next",
    onClick: () => go(1),
    "aria-label": "Next photo"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-right"
  })), /*#__PURE__*/React.createElement("span", {
    className: "pgallery__count"
  }, i + 1, " / ", n), /*#__PURE__*/React.createElement("div", {
    className: "pgallery__dots"
  }, photos.map((s, k) => /*#__PURE__*/React.createElement("button", {
    key: k,
    className: k === i ? 'on' : '',
    onClick: () => setI(k),
    "aria-label": `Photo ${k + 1}`
  }))))), n > 1 && /*#__PURE__*/React.createElement("div", {
    className: "pgallery__rail"
  }, photos.map((src, k) => /*#__PURE__*/React.createElement("button", {
    key: k,
    className: `pgthumb ${k === i ? 'on' : ''}`,
    onClick: () => setI(k),
    "aria-label": `Photo ${k + 1}`
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    loading: "lazy"
  })))), box && /*#__PURE__*/React.createElement("div", {
    className: "jt__lightbox",
    onClick: () => setBox(false)
  }, /*#__PURE__*/React.createElement("button", {
    className: "jt__close",
    onClick: () => setBox(false),
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x"
  })), /*#__PURE__*/React.createElement("div", {
    className: "jt__lightbox-inner",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "pmedia pmedia--img jt__lightbox-photo"
  }, /*#__PURE__*/React.createElement("img", {
    src: photos[i],
    alt: label
  })), n > 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "jt__lb-nav prev",
    onClick: () => go(-1),
    "aria-label": "Previous"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-left"
  })), /*#__PURE__*/React.createElement("button", {
    className: "jt__lb-nav next",
    onClick: () => go(1),
    "aria-label": "Next"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-right"
  })), /*#__PURE__*/React.createElement("span", {
    className: "jt__lb-count"
  }, i + 1, " / ", n)))));
}
function Bio() {
  return /*#__PURE__*/React.createElement("section", {
    className: "bio"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap bio__grid"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    index: "01",
    eyebrow: "My Story",
    title: "Building Excellence Across Continents"
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100,
    className: "bio__body"
  }, /*#__PURE__*/React.createElement("p", null, "Kamran Azmi's 40-year career spans construction, real estate development, and operations leadership across five continents. He has progressed from technical mastery to strategic enterprise leadership, managing multimillion-dollar projects, multinational teams, and complex international operations."), /*#__PURE__*/React.createElement("p", null, "A recognized specialist in ready-mix concrete operations, he has repeatedly turned batching plants into high-margin profit centers \u2014 a discipline that helped drive 400% growth at Parkland in Kinshasa in just three years."), /*#__PURE__*/React.createElement("p", null, "His trajectory reflects disciplined growth: each role building on the last, each region expanding his understanding of how to deliver excellence across different markets and operating environments. Today, he serves as an executive advisor to enterprises undertaking ambitious urban development projects globally."))), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: 160,
    className: "bio__photo"
  }, /*#__PURE__*/React.createElement(PhotoGallery, {
    photos: ['images/about/mystory.jpeg'],
    tone: 1,
    ico: "user",
    label: "Kamran Azmi",
    aspect: "21 / 9"
  }))));
}

/* ---------- INTERACTIVE JOURNEY TIMELINE ---------- */
const JOURNEY = [{
  tag: 'Foundation',
  ico: 'graduation-cap',
  tone: 1,
  photos: ['images/about/foundation/2.jpeg', 'images/about/foundation/1.jpeg', 'images/about/foundation/6.jpeg', 'images/about/foundation/5.jpeg', 'images/about/foundation/4.jpeg', 'images/about/foundation/3.jpeg'],
  title: 'The Foundation',
  place: 'Kharkov Institute · USSR',
  text: 'As a teenager, Kamran Azmi earned a prestigious scholarship to study civil engineering at the Kharkov Institute of Civil Engineering in the former Soviet Union — one of Europe\u2019s most rigorous technical institutes. He emerged equipped with advanced training in building construction management and early exposure to international operating environments.'
}, {
  tag: 'Global Expertise',
  ico: 'globe',
  tone: 0,
  photos: ['images/about/operations/2.jpeg', 'images/about/operations/1.jpeg'],
  title: 'International Operations',
  place: 'Pakistan · Qatar · Kuwait · UAE',
  text: 'His career was built across multiple continents. He spent formative years in Pakistan, Qatar, Kuwait, and the UAE, translating technical mastery into operational leadership on demanding projects. Each region expanded his understanding of construction across different markets and cultures. Over the course of his career, he has become fluent in English, Russian, Urdu, and French, navigating different regional contexts with ease.'
}, {
  tag: 'Versatility',
  ico: 'layers',
  tone: 2,
  photos: ['images/about/leadership/2.jpeg', 'images/about/leadership/1.jpeg', 'images/about/leadership/redco-readymix.png', 'images/about/leadership/3.jpeg'],
  title: 'Diversified Leadership',
  place: 'Cross-Industry Operations',
  text: 'Throughout his career, Kamran developed expertise beyond traditional construction. He scaled ready-mix concrete operations into profit centers and managed textile manufacturing enterprises. This cross-industry experience gave him distinctive operational insight and an extensive global partnership network. He understands how to build businesses, not just buildings.'
}, {
  tag: 'South Asia',
  ico: 'building-2',
  tone: 1,
  photos: ['images/about/southasia/0.jpeg', 'images/about/southasia/redco-pump.png', 'images/about/southasia/banu-mukhtar-concrete.jpg', 'images/about/southasia/2.jpeg', 'images/about/southasia/1.jpeg', 'images/about/southasia/3.jpeg'],
  title: 'Building at Scale',
  place: 'Islamabad, Pakistan',
  text: 'He moved to Islamabad and led major high-rise residential and commercial developments. The work was complex: managing international standards on Pakistani sites, coordinating multinational teams, and navigating procurement across borders. His reputation grew with each delivered project. He is also a lifetime member of the Pakistan Engineering Council.'
}, {
  tag: 'the Middle East',
  ico: 'landmark',
  tone: 0,
  photos: ['images/about/doha/1.jpg', 'images/about/doha/2.jpg', 'images/about/doha/3.jpg'],
  title: 'Building Excellence',
  place: 'Qatar',
  text: 'For six years, he directed flagship projects across Qatar\u2019s rapid expansion — shopping malls, mixed-use developments, and hospitality complexes for major regional clients. Significant in scale and visibility, Doha refined his ability to manage world-class development on compressed timelines. It also deepened his command of ready-mix concrete production at scale — building on his Gulf experience as GM of ready-mix operations in Abu Dhabi (Redco Group) and as COO of the NLC-Izhar JV ready-mix concrete plants.'
}, {
  tag: 'Africa',
  ico: 'trending-up',
  tone: 2,
  photos: ['images/about/parkland/2.jpeg', 'images/about/parkland/p8.jpeg', 'images/about/parkland/6.jpeg', 'images/about/parkland/1.jpeg', 'images/about/parkland/p9.jpeg'],
  title: 'Building Systems, Not Just Buildings',
  place: 'Parkland · Kinshasa · 2021',
  text: 'In 2021, he took the helm at Parkland in Kinshasa. What he accomplished there defined his approach to leadership. He drove 400% growth in three years — scaling the company through strategic expansion into ready-mix concrete operations and in-house real estate development, transforming the batching plant into a high-profit revenue stream. He built operational systems where they didn\u2019t exist, mentored emerging leaders, and established standards of excellence in a challenging market.'
}, {
  tag: 'Your Project',
  ico: 'compass',
  tone: 1,
  photos: ['images/about/today/site-visit.jpeg', 'images/about/today/2.jpeg', 'images/about/today/3.jpeg'],
  title: 'Your Next Landmark Project',
  place: 'Azmi Construction Services',
  text: 'Azmi Construction Services exists for enterprises undertaking complex urban development across continents. Kamran brings operational rigor forged across 40 years of delivery — from technical execution to strategic scaling to cross-cultural team leadership. He has built in emerging markets and developed economies, scaled operations, managed risk across borders, and transformed ambitious visions into delivered reality. Whether you\u2019re expanding into new regions, managing multinational teams, or executing landmark projects, his expertise translates to your success.'
}];
function JourneyTimeline() {
  const [active, setActive] = useStateA(0);
  const n = JOURNEY.length;
  const c = JOURNEY[active];
  const go = d => setActive(v => Math.min(n - 1, Math.max(0, v + d)));
  useEffectA(() => {
    const onKey = e => {
      if (e.key === 'ArrowRight') setActive(v => Math.min(n - 1, v + 1));else if (e.key === 'ArrowLeft') setActive(v => Math.max(0, v - 1));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [n]);
  useLucide(active);
  const fillPct = n > 1 ? active / (n - 1) * 100 : 0;
  return /*#__PURE__*/React.createElement("section", {
    className: "journey"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    index: "02",
    eyebrow: "The Journey",
    max: "18em"
  }), /*#__PURE__*/React.createElement("div", {
    className: "jt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jt__rail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jt__line"
  }), /*#__PURE__*/React.createElement("div", {
    className: "jt__line-fill",
    style: {
      width: `${fillPct}%`
    }
  }), JOURNEY.map((ch, i) => /*#__PURE__*/React.createElement("button", {
    key: ch.tag,
    className: `jt__node ${i === active ? 'on' : ''} ${i < active ? 'done' : ''}`,
    onClick: () => setActive(i),
    "aria-label": ch.title
  }, /*#__PURE__*/React.createElement("span", {
    className: "jt__dot"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ch.ico
  })), /*#__PURE__*/React.createElement("span", {
    className: "jt__label"
  }, ch.tag)))), /*#__PURE__*/React.createElement("div", {
    className: "jt__stage",
    key: active
  }, /*#__PURE__*/React.createElement("div", {
    className: "jt__media-col"
  }, /*#__PURE__*/React.createElement(PhotoGallery, {
    photos: c.photos || [],
    tone: c.tone,
    ico: c.ico,
    label: c.title
  })), /*#__PURE__*/React.createElement("div", {
    className: "jt__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "jt__chapno"
  }, "Chapter ", String(active + 1).padStart(2, '0'), " / ", String(n).padStart(2, '0')), /*#__PURE__*/React.createElement("h3", {
    className: "jt__title"
  }, c.title), /*#__PURE__*/React.createElement("p", {
    className: "jt__text"
  }, c.text), /*#__PURE__*/React.createElement("div", {
    className: "jt__nav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "jt__btn",
    onClick: () => go(-1),
    disabled: active === 0,
    "aria-label": "Previous chapter"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left"
  })), /*#__PURE__*/React.createElement("button", {
    className: "jt__btn",
    onClick: () => go(1),
    disabled: active === n - 1,
    "aria-label": "Next chapter"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right"
  }))))))));
}

/* stable per-chapter storage key */
function ch_key(c) {
  return c.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

/* ---------- SKILLS SHOWCASE — portrait + grouped expertise ---------- */
const SKILL_GROUPS = [{
  h: 'Build & Deliver',
  ico: 'hard-hat',
  items: ['Construction Management', 'Project Leadership', 'Quality Assurance']
}, {
  h: 'Operate & Scale',
  ico: 'trending-up',
  items: ['Operations & P&L Ownership', 'Ready-Mix Production', 'Strategic Planning']
}, {
  h: 'Lead & Grow',
  ico: 'users',
  items: ['Workforce Development', 'International Procurement', 'Contract Negotiation']
}];
function SkillsShowcase() {
  useLucide();
  return /*#__PURE__*/React.createElement("section", {
    className: "skillshow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap skillshow__grid"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "skillshow__left",
    as: "div"
  }, /*#__PURE__*/React.createElement(PhotoGallery, {
    photos: ['images/about/skills-portrait.jpeg'],
    tone: 1,
    ico: "user",
    label: "Kamran Azmi",
    aspect: "4 / 5"
  }), /*#__PURE__*/React.createElement("div", {
    className: "skillshow__badge"
  }, /*#__PURE__*/React.createElement("span", {
    className: "skillshow__badge-v"
  }, "40", /*#__PURE__*/React.createElement("em", null, "+")), /*#__PURE__*/React.createElement("span", {
    className: "skillshow__badge-k"
  }, "Years on the world's", /*#__PURE__*/React.createElement("br", null), "most demanding sites"))), /*#__PURE__*/React.createElement("div", {
    className: "skillshow__right"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    index: "03",
    eyebrow: "Skills & Expertise",
    title: "Sharpened on site, proven at scale",
    max: "16em"
  }), /*#__PURE__*/React.createElement("div", {
    className: "skillshow__groups"
  }, SKILL_GROUPS.map((g, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: g.h,
    delay: i * 80,
    className: "skillgroup",
    as: "div"
  }, /*#__PURE__*/React.createElement("div", {
    className: "skillgroup__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "skillgroup__ico"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": g.ico,
    style: {
      width: 18,
      height: 18
    }
  })), /*#__PURE__*/React.createElement("h4", {
    className: "skillgroup__h"
  }, g.h)), /*#__PURE__*/React.createElement("ul", {
    className: "skillgroup__list"
  }, g.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 14,
      height: 14
    }
  }), " ", it)))))))));
}
function Credentials() {
  useLucide();
  const cols = [{
    h: 'Expertise',
    items: ['Construction Management', 'Ready-Mix Concrete Operations', 'Real-Estate Development', 'Operations & P&L Leadership', 'International Procurement']
  }, {
    h: 'Recognition',
    items: ['5x Revenue Growth', '100+ Projects Delivered', 'Multinational Team Leadership', 'Landmark Structures']
  }, {
    h: 'Reach',
    items: ['Congo · Qatar · UAE', 'Pakistan · Ukraine', 'Cross-Border Delivery', 'Four World Regions']
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "creds"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    index: "04",
    eyebrow: "Credentials",
    light: true,
    title: "Background & recognition"
  }), /*#__PURE__*/React.createElement("div", {
    className: "creds__grid"
  }, cols.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: c.h,
    delay: i * 90,
    className: "creds__col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "creds__h"
  }, c.h), /*#__PURE__*/React.createElement("ul", null, c.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "minus",
    style: {
      width: 14,
      height: 14
    }
  }), " ", it))))))));
}
Object.assign(window, {
  AboutHero,
  Bio,
  JourneyTimeline,
  SkillsShowcase,
  Credentials
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/about.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/chrome.jsx
try { (() => {
/* Shared chrome: Nav (minimize + active section) + Footer */
const {
  useState: useStateCh,
  useEffect: useEffectCh
} = React;
function StarMark({
  className
}) {
  return /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 100 100",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M 50 3 L 53.83 40.76 L 69.09 30.91 L 59.24 46.17 L 97 50 L 59.24 53.83 L 69.09 69.09 L 53.83 59.24 L 50 97 L 46.17 59.24 L 30.91 69.09 L 40.76 53.83 L 3 50 L 40.76 46.17 L 30.91 30.91 L 46.17 40.76 Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "50",
    r: "5.2",
    fill: "currentColor"
  }));
}
function Nav({
  active,
  onNav,
  page
}) {
  const [scrolled, setScrolled] = useStateCh(false);
  useEffectCh(() => {
    const on = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', on, {
      passive: true
    });
    on();
    return () => window.removeEventListener('scroll', on);
  }, []);
  useLucide();
  const onHome = page === 'home';
  const links = [{
    key: 'projects',
    label: 'Projects',
    href: 'projects.html',
    on: page === 'projects'
  }, {
    key: 'services',
    label: 'Services',
    href: 'services.html',
    on: page === 'services'
  }, {
    key: 'about',
    label: 'About',
    href: 'about.html',
    on: page === 'about'
  }];
  return /*#__PURE__*/React.createElement("nav", {
    className: `nav ${scrolled ? 'scrolled' : ''}`
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav__brand",
    href: "index.html"
  }, /*#__PURE__*/React.createElement(StarMark, {
    className: "nav__star"
  }), /*#__PURE__*/React.createElement("span", {
    className: "nav__bt"
  }, /*#__PURE__*/React.createElement("span", {
    className: "n"
  }, "Azmi Construction Services"), /*#__PURE__*/React.createElement("span", {
    className: "d"
  }, "EXECUTIVE CONSTRUCTION ADVISORY"))), /*#__PURE__*/React.createElement("div", {
    className: "nav__links"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.key,
    className: l.on || active === l.key ? 'is-active' : '',
    href: l.href,
    onClick: e => {
      if (l.inPage && onHome && onNav) {
        e.preventDefault();
        onNav(l.key);
      }
    }
  }, l.label)), /*#__PURE__*/React.createElement("a", {
    className: "nav__cta",
    href: "consultation.html"
  }, "Start a Consultation")));
}
function Footer() {
  useLucide();
  const year = new Date().getFullYear();
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__grid"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__brand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__bn"
  }, /*#__PURE__*/React.createElement(StarMark, {
    className: "footer__star"
  }), /*#__PURE__*/React.createElement("span", {
    className: "n"
  }, "Azmi Construction Services")), /*#__PURE__*/React.createElement("div", {
    className: "d"
  }, "EXECUTIVE CONSTRUCTION ADVISORY"), /*#__PURE__*/React.createElement("p", {
    className: "footer__tag"
  }, "International construction & urban development consultant. Shaping the cities of tomorrow across global regions.")), /*#__PURE__*/React.createElement("div", {
    className: "footer__cols"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "footer__h"
  }, "Navigate"), /*#__PURE__*/React.createElement("a", {
    href: "projects.html"
  }, "Projects"), /*#__PURE__*/React.createElement("a", {
    href: "services.html"
  }, "Services"), /*#__PURE__*/React.createElement("a", {
    href: "about.html"
  }, "About"), /*#__PURE__*/React.createElement("a", {
    href: "consultation.html"
  }, "Consultation")), /*#__PURE__*/React.createElement("div", {
    className: "footer__col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "footer__h"
  }, "Contact"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:syedkamranazmi@yahoo.com"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "mail",
    style: {
      width: 14,
      height: 14
    }
  }), " syedkamranazmi@yahoo.com"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "linkedin",
    style: {
      width: 14,
      height: 14
    }
  }), " /in/kamran-azmi")))), /*#__PURE__*/React.createElement("div", {
    className: "footer__bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", year, " Azmi Construction Services"), /*#__PURE__*/React.createElement("span", null, "Executive Construction Advisory \xB7 40+ Years Global Expertise"))));
}
Object.assign(window, {
  Nav,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/core.jsx
try { (() => {
/* ============================================================
   Core primitives — shared across all pages (window-exported)
   ============================================================ */
const {
  useState,
  useEffect,
  useRef,
  useCallback
} = React;
function useLucide(dep) {
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
}

/* ---- Eyebrow ---- */
function Eyebrow({
  children,
  copper,
  light,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: copper ? 'var(--copper)' : light ? 'var(--teal-300)' : 'var(--teal)',
      ...style
    }
  }, children);
}

/* ---- Section head: copper index + eyebrow + serif title ---- */
function SectionHead({
  index,
  eyebrow,
  title,
  copper,
  light,
  center,
  max,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `sec-head ${center ? 'sec-head--center' : ''} ${light ? 'sec-head--light' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head__ix"
  }, index && /*#__PURE__*/React.createElement("span", {
    className: "sec-head__num"
  }, index), /*#__PURE__*/React.createElement(Eyebrow, {
    copper: copper,
    light: light
  }, eyebrow)), title && /*#__PURE__*/React.createElement("h2", {
    className: "sec-head__title",
    style: max ? {
      maxWidth: max
    } : null
  }, title), children);
}

/* ---- Button with click ripple + chamfer (styled in CSS) ---- */
function Button({
  variant = 'primary',
  icon,
  children,
  onClick,
  href,
  type,
  full
}) {
  const ref = useRef(null);
  const ripple = e => {
    const el = ref.current;
    if (!el) return;
    const r = document.createElement('span');
    r.className = 'btn__ripple';
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    r.style.width = r.style.height = size + 'px';
    r.style.left = e.clientX - rect.left - size / 2 + 'px';
    r.style.top = e.clientY - rect.top - size / 2 + 'px';
    el.appendChild(r);
    setTimeout(() => r.remove(), 600);
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    ref: ref,
    href: href,
    type: href ? undefined : type || 'button',
    className: `btn btn--${variant} ${full ? 'btn--full' : ''}`,
    onClick: e => {
      ripple(e);
      onClick && onClick(e);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "btn__label"
  }, children), icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon
  }));
}

/* ---- Animated counter (resilient: IO + in-view + failsafe) ---- */
function Counter({
  to,
  suffix = '',
  prefix = '',
  duration = 1700,
  decimals = 0
}) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const run = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const tick = now => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(eased * to);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    let io;
    try {
      io = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) run();
      }), {
        threshold: 0.4
      });
      io.observe(el);
    } catch (e) {}
    const r = el.getBoundingClientRect();
    if (r.top < (window.innerHeight || 800) && r.bottom > 0) run();
    const fb = setTimeout(run, 1500);
    return () => {
      io && io.disconnect();
      clearTimeout(fb);
    };
  }, [to, duration]);
  const shown = decimals ? val.toFixed(decimals) : Math.round(val);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref
  }, prefix, shown, suffix);
}

/* ---- Scroll reveal (resilient) ---- */
function Reveal({
  children,
  delay = 0,
  as = 'div',
  className = '',
  style
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let io;
    try {
      io = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      }), {
        threshold: 0.12
      });
      io.observe(el);
    } catch (e) {}
    const r = el.getBoundingClientRect();
    if (r.top < (window.innerHeight || 800) && r.bottom > 0) setShown(true);
    const fb = setTimeout(() => setShown(true), 1300);
    return () => {
      io && io.disconnect();
      clearTimeout(fb);
    };
  }, []);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, {
    ref: ref,
    className: `reveal ${shown ? 'is-in' : ''} ${className}`,
    style: {
      transitionDelay: `${delay}ms`,
      ...style
    }
  }, children);
}

/* ---- Photo slot (gradient placeholder, optional parallax) ---- */
function Photo({
  label,
  icon = 'image',
  tone = 0,
  className = '',
  style,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `photo tone${tone} ${className}`,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo__grid"
  }), label && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon
  }), /*#__PURE__*/React.createElement("span", null, label)), children);
}

/* ---- Project media: real image when present, else a branded
   placeholder square stamped with the project name ---- */
function ProjMedia({
  p,
  className = '',
  showName = true,
  children
}) {
  if (p.img) {
    return /*#__PURE__*/React.createElement("div", {
      className: `pmedia pmedia--img ${className}`
    }, /*#__PURE__*/React.createElement("img", {
      src: p.img,
      alt: p.name,
      loading: "lazy"
    }), children);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: `pmedia tone${p.tone} ${className}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "proj-card__grid"
  }), /*#__PURE__*/React.createElement("i", {
    "data-lucide": p.ico,
    className: "pmedia__ico"
  }), showName && /*#__PURE__*/React.createElement("span", {
    className: "pmedia__name"
  }, p.name), children);
}

/* ---- Custom geometric cursor (skips touch devices) ---- */
function Cursor() {
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    const dot = document.createElement('div');
    dot.className = 'cur cur--dot';
    const ring = document.createElement('div');
    ring.className = 'cur cur--ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);
    document.body.classList.add('has-cursor');
    let rx = 0,
      ry = 0,
      x = 0,
      y = 0;
    const move = e => {
      x = e.clientX;
      y = e.clientY;
      dot.style.transform = `translate(${x}px,${y}px)`;
    };
    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      ring.style.transform = `translate(${rx}px,${ry}px)`;
      requestAnimationFrame(loop);
    };
    const over = e => {
      if (e.target.closest('a,button,.proj-card,.svc-card,.region,.chip,input,select,textarea,[data-hover]')) ring.classList.add('is-hot');
    };
    const out = e => {
      if (e.target.closest('a,button,.proj-card,.svc-card,.region,.chip,input,select,textarea,[data-hover]')) ring.classList.remove('is-hot');
    };
    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);
    loop();
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
      dot.remove();
      ring.remove();
      document.body.classList.remove('has-cursor');
    };
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
    window.addEventListener('scroll', on, {
      passive: true
    });
    on();
    return () => window.removeEventListener('scroll', on);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "scrollprog",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "scrollprog__pct"
  }, String(Math.round(p * 100)).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    className: "scrollprog__track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scrollprog__fill",
    style: {
      height: p * 100 + '%'
    }
  })));
}
Object.assign(window, {
  useLucide,
  Eyebrow,
  SectionHead,
  Button,
  Counter,
  Reveal,
  Photo,
  ProjMedia,
  Cursor,
  ScrollProgress
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/core.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.jsx
try { (() => {
/* ============================================================
   Shared project + content data — sourced from the Azmi
   Construction Services project list (18 projects).
   Window-exported for all pages.

   IMAGE HANDLING
   --------------
   Each project has `img: null` → renders a brand-colour
   placeholder square with the project name. To drop in a real
   photo later, set img to a path, e.g.
       img: 'images/okapi.jpg'
   No other change or rebuild is required.
   ============================================================ */

/* ---- Areas of Expertise taxonomy (from the source sheet) ---- */
const EX = {
  cm: 'Construction Management',
  red: 'Real Estate Development',
  ops: 'Operations Leadership',
  pnl: 'P&L Management & Financial Control',
  strat: 'Strategic Planning & Business Growth',
  wf: 'Workforce Development & Team Building',
  pde: 'Project Delivery & Execution',
  proc: 'International Procurement & Supply Chain',
  cn: 'Contract Negotiation & Client Relations',
  pcd: 'Profit Center Development'
};
const exList = keys => keys.map(k => EX[k]);

/* common expertise bundles to keep the data readable */
const EX_FULL = ['cm', 'ops', 'pnl', 'strat', 'wf', 'pde', 'proc', 'cn']; // 8-discipline standard
const EX_FULLP = ['cm', 'ops', 'pnl', 'strat', 'wf', 'pde', 'proc', 'cn', 'pcd']; // standard + profit centre

/* ---- Canonical sectors (drive the filter UI) ---- */
const SECTORS = ['All', 'Residential', 'Commercial', 'Mixed-use', 'Office', 'Hospitality'];

/* maps a sector to its placeholder tone + icon for visual consistency */
const SECTOR_STYLE = {
  Residential: {
    tone: 0,
    ico: 'building-2'
  },
  Commercial: {
    tone: 1,
    ico: 'store'
  },
  'Mixed-use': {
    tone: 2,
    ico: 'layout-grid'
  },
  Office: {
    tone: 1,
    ico: 'briefcase'
  },
  Hospitality: {
    tone: 0,
    ico: 'utensils'
  }
};

/* ---- Locations (drive the Global Reach grouping) ---- */
const LOCATIONS = [{
  key: 'kinshasa',
  city: 'Kinshasa',
  country: 'DRC',
  loc: 'Kinshasa, DRC',
  region: 'Central Africa',
  lat: -4.32,
  lng: 15.31
}, {
  key: 'doha',
  city: 'Doha',
  country: 'Qatar',
  loc: 'Doha, Qatar',
  region: 'Gulf',
  lat: 25.29,
  lng: 51.53
}, {
  key: 'islamabad',
  city: 'Islamabad',
  country: 'Pakistan',
  loc: 'Islamabad, Pakistan',
  region: 'South Asia',
  lat: 33.72,
  lng: 73.10
}, {
  key: 'rawalpindi',
  city: 'Rawalpindi',
  country: 'Pakistan',
  loc: 'Rawalpindi, Pakistan',
  region: 'South Asia',
  lat: 32.90,
  lng: 72.55
}, {
  key: 'karachi',
  city: 'Karachi',
  country: 'Pakistan',
  loc: 'Karachi, Pakistan',
  region: 'South Asia',
  lat: 24.86,
  lng: 67.01
}];
const LOC = Object.fromEntries(LOCATIONS.map(l => [l.key, l]));

/* ---- Raw project records (rank order) ----
   prim   = primary canonical sector (used on cards + filter)
   secs   = all canonical sectors that apply
   rawSec = original sector text from the sheet (shown on detail)
   ex     = expertise keys                                              */
const RAW = [{
  rank: 1,
  id: 'pointe-anglaise',
  name: 'Pointe Anglaise',
  lk: 'kinshasa',
  prim: 'Residential',
  secs: ['Residential', 'Mixed-use'],
  rawSec: 'Residential construction, Mixed-use developments, Real estate development',
  ex: ['cm', 'red', 'ops', 'pnl', 'strat', 'wf', 'pde', 'proc', 'cn', 'pcd'],
  desc: 'Pointe Anglaise blends urban dynamism with an atmosphere of serenity. Situated on the Congo River, Pointe Anglaise offers exceptional views in an iconic residential community that you can call home. Contemporary architecture and natural beauty unite to form a state-of-the-art hub of tranquility in a prime location.'
}, {
  rank: 2,
  id: 'okapi',
  name: 'Okapi',
  lk: 'kinshasa',
  prim: 'Residential',
  secs: ['Residential', 'Mixed-use'],
  rawSec: 'Residential construction, Mixed-use developments',
  ex: ['cm', 'ops', 'strat', 'pde', 'proc', 'cn'],
  desc: "The 55 apartments in the Okapi building are intended for the staff of a major bank in the Democratic Republic of Congo. The complex is located in Gombe on a plot of land of typical size for Kinshasa. The scale of the project dictated the choice of a high-rise design to maintain a clear, open communal outdoor area at ground level. In addition to three underground parking levels, the complex comprises a ground floor and twelve upper floors. Each floor contains six apartments, ranging from two to three bedrooms. Given Kinshasa's seismic risk, reinforced concrete was the only structural element required. The facades are designed to limit solar gain and, through their geometry and the use of screens, ensure privacy for each apartment. The contrast is striking between the light-colored plaster and the significantly darker screens."
}, {
  rank: 3,
  id: 'polygon',
  name: 'Polygon',
  lk: 'kinshasa',
  prim: 'Commercial',
  secs: ['Commercial'],
  rawSec: 'Commercial construction',
  ex: EX_FULLP,
  desc: ''
}, {
  rank: 4,
  id: 'doha-festival',
  name: 'Doha Festival City',
  lk: 'doha',
  prim: 'Commercial',
  secs: ['Commercial'],
  rawSec: 'Commercial construction',
  ex: EX_FULL,
  desc: 'Doha Festival City is a large Emirati-owned shopping mall and entertainment complex located in Umm Salal, north of Doha, Qatar, along Al Shamal Road. It is one of the largest retail developments in Qatar, featuring over 500 stores, 100 dining establishments, and extensive leisure attractions.'
}, {
  rank: 5,
  id: 'attock-oil',
  name: 'Attock Oil Head Office',
  lk: 'rawalpindi',
  prim: 'Office',
  secs: ['Office'],
  rawSec: 'Office building',
  ex: EX_FULL,
  desc: 'The head office for the Attock Group of Companies, which includes The Attock Oil Company, Attock Refinery Limited (ARL), and Attock Petroleum Limited (APL), is located at Attock House, Morgah, Rawalpindi, Pakistan. This location serves as the central hub for the group\'s vertically integrated oil and gas operations.'
}, {
  rank: 6,
  id: 'msheireb',
  name: 'Msheireb Downtown',
  lk: 'doha',
  prim: 'Mixed-use',
  secs: ['Mixed-use'],
  rawSec: 'Mixed-use developments',
  ex: EX_FULLP,
  desc: "Msheireb Downtown Doha is a $5.5 billion, 31-hectare sustainable regeneration project in the heart of Qatar's capital. Developed by Msheireb Properties, a subsidiary of the Qatar Foundation, it stands as the world's first fully built smart city district, seamlessly blending modern design with traditional Qatari heritage."
}, {
  rank: 7,
  id: 'port-grand',
  name: 'Port Grand',
  lk: 'karachi',
  prim: 'Hospitality',
  secs: ['Hospitality'],
  rawSec: 'Hospitality, Real estate development, Recreational development',
  ex: ['cm', 'red', 'ops', 'pnl', 'strat', 'wf', 'pde', 'proc', 'cn', 'pcd'],
  desc: 'Port Grand is a premier waterfront, dining, and entertainment complex located along the historic 19th-century Native Jetty Bridge in Karachi, Pakistan. Spanning an area of 200,000 square feet, the culturally vibrant destination is known for its wide variety of local and international eateries, entertainment facilities, and scenic views of the Karachi port.'
}, {
  rank: 8,
  id: 'pet-clinic',
  name: 'Pet Clinic & Apartments',
  lk: 'kinshasa',
  prim: 'Mixed-use',
  secs: ['Mixed-use'],
  rawSec: 'Mixed-use developments',
  ex: EX_FULLP,
  desc: ''
}, {
  rank: 9,
  id: 'federal-cabinet',
  name: 'Federal Cabinet Building',
  lk: 'islamabad',
  prim: 'Office',
  secs: ['Office'],
  rawSec: 'Office Building',
  ex: ['cm', 'ops', 'strat', 'pde'],
  desc: 'The Federal Cabinet Building (also known as the Cabinet Block) is a prominent government facility located within the high-security Red Zone of Islamabad, Pakistan. It houses the Cabinet Secretariat and the Cabinet Division, which is the central administrative body responsible for assisting the Federal Cabinet, the Prime Minister, and various Cabinet Committees in decision-making.'
}, {
  rank: 10,
  id: 'silver-oaks',
  name: 'Silver Oaks Luxury Apartments',
  lk: 'islamabad',
  prim: 'Residential',
  secs: ['Residential'],
  rawSec: 'Residential construction',
  ex: ['cm', 'ops', 'pnl', 'strat', 'wf', 'pde', 'cn'],
  desc: ''
}, {
  rank: 11,
  id: 'shamsar-basoko',
  name: 'Shamsar Basoko',
  lk: 'kinshasa',
  prim: 'Residential',
  secs: ['Residential'],
  rawSec: 'Residential construction',
  ex: EX_FULLP,
  desc: ''
}, {
  rank: 12,
  id: 'amaryllis',
  name: 'Amaryllis',
  lk: 'kinshasa',
  prim: 'Mixed-use',
  secs: ['Mixed-use'],
  rawSec: 'Mixed-use developments',
  ex: EX_FULL,
  desc: ''
}, {
  rank: 13,
  id: 'uac',
  name: 'UAC',
  lk: 'kinshasa',
  prim: 'Commercial',
  secs: ['Commercial'],
  rawSec: 'Commercial construction',
  ex: EX_FULLP,
  desc: ''
}, {
  rank: 14,
  id: 'eighteen',
  name: 'Eighteen',
  lk: 'islamabad',
  prim: 'Residential',
  secs: ['Residential'],
  rawSec: 'Residential construction',
  ex: EX_FULLP,
  desc: 'Eighteen, a prestigious residential project in Pakistan. Offering luxury villas and apartments at a prime location of Islamabad.'
}, {
  rank: 15,
  id: 'metro-cash-carry',
  name: 'Metro Cash & Carry',
  lk: 'islamabad',
  prim: 'Commercial',
  secs: ['Commercial'],
  rawSec: 'Commercial construction',
  ex: EX_FULLP,
  desc: 'The METRO Islamabad Store is a massive wholesale and retail hypermarket.'
}, {
  rank: 16,
  id: 'nust-hostels',
  name: 'NUST Hostels',
  lk: 'islamabad',
  prim: 'Residential',
  secs: ['Residential'],
  rawSec: 'Residential construction',
  ex: EX_FULLP,
  desc: ''
}, {
  rank: 17,
  id: 'private-villa',
  name: 'Private Luxury Villa',
  lk: 'kinshasa',
  prim: 'Residential',
  secs: ['Residential'],
  rawSec: 'Residential construction',
  ex: EX_FULL,
  desc: ''
}, {
  rank: 18,
  id: 'ufone-tower',
  name: 'Ufone Tower',
  lk: 'islamabad',
  prim: 'Office',
  secs: ['Office'],
  rawSec: 'Office Building',
  ex: ['cm'],
  desc: ''
}];

/* ---- Per-project photo galleries ----
   Keyed by project id. First entry is the hero / card image.
   To add photos for a new project: copy the files into
   images/<id>/ and list them here (hero first). Nothing else
   needs to change — cards, slideshow, hero and detail gallery
   all read from this automatically.                             */
const GALLERY = {
  'pointe-anglaise': ['images/pointe-anglaise/5.jpeg', 'images/pointe-anglaise/9.jpeg', 'images/pointe-anglaise/2.jpeg', 'images/pointe-anglaise/8.jpeg', 'images/pointe-anglaise/3.jpeg', 'images/pointe-anglaise/4.jpeg', 'images/pointe-anglaise/10.jpeg', 'images/pointe-anglaise/1.jpeg', 'images/pointe-anglaise/6.jpeg', 'images/pointe-anglaise/7.jpeg'],
  'okapi': ['images/okapi/4.jpeg', 'images/okapi/3.jpeg', 'images/okapi/1.png', 'images/okapi/2.png'],
  'polygon': ['images/polygon/1.jpeg', 'images/polygon/2.jpeg'],
  'doha-festival': ['images/doha-festival/1.jpg', 'images/doha-festival/2.png', 'images/doha-festival/3.jpg'],
  'attock-oil': ['images/attock-oil/1.jpeg'],
  'msheireb': ['images/msheireb/3.png', 'images/msheireb/1.jpg', 'images/msheireb/2.jpg', 'images/msheireb/4.jpg'],
  'port-grand': ['images/port-grand/4.jpg', 'images/port-grand/1.jpeg', 'images/port-grand/3.jpeg', 'images/port-grand/2.jpg'],
  'pet-clinic': ['images/pet-clinic/1.jpeg'],
  'federal-cabinet': ['images/federal-cabinet/1.png', 'images/federal-cabinet/2.jpeg'],
  'silver-oaks': ['images/silver-oaks/1.jpeg', 'images/silver-oaks/2.jpeg', 'images/silver-oaks/3.jpeg', 'images/silver-oaks/4.jpeg'],
  'shamsar-basoko': ['images/shamsar-basoko/1.jpeg', 'images/shamsar-basoko/2.jpeg', 'images/shamsar-basoko/3.jpeg', 'images/shamsar-basoko/4.jpeg'],
  'amaryllis': ['images/amaryllis/1.jpeg'],
  'uac': ['images/uac/2.jpeg', 'images/uac/1.jpeg', 'images/uac/3.jpeg', 'images/uac/4.jpeg'],
  'eighteen': ['images/eighteen/1.jpeg', 'images/eighteen/2.jpeg'],
  'metro-cash-carry': ['images/metro-cash-carry/1.jpeg'],
  'nust-hostels': ['images/nust-hostels/1.jpg'],
  'private-villa': ['images/private-villa/1.jpeg', 'images/private-villa/2.jpeg'],
  'ufone-tower': ['images/ufone-tower/2.jpg', 'images/ufone-tower/1.jpg', 'images/ufone-tower/3.png']
};

/* full project name for the few that were shortened above (used in titles) */
const FULLNAME = {
  'silver-oaks': 'Silver Oaks Luxury Residential Apartments',
  'federal-cabinet': 'Federal Cabinet Building Islamabad',
  'nust-hostels': 'NUST (National University of Science & Technology) Hostels'
};

/* ---- Build the live PROJECTS array ---- */
const PROJECTS = RAW.map(r => {
  const l = LOC[r.lk];
  const style = SECTOR_STYLE[r.prim] || {
    tone: 0,
    ico: 'building'
  };
  const gallery = GALLERY[r.id] || [];
  return {
    id: r.id,
    rank: r.rank,
    name: r.name,
    fullName: FULLNAME[r.id] || r.name,
    loc: l.loc,
    city: l.city,
    country: l.country,
    locationKey: r.lk,
    region: l.key,
    // map highlighting keys off location
    lat: l.lat,
    lng: l.lng,
    sector: r.prim,
    // primary sector — cards + filter
    sectors: r.secs,
    // all canonical sectors
    rawSector: r.rawSec,
    // original sheet text — detail page
    expertise: exList(r.ex),
    // full strings for tags/lists
    exKeys: r.ex,
    desc: r.desc,
    img: gallery[0] || null,
    // hero / card image (from GALLERY map)
    gallery,
    // full set of photos for the detail page
    tone: style.tone,
    ico: style.ico
  };
});
const byRank = (a, b) => a.rank - b.rank;

/* ---- Helpers ---- */
/* related projects in the same sector (excluding current), nearest by rank */
function relatedBySector(p, n = 3) {
  return PROJECTS.filter(x => x.id !== p.id && x.sector === p.sector).sort((a, b) => Math.abs(a.rank - p.rank) - Math.abs(b.rank - p.rank)).slice(0, n).sort(byRank);
}

/* projects that applied a given expertise key — spread across rank for variety */
function projectsByExpertise(exKey, n = 3) {
  const matches = PROJECTS.filter(p => p.exKeys.includes(exKey)).sort(byRank);
  if (matches.length <= n) return matches;
  const out = [];
  for (let i = 0; i < n; i++) {
    out.push(matches[Math.round(i * (matches.length - 1) / (n - 1))]);
  }
  return [...new Map(out.map(p => [p.id, p])).values()];
}

/* ---- Location groups for Global Reach (rank order within each) ---- */
const LOCATION_GROUPS = LOCATIONS.map(l => ({
  ...l,
  projects: PROJECTS.filter(p => p.locationKey === l.key).sort(byRank)
})).sort((a, b) => b.projects.length - a.projects.length);
Object.assign(window, {
  EX,
  PROJECTS,
  SECTORS,
  LOCATIONS,
  LOCATION_GROUPS,
  SECTOR_STYLE,
  relatedBySector,
  projectsByExpertise
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/detail.jsx
try { (() => {
/* Project detail page components */
const {
  useState: useStateD,
  useEffect: useEffectD,
  useRef: useRefD
} = React;
function getProject() {
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  return PROJECTS.find(p => p.id === id) || PROJECTS[0];
}

/* Parallax dark hero — name, location, sector */
function ProjectHero({
  p
}) {
  const bg = useRefD(null);
  useEffectD(() => {
    const on = () => {
      if (bg.current) bg.current.style.transform = `translateY(${window.scrollY * 0.32}px) scale(1.08)`;
    };
    window.addEventListener('scroll', on, {
      passive: true
    });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useLucide();
  return /*#__PURE__*/React.createElement("header", {
    className: "dhero"
  }, /*#__PURE__*/React.createElement("div", {
    ref: bg,
    className: `dhero__bg tone${p.tone}`
  }, p.img ? /*#__PURE__*/React.createElement("img", {
    className: "dhero__photo",
    src: p.img,
    alt: p.name
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "proj-card__grid"
  }), /*#__PURE__*/React.createElement("i", {
    "data-lucide": p.ico
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dhero__scrim"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap dhero__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "dhero__back",
    href: "index.html#featured"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left",
    style: {
      width: 15,
      height: 15
    }
  }), " All Projects"), /*#__PURE__*/React.createElement("span", {
    className: "dhero__sector"
  }, p.sector), /*#__PURE__*/React.createElement("h1", {
    className: "dhero__title"
  }, p.fullName), /*#__PURE__*/React.createElement("span", {
    className: "dhero__loc"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin",
    style: {
      width: 15,
      height: 15
    }
  }), " ", p.loc)));
}

/* Project showcase — a uniform-size scrolling slideshow of all photos */
function ProjectShowcase({
  p
}) {
  const gallery = p.gallery && p.gallery.length ? p.gallery : p.img ? [p.img] : [];
  const n = gallery.length;
  const [i, setI] = useStateD(0);
  const [paused, setPaused] = useStateD(false);
  const go = d => setI(v => (v + d + n) % n);
  useEffectD(() => {
    if (paused || n < 2) return;
    const t = setInterval(() => setI(v => (v + 1) % n), 5000);
    return () => clearInterval(t);
  }, [paused, n]);
  useLucide(i);
  if (!n) {
    return /*#__PURE__*/React.createElement("section", {
      className: "dshow"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap"
    }, /*#__PURE__*/React.createElement(ProjMedia, {
      p: p,
      className: "dshow__media",
      showName: true
    })));
  }
  return /*#__PURE__*/React.createElement("section", {
    className: "dshow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dslides",
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "dslides__viewport"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dslides__track",
    style: {
      transform: `translateX(-${i * 100}%)`
    }
  }, gallery.map((src, k) => /*#__PURE__*/React.createElement("div", {
    className: "dslides__slide",
    key: src
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: `${p.name} — view ${k + 1}`,
    loading: k === 0 ? 'eager' : 'lazy'
  })))), n > 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "dslides__nav prev",
    onClick: () => go(-1),
    "aria-label": "Previous photo"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-left"
  })), /*#__PURE__*/React.createElement("button", {
    className: "dslides__nav next",
    onClick: () => go(1),
    "aria-label": "Next photo"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-right"
  })), /*#__PURE__*/React.createElement("span", {
    className: "dslides__count"
  }, String(i + 1).padStart(2, '0'), " / ", String(n).padStart(2, '0')))), n > 1 && /*#__PURE__*/React.createElement("div", {
    className: "dslides__dots"
  }, gallery.map((src, k) => /*#__PURE__*/React.createElement("button", {
    key: src,
    className: k === i ? 'on' : '',
    onClick: () => setI(k),
    "aria-label": `Photo ${k + 1}`
  }))))));
}

/* Overview: brief description + sector facts + expertise tags */
function ProjectOverview({
  p
}) {
  useLucide();
  const hasDesc = p.desc && p.desc.trim().length > 0;
  return /*#__PURE__*/React.createElement("section", {
    className: "doverview"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap doverview__grid"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHead, {
    index: "01",
    eyebrow: "Overview"
  }), hasDesc ? /*#__PURE__*/React.createElement("p", {
    className: "doverview__lead"
  }, p.desc) : /*#__PURE__*/React.createElement("p", {
    className: "doverview__lead"
  }, "A ", p.rawSector.toLowerCase(), " engagement in ", p.loc, ", delivered under the direction of Kamran Azmi with full operational and delivery leadership.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120,
    className: "doverview__facts"
  }, /*#__PURE__*/React.createElement("span", {
    className: "doverview__facts-h"
  }, "Project Facts"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Location"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, p.loc)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Sector"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, p.rawSector)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Disciplines"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, p.expertise.length, " areas of expertise"))))));
}

/* Areas of Expertise — tag list */
function ProjectExpertise({
  p
}) {
  useLucide();
  return /*#__PURE__*/React.createElement("section", {
    className: "dexpertise"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    index: "02",
    eyebrow: "Capabilities Applied",
    title: "Areas of expertise",
    max: "20em"
  }), /*#__PURE__*/React.createElement("div", {
    className: "dtags"
  }, p.expertise.map((ex, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: ex,
    delay: i % 5 * 50,
    as: "span",
    className: "dtag"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 14,
      height: 14
    }
  }), " ", ex)))));
}

/* Related projects — 3 from the same sector */
function RelatedProjects({
  current
}) {
  const rel = relatedBySector(current, 3);
  if (!rel.length) return null;
  return /*#__PURE__*/React.createElement("section", {
    className: "drelated"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    index: "03",
    eyebrow: "More Work",
    title: `More ${current.sector.toLowerCase()} projects`
  }), /*#__PURE__*/React.createElement("div", {
    className: "drelated__grid"
  }, rel.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: p.id,
    delay: i * 90
  }, /*#__PURE__*/React.createElement(ProjectCard, {
    p: p
  }))))));
}
function ProjectCTA() {
  return /*#__PURE__*/React.createElement("section", {
    className: "dcta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dcta__grid-bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap dcta__inner"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    light: true,
    copper: true
  }, "Consultation"), /*#__PURE__*/React.createElement("h2", {
    className: "dcta__title"
  }, "Planning a project of this scale?"), /*#__PURE__*/React.createElement("p", {
    className: "dcta__lead"
  }, "Bring four decades of global delivery experience to your next build."), /*#__PURE__*/React.createElement(Button, {
    icon: "arrow-right",
    href: "index.html#contact"
  }, "Start a Consultation")));
}
Object.assign(window, {
  getProject,
  ProjectHero,
  ProjectShowcase,
  ProjectOverview,
  ProjectExpertise,
  RelatedProjects,
  ProjectCTA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/detail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/home.jsx
try { (() => {
/* Homepage — Hero + Featured Projects (full grid + sector filter) */
const {
  useState: useStateH,
  useEffect: useEffectH,
  useRef: useRefH,
  useMemo
} = React;

/* ---------- HERO ---------- */
function Hero({
  onNav
}) {
  useLucide();
  return /*#__PURE__*/React.createElement("header", {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__photo tone0",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__scrim",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grain",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "hero__tag",
    "aria-hidden": "true"
  }, "Portfolio \xB7 1985 \u2014 2025"), /*#__PURE__*/React.createElement("div", {
    className: "wrap hero__inner"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    light: true,
    style: {
      color: '#e3a877'
    }
  }, "Executive Construction Advisory \xB7 40+ Years"), /*#__PURE__*/React.createElement("h1", {
    className: "hero__title"
  }, "Shaping the", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "Cities"), " of Tomorrow"), /*#__PURE__*/React.createElement("p", {
    className: "hero__lead"
  }, "A projects-first advisory built on four decades of delivering landmark structures across global regions \u2014 residential, commercial, mixed-use, office, and hospitality."), /*#__PURE__*/React.createElement("div", {
    className: "hero__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    icon: "arrow-right",
    href: "#featured"
  }, "Explore Projects"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost-dark",
    icon: "calendar",
    href: "consultation.html"
  }, "Start a Consultation")), /*#__PURE__*/React.createElement("div", {
    className: "hero__stats"
  }, [{
    n: 40,
    s: '+',
    c: 'Years'
  }, {
    n: 4,
    s: '',
    c: 'Continents'
  }, {
    n: 5,
    s: 'x',
    c: 'Revenue'
  }, {
    n: 400,
    s: '%',
    c: 'Ready-Mix Growth'
  }].map((x, i) => /*#__PURE__*/React.createElement("div", {
    className: "hero__stat",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, /*#__PURE__*/React.createElement(Counter, {
    to: x.n,
    suffix: x.s
  })), /*#__PURE__*/React.createElement("span", {
    className: "cap"
  }, x.c))))), /*#__PURE__*/React.createElement("div", {
    className: "hero__ticker"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__ticker-track"
  }, [...Array(2)].map((_, r) => /*#__PURE__*/React.createElement("span", {
    key: r
  }, PROJECTS.map(p => /*#__PURE__*/React.createElement("em", {
    key: p.id
  }, p.name, /*#__PURE__*/React.createElement("i", null, "\xB7"), p.city, /*#__PURE__*/React.createElement("b", null))))))));
}

/* ---------- PROJECT CARD (links to detail page) ---------- */
function ProjectCard({
  p,
  big
}) {
  const ref = useRefH(null);
  const onMove = e => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - r.left) / r.width - 0.5;
    const dy = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--px', (dx * 10).toFixed(2) + 'px');
    el.style.setProperty('--py', (dy * 10).toFixed(2) + 'px');
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) {
      el.style.setProperty('--px', '0px');
      el.style.setProperty('--py', '0px');
    }
  };
  useLucide();
  return /*#__PURE__*/React.createElement("a", {
    ref: ref,
    className: `proj-card ${big ? 'proj-card--big' : ''}`,
    href: `project.html?id=${p.id}`,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    "data-hover": true
  }, /*#__PURE__*/React.createElement(ProjMedia, {
    p: p,
    className: "proj-card__media"
  }, /*#__PURE__*/React.createElement("span", {
    className: "proj-card__sector"
  }, p.sector), /*#__PURE__*/React.createElement("span", {
    className: "proj-card__bar"
  })), /*#__PURE__*/React.createElement("div", {
    className: "proj-card__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "proj-card__loc"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin",
    style: {
      width: 12,
      height: 12
    }
  }), " ", p.loc), /*#__PURE__*/React.createElement("h3", {
    className: "proj-card__name"
  }, p.name), /*#__PURE__*/React.createElement("span", {
    className: "proj-card__more"
  }, "View project ", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-up-right",
    style: {
      width: 15,
      height: 15
    }
  }))));
}

/* ---------- FEATURED SLIDESHOW (homepage — 5 signature projects) ---------- */
const SLIDESHOW_IDS = ['pointe-anglaise', 'okapi', 'doha-festival', 'attock-oil', 'msheireb'];
function FeaturedSlideshow() {
  const slides = useMemo(() => SLIDESHOW_IDS.map(id => PROJECTS.find(p => p.id === id)).filter(Boolean), []);
  const n = slides.length;
  const [i, setI] = useStateH(0);
  const [paused, setPaused] = useStateH(false);
  const go = d => setI(v => (v + d + n) % n);
  useEffectH(() => {
    if (paused || n < 2) return;
    const t = setInterval(() => setI(v => (v + 1) % n), 5500);
    return () => clearInterval(t);
  }, [paused, n]);
  useLucide(i);
  return /*#__PURE__*/React.createElement("section", {
    className: "featured",
    id: "featured"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "featured__head"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    index: "01",
    eyebrow: "Landmark Projects",
    title: "A selection of signature work",
    max: "20em"
  }), /*#__PURE__*/React.createElement("a", {
    className: "featured__all-link",
    href: "projects.html"
  }, "View All Projects ", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right",
    style: {
      width: 16,
      height: 16
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "carousel",
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "carousel__track",
    style: {
      transform: `translateX(-${i * 100}%)`
    }
  }, slides.map(p => /*#__PURE__*/React.createElement("div", {
    className: "carousel__slide",
    key: p.id
  }, /*#__PURE__*/React.createElement("a", {
    className: `carousel__media tone${p.tone}${p.img ? ' carousel__media--img' : ''}`,
    href: `project.html?id=${p.id}`,
    "data-hover": true
  }, p.img ? /*#__PURE__*/React.createElement("img", {
    className: "carousel__photo",
    src: p.img,
    alt: p.name
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "proj-card__grid"
  }), /*#__PURE__*/React.createElement("i", {
    "data-lucide": p.ico,
    className: "carousel__ico"
  }), /*#__PURE__*/React.createElement("span", {
    className: "carousel__media-name"
  }, p.name))), /*#__PURE__*/React.createElement("div", {
    className: "carousel__caption"
  }, /*#__PURE__*/React.createElement("span", {
    className: "carousel__era"
  }, p.sector, " \xB7 ", p.loc), /*#__PURE__*/React.createElement("h3", {
    className: "carousel__name"
  }, p.name), /*#__PURE__*/React.createElement("p", {
    className: "carousel__type"
  }, p.desc ? p.desc.slice(0, 132).trim() + '…' : `A ${p.rawSector.toLowerCase()} project delivered in ${p.loc}.`), /*#__PURE__*/React.createElement("a", {
    className: "carousel__cta",
    href: `project.html?id=${p.id}`,
    "data-hover": true
  }, "View Project ", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right",
    style: {
      width: 15,
      height: 15
    }
  })))))), /*#__PURE__*/React.createElement("button", {
    className: "carousel__nav prev",
    onClick: () => go(-1),
    "aria-label": "Previous project"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-left"
  })), /*#__PURE__*/React.createElement("button", {
    className: "carousel__nav next",
    onClick: () => go(1),
    "aria-label": "Next project"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-right"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "carousel__dots"
  }, slides.map((p, k) => /*#__PURE__*/React.createElement("span", {
    key: p.id,
    className: k === i ? 'on' : '',
    onClick: () => setI(k),
    "data-hover": true,
    "aria-label": `Go to slide ${k + 1}`
  })))));
}
Object.assign(window, {
  Hero,
  FeaturedSlideshow,
  ProjectCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/home2.jsx
try { (() => {
/* Homepage part 2 — Services teaser, Global Reach teaser, Contact */
const {
  useState: useStateS,
  useEffect: useEffectS,
  useRef: useRefS
} = React;

/* ---------- SERVICES TEASER (links to services.html) ---------- */
const SVC_TEASER = [{
  ico: 'compass',
  name: 'Executive Advisory'
}, {
  ico: 'layers',
  name: 'Ready-Mix Concrete Operations'
}, {
  ico: 'settings-2',
  name: 'Operational Optimization'
}, {
  ico: 'hard-hat',
  name: 'Project Leadership'
}, {
  ico: 'users',
  name: 'Team & Talent Development'
}, {
  ico: 'trending-up',
  name: 'Business Expansion'
}, {
  ico: 'globe-2',
  name: 'International Market Entry'
}];
function ServicesTeaser() {
  useLucide();
  return /*#__PURE__*/React.createElement("section", {
    className: "svc-teaser",
    id: "services"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap svc-teaser__grid"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "svc-teaser__intro",
    as: "div"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    index: "02",
    eyebrow: "Services",
    title: "Seven disciplines, one tailored engagement",
    max: "14em"
  }), /*#__PURE__*/React.createElement("p", {
    className: "svc-teaser__lead"
  }, "From boardroom strategy to on-site delivery \u2014 combine the capabilities you need into a single scope of work."), /*#__PURE__*/React.createElement(Button, {
    icon: "arrow-right",
    href: "services.html"
  }, "Explore Services")), /*#__PURE__*/React.createElement("div", {
    className: "svc-teaser__list"
  }, SVC_TEASER.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.name,
    delay: i * 50,
    as: "div",
    className: "svc-teaser__row"
  }, /*#__PURE__*/React.createElement("a", {
    className: "svc-teaser__row-a",
    href: "services.html",
    "data-hover": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "svc-teaser__ic"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": s.ico,
    style: {
      width: 19,
      height: 19
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "svc-teaser__nm"
  }, s.name), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-up-right",
    className: "svc-teaser__go",
    style: {
      width: 16,
      height: 16
    }
  })))))));
}

/* ---------- GLOBAL REACH TEASER (links to reach.html) ---------- */
function ReachTeaser() {
  useLucide();
  return /*#__PURE__*/React.createElement("section", {
    className: "reach-teaser",
    id: "reach"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reach-teaser__bg",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap reach-teaser__inner"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    index: "03",
    eyebrow: "Global Reach",
    light: true,
    title: "Delivery across five regions",
    max: "18em"
  }), /*#__PURE__*/React.createElement("p", {
    className: "reach-teaser__lead"
  }, "Landmark projects across Central Africa, the Gulf, and South Asia \u2014 five regions, three countries, one consistent standard."), /*#__PURE__*/React.createElement("div", {
    className: "reach-teaser__regions"
  }, LOCATION_GROUPS.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.key,
    className: "reach-teaser__region",
    href: "projects.html#reach",
    "data-hover": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "reach-teaser__r-n"
  }, l.city), /*#__PURE__*/React.createElement("span", {
    className: "reach-teaser__r-m"
  }, l.country), /*#__PURE__*/React.createElement("span", {
    className: "reach-teaser__r-c"
  }, l.projects.length, " project", l.projects.length > 1 ? 's' : '')))), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost-dark",
    icon: "arrow-right",
    href: "projects.html"
  }, "View the world map")));
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
  const submit = e => {
    e.preventDefault();
    /* Collect the data — email backend to be wired later (e.g. via Vercel). */
    const data = Object.fromEntries(new FormData(e.target).entries());
    try {
      console.log('Consultation request', data);
    } catch (err) {}
    setSent(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "contact",
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact__grid-bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    index: "04",
    eyebrow: "Consultation",
    copper: true,
    light: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "contact__layout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact__intro"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "contact__title"
  }, "Let's shape what comes next."), /*#__PURE__*/React.createElement("p", {
    className: "contact__lead"
  }, "Start a conversation about your project, your operations, or your next market. Direct, results-focused, grounded in four decades of global delivery."), /*#__PURE__*/React.createElement("div", {
    className: "contact__rows"
  }, /*#__PURE__*/React.createElement("a", {
    className: "crow",
    href: "mailto:syedkamranazmi@yahoo.com"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "mail"
  }), /*#__PURE__*/React.createElement("span", null, "syedkamranazmi@yahoo.com")), /*#__PURE__*/React.createElement("a", {
    className: "crow",
    href: "#"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "linkedin"
  }), /*#__PURE__*/React.createElement("span", null, "linkedin.com/in/kamran-azmi")))), /*#__PURE__*/React.createElement("div", {
    className: "form"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    className: "form__done"
  }, /*#__PURE__*/React.createElement("span", {
    className: "form__burst"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check"
  })), /*#__PURE__*/React.createElement("h4", null, "Request received"), /*#__PURE__*/React.createElement("p", null, "Thank you \u2014 Syed's office will be in touch within two business days."), /*#__PURE__*/React.createElement("button", {
    className: "form__again",
    onClick: () => setSent(false)
  }, "Send another")) : /*#__PURE__*/React.createElement("form", {
    className: "form__grid",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Name"), /*#__PURE__*/React.createElement("input", {
    name: "name",
    required: true,
    placeholder: "Your full name"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Email"), /*#__PURE__*/React.createElement("input", {
    name: "email",
    required: true,
    type: "email",
    placeholder: "you@company.com"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Phone"), /*#__PURE__*/React.createElement("input", {
    name: "phone",
    type: "tel",
    placeholder: "+1 234 567 890"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Company"), /*#__PURE__*/React.createElement("input", {
    name: "company",
    placeholder: "Organization"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field full"
  }, /*#__PURE__*/React.createElement("label", null, "Project Scope"), /*#__PURE__*/React.createElement("textarea", {
    name: "scope",
    rows: "2",
    value: scope,
    onChange: e => setScope(e.target.value),
    placeholder: "Tell us about your project\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field full"
  }, /*#__PURE__*/React.createElement("label", null, "Preferred Contact"), /*#__PURE__*/React.createElement("select", {
    name: "preferred",
    defaultValue: ""
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "Select a method"), /*#__PURE__*/React.createElement("option", null, "Email"), /*#__PURE__*/React.createElement("option", null, "Phone"), /*#__PURE__*/React.createElement("option", null, "WhatsApp"))), /*#__PURE__*/React.createElement("div", {
    className: "field full"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    icon: "arrow-right",
    full: true
  }, "Schedule a Consultation")))))));
}
Object.assign(window, {
  ServicesTeaser,
  ReachTeaser,
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/home2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/projects.jsx
try { (() => {
/* Projects page — hero + searchable explorer (masonry grid) */
const {
  useState: useStateP,
  useEffect: useEffectP,
  useRef: useRefP,
  useMemo: useMemoP
} = React;

/* ---------- HERO ---------- */
function ProjectsHero() {
  const bg = useRefP(null);
  useEffectP(() => {
    const on = () => {
      if (bg.current) bg.current.style.transform = `translateY(${window.scrollY * 0.28}px) scale(1.08)`;
    };
    window.addEventListener('scroll', on, {
      passive: true
    });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useLucide();
  return /*#__PURE__*/React.createElement("header", {
    className: "ahero projects-hero"
  }, /*#__PURE__*/React.createElement("div", {
    ref: bg,
    className: "ahero__bg",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "proj-card__grid"
  }), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "layout-grid"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dhero__scrim"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap ahero__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "dhero__back",
    href: "index.html"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left",
    style: {
      width: 15,
      height: 15
    }
  }), " Home"), /*#__PURE__*/React.createElement("span", {
    className: "dhero__sector"
  }, "Projects & Global Reach"), /*#__PURE__*/React.createElement("h1", {
    className: "ahero__title"
  }, "A portfolio built", /*#__PURE__*/React.createElement("br", null), "across global regions"), /*#__PURE__*/React.createElement("span", {
    className: "ahero__role"
  }, "Explore where the work has taken us on the map, then search and filter the full body of work below.")));
}

/* ---------- EXPLORER (search + filter + masonry) ---------- */
function ProjectsExplorer() {
  const [q, setQ] = useStateP('');
  const [sector, setSector] = useStateP('All');
  useLucide(q, sector);
  const list = useMemoP(() => PROJECTS.filter(p => {
    const ms = sector === 'All' || p.sectors.includes(sector);
    const hay = (p.name + ' ' + p.loc + ' ' + p.country + ' ' + p.sector + ' ' + p.expertise.join(' ')).toLowerCase();
    const mq = !q || hay.includes(q.toLowerCase());
    return ms && mq;
  }).sort((a, b) => a.rank - b.rank), [q, sector]);
  return /*#__PURE__*/React.createElement("section", {
    className: "featured featured--page",
    id: "projects"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    index: "02",
    eyebrow: "Landmark Projects",
    title: "Selected highlights, ready to explore",
    max: "26em"
  }, /*#__PURE__*/React.createElement("p", {
    className: "services__lead"
  }, "Selected developments from an extensive portfolio spanning 40+ years across residential, commercial, industrial, mixed-use, and hospitality sectors globally.")), /*#__PURE__*/React.createElement("div", {
    className: "featured__controls"
  }, /*#__PURE__*/React.createElement("div", {
    className: "search"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search"
  }), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search projects, places, sectors, expertise\u2026"
  }), q && /*#__PURE__*/React.createElement("button", {
    onClick: () => setQ(''),
    "aria-label": "Clear"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x",
    style: {
      width: 15,
      height: 15
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "chips"
  }, SECTORS.map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    className: `chip ${sector === s ? 'active' : ''}`,
    onClick: () => setSector(s)
  }, s)))), /*#__PURE__*/React.createElement("div", {
    className: "featured__count"
  }, list.length, " project", list.length !== 1 ? 's' : '', " shown"), /*#__PURE__*/React.createElement("div", {
    className: "pgrid"
  }, list.map((p, idx) => /*#__PURE__*/React.createElement(Reveal, {
    key: p.id,
    delay: idx % 3 * 70,
    className: "pgrid__item"
  }, /*#__PURE__*/React.createElement(ProjectCard, {
    p: p
  })))), list.length === 0 && /*#__PURE__*/React.createElement("p", {
    className: "featured__empty"
  }, "No projects match \u2014 try a different search or filter.")));
}

/* ---------- CTA ---------- */
function ProjectsCTA() {
  useLucide();
  return /*#__PURE__*/React.createElement("section", {
    className: "dcta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dcta__grid-bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap dcta__inner"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    copper: true,
    light: true
  }, "Have a project in mind?"), /*#__PURE__*/React.createElement("h2", {
    className: "dcta__title"
  }, "Let's deliver the next landmark."), /*#__PURE__*/React.createElement("p", {
    className: "dcta__lead"
  }, "Four decades of complex, multi-phase delivery \u2014 at your service."), /*#__PURE__*/React.createElement(Button, {
    icon: "arrow-right",
    href: "index.html#contact"
  }, "Start a Consultation")));
}
Object.assign(window, {
  ProjectsHero,
  ProjectsExplorer,
  ProjectsCTA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/projects.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/reach.jsx
try { (() => {
/* Global Reach page — real dotted world map + regional breakdown */
const {
  useState: useStateR,
  useEffect: useEffectR,
  useMemo: useMemoR,
  useRef: useRefR
} = React;

/* ---------- Equirectangular world, cropped to populated latitudes ----------
   x = lng + 180  (0..360)      y = TOP - lat   (TOP=83, BOTTOM=-56 -> H=139)   */
const MAP_W = 360,
  MAP_TOP = 83,
  MAP_BOTTOM = -56,
  MAP_H = MAP_TOP - MAP_BOTTOM;
const projX = lng => lng + 180;
const projY = lat => MAP_TOP - lat;
const pctX = lng => projX(lng) / MAP_W * 100;
const pctY = lat => projY(lat) / MAP_H * 100;

/* Land approximated as a union of ellipses in (lng,lat) degrees — {cx,cy,rx,ry} */
const LAND = [
// North America
[-100, 58, 34, 15], [-98, 40, 22, 12], [-150, 63, 15, 8], [-112, 30, 10, 12], [-101, 20, 8, 8], [-86, 13, 8, 4.5], [-82, 33, 8, 10], [-122, 52, 10, 8],
// Greenland
[-42, 72, 13, 9],
// South America
[-63, -3, 17, 12], [-60, -18, 13, 12], [-67, -37, 8, 12], [-71, -49, 4, 6],
// Europe
[6, 48, 16, 10], [28, 52, 22, 11], [18, 63, 12, 9], [-3, 54, 4.5, 5], [-5, 40, 7, 6], [18, 42, 12, 7],
// Africa
[15, 22, 28, 13], [-2, 11, 12, 10], [22, 2, 18, 14], [25, -22, 13, 12], [45, 8, 8, 9], [24, -31, 7, 5],
// Middle East
[47, 24, 12, 11], [38, 37, 12, 7], [55, 32, 10, 8],
// Asia
[60, 58, 22, 13], [100, 62, 40, 15], [140, 62, 18, 10], [68, 46, 20, 11], [105, 34, 18, 12], [103, 47, 15, 7], [78, 23, 11, 12], [101, 15, 9, 10], [126, 38, 5.5, 7],
// Japan
[139, 38, 4.5, 8],
// Oceania / island arcs
[110, -3, 15, 5], [122, 6, 9, 9], [140, -6, 10, 4.5], [134, -25, 18, 11], [172, -42, 3.5, 6], [47, -20, 4, 9]];
const isLand = (lng, lat) => LAND.some(([cx, cy, rx, ry]) => {
  const a = (lng - cx) / rx,
    b = (lat - cy) / ry;
  return a * a + b * b <= 1;
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
function WorldMap({
  activeRegion,
  onRegionPick,
  projects
}) {
  useLucide(activeRegion);
  /* scatter pins that share a city so stacked projects stay clickable */
  const placed = useMemoR(() => {
    const groups = {};
    projects.forEach(p => {
      (groups[p.locationKey] = groups[p.locationKey] || []).push(p);
    });
    const out = [];
    Object.values(groups).forEach(arr => {
      const n = arr.length;
      arr.forEach((p, i) => {
        let dx = 0,
          dy = 0;
        if (n > 1) {
          const ring = 2.4;
          const ang = i / n * Math.PI * 2;
          dx = Math.cos(ang) * ring;
          dy = Math.sin(ang) * ring;
        }
        out.push({
          ...p,
          _x: pctX(p.lng + dx),
          _y: pctY(p.lat + dy)
        });
      });
    });
    return out;
  }, [projects]);
  return /*#__PURE__*/React.createElement("div", {
    className: "wmap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wmap__frame"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "wmap__svg",
    viewBox: `0 0 ${MAP_W} ${MAP_H}`,
    preserveAspectRatio: "xMidYMid meet",
    "aria-hidden": "true"
  }, MAP_DOTS.map((d, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: d[0],
    cy: d[1],
    r: "0.62",
    className: "wmap__dot"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "wmap__pins"
  }, placed.map(p => {
    const on = !activeRegion || activeRegion === p.region;
    return /*#__PURE__*/React.createElement("a", {
      key: p.id,
      className: `wpin ${on ? '' : 'dim'} ${activeRegion === p.region ? 'hot' : ''}`,
      href: `project.html?id=${p.id}`,
      style: {
        left: p._x + '%',
        top: p._y + '%'
      },
      onMouseEnter: () => onRegionPick(p.locationKey),
      "data-hover": true
    }, /*#__PURE__*/React.createElement("span", {
      className: "wpin__ring"
    }), /*#__PURE__*/React.createElement("span", {
      className: "wpin__dot"
    }), /*#__PURE__*/React.createElement("span", {
      className: "wpin__tip"
    }, /*#__PURE__*/React.createElement("strong", null, p.name), /*#__PURE__*/React.createElement("em", null, p.city, " \xB7 ", p.country)));
  })), /*#__PURE__*/React.createElement("span", {
    className: "wmap__corner tl"
  }), /*#__PURE__*/React.createElement("span", {
    className: "wmap__corner tr"
  }), /*#__PURE__*/React.createElement("span", {
    className: "wmap__corner bl"
  }), /*#__PURE__*/React.createElement("span", {
    className: "wmap__corner br"
  })), /*#__PURE__*/React.createElement("p", {
    className: "wmap__hint"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "mouse-pointer-click",
    style: {
      width: 13,
      height: 13
    }
  }), " Hover a marker to focus its city \xB7 click to open the project"));
}

/* ---------- REACH HERO ---------- */
function ReachHero() {
  const bg = useRefR(null);
  useEffectR(() => {
    const on = () => {
      if (bg.current) bg.current.style.transform = `translateY(${window.scrollY * 0.28}px) scale(1.08)`;
    };
    window.addEventListener('scroll', on, {
      passive: true
    });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useLucide();
  return /*#__PURE__*/React.createElement("header", {
    className: "ahero reach-hero"
  }, /*#__PURE__*/React.createElement("div", {
    ref: bg,
    className: "ahero__bg",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "proj-card__grid"
  }), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "globe-2"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dhero__scrim"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap ahero__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "dhero__back",
    href: "index.html"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left",
    style: {
      width: 15,
      height: 15
    }
  }), " Home"), /*#__PURE__*/React.createElement("span", {
    className: "dhero__sector"
  }, "Global Reach"), /*#__PURE__*/React.createElement("h1", {
    className: "ahero__title"
  }, "Projects across", /*#__PURE__*/React.createElement("br", null), "five regions, three countries"), /*#__PURE__*/React.createElement("span", {
    className: "ahero__role"
  }, "Four decades of delivery spanning Central Africa, the Gulf, and South Asia.")));
}

/* ---------- MAP + LOCATION SELECTOR ---------- */
function ReachMapSection() {
  const [locKey, setLocKey] = useStateR(LOCATION_GROUPS[0].key);
  useLucide(locKey);
  const cur = LOCATION_GROUPS.find(l => l.key === locKey);
  return /*#__PURE__*/React.createElement("section", {
    className: "reach2",
    id: "reach"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    index: "01",
    eyebrow: "Where the work has taken us",
    light: true,
    max: "22em"
  }), /*#__PURE__*/React.createElement("div", {
    className: "reach2__tabs"
  }, LOCATION_GROUPS.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.key,
    className: `reach2__tab ${locKey === l.key ? 'on' : ''}`,
    onClick: () => setLocKey(l.key)
  }, /*#__PURE__*/React.createElement("span", {
    className: "reach2__tab-n"
  }, l.city), /*#__PURE__*/React.createElement("span", {
    className: "reach2__tab-c"
  }, l.projects.length, " project", l.projects.length > 1 ? 's' : '')))), /*#__PURE__*/React.createElement(WorldMap, {
    activeRegion: locKey,
    onRegionPick: setLocKey,
    projects: PROJECTS
  }), /*#__PURE__*/React.createElement("div", {
    className: "reach2__panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reach2__panel-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "reach2__kicker"
  }, cur.country), /*#__PURE__*/React.createElement("h3", {
    className: "reach2__name"
  }, cur.city)), /*#__PURE__*/React.createElement("div", {
    className: "reach2__stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reach2__stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, /*#__PURE__*/React.createElement(Counter, {
    to: cur.projects.length
  })), /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Projects")))), /*#__PURE__*/React.createElement("p", {
    className: "reach2__note"
  }, cur.projects.length, " project", cur.projects.length > 1 ? 's' : '', " delivered in ", cur.city, ", ", cur.country, "."), /*#__PURE__*/React.createElement("div", {
    className: "reach2__projects"
  }, cur.projects.map(p => /*#__PURE__*/React.createElement("a", {
    key: p.id,
    className: "reach2__proj",
    href: `project.html?id=${p.id}`,
    "data-hover": true
  }, /*#__PURE__*/React.createElement("span", {
    className: `reach2__proj-ic tone${p.tone}`
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": p.ico,
    style: {
      width: 18,
      height: 18
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "reach2__proj-bd"
  }, /*#__PURE__*/React.createElement("span", {
    className: "reach2__proj-n"
  }, p.name), /*#__PURE__*/React.createElement("span", {
    className: "reach2__proj-m"
  }, p.sector)), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-up-right",
    className: "reach2__proj-go",
    style: {
      width: 16,
      height: 16
    }
  })))))));
}

/* ---------- REGIONAL SUMMARY STRIP ---------- */
function ReachSummary() {
  useLucide();
  const totals = [{
    v: 5,
    s: '',
    k: 'Cities Delivered'
  }, {
    v: 3,
    s: '',
    k: 'Countries'
  }, {
    v: 18,
    s: '',
    k: 'Landmark Projects'
  }, {
    v: 40,
    s: '+',
    k: 'Years Delivering'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rsum"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    index: "02",
    eyebrow: "At a glance",
    title: "A genuinely global delivery record",
    max: "20em"
  }), /*#__PURE__*/React.createElement("div", {
    className: "rsum__grid"
  }, totals.map(t => /*#__PURE__*/React.createElement(Reveal, {
    key: t.k,
    className: "rsum__cell",
    as: "div"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rsum__v"
  }, /*#__PURE__*/React.createElement(Counter, {
    to: t.v,
    suffix: t.s
  })), /*#__PURE__*/React.createElement("span", {
    className: "rsum__k"
  }, t.k))))));
}

/* ---------- CTA ---------- */
function ReachCTA() {
  useLucide();
  return /*#__PURE__*/React.createElement("section", {
    className: "dcta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dcta__grid-bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap dcta__inner"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    copper: true,
    light: true
  }, "Entering a new market?"), /*#__PURE__*/React.createElement("h2", {
    className: "dcta__title"
  }, "Cross-border delivery, de-risked."), /*#__PURE__*/React.createElement("p", {
    className: "dcta__lead"
  }, "Procurement, compliance, quality, and team-building \u2014 set up right, from the ground up."), /*#__PURE__*/React.createElement(Button, {
    icon: "arrow-right",
    href: "index.html#contact"
  }, "Start a Consultation")));
}
Object.assign(window, {
  ReachHero,
  ReachMapSection,
  ReachSummary,
  ReachCTA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/reach.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/services.jsx
try { (() => {
/* Services page — full services, engagement builder, process, competencies */
const {
  useState: useStateSv,
  useEffect: useEffectSv,
  useRef: useRefSv
} = React;
const SERVICES = [{
  ico: 'compass',
  name: 'Executive Advisory',
  exKey: 'strat',
  desc: 'Strategic guidance for boards, owners, and leadership teams navigating complex builds.'
}, {
  ico: 'layers',
  name: 'Ready-Mix Concrete Operations',
  exKey: 'pcd',
  desc: 'Standing up, turning around, and scaling batching plants into high-margin profit centers — the engine behind 400% growth at Parkland.'
}, {
  ico: 'settings-2',
  name: 'Operational Optimization',
  exKey: 'ops',
  desc: 'Process, procurement, and delivery efficiency engineered at scale.'
}, {
  ico: 'hard-hat',
  name: 'Project Leadership',
  exKey: 'pde',
  desc: 'Delivery excellence on complex, multi-phase, fast-tracked programs.'
}, {
  ico: 'users',
  name: 'Team & Talent Development',
  exKey: 'wf',
  desc: 'Building durable, high-performing site organizations that outlast the project.'
}, {
  ico: 'trending-up',
  name: 'Business Expansion',
  exKey: 'pcd',
  desc: 'Scaling operations and revenue with discipline and P&L ownership.'
}, {
  ico: 'globe-2',
  name: 'International Market Entry',
  exKey: 'proc',
  desc: 'Cross-border setup, procurement, and regulatory compliance, end to end.'
}];

/* ---------- HERO ---------- */
function ServicesHero() {
  const bg = useRefSv(null);
  useEffectSv(() => {
    const on = () => {
      if (bg.current) bg.current.style.transform = `translateY(${window.scrollY * 0.28}px) scale(1.08)`;
    };
    window.addEventListener('scroll', on, {
      passive: true
    });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useLucide();
  return /*#__PURE__*/React.createElement("header", {
    className: "ahero services-hero"
  }, /*#__PURE__*/React.createElement("div", {
    ref: bg,
    className: "ahero__bg",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "proj-card__grid"
  }), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "hard-hat"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dhero__scrim"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap ahero__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "dhero__back",
    href: "index.html"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left",
    style: {
      width: 15,
      height: 15
    }
  }), " Home"), /*#__PURE__*/React.createElement("span", {
    className: "dhero__sector"
  }, "Services"), /*#__PURE__*/React.createElement("h1", {
    className: "ahero__title"
  }, "Four decades of delivery,", /*#__PURE__*/React.createElement("br", null), "working for you"), /*#__PURE__*/React.createElement("span", {
    className: "ahero__role"
  }, "Seven advisory disciplines \u2014 selectable into a single, tailored engagement.")));
}

/* ---------- SERVICES + ENGAGEMENT BUILDER ---------- */
function ServicesGrid() {
  const [sel, setSel] = useStateSv([]);
  useLucide(sel.length);
  const toggle = name => setSel(s => s.includes(name) ? s.filter(x => x !== name) : [...s, name]);
  const request = () => {
    try {
      sessionStorage.setItem('ska_engagement', JSON.stringify(sel));
    } catch (e) {}
    window.location.href = 'index.html#contact';
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "services services--page",
    id: "services"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    index: "01",
    eyebrow: "Capabilities",
    title: "Select the services you need",
    max: "24em"
  }, /*#__PURE__*/React.createElement("p", {
    className: "services__lead"
  }, "Each discipline stands on its own \u2014 or combine several below and we'll compose a single, tailored scope of work.")), /*#__PURE__*/React.createElement("div", {
    className: "services__grid"
  }, SERVICES.map(s => {
    const rel = projectsByExpertise(s.exKey, 3);
    return /*#__PURE__*/React.createElement(Reveal, {
      key: s.name,
      className: `svc-card ${sel.includes(s.name) ? 'is-sel' : ''}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "svc-card__inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "svc-card__top",
      onClick: () => toggle(s.name),
      "data-hover": true
    }, /*#__PURE__*/React.createElement("span", {
      className: "svc-card__ico"
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": s.ico,
      style: {
        width: 24,
        height: 24
      }
    })), /*#__PURE__*/React.createElement("span", {
      className: "svc-card__check"
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": sel.includes(s.name) ? 'check' : 'plus',
      style: {
        width: 16,
        height: 16
      }
    }))), /*#__PURE__*/React.createElement("h3", {
      className: "svc-card__name",
      onClick: () => toggle(s.name),
      "data-hover": true
    }, s.name), /*#__PURE__*/React.createElement("p", {
      className: "svc-card__desc"
    }, s.desc), /*#__PURE__*/React.createElement("div", {
      className: "svc-card__rel"
    }, /*#__PURE__*/React.createElement("span", {
      className: "svc-card__rel-h"
    }, "Related projects"), rel.map(p => /*#__PURE__*/React.createElement("a", {
      key: p.id,
      className: "svc-card__rel-a",
      href: `project.html?id=${p.id}`,
      onClick: e => e.stopPropagation(),
      "data-hover": true
    }, /*#__PURE__*/React.createElement("span", {
      className: `svc-card__rel-ic tone${p.tone}`
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": p.ico,
      style: {
        width: 14,
        height: 14
      }
    })), /*#__PURE__*/React.createElement("span", {
      className: "svc-card__rel-nm"
    }, p.name), /*#__PURE__*/React.createElement("span", {
      className: "svc-card__rel-lo"
    }, p.city))))));
  })), /*#__PURE__*/React.createElement("div", {
    className: `engage ${sel.length ? 'is-on' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "engage__left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "engage__label"
  }, "Build Your Engagement"), /*#__PURE__*/React.createElement("p", {
    className: "engage__hint"
  }, sel.length ? `${sel.length} service${sel.length > 1 ? 's' : ''} selected — we'll tailor a combined scope.` : 'Select the services above to compose a tailored engagement.'), /*#__PURE__*/React.createElement("div", {
    className: "engage__chips"
  }, sel.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    className: "engage__chip"
  }, s, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x",
    style: {
      width: 12,
      height: 12
    },
    onClick: () => setSel(v => v.filter(x => x !== s))
  }))))), /*#__PURE__*/React.createElement("button", {
    className: "engage__cta",
    disabled: !sel.length,
    onClick: request
  }, "Request this engagement ", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right",
    style: {
      width: 16,
      height: 16
    }
  })))));
}

/* ---------- PROCESS ---------- */
const STEPS = [{
  n: '01',
  ico: 'search',
  name: 'Assess',
  desc: 'A direct, unsentimental read of your project, operations, or target market — risks, gaps, and the real constraints.'
}, {
  n: '02',
  ico: 'pencil-ruler',
  name: 'Plan',
  desc: 'A delivery strategy with clear ownership: procurement, schedule, quality, and the team structure to execute it.'
}, {
  n: '03',
  ico: 'hard-hat',
  name: 'Deliver',
  desc: 'Hands-on leadership through the build — coordinating multinational teams against an aggressive program.'
}, {
  n: '04',
  ico: 'trending-up',
  name: 'Scale',
  desc: 'Lock in the gains: durable site organizations, repeatable systems, and P&L outcomes that compound.'
}];
function Process() {
  useLucide();
  return /*#__PURE__*/React.createElement("section", {
    className: "process"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    index: "02",
    eyebrow: "How we work",
    title: "A disciplined path from brief to handover",
    max: "22em"
  }), /*#__PURE__*/React.createElement("div", {
    className: "process__grid"
  }, STEPS.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.n,
    delay: i * 80,
    className: "pstep",
    as: "div"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pstep__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pstep__n"
  }, s.n), /*#__PURE__*/React.createElement("span", {
    className: "pstep__ico"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": s.ico,
    style: {
      width: 22,
      height: 22
    }
  }))), /*#__PURE__*/React.createElement("h4", {
    className: "pstep__name"
  }, s.name), /*#__PURE__*/React.createElement("p", {
    className: "pstep__desc"
  }, s.desc))))));
}

/* ---------- COMPETENCIES ---------- */
const COMPS = [{
  ico: 'building',
  name: 'Construction Management',
  years: 40
}, {
  ico: 'layers',
  name: 'Ready-Mix Concrete Operations & Profit Center Development',
  years: 30
}, {
  ico: 'briefcase',
  name: 'Operations Leadership',
  years: 35
}, {
  ico: 'trending-up',
  name: 'P&L Ownership',
  years: 28
}, {
  ico: 'target',
  name: 'Strategic Planning',
  years: 30
}, {
  ico: 'users',
  name: 'Workforce Development',
  years: 33
}, {
  ico: 'hard-hat',
  name: 'Project Delivery & Execution',
  years: 36
}, {
  ico: 'file-signature',
  name: 'Contract Negotiation',
  years: 26
}, {
  ico: 'globe',
  name: 'International Procurement',
  years: 24
}];
function Competencies() {
  useLucide();
  return /*#__PURE__*/React.createElement("section", {
    className: "comps comps--alt",
    id: "competencies"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    index: "03",
    eyebrow: "Core Competencies",
    title: "Where deep expertise compounds",
    max: "18em"
  }), /*#__PURE__*/React.createElement("div", {
    className: "comps__grid"
  }, COMPS.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: c.name,
    delay: i % 4 * 60,
    className: "comp",
    as: "div"
  }, /*#__PURE__*/React.createElement("div", {
    className: "comp__inner",
    "data-hover": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "comp__ico"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": c.ico,
    style: {
      width: 22,
      height: 22
    }
  })), /*#__PURE__*/React.createElement("h4", {
    className: "comp__name"
  }, c.name), /*#__PURE__*/React.createElement("div", {
    className: "comp__bar"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: c.years / 40 * 100 + '%'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "comp__years"
  }, /*#__PURE__*/React.createElement(Counter, {
    to: c.years,
    suffix: "+ yrs"
  }))))))));
}

/* ---------- CTA ---------- */
function ServicesCTA() {
  useLucide();
  return /*#__PURE__*/React.createElement("section", {
    className: "dcta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dcta__grid-bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap dcta__inner"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    copper: true,
    light: true
  }, "Ready to start?"), /*#__PURE__*/React.createElement("h2", {
    className: "dcta__title"
  }, "Let's shape what comes next."), /*#__PURE__*/React.createElement("p", {
    className: "dcta__lead"
  }, "Tell us about your project, your operations, or your next market."), /*#__PURE__*/React.createElement(Button, {
    icon: "arrow-right",
    href: "consultation.html"
  }, "Start a Consultation")));
}
Object.assign(window, {
  ServicesHero,
  ServicesGrid,
  Process,
  Competencies,
  ServicesCTA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/services.jsx", error: String((e && e.message) || e) }); }

})();
