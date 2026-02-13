

## Ajuste de Layout Desktop — Primeira Dobra

### Problema

No desktop, o hero tem `lg:py-40` (160px de padding em cima e embaixo), o que empurra o video para fora da primeira dobra. O visitante ve apenas o titulo com um oceano de espaco vazio. O video aparece cortado la embaixo.

### Solucao

Reorganizar os espacamentos para que **titulo + video caibam juntos na primeira dobra** do desktop (viewport ~1080px de altura).

### Mudancas no arquivo `src/pages/Index.tsx`

**Secao Hero (linha 19):**
- De: `py-16 md:py-24 lg:py-40`
- Para: `py-16 md:py-20 lg:py-24`
- Reduz o padding vertical no desktop para dar espaco ao video

**Secao Video (linha 28):**
- De: `py-10 md:py-16`
- Para: `py-6 md:py-10 lg:py-12`
- Aproxima o video do titulo sem colar

**Secao Texto (linha 35):**
- De: `py-12 md:py-16 lg:py-20`
- Para: `py-12 md:py-16 lg:py-20` (mantem — ja esta correto)

### Resultado esperado

Na primeira dobra do desktop:
- Titulo centralizado com respiro adequado (mas sem excesso)
- Video visivel inteiro ou quase inteiro logo abaixo
- Convite visual natural para rolar e ler o texto

Nenhuma mudanca de texto, estrutura ou componentes. Apenas espacamento vertical.
