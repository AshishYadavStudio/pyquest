// ==========================================
//  PyQuest — Progress Ring Component
// ==========================================

export function renderProgressRing(percent, color = 'var(--accent-cyan)', size = 48) {
    const radius = (size - 8) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;

    return `
    <svg class="progress-ring" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <circle class="progress-ring-circle-bg" cx="${size / 2}" cy="${size / 2}" r="${radius}" />
      <circle class="progress-ring-circle" cx="${size / 2}" cy="${size / 2}" r="${radius}"
        stroke="${color}"
        stroke-dasharray="${circumference}"
        stroke-dashoffset="${offset}" />
      <text x="${size / 2}" y="${size / 2}" text-anchor="middle" dominant-baseline="central"
        fill="${color}" font-size="${size * 0.22}" font-family="var(--font-mono)" font-weight="700">
        ${percent}%
      </text>
    </svg>
  `;
}
