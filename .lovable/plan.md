

## Reiniciar video ao clicar no overlay

### Problema

Quando o usuario clica em "Clique para assistir com som", o video continua de onde estava (ja rodando mutado). O esperado e que o video reinicie do comeco com som.

### Mudanca

**Arquivo:** `src/components/VideoPlayer.tsx`

Na funcao `handleOverlayClick`, adicionar `video.currentTime = 0` antes de dar play, para que o video volte ao inicio quando o usuario clicar no overlay.

Linha aproximada 114, dentro de `handleOverlayClick`:

```
const handleOverlayClick = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    setIsMuted(false);
    setShowOverlay(false);
    video.currentTime = 0;  // <-- adicionar esta linha
    video.play().catch(() => {});
    resetHideTimer();
};
```

Nenhuma outra mudanca necessaria. Uma unica linha resolve.

