/* ============================================
   GLOWUP — MAIN APPLICATION
   App initialization, routing, page rendering
   ============================================ */

import '@fontsource/inter';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/900.css';
import '@fontsource/outfit';
import '@fontsource/outfit/600.css';
import '@fontsource/outfit/700.css';
import '@fontsource/outfit/800.css';
import '@fontsource/outfit/900.css';
import './styles/base.css';
import './styles/components.css';
import './styles/animations.css';
import './styles/rgb.css';
import './styles/pages.css';

import { Router } from './router.js';
import { storage } from './utils/storage.js';
import { haptics } from './utils/haptics.js';
import { staggerEntrance, initScrollReveal } from './utils/animations.js';
import {
  categories, keystoneHabits, dietData, sleepData, lifestyleData,
  mentalData, supplementsData, skinData, environmentData, eliminateData,
  antiAgingData, antioxidantFoods, dopamineData, productivityData,
  socialData, medicalData, dailyRoutine, weeklyStructure, resultsTimeline,
  keyInsights, dailyHabits, topFiveCore, bonusTrio, getAllItems
} from './data/content.js';

// ── App State ──
const state = {
  settings: storage.getSettings(),
  searchOpen: false,
};

// ── Router Setup ──
const router = new Router();

// ── Icons (SVG) ──
const icons = {
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  compass: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  gamepad: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.544-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  chevDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
  bookmark: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`,
  bookmarkFill: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  alert: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
};

// ── RGB Container ──
function createRGBLayer() {
  return `<div class="rgb-container" id="rgbContainer">
    <div class="rgb-orb rgb-orb-1"></div>
    <div class="rgb-orb rgb-orb-2"></div>
    <div class="rgb-orb rgb-orb-3"></div>
    <div class="rgb-orb rgb-orb-4"></div>
    <div class="rgb-orb rgb-orb-5"></div>
    <div class="rgb-edge rgb-edge-top"></div>
    <div class="rgb-edge rgb-edge-bottom"></div>
    <div class="rgb-mesh"></div>
  </div>`;
}

// ── Bottom Navigation ──
function createBottomNav(active) {
  const tabs = [
    { id: '/', icon: icons.home, label: 'Home' },
    { id: '/explore', icon: icons.compass, label: 'Explore' },
    { id: '/routine', icon: icons.clock, label: 'Routine' },
    { id: '/games', icon: icons.gamepad, label: 'Games' },
    { id: '/saved', icon: icons.bookmark, label: 'Saved' },
    { id: '/settings', icon: icons.settings, label: 'Settings' },
  ];

  return `<nav class="bottom-nav" id="bottomNav">
    <div class="bottom-nav-bar">
      ${tabs.map(t => `
        <div class="nav-item ${active === t.id ? 'active' : ''}" data-route="${t.id}" id="nav-${t.id.replace('/', '') || 'home'}">
          <div class="nav-item-icon">${t.icon}</div>
          <span class="nav-item-label">${t.label}</span>
        </div>
      `).join('')}
    </div>
  </nav>`;
}

// ── Search Overlay ──
function createSearchOverlay() {
  return `<div class="search-overlay" id="searchOverlay">
    <div class="search-overlay-header">
      <input class="search-overlay-input" id="searchInput" type="text" placeholder="Search everything..." autocomplete="off" />
      <button class="btn-icon" id="searchClose"><div style="width:20px;height:20px">${icons.close}</div></button>
    </div>
    <div class="search-results" id="searchResults">
      <div class="empty-state">
        <div class="empty-state-icon">🔍</div>
        <div class="empty-state-title">Search GlowUp</div>
        <div class="empty-state-text">Find any tip, habit, or insight instantly</div>
      </div>
    </div>
  </div>`;
}

// ── Card Helper ──
function renderCard(item, showBookmark = true) {
  const isBookmarked = storage.isBookmarked(item.id);
  const priorityClass = item.priority === 'high' ? 'priority-high' :
    item.priority === 'medium' ? 'priority-medium' :
      item.priority === 'avoid' ? 'priority-avoid' : 'priority-low';
  const badgeClass = item.priority === 'high' ? 'badge-high' :
    item.priority === 'medium' ? 'badge-medium' :
      item.priority === 'avoid' ? 'badge-avoid' : 'badge-low';
  const badgeLabel = item.priority === 'high' ? 'Top Tier' :
    item.priority === 'medium' ? 'High Value' :
      item.priority === 'avoid' ? 'Avoid' : 'Useful';

  return `<div class="glass-card expand-card ${priorityClass}" data-id="${item.id}">
    <div class="expand-card-header">
      <div class="expand-card-icon" style="background:${item.priority === 'avoid' ? 'var(--accent-danger-dim)' : 'var(--accent-primary-dim)'}">
        ${item.icon || '📌'}
      </div>
      <div class="expand-card-content">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;flex-wrap:wrap">
          <div class="expand-card-title">${item.title}</div>
          <span class="badge ${badgeClass}">${badgeLabel}</span>
        </div>
        <div class="expand-card-subtitle">${item.desc}</div>
      </div>
      ${showBookmark ? `<button class="bookmark-btn ${isBookmarked ? 'active' : ''}" data-bookmark="${item.id}">
        <div style="width:18px;height:18px">${isBookmarked ? icons.bookmarkFill : icons.bookmark}</div>
      </button>` : ''}
      <div class="expand-card-chevron"><div style="width:16px;height:16px">${icons.chevDown}</div></div>
    </div>
    ${item.detail ? `<div class="expand-card-body">
      <div class="expand-card-detail">${item.detail}</div>
      ${item.quickTags ? `<div class="chip-list" style="margin-top:12px">${item.quickTags.map(t => `<span class="chip">${t}</span>`).join('')}</div>` : ''}
      ${item.caution ? '<div style="margin-top:12px;padding:8px 12px;background:var(--accent-warning-dim);border-radius:var(--radius-sm);font-size:var(--text-xs);color:var(--accent-warning)">⚠️ Consult doctor before use — liver history caution</div>' : ''}
    </div>` : ''}
  </div>`;
}

// ── Tier Section ──
function renderTierSection(label, dotClass, items) {
  if (!items || items.length === 0) return '';
  return `
    <div class="tier-header">
      <div class="tier-dot ${dotClass}"></div>
      <div class="tier-label">${label}</div>
    </div>
    <div class="stagger-enter" style="display:flex;flex-direction:column;gap:12px">
      ${items.map(item => renderCard(item)).join('')}
    </div>
  `;
}

// ── PAGE: Dashboard ──
function renderDashboard() {
  const randomInsight = keyInsights[Math.floor(Math.random() * keyInsights.length)];
  const bookmarkCount = storage.getBookmarks().length;

  return `
    <div class="page-content container page-enter">
      <!-- Hero -->
      <div class="dash-hero">
        <div class="dash-hero-bg"></div>
        <div class="dash-hero-label">Command Center</div>
        <h1 class="dash-hero-title"><span class="gradient-text">GlowUp</span></h1>
        <p class="dash-hero-subtitle">Your premium self-improvement control panel. Transform your health, mind, and body.</p>
      </div>

      <!-- Quick Search -->
      <div class="search-bar" id="dashSearch" style="margin-bottom:28px;cursor:pointer">
        <div class="search-bar-icon" style="width:20px;height:20px">${icons.search}</div>
        <span style="color:var(--text-muted);font-size:var(--text-sm)">Search habits, routines, insights...</span>
      </div>

      <!-- Stats -->
      <div class="dash-stats stagger-enter">
        <div class="dash-stat">
          <div class="dash-stat-value gradient-text">${categories.length}</div>
          <div class="dash-stat-label">Modules</div>
        </div>
        <div class="dash-stat">
          <div class="dash-stat-value gradient-text">${getAllItems().length}</div>
          <div class="dash-stat-label">Insights</div>
        </div>
        <div class="dash-stat">
          <div class="dash-stat-value gradient-text">${bookmarkCount}</div>
          <div class="dash-stat-label">Saved</div>
        </div>
      </div>

      <!-- Daily Insight -->
      <div class="section-label">💡 Daily Wisdom</div>
      <div class="insight-card" style="margin-bottom:32px">
        <div class="insight-card-quote">"${randomInsight.text}"</div>
        <div class="insight-card-label">${randomInsight.category}</div>
      </div>

      <!-- 7 Keystone Habits -->
      <div class="section-label">⚡ The 7 Keystone Habits — 95% of Results</div>
      <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:32px" class="stagger-enter">
        ${keystoneHabits.map(h => `
          <div class="keystone-card expand-card" data-keystone-id="${h.id}">
            <div class="expand-card-header" style="padding:0;background:transparent;border:none">
              <div class="keystone-number">${h.num}</div>
              <div class="keystone-content" style="flex:1">
                <div class="keystone-title">${h.title}</div>
                <div class="keystone-desc">${h.desc}</div>
              </div>
              <div class="expand-card-chevron" style="margin-left:8px"><div style="width:16px;height:16px">${icons.chevDown}</div></div>
            </div>
            <div class="expand-card-body" style="margin-top:0;padding-top:12px;border-top:1px solid rgba(255,255,255,0.07)">
              <div class="expand-card-detail" style="font-size:var(--text-sm);color:var(--text-secondary);line-height:1.75">${h.detail}</div>
              <div class="chip-list" style="margin-top:10px">
                ${(h.tags || []).map(t => `<span class="chip">${t}</span>`).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Top 5 Non-Negotiables -->
      <div class="section-label">🔑 Top 5 Non-Negotiables</div>
      <div style="display:flex;gap:8px;overflow-x:auto;padding-bottom:16px;margin-bottom:24px;scrollbar-width:none">
        ${topFiveCore.map(c => `
          <div style="flex-shrink:0;text-align:center;background:var(--glass-bg);backdrop-filter:blur(20px);border:1px solid var(--glass-border);border-radius:var(--radius-xl);padding:16px 14px;min-width:90px">
            <div style="font-size:1.8rem;margin-bottom:6px">${c.icon}</div>
            <div style="font-family:var(--font-heading);font-weight:700;font-size:var(--text-sm)">${c.word}</div>
            <div style="font-size:var(--text-xs);color:var(--text-tertiary);margin-top:4px">${c.desc}</div>
          </div>
        `).join('')}
      </div>

      <!-- Category Grid -->
      <div class="section-label">🧩 Modules</div>
      <div class="category-grid stagger-enter" style="margin-bottom:32px">
        ${categories.map(c => `
          <div class="category-card" data-category="${c.id}">
            <div class="category-card-icon" style="background:${c.color}15">${c.icon}</div>
            <div class="category-card-name">${c.name}</div>
          </div>
        `).join('')}
      </div>

      <!-- Results Timeline -->
      <div class="section-label">📈 Results Timeline</div>
      <div class="milestone-scroll" style="margin-bottom:32px">
        ${resultsTimeline.map(m => `
          <div class="milestone-card">
            <div style="font-size:1.5rem;margin-bottom:8px">${m.icon}</div>
            <div class="milestone-time">${m.timeframe}</div>
            <div class="milestone-desc">${m.result}</div>
          </div>
        `).join('')}
      </div>

      <!-- Ultra-Condensed Blueprint -->
      <div class="section-label">🚀 Ultra-Condensed Blueprint</div>
      <div class="glass-card priority-high" style="margin-bottom:32px">
        <div style="font-family:var(--font-heading);font-weight:700;font-size:var(--text-lg);margin-bottom:12px;color:var(--accent-primary)">Do ONLY these 5 for visible change in 2–4 weeks:</div>
        <ol style="padding-left:20px;display:flex;flex-direction:column;gap:8px">
          <li style="color:var(--text-secondary);font-size:var(--text-sm)"><strong style="color:var(--text-primary)">Wake 7 AM daily</strong> (incl. weekends)</li>
          <li style="color:var(--text-secondary);font-size:var(--text-sm)"><strong style="color:var(--text-primary)">Phone out by 9:30 PM</strong></li>
          <li style="color:var(--text-secondary);font-size:var(--text-sm)"><strong style="color:var(--text-primary)">3 meals/day with protein;</strong> cut sugar + packaged food</li>
          <li style="color:var(--text-secondary);font-size:var(--text-sm)"><strong style="color:var(--text-primary)">8,000 steps daily</strong> + walk after meals</li>
          <li style="color:var(--text-secondary);font-size:var(--text-sm)"><strong style="color:var(--text-primary)">SPF 50</strong> every morning</li>
        </ol>
        <div style="margin-top:16px;padding-top:12px;border-top:1px solid var(--glass-border);font-size:var(--text-xs);color:var(--text-tertiary)">
          <strong>Bonus trio that unlocks everything:</strong> ${bonusTrio.map(b => `${b.icon} ${b.word}`).join(' · ')}
        </div>
      </div>

      <!-- Bonus: Antioxidant Foods -->
      <div class="section-label">🌿 Antioxidant Powerfoods</div>
      <div class="chip-list" style="margin-bottom:32px">
        ${antioxidantFoods.map(f => `<span class="chip">${f.icon} ${f.name}</span>`).join('')}
      </div>

      <!-- Daily Habits -->
      <div class="section-label">☀️ Daily Micro-Habits</div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:40px">
        ${dailyHabits.map(h => `
          <div style="display:flex;align-items:center;gap:6px;padding:8px 14px;background:var(--glass-bg);border:1px solid var(--glass-border);border-radius:var(--radius-full);font-size:var(--text-sm)">${h.icon} ${h.name}</div>
        `).join('')}
      </div>
    </div>
  `;
}

// ── PAGE: Explore (Browse Categories) ──
function renderExplore() {
  return `
    <div class="page-content container page-enter">
      <div class="page-header">
        <h2 class="page-header-title">Explore Modules</h2>
        <button class="btn-icon" id="exploreSearch"><div style="width:20px;height:20px">${icons.search}</div></button>
      </div>
      <p style="color:var(--text-tertiary);font-size:var(--text-sm);margin-bottom:24px">Deep dive into each transformation zone</p>
      <div style="display:flex;flex-direction:column;gap:12px" class="stagger-enter">
        ${categories.map(c => `
          <div class="list-item" data-category="${c.id}">
            <div class="list-item-icon" style="background:${c.color}15;font-size:1.4rem">${c.icon}</div>
            <div class="list-item-content">
              <div class="list-item-title">${c.name}</div>
              <div class="list-item-desc">${c.desc}</div>
            </div>
            <div class="list-item-arrow" style="width:16px;height:16px;transform:rotate(-90deg)">${icons.chevDown}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ── PAGE: Category Detail ──
function renderCategory(categoryId) {
  const cat = categories.find(c => c.id === categoryId);
  if (!cat) return renderDashboard();

  let content = '';

  const catDataMap = {
    keystone: () => {
      content = `
        <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:24px">
          ${keystoneHabits.map(h => renderCard({ ...h, title: `${h.num}. ${h.title}` })).join('')}
        </div>
        <div class="section-label">🔑 Key Insights</div>
        <div style="display:flex;flex-direction:column;gap:12px">
          ${keyInsights.slice(0, 5).map(i => `
            <div class="glass-card priority-medium">
              <div style="font-size:var(--text-sm);color:var(--text-secondary);line-height:1.7">"${i.text}"</div>
              <div style="font-size:var(--text-xs);color:var(--accent-primary);margin-top:8px;font-weight:600">${i.category}</div>
            </div>
          `).join('')}
        </div>`;
    },
    diet: () => {
      content = renderTierSection('Top Tier — Non-Negotiable', 'top', dietData.topTier)
        + renderTierSection('High Value', 'high', dietData.highValue)
        + renderTierSection('Useful', 'useful', dietData.useful)
        + renderTierSection('🚫 Avoid', 'avoid', dietData.avoid);
    },
    sleep: () => {
      content = renderTierSection('Top Tier — Non-Negotiable', 'top', sleepData.topTier)
        + renderTierSection('High Value', 'high', sleepData.highValue)
        + renderTierSection('Useful', 'useful', sleepData.useful)
        + renderTierSection('🚫 Avoid', 'avoid', sleepData.avoid);
    },
    lifestyle: () => {
      content = renderTierSection('Top Tier — Non-Negotiable', 'top', lifestyleData.topTier)
        + renderTierSection('High Value', 'high', lifestyleData.highValue)
        + renderTierSection('Useful', 'useful', lifestyleData.useful)
        + renderTierSection('🚫 Avoid', 'avoid', lifestyleData.avoid);
    },
    mental: () => {
      content = renderTierSection('Top Tier', 'top', mentalData.topTier)
        + renderTierSection('High Value', 'high', mentalData.highValue)
        + renderTierSection('Useful', 'useful', mentalData.useful)
        + renderTierSection('🚫 Avoid', 'avoid', mentalData.avoid);
    },
    supplements: () => {
      content = `<div class="glass-card priority-avoid" style="margin-bottom:20px">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
            <div style="width:20px;height:20px;color:var(--accent-warning)">${icons.alert}</div>
            <strong style="color:var(--accent-warning);font-size:var(--text-sm)">Important</strong>
          </div>
          <div style="font-size:var(--text-sm);color:var(--text-secondary)">Test levels first. Given liver history, always consult your doctor before starting any supplement.</div>
        </div>`
        + renderTierSection('Top Tier (If Deficient)', 'top', supplementsData.topTier)
        + renderTierSection('High Value', 'high', supplementsData.highValue)
        + renderTierSection('Useful (Advanced)', 'useful', supplementsData.useful)
        + renderTierSection('🚫 Avoid', 'avoid', supplementsData.avoid);
    },
    skin: () => {
      content = `<div class="section-label" style="margin-top:8px">Internal (80% of results)</div>`
        + `<div style="display:flex;flex-direction:column;gap:12px;margin-bottom:20px">${skinData.internal.map(i => renderCard(i)).join('')}</div>`
        + `<div class="section-label">External — Minimal Routine</div>`
        + `<div style="display:flex;flex-direction:column;gap:12px;margin-bottom:20px">${skinData.external.map(i => renderCard(i)).join('')}</div>`
        + renderTierSection('🚫 Stop Immediately', 'avoid', skinData.avoid);
    },
    environment: () => {
      content = renderTierSection('Top Tier', 'top', environmentData.topTier)
        + renderTierSection('High Value', 'high', environmentData.highValue);
    },
    eliminate: () => {
      content = `<p style="color:var(--text-tertiary);font-size:var(--text-sm);margin-bottom:20px">Ranked by damage — eliminate from top to bottom for maximum impact.</p>
        <div style="display:flex;flex-direction:column;gap:12px">
          ${eliminateData.map(item => `
            <div class="glass-card priority-avoid expand-card" data-id="${item.id}">
              <div class="expand-card-header">
                <div style="width:36px;height:36px;border-radius:50%;background:var(--accent-danger-dim);display:flex;align-items:center;justify-content:center;font-family:var(--font-heading);font-weight:800;font-size:var(--text-sm);color:var(--accent-danger);flex-shrink:0">#${item.rank}</div>
                <div class="expand-card-content">
                  <div class="expand-card-title">${item.title}</div>
                  <div class="expand-card-subtitle">${item.desc}</div>
                </div>
                <div class="expand-card-chevron"><div style="width:16px;height:16px">${icons.chevDown}</div></div>
              </div>
              ${item.detail ? `<div class="expand-card-body"><div class="expand-card-detail">${item.detail}</div></div>` : ''}
            </div>
          `).join('')}
        </div>`;
    },
    antiaging: () => {
      content = `<p style="color:var(--text-tertiary);font-size:var(--text-sm);margin-bottom:20px">Advanced cellular rejuvenation and biohacking protocols with human RCT data.</p>
        <div style="display:flex;flex-direction:column;gap:12px">
          ${antiAgingData.map(item => renderCard(item)).join('')}
        </div>`;
    },
    dopamine: () => {
      content = `<p style="color:var(--text-tertiary);font-size:var(--text-sm);margin-bottom:20px">Reset your relationship with your phone and reclaim your attention.</p>
        <div style="display:flex;flex-direction:column;gap:12px">
          ${dopamineData.map(item => renderCard({ ...item, detail: item.detail || '', category: 'Digital Wellness' })).join('')}
        </div>`;
    },
    productivity: () => {
      content = `<div style="display:flex;flex-direction:column;gap:12px">
          ${productivityData.map(item => renderCard(item)).join('')}
        </div>`;
    },
    social: () => {
      content = `<div style="display:flex;flex-direction:column;gap:12px">
          ${socialData.map(item => renderCard(item)).join('')}
        </div>`;
    },
    medical: () => {
      content = `
        <div class="glass-card priority-avoid" style="margin-bottom:20px">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
            <div style="width:20px;height:20px;color:var(--accent-danger)">${icons.alert}</div>
            <strong style="color:var(--accent-danger);font-size:var(--text-sm)">Critical — Liver History</strong>
          </div>
          <div style="font-size:var(--text-sm);color:var(--text-secondary)">Tell every doctor: Liver surgery details, jaundice history (6×), all allergies, all supplements currently taking.</div>
        </div>

        <div class="section-label">📅 Book These Appointments</div>
        <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:24px">
          ${medicalData.appointments.map(a => `
            <div class="glass-card" style="padding:16px;display:flex;align-items:center;gap:12px">
              <div style="font-size:1.4rem">${a.icon}</div>
              <div><div style="font-weight:600;font-size:var(--text-base)">${a.title}</div><div style="font-size:var(--text-xs);color:var(--text-tertiary)">${a.desc}</div></div>
            </div>
          `).join('')}
        </div>

        <div class="section-label">🧪 Core Labs to Request</div>
        <div class="chip-list" style="margin-bottom:24px">
          ${medicalData.labs.map(l => `<span class="chip">${l}</span>`).join('')}
        </div>

        <div class="section-label">🚨 Red Flags — See Doctor Immediately</div>
        <div style="display:flex;flex-direction:column;gap:10px">
          ${medicalData.redFlags.map(rf => `
            <div class="glass-card priority-avoid" style="padding:14px;display:flex;align-items:center;gap:12px">
              <div style="font-size:1.2rem">${rf.icon}</div>
              <div><div style="font-weight:600;font-size:var(--text-sm)">${rf.title}</div><div style="font-size:var(--text-xs);color:var(--text-tertiary)">${rf.desc}</div></div>
            </div>
          `).join('')}
        </div>`;
    },
  };

  if (catDataMap[categoryId]) catDataMap[categoryId]();

  return `
    <div class="page-content container page-enter">
      <div class="page-header">
        <button class="page-header-back" id="backBtn"><div style="width:20px;height:20px">${icons.back}</div></button>
        <h2 class="page-header-title">${cat.icon} ${cat.name}</h2>
        <button class="btn-icon" id="catSearch"><div style="width:20px;height:20px">${icons.search}</div></button>
      </div>
      <p style="color:var(--text-tertiary);font-size:var(--text-sm);margin-bottom:20px">${cat.desc}</p>
      ${content}
    </div>
  `;
}

// ── PAGE: Daily Routine ──
function renderRoutine() {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMin = now.getMinutes();

  return `
    <div class="page-content container page-enter">
      <div class="page-header">
        <h2 class="page-header-title">⏰ Daily Routine</h2>
      </div>
      <p style="color:var(--text-tertiary);font-size:var(--text-sm);margin-bottom:24px">Your optimized daily blueprint for transformation</p>

      <!-- Timeline -->
      <div style="margin-bottom:32px">
        ${dailyRoutine.map((item, idx) => {
    const [h, m] = item.time.replace(/\s*(AM|PM)/i, ' $1').split(/[:\s]/);
    let hour = parseInt(h);
    const isPM = item.time.toUpperCase().includes('PM');
    if (isPM && hour !== 12) hour += 12;
    if (!isPM && hour === 12) hour = 0;
    const isActive = currentHour === hour || (currentHour === hour && currentMin >= parseInt(m || 0));
    const isLast = idx === dailyRoutine.length - 1;

    return `<div class="timeline-item">
            ${!isLast ? '<div class="timeline-line"></div>' : ''}
            <div class="timeline-dot ${isActive ? 'active' : ''}">${item.icon}</div>
            <div class="timeline-body">
              <div class="timeline-time">${item.time}</div>
              <div class="timeline-title">${item.action}</div>
              <div class="timeline-desc">${item.desc}</div>
            </div>
          </div>`;
  }).join('')}
      </div>

      <div class="divider"></div>

      <!-- Weekly Structure -->
      <div class="section-label">🗓️ Weekly Structure</div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:32px" class="stagger-enter">
        ${weeklyStructure.map(w => {
    const today = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][now.getDay()];
    const isToday = w.day === today;
    return `<div class="week-card" style="${isToday ? 'border-color:var(--accent-primary-glow);box-shadow:var(--shadow-glow-sm)' : ''}">
            <div class="week-card-day" style="display:flex;align-items:center;gap:8px">
              ${w.icon} ${w.day}
              ${isToday ? '<span class="badge badge-high" style="font-size:0.6rem">TODAY</span>' : ''}
            </div>
            <div class="week-card-activity">${w.activity} — ${w.duration}</div>
          </div>`;
  }).join('')}
      </div>

      <!-- Key Insights -->
      <div class="section-label">🔑 Key Insights You Must Know</div>
      <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:32px">
        ${keyInsights.map(i => `
          <div class="glass-card priority-medium" style="padding:16px">
            <div style="font-size:var(--text-sm);color:var(--text-secondary);line-height:1.7">💡 ${i.text}</div>
            <div style="font-size:var(--text-xs);color:var(--accent-primary);margin-top:8px;font-weight:600">${i.category}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ── PAGE: Games ──
function renderGames() {
  const highScoreFlappy = storage.getHighScore('flappy');
  const highScoreMario = storage.getHighScore('mario');

  return `
    <div class="page-content container page-enter">
      <div class="page-header">
        <h2 class="page-header-title">🎮 Games</h2>
      </div>
      <p style="color:var(--text-tertiary);font-size:var(--text-sm);margin-bottom:24px">Take a break, challenge yourself</p>

      <div style="display:flex;flex-direction:column;gap:16px">
        <div class="game-card" id="playFlappy">
          <div class="game-card-preview" style="background:linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)">
            <div style="position:relative;z-index:1;display:flex;flex-direction:column;align-items:center">
              <div style="font-size:3rem;margin-bottom:8px">🐦</div>
              <div style="font-family:var(--font-heading);font-weight:800;font-size:1.2rem;color:var(--accent-primary)">Tap to Play</div>
            </div>
          </div>
          <div class="game-card-info">
            <div class="game-card-title">Flappy Bird</div>
            <div class="game-card-desc">Navigate through pipes — tap to flap!</div>
            ${highScoreFlappy > 0 ? `<div style="margin-top:8px;font-size:var(--text-xs);color:var(--accent-warning)">🏆 High Score: ${highScoreFlappy}</div>` : ''}
          </div>
        </div>

        <div class="game-card" id="playMario">
          <div class="game-card-preview" style="background:linear-gradient(135deg, #1a0a2e 0%, #2d1054 50%, #1a0a2e 100%)">
            <div style="position:relative;z-index:1;display:flex;flex-direction:column;align-items:center">
              <div style="font-size:3rem;margin-bottom:8px">🍄</div>
              <div style="font-family:var(--font-heading);font-weight:800;font-size:1.2rem;color:var(--accent-tertiary)">Tap to Play</div>
            </div>
          </div>
          <div class="game-card-info">
            <div class="game-card-title">Super Mario</div>
            <div class="game-card-desc">Jump on enemies · Hit ? blocks · Collect coins!</div>
            ${highScoreMario > 0 ? `<div style="margin-top:8px;font-size:var(--text-xs);color:var(--accent-warning)">🏆 High Score: ${highScoreMario}</div>` : ''}
          </div>
        </div>
      </div>
    </div>
  `;
}

// ── PAGE: Flappy Bird Game ──
function renderFlappyBird() {
  return `
    <div class="game-container" id="flappyContainer">
      <div class="game-header">
        <button class="btn-icon" id="exitGame"><div style="width:20px;height:20px">${icons.back}</div></button>
        <div class="game-score" id="gameScore">0</div>
        <div style="width:44px"></div>
      </div>
      <div class="game-canvas-wrap">
        <canvas id="flappyCanvas"></canvas>
      </div>
    </div>
  `;
}

function initFlappyBird() {
  const canvas = document.getElementById('flappyCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const container = canvas.parentElement;

  const W = 400, H = 600;
  canvas.width = W;
  canvas.height = H;

  let bird = { x: 80, y: 250, vy: 0, radius: 15 };
  let pipes = [];
  let score = 0;
  let frame = 0;
  let gameState = 'waiting'; // waiting, playing, dead
  const gravity = 0.25;
  const flapForce = -6;
  const pipeWidth = 50;
  const pipeGap = 185;
  const pipeSpeed = 2.0;

  function spawnPipe() {
    const minTop = 100;
    const maxTop = H - pipeGap - 100;
    const topH = minTop + Math.random() * (maxTop - minTop);
    pipes.push({ x: W + 20, topH, passed: false });
  }

  function reset() {
    bird = { x: 80, y: 250, vy: 0, radius: 15 };
    pipes = [];
    score = 0;
    frame = 0;
    gameState = 'waiting';
    updateScoreDisplay();
  }

  function flap() {
    if (gameState === 'waiting') {
      gameState = 'playing';
      bird.vy = flapForce;
      haptics.light();
    } else if (gameState === 'playing') {
      bird.vy = flapForce;
      haptics.tap();
    } else if (gameState === 'dead') {
      reset();
    }
  }

  function updateScoreDisplay() {
    const el = document.getElementById('gameScore');
    if (el) el.textContent = score;
  }

  function update() {
    if (gameState !== 'playing') return;

    bird.vy += gravity;
    bird.y += bird.vy;
    frame++;

    if (frame % 120 === 0) spawnPipe();

    pipes.forEach(p => {
      p.x -= pipeSpeed;
      if (!p.passed && p.x + pipeWidth < bird.x) {
        p.passed = true;
        score++;
        updateScoreDisplay();
        haptics.light();
      }
    });

    pipes = pipes.filter(p => p.x > -pipeWidth - 10);

    // Collision
    if (bird.y - bird.radius < 0 || bird.y + bird.radius > H) {
      die();
      return;
    }

    for (const p of pipes) {
      if (bird.x + bird.radius > p.x && bird.x - bird.radius < p.x + pipeWidth) {
        if (bird.y - bird.radius < p.topH || bird.y + bird.radius > p.topH + pipeGap) {
          die();
          return;
        }
      }
    }
  }

  function die() {
    gameState = 'dead';
    haptics.heavy();
    const isNew = storage.setHighScore('flappy', score);
  }

  function draw() {
    // Background
    const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
    bgGrad.addColorStop(0, '#0a0a1a');
    bgGrad.addColorStop(0.5, '#0e1428');
    bgGrad.addColorStop(1, '#0a0a1a');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    // Stars
    ctx.fillStyle = 'rgba(167, 139, 250, 0.3)';
    for (let i = 0; i < 30; i++) {
      const sx = (i * 137 + frame * 0.2) % W;
      const sy = (i * 97) % H;
      ctx.beginPath();
      ctx.arc(sx, sy, 1, 0, Math.PI * 2);
      ctx.fill();
    }

    // Pipes
    pipes.forEach(p => {
      const pipeGrad = ctx.createLinearGradient(p.x, 0, p.x + pipeWidth, 0);
      pipeGrad.addColorStop(0, '#1a3a5c');
      pipeGrad.addColorStop(0.5, '#2a5a8c');
      pipeGrad.addColorStop(1, '#1a3a5c');
      ctx.fillStyle = pipeGrad;

      // Top pipe
      ctx.fillRect(p.x, 0, pipeWidth, p.topH);
      ctx.fillStyle = '#06b6d4';
      ctx.fillRect(p.x - 3, p.topH - 20, pipeWidth + 6, 20);

      // Bottom pipe
      ctx.fillStyle = pipeGrad;
      ctx.fillRect(p.x, p.topH + pipeGap, pipeWidth, H - p.topH - pipeGap);
      ctx.fillStyle = '#06b6d4';
      ctx.fillRect(p.x - 3, p.topH + pipeGap, pipeWidth + 6, 20);

      // Glow
      ctx.shadowColor = '#06b6d4';
      ctx.shadowBlur = 10;
      ctx.fillStyle = 'rgba(6, 182, 212, 0.1)';
      ctx.fillRect(p.x - 5, p.topH - 5, pipeWidth + 10, 5);
      ctx.fillRect(p.x - 5, p.topH + pipeGap, pipeWidth + 10, 5);
      ctx.shadowBlur = 0;
    });

    // Bird
    ctx.save();
    ctx.translate(bird.x, bird.y);
    const angle = Math.min(Math.max(bird.vy * 3, -30), 60) * Math.PI / 180;
    ctx.rotate(angle);

    // Bird glow
    ctx.shadowColor = '#a78bfa';
    ctx.shadowBlur = 20;

    // Bird body
    const birdGrad = ctx.createRadialGradient(0, 0, 2, 0, 0, bird.radius);
    birdGrad.addColorStop(0, '#c4b5fd');
    birdGrad.addColorStop(0.6, '#a78bfa');
    birdGrad.addColorStop(1, '#7c3aed');
    ctx.fillStyle = birdGrad;
    ctx.beginPath();
    ctx.arc(0, 0, bird.radius, 0, Math.PI * 2);
    ctx.fill();

    // Eye
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(6, -4, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#1a1a2e';
    ctx.beginPath();
    ctx.arc(7, -4, 2.5, 0, Math.PI * 2);
    ctx.fill();

    // Wing
    ctx.fillStyle = '#8b5cf6';
    ctx.beginPath();
    ctx.ellipse(-5, 4, 10, 5, -0.3 + Math.sin(frame * 0.3) * 0.3, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();

    // Game states overlays
    if (gameState === 'waiting') {
      ctx.fillStyle = 'rgba(8, 8, 13, 0.5)';
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = '#f1f5f9';
      ctx.font = '800 28px Outfit, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Tap to Start', W / 2, H / 2 - 10);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '400 14px Inter, sans-serif';
      ctx.fillText('Navigate through the pipes', W / 2, H / 2 + 25);
    }

    if (gameState === 'dead') {
      ctx.fillStyle = 'rgba(8, 8, 13, 0.7)';
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = '#f87171';
      ctx.font = '800 32px Outfit, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Game Over', W / 2, H / 2 - 40);
      ctx.fillStyle = '#f1f5f9';
      ctx.font = '600 20px Outfit, sans-serif';
      ctx.fillText(`Score: ${score}`, W / 2, H / 2 + 5);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '400 14px Inter, sans-serif';
      const hs = storage.getHighScore('flappy');
      ctx.fillText(`Best: ${hs}`, W / 2, H / 2 + 35);
      ctx.fillStyle = '#a78bfa';
      ctx.fillText('Tap to Retry', W / 2, H / 2 + 70);
    }
  }

  function loop() {
    update();
    draw();
    if (document.getElementById('flappyCanvas')) {
      requestAnimationFrame(loop);
    }
  }

  canvas.addEventListener('click', flap);
  canvas.addEventListener('touchstart', (e) => { e.preventDefault(); flap(); }, { passive: false });

  loop();
}

// ── PAGE: Super Mario Game ──
function renderMarioGame() {
  return `
    <div class="game-container" id="marioContainer">
      <div class="game-header" style="position:absolute;top:0;left:0;right:0;z-index:10;">
        <button class="btn-icon" id="exitGame"><div style="width:20px;height:20px">${icons.back}</div></button>
        <div style="display:flex;gap:20px;align-items:center">
          <div style="text-align:center"><div style="font-size:10px;color:#f59e0b;font-weight:700">COINS</div><div class="game-score" id="coinCount" style="font-size:16px">×0</div></div>
          <div style="text-align:center"><div style="font-size:10px;color:#ef4444;font-weight:700">SCORE</div><div class="game-score" id="gameScore" style="font-size:16px">0</div></div>
        </div>
        <div style="width:44px"></div>
      </div>
      <div class="game-canvas-wrap" style="height:100%">
        <canvas id="marioCanvas"></canvas>
      </div>
    </div>
  `;
}

function initMarioGame() {
  const canvas = document.getElementById('marioCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const W = 400, H = 700;
  canvas.width = W;
  canvas.height = H;

  // ── Constants ──
  const GROUND_H = 48;
  const GROUND_Y = H - GROUND_H;
  const GRAVITY = 0.55;
  const JUMP_FORCE = -12.5;
  const BASE_SPEED = 2.8;
  const TILE = 32;

  // ── State ──
  let gameSpeed = BASE_SPEED;
  let mario = { x: 60, y: GROUND_Y, vy: 0, w: 24, h: 32, grounded: true, big: false, invincible: 0, facing: 1 };
  let blocks = [];       // ? blocks and bricks
  let pipes = [];
  let goombas = [];
  let koopas = [];
  let mCoins = [];        // coins in the world
  let popCoins = [];      // animated coin pops
  let mushrooms = [];
  let particles = [];
  let clouds = [];
  let hills = [];
  let score = 0;
  let coinCount = 0;
  let frame = 0;
  let gameState = 'waiting';
  let scrollX = 0;

  // Init clouds & hills
  for (let i = 0; i < 6; i++) { clouds.push({ x: Math.random() * W * 2, y: 50 + Math.random() * 120, w: 60 + Math.random() * 40 }); }
  for (let i = 0; i < 4; i++) { hills.push({ x: Math.random() * W * 2, w: 80 + Math.random() * 60 }); }

  function reset() {
    mario = { x: 60, y: GROUND_Y, vy: 0, w: 24, h: 32, grounded: true, big: false, invincible: 0, facing: 1 };
    blocks = []; pipes = []; goombas = []; koopas = []; mCoins = []; popCoins = [];
    mushrooms = []; particles = [];
    score = 0; coinCount = 0; frame = 0; gameSpeed = BASE_SPEED; gameState = 'waiting'; scrollX = 0;
    updateHUD();
  }

  function jump() {
    if (gameState === 'waiting') { gameState = 'playing'; mario.vy = JUMP_FORCE; mario.grounded = false; haptics.light(); }
    else if (gameState === 'playing' && mario.grounded) { mario.vy = JUMP_FORCE; mario.grounded = false; haptics.tap(); }
    else if (gameState === 'dead') { reset(); }
  }

  function updateHUD() {
    const sc = document.getElementById('gameScore'); if (sc) sc.textContent = score;
    const cc = document.getElementById('coinCount'); if (cc) cc.textContent = '×' + coinCount;
  }

  function addCoin(x, y) {
    coinCount++;
    score += 200;
    popCoins.push({ x, y, vy: -6, life: 25 });
    addPx(x, y, '#fbbf24', 5);
    haptics.light();
    updateHUD();
  }

  function addPx(x, y, color, n) {
    for (let i = 0; i < n; i++) particles.push({ x, y, vx: (Math.random() - .5) * 4, vy: (Math.random() - 1) * 3, life: 18 + Math.random() * 12, color, r: 1.5 + Math.random() * 2 });
  }

  // ── Spawning ──
  let spawnTimer = 0;
  function spawn() {
    spawnTimer++;
    // ? Blocks
    if (spawnTimer % 140 === 0) {
      const h = GROUND_Y - TILE * (2 + Math.floor(Math.random() * 3));
      const type = Math.random() > 0.3 ? 'question' : 'brick';
      const numBlocks = 1 + Math.floor(Math.random() * 3);
      for (let i = 0; i < numBlocks; i++) {
        blocks.push({ x: W + scrollX + i * TILE, y: h, w: TILE, h: TILE, type, hit: false, bounceY: 0 });
      }
      // Coin above
      if (Math.random() > 0.5) mCoins.push({ x: W + scrollX + TILE / 2, y: h - TILE - 8, r: 8, alive: true });
    }
    // Pipes
    if (spawnTimer % 200 === 0 && spawnTimer > 100) {
      const ph = TILE * (2 + Math.floor(Math.random() * 2));
      pipes.push({ x: W + scrollX, y: GROUND_Y - ph, w: TILE * 2, h: ph });
    }
    // Goombas
    if (spawnTimer % 100 === 0 && spawnTimer > 50) {
      goombas.push({ x: W + scrollX, y: GROUND_Y, w: 28, h: 28, alive: true, squishTimer: 0 });
    }
    // Koopas
    if (spawnTimer % 250 === 0 && spawnTimer > 200) {
      koopas.push({ x: W + scrollX, y: GROUND_Y, w: 26, h: 34, alive: true });
    }
    // Floating coins
    if (spawnTimer % 70 === 0) {
      const cy = GROUND_Y - 50 - Math.random() * 150;
      mCoins.push({ x: W + scrollX, y: cy, r: 8, alive: true });
    }
    // Clouds
    if (spawnTimer % 300 === 0) clouds.push({ x: W + scrollX + W, y: 40 + Math.random() * 130, w: 50 + Math.random() * 50 });
  }

  // ── Update ──
  function update() {
    if (gameState !== 'playing') return;
    frame++;
    scrollX += gameSpeed;
    if (frame % 600 === 0 && gameSpeed < 5.5) gameSpeed += 0.15;
    spawn();

    // Mario physics
    mario.vy += GRAVITY;
    mario.y += mario.vy;
    if (mario.invincible > 0) mario.invincible--;

    // Ground
    if (mario.y >= GROUND_Y) { mario.y = GROUND_Y; mario.vy = 0; mario.grounded = true; }
    else { mario.grounded = false; }

    // Block collision from below
    blocks.forEach(b => {
      if (b.hit) return;
      const bx = b.x - scrollX;
      if (mario.vy < 0 && mario.x + mario.w > bx + 2 && mario.x < bx + b.w - 2 &&
        mario.y - mario.h <= b.y + b.h && mario.y - mario.h >= b.y) {
        mario.vy = 2;
        b.hit = true;
        b.bounceY = -6;
        if (b.type === 'question') {
          addCoin(bx + TILE / 2, b.y - 20);
          if (Math.random() > 0.7) mushrooms.push({ x: bx, y: b.y - TILE, w: 24, h: 24, vx: 1.5, alive: true });
        } else {
          addPx(bx + TILE / 2, b.y, '#8b6914', 8);
        }
        haptics.medium();
      }
    });

    // Block top collision (standing on blocks)
    blocks.forEach(b => {
      const bx = b.x - scrollX;
      if (mario.vy > 0 && mario.x + mario.w > bx + 2 && mario.x < bx + b.w - 2 &&
        mario.y >= b.y && mario.y <= b.y + 8) {
        mario.y = b.y;
        mario.vy = 0;
        mario.grounded = true;
      }
    });

    // Pipe top collision
    pipes.forEach(p => {
      const px = p.x - scrollX;
      if (mario.vy >= 0 && mario.x + mario.w > px + 4 && mario.x < px + p.w - 4 &&
        mario.y >= p.y && mario.y <= p.y + 10) {
        mario.y = p.y;
        mario.vy = 0;
        mario.grounded = true;
      }
      // Side collision with pipe
      if (mario.x + mario.w > px && mario.x + mario.w < px + 8 && mario.y > p.y + 10) {
        if (!mario.big) { die(); return; }
      }
    });

    // Coin collection
    mCoins.forEach(c => {
      if (!c.alive) return;
      const cx = c.x - scrollX;
      const dx = (mario.x + mario.w / 2) - cx;
      const dy = (mario.y - mario.h / 2) - c.y;
      if (Math.sqrt(dx * dx + dy * dy) < c.r + 16) { c.alive = false; addCoin(cx, c.y); }
    });

    // Mushroom movement & collection
    mushrooms.forEach(m => {
      if (!m.alive) return;
      m.x += m.vx;
      const mx = m.x - scrollX + m.w; // already in screen coords
      // Simple collection
      if (mario.x + mario.w > m.x && mario.x < m.x + m.w && mario.y > m.y - mario.h && mario.y - mario.h < m.y + m.h) {
        m.alive = false;
        mario.big = true;
        mario.h = 44;
        mario.y -= 12;
        score += 1000;
        updateHUD();
        addPx(m.x + m.w / 2, m.y, '#22c55e', 8);
        haptics.success();
      }
    });

    // Goomba AI + collision
    goombas.forEach(g => {
      if (!g.alive) { if (g.squishTimer > 0) g.squishTimer--; return; }
      const gx = g.x - scrollX;
      // Check collision
      if (mario.x + mario.w > gx + 3 && mario.x < gx + g.w - 3 &&
        mario.y > g.y - mario.h && mario.y - mario.h < g.y + g.h) {
        if (mario.vy > 0 && mario.y < g.y) {
          // Stomp
          g.alive = false;
          g.squishTimer = 20;
          mario.vy = -9;
          score += 100;
          updateHUD();
          addPx(gx + g.w / 2, g.y, '#a16207', 6);
          haptics.medium();
        } else if (mario.invincible <= 0) {
          if (mario.big) { mario.big = false; mario.h = 32; mario.invincible = 90; haptics.heavy(); }
          else { die(); return; }
        }
      }
    });

    // Koopa collision (same as goomba but different score)
    koopas.forEach(k => {
      if (!k.alive) return;
      const kx = k.x - scrollX;
      if (mario.x + mario.w > kx + 3 && mario.x < kx + k.w - 3 &&
        mario.y > k.y - mario.h && mario.y - mario.h < k.y + k.h) {
        if (mario.vy > 0 && mario.y < k.y) {
          k.alive = false;
          mario.vy = -9;
          score += 200;
          updateHUD();
          addPx(kx + k.w / 2, k.y, '#16a34a', 8);
          haptics.medium();
        } else if (mario.invincible <= 0) {
          if (mario.big) { mario.big = false; mario.h = 32; mario.invincible = 90; haptics.heavy(); }
          else { die(); return; }
        }
      }
    });

    // Animated coins
    popCoins.forEach(c => { c.y += c.vy; c.vy += 0.3; c.life--; });
    popCoins = popCoins.filter(c => c.life > 0);

    // Particles
    particles.forEach(p => { p.x += p.vx; p.y += p.vy; p.vy += 0.12; p.life--; });
    particles = particles.filter(p => p.life > 0);

    // Block bounce
    blocks.forEach(b => { if (b.bounceY !== 0) { b.bounceY *= 0.7; if (Math.abs(b.bounceY) < 0.5) b.bounceY = 0; } });

    // Cleanup off-screen
    blocks = blocks.filter(b => (b.x - scrollX) > -TILE * 2);
    pipes = pipes.filter(p => (p.x - scrollX) > -TILE * 4);
    goombas = goombas.filter(g => (g.x - scrollX) > -50 && (g.alive || g.squishTimer > 0));
    koopas = koopas.filter(k => (k.x - scrollX) > -50);
    mCoins = mCoins.filter(c => (c.x - scrollX) > -30 && c.alive);
    mushrooms = mushrooms.filter(m => m.x - scrollX < W + 50 && m.alive);
    clouds = clouds.filter(c => (c.x - scrollX * 0.3) > -100);

    // Fall death
    if (mario.y > H + 50) { die(); }

    // Distance score
    if (frame % 25 === 0) { score += 50; updateHUD(); }
  }

  function die() {
    gameState = 'dead';
    mario.vy = -10;
    haptics.heavy();
    storage.setHighScore('mario', score);
  }

  // ── Drawing Helpers ──
  function drawCloud(x, y, w) {
    ctx.fillStyle = 'rgba(255,255,255,0.08)';
    ctx.beginPath();
    ctx.arc(x, y, w * 0.3, 0, Math.PI * 2);
    ctx.arc(x + w * 0.25, y - w * 0.12, w * 0.25, 0, Math.PI * 2);
    ctx.arc(x + w * 0.5, y, w * 0.28, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawHill(x, w) {
    ctx.fillStyle = 'rgba(34, 197, 94, 0.12)';
    ctx.beginPath();
    ctx.arc(x + w / 2, GROUND_Y, w / 2, Math.PI, 0);
    ctx.fill();
  }

  function drawQuestionBlock(x, y, hit, bounceOff) {
    const by = y + (bounceOff || 0);
    ctx.fillStyle = hit ? '#5c4a1e' : '#d97706';
    ctx.fillRect(x, by, TILE, TILE);
    ctx.strokeStyle = hit ? '#3d310f' : '#92400e';
    ctx.lineWidth = 2;
    ctx.strokeRect(x + 1, by + 1, TILE - 2, TILE - 2);
    if (!hit) {
      // ? symbol
      ctx.fillStyle = '#fef3c7';
      ctx.font = 'bold 18px Outfit';
      ctx.textAlign = 'center';
      ctx.fillText('?', x + TILE / 2, by + TILE - 8);
    } else {
      ctx.fillStyle = '#78350f';
      ctx.fillRect(x + 4, by + 4, TILE - 8, TILE - 8);
    }
  }

  function drawBrick(x, y, hit, bounceOff) {
    const by = y + (bounceOff || 0);
    if (hit) { return; } // brick destroyed
    ctx.fillStyle = '#92400e';
    ctx.fillRect(x, by, TILE, TILE);
    ctx.strokeStyle = '#78350f';
    ctx.lineWidth = 1;
    // Brick pattern
    ctx.strokeRect(x, by, TILE, TILE);
    ctx.beginPath();
    ctx.moveTo(x + TILE / 2, by); ctx.lineTo(x + TILE / 2, by + TILE / 2);
    ctx.moveTo(x, by + TILE / 2); ctx.lineTo(x + TILE, by + TILE / 2);
    ctx.moveTo(x + TILE / 4, by + TILE / 2); ctx.lineTo(x + TILE / 4, by + TILE);
    ctx.moveTo(x + TILE * 3 / 4, by + TILE / 2); ctx.lineTo(x + TILE * 3 / 4, by + TILE);
    ctx.stroke();
  }

  function drawPipe(px, py, pw, ph) {
    // Pipe body
    const pGrad = ctx.createLinearGradient(px, py, px + pw, py);
    pGrad.addColorStop(0, '#15803d');
    pGrad.addColorStop(0.3, '#22c55e');
    pGrad.addColorStop(0.7, '#22c55e');
    pGrad.addColorStop(1, '#15803d');
    ctx.fillStyle = pGrad;
    ctx.fillRect(px + 3, py + 20, pw - 6, ph - 20);
    // Pipe top
    const ptGrad = ctx.createLinearGradient(px, py, px + pw, py);
    ptGrad.addColorStop(0, '#166534');
    ptGrad.addColorStop(0.3, '#16a34a');
    ptGrad.addColorStop(0.7, '#16a34a');
    ptGrad.addColorStop(1, '#166534');
    ctx.fillStyle = ptGrad;
    ctx.fillRect(px - 2, py, pw + 4, 22);
    // Highlight
    ctx.fillStyle = 'rgba(255,255,255,0.15)';
    ctx.fillRect(px + 6, py + 22, 4, ph - 22);
    // Dark edge
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.fillRect(px + pw - 8, py + 22, 4, ph - 22);
  }

  function drawGoomba(gx, gy, g) {
    if (!g.alive) {
      // Squished
      ctx.fillStyle = '#92400e';
      ctx.fillRect(gx + 2, gy - 6, g.w - 4, 6);
      return;
    }
    // Body (mushroom shape)
    ctx.fillStyle = '#92400e';
    ctx.beginPath();
    ctx.arc(gx + g.w / 2, gy - g.h + 12, 14, Math.PI, 0);
    ctx.fill();
    // Body bottom
    ctx.fillStyle = '#78350f';
    ctx.fillRect(gx + 3, gy - g.h / 2, g.w - 6, g.h / 2);
    // Eyes
    ctx.fillStyle = '#fff';
    const eyeOff = Math.sin(frame * 0.05) * 1;
    ctx.fillRect(gx + 6, gy - g.h + 10 + eyeOff, 6, 7);
    ctx.fillRect(gx + g.w - 12, gy - g.h + 10 + eyeOff, 6, 7);
    ctx.fillStyle = '#000';
    ctx.fillRect(gx + 8, gy - g.h + 12 + eyeOff, 3, 4);
    ctx.fillRect(gx + g.w - 10, gy - g.h + 12 + eyeOff, 3, 4);
    // Eyebrows (angry)
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(gx + 5, gy - g.h + 9); ctx.lineTo(gx + 13, gy - g.h + 11);
    ctx.moveTo(gx + g.w - 5, gy - g.h + 9); ctx.lineTo(gx + g.w - 13, gy - g.h + 11);
    ctx.stroke();
    // Feet
    ctx.fillStyle = '#000';
    const feetAnim = Math.sin(frame * 0.15) * 3;
    ctx.fillRect(gx + 1 + feetAnim, gy - 5, 8, 5);
    ctx.fillRect(gx + g.w - 9 - feetAnim, gy - 5, 8, 5);
  }

  function drawKoopa(kx, ky, k) {
    if (!k.alive) return;
    // Shell
    ctx.fillStyle = '#16a34a';
    ctx.beginPath();
    ctx.ellipse(kx + k.w / 2, ky - k.h / 2, 13, 16, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#15803d';
    ctx.beginPath();
    ctx.ellipse(kx + k.w / 2, ky - k.h / 2, 10, 12, 0, 0, Math.PI * 2);
    ctx.fill();
    // Head
    ctx.fillStyle = '#fde68a';
    ctx.beginPath();
    ctx.arc(kx + k.w / 2 + 6, ky - k.h + 6, 7, 0, Math.PI * 2);
    ctx.fill();
    // Eye
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(kx + k.w / 2 + 9, ky - k.h + 4, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(kx + k.w / 2 + 10, ky - k.h + 4, 1.5, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawMario() {
    const mx = mario.x, my = mario.y;
    const h = mario.h;
    const blinkAlpha = mario.invincible > 0 && frame % 6 < 3 ? 0.4 : 1;
    ctx.globalAlpha = blinkAlpha;

    // ── Shoes ──
    ctx.fillStyle = '#7f1d1d';
    if (mario.grounded) {
      const step = Math.sin(frame * 0.25) * 3;
      ctx.fillRect(mx + 1, my - 6 + step, 9, 6);
      ctx.fillRect(mx + mario.w - 10, my - 6 - step, 9, 6);
    } else {
      ctx.fillRect(mx + 2, my - 8, 8, 8);
      ctx.fillRect(mx + mario.w - 10, my - 4, 8, 6);
    }

    // ── Overalls (blue) ──
    ctx.fillStyle = '#1d4ed8';
    const overallTop = mario.big ? my - h + 20 : my - h + 14;
    const overallH = mario.big ? h - 26 : h - 18;
    ctx.fillRect(mx + 2, overallTop, mario.w - 4, overallH);
    // Buttons
    ctx.fillStyle = '#fbbf24';
    ctx.fillRect(mx + 5, overallTop + 3, 3, 3);
    ctx.fillRect(mx + mario.w - 8, overallTop + 3, 3, 3);
    // Straps
    ctx.fillStyle = '#1d4ed8';
    ctx.fillRect(mx + 4, overallTop - 3, 4, 5);
    ctx.fillRect(mx + mario.w - 8, overallTop - 3, 4, 5);

    // ── Shirt (red) ──
    ctx.fillStyle = '#dc2626';
    const shirtTop = mario.big ? my - h + 12 : my - h + 8;
    const shirtH = mario.big ? 12 : 8;
    ctx.fillRect(mx + 1, shirtTop, mario.w - 2, shirtH);
    // Arms
    if (mario.grounded) {
      ctx.fillRect(mx - 4, shirtTop + 2, 6, 6);
      ctx.fillRect(mx + mario.w - 2, shirtTop + 2, 6, 6);
    } else {
      ctx.fillRect(mx - 3, shirtTop - 2, 5, 6);
      ctx.fillRect(mx + mario.w - 2, shirtTop + 4, 5, 6);
    }
    // Hands
    ctx.fillStyle = '#fde68a';
    if (mario.grounded) {
      ctx.fillRect(mx - 5, shirtTop + 6, 4, 4);
      ctx.fillRect(mx + mario.w + 1, shirtTop + 6, 4, 4);
    } else {
      ctx.fillRect(mx - 4, shirtTop - 4, 4, 4);
      ctx.fillRect(mx + mario.w + 1, shirtTop + 8, 4, 4);
    }

    // ── Head ──
    ctx.fillStyle = '#fde68a';
    const headR = mario.big ? 11 : 9;
    const headY = mario.big ? my - h + 6 : my - h + 4;
    ctx.beginPath();
    ctx.arc(mx + mario.w / 2, headY, headR, 0, Math.PI * 2);
    ctx.fill();

    // ── Cap (red) ──
    ctx.fillStyle = '#dc2626';
    const capY = headY - headR + 1;
    ctx.fillRect(mx - 3, capY, mario.w + 6, headR);
    ctx.fillRect(mx + mario.w / 2, capY - 3, mario.w / 2 + 5, headR + 1);
    // Cap brim
    ctx.fillStyle = '#b91c1c';
    ctx.fillRect(mx + mario.w / 2 + 2, capY + headR - 2, mario.w / 2 + 4, 4);

    // ── Face ──
    // Eyes
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(mx + mario.w / 2 + 3, headY - 1, 3.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#1e3a5f';
    ctx.beginPath();
    ctx.arc(mx + mario.w / 2 + 4, headY - 1, 1.8, 0, Math.PI * 2);
    ctx.fill();
    // Nose
    ctx.fillStyle = '#d97706';
    ctx.beginPath();
    ctx.arc(mx + mario.w / 2 + 7, headY + 2, 3, 0, Math.PI * 2);
    ctx.fill();
    // Mustache
    ctx.fillStyle = '#451a03';
    ctx.fillRect(mx + mario.w / 2 - 2, headY + 4, 14, 2);
    ctx.fillRect(mx + mario.w / 2 + 6, headY + 3, 4, 2);

    ctx.globalAlpha = 1;
  }

  function drawCoin(cx, cy, r) {
    ctx.shadowColor = '#fbbf24';
    ctx.shadowBlur = 8;
    const pulse = 0.85 + Math.sin(frame * 0.12) * 0.15;
    const stretch = Math.abs(Math.cos(frame * 0.08));
    ctx.fillStyle = '#fbbf24';
    ctx.beginPath();
    ctx.ellipse(cx, cy, r * stretch * pulse, r * pulse, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fef3c7';
    ctx.beginPath();
    ctx.ellipse(cx - 1, cy - 1, r * stretch * 0.5, r * 0.5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  function drawMushroom(mx, my, m) {
    if (!m.alive) return;
    const px = m.x - scrollX;
    // Stem
    ctx.fillStyle = '#fef3c7';
    ctx.fillRect(px + 6, my + 8, 12, 14);
    // Cap
    ctx.fillStyle = '#dc2626';
    ctx.beginPath();
    ctx.arc(px + m.w / 2, my + 8, 13, Math.PI, 0);
    ctx.fill();
    // Dots
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(px + m.w / 2 - 5, my + 2, 3, 0, Math.PI * 2);
    ctx.arc(px + m.w / 2 + 5, my + 2, 3, 0, Math.PI * 2);
    ctx.fill();
    // Eyes
    ctx.fillStyle = '#000';
    ctx.fillRect(px + 7, my + 12, 3, 3);
    ctx.fillRect(px + m.w - 10, my + 12, 3, 3);
  }

  // ── Main Draw ──
  function draw() {
    // Sky gradient
    const sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, '#1e3a5f');
    sky.addColorStop(0.4, '#2563eb');
    sky.addColorStop(0.75, '#60a5fa');
    sky.addColorStop(1, '#93c5fd');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, W, H);

    // Clouds (parallax)
    clouds.forEach(c => drawCloud(c.x - scrollX * 0.3, c.y, c.w));

    // Hills (parallax)
    hills.forEach(h => drawHill(h.x - scrollX * 0.5, h.w));

    // Ground
    ctx.fillStyle = '#92400e';
    ctx.fillRect(0, GROUND_Y, W, GROUND_H);
    // Ground top (grass)
    ctx.fillStyle = '#22c55e';
    ctx.fillRect(0, GROUND_Y, W, 8);
    ctx.fillStyle = '#16a34a';
    ctx.fillRect(0, GROUND_Y + 8, W, 4);
    // Ground brick pattern
    ctx.strokeStyle = '#78350f';
    ctx.lineWidth = 0.5;
    for (let gx = 0; gx < W; gx += 16) {
      ctx.beginPath();
      ctx.moveTo(gx, GROUND_Y + 12); ctx.lineTo(gx, H);
      ctx.stroke();
    }
    for (let gy = GROUND_Y + 12; gy < H; gy += 12) {
      ctx.beginPath();
      ctx.moveTo(0, gy); ctx.lineTo(W, gy);
      ctx.stroke();
    }

    // Pipes
    pipes.forEach(p => drawPipe(p.x - scrollX, p.y, p.w, p.h));

    // Blocks
    blocks.forEach(b => {
      const bx = b.x - scrollX;
      if (b.type === 'question') drawQuestionBlock(bx, b.y, b.hit, b.bounceY);
      else drawBrick(bx, b.y, b.hit, b.bounceY);
    });

    // Coins
    mCoins.forEach(c => { if (c.alive) drawCoin(c.x - scrollX, c.y, c.r); });

    // Mushrooms
    mushrooms.forEach(m => drawMushroom(m.x - scrollX, m.y, m));

    // Goombas
    goombas.forEach(g => drawGoomba(g.x - scrollX, g.y, g));

    // Koopas
    koopas.forEach(k => drawKoopa(k.x - scrollX, k.y, k));

    // Mario
    if (gameState !== 'dead' || frame % 4 < 2) drawMario();

    // Animated coin pops
    popCoins.forEach(c => {
      ctx.globalAlpha = c.life / 25;
      drawCoin(c.x, c.y, 8);
      ctx.globalAlpha = 1;
    });

    // Particles
    particles.forEach(p => {
      ctx.globalAlpha = p.life / 30;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;

    // Score popups for stomps
    if (gameState === 'playing') {
      // Running dust
      if (mario.grounded && frame % 6 === 0) addPx(mario.x + 5, mario.y, 'rgba(146,64,14,0.4)', 1);
    }

    // ── Overlays ──
    if (gameState === 'waiting') {
      ctx.fillStyle = 'rgba(0,0,0,0.45)';
      ctx.fillRect(0, 0, W, H);
      // Mario pixel art logo feel
      ctx.fillStyle = '#dc2626';
      ctx.font = '900 34px Outfit, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('SUPER MARIO', W / 2, H / 2 - 60);
      ctx.fillStyle = '#fbbf24';
      ctx.font = '700 18px Outfit, sans-serif';
      ctx.fillText('GlowUp Edition', W / 2, H / 2 - 30);
      ctx.fillStyle = '#fff';
      ctx.font = '600 20px Outfit, sans-serif';
      ctx.fillText('Tap to Start', W / 2, H / 2 + 20);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '400 13px Inter, sans-serif';
      ctx.fillText('Jump on enemies · Hit ? blocks · Collect coins', W / 2, H / 2 + 50);
      ctx.fillText('Mushrooms make you BIG!', W / 2, H / 2 + 70);
    }

    if (gameState === 'dead') {
      ctx.fillStyle = 'rgba(0,0,0,0.65)';
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = '#dc2626';
      ctx.font = '900 34px Outfit, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('GAME OVER', W / 2, H / 2 - 50);
      ctx.fillStyle = '#fbbf24';
      ctx.font = '600 16px Outfit, sans-serif';
      ctx.fillText(`🪙 ×${coinCount}`, W / 2, H / 2 - 15);
      ctx.fillStyle = '#fff';
      ctx.font = '700 22px Outfit, sans-serif';
      ctx.fillText(`Score: ${score}`, W / 2, H / 2 + 15);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '400 14px Inter, sans-serif';
      const hs = storage.getHighScore('mario');
      ctx.fillText(`Best: ${hs}`, W / 2, H / 2 + 42);
      ctx.fillStyle = '#dc2626';
      ctx.font = '600 16px Outfit, sans-serif';
      ctx.fillText('Tap to Retry', W / 2, H / 2 + 80);
    }
  }

  function loop() {
    update();
    draw();
    if (document.getElementById('marioCanvas')) requestAnimationFrame(loop);
  }

  canvas.addEventListener('click', jump);
  canvas.addEventListener('touchstart', (e) => { e.preventDefault(); jump(); }, { passive: false });
  document.addEventListener('keydown', (e) => { if (e.code === 'Space' || e.key === 'ArrowUp') { e.preventDefault(); jump(); } });

  loop();
}

// ── PAGE: Settings ──
function renderSettings() {
  const s = state.settings;
  return `
    <div class="page-content container page-enter">
      <div class="page-header">
        <h2 class="page-header-title">⚙️ Settings</h2>
      </div>

      <div class="settings-group">
        <div class="settings-group-title">Appearance</div>
        <div class="settings-item">
          <div class="settings-item-left">
            <div class="settings-item-icon" style="background:var(--accent-primary-dim)">🌙</div>
            <div>
              <div class="settings-item-label">Dark Mode</div>
              <div class="settings-item-desc">Deep blacks, comfortable for eyes</div>
            </div>
          </div>
          <label class="toggle-switch">
            <input type="checkbox" id="toggleDark" ${s.darkMode ? 'checked' : ''} />
            <div class="toggle-track"></div>
            <div class="toggle-thumb"></div>
          </label>
        </div>
        <div class="settings-item">
          <div class="settings-item-left">
            <div class="settings-item-icon" style="background:linear-gradient(135deg,rgba(167,139,250,0.2),rgba(6,182,212,0.2))">🌈</div>
            <div>
              <div class="settings-item-label">RGB Mode</div>
              <div class="settings-item-desc">Ambient intelligent lighting</div>
            </div>
          </div>
          <label class="toggle-switch">
            <input type="checkbox" id="toggleRGB" ${s.rgbMode ? 'checked' : ''} />
            <div class="toggle-track"></div>
            <div class="toggle-thumb"></div>
          </label>
        </div>
      </div>

      <div class="settings-group">
        <div class="settings-group-title">Data</div>
        <div class="settings-item" id="clearBookmarks" style="cursor:pointer">
          <div class="settings-item-left">
            <div class="settings-item-icon" style="background:var(--accent-warning-dim)">🔖</div>
            <div>
              <div class="settings-item-label">Clear Bookmarks</div>
              <div class="settings-item-desc">${storage.getBookmarks().length} saved items</div>
            </div>
          </div>
        </div>
        <div class="settings-item" id="clearScores" style="cursor:pointer">
          <div class="settings-item-left">
            <div class="settings-item-icon" style="background:var(--accent-danger-dim)">🎮</div>
            <div>
              <div class="settings-item-label">Reset Game Scores</div>
              <div class="settings-item-desc">High score: ${storage.getHighScore('flappy')}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="settings-group">
        <div class="settings-group-title">About</div>
        <div class="settings-item">
          <div class="settings-item-left">
            <div class="settings-item-icon" style="background:var(--accent-primary-dim)">✨</div>
            <div>
              <div class="settings-item-label">GlowUp</div>
              <div class="settings-item-desc">v1.0.0 — Premium Self-Improvement</div>
            </div>
          </div>
        </div>
      </div>

      <div class="app-footer">
        <p style="margin-bottom:8px">Made with ❤️ by</p>
        <a href="https://www.instagram.com/abhisheksingh_x0/?hl=en" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:6px;font-weight:600;font-size:var(--text-sm)">
          📸 @abhisheksingh_x0
        </a>
        <p style="margin-top:12px;font-size:0.6rem;color:var(--text-muted)">© 2026 GlowUp. All rights reserved.</p>
      </div>
    </div>
  `;
}

// ── PAGE: Bookmarks / Saved ──
function renderBookmarks() {
  const bookmarkIds = storage.getBookmarks();
  const allItems = getAllItems();
  const bookmarked = bookmarkIds.map(id => allItems.find(item => item.id === id)).filter(Boolean);

  if (bookmarked.length === 0) {
    return `
      <div class="page-content container page-enter">
        <div class="page-header">
          <h2 class="page-header-title">🔖 Saved</h2>
          <button class="btn-icon" id="exploreSearch"><div style="width:20px;height:20px">${icons.search}</div></button>
        </div>
        <div class="empty-state" style="margin-top:60px">
          <div class="empty-state-icon">🔖</div>
          <div class="empty-state-title">Nothing saved yet</div>
          <div class="empty-state-text">Tap the <strong style="color:var(--accent-primary)">bookmark icon</strong> on any card in Explore to save it here for quick access</div>
        </div>
      </div>`;
  }

  // Group by category
  const grouped = {};
  bookmarked.forEach(item => {
    const cat = item.category || 'Other';
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(item);
  });

  return `
    <div class="page-content container page-enter">
      <div class="page-header">
        <h2 class="page-header-title">🔖 Saved</h2>
        <button class="btn-icon" id="exploreSearch"><div style="width:20px;height:20px">${icons.search}</div></button>
      </div>
      <p style="color:var(--text-tertiary);font-size:var(--text-sm);margin-bottom:20px">${bookmarked.length} saved insight${bookmarked.length !== 1 ? 's' : ''}</p>
      ${Object.entries(grouped).map(([cat, items]) => `
        <div class="section-label" style="margin-top:4px">${cat}</div>
        <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:20px" class="stagger-enter">
          ${items.map(item => renderCard(item)).join('')}
        </div>
      `).join('')}
    </div>
  `;
}

// ── Search Logic ──
function performSearch(query) {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  const allItems = getAllItems();
  return allItems.filter(item => {
    const searchable = `${item.title} ${item.desc} ${item.detail || ''} ${item.category} ${(item.quickTags || []).join(' ')}`.toLowerCase();
    return searchable.includes(q);
  }).slice(0, 20);
}

function renderSearchResults(results) {
  const container = document.getElementById('searchResults');
  if (!container) return;

  if (results.length === 0) {
    container.innerHTML = `<div class="empty-state">
      <div class="empty-state-icon">🔍</div>
      <div class="empty-state-title">No results found</div>
      <div class="empty-state-text">Try different keywords</div>
    </div>`;
    return;
  }

  container.innerHTML = results.map(item => `
    <div class="search-result-item" data-id="${item.id}">
      <div style="font-size:1.2rem;flex-shrink:0;margin-top:2px">${item.icon || '📌'}</div>
      <div>
        <div class="search-result-cat">${item.category}</div>
        <div class="search-result-title">${item.title}</div>
        <div class="search-result-desc">${item.desc}</div>
      </div>
    </div>
  `).join('');
}

// ── Search Toggle ──
function openSearch() {
  state.searchOpen = true;
  const overlay = document.getElementById('searchOverlay');
  if (overlay) {
    overlay.classList.add('open');
    const input = document.getElementById('searchInput');
    if (input) input.focus();
  }
  haptics.light();
}

function closeSearch() {
  state.searchOpen = false;
  const overlay = document.getElementById('searchOverlay');
  if (overlay) overlay.classList.remove('open');
}

// ── Apply Settings ──
function applySettings() {
  const s = state.settings;
  if (s.rgbMode) {
    document.body.classList.add('rgb-active');
  } else {
    document.body.classList.remove('rgb-active');
  }
}

// ── Main Render ──
function render(pageContent, activeNav = '/') {
  const app = document.getElementById('app');
  app.innerHTML = createRGBLayer() + createSearchOverlay() + pageContent + createBottomNav(activeNav);

  // Apply settings
  applySettings();

  // Init stagger animations
  setTimeout(() => {
    document.querySelectorAll('.stagger-enter').forEach(el => staggerEntrance(el));
    initScrollReveal(app);
  }, 50);

  // Bind page-specific events (NOT the click delegation — that's set up once)
  bindPageEvents();
}

// ── Global Click Delegation (set up ONCE, never duplicated) ──
let globalClickBound = false;
function setupGlobalClickHandler() {
  if (globalClickBound) return;
  globalClickBound = true;
  const app = document.getElementById('app');

  app.addEventListener('click', (e) => {
    // Bookmark toggle (check FIRST so expand doesn't eat it)
    const bookmarkBtn = e.target.closest('.bookmark-btn');
    if (bookmarkBtn) {
      e.stopPropagation();
      const id = bookmarkBtn.dataset.bookmark;
      const added = storage.toggleBookmark(id);
      bookmarkBtn.classList.toggle('active', added);
      bookmarkBtn.innerHTML = `<div style="width:18px;height:18px">${added ? icons.bookmarkFill : icons.bookmark}</div>`;
      bookmarkBtn.classList.add('bookmark-pop');
      setTimeout(() => bookmarkBtn.classList.remove('bookmark-pop'), 300);
      haptics.medium();
      return;
    }

    // Expand card toggle (check BEFORE route so cards expand instead of navigating)
    const expandCard = e.target.closest('.expand-card');
    if (expandCard) {
      expandCard.classList.toggle('expanded');
      haptics.light();
      return;
    }

    // Nav route
    const navItem = e.target.closest('.nav-item[data-route]');
    if (navItem) {
      haptics.tap();
      router.navigate(navItem.dataset.route);
      return;
    }

    // Other data-route elements
    const routeTarget = e.target.closest('[data-route]');
    if (routeTarget) {
      haptics.tap();
      router.navigate(routeTarget.dataset.route);
      return;
    }

    // Category click
    const catCard = e.target.closest('[data-category]');
    if (catCard) {
      haptics.tap();
      router.navigate('/category/' + catCard.dataset.category);
      return;
    }

    // Back button
    if (e.target.closest('#backBtn')) {
      haptics.tap();
      window.history.back();
      return;
    }

    // Search open
    if (e.target.closest('#dashSearch') || e.target.closest('#exploreSearch') || e.target.closest('#catSearch')) {
      openSearch();
      return;
    }

    // Search close
    if (e.target.closest('#searchClose')) {
      closeSearch();
      return;
    }

    // Play flappy bird
    if (e.target.closest('#playFlappy')) {
      haptics.medium();
      router.navigate('/flappy');
      return;
    }

    // Play mario
    if (e.target.closest('#playMario')) {
      haptics.medium();
      router.navigate('/mario');
      return;
    }

    // Exit game
    if (e.target.closest('#exitGame')) {
      haptics.tap();
      router.navigate('/games');
      return;
    }

    // Clear bookmarks
    if (e.target.closest('#clearBookmarks')) {
      storage.set('bookmarks', []);
      haptics.medium();
      router.navigate('/settings');
      return;
    }

    // Clear scores
    if (e.target.closest('#clearScores')) {
      storage.set('highscore_flappy', 0);
      storage.set('highscore_mario', 0);
      haptics.medium();
      router.navigate('/settings');
      return;
    }
  });
}

// ── Per-render element bindings (safe to call multiple times) ──
function bindPageEvents() {
  // Search input
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const results = performSearch(e.target.value);
      renderSearchResults(results);
    });
  }

  // Setting toggles
  const toggleDark = document.getElementById('toggleDark');
  if (toggleDark) {
    toggleDark.addEventListener('change', () => {
      state.settings = storage.updateSettings({ darkMode: toggleDark.checked });
      haptics.light();
      applySettings();
    });
  }

  const toggleRGB = document.getElementById('toggleRGB');
  if (toggleRGB) {
    toggleRGB.addEventListener('change', () => {
      state.settings = storage.updateSettings({ rgbMode: toggleRGB.checked });
      haptics.light();
      applySettings();
    });
  }
}

// ── Routes ──
router.addRoute('/', () => render(renderDashboard(), '/'));
router.addRoute('/explore', () => render(renderExplore(), '/explore'));
router.addRoute('/routine', () => render(renderRoutine(), '/routine'));
router.addRoute('/games', () => render(renderGames(), '/games'));
router.addRoute('/saved', () => render(renderBookmarks(), '/saved'));
router.addRoute('/bookmarks', () => render(renderBookmarks(), '/saved'));
router.addRoute('/settings', () => render(renderSettings(), '/settings'));

router.addRoute('/category', (params) => {
  const catId = params[0] || 'keystone';
  render(renderCategory(catId), '/explore');
});

router.addRoute('/flappy', () => {
  const app = document.getElementById('app');
  app.innerHTML = createRGBLayer() + renderFlappyBird();
  applySettings();
  setTimeout(() => initFlappyBird(), 100);
  bindGlobalEvents();
});

router.addRoute('/mario', () => {
  const app = document.getElementById('app');
  app.innerHTML = createRGBLayer() + renderMarioGame();
  applySettings();
  setTimeout(() => initMarioGame(), 100);
  bindGlobalEvents();
});

// Catch-all
router.addRoute('*', (path, params) => {
  if (path === 'category') {
    const catId = params[0] || 'keystone';
    render(renderCategory(catId), '/explore');
  } else {
    render(renderDashboard(), '/');
  }
});

// ── Init ──
function init() {
  // Remove loader
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 500);
    }, 300);
  }

  // Set up global click handler ONCE
  setupGlobalClickHandler();

  // Apply initial settings
  applySettings();

  // Default route
  if (!window.location.hash) {
    router.navigate('/');
  }
}

init();
