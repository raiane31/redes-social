const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais() {
    const res = fetch(url)
    const dados = await res.json()

  }

vizualizarInformacoesGlobais()
    