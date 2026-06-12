// danmo-hst | auth.js
// Por agora: acesso automático como Admin (DM0069)
// Futuramente: login por código + senha com módulo de acessos

const SESSAO_KEY = 'danmo_hst_sessao';

const UTILIZADOR_TEMP = {
  codigo: 'DM0069',
  nome: 'Filomeno Alexandre',
  papel: 'admin'
};

function iniciarSessao() {
  sessionStorage.setItem(SESSAO_KEY, JSON.stringify(UTILIZADOR_TEMP));
}

function obterSessao() {
  const dados = sessionStorage.getItem(SESSAO_KEY);
  return dados ? JSON.parse(dados) : null;
}

function terminarSessao() {
  sessionStorage.removeItem(SESSAO_KEY);
  window.location.href = 'index.html';
}

function exigirAuth() {
  let sessao = obterSessao();
  if (!sessao) {
    iniciarSessao();
    sessao = obterSessao();
  }
  return sessao;
}

function obterCodigoUtilizador() {
  const sessao = obterSessao();
  return sessao ? sessao.codigo : 'DM0069';
}
