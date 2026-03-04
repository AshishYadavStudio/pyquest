// ==========================================
//  PyQuest — Confetti Effect
// ==========================================

export function launchConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;

    // Create a real canvas element inside the container
    let cvs = canvas.querySelector('canvas');
    if (!cvs) {
        cvs = document.createElement('canvas');
        cvs.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:300;';
        canvas.appendChild(cvs);
    }

    const ctx = cvs.getContext('2d');
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;

    const particles = [];
    const colors = ['#00e5ff', '#7c4dff', '#ff4081', '#ffd740', '#69f0ae', '#ff80ab', '#b388ff'];

    for (let i = 0; i < 120; i++) {
        particles.push({
            x: Math.random() * cvs.width,
            y: -10 - Math.random() * cvs.height * 0.5,
            w: 6 + Math.random() * 6,
            h: 4 + Math.random() * 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 4,
            vy: 2 + Math.random() * 4,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10,
            opacity: 1
        });
    }

    let frame;
    function animate() {
        ctx.clearRect(0, 0, cvs.width, cvs.height);
        let alive = false;

        for (const p of particles) {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.1;
            p.rotation += p.rotationSpeed;
            p.opacity -= 0.005;

            if (p.opacity > 0 && p.y < cvs.height + 20) {
                alive = true;
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rotation * Math.PI) / 180);
                ctx.globalAlpha = p.opacity;
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
                ctx.restore();
            }
        }

        if (alive) {
            frame = requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, cvs.width, cvs.height);
            cancelAnimationFrame(frame);
        }
    }

    animate();
}
