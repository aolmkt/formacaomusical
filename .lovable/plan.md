

## Ajustes de SEO, Favicon, Open Graph e Autoplay

### 1. Favicon com emoji/texto

Como nao ha uma imagem customizada, vou criar um favicon SVG simples com uma nota musical (icone). Isso funciona em todos os navegadores modernos e fica profissional.

- Criar `public/favicon.svg` com um icone de nota musical
- Atualizar `index.html` para referenciar o novo favicon SVG

### 2. Imagem de compartilhamento (Open Graph)

Atualmente as meta tags `og:image` e `twitter:image` apontam para uma imagem generica do Lovable. Vou:

- Criar uma imagem OG usando um servico de geracao dinamica (og-image via URL) com o titulo do curso, ou criar um SVG estilizado
- Como SVG nao e suportado como og:image pelas redes sociais, a melhor opcao e usar um servico como `https://via.placeholder.com` temporariamente, ou manter a imagem atual ate voce fornecer uma imagem propria
- Por ora, vou adicionar as meta tags corretas com `og:url`, `og:locale`, e melhorar a descricao

### 3. SEO completo no `index.html`

Adicionar/ajustar as seguintes meta tags:

- `og:url` com a URL publicada
- `og:locale` como `pt_BR`
- `twitter:title` e `twitter:description`
- `<link rel="canonical">` apontando para a URL publicada
- Tag `theme-color` para navegadores mobile

### 4. Autoplay com som ao primeiro toque

Navegadores modernos bloqueiam autoplay com som. A estrategia sera:

- Manter o autoplay mutado atual (ja funciona)
- Adicionar um listener global de interacao (`click`, `touchstart`, `scroll`) na pagina
- Ao detectar a primeira interacao, desmutar o video e reiniciar do começo automaticamente
- Remover o listener apos a primeira interacao para nao repetir
- O overlay visual continua como fallback caso o usuario nao interaja com outra parte da pagina

### Arquivos modificados

| Arquivo | Mudanca |
|---|---|
| `public/favicon.svg` | Novo - favicon com nota musical |
| `index.html` | Favicon, meta tags SEO, og:locale, canonical, theme-color |
| `src/components/VideoPlayer.tsx` | Listener de primeira interacao para desmutar automaticamente |

### Detalhes tecnicos

**favicon.svg**: Um SVG simples com fundo escuro e simbolo de nota musical em branco, referenciado como `<link rel="icon" type="image/svg+xml" href="/favicon.svg">`.

**VideoPlayer.tsx**: Adicionar `useEffect` que escuta `click`/`touchstart`/`scroll` no `document`. Na primeira interacao, se o video ainda estiver mutado e o overlay visivel, desmuta, reinicia do zero e esconde o overlay. O listener e removido apos disparar uma vez.

