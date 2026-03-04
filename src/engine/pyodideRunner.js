// ==========================================
//  PyQuest — Pyodide Python Runner
// ==========================================

let pyodideInstance = null;
let loadingPromise = null;

export async function loadPyodide() {
    if (pyodideInstance) return pyodideInstance;
    if (loadingPromise) return loadingPromise;

    loadingPromise = (async () => {
        try {
            // eslint-disable-next-line no-undef
            pyodideInstance = await globalThis.loadPyodide({
                indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/'
            });
            return pyodideInstance;
        } catch (err) {
            console.error('Failed to load Pyodide:', err);
            loadingPromise = null;
            throw err;
        }
    })();

    return loadingPromise;
}

export async function runPython(code) {
    try {
        const pyodide = await loadPyodide();

        // Redirect stdout/stderr
        pyodide.runPython(`
import sys
from io import StringIO
_stdout = StringIO()
_stderr = StringIO()
sys.stdout = _stdout
sys.stderr = _stderr
`);

        try {
            pyodide.runPython(code);
        } catch (e) {
            // Get any stderr output + the error message
            const stderr = pyodide.runPython('_stderr.getvalue()');
            // Reset
            pyodide.runPython('sys.stdout = sys.__stdout__; sys.stderr = sys.__stderr__');
            return {
                stdout: '',
                stderr: stderr || e.message,
                success: false
            };
        }

        const stdout = pyodide.runPython('_stdout.getvalue()');
        const stderr = pyodide.runPython('_stderr.getvalue()');

        // Reset
        pyodide.runPython('sys.stdout = sys.__stdout__; sys.stderr = sys.__stderr__');

        return {
            stdout: stdout.replace(/\n$/, ''), // trim trailing newline
            stderr: stderr,
            success: !stderr
        };
    } catch (err) {
        return {
            stdout: '',
            stderr: 'Failed to run Python: ' + err.message,
            success: false
        };
    }
}
