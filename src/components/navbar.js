// ==========================================
//  PyQuest — Navbar Component
// ==========================================

import { getXP } from '../engine/progress.js';

export function renderNavbar() {
    const xp = getXP();
    return `
    <nav class="navbar" id="navbar">
      <div class="container">
        <div class="navbar-logo" onclick="location.hash='#/'">
          <span class="navbar-logo-icon">🐍</span>
          <span>PyQuest</span>
        </div>
        <ul class="navbar-links" id="nav-links">
          <li><a href="#/" id="nav-home">Home</a></li>
          <li><a href="#/worlds" id="nav-worlds">Worlds</a></li>
          <li><a href="#/about" id="nav-about">About</a></li>
        </ul>
        <div class="xp-badge" id="xp-display">
          <span>⚡</span>
          <span id="xp-value">${xp}</span> XP
        </div>
        <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation">☰</button>
      </div>
    </nav>
  `;
}

export function updateXPDisplay() {
    const el = document.getElementById('xp-value');
    if (el) el.textContent = getXP();
}

export function initNavbar() {
    // Scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 30);
        }
    });

    // Mobile toggle
    const toggle = document.getElementById('nav-toggle');
    const links = document.getElementById('nav-links');
    if (toggle && links) {
        toggle.addEventListener('click', () => {
            links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    // Active link
    setActiveNav();
}

export function setActiveNav() {
    const hash = location.hash || '#/';
    document.querySelectorAll('.navbar-links a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === hash) a.classList.add('active');
        if (hash.startsWith('#/worlds') || hash.startsWith('#/world')) {
            document.getElementById('nav-worlds')?.classList.add('active');
        }
    });
}
