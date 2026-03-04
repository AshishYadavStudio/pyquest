// ==========================================
//  PyQuest — World Map Page
// ==========================================

import { worlds } from '../data/levels.js';
import { getWorldProgress } from '../engine/progress.js';
import { renderProgressRing } from '../components/progressRing.js';

export function renderWorldMapPage() {
    const worldCards = worlds.map((world, index) => {
        const progress = getWorldProgress(world.levels);
        return `
      <div class="glass-card world-card ${world.colorClass} animate-fade-in-up delay-${index + 1}"
           onclick="location.hash='#/world/${world.id}'"
           id="world-card-${world.id}">
        <div class="world-card-header">
          <span class="world-card-icon">${world.icon}</span>
          ${renderProgressRing(progress.percent, world.accentColor)}
        </div>
        <h3>${world.name}</h3>
        <p>${world.description}</p>
        <div class="world-card-footer">
          <span class="world-card-levels">${progress.done}/${progress.total} levels completed</span>
          <span class="badge" style="color: ${world.accentColor}; border-color: ${world.accentColor}30;">
            ${world.levels.reduce((s, l) => s + l.xpReward, 0)} XP
          </span>
        </div>
      </div>
    `;
    }).join('');

    return `
    <section class="world-map">
      <div class="container">
        <div class="section-heading animate-fade-in-up">
          <h2>🗺️ Choose Your World</h2>
          <p>Each world teaches you a different Python superpower</p>
        </div>
        <div class="worlds-grid">
          ${worldCards}
        </div>
      </div>
    </section>
  `;
}
