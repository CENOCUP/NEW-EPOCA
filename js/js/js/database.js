const KEY = 'cenocup_master_database';
let db = JSON.parse(localStorage.getItem(KEY)) || { atual: [], historico: [] };

function saveAll() {
    localStorage.setItem(KEY, JSON.stringify(db));
    location.reload();
}

function exportDB() {
    const blob = new Blob([JSON.stringify(db)], {type: "application/json"});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `cenocup_backup_${new Date().toLocaleDateString()}.json`;
    a.click();
}

function importDB() {
    const inp = document.createElement('input'); inp.type = 'file';
    inp.onchange = e => {
        const reader = new FileReader();
        reader.onload = ev => { db = JSON.parse(ev.target.result); saveAll(); };
        reader.readAsText(e.target.files[0]);
    };
    inp.click();
}
