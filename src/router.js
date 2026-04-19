/* Simple hash-based SPA Router */
export class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
    this.onNavigate = null;
    window.addEventListener('hashchange', () => this._handleRoute());
    window.addEventListener('load', () => this._handleRoute());
  }

  addRoute(path, handler) {
    this.routes[path] = handler;
  }

  navigate(path, data = {}) {
    window._routeData = data;
    window.location.hash = path;
  }

  getRouteData() {
    return window._routeData || {};
  }

  _handleRoute() {
    const hash = window.location.hash.slice(1) || '/';
    const [path, ...params] = hash.split('/').filter(Boolean);
    const route = '/' + (path || '');

    // Try exact match first then parameterized
    if (this.routes[route]) {
      this.currentRoute = route;
      this.routes[route](params);
    } else if (this.routes['*']) {
      this.routes['*'](path, params);
    }

    if (this.onNavigate) this.onNavigate(route, params);
  }

  getCurrentRoute() {
    return this.currentRoute || '/';
  }
}
