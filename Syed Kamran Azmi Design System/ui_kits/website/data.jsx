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
  cm:    'Construction Management',
  red:   'Real Estate Development',
  ops:   'Operations Leadership',
  pnl:   'P&L Management & Financial Control',
  strat: 'Strategic Planning & Business Growth',
  wf:    'Workforce Development & Team Building',
  pde:   'Project Delivery & Execution',
  proc:  'International Procurement & Supply Chain',
  cn:    'Contract Negotiation & Client Relations',
  pcd:   'Profit Center Development',
};
const exList = (keys) => keys.map((k) => EX[k]);

/* common expertise bundles to keep the data readable */
const EX_FULL  = ['cm','ops','pnl','strat','wf','pde','proc','cn'];          // 8-discipline standard
const EX_FULLP = ['cm','ops','pnl','strat','wf','pde','proc','cn','pcd'];    // standard + profit centre

/* ---- Canonical sectors (drive the filter UI) ---- */
const SECTORS = ['All', 'Residential', 'Commercial', 'Mixed-use', 'Office', 'Hospitality'];

/* maps a sector to its placeholder tone + icon for visual consistency */
const SECTOR_STYLE = {
  Residential: { tone: 0, ico: 'building-2' },
  Commercial:  { tone: 1, ico: 'store' },
  'Mixed-use': { tone: 2, ico: 'layout-grid' },
  Office:      { tone: 1, ico: 'briefcase' },
  Hospitality: { tone: 0, ico: 'utensils' },
};

/* ---- Locations (drive the Global Reach grouping) ---- */
const LOCATIONS = [
  { key: 'kinshasa',   city: 'Kinshasa',   country: 'DRC',      loc: 'Kinshasa, DRC',        region: 'Central Africa', lat: -4.32, lng: 15.31 },
  { key: 'doha',       city: 'Doha',       country: 'Qatar',    loc: 'Doha, Qatar',          region: 'Gulf',           lat: 25.29, lng: 51.53 },
  { key: 'islamabad',  city: 'Islamabad',  country: 'Pakistan', loc: 'Islamabad, Pakistan',  region: 'South Asia',     lat: 33.72, lng: 73.10 },
  { key: 'rawalpindi', city: 'Rawalpindi', country: 'Pakistan', loc: 'Rawalpindi, Pakistan', region: 'South Asia',     lat: 32.90, lng: 72.55 },
  { key: 'karachi',    city: 'Karachi',    country: 'Pakistan', loc: 'Karachi, Pakistan',    region: 'South Asia',     lat: 24.86, lng: 67.01 },
];
const LOC = Object.fromEntries(LOCATIONS.map((l) => [l.key, l]));

/* ---- Raw project records (rank order) ----
   prim   = primary canonical sector (used on cards + filter)
   secs   = all canonical sectors that apply
   rawSec = original sector text from the sheet (shown on detail)
   ex     = expertise keys                                              */
const RAW = [
  { rank: 1,  id: 'pointe-anglaise',  name: 'Pointe Anglaise',                   lk: 'kinshasa',   prim: 'Residential', secs: ['Residential', 'Mixed-use'], rawSec: 'Residential construction, Mixed-use developments, Real estate development', ex: ['cm','red','ops','pnl','strat','wf','pde','proc','cn','pcd'],
    desc: 'Pointe Anglaise blends urban dynamism with an atmosphere of serenity. Situated on the Congo River, Pointe Anglaise offers exceptional views in an iconic residential community that you can call home. Contemporary architecture and natural beauty unite to form a state-of-the-art hub of tranquility in a prime location.' },
  { rank: 2,  id: 'okapi',            name: 'Okapi',                             lk: 'kinshasa',   prim: 'Residential', secs: ['Residential', 'Mixed-use'], rawSec: 'Residential construction, Mixed-use developments', ex: ['cm','ops','strat','pde','proc','cn'],
    desc: "The 55 apartments in the Okapi building are intended for the staff of a major bank in the Democratic Republic of Congo. The complex is located in Gombe on a plot of land of typical size for Kinshasa. The scale of the project dictated the choice of a high-rise design to maintain a clear, open communal outdoor area at ground level. In addition to three underground parking levels, the complex comprises a ground floor and twelve upper floors. Each floor contains six apartments, ranging from two to three bedrooms. Given Kinshasa's seismic risk, reinforced concrete was the only structural element required. The facades are designed to limit solar gain and, through their geometry and the use of screens, ensure privacy for each apartment. The contrast is striking between the light-colored plaster and the significantly darker screens." },
  { rank: 3,  id: 'polygon',          name: 'Polygon',                           lk: 'kinshasa',   prim: 'Commercial',  secs: ['Commercial'], rawSec: 'Commercial construction', ex: EX_FULLP, desc: '' },
  { rank: 4,  id: 'doha-festival',    name: 'Doha Festival City',                lk: 'doha',       prim: 'Commercial',  secs: ['Commercial'], rawSec: 'Commercial construction', ex: EX_FULL,
    desc: 'Doha Festival City is a large Emirati-owned shopping mall and entertainment complex located in Umm Salal, north of Doha, Qatar, along Al Shamal Road. It is one of the largest retail developments in Qatar, featuring over 500 stores, 100 dining establishments, and extensive leisure attractions.' },
  { rank: 5,  id: 'attock-oil',       name: 'Attock Oil Head Office',            lk: 'rawalpindi', prim: 'Office',      secs: ['Office'], rawSec: 'Office building', ex: EX_FULL,
    desc: 'The head office for the Attock Group of Companies, which includes The Attock Oil Company, Attock Refinery Limited (ARL), and Attock Petroleum Limited (APL), is located at Attock House, Morgah, Rawalpindi, Pakistan. This location serves as the central hub for the group\'s vertically integrated oil and gas operations.' },
  { rank: 6,  id: 'msheireb',         name: 'Msheireb Downtown',                 lk: 'doha',       prim: 'Mixed-use',   secs: ['Mixed-use'], rawSec: 'Mixed-use developments', ex: EX_FULLP,
    desc: "Msheireb Downtown Doha is a $5.5 billion, 31-hectare sustainable regeneration project in the heart of Qatar's capital. Developed by Msheireb Properties, a subsidiary of the Qatar Foundation, it stands as the world's first fully built smart city district, seamlessly blending modern design with traditional Qatari heritage." },
  { rank: 7,  id: 'port-grand',       name: 'Port Grand',                        lk: 'karachi',    prim: 'Hospitality', secs: ['Hospitality'], rawSec: 'Hospitality, Real estate development, Recreational development', ex: ['cm','red','ops','pnl','strat','wf','pde','proc','cn','pcd'],
    desc: 'Port Grand is a premier waterfront, dining, and entertainment complex located along the historic 19th-century Native Jetty Bridge in Karachi, Pakistan. Spanning an area of 200,000 square feet, the culturally vibrant destination is known for its wide variety of local and international eateries, entertainment facilities, and scenic views of the Karachi port.' },
  { rank: 8,  id: 'pet-clinic',       name: 'Pet Clinic & Apartments',           lk: 'kinshasa',   prim: 'Mixed-use',   secs: ['Mixed-use'], rawSec: 'Mixed-use developments', ex: EX_FULLP, desc: '' },
  { rank: 9,  id: 'federal-cabinet',  name: 'Federal Cabinet Building',          lk: 'islamabad',  prim: 'Office',      secs: ['Office'], rawSec: 'Office Building', ex: ['cm','ops','strat','pde'],
    desc: 'The Federal Cabinet Building (also known as the Cabinet Block) is a prominent government facility located within the high-security Red Zone of Islamabad, Pakistan. It houses the Cabinet Secretariat and the Cabinet Division, which is the central administrative body responsible for assisting the Federal Cabinet, the Prime Minister, and various Cabinet Committees in decision-making.' },
  { rank: 10, id: 'silver-oaks',      name: 'Silver Oaks Luxury Apartments',     lk: 'islamabad',  prim: 'Residential', secs: ['Residential'], rawSec: 'Residential construction', ex: ['cm','ops','pnl','strat','wf','pde','cn'], desc: '' },
  { rank: 11, id: 'shamsar-basoko',   name: 'Shamsar Basoko',                    lk: 'kinshasa',   prim: 'Residential', secs: ['Residential'], rawSec: 'Residential construction', ex: EX_FULLP, desc: '' },
  { rank: 12, id: 'amaryllis',        name: 'Amaryllis',                         lk: 'kinshasa',   prim: 'Mixed-use',   secs: ['Mixed-use'], rawSec: 'Mixed-use developments', ex: EX_FULL, desc: '' },
  { rank: 13, id: 'uac',              name: 'UAC',                               lk: 'kinshasa',   prim: 'Commercial',  secs: ['Commercial'], rawSec: 'Commercial construction', ex: EX_FULLP, desc: '' },
  { rank: 14, id: 'eighteen',         name: 'Eighteen',                          lk: 'islamabad',  prim: 'Residential', secs: ['Residential'], rawSec: 'Residential construction', ex: EX_FULLP,
    desc: 'Eighteen, a prestigious residential project in Pakistan. Offering luxury villas and apartments at a prime location of Islamabad.' },
  { rank: 15, id: 'metro-cash-carry', name: 'Metro Cash & Carry',                lk: 'islamabad',  prim: 'Commercial',  secs: ['Commercial'], rawSec: 'Commercial construction', ex: EX_FULLP,
    desc: 'The METRO Islamabad Store is a massive wholesale and retail hypermarket.' },
  { rank: 16, id: 'nust-hostels',     name: 'NUST Hostels',                      lk: 'islamabad',  prim: 'Residential', secs: ['Residential'], rawSec: 'Residential construction', ex: EX_FULLP, desc: '' },
  { rank: 17, id: 'private-villa',    name: 'Private Luxury Villa',              lk: 'kinshasa',   prim: 'Residential', secs: ['Residential'], rawSec: 'Residential construction', ex: EX_FULL, desc: '' },
  { rank: 18, id: 'ufone-tower',      name: 'Ufone Tower',                       lk: 'islamabad',  prim: 'Office',      secs: ['Office'], rawSec: 'Office Building', ex: ['cm'], desc: '' },
];

/* ---- Per-project photo galleries ----
   Keyed by project id. First entry is the hero / card image.
   To add photos for a new project: copy the files into
   images/<id>/ and list them here (hero first). Nothing else
   needs to change — cards, slideshow, hero and detail gallery
   all read from this automatically.                             */
const GALLERY = {
  'pointe-anglaise': [
    'images/pointe-anglaise/5.jpeg',
    'images/pointe-anglaise/9.jpeg',
    'images/pointe-anglaise/2.jpeg',
    'images/pointe-anglaise/8.jpeg',
    'images/pointe-anglaise/3.jpeg',
    'images/pointe-anglaise/4.jpeg',
    'images/pointe-anglaise/10.jpeg',
    'images/pointe-anglaise/1.jpeg',
    'images/pointe-anglaise/6.jpeg',
    'images/pointe-anglaise/7.jpeg',
  ],
  'okapi': [
    'images/okapi/4.jpeg',
    'images/okapi/3.jpeg',
    'images/okapi/1.png',
    'images/okapi/2.png',
  ],
  'polygon': [
    'images/polygon/1.jpeg',
    'images/polygon/2.jpeg',
  ],
  'doha-festival': [
    'images/doha-festival/1.jpg',
    'images/doha-festival/2.png',
    'images/doha-festival/3.jpg',
  ],
  'attock-oil': [
    'images/attock-oil/1.jpeg',
  ],
  'msheireb': [
    'images/msheireb/3.png',
    'images/msheireb/1.jpg',
    'images/msheireb/2.jpg',
    'images/msheireb/4.jpg',
  ],
  'port-grand': [
    'images/port-grand/4.jpg',
    'images/port-grand/1.jpeg',
    'images/port-grand/3.jpeg',
    'images/port-grand/2.jpg',
  ],
  'pet-clinic': [
    'images/pet-clinic/1.jpeg',
  ],
  'federal-cabinet': [
    'images/federal-cabinet/1.png',
    'images/federal-cabinet/2.jpeg',
  ],
  'silver-oaks': [
    'images/silver-oaks/1.jpeg',
    'images/silver-oaks/2.jpeg',
    'images/silver-oaks/3.jpeg',
    'images/silver-oaks/4.jpeg',
  ],
  'shamsar-basoko': [
    'images/shamsar-basoko/1.jpeg',
    'images/shamsar-basoko/2.jpeg',
    'images/shamsar-basoko/3.jpeg',
    'images/shamsar-basoko/4.jpeg',
  ],
  'amaryllis': [
    'images/amaryllis/1.jpeg',
  ],
  'uac': [
    'images/uac/2.jpeg',
    'images/uac/1.jpeg',
    'images/uac/3.jpeg',
    'images/uac/4.jpeg',
  ],
  'eighteen': [
    'images/eighteen/1.jpeg',
    'images/eighteen/2.jpeg',
  ],
  'metro-cash-carry': [
    'images/metro-cash-carry/1.jpeg',
  ],
  'nust-hostels': [
    'images/nust-hostels/1.jpg',
  ],
  'private-villa': [
    'images/private-villa/1.jpeg',
    'images/private-villa/2.jpeg',
  ],
  'ufone-tower': [
    'images/ufone-tower/2.jpg',
    'images/ufone-tower/1.jpg',
    'images/ufone-tower/3.png',
  ],
};

/* full project name for the few that were shortened above (used in titles) */
const FULLNAME = {
  'silver-oaks': 'Silver Oaks Luxury Residential Apartments',
  'federal-cabinet': 'Federal Cabinet Building Islamabad',
  'nust-hostels': 'NUST (National University of Science & Technology) Hostels',
};

/* ---- Build the live PROJECTS array ---- */
const PROJECTS = RAW.map((r) => {
  const l = LOC[r.lk];
  const style = SECTOR_STYLE[r.prim] || { tone: 0, ico: 'building' };
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
    region: l.key,            // map highlighting keys off location
    lat: l.lat,
    lng: l.lng,
    sector: r.prim,           // primary sector — cards + filter
    sectors: r.secs,          // all canonical sectors
    rawSector: r.rawSec,      // original sheet text — detail page
    expertise: exList(r.ex),  // full strings for tags/lists
    exKeys: r.ex,
    desc: r.desc,
    img: gallery[0] || null, // hero / card image (from GALLERY map)
    gallery,                 // full set of photos for the detail page
    tone: style.tone,
    ico: style.ico,
  };
});

const byRank = (a, b) => a.rank - b.rank;

/* ---- Helpers ---- */
/* related projects in the same sector (excluding current), nearest by rank */
function relatedBySector(p, n = 3) {
  return PROJECTS
    .filter((x) => x.id !== p.id && x.sector === p.sector)
    .sort((a, b) => Math.abs(a.rank - p.rank) - Math.abs(b.rank - p.rank))
    .slice(0, n)
    .sort(byRank);
}

/* projects that applied a given expertise key — spread across rank for variety */
function projectsByExpertise(exKey, n = 3) {
  const matches = PROJECTS.filter((p) => p.exKeys.includes(exKey)).sort(byRank);
  if (matches.length <= n) return matches;
  const out = [];
  for (let i = 0; i < n; i++) {
    out.push(matches[Math.round((i * (matches.length - 1)) / (n - 1))]);
  }
  return [...new Map(out.map((p) => [p.id, p])).values()];
}

/* ---- Location groups for Global Reach (rank order within each) ---- */
const LOCATION_GROUPS = LOCATIONS.map((l) => ({
  ...l,
  projects: PROJECTS.filter((p) => p.locationKey === l.key).sort(byRank),
})).sort((a, b) => b.projects.length - a.projects.length);

Object.assign(window, {
  EX, PROJECTS, SECTORS, LOCATIONS, LOCATION_GROUPS, SECTOR_STYLE,
  relatedBySector, projectsByExpertise,
});
