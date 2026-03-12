function askAdmin() {
    if(prompt("Senha de Acesso:") === '123') {
        document.getElementById('admin-panel').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
        renderEditor();
    }
}

function closeAdmin() { 
    document.getElementById('admin-panel').style.display = 'none'; 
    document.getElementById('overlay').style.display = 'none'; 
}

function renderEditor() {
    // Renderiza linhas de técnicos
    document.getElementById('editor-rows').innerHTML = db.atual.map((j, i) => `
        <div class="edit-row">
            <input type="text" value="${j.tecnico}" onchange="db.atual[${i}].tecnico=this.value">
            <input type="text" value="${j.foto||''}" onchange="db.atual[${i}].foto=this.value" placeholder="URL Foto">
            <input type="number" value="${j.v||0}" onchange="db.atual[${i}].v=parseInt(this.value)">
            <input type="number" value="${j.e||0}" onchange="db.atual[${i}].e=parseInt(this.value)">
            <input type="number" value="${j.d||0}" onchange="db.atual[${i}].d=parseInt(this.value)">
            <input type="number" value="${j.gp||0}" onchange="db.atual[${i}].gp=parseInt(this.value)">
            <input type="number" value="${j.gc||0}" onchange="db.atual[${i}].gc=parseInt(this.value)">
        </div>`).join('');

    // Renderiza nomes das épocas passadas
    document.getElementById('epoch-name-editor').innerHTML = db.historico.map((h, i) => `
        <input type="text" value="${h.nome}" onchange="db.historico[${i}].nome=this.value">
    `).join('');
}
