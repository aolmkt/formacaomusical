

## Atualizar URL do Video

### Mudanca

**Arquivo:** `src/pages/Index.tsx`

Atualizar a constante `VIDEO_URL` na linha 5:

- De: `https://seu-dominio.com/video.m3u8`
- Para: `https://cdn.jsdelivr.net/gh/aolcdn/formacaocnd@b6afa9aa19c72f5f3a0d3a8653864b62df222a97/playlist.m3u8`

Nenhuma outra mudanca necessaria. O player ja suporta HLS (.m3u8) e vai carregar o video automaticamente com autoplay mutado.

