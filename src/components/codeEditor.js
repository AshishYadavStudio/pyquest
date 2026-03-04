// ==========================================
//  PyQuest — Code Editor Component
// ==========================================

import { runPython } from '../engine/pyodideRunner.js';

export function renderCodeEditor(starterCode = '') {
    const lines = (starterCode.match(/\n/g) || []).length + 10;
    const lineNums = Array.from({ length: lines }, (_, i) => i + 1).join('\n');

    return `
    <div class="code-editor-wrapper">
      <div class="code-editor-header">
        <div class="dots">
          <span class="dot dot-red"></span>
          <span class="dot dot-yellow"></span>
          <span class="dot dot-green"></span>
        </div>
        <span>solution.py</span>
      </div>
      <div class="code-editor-body">
        <div class="line-numbers" id="line-numbers">${lineNums}</div>
        <textarea class="code-textarea" id="code-textarea"
          spellcheck="false"
          placeholder="# Write your Python code here..."
        >${starterCode}</textarea>
      </div>
    </div>
  `;
}

export function renderOutputConsole() {
    return `
    <div class="output-console" id="output-console">
      <div class="output-header">
        <span>📟</span> Output
      </div>
      <div class="output-body" id="output-body">
        <span style="color: var(--text-muted)">Run your code to see output here...</span>
      </div>
    </div>
  `;
}

export function initCodeEditor() {
    const textarea = document.getElementById('code-textarea');
    const lineNumbers = document.getElementById('line-numbers');

    if (!textarea || !lineNumbers) return;

    // Sync line numbers
    function updateLineNumbers() {
        const lines = textarea.value.split('\n').length;
        const maxLines = Math.max(lines, 10);
        lineNumbers.textContent = Array.from({ length: maxLines }, (_, i) => i + 1).join('\n');
    }

    textarea.addEventListener('input', updateLineNumbers);
    textarea.addEventListener('scroll', () => {
        lineNumbers.scrollTop = textarea.scrollTop;
    });

    // Tab key support
    textarea.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            textarea.value = textarea.value.substring(0, start) + '    ' + textarea.value.substring(end);
            textarea.selectionStart = textarea.selectionEnd = start + 4;
            updateLineNumbers();
        }
    });

    updateLineNumbers();
}

export async function executeCode(callback) {
    const textarea = document.getElementById('code-textarea');
    const outputBody = document.getElementById('output-body');
    const runBtn = document.getElementById('run-btn');

    if (!textarea || !outputBody) return;

    const code = textarea.value;

    // Show loading state
    if (runBtn) runBtn.classList.add('loading');
    outputBody.className = 'output-body';
    outputBody.textContent = '⏳ Running Python...';

    try {
        const result = await runPython(code);

        if (result.success) {
            outputBody.className = 'output-body success';
            outputBody.textContent = result.stdout || '(No output)';
        } else {
            outputBody.className = 'output-body error';
            outputBody.textContent = result.stderr || result.stdout || 'Unknown error';
        }

        if (callback) callback(result);
    } catch (err) {
        outputBody.className = 'output-body error';
        outputBody.textContent = '❌ Error: ' + err.message;
    } finally {
        if (runBtn) runBtn.classList.remove('loading');
    }
}
