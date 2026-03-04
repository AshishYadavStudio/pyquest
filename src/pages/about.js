// ==========================================
//  PyQuest — About Page
// ==========================================

export function renderAboutPage() {
    return `
    <section class="world-map">
      <div class="container" style="max-width: 800px;">
        <div class="section-heading animate-fade-in-up" style="margin-bottom: 40px;">
          <h2>📖 How PyQuest Works</h2>
          <p>Everything you need to know to get started</p>
        </div>

        <div class="glass-card animate-fade-in-up delay-1" style="padding: 40px; margin-bottom: 24px;">
          <h3 style="margin-bottom: 16px; display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 1.5rem;">🎯</span> The Quest System
          </h3>
          <p style="color: var(--text-secondary); line-height: 1.8;">
            PyQuest is organized into <strong style="color: var(--accent-cyan);">Worlds</strong>, each focusing on a different Python concept.
            Inside each world, you'll find <strong style="color: var(--accent-purple);">Levels</strong> — coding challenges that
            get progressively harder. Complete each challenge by writing correct Python code!
          </p>
        </div>

        <div class="glass-card animate-fade-in-up delay-2" style="padding: 40px; margin-bottom: 24px;">
          <h3 style="margin-bottom: 16px; display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 1.5rem;">🐍</span> How Code Runs
          </h3>
          <p style="color: var(--text-secondary); line-height: 1.8;">
            Your Python code runs <strong style="color: var(--accent-green);">entirely in your browser</strong> using Pyodide
            (CPython compiled to WebAssembly). No installation needed — just write code and hit Run!
            The first run may take a moment to load the Python engine.
          </p>
        </div>

        <div class="glass-card animate-fade-in-up delay-3" style="padding: 40px; margin-bottom: 24px;">
          <h3 style="margin-bottom: 16px; display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 1.5rem;">⚡</span> Earning XP
          </h3>
          <p style="color: var(--text-secondary); line-height: 1.8;">
            Each level has an <strong style="color: var(--accent-gold);">XP reward</strong>. When your code produces the
            correct output, you earn XP and the level is marked as complete. Your progress is saved
            in your browser — so you can continue where you left off!
          </p>
        </div>

        <div class="glass-card animate-fade-in-up delay-4" style="padding: 40px; margin-bottom: 24px;">
          <h3 style="margin-bottom: 16px; display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 1.5rem;">🗺️</span> The Five Worlds
          </h3>
          <div style="color: var(--text-secondary); line-height: 2;">
            <p><strong style="color: var(--accent-cyan);">🏔️ Variable Valley</strong> — Variables, data types, and basic I/O</p>
            <p><strong style="color: var(--accent-purple);">🔁 Loop Lagoon</strong> — For loops, while loops, and ranges</p>
            <p><strong style="color: var(--accent-green);">🌿 Function Forest</strong> — Functions, parameters, and return values</p>
            <p><strong style="color: var(--accent-pink);">🗂️ List Land</strong> — Lists, indexing, slicing, and methods</p>
            <p><strong style="color: var(--accent-gold);">🧠 Logic Lab</strong> — Conditionals, operators, and logical puzzles</p>
          </div>
        </div>

        <div style="text-align: center; margin-top: 40px;" class="animate-fade-in-up delay-5">
          <button class="btn btn-primary" onclick="location.hash='#/worlds'">
            🚀 Start Your Quest Now
          </button>
        </div>
      </div>
    </section>
  `;
}
