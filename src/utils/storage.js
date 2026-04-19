/* Storage utilities for bookmarks, settings, scores */
const PREFIX = 'glowup_';

export const storage = {
  get(key, fallback = null) {
    try {
      const val = localStorage.getItem(PREFIX + key);
      return val ? JSON.parse(val) : fallback;
    } catch { return fallback; }
  },

  set(key, value) {
    try { localStorage.setItem(PREFIX + key, JSON.stringify(value)); }
    catch { /* quota exceeded */ }
  },

  // Bookmarks
  getBookmarks() { return this.get('bookmarks', []); },

  toggleBookmark(id) {
    const bm = this.getBookmarks();
    const idx = bm.indexOf(id);
    if (idx > -1) { bm.splice(idx, 1); }
    else { bm.push(id); }
    this.set('bookmarks', bm);
    return idx === -1; // returns true if added
  },

  isBookmarked(id) { return this.getBookmarks().includes(id); },

  // Settings
  getSettings() {
    return this.get('settings', {
      darkMode: true,
      rgbMode: false,
    });
  },

  updateSettings(updates) {
    const s = this.getSettings();
    Object.assign(s, updates);
    this.set('settings', s);
    return s;
  },

  // Search history
  getSearchHistory() { return this.get('searchHistory', []); },

  addSearchTerm(term) {
    const h = this.getSearchHistory().filter(t => t !== term);
    h.unshift(term);
    this.set('searchHistory', h.slice(0, 10));
  },

  // Game scores
  getHighScore(game) { return this.get(`highscore_${game}`, 0); },

  setHighScore(game, score) {
    const current = this.getHighScore(game);
    if (score > current) {
      this.set(`highscore_${game}`, score);
      return true;
    }
    return false;
  },

  // Recently viewed
  getRecent() { return this.get('recent', []); },

  addRecent(item) {
    const r = this.getRecent().filter(i => i.id !== item.id);
    r.unshift({ id: item.id, title: item.title, category: item.category, icon: item.icon });
    this.set('recent', r.slice(0, 20));
  }
};
