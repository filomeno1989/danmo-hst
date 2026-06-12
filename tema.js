// danmo-hst | tema.js
// Tema consistente com danmo-billing e danmo-stock

const TEMAS = {
  navyAmbar: {
    nome: 'Navy & Âmbar',
    vars: {
      '--bg-primario':    '#0f172a',
      '--bg-secundario':  '#1e293b',
      '--bg-terciario':   '#334155',
      '--texto-primario': '#f8fafc',
      '--texto-secundario':'#94a3b8',
      '--acento':         '#f59e0b',
      '--acento-hover':   '#d97706',
      '--borda':          '#334155',
      '--card-bg':        '#1e293b',
      '--input-bg':       '#0f172a',
    }
  },
  oceanTeal: {
    nome: 'Ocean Teal',
    vars: {
      '--bg-primario':    '#0f1923',
      '--bg-secundario':  '#162230',
      '--bg-terciario':   '#1e3a4a',
      '--texto-primario': '#e2f4f0',
      '--texto-secundario':'#7fb3a8',
      '--acento':         '#14b8a6',
      '--acento-hover':   '#0d9488',
      '--borda':          '#1e3a4a',
      '--card-bg':        '#162230',
      '--input-bg':       '#0f1923',
    }
  },
  forestGreen: {
    nome: 'Forest Green',
    vars: {
      '--bg-primario':    '#0a1a0f',
      '--bg-secundario':  '#122318',
      '--bg-terciario':   '#1a3324',
      '--texto-primario': '#e8f5e9',
      '--texto-secundario':'#81c784',
      '--acento':         '#4caf50',
      '--acento-hover':   '#388e3c',
      '--borda':          '#1a3324',
      '--card-bg':        '#122318',
      '--input-bg':       '#0a1a0f',
    }
  },
  burgundyGold: {
    nome: 'Burgundy & Gold',
    vars: {
      '--bg-primario':    '#1a0a0f',
      '--bg-secundario':  '#2d1018',
      '--bg-terciario':   '#4a1828',
      '--texto-primario': '#fdf2f4',
      '--texto-secundario':'#c4849a',
      '--acento':         '#d4a017',
      '--acento-hover':   '#b8860b',
      '--borda':          '#4a1828',
      '--card-bg':        '#2d1018',
      '--input-bg':       '#1a0a0f',
    }
  },
  claro: {
    nome: 'Claro',
    vars: {
      '--bg-primario':    '#f1f5f9',
      '--bg-secundario':  '#ffffff',
      '--bg-terciario':   '#e2e8f0',
      '--texto-primario': '#0f172a',
      '--texto-secundario':'#64748b',
      '--acento':         '#f59e0b',
      '--acento-hover':   '#d97706',
      '--borda':          '#cbd5e1',
      '--card-bg':        '#ffffff',
      '--input-bg':       '#f8fafc',
    }
  }
};

const TEMA_KEY = 'danmo_hst_tema';

function aplicarTema(id) {
  const tema = TEMAS[id];
  if (!tema) return;
  const root = document.documentElement;
  Object.entries(tema.vars).forEach(([k, v]) => root.style.setProperty(k, v));
  localStorage.setItem(TEMA_KEY, id);

  document.querySelectorAll('.tema-btn').forEach(btn => {
    btn.classList.toggle('activo', btn.dataset.tema === id);
  });
}

function carregarTema() {
  const guardado = localStorage.getItem(TEMA_KEY) || 'navyAmbar';
  aplicarTema(guardado);
}

function renderSelectorTema(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = Object.entries(TEMAS).map(([id, t]) => `
    <button class="tema-btn" data-tema="${id}" onclick="aplicarTema('${id}')" title="${t.nome}">
      <span class="tema-preview" style="background:${t.vars['--acento']}"></span>
      ${t.nome}
    </button>
  `).join('');
  const actual = localStorage.getItem(TEMA_KEY) || 'navyAmbar';
  el.querySelectorAll('.tema-btn').forEach(btn => {
    btn.classList.toggle('activo', btn.dataset.tema === actual);
  });
}

document.addEventListener('DOMContentLoaded', carregarTema);
