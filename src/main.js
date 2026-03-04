// ==========================================
//  PyQuest — Main SPA Router
// ==========================================

import { renderNavbar, initNavbar, setActiveNav, updateXPDisplay } from './components/navbar.js';
import { renderHomePage } from './pages/home.js';
import { renderWorldMapPage } from './pages/worldMap.js';
import { renderLevelsPage } from './pages/levelsPage.js';
import { renderChallengePage, initChallengePage, cleanupChallengePage } from './pages/challengePage.js';
import { renderAboutPage } from './pages/about.js';
import { loadPyodide } from './engine/pyodideRunner.js';

const app = document.getElementById('app');
let currentCleanup = null;

// ---- Router ----
function getRoute() {
    const hash = location.hash || '#/';
    return hash.slice(1); // remove #
}

function parseRoute(path) {
    if (path === '/' || path === '') return { page: 'home' };
    if (path === '/worlds') return { page: 'worlds' };
    if (path === '/about') return { page: 'about' };

    const worldMatch = path.match(/^\/world\/(.+)$/);
    if (worldMatch) return { page: 'levels', worldId: worldMatch[1] };

    const levelMatch = path.match(/^\/level\/(.+)$/);
    if (levelMatch) return { page: 'challenge', levelId: levelMatch[1] };

    return { page: 'home' };
}

function render() {
    // Cleanup previous page
    if (currentCleanup) {
        currentCleanup();
        currentCleanup = null;
    }

    const route = parseRoute(getRoute());
    let pageContent = '';

    switch (route.page) {
        case 'home':
            pageContent = renderHomePage();
            break;
        case 'worlds':
            pageContent = renderWorldMapPage();
            break;
        case 'levels':
            pageContent = renderLevelsPage(route.worldId);
            break;
        case 'challenge':
            pageContent = renderChallengePage(route.levelId);
            break;
        case 'about':
            pageContent = renderAboutPage();
            break;
        default:
            pageContent = renderHomePage();
    }

    app.innerHTML = renderNavbar() + `<main>${pageContent}</main>`;

    // Post-render initialization
    initNavbar();
    setActiveNav();
    updateXPDisplay();

    if (route.page === 'challenge') {
        initChallengePage(route.levelId);
        currentCleanup = () => cleanupChallengePage();
    }

    // Scroll to top on navigation
    window.scrollTo(0, 0);
}

// ---- Init ----
window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', () => {
    render();

    // Pre-load Pyodide in the background
    loadPyodide().then(() => {
        console.log('🐍 Pyodide loaded successfully!');
    }).catch(err => {
        console.warn('Pyodide will load on first code run:', err.message);
    });
});
