// ==========================================
//  PyQuest — Levels List Page (within a world)
// ==========================================

import { getWorldById } from '../data/levels.js';
import { isLevelComplete } from '../engine/progress.js';

export function renderLevelsPage(worldId) {
    const world = getWorldById(worldId);
    if (!world) return '<p>World not found.</p>';

    const levelCards = world.levels.map((level, index) => {
        const completed = isLevelComplete(level.id);
        return `
      <div class="glass-card level-card ${completed ? 'completed' : ''} animate-fade-in-up delay-${index + 1}"
           onclick="location.hash='#/level/${level.id}'"
           id="level-card-${level.id}">
        <div class="level-number">${completed ? '✓' : index + 1}</div>
        <div class="level-card-info">
          <h4>${level.title}</h4>
          <p>${completed ? 'Completed ✨' : 'Not started'}</p>
        </div>
        <span class="level-card-xp">${level.xpReward} XP</span>
      </div>
    `;
    }).join('');

    return `
    <section class="levels-page">
      <div class="container">
        <button class="back-btn" onclick="location.hash='#/worlds'">
          ← Back to Worlds
        </button>
        <div class="levels-header animate-fade-in-up">
          <h2>${world.icon} ${world.name}</h2>
          <p>${world.description}</p>
        </div>
        <div class="levels-grid">
          ${levelCards}
        </div>
      </div>
    </section>
  `;
}
