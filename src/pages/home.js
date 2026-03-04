// ==========================================
//  PyQuest — Home Page
// ==========================================

import { getXP } from '../engine/progress.js';
import { totalLevels, totalXPAvailable, worlds } from '../data/levels.js';
import { getCompletedLevels } from '../engine/progress.js';

export function renderHomePage() {
    const xp = getXP();
    const completed = getCompletedLevels().length;

    return `
    <section class="hero">
      <div class="hero-content">
        <div class="hero-badge animate-fade-in-up">
          <span>🎮</span> Learn Python the Fun Way
        </div>
        <h1 class="animate-fade-in-up delay-1">
          Master Python<br/>
          <span class="gradient-text">Through Gaming</span>
        </h1>
        <p class="hero-subtitle animate-fade-in-up delay-2">
          Embark on an epic quest through 5 worlds of coding challenges.
          Solve puzzles, write real Python, earn XP, and level up your skills — all in your browser!
        </p>
        <div class="hero-actions animate-fade-in-up delay-3">
          <button class="btn btn-primary" onclick="location.hash='#/worlds'">
            🚀 Start Quest
          </button>
          <button class="btn btn-secondary" onclick="location.hash='#/about'">
            📖 How It Works
          </button>
        </div>
        <div class="hero-stats animate-fade-in-up delay-4">
          <div class="hero-stat">
            <div class="hero-stat-value">${totalLevels}</div>
            <div class="hero-stat-label">Challenges</div>
          </div>
          <div class="hero-stat">
            <div class="hero-stat-value">${worlds.length}</div>
            <div class="hero-stat-label">Worlds</div>
          </div>
          <div class="hero-stat">
            <div class="hero-stat-value">${completed}/${totalLevels}</div>
            <div class="hero-stat-label">Completed</div>
          </div>
          <div class="hero-stat">
            <div class="hero-stat-value">${xp}</div>
            <div class="hero-stat-label">XP Earned</div>
          </div>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <div class="section-heading animate-fade-in-up">
          <h2>Why PyQuest?</h2>
          <p>A new way to learn Python that actually sticks</p>
        </div>
        <div class="features-grid">
          <div class="glass-card feature-card animate-fade-in-up delay-1">
            <div class="feature-icon" style="background: linear-gradient(135deg, rgba(0,229,255,0.15), rgba(0,184,212,0.15));">
              🎯
            </div>
            <h3>Game-Style Challenges</h3>
            <p>Each level is a puzzle. Write code, hit Run, and get instant pass/fail feedback just like a game.</p>
          </div>
          <div class="glass-card feature-card animate-fade-in-up delay-2">
            <div class="feature-icon" style="background: linear-gradient(135deg, rgba(124,77,255,0.15), rgba(179,136,255,0.15));">
              🐍
            </div>
            <h3>Real Python in Your Browser</h3>
            <p>No installs needed. Run real Python code powered by WebAssembly right in your browser.</p>
          </div>
          <div class="glass-card feature-card animate-fade-in-up delay-3">
            <div class="feature-icon" style="background: linear-gradient(135deg, rgba(255,215,64,0.15), rgba(255,171,0,0.15));">
              ⚡
            </div>
            <h3>Earn XP & Level Up</h3>
            <p>Complete challenges to earn experience points. Track your progress across all worlds.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
