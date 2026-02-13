

## Player de Video Customizado (estilo VTurb)

Player limpo e elegante, coerente com o tom da pagina. Sem elementos de marketing (sem contadores falsos, sem pulsacao, sem urgencia).

---

### O que o player vai ter

**Funcionalidades principais:**
- Suporte a HLS (streaming .m3u8) e MP4 direto
- Autoplay mutado ao carregar a pagina
- Overlay "Clique para ouvir" discreto e elegante (sem pulsacao, sem vermelho)
- Controles customizados: play/pause, barra de progresso, volume, tela cheia
- Controles aparecem ao passar o mouse (hover) e somem apos alguns segundos
- Protecao basica: sem botao direito no video, sem download nativo

**O que NAO vai ter (coerencia com o projeto):**
- Sem contadores de pessoas assistindo
- Sem mensagens de urgencia ("nao feche a pagina")
- Sem pulsacao ou animacoes agressivas
- Sem cores chamativas no overlay

---

### Arquitetura tecnica

**Novo arquivo:** `src/components/VideoPlayer.tsx`
- Componente React autonomo e reutilizavel
- Recebe `src` (URL do video) como prop
- Detecta automaticamente se e HLS (.m3u8) ou MP4
- Usa a biblioteca `hls.js` para streaming HLS (carregada dinamicamente)
- Controles customizados construidos com HTML/CSS puro (Tailwind)
- Estado gerenciado com `useState` e `useRef`

**Dependencia nova:** `hls.js`
- Biblioteca padrao para streaming HLS no browser
- Leve (~60kb gzipped)
- Fallback nativo para Safari (que suporta HLS nativamente)

**Modificacao:** `src/pages/Index.tsx`
- Substituir o placeholder do video pelo componente `VideoPlayer`
- Passar a URL do video como prop (facil de trocar depois)

---

### Visual do player

- Moldura com `rounded` e `border-border` (igual ao placeholder atual)
- Overlay inicial: fundo semi-transparente escuro com icone de play e texto "Clique para assistir"
- Barra de controles na parte inferior: fundo gradiente escuro transparente
- Barra de progresso fina e elegante
- Botoes minimalistas (play, volume, fullscreen)
- Tudo em tons neutros, sem cores fortes

---

### Fluxo do usuario

1. Pagina carrega -> video inicia automaticamente mutado
2. Overlay discreto aparece: "Clique para assistir com som"
3. Usuario clica -> overlay some, som ativa, video continua de onde parou
4. Controles aparecem no hover, somem apos 3 segundos
5. Barra de progresso permite navegar no video
6. Botao de fullscreen disponivel

---

### Configuracao

Para trocar o video, basta alterar uma unica constante no `Index.tsx`:

```text
const VIDEO_URL = "https://seu-dominio.com/video.m3u8";
```

Funciona com:
- Links .m3u8 (HLS streaming, como o exemplo que voce enviou)
- Links .mp4 diretos
- Qualquer CDN ou storage (Cloudflare, S3, Google Cloud, etc.)

