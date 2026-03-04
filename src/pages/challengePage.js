// ==========================================
//  PyQuest — Challenge Page (Game Core)
// ==========================================

import { getLevelById, worlds } from '../data/levels.js';
import { isLevelComplete, markLevelComplete, addXP } from '../engine/progress.js';
import { renderCodeEditor, renderOutputConsole, initCodeEditor, executeCode } from '../components/codeEditor.js';
import { updateXPDisplay } from '../components/navbar.js';
import { launchConfetti } from '../engine/confetti.js';

export function renderChallengePage(levelId) {
    const data = getLevelById(levelId);
    if (!data) return '<p>Level not found.</p>';

    const { world, level } = data;
    const completed = isLevelComplete(level.id);

    const hintsHtml = level.hints.map(h => `<li>${h}</li>`).join('');

    // Find next level
    const currentIndex = world.levels.findIndex(l => l.id === levelId);
    const nextLevel = world.levels[currentIndex + 1];
    // Find next world
    const worldIndex = worlds.findIndex(w => w.id === world.id);
    const nextWorld = worlds[worldIndex + 1];

    return `
    <div class="challenge-page">
      <div class="challenge-info animate-slide-left">
        <button class="back-btn" onclick="location.hash='#/world/${world.id}'">
          ← Back to ${world.name}
        </button>
        <div class="challenge-title">
          ${world.icon} ${level.title}
          <span class="challenge-xp-badge">+${level.xpReward} XP</span>
          ${completed ? '<span class="badge" style="color: var(--accent-green); border-color: rgba(105,240,174,0.3);">✓ Completed</span>' : ''}
        </div>
        <div class="challenge-description">${level.description}</div>

        <div class="challenge-section">
          <h3>📋 Expected Output</h3>
          <div class="expected-output">${level.expectedOutput}</div>
        </div>

        <div class="challenge-section">
          <h3>💡 Hints</h3>
          <ul class="hints-list">${hintsHtml}</ul>
        </div>
      </div>

      <div class="editor-panel animate-slide-right">
        ${renderCodeEditor(level.starterCode)}

        <div class="editor-actions">
          <button class="btn btn-success run-btn" id="run-btn" onclick="window.__pyquestRun()">
            <span class="run-text">▶ Run Code</span>
            <span class="spinner"></span>
          </button>
          <button class="btn btn-secondary reset-btn" onclick="window.__pyquestReset()">
            ↺ Reset
          </button>
        </div>

        ${renderOutputConsole()}
      </div>
    </div>

    <div id="success-overlay-container"></div>
  `;
}

export function initChallengePage(levelId) {
    const data = getLevelById(levelId);
    if (!data) return;

    const { world, level } = data;

    initCodeEditor();

    // Run handler
    window.__pyquestRun = () => {
        executeCode((result) => {
            if (result.success && normalizeOutput(result.stdout) === normalizeOutput(level.expectedOutput)) {
                if (!isLevelComplete(level.id)) {
                    markLevelComplete(level.id);
                    addXP(level.xpReward);
                    updateXPDisplay();
                    showSuccessModal(level, world);
                    launchConfetti();
                } else {
                    // Already completed, just show output
                    const outputBody = document.getElementById('output-body');
                    if (outputBody) {
                        outputBody.textContent = result.stdout + '\n\n✅ Correct! (Already completed)';
                    }
                }
            } else if (result.success) {
                const outputBody = document.getElementById('output-body');
                if (outputBody) {
                    outputBody.className = 'output-body error';
                    outputBody.textContent = `Your output:\n${result.stdout}\n\nExpected:\n${level.expectedOutput}\n\n❌ Not quite — check your output carefully!`;
                }
            }
        });
    };

    // Reset handler
    window.__pyquestReset = () => {
        const textarea = document.getElementById('code-textarea');
        const outputBody = document.getElementById('output-body');
        if (textarea) textarea.value = level.starterCode;
        if (outputBody) {
            outputBody.className = 'output-body';
            outputBody.innerHTML = '<span style="color: var(--text-muted)">Run your code to see output here...</span>';
        }
    };
}

function normalizeOutput(str) {
    return str.trim().replace(/\r\n/g, '\n').replace(/\r/g, '\n');
}

function showSuccessModal(level, world) {
    const container = document.getElementById('success-overlay-container');
    if (!container) return;

    // Find next level
    const currentIndex = world.levels.findIndex(l => l.id === level.id);
    const nextLevel = world.levels[currentIndex + 1];
    const worldIndex = worlds.findIndex(w => w.id === world.id);
    const nextWorld = worlds[worldIndex + 1];

    let nextBtnHtml;
    if (nextLevel) {
        nextBtnHtml = `<button class="btn btn-primary" onclick="location.hash='#/level/${nextLevel.id}'">Next Challenge →</button>`;
    } else if (nextWorld) {
        nextBtnHtml = `<button class="btn btn-primary" onclick="location.hash='#/world/${nextWorld.id}'">Next World: ${nextWorld.name} →</button>`;
    } else {
        nextBtnHtml = `<button class="btn btn-primary" onclick="location.hash='#/worlds'">🏆 All Worlds Complete!</button>`;
    }

    container.innerHTML = `
    <div class="success-overlay" onclick="this.remove()">
      <div class="glass-card success-modal" onclick="event.stopPropagation()">
        <div class="trophy">🏆</div>
        <h2>Level Complete!</h2>
        <p>${level.title} conquered!</p>
        <div class="xp-earned">+${level.xpReward} XP</div>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
          ${nextBtnHtml}
          <button class="btn btn-secondary" onclick="document.querySelector('.success-overlay').remove()">Stay Here</button>
        </div>
      </div>
    </div>
  `;
}

// Cleanup
export function cleanupChallengePage() {
    delete window.__pyquestRun;
    delete window.__pyquestReset;
}
