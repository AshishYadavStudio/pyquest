// ==========================================
//  PyQuest — Progress Tracker (localStorage)
// ==========================================

const STORAGE_KEY = 'pyquest_progress';

function getStore() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : { xp: 0, completed: [] };
    } catch {
        return { xp: 0, completed: [] };
    }
}

function saveStore(store) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

export function getXP() {
    return getStore().xp;
}

export function addXP(amount) {
    const store = getStore();
    store.xp += amount;
    saveStore(store);
    return store.xp;
}

export function isLevelComplete(levelId) {
    return getStore().completed.includes(levelId);
}

export function markLevelComplete(levelId) {
    const store = getStore();
    if (!store.completed.includes(levelId)) {
        store.completed.push(levelId);
        saveStore(store);
    }
}

export function getCompletedLevels() {
    return getStore().completed;
}

export function getWorldProgress(worldLevels) {
    const completed = getCompletedLevels();
    const done = worldLevels.filter(l => completed.includes(l.id)).length;
    return { done, total: worldLevels.length, percent: Math.round((done / worldLevels.length) * 100) };
}

export function resetProgress() {
    localStorage.removeItem(STORAGE_KEY);
}
