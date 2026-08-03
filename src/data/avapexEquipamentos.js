const nomes = [
  'Caminhão Basculante',
  'Caminhão Munck',
  'Carreta Prancha',
  'Caminhão Comboio',
  'Caminhão Pipa',
  'Carreta Carga Seca',
  'Caminhão ¾ com cabine suplementar',
  'Caminhão Truck Carga Seca',
  'Carregadeira',
  'Escavadeira',
  'Retro Escavadeira',
  'Empilhadeira',
  'Transpaleteira',
  'Trator de esteira',
  'Trator de pneus',
  'Manipuladores',
  'Mini Escavadeira',
]

const slugify = (nome) =>
  nome
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export const avapexEquipamentos = nomes.map((nome) => ({ slug: slugify(nome), nome }))
